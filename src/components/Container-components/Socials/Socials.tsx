import { ReactComponent as Facebook } from "../../../imgs/socials/facebook.svg";
import { ReactComponent as Instagram } from "../../../imgs/socials/instagram.svg";
import { ReactComponent as Twitter } from "../../../imgs/socials/logo-twitter.svg";
import { ReactComponent as Pinterest } from "../../../imgs/socials/logo-pinterest.svg";
import { v4 as uuidv4 } from "uuid";
import "./Socials.scss";
import cn from "classnames";
import { ISocialsProps } from "./Socials.props";

export const Socials = ({ className, ...props }: ISocialsProps) => {
  const entities = [
    {
      icon: <Facebook className="social-icon" />,
      text: "",
    },
    {
      icon: <Instagram className="social-icon" />,
      text: "",
    },
    {
      icon: <Twitter className="social-icon" />,
      text: "",
    },
    {
      icon: <Pinterest className="social-icon" />,
      text: "",
    },
  ];

  return (
    <ul className={cn("social-icons__container", className)} {...props}>
      {entities.map((item) => {
        return (
          <li key={uuidv4()}>
            {item.icon}
            {item.text && <span>{item.text}</span>}
          </li>
        );
      })}
    </ul>
  );
};
