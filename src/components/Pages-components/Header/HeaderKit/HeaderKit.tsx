import { IHeaderKitProps } from "./HeaderKit.props";
import { ReactComponent as Search } from "../../../../imgs/main/search.svg";
import { ReactComponent as Globe } from "../../../../imgs/main/globe.svg";
import { ReactComponent as User } from "../../../../imgs/main/user.svg";
import { ReactComponent as Bag } from "../../../../imgs/main/shopping-bag.svg";
import { v4 as uuidv4 } from "uuid";
import "./HeaderKit.scss";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../store/store";
import { selectAllShoppingCardId } from "../../../../store/shopping-card/shopping-card-slice";
import { useState } from "react";
import SearchPanel from "../../../Business-components/SearchPanel/SearchPanel";
import cn from "classnames";
import ShoppingCard from "../../../../pages/ShoppingCard/ShoppingCard";

export const HeaderKit = ({ className, ...props }: IHeaderKitProps) => {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const countItems = useAppSelector(
    (state) => selectAllShoppingCardId(state).length
  );

  const items = [
    {
      icon: (
        <div onClick={() => setSearchOpen(!searchOpen)}>
          <Search className={cn("header-kit-icon")} />
        </div>
      ),
    },
    {
      icon: <Globe className={cn("header-kit-icon")} />,
    },
    {
      icon: <User className={cn("header-kit-icon")} />,
    },
    {
      icon: (
        <div className={cn("header-kit-icon__bag")}>
          <Bag
            className={cn("header-kit-icon")}
            onClick={() => setCartOpen(!cartOpen)}
          />
          <ShoppingCard open={cartOpen} setOpen={setCartOpen} />
          {countItems > 0 ? (
            <>
              <div className={cn("header-kit-icon__bag__badge")}>
                {countItems}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      ),
    },
  ];

  return (
    <>
      <ul className={cn("header-kit__list")} {...props}>
        {items.map((item) => (
          <li key={uuidv4()}>{item.icon}</li>
        ))}
      </ul>
      <SearchPanel isOpen={searchOpen} handleIsOpen={setSearchOpen} />
    </>
  );
};
