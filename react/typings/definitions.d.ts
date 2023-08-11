// LISTA ENLACES
type Enlace = {
  _editorItemTitle: string
  texto: string
  slug: string
}

type ListaEnlacesProps = {
  listaEnlaces: Enlace[]
}

//TOP BANNER
type TopBannerProps = {
  imagenDesktopTablet: string
  imagenMobile: string
  slug: string
  tituloTemporizador: string
  colorPlantilla: string
  colorTiempo: string
  fechaInicio: string
  fechaFinal: string
  isActive: boolean
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

//DESTACADO
type Destacado = {
  _editorItemTitle: string
  texto: string
  slug: string
  colorFondo: string
  colorTexto: string
  colorFondoHover: string
  colorTextoHover: string
  colorLineaDivisoria: string
  colorFondoLineaDivisoria: string
}

type DestacadoProps = {
  destacados: Destacado[]
}

type DestacadoLinkProps = {
  destacado: Destacado
  destacadosLength: number
  index: number
}

type PosiblesConfiguraciones = 'Por Fechas' | 'Activacion Manual'

interface TipoConfiguracion {
  posiblesConfiguraciones: PosiblesConfiguraciones
  fechaInicio?: string
  fechaFinal?: string
  estaActivo?: boolean
}

//BOTONES FLOTANTES
interface BotonFlotante {
  id: string
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
  id: string
  imagen: string
  imagenMobile?: string
  slug: string
  posicion: 'izquierda' | 'derecha' | 'inferior'
}

//PRODUCTOS RECOMENDADOS
type OrdenProductos = 'Relevance' | 'Sales' | 'Price, descending' | 'Price, ascending' | 'Name, descending' | 'Name, ascending' | 'Release date' | 'Discount'
type FiltroSku = 'All available' | 'First available';
type CuotasMostradas = 'Maximum without interest' | 'Maximum'

interface ContenidoAgrupacionProductosProps {
  agrupacionActualProductos: AgrupacionProductos | null
  ProductListContext: any
}

interface ConfiguracionAgrupacion {
  categoriaId: string
  coleccionId: string
  ordenProductos: OrdenProductos
  maximoItems: number
  esconderItemsNoDisponibles: boolean
  filtroSku: FiltroSku
  cuotasMostradas: CuotasMostradas
}

interface AgrupacionProductos {
  tituloPestaña: string
  slug: string
  configuracionAgrupacion: ConfiguracionAgrupacion
}

interface ConfiguracionDeafultProductos {
  id: string
  imagenHeader: string
  tituloContenido: string
  isActive: boolean
  pestañas: AgrupacionProductos[]
}

interface ConfiguracionPersonalizadaProductos extends ConfiguracionDeafultProductos {
  validacionUrl: string
}

interface ProductosRecomendadosProps {
  configuracionDefault: ConfiguracionDeafultProductos
  configuracionesPersonalizadas: ConfiguracionPersonalizadaProductos[]
  ProductListContext: any
}

interface ProductosRecomendadosIconProps {
  isTriggerVisible: boolean
  isActive: boolean | undefined
}

interface useValidacionProdRecomendadosProps {
  configuracionDefault: ConfiguracionDeafultProductos
  configuracionesPersonalizadas: ConfiguracionPersonalizadaProductos[]
}

interface ListaPestañasProps {
  configuracionActualProductos: ConfiguracionDeafultProductos | ConfiguracionPersonalizadaProductos | null
  agrupacionActualProductos: AgrupacionProductos | null
  handleTabChange: (agrupacionProductos: AgrupacionProductos) => void
}

//BANNERS SLIDER HEADER
type PosiblesConfiguraciones = 'Por Fechas' | 'Activacion Manual'

type TipoConfiguracion = {
  posiblesConfiguraciones: PosiblesConfiguraciones
  fechaInicio?: string
  fechaFinal?: string
  estaActivo?: boolean
}

type BannerPrincipal = {
  imagenDesktop: string
  imagenMobile: string
  urlRedireccion: string
  tipoConfiguracion: TipoConfiguracion
}

type BannersSliderHeaderProps = {
  banners: BannerPrincipal[]
  children: ReactNode
}

