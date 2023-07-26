export const ordenProductos = {
  "Relevance": "",
  "Sales": "OrderByTopSaleDESC",
  "Price, descending": "OrderByPriceDESC",
  "Price, ascending": "OrderByPriceASC",
  "Name, descending": "OrderByNameDESC",
  "Name, ascending": "OrderByNameASC",
  "Release date": "OrderByReleaseDateDESC",
  "Discount": "OrderByBestDiscountDESC"
}

export const filtroSku = {
  "All available": "ALL_AVAILABLE",
  "First available": "FIRST_AVAILABLE"
}

export const cuotasMostradas = {
  "Maximum without interest": "MAX_WITHOUT_INTEREST",
  "Maximum": "MAX_WITH_INTEREST"
}

export const configuracionDefaultTest:ConfiguracionDeafultProductos = {
  "id": "configuracion-default",
  "imagenHeader": "https://panamericana.vteximg.com.br/arquivos/banner-boton-recomendados.png",
  "tituloContenido": "Recomendaciones",
  "pestañas": [
    {
      "tituloPestaña": "Libros",
      "slug": "/",
      "configuracionAgrupacion": {
        "categoriaId": "1",
        "coleccionId": "",
        "ordenProductos": "Relevance",
        "filtroSku": "All available",
        "maximoItems": 15,
        "cuotasMostradas": "Maximum without interest",
        "esconderItemsNoDisponibles": true
      }
    },
    {
      "tituloPestaña": "Papelería",
      "slug": "/",
      "configuracionAgrupacion": {
        "categoriaId": "249",
        "coleccionId": "",
        "ordenProductos": "Relevance",
        "filtroSku": "All available",
        "maximoItems": 15,
        "cuotasMostradas": "Maximum without interest",
        "esconderItemsNoDisponibles": true
      }
    }
  ]
}




