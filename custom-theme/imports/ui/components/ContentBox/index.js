/**
  The `<ContentBox/>` component...
**/

import styled from 'styled-components';

export default styled.div`
  & p,
  & span,
  & a,
  {
    font-family: ${props => props.theme.paragraphFontFamily};
    color: ${props => props.theme.paragraphFontColor};
  }
  & a {
    text-decoration: underline;
    color: ${props => props.theme.paragraphFontColor};
  }
  & a:hover {
    color: #000;
  }
`;
