import axios from "axios";
/*
 * action types
 */

export const DELETE_RESOURCE = "DELETE_RESOURCE";
export const RECEIVE_RESOURCES = "RECEIVE_RESOURCES";
export const ADD_RESOURCE = "ADD_RESOURCE";
export const REQUEST_RESOURCES = "REQUEST_RESOURCES";

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

export function requestResources() {
  return {
    type: REQUEST_RESOURCES
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
