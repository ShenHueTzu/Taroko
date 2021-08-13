import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  getList as getListAction,
  setList as setListAction,
} from "../../redux/actions/list";
 import { openModal as openModalAction } from "../../redux/actions/common";

import Filter from "../../components/Filter";
import Loader from "../../components/Loader";
import ItemComp from "../../components/Item";

import { Wrapper, Title, Group } from "./styled";

const List = () => {
  const { list, isFetching } = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const openModal = (data) => dispatch(openModalAction(data));
  const getList = () => dispatch(getListAction());
  const setList = (data) => dispatch(setListAction(data));

  useEffect(() => {
    if (!list) getList();
  }, []);

  if (!list || isFetching) return <Loader />;

  const handleEdit = (id) => {
    openModal({ modalType: "editConfirm", modalData: id })
  };

  const handleDelete = (id) => {
    openModal({ modalType: "deleteConfirm", modalData: id })
  };

  const handleFilter = (e) => {
    let listCopy = [...list];
    console.log(e.target.value);
    if (e.target.value === "asc") {
      listCopy.sort((a, b) => a.first_name.localeCompare(b.first_name));
    } 
    if (e.target.value === "des") {
      listCopy.sort((a, b) => a.first_name.localeCompare(b.first_name)).reverse();
    }
    setList(listCopy);
  };

  return (
    <Wrapper>
      <Title>Contact List</Title>
      <Filter handleFilter={handleFilter} />
      <Group>
        {list.map((item) => 
          <ItemComp
            key={item.id}
            data={item}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        )}
      </Group>
    </Wrapper>
  );
};

export default List;
