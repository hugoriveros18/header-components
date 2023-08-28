import React, { useEffect, useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
import { canUseDOM } from 'vtex.render-runtime';
import { Link } from "vtex.render-runtime";
import { botonesFlotantesSchema } from "../../schema/botonesFlotantesSchema";
import './styles.css';

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
                    id={boton.id}
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
                    id={boton.id}
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
                    id={boton.id}
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

function BotonLayout({id, imagen, imagenMobile, slug, posicion}:BotonLayoutProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DETECTOR DE DISPOSITIVO
  const { device } = useDevice();

  //DOM VALIDATION
  const dataSessionStorage = canUseDOM
    ? window.sessionStorage.getItem('validacionBotones')
    : null

  //STATES
  const [isButtonActive, setIsButtonActive] = useState<boolean>(false);

  //METHODS
  const calcCloseButtonPosition = (posicion:string) => {
    if(posicion === 'inferior') {
      return {
        right: '10px',
        top: '-2px',
        transform: 'translateY(-100%)'
      }
    } else {
      return {
        right: '0'
      }
    }
  }
  const handleSessionUpdate = () => {
    if(dataSessionStorage) {
      const listaBotones = JSON.parse(dataSessionStorage);
      listaBotones.push(id)

      window.sessionStorage.setItem('validacionBotones', JSON.stringify(listaBotones));
    }

    setIsButtonActive(false)
  }

  //EFFECTS
  useEffect(() => {
    if(dataSessionStorage) {
      const listaBotones = JSON.parse(dataSessionStorage)

      if(!listaBotones.includes(id)) {
        setIsButtonActive(true);
      }
    } else {
      window.sessionStorage.setItem('validacionBotones', JSON.stringify([]))
      setIsButtonActive(true);
    }
  },[dataSessionStorage])

  //JSX
  if(isButtonActive) {
    return (
      <li
        className={`${handles.botonesGeneral__itemContainer}`}
      >
        <div
          className={`${handles.botonesGeneral__itemCloseButton}`}
          style={calcCloseButtonPosition(posicion)}
        >
          <p
            className={`${handles.botonesGeneral__itemCloseButtonX}`}
            onClick={handleSessionUpdate}
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

