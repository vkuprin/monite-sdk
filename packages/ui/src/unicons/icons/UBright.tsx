import { FC, createElement } from 'react';
import { UniconProps } from '../types/Unicon';

const UBright: FC<UniconProps> = ({
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
      d: 'M12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,12,14Zm9.71-2.71L19.36,9V5.64a1,1,0,0,0-1-1H15.05L12.71,2.29a1,1,0,0,0-1.42,0L9,4.64H5.64a1,1,0,0,0-1,1V9L2.29,11.29a1,1,0,0,0,0,1.42l2.35,2.34v3.31a1,1,0,0,0,1,1H9l2.34,2.35a1,1,0,0,0,1.42,0l2.34-2.35h3.31a1,1,0,0,0,1-1V15.05l2.35-2.34A1,1,0,0,0,21.71,11.29Zm-4.05,2.64a1,1,0,0,0-.3.71v2.72H14.64a1,1,0,0,0-.71.3L12,19.59l-1.93-1.93a1,1,0,0,0-.71-.3H6.64V14.64a1,1,0,0,0-.3-.71L4.41,12l1.93-1.93a1,1,0,0,0,.3-.71V6.64H9.36a1,1,0,0,0,.71-.3L12,4.41l1.93,1.93a1,1,0,0,0,.71.3h2.72V9.36a1,1,0,0,0,.3.71L19.59,12Z',
    })
  );

export default UBright;
