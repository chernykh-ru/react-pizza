import { Header } from './components';
// import SortPopup from './components/SortPopup';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPizzas } from './redux/reducers/pizzas';

function App() {
  const dispatch = useDispatch();
  //useSelector вытащили из веток стейта нужные нам части стейта, после передаем items props to Home
  // const { items } = useSelector(({ pizzas, filters }) => {
  //   return {
  //     items: pizzas.items,
  //     // sortBy: filters.sortBy,//для примера
  //   };
  // });
  // console.log(stateTree);
  //useEffect подобие componentDidMount, выполнит этот запрос при первом рендере
  // React.useEffect(() => {
  //   axios.get('http://localhost:5000/db.json').then(({ data }) => {
  //     dispatch(setPizzas(data.pizzas));
  //     // window.store.dispatch(setPizzas(data.pizzas));
  //   });
  // }, []);
  React.useEffect(() => {
    axios.get('http://localhost:5000/pizzas').then(({ data }) => {
      dispatch(setPizzas(data));
      // window.store.dispatch(setPizzas(data.pizzas));
    });
  }, []);

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

//реализация компонента на классах
// class App extends React.Component {
//   componentDidMount() {
//     axios.get('http://localhost:5000/db.json').then(({ data }) => {
//       this.props.setPizzas(data.pizzas);
//       // window.store.dispatch(setPizzas(data.pizzas));
//     });
//     //получение json с сервера
//     // fetch('http://localhost:5000/db.json')
//     //   .then((resp) => resp.json())
//     //   .then((json) => console.log(json));
//   }, []);
//   }

//   render() {
//     return (
//       <div className='wrapper'>
//         <Header />
//         <div className='content'>
//           <Route exact path='/'>
//             <Home items={this.props.items} />
//           </Route>
//           <Route exact path='/cart'>
//             <Cart />
//           </Route>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// };

// export default connect(mapStateToProps, { setPizzas })(App);
