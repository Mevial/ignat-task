type ChangeThemeActionType = {
    type: 'CHANGE-THEME'
    title: string
}

const initState = {
    title: ''
};

export const themeReducer = (state = initState, action: ChangeThemeActionType): typeof initState => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {
                ...state,
                title: action.title
            }
        }
        default:
            return state;
    }
};

export const changeThemeC = (title: string): ChangeThemeActionType => ({
    type: 'CHANGE-THEME',
    title
}); // fix any