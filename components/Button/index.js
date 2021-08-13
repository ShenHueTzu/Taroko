import React from "react";

import { Btn } from "./styled";

const Button = ({ theme, text, onClick }) => (
  <Btn theme={theme} onClick={onClick}>
    {text}
  </Btn>
);

export default Button;
