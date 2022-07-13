import { DetailedHTMLProps, HTMLAttributes } from "react";
import Apple from "./socials/apple.svg";
import Facebook from "./socials/facebook.svg";
import Instagram from "./socials/instagram.svg";
import Google from "./socials/logo-google.svg";
import Pinterest from "./socials/logo-pinterest.svg";
import Twitter from "./socials/logo-twitter.svg";

export const Icons = {
  Apple,
  Facebook,
  Instagram,
  Google,
  Pinterest,
  Twitter,
};

export type IconType = keyof typeof Icons;

export interface IIconProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: IconType;
}
