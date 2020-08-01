export const FETCH_DATA_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_DATA_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_DATA_ERROR = 'FETCH_PRODUCTS_ERROR';
export const SET_NEXT_PAGE_DATA = 'SET_NEX_PAGE_DATA';
export const SET_PREVIOUS_PAGE_DATA = 'SET_PREVIOUS_PAGE_DATA';
export const SET_SEARCH_INPUT = 'SET_SEARCH_INPUT';
export const SET_FILTERED_CARDS = 'SET_FILTERED_CARDS';
export const SET_NEW_CARD_DATA = 'SET_NEW_CARD_DATA';

export function fetchDataPending() {
    return {
        type: FETCH_DATA_PENDING
    }
}

export function fetchDataSuccess(data) {
    return {
        type: FETCH_DATA_SUCCESS,
        data: data
    }
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        error: error
    }
}

export function setSearchInput(searchInput) {
    return{
        type:SET_SEARCH_INPUT,
        searchInput: searchInput
    }
}

export function setFilteredCards(filteredCards) {
    return{
        type:SET_FILTERED_CARDS,
        filteredCards: filteredCards
    }
}

export function next() {
    return{
        type:SET_NEXT_PAGE_DATA
    }
}

export function previous() {
    return{
        type:SET_PREVIOUS_PAGE_DATA
    }
}

export function setNewCardData(newCardState) {
    return{
        type: SET_NEW_CARD_DATA,
        newCardState: newCardState
    }
}
