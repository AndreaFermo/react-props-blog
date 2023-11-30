import style from "../css/modules/TheMain.module.css";
import Card from "./Card";
import TagList from "./TagList";

const posts = [
  {
    id: 1,
    title: "Titolo del Post",
    image: "https://placehold.co/600x400",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html", "css"],
    published: true,
  },
  {
    id: 2,
    title: "Titolo del Post",
    image: "https://placehold.co/600x400",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "css"],
    published: true,
  },
  {
    id: 3,
    title: "Titolo del Post",
    image: "https://placehold.co/600x400",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["js", "php"],
    published: true,
  },
  {
    id: 4,
    title: "Titolo del Post",
    image: "https://placehold.co/600x400",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit animi unde quasi enim non esse ratione voluptas voluptate, officiis veritatis magni blanditiis possimus nobis cum id inventore corporis deserunt hic.",
    tags: ["html"],
    published: false,
  },
];

const TheMain = () => {
  return (
    <main className={style.main}>
      <TagList className={style.tagsContainer} posts={posts} />
      <div className={style.cardContainer}>
        {posts.map((post, index) => {
          if (post.published) return <Card key={index} post={post} />;
        })}
      </div>
    </main>
  );
};

export default TheMain;
