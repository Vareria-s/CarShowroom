import { useContext } from 'react'
import { CarouselContext } from '../carousel-context-reviews'
import './Page-reviews.css'

export const Page = ({ children }) => {
  const { width } = useContext(CarouselContext)
  return (
    <div
      className="page__main-container-reviews"
      style={{
        minWidth: `${width}px`,
        maxWidth: `${width}px`,
      }}
    >
      {children}
    </div>
  )
}
