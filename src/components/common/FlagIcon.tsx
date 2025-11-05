import React from 'react';

interface FlagIconProps extends React.SVGProps<SVGSVGElement> {
  code: string;
}

const FlagMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  br: (props) => (
    <svg
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g clipPath="url(#BR_svg__a)">
        <path
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
          fill="#6DA544"
        />
        <path
          d="M12 4.696 21.913 12 12 19.305 2.087 12 12 4.696Z"
          fill="#FFDA44"
        />
        <path
          d="M12 16.174a4.174 4.174 0 1 0 0-8.348 4.174 4.174 0 0 0 0 8.348Z"
          fill="#F0F0F0"
        />
        <path
          d="M9.913 11.74a7.02 7.02 0 0 0-2.086.315 4.173 4.173 0 0 0 7.59 2.34 7.034 7.034 0 0 0-5.504-2.655Zm6.183 1.06a4.174 4.174 0 0 0-7.932-2.447 8.607 8.607 0 0 1 7.932 2.447Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="BR_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  pt: (props) => (
    <svg
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        clipPath="url(#PT_svg__a)"
        transform="scale(1.3) translate(-3.7, -3.7)"
      >
        <path
          d="M0 12c0 5.16 3.256 9.559 7.826 11.254L8.87 12.001 7.826.747C3.256 2.443 0 6.841 0 12.001Z"
          fill="#6DA544"
        />
        <path
          d="M24 12c0-6.627-5.372-12-12-12-1.468 0-2.874.264-4.174.746v22.508c1.3.482 2.706.746 4.174.746 6.628 0 12-5.373 12-12Z"
          fill="#D80027"
        />
        <path
          d="M7.826 16.174a4.174 4.174 0 1 0 0-8.347 4.174 4.174 0 0 0 0 8.347Z"
          fill="#FFDA44"
        />
        <path
          d="M5.478 9.913v2.608a2.348 2.348 0 0 0 4.695 0V9.913H5.478Z"
          fill="#D80027"
        />
        <path
          d="M7.827 13.304a.784.784 0 0 1-.783-.783v-1.043h1.565v1.043a.784.784 0 0 1-.782.783Z"
          fill="#F0F0F0"
        />
      </g>
      <defs>
        <clipPath id="PT_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  gb: (props) => (
    <svg
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        clipPath="url(#GB_svg__a)"
        transform="scale(1.3) translate(-3.7, -3.7)"
      >
        <path
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
          fill="#F0F0F0"
        />
        <path
          d="M2.48 4.693A11.956 11.956 0 0 0 .413 8.868h6.243L2.48 4.693Zm21.106 4.176a11.957 11.957 0 0 0-2.067-4.176L17.344 8.87h6.242ZM.413 15.13a11.957 11.957 0 0 0 2.067 4.176l4.176-4.176H.413ZM19.305 2.48A11.957 11.957 0 0 0 15.13.412v6.243l4.175-4.175ZM4.693 21.518a11.957 11.957 0 0 0 4.176 2.067v-6.243l-4.176 4.176ZM8.869.412A11.957 11.957 0 0 0 4.693 2.48L8.87 6.655V.412Zm6.261 23.173a11.96 11.96 0 0 0 4.175-2.067l-4.175-4.176v6.243Zm2.214-8.455 4.175 4.176a11.957 11.957 0 0 0 2.067-4.176h-6.242Z"
          fill="#0052B4"
        />
        <path
          d="M23.898 10.435H13.565V.102a12.12 12.12 0 0 0-3.13 0v10.333H.102a12.12 12.12 0 0 0 0 3.13h10.333v10.333a12.12 12.12 0 0 0 3.13 0V13.565h10.333a12.12 12.12 0 0 0 0-3.13Z"
          fill="#D80027"
        />
        <path
          d="m15.13 15.131 5.356 5.355c.246-.246.48-.503.705-.77l-4.584-4.585H15.13Zm-6.26 0-5.355 5.355c.246.246.503.481.77.705l4.585-4.584V15.13Zm0-6.261v-.001L3.515 3.514a12.03 12.03 0 0 0-.705.77L7.394 8.87H8.87Zm6.26 0 5.356-5.355a12.023 12.023 0 0 0-.77-.705L15.13 7.394V8.87Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="GB_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  es: (props) => (
    <svg
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        clipPath="url(#ES_svg__a)"
        transform="scale(1.3) translate(-3.7, -3.7)"
      >
        <path
          d="M0 12c0 1.467.264 2.873.746 4.173L12 17.217l11.254-1.044c.482-1.3.746-2.706.746-4.174 0-1.468-.264-2.874-.746-4.174L12 6.782.746 7.825A11.974 11.974 0 0 0 0 12Z"
          fill="#FFDA44"
        />
        <path
          d="M23.255 7.826C21.56 3.256 17.161 0 12.002 0 6.842 0 2.444 3.256.748 7.826h22.507ZM.747 16.174C2.443 20.744 6.841 24 12.001 24c5.16 0 9.558-3.256 11.253-7.826H.747Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="ES_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  de: (props) => (
    <svg
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        clipPath="url(#DE_svg__a)"
        transform="scale(1.3) translate(-3.7, -3.7)"
      >
        <path
          d="M.746 16.175C2.442 20.745 6.84 24 12 24c5.16 0 9.558-3.257 11.253-7.826L12 15.132.746 16.175Z"
          fill="#FFDA44"
        />
        <path
          d="M12 0C6.84 0 2.442 3.258.746 7.828L12 8.87l11.253-1.043C21.558 3.257 17.16 0 12 0Z"
          fill="#000"
        />
        <path
          d="M.746 7.826A11.974 11.974 0 0 0 0 12c0 1.467.264 2.873.746 4.174h22.508c.482-1.3.746-2.707.746-4.174 0-1.468-.264-2.874-.746-4.174H.746Z"
          fill="#D80027"
        />
      </g>
      <defs>
        <clipPath id="DE_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
  fr: (props) => (
    <svg
      {...props}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        clipPath="url(#FR_svg__a)"
        transform="scale(1.3) translate(-3.7, -3.7)"
      >
        <path
          d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12Z"
          fill="#F0F0F0"
        />
        <path
          d="M24 12c0-5.16-3.257-9.558-7.826-11.254v22.508C20.744 21.558 24 17.159 24 12Z"
          fill="#D80027"
        />
        <path
          d="M0 12c0 5.16 3.257 9.559 7.826 11.254V.747C3.256 2.443 0 6.841 0 12.001Z"
          fill="#0052B4"
        />
      </g>
      <defs>
        <clipPath id="FR_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  ),
};

export const FlagIcon: React.FC<FlagIconProps> = ({ code, ...props }) => {
  const FlagComponent = FlagMap[code];
  if (!FlagComponent) return null;

  return <FlagComponent {...props} />;
};
