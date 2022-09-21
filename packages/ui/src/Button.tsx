import * as React from "react";
import { ellipsis as ellipsisText } from "@qinwl/base-utils";

export const Button: React.FC<{ text: string; ellipsis?: boolean }> = ({
  text,
  ellipsis,
}) => {
  const innerText = ellipsis ? ellipsisText(text) : text;
  return <button>{innerText}</button>;
};
