import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UBowlingBall: FC<UniconProps> = ({
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
      d: 'M7.9917,8.00171a1,1,0,1,0,1,1A1,1,0,0,0,7.9917,8.00171ZM11.99121,2.002a10,10,0,1,0,10,10A10.01177,10.01177,0,0,0,11.99121,2.002Zm0,18a8,8,0,1,1,8-8A8.00916,8.00916,0,0,1,11.99121,20.002ZM10.9917,10.00171a1,1,0,1,0,1,1A1,1,0,0,0,10.9917,10.00171Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,10.9917,6.00171Z',
    })
  );

export default UBowlingBall;