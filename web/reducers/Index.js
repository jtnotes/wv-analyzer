import Constants from '../Constants';

const initialState = {
    view: Constants.DEFAULT_VIEW
}

function rootReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'CHANGE_VIEW':
            if (action.view == Constants.VIEW_SUMMARY) {
                return Object.assign({}, state, {
                    view: action.view
                });
            }
            else {
                return Object.assign({}, state, {
                    view: action.view
                });
            }
            break;

        default:
            return state;
            break;
    }
    return state;
}

export default rootReducer;