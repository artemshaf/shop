import cn from "classnames";
import { CustomLink } from "../../../UI-components/CustomLink/CustomLink";
import { H } from "../../../UI-components/H/H";
import { IFooterMidPanel } from "./MidPanel.props";
import { v4 as uuidv4 } from "uuid";
import "./MidPanel.scss";
import { links } from '../../../../navigation/footer';

export const MidPanel = ({ className, ...props }: IFooterMidPanel) => {

  return (
    <section
      className={cn("container", "footer__mid-panel__container")}
      {...props}
    >
      {links.map((item) => (
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
