import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
'./styles.css';

const CSS_HANDLES = [
  'productosRecomendados__drawerTrigger',
  'productosRecomendados__drawerTriggerSVG',
  'productosRecomendados__displayNone',
  'svg__mainFlame',
  'mainFlame__one',
  'mainFlame__two',
  'mainFlame__three',
  'mainFlame__four',
  'mainFlame__five',
  'flame__general',
  'flame__generalOne',
]

export default function ProductosRecomendadosIcon({
  isTriggerVisible,
  isActive = true,
  setIsHoverActive
}:ProductosRecomendadosIconProps) {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTOR
  const { isMobile } = useDevice();

  //METHODS
  const handleHoverIn = () => {
    if(!isMobile) {
      setIsHoverActive(true)
    }
  }
  const handleHoverOut = () => {
    if(!isMobile) {
      setIsHoverActive(false)
    }
  }

  //JSX
  return (
    <div
      className={`${handles.productosRecomendados__drawerTrigger} ${(isTriggerVisible && isActive) ? undefined : handles.productosRecomendados__displayNone}`}
      onMouseEnter={handleHoverIn}
      onMouseLeave={handleHoverOut}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        id="Capa_1"
        x={0}
        y={0}
        viewBox="0 0 139.3 147"
        className={`${handles.productosRecomendados__drawerTriggerSVG}`}
      >
        <style>{".st1{fill:#ff7900}.st3{fill:#fdba16}.st5{fill:#f36e21}"}</style>
        <ellipse
          cx={67.1}
          cy={76.6}
          rx={53.5}
          ry={56.5}
          style={{
            fill: "#fff",
          }}
        />
        <path
          d="M71.4 135.5c1.2-.2 2.4-.7 3.3-1.5 7.3-7.4-3-12.5-14.3-49.3-12-39.1-25.7-42.9-25.7-42.9 3 1.4 12.7 25.7 6.9 35.5-5.8 9.7 2.1 29.2 2.1 29.2-2.4-4.5-6.3-8.8-6.3-8.8 5.3 10.7 6.4 17.1 6.4 17.1s5.5 10.6 11.3 14.9c5.8 4.2 16.3 5.8 16.3 5.8z"
          className={`st1 ${handles.svg__mainFlame}`}
        />
        <path
          d="M51.9 76.4C55.8 62.1 63.5 63 40.7 20.1c0 0 30.8 9.4 50.6 58.3s-19.1 56.4-18.9 56.9c.2.5-18.7-.3-14.2-17.1s-10.3-27.6-6.3-41.8z"
          className={`st1 ${handles.svg__mainFlame} ${handles.mainFlame__one}`}
        />
        <path
          d="M70.2 33.7s11.5 23.8 3.6 38.4-21.1 40.2-.4 62.4c0-.1 40.9-32-3.2-100.8z"
          style={{
            fill: "#ffd04a",
          }}
          className={`${handles.svg__mainFlame} ${handles.mainFlame__two}`}
        />
        <path
          d="M88.5 56.3s-23.2 45.1-12 76.9c0 0 32.7-15.5 20.1-44-12.7-28.6-8.1-21.1-8.1-32.9z"
          className={`st3 ${handles.svg__mainFlame} ${handles.mainFlame__three}`}
        />
        <path
          d="M92.2 61.3s8.5 29.7-1.7 45S75.3 134 75.3 134s47.4-16 16.9-72.7z"
          style={{
            fill: "#e54e04",
          }}
          className={`${handles.svg__mainFlame} ${handles.mainFlame__four}`}
        />
        <path
          d="M51.3 61s-11.6 65.6 15.1 73.8C93.1 143 59.8 86.2 51.3 61z"
          className={`st3 ${handles.svg__mainFlame} ${handles.mainFlame__five}`}
        />
        <path
          d="M62.6 9.4s9 10.1 4.6 15.8c-6.3.3 1.1-11.5-4.6-15.8zM35.5 74.5s-7 11.1-1.8 16.1c6.1-.8.7-11.2 1.8-16.1zM37.5 57.1s-4 5.9-1.2 8.5c3.2-.2-1.5-5.9 1.2-8.5z"
          className={`st5 ${handles.flame__general}`}
        />
        <linearGradient
          id="SVGID_1_"
          x1={-7484.141}
          x2={-7481.271}
          y1={-277.261}
          y2={-277.261}
          gradientTransform="rotate(173.88 -3706.27 83.163)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#e54e04",
            }}
          />
          <stop
            offset={0.772}
            style={{
              stopColor: "#f96e01",
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#ff7900",
            }}
          />
        </linearGradient>
        <path
          d="M87.9 44.1c3.1-3.8-2.8-10.9-2.8-10.9 3.8 3-1.5 10.9 2.8 10.9z"
          style={{
            fill: "url(#SVGID_1_)",
          }}
          className={`${handles.flame__general} ${handles.flame__generalOne}`}
        />
      </svg>

    </div>
  )
}
