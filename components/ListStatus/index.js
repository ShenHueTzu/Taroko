import React from "react";

import { Cover } from "./styled";
import dataSet from "./data";

const Status = ({ type }) => (
  <Cover>
    <p dangerouslySetInnerHTML={{ __html: dataSet[type].text }} />
  </Cover>
);

export default Status;
