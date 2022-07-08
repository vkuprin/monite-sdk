import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UHospitalSymbol: FC<UniconProps> = ({
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
      d: 'M15,7a.99974.99974,0,0,0-1,1v3H10V8A1,1,0,0,0,8,8v8a1,1,0,0,0,2,0V13h4v3a1,1,0,0,0,2,0V8A.99974.99974,0,0,0,15,7ZM12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z',
    })
  );

export default UHospitalSymbol;
