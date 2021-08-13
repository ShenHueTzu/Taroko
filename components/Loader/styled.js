import styled ,{ keyframes }from 'styled-components';

const shine = keyframes`
to {
    background-position-x: -200%;
  }
`;

export const Group = styled.div`
  max-width: 1024px;
  margin: 120px auto 0;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  padding: 15px 20px;
  margin: 20px;
  border-radius: 15px;
  border: 1px solid #e7e7e7;
  width: 400px;
  height: 200px;

  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${shine} linear infinite;
`;