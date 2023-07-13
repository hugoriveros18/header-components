import React, { useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Link } from "vtex.render-runtime";
import './styles.css';

const CSS_HANDLES = [
  'destacados__linkElement',
  'destacados__linkElementText',
  'destacados__divisionContainer',
  'destacados__divisionLine',
  'destacados__fondoDinamico',
]

export default function DestacadoLink({
  destacado,
  destacadosLength,
  index,
  colorFondoHover,
  colorTexto,
  colorTextoHover,
  colorLineaDivisoria
}:DestacadoLinkProps) {
  
  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //STATES
  const [isHoverActive, setIsHoverActive] = useState<boolean>(false);

  //JSX
  return (
    <>
      <Link
        key={index}
        to={destacado.slug}
        className={handles.destacados__linkElement}
        onMouseEnter={() => setIsHoverActive(true)}
        onMouseLeave={() => setIsHoverActive(false)}
      >
        <div
          className={handles.destacados__fondoDinamico}
          style={{
            backgroundColor: colorFondoHover,
            transform: isHoverActive ? 'scale(1, 1)' : 'scale(0, 0)'
          }}
        >
        </div>
        <p
          className={`${handles.destacados__linkElementText}`}
          style={{
            color: isHoverActive ? colorTextoHover : colorTexto
          }}
        >
          {destacado.texto}
        </p>
      </Link>
      {
        index !== destacadosLength - 1
        ?
          <div
            className={handles.destacados__divisionContainer}
          >
            <div
              className={handles.destacados__divisionLine}
              style={{
                backgroundColor: colorLineaDivisoria
              }}
            ></div>
          </div>
        :
          null
      }
    </>
  )
}

