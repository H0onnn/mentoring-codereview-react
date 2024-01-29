import React from 'react';
import styled from 'styled-components';
import { colors } from '@constants/colors';
import Button from '@components/ui/Button';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onClose?: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <>
      <Backdrop onClick={onClose} />
      <ModalContainer>
        <ModalView>{children}</ModalView>
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 100;
`;

const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  width: auto;
  height: auto;
  min-width: 300px;
  min-height: 160px;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: ${colors.black};
  opacity: 0.4;

  z-index: 10;
`;

interface ModalTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const ModalTitle = ({ title, ...props }: ModalTitleProps) => {
  return (
    <ModalTitleContainer {...props}>
      <h3>{title}</h3>
    </ModalTitleContainer>
  );
};

const ModalTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > h3 {
    font-size: 20px;
    font-weight: bold;
  }
`;

interface ModalContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalContent = ({ children, ...props }: ModalContentProps) => {
  return (
    <ModalContentContainer {...props}>
      <span>{children}</span>
    </ModalContentContainer>
  );
};

const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 30px;

  & > span {
    font-size: 16px;
    color: ${colors.black};
    text-align: center;
    white-space: pre-wrap;
  }
`;

interface ModalButtonGruopProps extends React.HTMLAttributes<HTMLDivElement> {}

const ModalButtonGroup = ({ children, style, ...props }: ModalButtonGruopProps) => {
  return (
    <ModalButtonGroupContainer style={style} {...props}>
      {children}
    </ModalButtonGroupContainer>
  );
};

const ModalButtonGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

interface ModalButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: 'primary' | 'secondary';
  label: string;
}

const ModalButton = ({ buttonType, onClick, label, ...props }: ModalButtonProps) => {
  return (
    <Button variant={buttonType} onClick={onClick} {...props}>
      {label}
    </Button>
  );
};

Modal.ButtonGroup = ModalButtonGroup;
Modal.Button = ModalButton;
Modal.Title = ModalTitle;
Modal.Content = ModalContent;

export default Modal;
