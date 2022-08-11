import cn from "classnames";
import React, { useEffect, useMemo } from "react";
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
import { selectSearchClothes } from "../../../store/clothes/search/clothes-search-slice";
import { useGetProductByCategorySearchQuery } from "../../../store/api";
import Loader from "../../UI-components/Loader/Loader";
import { useDebounce } from "../../../hooks/use-throttle-debounce";

const items = [
  {
    category: "",
    label: "all categories",
  },
  {
    category: "men",
    label: "men",
  },
  {
    category: "women",
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
  const [searchQuery, setSearchQuery] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const {
    data: clothes,
    isError,
    isLoading,
  } = useGetProductByCategorySearchQuery(selectValue, {
    refetchOnMountOrArgChange: true,
  });

  const targetRef = useRef<HTMLDivElement>(null);

  if (!clothes) {
    return <Loader />;
  }

  const selectedClothes = useMemo(
    () => [...clothes.men, ...clothes.women],
    [selectValue]
  );

  const visibleClothes = useMemo(
    () =>
      selectedClothes.filter((item) =>
        item.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      ),
    [searchQuery, selectedClothes]
  );

  console.log(visibleClothes);

  const handleInput = useDebounce((str: string) => {
    setSearchQuery(() => str);
  }, 700);

  useEffect(() => {
    console.log(visibleClothes);
  }, [searchQuery]);

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
          value={searchQuery}
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            handleInput(e.currentTarget.value)
          }
        />
      </div>
      <hr />
      <h3 className={cn("search-panel__subtitle")}>Need some inspiration?</h3>
      {visibleClothes.length > 0 && (
        <ul className={cn("search-panel__list")}>
          {visibleClothes.map((item: IClothesItem) => (
            <SmallClothesItem key={item.id} id={item.id} />
          ))}
        </ul>
      )}
    </section>
  );
}

export default SearchPanel;
