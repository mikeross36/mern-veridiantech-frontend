export function getAllDronesReducer(state = { drones: [] }, action) {
  switch (action.type) {
    case "GET_ALL_DRONES_REQUEST":
      return { loading: true, ...state };
    case "GET_ALL_DRONES_SUCCESS":
      return { loading: false, success: true, drones: action.payload };
    case "GET_ALL_DRONES_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export function getDroneReducer(state = {}, action) {
  switch (action.type) {
    case "GET_DRONE_REQUEST":
      return { loading: true, ...state };
    case "GET_DRONE_SUCCESS":
      return { loading: false, success: true, drone: action.payload };
    case "GET_DRONE_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
