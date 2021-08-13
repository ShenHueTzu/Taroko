import React, { useState } from "react";

import { Icon, Outer, Option } from "./styled";

const Menu = ({ id, onEdit, onDelete }) => (
  <Outer>
    {onEdit && <Option onClick={() => onEdit(id)}>Edit</Option>}
    {onDelete && <Option onClick={() => onDelete(id)}>Delete</Option>}
  </Outer>
);

const MoreIcon = ({ id, onEdit, onDelete }) => {
  const [isCollapse, setIsCollapse] = useState(true);

  const onBlurEvent = () => {
    setIsCollapse(true);
  };

  const onToggle = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div tabIndex={0} onBlur={onBlurEvent}>
      <Icon src="/icons/more.svg" alt="more-ic" onClick={onToggle} />
      {!isCollapse && (
        <Menu
          id={id}
          onEdit={onEdit}
          onDelete={onDelete}
        />)
      }
    </div>
  );
};

export default MoreIcon;
