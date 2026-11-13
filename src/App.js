import logo from './logo.svg';
import './index.css';
import pizzaData from './data.js'

// function Mycomponent() {
//   return <h1>Hello, this is a function component body.</h1>
// }

// function Back() {
//   return (
//     <div>
//       <button>
//         back to home
//       </button>
//     </div>
//   )
// }

// const pizzas = [
//   {id: 0, name: 'focaccia', image: 'focaccia.jpg'},
//   {id: 1, name: 'funghi', image: 'funghi.jpg'},
//   {id: 2, name: 'margherita', image: 'margherita.jpg'},
//   {id: 3, name: 'prosciutto', image: 'prosciutto.jpg'},
//   {id: 4, name: 'salamino', image: 'salamino.jpg'},
//   {id: 5, name: 'spinaci', image: 'spinaci.jpg'}
// ]

// const display = pizzaData.map(pizza =>
//   <ul key={pizza.id}>
//     <h1>{pizza.name}</h1>
//     <img
//       src={`./starter/${pizza.image}`}
//       alt={pizza.name}
//     />
//   </ul>
// )

// activity 5-7
function Header() {
  return <h1 classname="header"style={{ color: 'orange', fontSize: 48, textTransform: 'uppercase' }}>
      Andy's Pizza Co.
    </h1>;
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map(pizza =>
          <ul key={pizza.id} className="pizza">
            <img
              src={`./starter/${pizza.photoName}`}
              alt={pizza.name}
            />
            <h3>{pizza.name}</h3>
            <p>{pizza.ingredients}</p>
            <span>${pizza.price}</span>
          </ul>
        )}
      </ul>
    </div>
  )
}

function Order() {
  return (
    <button className="btn" onClick={()=> alert("Order Send")}>
      Order
    </button>
  )
}

function Footer() {
  const currentHour = new Date().getHours()
  const openHour = 10
  const closedHour = 22

  const isOpen = currentHour >= openHour && currentHour <= closedHour

  return (
    <footer className="footer">
      {isOpen ? (
        <p>We're currently open</p> 
      ) : (
        <p>We're currently closed</p>
      )}
    </footer>
  )
}

function App() {
  return (
    <div className='container'>
      {/* <h1>Hello world!</h1>
      <Mycomponent />
      <Back />
      {display} */}
      <Header />
      <Menu />
      <Order />
      <Footer />
    </div>
  );
}

export default App;
