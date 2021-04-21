import { connect } from 'react-redux';
import {updateSelectedVideo, fetchVideos} from '../../actions';

const mapStateToProps = (state) => {
    return {
        showLoader: state.loaderReducer.showLoader,
        videos: state.videosReducer.videos,
        selectedVideo: state.videosReducer.selectedVideo,
    }
}

//Return mapDispatchToProps either as a function
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setVideos: (videos) => dispatch(updateVideos(videos)),
//         setSelectedVideo: (selectedVideo) => dispatch(updateSelectedVideo(selectedVideo)),
//         setShowLoader: (showLoader) => dispatch(updateShowLoader(showLoader)),
//     }
// }

//Return mapDispatchToProps as an object
const mapDispatchToProps = {
    updateSelectedVideo,
    fetchVideos,
}

export default connect(mapStateToProps, mapDispatchToProps);