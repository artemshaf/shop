import { useEffect } from "react";
import { setInitial } from "../../../store/shopping-card/shopping-card-slice";
import { useAppDispatch } from "../../../store/store";

const FinishOrder = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInitial());
  }, []);

  return <h1 className="shopping-card__centered">Thanks form Payment!!!</h1>;
};

export default FinishOrder;
