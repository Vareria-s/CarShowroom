import { useContext } from 'react'
import { CarouselContext } from '../carousel-context-stock'
import './Page-stock.css'

export const Page = ({ children }) => {
  const { width } = useContext(CarouselContext)
  return (
    <div
      className="page__main-container-stock"
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  )
}
