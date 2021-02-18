import actions from "./action.types";
const user = {
  name: "",
  displayURL: ""

};
export default function userReducer(state = user, action){
  switch (action.type) {
  case actions.UPDATE_USER:
    return {...state , name : action.payload.name, displayURL: action.payload.displayURL};
     
  default:
    return state;
  }
}