import React from "react";
import { useDevice } from 'vtex.device-detector';
import { Link } from 'vtex.render-runtime';
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';
import { botonWhatsappSchema } from "../../schema/botonWhatsappSchema";

const CSS_HANDLES = [
  'whatsappBtn__container',
  'whatsappBtn__Izquierda',
  'whatsappBtn__Derecha',
  'whatsappBtn__icon',
  'whatsappBtn__textContainer',
  'whatsappBtn__textContainerIzquierda',
  'whatsappBtn__textContainerDerecha',
  'whatsappBtn__text',
  'whatsappBtn__number',
  'whatsappBtn__numberIzquierda',
  'whatsappBtn__numberDerecha'
];

export default function BotonWhatsapp({
  iconoDesktop = 'https://panamericana.vteximg.com.br/arquivos/icono-whatsapp-pan.png',
  iconoMobile = 'https://panamericana.vteximg.com.br/arquivos/icono-whatsapp-pan.png',
  slug = 'https://api.whatsapp.com/send?phone=5713649333',
  textoBoton = 'Asesoría de Compra',
  colorTexto = '#ffffff',
  colorFondo = '#00d954',
  posicionBoton = 'Izquierda',
  tipoConfiguracion = {
    posiblesConfiguraciones: 'Activacion Manual',
    estaActivo: true
  }
}:BotonWhatsappProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTOR
  const { device } = useDevice();

  //JSX
  if(tipoConfiguracion.posiblesConfiguraciones === 'Activacion Manual') {
    if(tipoConfiguracion.estaActivo) {
      return (
        <Link
          to={slug}
          target='_blank'
          className={`${handles.whatsappBtn__container} ${handles[`whatsappBtn__${posicionBoton}`]}`}
          style={{
            backgroundColor: colorFondo
          }}
        >
          {/* ICONO */}
          <img
            alt="Asesoria Whatsapp"
            src={device === 'phone' ? iconoMobile : iconoDesktop}
            className={handles.whatsappBtn__icon}
            style={{
              backgroundColor: colorFondo,
            }}
          />
          {/* TEXTO */}
          <div
            className={`${handles.whatsappBtn__textContainer} ${handles[`whatsappBtn__textContainer${posicionBoton}`]}`}
            style={{
              backgroundColor: colorFondo,
            }}
          >
            <p
              className={handles.whatsappBtn__text}
              style={{
                color: colorTexto
              }}
            >
              {textoBoton}
            </p>
          </div>
          {/* NUMERO */}
          <p className={`${handles.whatsappBtn__number} ${handles[`whatsappBtn__number${posicionBoton}`]}`}>1</p>
        </Link>
      )
    }
  } else {
    if(tipoConfiguracion.fechaInicio && tipoConfiguracion.fechaFinal) {
      const ahora = new Date();
      const inputFechaInicio = new Date(tipoConfiguracion.fechaInicio);
      const inputFechaFinal = new Date(tipoConfiguracion.fechaFinal);
      if (ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
        return (
          <></>
        )
      }
    }
  }

  return null
}

BotonWhatsapp.schema = botonWhatsappSchema;

