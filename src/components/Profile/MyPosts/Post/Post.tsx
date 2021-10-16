import s from './Post.module.scss'

export type PostType = {
    id: string
    post: string
    likesCount: number
}

function Post(props: PostType) {
    return (
        <div className={s.post}>
            <div className={s.postItems}>
                <div className={s.postItemImg}>
                    <img className={s.postItemAvatar} src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"/>
                </div>
                <div className={s.postItemPost}>
                    <span>{props.post}</span>
                </div>
                <div className={s.postItemLikes}>
                    <span>Likes: {props.likesCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post