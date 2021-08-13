import styled from 'styled-components';

export const Selector = styled.select`
  padding: 8px 15px;
  width: 150px;
  background: #fff;
  border-radius: 2px;
  margin: 0 60px 0 auto;

  @media screen and (max-width: 767px) {
    width: 85%;
    margin: auto;
  }
  
  option {
    background: #fff;
  }
`;