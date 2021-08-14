import React from "react";
import styled from "styled-components";

import Modal from "../containers/Modal";
import Toast from "../containers/Toast";
import Header from "../containers/Header";
import List from "../containers/List";

const Page = styled.div`
  background: #fff;
  min-height: 100vh
`;

const Contact = () => (
  <Page>
    <Modal />
    <Toast />
    <Header />
    <List />
  </Page>
);

export default Contact;
