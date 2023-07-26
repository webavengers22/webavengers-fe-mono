import { SVGProps } from 'react';

export interface LogoIconProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  color?: 'primary' | 'black' | 'white';
}
