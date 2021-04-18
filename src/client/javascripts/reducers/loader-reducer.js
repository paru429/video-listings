const initialState = {
    showLoader: false
}

export default (loaderState = initialState, action) => {
    if(action.type === 'SHOW_LOADER')
        return {showLoader: action.showLoader}

    return loaderState;
};