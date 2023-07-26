export const productosRecomendadosSchema = {
  title: "Productos Recomendados",
  description: "Configuracion de agrupaciones de productos recomendados",
  type: "object",
  properties: {
    configuracionDefault: {
      title: "Configuracion Default",
      type: "object",
      properties: {
        id: {
          title: "ID configuracion",
          type: "string",
          default: ""
        },
        imagenHeader: {
          title: "Imagen Header",
          type: "string",
          default: "",
          widget: {
            "ui:widget": "image-uploader"
          }
        },
        tituloContenido: {
          title: "Titulo de Contenido",
          type: "string",
          default: ""
        },
        pestañas: {
          title: "Pestañas",
          type: "array",
          items: {
            properties: {
              __editorItemTitle: {
                title: "Nombre Identificador",
                type: "string",
                default: ""
              },
              tituloPestaña: {
                title: "Titulo Pestaña",
                type: "string",
                default: ""
              },
              slug: {
                title: "Slug",
                type: "string",
                default: "",
                widget: {
                  "ui:widget": "textarea"
                }
              },
              configuracionAgrupacion: {
                title: "Configuracion de Agrupacion",
                type: "object",
                properties: {
                  categoriaId: {
                    title: "ID Categoria",
                    type: "string",
                    default: ""
                  },
                  coleccionId: {
                    title: "ID Coleccion",
                    type: "string",
                    default: ""
                  },
                  ordenProductos: {
                    title: "Orden de Productos",
                    type: "string",
                    enum: [
                      "Relevance",
                      "Sales",
                      "Price, descending",
                      "Price, ascending",
                      "Name, descending",
                      "Name, ascending",
                      "Release date",
                      "Discount"
                    ],
                    default: "Relevance"
                  },
                  maximoItems: {
                    title: "Maximo de Items",
                    type: "number",
                    default: 15
                  },
                  esconderItemsNoDisponibles: {
                    title: "Esconder Productos No Disponibles",
                    type: "boolean",
                    default: true
                  },
                  filtroSku: {
                    title: "Filtro Sku",
                    type: "string",
                    enum: [
                      'All available',
                      'First available'
                    ],
                    default: "All available"
                  },
                  cuotasMostradas: {
                    title: "Cuotas Mostradas",
                    type: "string",
                    enum: [
                      'Maximum without interest',
                      'Maximum'
                    ],
                    default: "Maximum without interest"
                  },
                }
              }
            }
          }

        }
      }
    },
    configuracionesPersonalizadas: {
      title: "Configuraciones Personalizadas",
      type: "array",
      items: {
        properties: {
          __editorItemTitle: {
            title: "Nombre Identificador",
            type: "string",
            default: ""
          },
          id: {
            title: "ID configuracion",
            type: "string",
            default: ""
          },
          validacionUrl: {
            title: "URL de Validacion",
            description: "Introduzca la ruta en donde se deberia aplicar la configuracion. Ex. '/tecnologia?utmi_p=mptecnologia-8-agosto-2022&utmi_pc=mpdeptecnologia'",
            type: "string",
            default: ""
          },
          imagenHeader: {
            title: "Imagen Header",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          tituloContenido: {
            title: "Titulo de Contenido",
            type: "string",
            default: ""
          },
          pestañas: {
            title: "Pestañas",
            type: "array",
            items: {
              properties: {
                __editorItemTitle: {
                  title: "Nombre Identificador",
                  type: "string",
                  default: ""
                },
                tituloPestaña: {
                  title: "Titulo Pestaña",
                  type: "string",
                  default: ""
                },
                slug: {
                  title: "Slug",
                  type: "string",
                  default: "",
                  widget: {
                    "ui:widget": "textarea"
                  }
                },
                configuracionAgrupacion: {
                  title: "Configuracion de Agrupacion",
                  type: "object",
                  properties: {
                    categoriaId: {
                      title: "ID Categoria",
                      type: "string",
                      defautl: ""
                    },
                    coleccionId: {
                      title: "ID Coleccion",
                      type: "string",
                      defautl: ""
                    },
                    ordenProductos: {
                      title: "Orden de Productos",
                      type: "string",
                      enum: [
                        "Relevance",
                        "Sales",
                        "Price, descending",
                        "Price, ascending",
                        "Name, descending",
                        "Name, ascending",
                        "Release date",
                        "Discount"
                      ],
                      defautl: "Relevance"
                    },
                    maximoItems: {
                      title: "Maximo de Items",
                      type: "number",
                      default: 15
                    },
                    esconderItemsNoDisponibles: {
                      title: "Esconder Productos No Disponibles",
                      type: "boolean",
                      default: true
                    },
                    filtroSku: {
                      title: "Filtro Sku",
                      type: "string",
                      enum: [
                        'All available',
                        'First available'
                      ],
                      defautl: "All available"
                    },
                    cuotasMostradas: {
                      title: "Cuotas Mostradas",
                      type: "string",
                      enum: [
                        'Maximum without interest',
                        'Maximum'
                      ],
                      defautl: "Maximum without interest"
                    },
                  }
                }
              }
            }

          }
        }
      }
    }
  },
}



