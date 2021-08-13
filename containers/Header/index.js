import React, { useRef, useEffect} from "react";
import { useDispatch } from "react-redux";

import { openModal as openModalAction } from "../../redux/actions/common";
import { Wrapper, Inner, Text, Icon } from "./styled";

const Header = () => {
  const curRef = useRef();
  const dispatch = useDispatch();
  const openModal = (data) => dispatch(openModalAction(data));

  useEffect(() => {
    return () => clearTimeout(curRef.current);
  }, []);

  const onClick = () => {
    openModal({ modalType: "createConfirm" });
  };

  return (
    <Wrapper>
      <Inner>
        <Text>Contact List</Text>
        <Icon src="/icons/plus.svg" alt="add-ic" onClick={onClick} />
      </Inner>
    </Wrapper>
  );
};

export default Header;
