//Using Redux with TypeScript as an example
// Install required packages: npm install redux react-redux @types/react-redux


import { createStore, Action } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

interface RootState {
  user: string;
  isAuthenticated: boolean;
}

// Define Actions
interface SetUserAction extends Action<'SET_USER'> {
  payload: string;
}

interface SetAuthenticationAction extends Action<'SET_AUTHENTICATION'> {
  payload: boolean;
}

type AppAction = SetUserAction | SetAuthenticationAction;

//Reducer definition
const rootReducer = (state: RootState, action: AppAction): RootState => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_AUTHENTICATION':
      return { ...state, isAuthenticated: action.payload };
    default:
      return state;
  }
};

// Create Store
const store = createStore(rootReducer, {
  user: '',
  isAuthenticated: false,
});

// Use Redux in Component
const UserInfoRedux: React.FC = () => {
  const user = useSelector((state: RootState) => state.user);
  const isAuthenticated = useSelector((state: RootState) => state.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch({ type: 'SET_USER', payload: 'JohnDoe' });
    dispatch({ type: 'SET_AUTHENTICATION', payload: true });
  };

  return (
    <div>
      <p>{`User: ${user}`}</p>
      <p>{`Authenticated: ${isAuthenticated}`}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

// Wrap App with Redux Provider
const AppWithRedux: React.FC = () => {
  return (
    <Provider store={store}>
      <UserInfoRedux />
    </Provider>
  );
};

