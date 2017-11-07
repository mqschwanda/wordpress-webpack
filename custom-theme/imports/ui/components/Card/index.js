/**
  The `<Card/>` component...
**/

import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: ${props => props.theme.componentMargin};
  background-color: ${props => props.theme.componentBgColor};
  border-radius: ${props => props.theme.componentBorderRadius};
  transition: ${props => props.theme.componentTransition};
  box-shadow: ${props => props.theme.componentShadow};
`;

export const CardTitle = styled.span`
  display: block;
  line-height: ${props => props.theme.componentTitleLineHeight};
  margin-bottom: ${props => props.theme.componentTitleMarginBottom};
  font-size: ${props => props.theme.componentTitleFontSize};
  font-weight: ${(props) => {
    if (props.bold) return '400';
    return props.theme.componentTitleFontWeight;
  }};
  & i
  {
    line-height: ${props => props.theme.componentTitleLineHeight};
  }
  font-family: ${(props) => {
    if (props.bold) return props.theme.headerFontFamily;
    return props.theme.paragraphFontFamily;
  }};
`;

export const CardContent = styled.div`
  box-sizing: inherit;
  padding: ${props => props.theme.componentPadding};
  border-radius: ${props => props.theme.componentBorderRadius};
  & p
  {
    margin: ${props => props.theme.componentParagraphMargin};
    color: inherit;
  }
`;

export const CardAction = styled.div`
  position: relative;
  background-color: inherit;
  box-sizing: inherit;
  border-top: ${props => props.theme.componentBorder};
  padding-top: ${props => props.theme.componentInternalPadding};
  padding-left: ${props => props.theme.componentPadding};
  padding-right: ${props => props.theme.componentPadding};
  &:last-child
  {
    padding-bottom: ${props => props.theme.componentInternalPadding};
    border-bottom-left-radius: ${props => props.theme.componentBorderRadius};
    border-bottom-right-radius: ${props => props.theme.componentBorderRadius};
  }
  & a
  {
    text-transform: uppercase;
    transition: ${props => props.theme.linkTransition};
    margin-right: ${props => props.theme.linkMarginRight};
    color: ${props => props.theme.linkColor};
  }
`;
