import React from 'react';
import styled from 'styled-components';
import { GH_LOGO } from '../images';
import { GITHUB_REPO_URL } from './../constants';
// components
import { Logo } from './common';

const StyledAppBar = styled.div`
  grid-area: app-bar;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 2% 5% 0 0;
  align-items: center;
  position: fixed;
`;

const AppBar = () => (
  <StyledAppBar>
    <a href={GITHUB_REPO_URL}>
      <Logo src={GH_LOGO} />
    </a>
  </StyledAppBar>
);

export default AppBar;
