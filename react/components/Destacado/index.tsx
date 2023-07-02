import React from 'react';
import { useCssHandles } from 'vtex.css-handles';
import { destacadoSchema } from '../../schema/destacadoSchema';
import DestacadoLink from './DestacadoLink';
import './styles.css';

const CSS_HANDLES = [
  'destacados__generalContainer'
]

const destacadosDefault: Destacado[] = [
  {
    _editorItemTitle: 'Juguetes',
    texto: 'Juguetes',
    slug: '/juegos-y-juguetes'
  },
  {
    _editorItemTitle: 'Centro Cultural',
    texto: 'Centro Cultural',
    slug: '/centro-cultural-y-empresarial?utmi_pc=centro-cultural-y-empresarial-icono-menu&utmi_p=icono-menu-centro-cultural-y-empresarial-2-febrero-2023'
  }
]

export default function Destacado({
  destacados = destacadosDefault,
  colorFondo = '#faa060',
  colorFondoHover = '#ffffff',
  colorTexto = '#ffffff',
  colorTextoHover = "#ec6608",
  colorLineaDivisoria = '#ffffff'
}:DestacadoProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //JSX
  return (
    <div
      className={handles.destacados__generalContainer}
      style={{
        backgroundColor: colorFondo,
      }}
    >
      {
        destacados.map((destacado, index) => {
          return (
            <DestacadoLink
              key={index}
              destacado={destacado}
              destacadosLength={destacados.length}
              index={index}
              colorFondoHover={colorFondoHover}
              colorTexto={colorTexto}
              colorTextoHover={colorTextoHover}
              colorLineaDivisoria={colorLineaDivisoria}
            />
          )
        })
      }
    </div>
  )
}

Destacado.schema = destacadoSchema;

