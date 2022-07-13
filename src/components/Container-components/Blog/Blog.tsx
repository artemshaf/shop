import Img1 from "../../../imgs/blog/rect1.jpg";
import Img2 from "../../../imgs/blog/rect2.jpg";
import Img3 from "../../../imgs/blog/rect3.jpg";
import { Button } from "../../UI-components/Button/Button";
import { H } from "../../UI-components/H/H";
import { BlogCard } from "../Blog-card/Blog-card";
import "./Blog.scss";
import { v4 as uuidv4 } from "uuid";

export const Blog = () => {
  const items = [
    {
      img: Img1,
      title: "The Easiest Way to Break",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
      createdAt: "22, April 2022",
    },
    {
      img: Img2,
      title: "Wedding Season",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
      createdAt: "15, June 2022",
    },
    {
      img: Img3,
      title: "Recent Favorites On Repeat",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleas and praising pain was bor",
      createdAt: "16, Dec 2022",
    },
  ];

  return (
    <div className="container">
      <section className="blog__container">
        <div className="blog__info">
          <H size="ex-lg" className="blog__info-title">
            LATEST FROM BLOG
          </H>
          <Button appearence="light" className="blog__info-btn">
            SEE ALL
          </Button>
        </div>
        <ul className="blog__list">
          {items.map((item) => (
            <BlogCard key={uuidv4()} card={item} className="blog__list-item" />
          ))}
        </ul>
      </section>
    </div>
  );
};
