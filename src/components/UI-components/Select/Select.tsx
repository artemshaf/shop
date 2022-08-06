import { ISelectOption, ISelectProps } from "./Select.props";
import cn from "classnames";
import "./Select.scss";
import { useLayoutEffect, useState } from "react";
import Select, { OnChangeValue, SingleValue } from "react-select";
import { isTemplateSpan } from "typescript";

const UISelect = ({
  value = "all",
  setValue,
  items,
  className,
  ...props
}: ISelectProps) => {
  useLayoutEffect(() => {
    items.map((item) => {
      item.label.toLocaleUpperCase();
      return item;
    });
  }, []);

  const getValue = () => (value ? items.find((c) => c.value === value) : "all");

  const onChange = (newValue: SingleValue<string | ISelectOption>) => {
    setValue((newValue as ISelectOption).value);
  };

  return (
    <div className="ui-select">
      <Select options={items} value={getValue()} onChange={onChange} />
    </div>
  );
};

export default UISelect;
