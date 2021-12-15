import {TextField} from '@mui/material';
import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import s from './ProfileStatus.module.scss'
import {updateStatusProfileThunk} from "../../../../redux/profile/profile-reducer";

type ProfileStatusType = {
    status: string
}

export const ProfileStatus = React.memo(({status}: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(status)
    const dispatch = useDispatch()
    const onEditMode = () => {
        setEditMode(true)
    }
    const offEditMode = () => {
        setEditMode(false)
        dispatch(updateStatusProfileThunk(localStatus.trim()))

    }

    useEffect(() => {
        setLocalStatus(status)
    }, [status])

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => event.currentTarget.select()

    const updateStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalStatus(e.currentTarget.value)
    }

    const keyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            offEditMode()
        }
    }

    return (
        <div className={s.profileStatus}>
            {editMode && <div className={s.input}>
                <TextField onChange={updateStatus} autoFocus onFocus={handleFocus}
                           onBlur={offEditMode} id="standard-basic" variant="standard"
                           value={localStatus} onKeyPress={keyHandler}/>
            </div>}
            {!editMode && <div className={s.span} onClick={onEditMode}>
                {status ? status : <span className={s.noStatus}>type status</span>}
            </div>}
        </div>
    )
})


