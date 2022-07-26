import React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  name: string;
}

export const Svg = ({ name, ...props }: Props) => {
  return (
    <>
      <svg {...props}>
        <use xlinkHref={`/svg/symbol-defs.svg#icon-${name}`} />
      </svg>
    </>
  );
};
