/**
  The `<Footer/>` component...
* */

import styled from 'styled-components';

export const Footer = styled.footer`
  ${'' /* color: ${props => props.theme.footerColor};
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.componentShadow}; */}
  height: ${({ theme }) => theme.footerHeight};
  font-size: ${({ theme }) => theme.footerFontSize};
  color: ${({ theme }) => theme.footerColor};
  background-color: ${({ theme }) => theme.footerBgColor};
  box-shadow: ${({ theme }) => theme.componentShadow};
  border-top: solid 5px ${({ theme }) => theme.primaryColor};
  flex-shrink: 0; /* Prevent Chrome, Opera, and Safari from letting these items
                     shrink to smaller than their content's default minimum
                     size.
                  */

  @media ${({ theme }) => theme.smallAndDown}
  {
    height: ${({ theme }) => theme.footerHeightMobile};
  }
`;

export const FooterNav = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${({ theme }) => theme.footerHeight};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.headerBgColor};
`;

export const Copyright = styled.div`
  position: relative;
  float: left;
  line-height: ${({ theme }) => theme.footerHeight};
  font-size: 12px;
  opacity: 0.5;
  color: ${({ theme }) => theme.white};
`;
