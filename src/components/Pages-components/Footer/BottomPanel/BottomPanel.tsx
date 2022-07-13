import cn from "classnames";
import { PaymentsList } from "../../../Container-components/PaymentsList/PaymentsList";
import { CustomLink } from "../../../UI-components/CustomLink/CustomLink";
import { IFooterBottomPanelProps } from "./BottomPanel.props";
import "./BottomPanel.scss";
export const BottomPanel = ({
  className,
  ...props
}: IFooterBottomPanelProps) => {
  return (
    <div className="footer__bottom-panel__container">
      <section className={cn("container", className)} {...props}>
        <span className="footer__bottom-panel__descr">
          Copyright ©{new Date().getFullYear()} all rights reserved
        </span>
        <PaymentsList className="footer__bottom-panel__payments" />
        <CustomLink
          to={"https://clevertec.ru/study/frontend.html"}
          className={"footer__bottom-panel__link"}
        >
          Clevertec.ru/training
        </CustomLink>
      </section>
    </div>
  );
};
