export const botonesFlotantesSchema = {
  title: "Botones Flotantes",
  description: "Configuracion de botones flotantes",
  type: "object",
  properties: {
    botonesIzquierda: {
      title: "Botones Izquierda",
      type: "array",
      items: {
        properties: {
          imagen: {
            title: "Imagen Desktop - Tablet",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Imagen Mobile",
            description: "Este campo es opcional, en caso de dejarse vacio se visualizará la imagen definida en el campo anterior (Imagen Desktop - Tablet) para todas las pantallas",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          slug: {
            title: "Slug",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "textarea"
            }
          },
          tipoConfiguracion: {
            title: "Tipo Configuracion",
            type: "object",
            properties: {
              posiblesConfiguraciones: {
                title: "Configuracion a Utilizar",
                type: "string",
                enum: [
                  'Por Fechas',
                  'Activacion Manual'
                ],
                default: "Activacion Manual"
              }
            },
            dependencies: {
              posiblesConfiguraciones: {
                oneOf: [
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Activacion Manual'
                        ]
                      },
                      estaActivo: {
                        title: "¿Esta Activo?",
                        type: "boolean",
                        default: true
                      }
                    }
                  },
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Por Fechas'
                        ]
                      },
                      fechaInicio: {
                        title: "Fecha Inicio Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                      fechaFinal: {
                        title: "Fecha Final Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    },
    botonesDerecha: {
      title: "Botones Derecha",
      type: "array",
      items: {
        properties: {
          imagen: {
            title: "Imagen Desktop - Tablet",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Imagen Mobile",
            description: "Este campo es opcional, en caso de dejarse vacio se visualizará la imagen definida en el campo anterior (Imagen Desktop - Tablet) para todas las pantallas",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          slug: {
            title: "Slug",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "textarea"
            }
          },
          tipoConfiguracion: {
            title: "Tipo Configuracion",
            type: "object",
            properties: {
              posiblesConfiguraciones: {
                title: "Configuracion a Utilizar",
                type: "string",
                enum: [
                  'Por Fechas',
                  'Activacion Manual'
                ],
                default: "Activacion Manual"
              }
            },
            dependencies: {
              posiblesConfiguraciones: {
                oneOf: [
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Activacion Manual'
                        ]
                      },
                      estaActivo: {
                        title: "¿Esta Activo?",
                        type: "boolean",
                        default: true
                      }
                    }
                  },
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Por Fechas'
                        ]
                      },
                      fechaInicio: {
                        title: "Fecha Inicio Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                      fechaFinal: {
                        title: "Fecha Final Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    },
    botonesInferior: {
      title: "Botones Inferior",
      type: "array",
      items: {
        properties: {
          imagen: {
            title: "Imagen Desktop - Tablet",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenMobile: {
            title: "Imagen Mobile",
            description: "Este campo es opcional, en caso de dejarse vacio se visualizará la imagen definida en el campo anterior (Imagen Desktop - Tablet) para todas las pantallas",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          slug: {
            title: "Slug",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "textarea"
            }
          },
          tipoConfiguracion: {
            title: "Tipo Configuracion",
            type: "object",
            properties: {
              posiblesConfiguraciones: {
                title: "Configuracion a Utilizar",
                type: "string",
                enum: [
                  'Por Fechas',
                  'Activacion Manual'
                ],
                default: "Activacion Manual"
              }
            },
            dependencies: {
              posiblesConfiguraciones: {
                oneOf: [
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Activacion Manual'
                        ]
                      },
                      estaActivo: {
                        title: "¿Esta Activo?",
                        type: "boolean",
                        default: true
                      }
                    }
                  },
                  {
                    properties: {
                      posiblesConfiguraciones: {
                        enum: [
                          'Por Fechas'
                        ]
                      },
                      fechaInicio: {
                        title: "Fecha Inicio Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                      fechaFinal: {
                        title: "Fecha Final Visualizacion Banner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
}

