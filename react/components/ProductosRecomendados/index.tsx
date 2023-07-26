import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { Drawer, DrawerHeader, DrawerCloseButton } from 'vtex.store-drawer';
import useValidacionProdRecomendados from '../../hooks/useValidacionProdRecomendados';
import ContenidoAgrupacionProductos from './ContenidoAgrupacionProductos';
import ProductosRecomendadosIcon from './ProductosRecomendadosIcon';
import { configuracionDefaultTest } from '../../typings/informacionGeneralComp';
import { productosRecomendadosSchema } from '../../schema/productosRecomendadosSchema';
import ListaPestanas from './ListaPestanas';
import './styles.css';

const CSS_HANDLES = [
  'productosRecomendados__drawerTriggerCloseBtn',
  'productosRecomendados__displayNone',
  'productosRecomendados__triggerIcon',
  'productosRecomendados__headerContainer',
  'productosRecomendados__headerImageContainer',
  'productosRecomendados__headerImage',
  'productosRecomendados__headerCloseButton',
  'productosRecomendados__contentContainer',
  'productosRecomendados__titleContent',
  'productosRecomendados__tabsContainer',
  'productosRecomendados__tabsListContainer',
  'productosRecomendados__tabsItem',
  'productosRecomendados__tabsItemSelected',
]

export default function ProductosRecomendados({
  configuracionDefault = configuracionDefaultTest,
  configuracionesPersonalizadas = [],
  ProductListContext
}:ProductosRecomendadosProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //VALIDACION PRODUCTOS RECOMENDADOS
  const {
    configuracionActualProductos,
    agrupacionActualProductos,
    isTriggerVisible,
    handleTabChange,
    handleCloseTrigger
  } = useValidacionProdRecomendados({configuracionDefault, configuracionesPersonalizadas})

  //JSX
  return(
    <>
      <div
        className={`${handles.productosRecomendados__drawerTriggerCloseBtn} ${isTriggerVisible ? undefined : handles.productosRecomendados__displayNone}`}
        onClick={() => handleCloseTrigger(configuracionActualProductos?.id || '')}
      >
        x
      </div>
      <Drawer
        header={
          <DrawerHeader>
            <header className={handles.productosRecomendados__headerContainer}>
              <div className={handles.productosRecomendados__headerImageContainer}>
                <img
                  className={handles.productosRecomendados__headerImage}
                  alt='Header image'
                  src={configuracionActualProductos?.imagenHeader}
                />
              </div>
              <div className={handles.productosRecomendados__headerCloseButton}>
                <DrawerCloseButton />
              </div>
            </header>
          </DrawerHeader>
        }
        customIcon={
          <ProductosRecomendadosIcon
            isTriggerVisible={isTriggerVisible}
          />
        }
      >
        <main className={handles.productosRecomendados__contentContainer}>
          {/* TITULO CONTENTIDO */}
          <h4 className={handles.productosRecomendados__titleContent}>
            {configuracionActualProductos?.tituloContenido}
          </h4>

          {/* PESTAÑAS */}
          <ListaPestanas
            configuracionActualProductos={configuracionActualProductos}
            agrupacionActualProductos={agrupacionActualProductos}
            handleTabChange={handleTabChange}
          />

          {/* CONTENIDO */}
          <ContenidoAgrupacionProductos
            agrupacionActualProductos={agrupacionActualProductos}
            ProductListContext={ProductListContext}
          />
        </main>
      </Drawer>
    </>
  )
}

ProductosRecomendados.schema = productosRecomendadosSchema;


