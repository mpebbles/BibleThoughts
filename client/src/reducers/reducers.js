import { combineReducers } from "redux";
import {
  DELETE_RESOURCE,
  REQUEST_RESOURCES,
  ADD_RESOURCE,
  RECEIVE_RESOURCES
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

const rootReducer = combineReducers({
  resources
});

export default rootReducer;
