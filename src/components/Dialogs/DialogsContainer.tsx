import React from 'react'
import {connect} from 'react-redux';
import {ChangeMessageAC, DialogsActionsTypes, SendMessageAC} from '../../redux/dialogs-reducer';
import { StateType } from '../../redux/redux-store';
import {Dialogs} from "./Dialogs";

const mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: (action: DialogsActionsTypes) => void) => {
    return {
        changeMessage: (value: string) => {
            const action = ChangeMessageAC(value)
            dispatch(action)
        },
        sendMessage: (value: string) => {
            const action = SendMessageAC(value)
            dispatch(action)
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)