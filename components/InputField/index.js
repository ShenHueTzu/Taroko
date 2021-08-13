import React from "react";
import { Group } from "./styled";

const InputField = ({ label, defaultValue, isHalf, onUpdate }) => (
  <Group isHalf={isHalf}>
    <p>{label}</p>
    <input
      defaultValue={defaultValue}
      placeholder={defaultValue ? "" : `Please enter your ${label}`}
      onChange={(e) => onUpdate(e)}
    />
  </Group>
);

export default InputField;
