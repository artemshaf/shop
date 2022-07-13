import cn from "classnames";
import { CustomLink } from "../../../UI-components/CustomLink/CustomLink";
import { H } from "../../../UI-components/H/H";
import { IFooterMidPanel } from "./MidPanel.props";
import { v4 as uuidv4 } from "uuid";
import "./MidPanel.scss";

export const MidPanel = ({ className, ...props }: IFooterMidPanel) => {
  const items = [
    {
      title: "Categories",
      links: [
        {
          text: "Men",
          to: "/",
        },
        {
          text: "Women",
          to: "/",
        },
        {
          text: "Accessories",
          to: "/",
        },
        {
          text: "Beauty",
          to: "/",
        },
      ],
    },
    {
      title: "Infomation",
      links: [
        {
          text: "About Us",
          to: "/",
        },
        {
          text: "Contact Us",
          to: "/",
        },
        {
          text: "Blog",
          to: "/",
        },
        {
          text: "FAQs",
          to: "/",
        },
      ],
    },
    {
      title: "Useful links",
      links: [
        {
          text: "Terms & Conditions",
          to: "/",
        },
        {
          text: "Returns & Exchanges",
          to: "/",
        },
        {
          text: "Shipping & Delivery",
          to: "/",
        },
        {
          text: "Privacy Policy",
          to: "/",
        },
      ],
    },
    {
      title: "CONTACT US",
      links: [
        {
          text: "Belarus, Gomel, Lange 17",
          to: "/",
        },
        {
          text: "+375 29 100 20 30",
          to: "/",
        },
        {
          text: "All week 24/7",
          to: "/",
        },
        {
          text: "info@clevertec.ru",
          to: "/",
        },
      ],
    },
  ];

  return (
    <section
      className={cn("container", "footer__mid-panel__container")}
      {...props}
    >
      {items.map((item) => (
        <ul key={uuidv4()} className={cn("footer__mid-panel__list")}>
          <H size="md" className={cn("footer__mid-panel__list-title")}>
            {item.title}
          </H>
          {item.links.map((linkItem) => (
            <li key={uuidv4()} className={cn("footer__mid-panel__list-item")}>
              <CustomLink to={linkItem.to}>{linkItem.text}</CustomLink>
            </li>
          ))}
        </ul>
      ))}
    </section>
  );
};
