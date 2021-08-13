import styled from 'styled-components';

export const Outer = styled.div`
  background: #fff;
  border-radius: 5px;
  min-height: 400px;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Top = styled.div`
  font-size: 20px;
  padding: 8px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #e7e7e7;
`;
export const Icon = styled.img`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin: auto;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;
export const Btm = styled.div`
  padding: 20px 30px;
  font-size: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px;
  border-top: 1px solid #e7e7e7;
  div {
    margin: 4px;
  }
`;