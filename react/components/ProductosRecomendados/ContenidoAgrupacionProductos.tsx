import React, { useEffect, useRef, useState } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { Spinner } from 'vtex.styleguide';
import { Link } from 'vtex.render-runtime';
import './styles.css';
import { cuotasMostradas, filtroSku, ordenProductos } from "../../typings/informacionGeneralComp";


const CSS_HANDLES = [
  'productosRecomendados__productsContainer',
  'productosRecomendados__loadingSpinner',
  'productosRecomendados__verTodo',
  'productosRecomendados__verTodoLink',
]

export default function ContenidoAgrupacionProductos({
  agrupacionActualProductos,
  ProductListContext
}:ContenidoAgrupacionProductosProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //REFERENCES
  const productsRef = useRef<any>(null)

  //STATES
  const [loading, setLoading] = useState<boolean>(true);

  //EFFECTS
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if(productsRef.current) {
        const productsChildren = productsRef.current.children
        if(productsChildren.length === 1) {
          setLoading(true)
        } else if (productsChildren.length === 3) {
          setLoading(false)
        }
      }
    })

    observer.observe(productsRef.current, {childList: true, subtree: true})
  },[])

  return(
    <div
      ref={productsRef}
      className={handles.productosRecomendados__productsContainer}
    >
      {
        loading
        ?
          <div className={handles.productosRecomendados__loadingSpinner}>
            <Spinner/>
          </div>
        :
          null
      }
      {
        agrupacionActualProductos
        ?
          <>
            <ProductListContext
              category={agrupacionActualProductos.configuracionAgrupacion.categoriaId}
              collection={agrupacionActualProductos.configuracionAgrupacion.coleccionId}
              orderBy={ordenProductos[agrupacionActualProductos.configuracionAgrupacion.ordenProductos]}
              hideUnavailableItems={agrupacionActualProductos.configuracionAgrupacion.esconderItemsNoDisponibles}
              maxItems={agrupacionActualProductos.configuracionAgrupacion.maximoItems}
              skusFilter={filtroSku[agrupacionActualProductos.configuracionAgrupacion.filtroSku]}
              installmentCriteria={cuotasMostradas[agrupacionActualProductos.configuracionAgrupacion.cuotasMostradas]}
            />
            {
              !loading
              ?
                <div className={handles.productosRecomendados__verTodo}>
                  <Link
                    to={agrupacionActualProductos.slug}
                    className={handles.productosRecomendados__verTodoLink}
                  >
                    Ver Todo {agrupacionActualProductos.tituloPestaña}
                  </Link>
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

