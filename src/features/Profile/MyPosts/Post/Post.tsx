import {Avatar} from '@mui/material'
import s from './Post.module.scss'

export type PostType = {
    id: string
    post: string
    likesCount: number
    avatar: string | undefined
    name: string | undefined
}

function Post(props: PostType) {
    return (
        <div className={s.post}>
            <div className={s.postHeader}>
                <Avatar src={props.avatar} sx={{width: 45, height: 45}}/>
                <h4>{props.name}</h4>
            </div>
            <div>
                <p>{props.post}</p>
            </div>
            <div>
                <span>{props.likesCount} Like</span>
            </div>
        </div>
    )
}

export default Post