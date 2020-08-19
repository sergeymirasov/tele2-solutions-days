import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './ui/app';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

render(app, root);
