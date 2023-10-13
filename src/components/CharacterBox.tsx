'use client'

import { useState } from 'react'
import ModalThumbNails from './ModalThumbNails'

export interface CharacterProps {
  id: number
  image: string
  name: string
}
type ItemPropType = Pick<CharacterProps, 'image' | 'name'>

const CharacterBox = ({ image, name }: ItemPropType) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div className='flex flex-col w-full sm:w-1/2 md:w-1/4  lg:w-1/5  min-w-[200px]  cursor-pointer' >
        <picture onClick={handleIsOpen}>
          <source type='image/jpeg' srcSet={`${image}?width=100 100w`} />
          <img
          className='rounded-lg shadow-lg'
            role='presentation'
            loading='lazy'
            src={image}
            alt={name}
            srcSet={`${image}?width=100 100w`}
            decoding='async'
            sizes='(min-width: 265px) 33vw, 100vw'
            />
        </picture>
        <p>{name}</p>
        {
        isOpen &&
        <ModalThumbNails isOpen={isOpen} pitureUrl={image} onClose={handleClose} />
        }
      </div>
    </>
  )
}

export default CharacterBox
