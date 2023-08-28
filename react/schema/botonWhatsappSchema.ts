export const botonWhatsappSchema = {
  title: "Boton Whatsapp",
  description: "Configuracion Boton flotante de Whatsapp",
  type: "object",
  properties: {
    iconoDesktop: {
      title: "Icono Desktop",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    iconoMobile: {
      title: "Icono Mobile",
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
    textoBoton: {
      title: "Texto Boton",
      type: "string",
      default: ""
    },
    colorTexto: {
      title: "Color Texto",
      type: "string",
      widget: {
        "ui:widget": "color"
      }
    },
    colorFondo: {
      title: "Color Fondo Boton",
      type: "string",
      widget: {
        "ui:widget": "color"
      }
    },
    posicionBoton: {
      title: "Alineacion Horizontal",
      type: "string",
      enum: [
        'Izquierda',
        'Derecha'
      ],
      default: 'Izquierda'
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

