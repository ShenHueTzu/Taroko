import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  putList as putListAction,
  getContact as getContactAction,
  resetInfo as resetInfoAction,
} from "../../../redux/actions/list";
import { openToast as openToastAction } from "../../../redux/actions/common";

import InputField from "../../InputField";
import Button from "../../Button";
import { Outer, Icon, Top, Btm, BtnGroup } from "./styled";

const EditConfirm = ({ onModalClose, data }) => {
  const dataInfo = useSelector((state) => state.list.infos);
  const [infos, setInfo] = useState({
    first_name: "",
    last_name: "",
    job: "",
    description: "",
  });
  const dispatch = useDispatch();
  const putList = (data) => dispatch(putListAction(data));
  const getContact = (data) => dispatch(getContactAction(data));
  const resetInfo = () => dispatch(resetInfoAction());
  const openToast = (data) => dispatch(openToastAction(data));

  useEffect(() => {
    getContact(data);

    return () => {
      resetInfo();
    }
  }, [data]);

  useEffect(() => {
    if (dataInfo) {
      setInfo({
        first_name: dataInfo.first_name,
        last_name: dataInfo.last_name,
        job: dataInfo.job,
        description: dataInfo.description,
      });
    }
  }, [dataInfo]);

  const onUpdate = (e, key) => {
    let infosCopy = {...infos};
    infosCopy[key] = e.target.value;
    setInfo(infosCopy);
  };

  const onEdit = () => {
    if (Object.values(infos).filter((itm) => itm === "").length > 0) {
      return openToast({ toastType: "emptyField" });
    }

    putList({ info: infos, id: data });
    onModalClose();
    resetInfo();
  };

  return (
    <Outer>
      <Top>
        Create a contact
        <Icon src="/icons/close.svg" alt="close-ic" onClick={onModalClose} />
      </Top>
      <Btm>
        <InputField label="First Name" defaultValue={infos.first_name} isHalf onUpdate={(e) => onUpdate(e, "first_name")} />
        <InputField label="Last Name" isHalf defaultValue={infos.last_name} onUpdate={(e) => onUpdate(e, "last_name")} />
        <InputField label="Job" defaultValue={infos.job} onUpdate={(e) => onUpdate(e, "job")} />
        <InputField label="Description" defaultValue={infos.description} onUpdate={(e) => onUpdate(e, "description")} />
      </Btm>
      
      <BtnGroup>
        <Button theme="add" onClick={onEdit} text="Confirm" />
        <Button theme="cancel" onClick={onModalClose} text="Cancel" />
      </BtnGroup>
    </Outer>
  );
};

export default EditConfirm;
