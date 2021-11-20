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
                    <Avatar src="" sx={{width: 50, height: 50}}/>
                    <span>{props.post}</span>
                    <span>Likes: {props.likesCount}</span>
        </div>
    )
}

export default Post