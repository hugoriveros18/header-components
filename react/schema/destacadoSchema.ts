export const destacadoSchema = {
  title: "Destacados",
  description: "Configuracion de elementos destacados",
  type: "object",
  properties: {
    destacados: {
      title: "Lista Destacados",
      type: "array",
      items: {
        properties: {
          __editorItemTitle: {
            title: "Nombre Del Bloque",
            type: "string",
          },
          texto: {
            title: "Titulo",
            type: "string",
          },
          slug: {
            title: "Slug",
            type: "string",
            default: "",
            widget: {
              "ui:widget": "textarea"
            }
          },
          colorFondo: {
            title: "Color Fondo",
            type: "string",
            default: "#ffffff",
            widget: {
              "ui:widget": "color"
            }
          },
          colorFondoHover: {
            title: "Color Fondo - Hover",
            type: "string",
            default: "#ffffff",
            widget: {
              "ui:widget": "color"
            }
          },
          colorTexto: {
            title: "Color Texto",
            type: "string",
            default: "#ffffff",
            widget: {
              "ui:widget": "color"
            }
          },
          colorTextoHover: {
            title: "Color Texto - Hover",
            type: "string",
            default: "#ffffff",
            widget: {
              "ui:widget": "color"
            }
          },
          colorLineaDivisoria: {
            title: "Color Linea Divisoria",
            type: "string",
            default: "#ffffff",
            widget: {
              "ui:widget": "color"
            }
          },
          colorFondoLineaDivisoria: {
            title: "Color Fondo Linea Divisoria",
            type: "string",
            default: "#ffffff",
            widget: {
              "ui:widget": "color"
            }
          }
        }
      }
    }
  },
}

