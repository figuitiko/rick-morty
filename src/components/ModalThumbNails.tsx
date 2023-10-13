import React from 'react'
import Modal from './Modal'
import Image from 'next/image'
interface Props {
  isOpen: boolean
  onClose?: () => void
  pitureUrl: string
}

const ModalThumbNails = ({ isOpen, pitureUrl, onClose }: Props) => {
  return (
   <Modal isOpen={isOpen} onClose={onClose}>
    <picture>
      <Image src={pitureUrl} alt='image' width={500} height={500} />
    </picture>
   </Modal>
  )
}

export default ModalThumbNails
