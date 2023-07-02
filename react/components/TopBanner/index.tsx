import React from 'react';
import { useDevice } from 'vtex.device-detector';
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
import useAnalisisTemporizador from '../../hooks/useAnalisisTemporizador';
import './styles.css';
import { topBannerSchema } from '../../schema/topBannerSchema';

const CSS_HANDLES = [
  'topBanner__generalContainer',
  'topBanner__linkContainer',
  'topBanner__temporizadorContainer',
  'temporizador__titulo',
  'temporizador__tiempoContenedor',
  'temporizador__tiempoCasilla',
  'tiempoCasilla__numero',
  'tiempoCasilla__descripcion',
]


export default function TopBanner({
  imagenDesktopTablet = 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/64241351-bcaf-42a3-9728-4c5954ab1193___8493d020b71856fdaf51df66356f9dee.jpg',
  imagenMobile = 'https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/09adf0a8-6e30-47c3-9f5b-4283e6498085___04815619ac3a401c0139efd880d4e21a.jpg',
  slug = '/',
  tituloTemporizador = 'TERMINA EN:',
  colorPlantilla = '#fff',
  colorTiempo = '#000',
  fechaInicio = '2023-06-14T17:19:00.000Z',
  fechaFinal = '2023-06-17T17:19:00.000Z'
}:TopBannerProps) {

  //DETECTOR DE DISPOSITIVO
  const { device } = useDevice();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //INFORMACION TEMPORIZADOR
  const {
    isBannerActive,
    loading,
    dias,
    horas,
    minutos,
    segundos
  } = useAnalisisTemporizador({fechaInicio, fechaFinal})
  loading

  //JSX
  if(isBannerActive) {
    return (
      <div className={handles.topBanner__generalContainer}>
        <Link
          to={slug}
          className={handles.topBanner__linkContainer}
        >
          <img
            alt='Oferta Contrarreloj'
            src={device === 'phone' ? imagenMobile : imagenDesktopTablet}
          />

          <div className={handles.topBanner__temporizadorContainer}>
            <div className={handles.temporizador__titulo}>
              <p style={{color: colorPlantilla}}>{tituloTemporizador}</p>
            </div>

            <div className={handles.temporizador__tiempoContenedor}>

              {/* DIAS */}
              {
                dias > 0 &&
                <div className={handles.temporizador__tiempoCasilla}>
                  <p
                    className={handles.tiempoCasilla__numero}
                    style={{backgroundColor: colorPlantilla, color: colorTiempo}}
                  >
                      {dias < 10 ? `0${dias}` : dias}
                  </p>
                  <p
                    className={handles.tiempoCasilla__descripcion}
                    style={{color: colorPlantilla}}
                  >
                    DÍAS
                  </p>
                </div>
              }
              {/* HORAS */}
              <div className={handles.temporizador__tiempoCasilla}>
                <p
                  className={handles.tiempoCasilla__numero}
                  style={{backgroundColor: colorPlantilla, color: colorTiempo}}
                >
                    {horas < 10 ? `0${horas}` : horas}
                </p>
                <p
                  className={handles.tiempoCasilla__descripcion}
                  style={{color: colorPlantilla}}
                >
                  HORAS
                </p>
              </div>
              {/* MINUTOS */}
              <div className={handles.temporizador__tiempoCasilla}>
                <p
                  className={handles.tiempoCasilla__numero}
                  style={{backgroundColor: colorPlantilla, color: colorTiempo}}
                >
                    {minutos < 10 ? `0${minutos}` : minutos}
                </p>
                <p
                  className={handles.tiempoCasilla__descripcion}
                  style={{color: colorPlantilla}}
                >
                  MINUTOS
                </p>
              </div>
              {/* SEGUNDOS */}
              <div className={handles.temporizador__tiempoCasilla}>
                <p
                  className={handles.tiempoCasilla__numero}
                  style={{backgroundColor: colorPlantilla, color: colorTiempo}}
                >
                    {segundos < 10 ? `0${segundos}` : segundos}
                </p>
                <p
                  className={handles.tiempoCasilla__descripcion}
                  style={{color: colorPlantilla}}
                >
                  SEGUNDOS
                </p>
              </div>

            </div>
          </div>

        </Link>
      </div>
    )
  }

  return null;
}


TopBanner.schema = topBannerSchema;

