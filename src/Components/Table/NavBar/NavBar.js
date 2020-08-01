import React from "react";
import {getState} from "../../../redux/meReducer";
import {connect} from "react-redux";
import {next, previous} from "../../../redux/actions";
import {setSearchInput, setFilteredCards} from "../../../redux/actions"

class NavButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
        this.handlePreviousButton = this.handlePreviousButton.bind(this)
        this.handleNextButton = this.handleNextButton.bind(this)
    }

    handleChange(value) {
        this.props.setSearchInput(value)
        this.setState({searchInput: value}, () => {this.globalSearch()})
    }

    //GLOBAL SEARCH FUNC. IT CAN WORK BETTER IF INPUT CHECK WHEN U BACKSPACE BUT IT'S NOT
    globalSearch = () => {
        const  searchInput  = this.props.state.searchInput;
        let filteredCards = this.props.state.data
            .slice(this.props.state.visibleFrom, this.props.state.visibleTo)
            .filter(value => {
                return (
                    value.id.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.firstName.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.lastName.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.email.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.phone.toString().toLowerCase().includes(searchInput.toLowerCase()) ||
                    value.address.toString().toLowerCase().includes(searchInput.toLowerCase()) /*||
                value.description.toLowerCase().includes(searchInput.toLowerCase())*/ //<- IT HAS A LOT OF SYMBOLS I DONT THINK MAKE FILTER HERE IS A GOOD IDEA
                )
            })
        this.props.setFilteredCards(filteredCards);
    }



    handlePreviousButton() {
        this.props.previousPage()
    }

    handleNextButton() {
        this.props.nextPage()
        this.props.onSort()
    }

    render() {
        return (
            <>
                {/*NAV BUTTONS*/}
                <div className="nav-item middle-xs p-t-13">
                    {
                        this.props.state.visibleFrom !== 0 &&
                        <button onClick={this.handlePreviousButton} className={'button is-outline '}>Previous page</button>
                    }
                </div>
                <div className="nav-item  p-t-13">
                    {
                        this.props.state.visibleTo < this.props.state.data.length &&
                        <button onClick={this.handleNextButton} className={'button is-outline '}>Next page</button>
                    }
                </div>
                {/*SEARCH INPUT*/}
                <div className="nav-control">
                    <div className="input has-icon-back is-inverse">
                        <input type="text"
                               onChange={event => {
                               console.log(event.target.value)
                                   this.handleChange(event.target.value)
                                }}
                               placeholder="Search"/><a className={"d-icon d-search"}/>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => ({
    state: getState(state)
})

function mapDispatchToProps(dispatch) {
    return {
        previousPage: () => dispatch(previous()),
        nextPage: () => dispatch(next()),
        setSearchInput: (value) => dispatch(setSearchInput(value)),
        setFilteredCards: (filteredCards) => dispatch(setFilteredCards(filteredCards))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavButtons);