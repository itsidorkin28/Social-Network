import React, { memo } from "react";
import s from './About.module.scss'


type AboutPropsType = {
    aboutMe: string | undefined
}

export const About = memo(({aboutMe}: AboutPropsType) => {
    return (
        <div className={s.aboutBlock}>
            <h4>About</h4>
            {aboutMe ? <p>{aboutMe}</p> : <p>The user did not tell about himself.</p>}

        </div>
    )
})

