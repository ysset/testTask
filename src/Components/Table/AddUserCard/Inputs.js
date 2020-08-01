import React from "react";
import {getState} from "../../../redux/meReducer";
import {setNewCardData} from "../../../redux/actions";
import {connect} from "react-redux";

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            description: '',
            disabled: true,
        }
        this.handleCheckState = this.handleCheckState.bind(this)
    }

    handleCheckState() {
        //CHECK IF JUST ONE INPUT HAS VALUE
        const {id, firstName, lastName, email, phone, address, description} = this.state
        if (
            !id &&
            !firstName &&
            !lastName &&
            !email &&
            !phone &&
            !address &&
            !description
        ) {
            return false
        } else {
            this.props.setNewCardData(this.state)
        }
}

//A LOT OF FCK INPUT NOTHING INTERESTING
    render() {
        return (
            <div>
             <div className={'col-xs input'}>

                    <input type='number'
                           id={'id'}
                           placeholder={'ID'}
                           style={{'margin': '5px'}}
                           onChange={event => this.setState(
                               {id: event.target.value},
                               () => this.setState({disabled: false}))}
                    />

                    <input type='text'
                           id={'firstName'}
                           placeholder={'firstName'}
                           style={{'margin': '5px'}}
                           onChange={event => this.setState(
                               {firstName: event.target.value},
                               () => this.setState({disabled: false}))}
                    />

                    <input type='text'
                           id={'lastName'}
                           placeholder={'lastName'}
                           style={{'margin': '5px'}}
                           onChange={event => this.setState(
                               {lastName: event.target.value},
                               () => this.setState({disabled: false}))}
                    />

                    <input type='email'
                           id={'email'}
                           placeholder={'email'}
                           style={{'margin': '5px'}}
                           onChange={event => this.setState(
                               {email: event.target.value},
                               () => this.setState({disabled: false}))}
                    />

                    <input type='text'
                           id={'phone'}
                           placeholder={'phone'}
                           style={{'margin': '5px'}}
                           onChange={event => this.setState(
                               {phone: event.target.value},
                               () => this.setState({disabled: false}))}
                    />

                    <input type='text'
                           id={'address'}
                           placeholder={'address'}
                           style={{'margin': '5px'}}
                           onChange={event => this.setState(
                               {address: event.target.value},
                               () => this.setState({disabled: false}))}
                    />


                    <textarea type='text'
                           id={'description'}
                           placeholder={'description'}
                           style={{'margin': '5px', 'width': '230'}}
                           onChange={event => this.setState(
                               {description: event.target.value},
                               () => this.setState({disabled: false}))}
                    />
                </div>
                    <form action={'#close'} className={'col-xs'} style={{'margin': '10px'}}>
                        <button disabled={this.state.disabled} className={'button is-outline'}  onClick={this.handleCheckState}>Save</button>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    state: getState(state)
})
function mapDispatchToProps(dispatch) {
    return{
        setNewCardData: (state) => dispatch(setNewCardData(state)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inputs);