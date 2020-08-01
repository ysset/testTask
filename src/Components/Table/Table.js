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
        this.state = {
            filtered: false,
            cardInformation: [],
        }
        this.onSort = this.onSort.bind(this);
        this.render = this.render.bind(this);
    }



    //TRY TO MAKE A SORT BUT IT'S WORK WRONG
    onSort(event) {
        const data = this.props.state.data

        if(event) {
            if (!this.state.filtered) {
                data.sort((a, b) => {
                    if (a[event] > b[event]) {return 1}
                    if (a[event] < b[event]) {return -1}
                })
                this.setState({filtered: true})
            } else {
                data.sort((a, b) => {
                    if (a[event] < b[event]) {return 1}
                    if (a[event] > b[event]) {return -1}
                })
                this.setState({filtered: false})
            }
        }
        console.log(data)
    }

    //TRY TO MAKE A CARD INFORMATION
    // cardInformation(item) {
    //     this.setState({cardsInformation: item})
    // }

    render() {
        const {data, visibleTo, visibleFrom, filteredCards, searchInput} = this.props.state;
        const dataToDisplay = searchInput.length ? filteredCards : data.slice(visibleFrom, visibleTo)
        return (
            <div>

                <nav className="nav">
                    <div className="nav-left">
                        <AddUserCard/>
                    </div>
                    <div className="nav-responsive">
                        <div className="nav-right">
                            <NavBar
                             onSort={this.onSort}
                            />
                        </div>
                    </div>
                </nav>

                <table className="table is-striped">
                    <tbody>
                    <tr>
                        <th onClick={() => this.onSort('id')}>id</th>
                        <th onClick={() => this.onSort('firstName')}>firstName</th>
                        <th onClick={() => this.onSort('lastName')}>lastName</th>
                        <th onClick={() => this.onSort('email')}>email</th>
                        <th onClick={() => this.onSort('phone')}>phone</th>
                        <th onClick={() => this.onSort('address')}>address</th>
                        <th onClick={() => this.onSort('description')}>description</th>
                        <th className="is-center">Delete</th>
                    </tr>
                    { dataToDisplay.map((item, index) => {
                        return (
                            //TRY TO MAKE A CARD INFORMATION
                            <tr /*onClick={this.cardInformation(item)}*/ key={index}>
                                <th >{item.id}</th>
                                <th>{item.firstName}</th>
                                <th>{item.lastName}</th>
                                <th>{item.email}</th>
                                <th>{item.phone}</th>
                                <th>{item.address}</th>
                                <th>{item.description}</th>
                                <th className="is-center"><a><span className="d-icon d-trash is-small"/></a></th>
                            </tr>
                        )
                    })}
                    </tbody>
                     {/*Card information place*/}
                     {/*<div>*/}
                     {/*    /!*{this.state.cardInformation.map((item,index) => {*!/*/}
                     {/*    /!*    return (*!/*/}
                     {/*    /!*        <div key={index}>*!/*/}
                     {/*    /!*            <p>Selected user: </p><b>{item.name}</b>*!/*/}
                     {/*    /!*            <hr/>*!/*/}
                     {/*    /!*            <textarea>*!/*/}
                     {/*    /!*                {item.description}*!/*/}
                     {/*    /!*            </textarea>*!/*/}
                     {/*    /!*            <p>Address: </p><b>{item.address.split(' ')}</b>*!/*/}

                     {/*    /!*        </div>*!/*/}
                     {/*    /!*    )*!/*/}
                     {/*    /!*})}*!/*/}
                     {/*</div>*/}
                </table>

            </div>
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
)(Table);

