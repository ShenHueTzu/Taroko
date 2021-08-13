import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e7e7e7; 
  background: #fff;
  box-shadow: 0 2px 20px 0 rgb(0 0 0 / 10%);
`;
export const Inner = styled.div`
  max-width: 1024px;
  display: flex;
  justify-content: flex-start;
`;
export const Text = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #0497f1;
  margin: 0;
`;
export const Icon = styled.img`
  position: fixed;
  z-index: 99;
  top: 60px;
  right: 60px;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: .3s;
  :hover {
    transform: rotate(45deg);
  }

  @media screen and (max-width: 767px) {
    top: unset;
    right: 20px;
    bottom: 20px;
    width: 60px;
    height: 60px;
  }
`;