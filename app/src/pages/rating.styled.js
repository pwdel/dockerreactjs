import { ReactComponent as Icon } from "../img/bluecircle.svg";
import styled from 'styled-components';

// With wrapper, target the svg
export const IconWrapper = styled.div`
  svg {
    width: 1000px;
    height: 200px;
    fill: blue;
  }
`;

// Style the component (treated like styled.svg in this case)
export const StyledIcon = styled(Icon)`
  width: 1000px;
  height: 200px;
  fill: palevioletred;
`;

// With wrapper, target the generated className
export const IconWrapperTargetClassname = styled.div`
  ${StyledIcon} {
    fill: palegreen;
  }
`;
