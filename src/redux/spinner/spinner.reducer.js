import { SpinnerActionTypes } from "./spinner.types";

const INITIAL_STATE = {
    loading: true
}

const spinnerReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case SpinnerActionTypes.STOP_SPINNER:
            return {
                ...state,
                loading: false
        };
        case SpinnerActionTypes.START_SPINNER:
            return {
                ...state,
                loading: true
        };
        default:
            return state;
    }
}

export default spinnerReducer;