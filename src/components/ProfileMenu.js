import React, { Component } from 'react';
import styled from 'styled-components';
import UserData from '../data/user';
import Icon from './Icon';
import { font } from '../styles/fonts';
import { darkestGray, blue } from '../styles/colours';
import Image from './Image';

const ProfileMenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
`;

const UserPhotoContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  overflow: hidden;
  font-size: 8px;
`;

const UserName = styled.span`
  font-family: ${font};
  font-weight: 300;
  color: ${darkestGray};
  font-size: 20px;
  margin-left: 10px;
  user-select: none;
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
          <UserPhotoContainer>
            <Image imageUrl={UserData.photo} />
          </UserPhotoContainer>
          <UserName>{UserData.name}</UserName>
        </UserProfile>
        <UserStreak>
          <Icon name="lightning" width={30} height={30} />
          {/* <StreakCount>3</StreakCount> */}
        </UserStreak>
      </ProfileMenuWrapper>
    );
  }
}

export default ProfileMenu;
