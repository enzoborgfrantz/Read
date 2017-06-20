import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import { font } from '../styles/fonts';
import { darkestGray } from '../styles/colours';

const MenuItemWrapper = styled.span`
  display: flex;
  align-items: center;
`;

const MenuTitle = styled.span`
  margin-left: 5px;
  font-size: 13px;
  font-weight: 400;
  font-family: ${font};
  color: ${darkestGray};
`;

const MenuItem = ({ title, icon }) => (
  <MenuItemWrapper>
    <Icon name={icon} width={15} height={15} />
    <MenuTitle>{title}</MenuTitle>
  </MenuItemWrapper>
);

const NavigationMenuWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

const NavigationMenu = () => (
  <NavigationMenuWrapper>
    <MenuItem title={'Currently Reading'} icon={'book'} />
    <MenuItem title={'Books'} icon={'bookShelf'} />
    <MenuItem title={'Wishlist'} icon={'heart'} />
  </NavigationMenuWrapper>
);

export default NavigationMenu;
