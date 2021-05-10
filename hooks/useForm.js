import { useReducer } from 'react';
const useForm = () => {
  const initialState = {
    name: {
      value: '',
      error: '',
    },
    email: {
      value: '',
      error: '',
    },
    phone: {
      value: '',
      error: '',
    },
    description: {
      value: '',
      error: '',
    },
    message: {
      value: '',
      error: '',
    },
  };
  function reducer(state, action) {
    switch (action.type) {
      case 'name':
        return { ...state, name: { ...state.name, value: action.payload } };
      case 'name_error':
        return { ...state, name: { ...state.name, error: action.payload } };
      case 'email':
        return { ...state, email: { ...state.email, value: action.payload } };
      case 'email_error':
        return { ...state, email: { ...state.email, error: action.payload } };
      case 'phone':
        return { ...state, phone: { ...state.phone, value: action.payload } };
      case 'phone_error':
        return { ...state, phone: { ...state.phone, error: action.payload } };
      case 'description':
        return {
          ...state,
          description: { ...state.description, value: action.payload },
        };
      case 'description_error':
        return {
          ...state,
          description: { ...state.description, error: action.payload },
        };
      case 'message':
        return {
          ...state,
          message: { ...state.message, value: action.payload },
        };
      case 'message_error':
        return {
          ...state,
          messagge: { ...state.message, error: action.payload },
        };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
};
export default useForm;
