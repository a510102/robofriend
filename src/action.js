import { 
  CHANGE_SEARCH_FIELD,
  REQUSET_ROBOTS_PENDING,
  REQUSET_ROBOTS_SUCCESS,
  REQUSET_ROBOTS_FAILED, 
} from './constants';

export const setSearchField = (text) =>{
  return{
    type: CHANGE_SEARCH_FIELD,              
    payload: text,
  }
};

//return function 透過redux thunk(middleware) 判斷是否有連線成功(非同步處理)
export const requestRobots = () => (dispatch) => {
  dispatch({ type: REQUSET_ROBOTS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>  response.json())
      .then(data => dispatch({ type: REQUSET_ROBOTS_SUCCESS , payload: data}))
      .catch(error => dispatch({ type: REQUSET_ROBOTS_FAILED, payload: error }))

}