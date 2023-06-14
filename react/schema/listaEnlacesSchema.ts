export const listaEnlacesSchema = {
  title: "Enlaces",
  description: "Organizacion de enlaces",
  type: "object",
  properties: {
    listaEnlaces: {
      title: "Lista Enlaces",
      type: "array",
      items: {
        properties: {
          __editorItemTitle: {
            title: "Nombre Del Enlace",
            type: "string",
            default: ''
          },
          texto: {
            title: "Texto",
            type: "string",
            default: ''
          },
          slug: {
            title: "Slug",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "textarea"
            }
          },

        }
      }
    }
  }
}


