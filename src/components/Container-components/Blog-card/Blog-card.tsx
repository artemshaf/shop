import cn from "classnames";
import { Button } from "../../UI-components/Button/Button";
import { IBlogCardProps } from "./Blog-card.props";
import "./Blog-card.scss";
import { v4 as uuidv4 } from "uuid";

export const BlogCard = ({ card, className, ...props }: IBlogCardProps) => {
  return (
    <li key={uuidv4()} className={cn("", className)} {...props}>
      <img src={card.img} alt={card.title} className="blog__card-img" />
      <div className="blog__card-info">
        <h2 className="blog__card-info__title">{card.title}</h2>
        <p className={cn("blog__card-info__description")}>
          {card.description}
          {card.description}
        </p>
        <div className="blog__card-info__actions">
          <span>{card.createdAt}</span>
          <Button appearence="light" className="blog__card-info__actions-btn">
            READ MORE
          </Button>
        </div>
      </div>
    </li>
  );
};
