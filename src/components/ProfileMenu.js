import React, { Component } from 'react';
import styled from 'styled-components';
import UserData from '../data/user';
import { streakIcon } from '../assets/assets';
import { font } from '../styles/fonts';
import { gray, darkGray } from '../styles/colours';

const ProfileMenuWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  background-color: ${gray};
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.13), 0 0 2px 0 rgba(0,0,0,.2);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
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

const StreakIcon = styled.img.attrs({
  src: streakIcon,
})`
  height:100%;
  width:auto;
`;

const UserName = styled.span`
  font-family: ${font};
  font-weight: 300;
  color: ${darkGray};
  font-size: 18px;
  margin-left: 5px;
`;

const UserProfile = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
`;

const UserStreak = styled.div`
  flex: 1;
  height: 100%;
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
  color: #f39c12;
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
          <StreakIcon />
          <StreakCount>3</StreakCount>
        </UserStreak>
      </ProfileMenuWrapper>
    );
  }
}

module.exports = ProfileMenu;
