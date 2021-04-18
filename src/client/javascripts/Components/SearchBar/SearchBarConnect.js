import { connect } from 'react-redux';
import {updateSearchText} from '../../actions';

const mapStateToProps = (state) => {
    return {
        searchText: state.searchTextReducer.searchText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSearchText: (searchText) => dispatch(updateSearchText(searchText)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps);