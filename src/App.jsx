import { Provider } from 'react-redux';
import './App.css';
import store from './features/store';
import CakeContainer from './components/CakeContainer/CakeContainer';
import MilkContainer from './components/MilkContainer/MilkContainer';

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
      <hr />
      <MilkContainer />
    </Provider>
  );
}

export default App;
