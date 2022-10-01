import s from './Friends.module.css'

const Friends =(props) => {
    return (
        <div className={s.friends}>
            <h5>{props.name}</h5>
            <img src='https://cs14.pikabu.ru/post_img/2021/05/08/12/16205042291362743.jpg' alt='friends' />
        </div>
    )
}

export default Friends;