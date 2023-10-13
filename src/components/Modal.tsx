'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
  isOpen: boolean
  onClose?: () => void
}
const Modal = ({ children, isOpen, onClose }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalRef = useRef<HTMLDialogElement | null>(null)
  useEffect(() => {
    setIsModalOpen(isOpen)
  }, [isOpen])
  useEffect(() => {
    const modalElement = modalRef.current
    if (modalElement !== null) {
      if (isModalOpen) {
        modalElement.showModal()
      } else {
        modalElement.close()
      }
    }
    return () => {
      if (modalElement !== null) {
        modalElement.close()
      }
    }
  }, [isModalOpen])
  useEffect(() => {
    window.addEventListener('click', (e) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'DIALOG') {
        handleClose()
      }
    })
    return () => {
      window.removeEventListener('click', () => {
        handleClose()
      })
    }
  }, [])

  const handleClose = () => {
    if (onClose !== undefined) {
      onClose()
    }
    setIsModalOpen(false)
  }
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  return (
    <>
      <dialog className='relative overflow-hidden'
        ref={modalRef}
        open={isModalOpen}
        onKeyDown={handleKeyDown}
      >
        <button className='absolute right-0 text-3xl  text-red-400 cursor-pointer animate-spin border-2 rounded-sm' onClick={handleClose}>X</button>
        {children}
      </dialog>
    </>
  )
}

export default Modal
