export const topBannerSchema = {
  title: "Top Banner - Contrarreloj",
  description: "Banner de oferta contrarreloj ubicado en el header",
  type: "object",
  properties: {
    imagenDesktopTablet: {
      title: "Imagen Version Desktop - Tablet",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "image-uploader"
      }
    },
    imagenMobile: {
      title: "Imagen Version Mobile",
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
    tituloTemporizador: {
      title: "Titulo Temporizador",
      type: "string",
      default: ""
    },
    colorPlantilla: {
      title: "Color Plantilla",
      type: "string",
      default: "#ffffff",
      widget: {
        "ui:widget": "color"
      }
    },
    colorTiempo: {
      title: "Color Tiempo",
      type: "string",
      default: "#000000",
      widget: {
        "ui:widget": "color"
      }
    },
    fechaInicio: {
      title: "Fecha de Inicio",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "date-time"
      }
    },
    fechaFinal: {
      title: "Fecha Final",
      type: "string",
      default: "",
      widget: {
        "ui:widget": "date-time"
      }
    },
    isActive: {
      title: "¿Esta activo?",
      description: "Si las fechas son validas pero este campo esta inactivo no se visualizará el banner.",
      type: "boolean",
      default: true
    }
  },
}

