import React from 'react';
import styled from 'styled-components';
import { gray, blue } from '../styles/colours';
import wishlist from '../data/wishlist';
import SectionLabel from './SectionLabel';

const WishlistItemWrapper = styled.div`
  margin: 0 5px;
  position: relative;
`;

const AddBookButton = styled.input.attrs({
  type: 'button',
  value: '+'
})`
  appearance: none;
  background-color: transparent;
  border: none;
  z-index: 1;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  color: #323131;
  font-weight: 100;
  outline: none;
`;

const BookCover = styled.img.attrs({
  src: props => props.cover,
})`
  width: 60px;
  height: 100%;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.13), 0 0 2px 0 rgba(0,0,0,.2);
`;

const WishlistItem = ({ image }) => (
  <WishlistItemWrapper>
    <BookCover cover={image} />
    {/* <AddBookButton /> */}
  </WishlistItemWrapper>
);

const WishlistWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 10px;
  display: flex;
  background-color: white;
  flex-direction: row;
  overflow-x: scroll;
  box-sizing: border-box;
`;

const WishlistStyled = styled.div`
  width: 100%;
  background-color: ${gray};
`;

const SectionLabelWrapper = SectionLabel.extend`
  margin: 10px 0 5px;
  display: block;
`;

const Wishlist = () => (
  <WishlistStyled>
    <SectionLabelWrapper>
      Unread Books in Your Collection
    </SectionLabelWrapper>
    <WishlistWrapper>
      {wishlist.map(m => <WishlistItem image={m.cover} key={m.id} />)}
    </WishlistWrapper>
  </WishlistStyled>
);

export default Wishlist;
