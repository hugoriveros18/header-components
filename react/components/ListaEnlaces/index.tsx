import React, { useState, useEffect } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
import { listaEnlacesSchema } from "../../schema/listaEnlacesSchema";
import './styles.css';

const CSS_HANDLES = [
  'listaEnlaces__generalContainer',
  'listaEnlaces__listContainer',
  'listaEnlaces__listElement',
  'listaEnlaces__link',
  'listaEnlaces__linkMiddle',
  'listaEnlaces__linkLast'
]

export default function ListaEnlaces({listaEnlaces}:ListaEnlacesProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [listaActualEnlaces, setListaActualEnlaces] = useState<Enlace[]>([]);

  //EFFECTS
  useEffect(() => {
    setListaActualEnlaces(listaEnlaces);
  },[listaEnlaces])

  //JSX
  return (
    <div className={handles.listaEnlaces__generalContainer}>
      <ul className={handles.listaEnlaces__listContainer}>
        {
          listaActualEnlaces?.map((enlace, index) => {
            return (
              <li
                key={index}
                className={handles.listaEnlaces__listElement}
              >
                <Link
                  to={enlace.slug}
                  className={`${handles.listaEnlaces__link} ${index === listaActualEnlaces.length - 1 ? handles.listaEnlaces__linkLast : handles.listaEnlaces__linkMiddle}`}
                >
                  {enlace.texto}
                </Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

ListaEnlaces.schema = listaEnlacesSchema;

