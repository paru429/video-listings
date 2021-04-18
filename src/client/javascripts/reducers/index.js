import { combineReducers } from 'redux';
import loaderReducer from './loader-reducer';
import videosReducer from './videos-reducer';
import searchTextReducer from './search-text-reducer';

export default combineReducers({
    loaderReducer,
    videosReducer,
    searchTextReducer
})