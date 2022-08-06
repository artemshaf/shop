import cn from "classnames";
import { Button } from "../../UI-components/Button/Button";
import { IModalProps } from "./Modal.props";
import "./Modal.scss";

const Modal = ({
  open = false,
  setOpen,
  children,
  className,
  ...props
}: IModalProps) => {
  return (
    <section
      className={cn("modal__container", {
        active: open,
      })}
      onClick={() => setOpen(false)}
    >
      <section
        className={cn("modal", className, {
          active: open,
        })}
        {...props}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <Button
          appearence="dark"
          className="modal__btn_close"
          onClick={() => setOpen(false)}
        >
          x
        </Button>
      </section>
    </section>
  );
};

export default Modal;
