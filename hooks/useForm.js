import { useReducer } from 'react';
const useForm = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    description: '',
    message: '',
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'name':
        return { ...state, name: action.payload };
      case 'email':
        return { ...state, email: action.payload };
      case 'phone':
        return { ...state, phone: action.payload };
      case 'description':
        return { ...state, description: action.payload };
      case 'message':
        return { ...state, message: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
export default useForm;
