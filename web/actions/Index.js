import Constants from '../Constants';

export const changeView = (view) => ({
    type: 'CHANGE_VIEW',
    view
});

export const setFile = (wvFile) => ({
    type: 'SET_FILE',
    wvFile
});

export const setStat = (wvStat) => ({
    type: 'SET_STAT',
    wvStat
});