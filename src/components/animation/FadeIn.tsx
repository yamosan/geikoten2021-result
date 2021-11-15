import React, { ComponentPropsWithoutRef, forwardRef } from "react";

import { Animation } from "./Animation";

type Props = ComponentPropsWithoutRef<"div">;

export const FadeIn = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, ...attrs } = props;

  return (
    <Animation
      base="transition transform duration-700 delay-200"
      enter="opacity-100 translate-y-0"
      leave="opacity-0 translate-y-8"
      ref={ref}
      {...attrs}
    >
      {children}
    </Animation>
  );
});

FadeIn.displayName = "FadeIn";
