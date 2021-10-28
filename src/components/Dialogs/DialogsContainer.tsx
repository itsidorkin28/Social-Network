import {connect} from 'react-redux';
import { Dispatch } from 'redux';
import {changeMessageAC, DialogsPageType, sendMessageAC} from '../../redux/dialogs-reducer';
import { StateType } from '../../redux/redux-store';
import {Dialogs} from "./Dialogs";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type MapDispatchToPropsType = {
    changeMessage: (value: string) => void
    sendMessage: (value: string) => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        changeMessage: (value: string) => {
            const action = changeMessageAC(value)
            dispatch(action)
        },
        sendMessage: (value: string) => {
            const action = sendMessageAC(value)
            dispatch(action)
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)