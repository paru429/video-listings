const initialState = {searchText: ''}

export default (searchTextState = initialState, action) => {
    if(action.type === 'UPDATE_SEARCH_TEXT')
        return {searchText: action.searchText};

    return searchTextState;
}