import React, { useEffect, useRef, useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import './styles.css';

const CSS_HANDLES = [
  'productosRecomendados__tabsContainer',
  'productosRecomendados__tabsListContainer',
  'productosRecomendados__tabsItem',
  'productosRecomendados__tabsItemSelected',
  'productosRecomendados__arrow',
  'productosRecomendados__leftArrow',
  'productosRecomendados__rightArrow',
]

export default function ListaPestanas({
  configuracionActualProductos,
  agrupacionActualProductos,
  handleTabChange
}:ListaPestañasProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //REFERENCES
  const containerRef = useRef<any>(null);
  const listRef = useRef<any>(null);

  //STATES
  const [translateValue, setTranslateValue] = useState<number>(0);
  const [arrowsActive, setArrowsActive] = useState<boolean>(false);
  const [diferenciaWidth, setDiferenciaWidth] = useState<number>(0);

  //EFFECTS
  useEffect(() => {
    if(containerRef.current && listRef.current) {
      if(containerRef.current.offsetWidth < listRef.current.scrollWidth) {
        setDiferenciaWidth(listRef.current.scrollWidth - containerRef.current.offsetWidth);
        setArrowsActive(true);
      }

    }
  },[])

  //METHODS
  const handleScrollRight = () => {
    if(translateValue + 180 > diferenciaWidth) {
      setTranslateValue(state => state + (diferenciaWidth - translateValue))
    } else {
      setTranslateValue(state => state + 180);
    }
  }
  const handleScrollLeft = () => {
    if(translateValue - 180 < 0) {
      setTranslateValue(0)
    } else {
      setTranslateValue(state => state - 180);
    }
  }

  //JSX
  return (
    <div
      className={handles.productosRecomendados__tabsContainer}
      ref={containerRef}
    >
      <ul
        className={handles.productosRecomendados__tabsListContainer}
        ref={listRef}
        style={{transform: `translateX(-${translateValue}px)`}}
      >
        {
          configuracionActualProductos?.pestañas.map((pestaña, index) => {
            return (
              <li
                key={index}
                onClick={() => handleTabChange(pestaña)}
                className={`${handles.productosRecomendados__tabsItem} ${pestaña === agrupacionActualProductos ? handles.productosRecomendados__tabsItemSelected : undefined}`}
              >
                {pestaña.tituloPestaña}
              </li>
            )
          })
        }
      </ul>
      {
        arrowsActive
        ?
          <>
          {
            translateValue !== 0
            ?
              <div
                className={`${handles.productosRecomendados__arrow} ${handles.productosRecomendados__leftArrow}`}
                onClick={handleScrollLeft}
              >
                <img
                  src="https://panamericana.vtexassets.com/arquivos/left-arrow-prod-rec.svg"
                  alt="Flecha Izquierda"
                />
              </div>
            :
              null
          }
          {
            translateValue !== diferenciaWidth
            ?
              <div
                className={`${handles.productosRecomendados__arrow} ${handles.productosRecomendados__rightArrow}`}
                onClick={handleScrollRight}
              >
                <img
                  src="https://panamericana.vtexassets.com/arquivos/right-arrow-prod-rec.svg"
                  alt="Flecha Derecha"
                />
              </div>
            :
              null
          }
          </>
        :
          null
      }
    </div>
  )
}

