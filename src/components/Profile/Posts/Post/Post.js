import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://cs14.pikabu.ru/post_img/2021/05/08/12/16205042291362743.jpg"
        alt="bee"
      />
      {props.message}
      <div>
        <span> likes:{props.like}</span>
      </div>
    </div>
  );
};
export default Post;
