import $ from 'jquery'
import 'slick-carousel'
import { useEffect, useRef } from 'react'

const logos = [
  'Northwind',
  'Globex',
  'Initech',
  'Umbrella',
  'Hooli',
  'Vandelay',
  'Stark',
  'Wayne',
  'Cyberdyne',
  'Soylent',
]

const slickConfig: JQuerySlickOptions = {
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2500,
  cssEase: 'linear',
  infinite: true,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}

export default function LogoMarquee() {
  const hostRef = useRef<HTMLDivElement>(null)

  // Slick restructures the slider's DOM, so it's built outside React.
  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const slider = document.createElement('div')
    slider.className = 'logos-gradient-1'
    for (const logo of logos) {
      const figure = document.createElement('figure')
      figure.className = 'logo-item-xs'
      const img = document.createElement('img')
      img.src = `/logos/${logo.toLowerCase()}.svg`
      img.alt = logo
      figure.append(img)
      slider.append(figure)
    }
    host.replaceChildren(slider)

    const timeout = setTimeout(() => $(slider).slick(slickConfig), 1200)

    return () => {
      clearTimeout(timeout)
      if (slider.classList.contains('slick-initialized')) $(slider).slick('unslick')
      host.replaceChildren()
    }
  }, [])

  return <div ref={hostRef} className="logos-gradient-container" />
}
