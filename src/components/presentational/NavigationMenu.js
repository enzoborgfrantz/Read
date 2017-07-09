import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 5px;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  user-select: none;
  flex: 1;
  justify-content: center;
  ${props => props.selected && 'background-color: #fbfbfb'};
`;

const NavLinkStyled = styled(NavLink)`
  width: 100%;
`;

const MenuItem = ({ icon, route, ...props }) => (
  <NavLinkStyled to={`/${route}`}>
    <MenuItemWrapper {...props}>
      <Icon name={icon} width={25} height={25} />
    </MenuItemWrapper>
  </NavLinkStyled>
);

const NavigationMenuWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`;

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenuItem: 0,
    };
    this.selectMenuItem = this.selectMenuItem.bind(this);
  }

  selectMenuItem(i) {
    this.setState({ selectedMenuItem: i });
  }

  isSelectedMenuItem(i) {
    const { selectedMenuItem } = this.state;
    return selectedMenuItem === i;
  }

  render() {
    const { menuItems } = this.props;

    return (
      <NavigationMenuWrapper>
        {
          menuItems.map((m, i) =>
          (<MenuItem
            icon={m.icon}
            route={m.route}
            selected={this.isSelectedMenuItem(i)}
            onClick={() => { this.selectMenuItem(i); }}
          />))
        }
      </NavigationMenuWrapper>
    );
  }
}

NavigationMenu.defaultProps = {
  menuItems: [
    {
      route: 'home',
      icon: 'book',
    }, {
      route: 'search',
      icon: 'search',
    }, {
      route: 'collection',
      icon: 'bookShelf',
    }, {
      route: 'feed',
      icon: 'news',
    },
  ],
};

export default NavigationMenu;
