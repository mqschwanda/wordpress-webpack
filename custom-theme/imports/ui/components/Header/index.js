/**
  The `<Header/>` component...
* */

import styled from 'styled-components';

export default styled.header`
  height: ${({ theme }) => theme.headerHeight};
  line-height: ${({ theme }) => theme.headerLineHeight};
  font-size: ${({ theme }) => theme.headerFontSize};
  color: ${({ theme }) => theme.headerColor};
  background-color: ${({ theme }) => theme.headerBgColor};
  box-shadow: ${({ theme }) => theme.componentShadow};

  @media ${({ theme }) => theme.smallAndDown}
  {
    height: ${({ theme }) => theme.headerHeightMobile};
    line-height: ${({ theme }) => theme.headerLineHeightMobile};
  }
`;
