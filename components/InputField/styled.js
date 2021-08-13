import styled from 'styled-components';

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px;
  width: ${(props) => props.isHalf ? "40%" : "100%"};
  color: #4a4a4a;
  font-size: 14px;
  p {
    margin: 0;
  }
  input {
    margin: 2px 0;
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    padding: 12px 10px;
  }
`;