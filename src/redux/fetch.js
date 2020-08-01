import {fetchDataSuccess, fetchDataError} from './actions';

function fetchData(whatFetch) {

    return dispatch => {
        fetch(whatFetch)
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