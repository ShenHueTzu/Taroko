import React from "react";
import { useDispatch } from "react-redux";

import { delList as delListAction } from "../../../redux/actions/list";

import Button from "../../Button";
import { Outer, Icon, Top, Btm, BtnGroup } from "./styled";

const DeleteConfirm = ({ onModalClose, data }) => {
  const dispatch = useDispatch();
  const delList = (data) => dispatch(delListAction(data));

  const onDelete = () => {
    delList(data);
    onModalClose();
  };

  return (
    <Outer>
      <Top>
        Are you Sure ?
        <Icon src="/icons/close.svg" alt="close-ic" onClick={onModalClose} />
      </Top>
      <Btm>Contact will be deleted after click Delete.</Btm>
      <BtnGroup>
        <Button theme="warn" onClick={onDelete} text="Delete" />
        <Button theme="cancel" onClick={onModalClose} text="Cancel" />
      </BtnGroup>
    </Outer>
  );
};

export default DeleteConfirm;
