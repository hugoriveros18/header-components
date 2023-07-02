import React from "react";
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext';

export default function BusquedaCustom() {

  const searchPage = useSearchPage();

  console.log('searchPage', searchPage);

  //JSX
  return (
    <div>BUSQUEDA CUSTOM</div>
  )
}

