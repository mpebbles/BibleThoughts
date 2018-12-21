import { combineReducers } from "redux";
import {
  DELETE_RESOURCE,
  REQUEST_RESOURCES,
  ADD_RESOURCE,
  RECEIVE_RESOURCES,
  ADDED_CONTENT,
  ADDING_CONTENT,
} from "../actions/actions";

function resources(state = [], action) {
  switch (action.type) {
    case DELETE_RESOURCE:
      return state.filter(resource => {
        return resource.link !== action.link;
      });
    case RECEIVE_RESOURCES:
      return action.resources;
    case REQUEST_RESOURCES:
      return state;
    case ADD_RESOURCE:
      var obj = Object.assign([], state);
      obj.push({
        text: action.text,
        link: action.link
      });
      return obj;
    default:
      return state;
  }
}

function content(state = [], action) {
  switch (action.type) {
    case ADDED_CONTENT:
      var obj = Object.assign([], state);
      obj.push({
        text: action.text,
        tags: action.tags,
        id: action.id,
      });
      return obj;
    case ADDING_CONTENT:
      return state;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  resources,
  content
});

export default rootReducer;
