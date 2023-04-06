// WARNING: This file was generated by a script. Do not modify it manually
import { forwardRef, useState } from "react";

import { CountrySymbol, CountrySymbolProps } from "../country-symbol";

export type AGProps = CountrySymbolProps;

const AG = forwardRef<SVGSVGElement, AGProps>(function AG(props: AGProps, ref) {
  const [uid] = useState(() => props.id || Math.random().toString());

  return (
    <CountrySymbol
      data-testid="AG"
      aria-label="Antigua and Barbuda"
      viewBox="0 0 72 72"
      ref={ref}
      {...props}
    >
      <mask
        id={`${uid}-AG-a`}
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <circle cx="36" cy="36" r="36" fill="#D9D9D9" />
      </mask>
      <g mask={`url(#${uid}-AG-a)`}>
        <path fill="#DD2033" d="M0 0h72v72H0z" />
        <path fill="#31373D" d="M36 72 81 0H-9l45 72Z" />
        <mask
          id={`${uid}-AG-b`}
          x="-9"
          y="0"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
        >
          <path fill="#31373D" d="M36 72 81 0H-9l45 72Z" />
        </mask>
        <g mask={`url(#${uid}-AG-b)`}>
          <path
            fill="#F1B434"
            d="m24.572 29.959-8.172 4.04h40l-8.172-4.04 4.352-8.32-8.875 1.785L42.581 14 36.4 20.93 30.22 14l-1.126 9.424-8.874-1.785 4.352 8.32Z"
          />
          <path fill="#F5F7F8" d="M20 48h32v24H20z" />
          <path fill="#005EB8" d="M12 34h48v14H12V34Z" />
        </g>
      </g>
    </CountrySymbol>
  );
});

export default AG;