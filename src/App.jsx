import { Provider } from 'react-redux';
import './App.css';
import store from './features/store';
import CakeContainer from './components/CakeContainer/CakeContainer';
import MilkContainer from './components/MilkContainer/MilkContainer';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <hr />
      <MilkContainer />
      <hr />
      <UserList />
    </Provider>
  );
}

export default App;
