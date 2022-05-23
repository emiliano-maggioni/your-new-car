import cars from './cars';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    mainReducer:cars,
  })

const store = configureStore({
  reducer,
}) 

export default store;
