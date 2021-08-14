import React from "react";
import Portal from "../Portal";
// import Icon from "../Icon";
import data from "./data";
import {
  Background,
  Wrapper,
  WrapperInner,
  Text,
} from "./styled";

const Toast = ({ isHide, toastType }) => {
  const { text, isWarning } = data[toastType];

  return (
    <Portal>
      <>
        <Background />
        <Wrapper id="toast" isHide={isHide}>
          <WrapperInner isWarning={isWarning}>
            <Text dangerouslySetInnerHTML={{ __html: text }} />
          </WrapperInner>
        </Wrapper>
      </>
    </Portal>
  );
};

export default Toast;
