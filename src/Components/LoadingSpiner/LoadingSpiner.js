import React from "react";
import {bindActionCreators} from "redux";
import fetch from "../../redux/fetch";
import {connect} from "react-redux";
import {getState} from "../../redux/meReducer";

class LoadingSpiner extends React.Component {



    render() {
        return (
            <div className="loader loader--button"/>
        )
    }
}

const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData: fetch,
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoadingSpiner);