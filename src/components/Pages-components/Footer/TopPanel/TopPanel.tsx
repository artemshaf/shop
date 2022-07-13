import cn from "classnames";
import { Socials } from "../../../Container-components/Socials/Socials";
import { Button } from "../../../UI-components/Button/Button";
import { H } from "../../../UI-components/H/H";
import { Input } from "../../../UI-components/Input/Input";
import { IFooterTopPanelProps } from "./TopPanel.props";
import "./TopPanel.scss";

export const TopPanel = ({ className, ...props }: IFooterTopPanelProps) => {
  return (
    <div className={cn("footer__top-panel__container")}>
      <section className={cn("container", className)} {...props}>
        <H size="sm" className={cn("footer__top-panel__descr")}>
          BE IN TOUCH WITH US:
        </H>
        <div className={cn("footer__top-panel__actions")}>
          <Input
            className={cn("footer__top-panel__actions-input")}
            placeholder="Enter your email"
          />
          <Button
            className={cn("footer__top-panel__actions-btn")}
            appearence="dark"
          >
            JOIN US
          </Button>
        </div>
        <Socials className={cn("footer__top-panel__socials")} />
      </section>
    </div>
  );
};
