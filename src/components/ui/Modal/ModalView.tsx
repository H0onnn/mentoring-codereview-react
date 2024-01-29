import React from 'react';
import Modal from '.';
import useAlertStore from '@src/store/alert/useAlertStore';
import { createPortal } from 'react-dom';

const ModalView = () => {
  const { visible, title, message, actions, onDismiss } = useAlertStore();

  return visible
    ? createPortal(
        <Modal onClose={onDismiss}>
          <Modal.Title title={title} />
          <Modal.Content>{message}</Modal.Content>
          <Modal.ButtonGroup>
            {actions.map(({ label, onClick, buttonType = 'primary' }, index) => (
              <Modal.Button key={index} label={label} onClick={onClick} buttonType={buttonType} />
            ))}
          </Modal.ButtonGroup>
        </Modal>,
        document.getElementById('modal') as HTMLElement,
      )
    : null;
};

export default ModalView;
