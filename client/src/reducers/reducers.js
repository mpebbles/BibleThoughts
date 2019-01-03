import { combineReducers } from "redux";
import {
  DELETE_RESOURCE,
  REQUEST_RESOURCES,
  ADD_RESOURCE,
  RECEIVE_RESOURCES,
  ADDED_ENTRY,
  ADDING_CONTENT,
  RECEIVE_ENTRIES,
  REQUEST_ENTRIES,
  DELETE_ENTRY
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

function entries(state = [], action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      // put tags with text
      var obj_ids = {};
      for (var i = 0; i < action.entries.content.length; i++)
        obj_ids[action.entries.content[i]._id] = []; // new array to store tags
      for (var i = 0; i < action.entries.tags.length; i++)
        obj_ids[action.entries.tags[i].contentRef].push(
          action.entries.tags[i].tag
        );
      return action.entries.content.map(entry => {
        return [entry, obj_ids[entry._id]];
      });
    case REQUEST_ENTRIES:
      return state;
    case DELETE_ENTRY:
      return state;
    case ADDED_ENTRY:
      // deep copy
      var obj = JSON.parse(JSON.stringify(state));
      obj.unshift([
        { _id: action.id, text: action.text },
        action.tags.map(tag => {
          return tag.tag;
        })
      ]);
      return obj;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  resources,
  entries
});

export default rootReducer;
