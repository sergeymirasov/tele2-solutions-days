import React, { useState } from 'react';
import styled from 'styled-components';

import { Switcher } from './switcher';
import { RangeSlider } from './range-slider';

export const App = () => {
  const [isChecked, setChecked] = useState(false);
  const toggleSwitcher = () => setChecked(!isChecked);

  const [progress, setProgress] = useState(0);
  const changeProgress = ({ target }) => setProgress(target.value);

  return (
    <StyledApp>
      <Switcher
        id="switcher"
        checked={isChecked}
        onCheck={toggleSwitcher}
        backdropActiveColor="green"
      />

      <br />

      <RangeSlider
        min="0"
        max="100"
        step="20"
        value={progress}
        onChange={changeProgress}
        width="300px"
      />
    </StyledApp>
  );
};

const StyledApp = styled.div``;
