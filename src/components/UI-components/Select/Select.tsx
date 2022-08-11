import { ISelectOption, ISelectProps } from "./Select.props";
import "./Select.scss";
import { useEffect } from "react";
import Select, { OnChangeValue, SingleValue } from "react-select";

const UISelect = ({
  value = "",
  setValue,
  items,
  className,
  ...props
}: ISelectProps) => {
  useEffect(() => {
    items.map((item) => {
      item.label.toLocaleUpperCase();
      return item;
    });
  }, []);

  const getValue = () => (value ? items.find((c) => c.category === value) : "");

  const onChange = (newValue: SingleValue<string | ISelectOption>) => {
    setValue((newValue as ISelectOption).category);
  };

  return (
    <div className="ui-select">
      <Select options={items} value={getValue()} onChange={onChange} />
    </div>
  );
};

export default UISelect;
