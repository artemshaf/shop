import cn from "classnames";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "../../Container-components/Modal/Modal";
import { Rating } from "../../Container-components/Rating/Rating";
import { Button } from "../../UI-components/Button/Button";
import { Input } from "../../UI-components/Input/Input";
import Textarea from "../../UI-components/Textarea/Textarea";
import { IReviewModalProps } from "./ReviewModal.props";
import "./ReviewModal.scss";

export type Inputs = {
  name: string;
  rating: number;
  description: string;
};

const ReviewModal = ({
  open,
  setOpen,
  children,
  className,
  ...props
}: IReviewModalProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Modal
      className={cn("review-modal", className)}
      {...props}
      open={open}
      setOpen={setOpen}
    >
      <form className="review-modal" onSubmit={handleSubmit(onSubmit)}>
        {(errors.description || errors.name || errors.rating) && (
          <b className="review-modal_error">Заполните все поля!</b>
        )}
        <h3 className="review-modal__title">Введите ваше имя</h3>
        <Input
          className="review-modal__field"
          {...register("name", { required: true })}
        />
        <h3 className="review-modal__title">Укажите рейтинг</h3>
        <Controller
          control={control}
          name="rating"
          defaultValue={5}
          rules={{
            required: { value: true, message: "Укажите рейтинг" },
            min: 1,
            max: 5,
          }}
          render={({ field }) => (
            <Rating
              className={cn("review-modal__rating")}
              rate={1}
              ref={field.ref}
              setRate={field.onChange}
              isEditable
              tabIndex={1}
            />
          )}
        />
        <h3 className="review-modal__title">Ваш отзыв!</h3>
        <Textarea
          className="review-modal__field"
          placeholder="Your description"
          {...register("description", { required: true })}
        />
        <Button appearence="dark">Отправить</Button>
      </form>
    </Modal>
  );
};

export default ReviewModal;
