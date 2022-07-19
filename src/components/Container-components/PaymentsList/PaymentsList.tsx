import { ReactComponent as Stripe } from "../../../imgs/payments/stripe.svg";
import { ReactComponent as Aes } from "../../../imgs/payments/aes.svg";
import { ReactComponent as PayPal } from "../../../imgs/payments/paypal.svg";
import { ReactComponent as Visa } from "../../../imgs/payments/visa.svg";
import { ReactComponent as MasterCard } from "../../../imgs/payments/mastercard.svg";
import { ReactComponent as Discover } from "../../../imgs/payments/discover.svg";
import { ReactComponent as American } from "../../../imgs/payments/american-express.svg";
import "./PaymentsList.scss";
import cn from "classnames";
import { v4 as uuidv4 } from "uuid";
import { useMemo } from "react";
import { IPaymentsListProps } from "./PaymentsList.props";

export const PaymentsList = ({ className, ...props }: IPaymentsListProps) => {
  const items = useMemo(
    () => [
      {
        icon: <MasterCard className="payments-icon" />,
        text: "123",
      },
      {
        icon: <Aes className="payments-icon" />,
        text: "",
      },
      {
        icon: <Stripe className="payments-icon" />,
        text: "",
      },
      {
        icon: <PayPal className="payments-icon" />,
        text: "",
      },
      {
        icon: <Visa className="payments-icon" />,
        text: "",
      },
      {
        icon: <Discover className="payments-icon" />,
        text: "",
      },
      {
        icon: <American className="payments-icon" />,
        text: "",
      },
    ],
    []
  );

  return (
    <ul className={cn("payments-list", className)} {...props}>
      {items.map((item) => {
        return (
          <li key={uuidv4()} className={cn("payments-list__icon")}>
            {item.icon}
          </li>
        );
      })}
    </ul>
  );
};
