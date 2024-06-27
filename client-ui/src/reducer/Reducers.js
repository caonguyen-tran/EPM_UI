
export const DispatchReducer = (current, action) => {
  if(action.type === "login"){
    return action.payload;
  }
  else if(action.type === "logout"){
    return null;
  }
  return current;
};


export const initialState = {
  activities: [],
  semesters: [],
  loading: false,
  error: null,
};

export const ActionTypes = {
  SET_ACTIVITIES: "SET_ACTIVITIES",
  SET_SEMESTERS: "SET_SEMESTERS",
  SET_LOADING: "SET_LOADING",
  SET_ERROR: "SET_ERROR",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case ActionTypes.SET_SEMESTERS:
      return { ...state, semesters: action.payload };
    case ActionTypes.SET_LOADING:
      return { ...state, loading: action.payload };
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};