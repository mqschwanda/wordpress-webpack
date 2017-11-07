/**

* */

import styled from 'styled-components';

export const MasoinryBlock = styled.div.attrs({

})`
  width: 100%;
  cursor: pointer;
  @media ${({ theme }) => theme.mediumOnly} {
    width: 50%;
  }
  @media ${({ theme }) => theme.largeAndUp} {
    width: 33.33%;
  }
`;
export default MasoinryBlock;
