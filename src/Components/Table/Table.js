import React from 'react';
import NavBar from "./NavBar/NavBar";
import AddUserCard from "./AddUserCard/AddUserCard";

import fetch from '../../redux/fetch';
import {getState} from '../../redux/meReducer';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Table extends React.Component {

    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchData: fetchData} = this.props;
        fetchData();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        return true;
    }

    render() {
        const {data, error, pending, visibleTo, visibleFrom, filteredCards, searchInput} = this.props.state;
        const dataToDisplay = searchInput.length ? filteredCards : data.slice(visibleFrom, visibleTo)
        return (
            <div>
                <nav className="nav">
                    <div className="nav-left">
                        <AddUserCard/>
                    </div>
                    <div className="nav-responsive">
                        <div className="nav-right">
                            <NavBar/>
                        </div>
                    </div>
                </nav>
                <table className="table is-striped">
                    <tbody>
                    <tr>
                        <th>id</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>address</th>
                        <th>description</th>
                        <th className="is-center">Delete</th>
                    </tr>
                    { dataToDisplay.map((item, index) => {
                        return (
                            <tr key={index}>
                                <th>{item.id}</th>
                                <th>{item.firstName}</th>
                                <th>{item.lastName}</th>
                                <th>{item.email}</th>
                                <th>{item.phone}</th>
                                <th>{item.address}</th>
                                <th>{item.description}</th>
                                <th className="is-center">Delete</th>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: getState(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchData: fetch
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

