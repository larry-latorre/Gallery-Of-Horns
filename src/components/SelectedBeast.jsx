/* eslint-disable react/prop-types */

import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';

export default function SelectedBeast({selectedBeast, show, handleClose}) {
  
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <Modal.Title>{selectedBeast.title}</Modal.Title>
        </ModalHeader>
        <ModalBody>
            <Image src={selectedBeast.image_url}></Image>
          Woohoo, you are reading this text in a modal! Add your content here.
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
