import React from "react";
import { Selector } from "./styled";

const Filter = ({ handleFilter }) => (
  <Selector onChange={(e) => handleFilter(e)}>
    <option value="asc">A - Z</option>
    <option value="des">Z - A</option>
  </Selector>
);

export default Filter;
