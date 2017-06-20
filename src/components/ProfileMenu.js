import React, { Component } from 'react';
import styled from 'styled-components';
import UserData from '../data/user';
import Icon from './Icon';
import { font } from '../styles/fonts';
import { darkestGray, blue } from '../styles/colours';

const ProfileMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const UserPhoto = styled.img.attrs({
  src: props => props.src,
})`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`;


const UserName = styled.span`
  font-family: ${font};
  font-weight: 300;
  color: ${darkestGray};
  font-size: 18px;
  margin-left: 10px;
`;

const UserProfile = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

const UserStreak = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const StreakCount = styled.span`
  bottom: 0;
  position: absolute;
  right: 10px;
  font-family: ${font};
  font-size: 13px;
  color: ${blue};
  font-weight: bold;
`;

class ProfileMenu extends Component {
  render() {
    return (
      <ProfileMenuWrapper>
        <UserProfile>
          <UserPhoto src={UserData.photo} />
          <UserName>{UserData.name}</UserName>
        </UserProfile>
        <UserStreak>
          <Icon name="lightning" />
          {/* <StreakCount>3</StreakCount> */}
        </UserStreak>
      </ProfileMenuWrapper>
    );
  }
}

export default ProfileMenu;
