import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UArrowDownRight: FC<UniconProps> = ({
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
      d: 'M17,6a1,1,0,0,0-1,1v7.59L7.71,6.29A1,1,0,0,0,6.29,7.71L14.59,16H7a1,1,0,0,0,0,2H17a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,18,17V7A1,1,0,0,0,17,6Z',
    })
  );

export default UArrowDownRight;
