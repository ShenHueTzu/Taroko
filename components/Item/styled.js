import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px 20px;
  margin: 20px;
  border-radius: 15px;
  border: 1px solid #e7e7e7;
  background: #ffffff;
  width: 400px;
  min-height: 200px;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);

  position: relative;
`;
export const Upper = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
`;
export const Btm = styled.div`
  padding: 0 8px;
`;
export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px ssolid #ffffff;
  background: url("/icons/avatar.svg") center;
  background-size: contain;
`;
export const Col = styled.div`
  padding: 4px 8px;
  color: ${(props) => props.isGray ? "#4a4a4a" : "#505050"};
  font-size: ${(props) => props.isGray ? "16" : "20"}px;
`;