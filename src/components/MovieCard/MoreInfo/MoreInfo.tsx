import React, { useState } from 'react';
import { Modal, ModalBody, Jumbotron, ModalFooter, Button } from 'reactstrap';

export interface IMoreInfoProps {
  isOpen: boolean;
}

export const MoreInfo = (props: IMoreInfoProps) => {
  const { isOpen } = props;

  const [toggleModal, setToggleModal] = useState(isOpen);

  const toggle = () => {
    setToggleModal(!toggleModal);
  };
  console.log(isOpen);
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody>
        <Jumbotron>ASDF</Jumbotron>
        <ModalFooter>
          <Button onClick={toggle}>Close</Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

export default MoreInfo;
