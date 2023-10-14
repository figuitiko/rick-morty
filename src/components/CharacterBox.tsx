/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import { useState } from 'react'
import ModalThumbNails from './ModalThumbNails'
import { flushSync } from 'react-dom'

export interface CharacterProps {
  id: string
  image: string
  name: string
}

const CharacterBox = ({ image, name, id }: CharacterProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    // @ts-expect-error
    document.startViewTransition(() => {
      flushSync(() => {
        setIsOpen(true)
      })
    })
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
        <ModalThumbNails id = {id} isOpen={isOpen} pitureUrl={image} onClose={handleClose} />
        }
      </div>
    </>
  )
}

export default CharacterBox
