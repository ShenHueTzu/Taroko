import React from "react";

import MoreIcon from "../More";
import { Card, Upper, Btm, Icon, Col } from "./styled";

const Item = ({ data, handleEdit, handleDelete }) => {
  if (!data) return;

  return (
    <Card>
      <Upper>
        <Icon />
        <Col>{`${data.first_name} ${data.last_name}`}</Col>
        <MoreIcon id={data.id} onEdit={handleEdit} onDelete={handleDelete} />
      </Upper>
      <Btm>
        <Col isGray>{`Job: ${data.job}`}</Col>
        <Col isGray>{`Description: ${data.description}`}</Col>
      </Btm>
    </Card>
  );
};

export default Item;
