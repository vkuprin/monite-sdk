import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UMouse: FC<UniconProps> = ({
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
      d: 'M12,2A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2ZM7,9a5,5,0,0,1,4-4.9V10H7Zm10,6A5,5,0,0,1,7,15V12H17Zm0-5H13V4.1A5,5,0,0,1,17,9Z',
    })
  );

export default UMouse;
