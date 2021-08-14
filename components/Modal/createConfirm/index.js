import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postList as postListAction } from "../../../redux/actions/list";
import { openToast as openToastAction } from "../../../redux/actions/common";

import InputField from "../../InputField";
import Button from "../../Button";
import { Outer, Icon, Top, Btm, BtnGroup } from "./styled";

const CreateConfirm = ({ onModalClose }) => {
  const [infos, setInfo] = useState({
    first_name: "",
    last_name: "",
    job: "",
    description: "",
  });
  const dispatch = useDispatch();
  const postList = (data) => dispatch(postListAction(data));
  const openToast = (data) => dispatch(openToastAction(data));

  const onUpdate = (e, key) => {
    const infosCopy = {...infos};
    infosCopy[key] = e.target.value;
    setInfo(infosCopy);
  };

  const onAdd = () => {
    if (Object.values(infos).filter((itm) => itm === "").length > 0) {
      return openToast({ toastType: "emptyField" });
    }

    postList({ contact: infos });
    onModalClose();
  };

  return (
    <Outer>
      <Top>
        Create a contact
        <Icon src="/icons/close.svg" alt="close-ic" onClick={onModalClose} />
      </Top>
      <Btm>
        <InputField label="First Name" isHalf onUpdate={(e) => onUpdate(e, "first_name")} />
        <InputField label="Last Name" isHalf onUpdate={(e) => onUpdate(e, "last_name")} />
        <InputField label="Job" onUpdate={(e) => onUpdate(e, "job")} />
        <InputField label="Description" onUpdate={(e) => onUpdate(e, "description")} />
      </Btm>
      
      <BtnGroup>
        <Button theme="add" onClick={onAdd} text="Create" />
        <Button theme="cancel" onClick={onModalClose} text="Cancel" />
      </BtnGroup>
    </Outer>
  );
};

export default CreateConfirm;
