import styled from 'styled-components';
import { darkGray } from '../../styles/colours';
import { font } from '../../styles/fonts';

const SectionLabel = styled.span`
  font-family: ${font};
  color: ${darkGray};
  padding-left: 10px;
  font-weight: 400;
  font-size: 14px;
`;

export default SectionLabel;
