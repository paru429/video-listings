const initialState = {
    selectedVideo: {},
    videos: []
}

export default (videosState = initialState, action) => {
    switch(action.type) {
        case 'UPDATE_VIDEOS':
            return {...videosState, videos: action.videos};
        case 'UPDDATE_SELECTED_VIDEO': 
            return {...videosState, selectedVideo: action.selectedVideo};
        default:
            return videosState;
    }
}