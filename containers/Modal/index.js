import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal as closeModalAction } from "../../redux/actions/common";
import Modal from "../../components/Modal";

const ModalContainer = () => {
  const modalType = useSelector((state) => state.common.modalType);
  const modalData = useSelector((state) => state.common.modalData);
  const dispatch = useDispatch();
  const closeModal = () => dispatch(closeModalAction());

  useEffect(() => {
    return () => {
      closeModal();
    };
  }, []);

  if (!modalType) return null;

  return (
    <Modal modalType={modalType} data={modalData} onModalClose={closeModal} />
  );
};

export default ModalContainer;
