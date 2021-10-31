import { Avatar } from '@mui/material'
import s from './Post.module.scss'

export type PostType = {
    id: string
    post: string
    likesCount: number
}

function Post(props: PostType) {
    return (
        <div className={s.post}>
                <div className={s.postImg}>
                    <Avatar src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg" sx={{width: 50, height: 50}}/>
                </div>
                <div className={s.postPost}>
                    <span>{props.post}</span>
                </div>
                <div className={s.postLikes}>
                    <span>Likes: {props.likesCount}</span>
                </div>
        </div>
    )
}

export default Post