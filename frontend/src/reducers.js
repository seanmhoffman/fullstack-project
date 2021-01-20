import { createActions, handleActions, combineActions } from 'redux-actions'

// Import API Services

import {
  fetchBreeds,
  getFavorites,
  createFavorite,
  destroyFavorite
} from './lib/apiServices'

// Initiate the initial state for the application

const initialState = {
  status: '',
  favorites: [],
  breeds: [],
  currentQuery: '',
  isLoading: false
}

// Define action name constants

const LOAD_BREED_RESULTS = 'LOAD_BREED_RESULTS'
const SEARCH_BREEDS = 'SEARCH_BREEDS'
const ADD_FAVORITE = 'ADD_FAVORITE'
const LOAD_FAVORITES = 'LOAD_FAVORITES'
const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
const SHOW_LOADING = 'SHOW_LOADING'
const HIDE_LOADING = 'HIDE_LOADING'
const UPDATE_QUERY = 'UPDATE_QUERY'

// Export all actions by passing in the action name constants
// to react-redux createActions method.

export const {
  loadBreedResults,
  addFavorite,
  loadFavorites,
  removeFavorite,
  updateQuery,
  showLoading,
  hideLoading
} = createActions(
  {
    SHOW_LOADING: () => true,
    HIDE_LOADING: () => false,
  },
  LOAD_BREED_RESULTS,
  SEARCH_BREEDS,
  ADD_FAVORITE,
  LOAD_FAVORITES,
  REMOVE_FAVORITE,
  UPDATE_QUERY
)

// searchBreeds retrieves the breed search 
// results from the API and loads that into the store

export const searchBreeds = query => {
  return dispatch => {
    dispatch(showLoading())
    fetchBreeds(query)
      .then(response => {
        dispatch(loadBreedResults(response.data))
        dispatch(hideLoading())
      })
      .catch(err => {
        dispatch(loadBreedResults(err))
        dispatch(hideLoading())
      })
  }
}

// fetchFavorites retrieves all and any favorites

export const fetchFavorites = () => {
  return dispatch => {
    dispatch(showLoading())
    getFavorites()
      .then(response => {
        dispatch(loadFavorites(response.data))
        dispatch(hideLoading())
      })
      .catch(err => {
        dispatch(loadFavorites(err))
        dispatch(hideLoading())
      })
  }
}

// saveFavorite creates and saves a favorite

export const saveFavorite = favorite => {
  return dispatch => {
    dispatch(showLoading())
    createFavorite(favorite)
      .then(response => {
        dispatch(addFavorite(response.data))
        dispatch(hideLoading())
      })
      .catch(err => {
        dispatch(addFavorite(err, favorite))
        dispatch(hideLoading())
      })
  }
}

// deleteFavorite deletes and destroys a favorite

export const deleteFavorite = id => {
  return dispatch => {
    dispatch(showLoading())
    destroyFavorite(id).then(() => {
      dispatch(removeFavorite(id))
      dispatch(hideLoading())
    })
  }
}


// Mapping of all action names to reducer functions

export default handleActions(
  {
    UPDATE_QUERY: (state, action) => {
      return { ...state, currentQuery: action.payload }
    },
    ADD_FAVORITE: {
      next: (state, action) => {
        return {
          ...state,
          favorites: state.favorites.concat(action.payload)
        }
      },
      throw: (state, action) => {
        return {
          ...state,
          status: `There was a problem saving the your favorite`
        }
      }
    },
    REMOVE_FAVORITE: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.filter(f => f.breed_id !== action.payload)
      }
    },
    LOAD_FAVORITES: {
      next: (state, action) => {
        return { ...state, favorites: action.payload }
      },
      throw: (state, action) => {
        return {
          ...state,
          status: 'There was a problem loading your favorites'
        }
      }
    },
    LOAD_BREED_RESULTS: {
      next: (state, action) => {
        return { ...state, breeds: action.payload }
      },
      throw: (state, action) => {
        return {
          ...state,
          status: 'There was an issue loading the search results'
        }
      }
    },
    [combineActions(SHOW_LOADING, HIDE_LOADING)]: (state, action) => {
      return { ...state, isLoading: action.payload }
    }
  },
  initialState
)