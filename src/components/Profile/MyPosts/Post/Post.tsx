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
                    <Avatar src="" sx={{width: 50, height: 50}}/>
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