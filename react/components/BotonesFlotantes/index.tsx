import React, { useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
import { Link } from "vtex.render-runtime";
import './styles.css';
import { botonesFlotantesSchema } from "../../schema/botonesFlotantesSchema";

const CSS_HANDLES = [
  'botonesGeneral__listContainer',
  'botonesGeneral__itemContainer',
  'botonesGeneral__itemCloseButton',
  'botonesGeneral__itemCloseButtonX',
  'botonesGeneral__itemLink',
  'botonesGeneral__itemImage',
  'botonesIzquiera__listContainer',
  'botonesDerecha__listContainer',
  'botonesInferior__listContainer'
]

export default function BotonesFlotantes({
  botonesIzquierda = [],
  botonesDerecha = [],
  botonesInferior = []
}:BotonesFlotantesProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [botonesIzquierdaActuales] = useState<BotonFlotante[]>(ValidacionBotones(botonesIzquierda));
  const [botonesDerechaActuales] = useState<BotonFlotante[]>(ValidacionBotones(botonesDerecha));
  const [botonesInferiorActuales] = useState<BotonFlotante[]>(ValidacionBotones(botonesInferior));

  //JSX
  return (
    <>
      {/* BOTONES IZQUIERDA */}
      {
        botonesIzquierdaActuales.length > 0
        ?
          <ul className={`${handles.botonesGeneral__listContainer} ${handles.botonesIzquiera__listContainer}`}>
            {
              botonesIzquierdaActuales.map((boton, index) => {
                return (
                  <BotonLayout
                    key={index}
                    imagen={boton.imagen}
                    slug={boton.slug}
                    posicion="izquierda"
                  />
                )
              })
            }
          </ul>
        :
          null
      }

      {/* BOTONES DERECHA */}
      {
        botonesDerechaActuales.length > 0
        ?
          <ul className={`${handles.botonesGeneral__listContainer} ${handles.botonesDerecha__listContainer}`}>
            {
              botonesDerechaActuales.map((boton, index) => {
                return (
                  <BotonLayout
                    key={index}
                    imagen={boton.imagen}
                    slug={boton.slug}
                    posicion="derecha"
                  />
                )
              })
            }
          </ul>
        :
          null
      }


      {/* BOTONES INFERIOR */}
      {
        botonesInferiorActuales.length > 0
        ?
          <ul className={`${handles.botonesGeneral__listContainer} ${handles.botonesInferior__listContainer}`}>
            {
              botonesInferiorActuales.map((boton, index) => {
                return (
                  <BotonLayout
                    key={index}
                    imagen={boton.imagen}
                    imagenMobile={boton.imagenMobile}
                    slug={boton.slug}
                    posicion="inferior"
                  />
                )
              })
            }
          </ul>
        :
          null
      }
    </>
  )
}

BotonesFlotantes.schema = botonesFlotantesSchema;

function BotonLayout({imagen, imagenMobile, slug, posicion}:BotonLayoutProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DETECTOR DE DISPOSITIVO
  const { device } = useDevice();

  //STATES
  const [isButtonActive, setIsButtonActive] = useState<boolean>(true);

  //JSX
  if(isButtonActive) {
    return (
      <li
        className={`${handles.botonesGeneral__itemContainer}`}
      >
        <div
          className={`${handles.botonesGeneral__itemCloseButton}`}
          style={{justifyContent: posicion === 'izquierda' ? 'flex-start' : 'flex-end'}}
        >
          <p
            className={`${handles.botonesGeneral__itemCloseButtonX}`}
            onClick={() => setIsButtonActive(false)}
            style={{padding: posicion === 'inferior' ? '0 15px 5px 0' : '0'}}
          >
            x
          </p>
        </div>
        <Link
          to={slug}
          className={`${handles.botonesGeneral__itemLink}`}
        >
          <img
            alt="Button"
            src={device === 'phone' && imagenMobile ? imagenMobile : imagen}
            className={`${handles.botonesGeneral__itemImage}`}
          />
        </Link>
      </li>
    )
  }

  return null
}

function ValidacionBotones(botones:BotonFlotante[]) {
  return botones.filter((boton) => {

    if(boton.tipoConfiguracion.posiblesConfiguraciones === 'Activacion Manual') {
      return boton.tipoConfiguracion.estaActivo
    }


    const hoyToDate = new Date();
    const inicioToDate = new Date(boton.tipoConfiguracion.fechaInicio ? boton.tipoConfiguracion.fechaInicio : '');
    const finalToDate = new Date(boton.tipoConfiguracion.fechaFinal ? boton.tipoConfiguracion.fechaFinal : '');

    return hoyToDate.getTime() > inicioToDate.getTime() && hoyToDate.getTime() < finalToDate.getTime()
  })
}

