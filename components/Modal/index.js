import React, { useState, useEffect } from "react";
import Portal from "../Portal";

import DeleteConfirm from "./deleteConfirm";
import CreateConfirm from "./createConfirm";
import EditConfirm from "./editConfirm";

import { ModalBack, ModalWrapper } from "./styled";

const getChild = (modalType) => {
  switch (modalType) {
    case "deleteConfirm":
      return DeleteConfirm;
    case "createConfirm":
      return CreateConfirm;
    case "editConfirm":
      return EditConfirm;

    default:
      return null;
  }
};

const Modal = ({ modalType, onModalClose, data }) => {
  const [isInit, setIsInit] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInit(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const Child = getChild(modalType);

  return (
    <Portal>
      <ModalBack>
        <ModalWrapper isInit={isInit}>
          <Child onModalClose={onModalClose} data={data} />
        </ModalWrapper>
      </ModalBack>
    </Portal>
  );
};

export default Modal;