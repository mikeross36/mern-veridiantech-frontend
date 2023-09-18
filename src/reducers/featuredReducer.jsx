export function getAllFeaturedReducer(state = { featureds: [] }, action) {
  switch (action.type) {
    case "GET_ALL_FEATURED_REQUEST":
      return { loading: true, ...state };
    case "GET_ALL_FEATURED_SUCCESS":
      return { loading: false, success: true, featureds: action.payload };
    case "GET_ALL_FEATURED_FAILED":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
