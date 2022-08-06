import cn from "classnames";
import { useNavigate } from "react-router-dom";
import { PaymentsList } from "../../../Container-components/PaymentsList/PaymentsList";
import { CustomLink } from "../../../UI-components/CustomLink/CustomLink";
import { IFooterBottomPanelProps } from "./BottomPanel.props";
import "./BottomPanel.scss";
export const BottomPanel = ({
  className,
  ...props
}: IFooterBottomPanelProps) => {
  const navigate = useNavigate();

  return (
    <div className="footer__bottom-panel__container">
      <section className={cn("container", className)} {...props}>
        <span className="footer__bottom-panel__descr">
          Copyright ©{new Date().getFullYear()} all rights reserved
        </span>
        <PaymentsList className="footer__bottom-panel__payments" />
        <a
          href="https://clevertec.ru/study/frontend.html"
          onClick={() =>
            navigate("https://clevertec.ru/study/frontend.html", {
              replace: true,
            })
          }
          className={"footer__bottom-panel__link"}
        >
          Clevertec.ru/training
        </a>
      </section>
    </div>
  );
};
