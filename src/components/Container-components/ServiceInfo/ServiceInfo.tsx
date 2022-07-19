import { IServiceInfoProps } from "./ServiceInfo.props";
import { ReactComponent as CarIcon } from "./imgs/car.svg";
import { ReactComponent as RefreshIcon } from "./imgs/refresh.svg";
import { ReactComponent as SupportIcon } from "./imgs/support.svg";
import "./ServiceInfo.scss";
import { H } from "../../UI-components/H/H";
import cn from "classnames";

export const ServiceInfo = ({
  descr = true,
  className,
  ...props
}: IServiceInfoProps) => {
  const items = [
    {
      icon: <CarIcon className="service-info__icon" />,
      title: "FREE SHIPPING",
      descr: "On all UA order or order above $100",
    },
    {
      icon: <RefreshIcon className="service-info__icon" />,
      title: "30 DAYS RETURN",
      descr: "Simply return it within 30 days for an exchange",
    },
    {
      icon: <SupportIcon className="service-info__icon" />,
      title: "SUPPORT 24/7",
      descr: "Contact us 24 hours a day, 7 days a week",
    },
  ];

  return (
    <div className="service-info__border">
      <section
        className={cn("service-info__container", "container", className)}
      >
        <ul className="service-info__list" {...props}>
          {items.map((item) => (
            <li
              key={item.descr.substring(-10)}
              className="service-info__list-item"
            >
              {item.icon}
              <div>
                <H size="sm" className="service-info__title">
                  {item.title}
                </H>
                {descr === true && (
                  <p className="service-info__descr">{item.descr}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
