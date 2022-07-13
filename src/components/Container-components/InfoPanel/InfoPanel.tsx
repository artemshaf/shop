import { ReactComponent as Phone } from "../../../imgs/main/phone.svg";
import { ReactComponent as Location } from "../../../imgs/main/location-marker.svg";
import { ReactComponent as Clock } from "../../../imgs/main/clock.svg";
import { v4 as uuidv4 } from "uuid";
import "./InfoPanel.scss";
import cn from "classnames";
import { IInfoPanelProps } from "./InfoPanel.props";

export const InfoPanel = ({ className, ...props }: IInfoPanelProps) => {
  const entities = [
    {
      icon: <Phone className="info-panel__icon" />,
      text: "+375 29 100 20 30",
    },
    {
      icon: <Location className="info-panel__icon" />,
      text: "Belarus, Gomel, Lange 17",
    },
    {
      icon: <Clock className="info-panel__icon" />,
      text: "All week 24/7",
    },
  ];

  return (
    <ul className={cn("info-panel__container", className)} {...props}>
      {entities.map((item) => {
        return (
          <li key={uuidv4()}>
            {item.icon}
            {item.text && (
              <span className={cn("small_text info-panel__text", className)}>
                {item.text}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
};
