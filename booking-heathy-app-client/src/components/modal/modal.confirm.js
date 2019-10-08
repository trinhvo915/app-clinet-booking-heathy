import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

const ModalConfirm = ({ title, isShowModal, clickOk, toggleModal }) => {
  return (
    <div>
      <Modal isOpen={isShowModal} toggle={toggleModal}>
        <ModalBody>
          {title || "Bạn có chắc chắn muốn xoá trường dữ liệu này?"}
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={clickOk}>
            Xác nhận
          </Button>{" "}
          <Button color="secondary" onClick={toggleModal}>
            Huỷ bỏ
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalConfirm;