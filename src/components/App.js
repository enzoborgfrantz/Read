import React from 'react';
import styled from 'styled-components';
import ProfileMenu from './ProfileMenu';
import CurrentlyReading from './CurrentlyReading';

const AppWrapper = styled.div`
  width: 100%;
`;

export default function () {
  return (
    <AppWrapper>
      <ProfileMenu />
      <CurrentlyReading />
    </AppWrapper>
  );
}
