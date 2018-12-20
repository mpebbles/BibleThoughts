/*
 * action types
 */

export const DELETE_RESOURCE = 'DELETE_RESOURCE';
export const FETCH_RESOURCES = 'FETCH_RESOURCSE';

/*
 * other constants
 */


/*
 * action creators
 */

export function deleteResource(id) {
  return {type : DELETE_RESOURCE, id};
}

export function fetchResources() {
  // TODO: implement
  return {type: FETCH_RESOURCES, resources: [{id: 1, link: "http://www.google.com", text: "google"}]};
}
