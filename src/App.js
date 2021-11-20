import { Header } from './components';
// import SortPopup from './components/SortPopup';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';
// import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { setPizzas } from './redux/reducers/pizzas';
// import { fetchPizzas } from './redux/reducers/pizzas';

function App() {
  // const dispatch = useDispatch();
  // React.useEffect(() => {
  //   dispatch(fetchPizzas());
  //   // axios.get('http://localhost:5000/pizzas').then(({ data }) => {
  //   //   dispatch(setPizzas(data));
  //   // });
  // }, []);

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </div>
    </div>
  );
}

export default App;
