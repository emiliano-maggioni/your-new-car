import cars from './cars';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    cars,
  })

const store = configureStore({
  reducer,
}) 

export default store;
