import Constants from '../Constants';

const initialState = {
    view: Constants.DEFAULT_VIEW,
    wvFile: 'N/A',
    wvType: 'gensim',
    wvLoaded: false,
    wvStat: {}
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

        case 'SET_FILE':
            return Object.assign({}, state, {
                wvFile: action.wvFile,
                wvLoaded: false
            });
            break;

        case 'SET_STAT':
            return Object.assign({}, state, {
                wvStat: action.wvStat,
                wvLoaded: true
            });
            break;

        default:
            return state;
            break;
    }
    return state;
}

export default rootReducer;