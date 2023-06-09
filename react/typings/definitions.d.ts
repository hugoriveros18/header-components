type Enlace = {
  _editorItemTitle: string
  texto: string
  slug: string
}

type ListaEnlacesProps = {
  listaEnlaces: Enlace[]
}

type TopBannerProps = {
  imagenDesktopTablet: string
  imagenMobile: string
  slug: string
  tituloTemporizador: string
  colorPlantilla: string
  colorTiempo: string
  fechaInicio: string
  fechaFinal: string
}

type TemporizadorProps = {
  segundos: number
  minutos: number
  horas: number
  dias: number
}

type AnalisisTemporizadorProps = {
  fechaInicio: string
  fechaFinal: string
}

type Destacado = {
  _editorItemTitle: string
  texto: string
  slug: string
}

type DestacadoProps = {
  destacados: Destacado[]
  colorFondo: string
  colorTexto: string
  colorFondoHover: string
  colorTextoHover: string
  colorLineaDivisoria: string
}

type DestacadoLinkProps = {
  destacado: Destacado
  destacadosLength: number
  index: number
  colorTexto: string
  colorFondoHover: string
  colorTextoHover: string
  colorLineaDivisoria: string
}

type PosiblesConfiguraciones = 'Por Fechas' | 'Activacion Manual'

interface TipoConfiguracion {
  posiblesConfiguraciones: PosiblesConfiguraciones
  fechaInicio?: string
  fechaFinal?: string
  estaActivo?: boolean
}

interface BotonFlotante {
  imagen: string
  imagenMobile?: string
  slug: string
  tipoConfiguracion: TipoConfiguracion
}

interface BotonesFlotantesProps {
  botonesIzquierda: BotonFlotante[]
  botonesDerecha: BotonFlotante[]
  botonesInferior: BotonFlotante[]
}

interface BotonLayoutProps {
  imagen: string
  imagenMobile?: string
  slug: string
  posicion: 'izquierda' | 'derecha' | 'inferior'
}


