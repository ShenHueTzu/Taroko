import styled from 'styled-components';

export const Icon = styled.img`
  display: flex;
  position: absolute;
  right: 20px;
  top: 20px;
  width: 20px;
  height: 20px;

  cursor: pointer;
`;

export const Outer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  position: absolute;
  top: 40px;
  right: 20px;
  background: #ffffff;
  z-index: 2;
`;

export const Option = styled.div`
  padding: 8px 16px;
  color: #4a4a4a;
  font-size: 14px;
  cursor: pointer;
  :hover {
    background: #e7e7e7;
  }
`;