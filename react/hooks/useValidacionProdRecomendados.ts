import { useEffect, useState } from 'react';
import { useRuntime, canUseDOM } from 'vtex.render-runtime';

export default function useValidacionProdRecomendados({
  configuracionDefault,
  configuracionesPersonalizadas
}:useValidacionProdRecomendadosProps) {

  //VTEX RUNTIME
  const { route } = useRuntime();

  //DOM VALIDATION
  const dataSessionStorage = canUseDOM
    ? window.sessionStorage.getItem('validacionProductosRecomendados')
    : null

  //STATES
  const [configuracionActualProductos, setConfiguracionActualProductos] = useState<ConfiguracionDeafultProductos | ConfiguracionPersonalizadaProductos | null>(null);
  const [agrupacionActualProductos, setAgrupacionActualProductos] = useState<AgrupacionProductos | null>(null);
  const [isTriggerVisible, setIsTriggerVisible] = useState<boolean>(false);

  //EFFECTS
  useEffect(() => {
    const routePath = route.path[0] === '/' ? route.path : `/${route.path}`
    const validacionPersonalizados = configuracionesPersonalizadas.filter((config) => {
      return config.validacionUrl === routePath
    })

    if(validacionPersonalizados.length > 0) {
      setConfiguracionActualProductos(validacionPersonalizados[0])
      setAgrupacionActualProductos(validacionPersonalizados[0].pestañas[0])
    } else {
      setConfiguracionActualProductos(configuracionDefault)
      setAgrupacionActualProductos(configuracionDefault.pestañas[0])
    }
  },[route])

  useEffect(() => {
    if(dataSessionStorage) {
      if(configuracionActualProductos) {
        const listaAgrupacionesProd = JSON.parse(dataSessionStorage)

        if(!listaAgrupacionesProd.includes(configuracionActualProductos.id)) {
          setIsTriggerVisible(true);
        }
      }
    } else {
      window.sessionStorage.setItem('validacionProductosRecomendados', JSON.stringify([]))
      setIsTriggerVisible(true);
    }
  },[dataSessionStorage, configuracionActualProductos])

  //METHODS
  const handleTabChange = (agrupacionProductos:AgrupacionProductos) => {
    if(agrupacionProductos === agrupacionActualProductos) {
      return
    }
    setAgrupacionActualProductos(agrupacionProductos);
  }
  const handleCloseTrigger = (id:string) => {
    if(dataSessionStorage) {
      const listaAgrupacionesProd = JSON.parse(dataSessionStorage);
      listaAgrupacionesProd.push(id)

      window.sessionStorage.setItem('validacionProductosRecomendados', JSON.stringify(listaAgrupacionesProd));
    }

    setIsTriggerVisible(false);
  }

  //RETURN
  return {
    configuracionActualProductos,
    agrupacionActualProductos,
    isTriggerVisible,
    handleTabChange,
    handleCloseTrigger
  }
}

