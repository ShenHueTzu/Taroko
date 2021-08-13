import styled, { css } from 'styled-components';

export const theme = {
  warn: css`
    border-color: #f55f56;
    background-color: #f55f56;
    color: #ffffff;

    &:hover {
      background-color: #c44941;
    }
    &:active {
      background-color: #a33b34;
    }
  `,

  add: css`
    color: #0497f1;
    border: 1px solid #0497f1;

    &:hover {
      background-color: #0497f1;
      color: white;
    }
  `,

  cancel: css`
    border: 1px solid rgba(0, 0, 0, 0.38);
    color: rgba(0, 0, 0, 0.56);
  `,

  disabled: css`
    background-color: #dadce3;
    color: rgba(0, 0, 0, 0.38);
  `,
};

export const Btn = styled.div`
  ${(props) => props.theme && theme[props.theme]};
  transition: .3s;
  border-radius: 6px;
  padding: 6px 16px;
  font-size: 14px;
  cursor: pointer;
`;