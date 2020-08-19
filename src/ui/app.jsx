import React, { useState } from 'react';
import styled from 'styled-components';

import { Switcher } from './switcher';

export const App = () => {
  const [isChecked, setChecked] = useState(false);
  const toggleSwitcher = () => setChecked(!isChecked);

  return (
    <StyledApp>
      <Switcher
        id="switcher"
        checked={isChecked}
        onCheck={toggleSwitcher}
        backdropActiveColor="green"
      />
    </StyledApp>
  );
};

const StyledApp = styled.div``;
