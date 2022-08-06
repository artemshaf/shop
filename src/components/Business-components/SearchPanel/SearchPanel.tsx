import cn from "classnames";
import { useEffect } from "react";
import { useState } from "react";
import { selectClothes } from "../../../store/clothes/clothes-slice";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { IClothesItem } from "../../Container-components/Clothes/Clothes.props";
import SmallClothesItem from "../../Container-components/SmallClothesItem/SmallClothesItem";
import { Input } from "../../UI-components/Input/Input";
import UISelect from "../../UI-components/Select/Select";
import { ISearchPanelProps } from "./SearchPanel.props";
import "./SearchPanel.scss";
import Close from "../../../imgs/icons/close.svg";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { useRef } from "react";
import {
  getClothesByParams,
  selectSearchClothes,
} from "../../../store/clothes/search/clothes-search-slice";

const items = [
  {
    value: "all",
    label: "all categories",
  },
  {
    value: "men",
    label: "men",
  },
  {
    value: "women",
    label: "women",
  },
];

function SearchPanel({
  handleIsOpen,
  isOpen,
  className,
  ...props
}: ISearchPanelProps) {
  const dispatch = useAppDispatch();
  const [inputQuery, setInputQuery] = useState("");
  const [selectValue, setSelectValue] = useState("all");

  const startClothes = useAppSelector((state) => selectSearchClothes(state));
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    dispatch(getClothesByParams({ name: inputQuery, category: selectValue }));
  }, [selectValue, inputQuery]);

  const handleInput = (str: string) => {
    setInputQuery(str);
  };

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(targetRef.current as HTMLElement | Element, {});
    } else {
      enableBodyScroll(targetRef.current as HTMLElement | Element);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <section
      ref={targetRef}
      className={cn("search-panel", className, {
        "search-panel_visible": isOpen,
      })}
      {...props}
    >
      <div className={cn("search-panel__title__block")}>
        <h1 className={cn("search-panel__title")}>SEARCH</h1>
        <img
          src={Close}
          className={cn("search-panel__icon-close")}
          onClick={() => handleIsOpen(!isOpen)}
        />
      </div>
      <div>
        <UISelect value={selectValue} setValue={setSelectValue} items={items} />
        <Input
          className={cn("search-panel__input")}
          value={inputQuery}
          onHandle={handleInput}
        />
      </div>
      <hr />
      <h3 className={cn("search-panel__subtitle")}>Need some inspiration?</h3>
      {startClothes.length > 0 && (
        <ul className={cn("search-panel__list")}>
          {startClothes.map((item: IClothesItem) => (
            <SmallClothesItem key={item.id} id={item.id} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default SearchPanel;
