export const updateShowLoader = (showLoader) => {
    return ({
        type: 'SHOW_LOADER',
        showLoader
    });
};

export const updateSelectedVideo = (selectedVideo) => {
    return ({
        type: 'UPDDATE_SELECTED_VIDEO',
        selectedVideo
    });
};

export const updateVideos = (videos) => {
    return ({
        type: 'UPDATE_VIDEOS',
        videos
    });
};

export const updateSearchText = (searchText) => {
    return ({
        type: 'UPDATE_SEARCH_TEXT',
        searchText
    });
};