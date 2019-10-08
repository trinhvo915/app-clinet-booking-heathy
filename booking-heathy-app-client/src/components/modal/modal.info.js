import React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalInfo = ({
  size,
  isShowModal,
  toggleModal,
  children,
  title,
  okText,
  cancelText,
  clickOK,
  showCancel = true,
  clickCancel,
  extraInfoLabel,
  hiddenFooter
}) => {
  return (
    <Modal isOpen={isShowModal} toggle={toggleModal} size={size}> 
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{children}</ModalBody>

      {!hiddenFooter && (
        <ModalFooter className="justify-content-center">
          <Button color="danger" onClick={clickOK || toggleModal}>
            {okText || "Xác nhận"}
          </Button>{" "}
          {showCancel && (
            <Button color="secondary" onClick={clickCancel || toggleModal}>
              {cancelText || "Hủy bỏ"}
            </Button>
          )}
        </ModalFooter>
      )}
    </Modal>
  );
};

export default ModalInfo;