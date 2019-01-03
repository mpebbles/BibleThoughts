import axios from "axios";
/*
 * action types
 */

export const DELETE_RESOURCE = "DELETE_RESOURCE";
export const RECEIVE_RESOURCES = "RECEIVE_RESOURCES";
export const ADD_RESOURCE = "ADD_RESOURCE";
export const REQUEST_RESOURCES = "REQUEST_RESOURCES";
export const ADDED_ENTRY = "ADDED_ENTRY";
export const ADDING_CONTENT = "ADDING_CONTENT";
export const RECEIVE_ENTRIES = "RECEIVE_ENTRIES";
export const REQUEST_ENTRIES = "REQUEST_ENTRIES";
export const DELETE_ENTRY = "DELETE_ENTRY";

/*
 * other constants
 */

/*
 * action creators
 */

export function deleteResource(link) {
  axios({
    method: "post",
    url: "/api/deleteResource/",
    data: { link: link }
  }).then();
  return { type: DELETE_RESOURCE, link: link };
}

export function addResource(link, text) {
  axios({
    method: "post",
    url: "/api/addResource/",
    data: { link: link, text: text }
  }).then();
  return { type: ADD_RESOURCE, link: link, text: text };
}

export function addContent(text, tags) {
  return function(dispatch) {
    dispatch(addingContent);
    return axios({
      method: "post",
      url: "/api/addContent/",
      data: { text: text, tags: tags }
    }).then(res => {
      if (res.status === 200) {
        dispatch(addedContent(text, tags, res.data));
      }
    });
  };
}

export function requestResources() {
  return {
    type: REQUEST_RESOURCES
  };
}

export function addingContent() {
  return {
    type: ADDING_CONTENT
  };
}

export function addedContent(text, tags, id) {
  return {
    type: ADDED_ENTRY,
    text: text,
    tags: tags,
    id: id
  };
}

export function receiveResources(resources) {
  return {
    type: RECEIVE_RESOURCES,
    resources: resources
  };
}

export function fetchResources() {
  return function(dispatch) {
    dispatch(requestResources);
    return axios({
      method: "get",
      url: "/api/getResources/"
    }).then(res => {
      if (res.status === 200) {
        dispatch(receiveResources(res.data));
      } else {
        dispatch(receiveResources([]));
      }
    });
  };
}

export function receiveEntries(entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries: entries
  };
}

export function requestEntries() {
  return {
    type: REQUEST_ENTRIES
  };
}

export function fetchEntries() {
  return function(dispatch) {
    dispatch(requestResources);
    return axios({
      method: "get",
      url: "/api/getEntries/"
    }).then(res => {
      if (res.status === 200) {
        dispatch(receiveEntries(res.data));
      } else {
        dispatch(receiveEntries([]));
      }
    });
  };
}

export function deleteEntry(id) {
  //axios({
  //  method: "post",
  //  url: "/api/deleteResource/",
  //  data: { link: link }
  //}).then();
  return { type: DELETE_ENTRY, id: id };
}
