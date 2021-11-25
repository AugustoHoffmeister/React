import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Augusto'
  
  const newName = name.toUpperCase()

  function som(a, b){
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <div className="App">
     <h2> Alterar JSX </h2>
     <p> Olá, {newName} </p>
     <p> Soma: {som(2, 1)} </p>
     <img src={url} alt="Imagem" />
   </div>
  )
}

export default App;
