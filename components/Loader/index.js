import React from "react";

import { Group, Card } from "./styled";

const Loader = () => (
  <Group>
  {
    [...Array(4)].map((_, idx) => (<Card key={idx} />))
  }
  </Group>
);

export default Loader;
