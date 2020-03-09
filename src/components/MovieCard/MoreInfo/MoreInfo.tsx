import React, { useState } from 'react';
import { Modal, ModalBody, Jumbotron, ModalFooter, Button } from 'reactstrap';

export interface IMoreInfoProps {
  isOpen: boolean;
  handleClick: () => void;
}

export const MoreInfo = (props: IMoreInfoProps) => {
  const { isOpen, handleClick } = props;

  console.log(isOpen);
  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <Jumbotron>ASDF</Jumbotron>
        <ModalFooter>
          <Button onClick={handleClick}>Close</Button>
        </ModalFooter>
      </ModalBody>
    </Modal>
  );
};

export default MoreInfo;
