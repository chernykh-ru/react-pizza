import { Header } from './components';
// import SortPopup from './components/SortPopup';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setPizzas } from './redux/reducers/pizzas';

// function App() {
//   // const [pizzas, setPizzas] = React.useState([]);
//   //componentDidMount, выполнит этот эффект только один раз при первом рендере
//   React.useEffect(() => {
//     axios.get('http://localhost:5000/db.json').then(({ data }) => {
//       setPizzas(data.pizzas);
//     });
//     //получение json с сервера
//     // fetch('http://localhost:5000/db.json')
//     //   .then((resp) => resp.json())
//     //   .then((json) => console.log(json)); //получение json с сервера
//   }, []);

//   // console.log(pizzas);
//   //прокидываем по пропсам массив pizzas

//   return (
//     <div className='wrapper'>
//       <Header />
//       <div className='content'>
//         <Route exact path='/'>
//           <Home pizzas={pizzas} />
//         </Route>
//         <Route exact path='/cart'>
//           <Cart />
//         </Route>
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:5000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
      // window.store.dispatch(setPizzas(data.pizzas));
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Route exact path='/'>
            <Home items={this.props.items} />
          </Route>
          <Route exact path='/cart'>
            <Cart />
          </Route>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzas(items))
//   }
// };

export default connect(mapStateToProps, { setPizzas })(App);
