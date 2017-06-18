import React from 'react';
import styled from 'styled-components';
import ProfileMenu from './ProfileMenu';
import NavigationMenu from './NavigationMenu';
import { mediumGray } from '../styles/colours';

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  ${''/* box-shadow: 0 2px 12px 0 rgba(0,0,0,.13), 0 0 2px 0 rgba(0,0,0,.2); */}
  background-color: ${mediumGray};
  z-index: 1;
  height: 85px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = () =>
  (<HeaderWrapper>
    <ProfileMenu />
    <NavigationMenu />
  </HeaderWrapper>);
