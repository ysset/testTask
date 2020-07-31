import {fetchDataPending, fetchDataSuccess, fetchDataError} from './actions';

function fetchData() {

    return dispatch => {
        dispatch(fetchDataPending());
        fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
            .then(res => res.json())
            .then(res => {
                res.map(user => {
                    user.address = `${user.address.state} ${user.address.city} ${user.address.streetAddress} ${user.address.zip}`
                    return user
                })
                return res
            })
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                dispatch(fetchDataSuccess(res));
                return res
            })
            .catch(error => {
                dispatch(fetchDataError(error));
            })
    }
}

export default fetchData;