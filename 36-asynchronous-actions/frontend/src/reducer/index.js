import {combineReducers} from 'redux';

import sections from './sections';
import cards from './cards'

export default combineReducers({
  sections,
  cards,
});