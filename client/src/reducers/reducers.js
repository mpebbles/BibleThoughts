import { combineReducers } from "redux";
import { DELETE_RESOURCE, FETCH_RESOURCES } from "../actions/actions";

function resources(state = [], action) {
  switch (action.type) {
    case DELETE_RESOURCE:
      return state.filter(resource => {
        return resource.id !== action.id;
      });
    case FETCH_RESOURCES:
      return action.resources;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  resources
});

export default rootReducer;
