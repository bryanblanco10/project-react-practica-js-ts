import { FC } from "react";

type PropsLinkButton = {
  href?: string;
  buttonText?: string;
  onClick?: () => void;
};

type PropsNormalButton = {
  buttonText?: string;
  onClick?: () => void;
};

export const ButtonWithLink: FC<PropsLinkButton> = ({ href, buttonText, onClick }) => {
  return <button style={{ marginRight: '10px', marginLeft: '10px'}} onClick={onClick}><a href={href}>{buttonText}</a></button>
};

export const ButtonNormal: FC<PropsNormalButton> = ({ buttonText, onClick }) => {
  return <button style={{ marginRight: '10px'}} onClick={onClick}>{buttonText}</button>
};
