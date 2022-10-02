import './App.css';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <Country></Country>
    </div>
  );
}

/* 
function Countries() {
  const [countries, setCountries] = useState([])

  useEffect( () => {
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
return (
  
  <div>
    <h1>REST Countries</h1>
      {
          countries.map(country => <Country 
            name = {country.name.common} 
            capital = {country.capital} 
            region = {country.subregion} 
            
            ></Country>)
      }
  </div>
)
}

function Country(props) { 
  
  return(
    <div>
      <h1>Name: {props.name}</h1> 
      <h3>Capital: {props.capital}</h3> 
      <h4>Region: {props.subregion}</h4> 
      <p>Capital: {props.currenciesName}</p> 
      <p>Capital: {props.currenciesSymbol}</p> 
    </div>
  )
 }
 */


export default App;
