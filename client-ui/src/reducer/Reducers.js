
export const DispatchReducer = (current, action) => {
  if(action.type === "login"){
    return action.payload;
  }
  else if(action.type === "logout"){
    return null;
  }
  return current;
};
