import React, {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import s from './ProfileStatus.module.scss'
import {updateStatusProfileTC} from "../profile-reducer";
import {AppStateType} from "../../../app/redux-store";
import {RequestStatusType} from "../../../app/app-reducer";

type ProfileStatusType = {
    status: string
}

export const ProfileStatus = React.memo(({status}: ProfileStatusType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [localStatus, setLocalStatus] = useState<string>(status)
    const dispatch = useDispatch()
    const appStatus = useSelector<AppStateType, RequestStatusType>(state => state.app.appStatus)

    const onEditMode = () => {
        if (appStatus === 'loading') {
            return
        } else {
            setEditMode(true)
        }
    }
    const offEditMode = () => {
        setEditMode(false)
        dispatch(updateStatusProfileTC(localStatus.trim()))

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
                <input type={'text'} onChange={updateStatus} autoFocus onFocus={handleFocus}
                           onBlur={offEditMode}
                           value={localStatus} onKeyPress={keyHandler} disabled={appStatus === 'loading'}/>
            </div>}
            {!editMode && <div className={s.span} onClick={onEditMode}>
                {status ? status : <span className={s.noStatus}>type status</span>}
            </div>}
        </div>
    )
})


