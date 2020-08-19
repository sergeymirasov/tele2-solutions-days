import React from 'react';
import styled from 'styled-components';

/**
 * ToDo
 *
 * Try add value counter with pseudo element
 */

export const RangeSlider = ({ min, max, value, onChange, step, width }) => {
  return (
    <StyledRangeSlider
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      width={width}
    />
  );
};

const StyledRangeSlider = styled.input`
  max-width: ${({ width }) => width};
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background-color: #ccc;
  outline: none;
  opacity: 0.8;
  transition: opacity 0.2s;
  appearance: none;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: tomato;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.6);
    cursor: pointer;
    appearance: none;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border: none;
    border-radius: 50%;
    background-color: tomato;
    box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.6);
    cursor: pointer;
  }

  &::-moz-range-progress {
    height: 10px;
    border-radius: 5px;
    background-color: tomato;
  }
`;
