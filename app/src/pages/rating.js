import React from 'react';
// import styles
import { IconWrapper,StyledIcon,IconWrapperTargetClassname  } from './rating.styled';
// import images
import bluecircle from '../img/bluecircle.svg';
// import reddownarrow from './img/reddownarrow.svg';
// import greenuparrow from './img/greenuparrow.svg';


export default function Rating() {

  return (
    <>
      <div>
        <IconWrapperTargetClassname>
          <StyledIcon>
            <IconWrapper>
              <img src={bluecircle} alt="hold" />
            </IconWrapper>
          </StyledIcon>
        </IconWrapperTargetClassname>
      </div>
    </>
  );

}
