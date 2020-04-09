import React from 'react'

import { Modal, ModalBody, Row, Col, Button } from 'reactstrap'

import './CustomModal.scss'

const CustomModal = ({ visible, toggle, button, children, className }) => {
  return (
    <div className={`customModal`}>
      {button}

      <Modal
        className={`${className}`}
        isOpen={visible}
        toggle={toggle}
        centered
      >
        <ModalBody>{children}</ModalBody>
      </Modal>
    </div>
  )
}

export default CustomModal
