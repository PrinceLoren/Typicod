import React, { FC } from 'react'
import { Modal } from 'react-responsive-modal'
import 'react-responsive-modal/styles.css'
import { ModalContent } from '@/components/Modal/styled'

interface IModal {
  children: React.ReactNode
  isOpen: boolean
  onClose: VoidFunction
}

export const ModalWindow: FC<IModal> = ({ onClose, isOpen, children }) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <ModalContent>{children}</ModalContent>
    </Modal>
  )
}
