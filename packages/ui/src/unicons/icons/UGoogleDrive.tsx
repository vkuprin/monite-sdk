import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UGoogleDrive: FC<UniconProps> = ({
  color = 'currentColor',
  size,
  ...otherProps
}) =>
  createElement(
    'svg',
    {
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: color,
      ...otherProps,
    },
    createElement('path', {
      d: 'M21.4231,13.88785,15.33356,3.33792H8.66663l6.09,10.54993ZM8.08917,4.33835,2,14.88736l3.33356,5.77472,6.08911-10.54926Zm1.73273,10.549L6.48877,20.66208H18.66663L22,14.88736Z',
    })
  );

export default UGoogleDrive;
