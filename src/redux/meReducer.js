import {
    FETCH_DATA_ERROR,
    FETCH_DATA_PENDING,
    FETCH_DATA_SUCCESS,
    SET_FILTERED_CARDS,
    SET_NEW_CARD_DATA,
    SET_NEXT_PAGE_DATA,
    SET_PREVIOUS_PAGE_DATA,
    SET_SEARCH_INPUT,
} from './actions';

const initialState = { // FROM FETCH
    data: [],
    filteredCards: [],
    sortableData: [],
    visibleFrom: 0,
    visibleTo: 5, // TOTAL COUNT OF CARDS
    searchInput: '',
    pending: true,
    error: null,
}

export default function meReducer(state = initialState, action) {
    switch (action.type) {


        case SET_NEW_CARD_DATA: {
            return {
                ...state,
                data: state.data.concat(action.newCardState)
            }
        }

        case SET_FILTERED_CARDS: {
            return {
                ...state,
                filteredCards: action.filteredCards
            }
        }

        case SET_SEARCH_INPUT:
            return {
                ...state,
                searchInput: action.searchInput
            }

        case SET_PREVIOUS_PAGE_DATA:
            return {
                ...state,
                visibleFrom: state.visibleFrom - 5,
                visibleTo: state.visibleTo - 5
            }

        case SET_NEXT_PAGE_DATA:
            return {
                ...state,
                visibleFrom: state.visibleFrom + 5,
                visibleTo: state.visibleTo + 5
            }

        case FETCH_DATA_PENDING:
            return {
                ...state,
                pending: true
            }

        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.data
            }

        case FETCH_DATA_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }

        default:
            return state;
    }
}
export const getState = state => state