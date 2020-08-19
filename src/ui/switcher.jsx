import React, { Fragment } from 'react';
import styled from 'styled-components';

export const Switcher = ({
  id,
  checked,
  onCheck,
  backdropColor,
  backdropActiveColor,
  buttonColor,
}) => {
  return (
    <Fragment>
      <StyledCheckbox id={id} type="checkbox" />
      <StyledLabel
        htmlFor={id}
        checked={checked}
        backdropColor={backdropColor}
        backdropActiveColor={backdropActiveColor}
        onClick={onCheck}
      >
        <StyledButton buttonColor={buttonColor} />
      </StyledLabel>
    </Fragment>
  );
};

const StyledButton = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 24px;
  height: 24px;
  border-radius: 24px;
  background-color: ${({ buttonColor }) => buttonColor ?? 'white'};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.3);
  transition: 0.2s;
`;

const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
  height: 28px;
  border-radius: 50px;
  background: ${({ checked, backdropActiveColor, backdropColor }) =>
    checked ? backdropActiveColor : backdropColor ?? 'grey'};
  transition: background-color 0.2s;
  cursor: pointer;

  &:active ${StyledButton} {
    width: 30px;
  }
`;

const StyledCheckbox = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + ${StyledLabel} ${StyledButton} {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }
`;
