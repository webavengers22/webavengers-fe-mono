import { solidIconList, fillIconList, SolidIconType, FillIconType } from './vector';
import { SVGProps, FC } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  name: FillIconType | SolidIconType; // fIconList와 sIconList의 key 값들
  solid?: boolean;
  size?: 12 | 14 | 16 | 18 | 20 | 24;
  color?: string;
}

const Icon: FC<IconProps> = ({ name, size = 24, color = 'currentColor', solid, ...props }) => {
  const IconComponent = solid
    ? solidIconList[name as SolidIconType]
    : fillIconList[name as FillIconType];
  if (!IconComponent) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={color || 'currentColor'}
    >
      {IconComponent}
    </svg>
  );
};

export default Icon;
