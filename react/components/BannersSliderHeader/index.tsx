import React from 'react';
import { useListContext, ListContextProvider } from 'vtex.list-context';
import { useDevice } from 'vtex.device-detector';
import { Image } from 'vtex.store-image';
import { bannersSliderHeaderSchema } from '../../schema/bannersSliderHeader';

const defaultData: BannerPrincipal[] = [
  {
    "imagenDesktop": "https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/f7ddc0ae-f9d9-4c5e-899b-63f22ab5745d___84d71f54430b4dfdb139ff524e9e26cb.png",
    "imagenMobile": "https://panamericana.vtexassets.com/assets/vtex.file-manager-graphql/images/302426ab-4996-4a41-b838-2c6c0ce87ed6___dcc935bb097261a057122a2c7eebbc3c.png",
    "urlRedireccion": "/especial-hp?utmi_pc=home-banner-principal-especial-hp&utmi_p=especial-hp-14-febrero-2022",
    "tipoConfiguracion": {
      "posiblesConfiguraciones": "Activacion Manual",
      "estaActivo": true
    }
  }
]

export default function BannersSliderHeader({
  banners = defaultData,
  children
}: BannersSliderHeaderProps){

  //LIST CONTEXT
  const { list } = useListContext() || [];

  //VALIDACIONES
  const grupoBanners = ValidacionBannersHeader(banners);
  let bannerParaVisualizar = [];
  bannerParaVisualizar = list.concat(grupoBanners.filter(banner => banner !== null));

  //JSX
  if (bannerParaVisualizar.length > 0) {
    return (
      <ListContextProvider list={bannerParaVisualizar}>
        {children}
      </ListContextProvider>
    )
  }

  return null
}

BannersSliderHeader.schema = bannersSliderHeaderSchema;


function ValidacionBannersHeader(banners: BannerPrincipal[]) {

  //DEVICE DETECTOR
  const { device } = useDevice();

  //JSX
  return (
    banners.map((banner, index) => {
      if (banner.tipoConfiguracion.posiblesConfiguraciones === 'Activacion Manual') {
        if (banner.tipoConfiguracion.estaActivo) {
          return (
            <Image
              key={index}
              src={device === 'phone' ? banner.imagenMobile : banner.imagenDesktop}
              link={{
                url:`${banner.urlRedireccion}`
              }}
            />
          )
        }
      } else {
        if (banner.tipoConfiguracion.fechaInicio && banner.tipoConfiguracion.fechaFinal) {
          const ahora = new Date();
          const inputFechaInicio = new Date(banner.tipoConfiguracion.fechaInicio);
          const inputFechaFinal = new Date(banner.tipoConfiguracion.fechaFinal);
          if (ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
            return (
              <Image
                key={index}
                src={device === 'phone' ? banner.imagenMobile : banner.imagenDesktop}
                link={{
                  url:`${banner.urlRedireccion}`
                }}
              />
            )
          }
        }
      }
      return null
    })
  )
}


