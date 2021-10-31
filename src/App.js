import { Header } from './components';
// import SortPopup from './components/SortPopup';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';

function App() {
  const [pizzas, setPizzas] = React.useState([]);
  //componentDidMount, выполнит этот эффект только один раз при первом рендере
  React.useEffect(() => {
    fetch('http://localhost:5000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      }); //получение json с сервера
    // fetch('http://localhost:5000/db.json')
    //   .then((resp) => resp.json())
    //   .then((json) => console.log(json)); //получение json с сервера
  }, []);

  // console.log(pizzas);
  //прокидываем по пропсам массив pizzas

  return (
    <div className='wrapper'>
      <Header />
      <div className='content'>
        <Route exact path='/'>
          <Home pizzas={pizzas} />
        </Route>
        <Route exact path='/cart'>
          <Cart />
        </Route>
      </div>
    </div>
  );
}

export default App;
