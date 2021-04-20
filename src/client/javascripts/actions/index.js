import youtube from '../api/youtube';

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

//Using thunk middleware

export const fetchVideos = (text) => {
    return async dispatch => {
        dispatch(updateShowLoader(true));

        try {
          const response = await youtube.get('/search', {
            params: {
              q: text
            }
          });
    
          response.data && dispatch(updateVideos(response.data.items));
          response.data && dispatch(updateSelectedVideo(response.data.items[0]));
          dispatch(updateShowLoader(false));
        }
        catch {
          dispatch(updateShowLoader(false));
          console.log('..... Error', err);
        }
    }
}