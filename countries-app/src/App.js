import { useState, useEffect } from 'react';
import './App.css';
import Countries from './components/Countries';
import CountryData from './components/CountryData';

let globalCountries = "";

function App() {
  let [data, setData] = useState(null);
  let [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setData([...data]);
        globalCountries = data;
        console.log(globalCountries);
      });
  }, []);

  function clickEvent(event) {
    setData([globalCountries[event.target.id]]);
    setShowButtons(false);
  }

  function backClickEvent(event) {
    setData(globalCountries);
    setShowButtons(true);
  }

  function sortAscending() {
    const ascendingData = [...data];
    ascendingData.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    })
    globalCountries = ascendingData;
    setData(ascendingData);
  }

  function sortDescending() {
    const descendingData = [...data];
    descendingData.sort((a, b) => {
      if (a.name.common < b.name.common) {
        return 1;
      }
      if (a.name.common > b.name.common) {
        return -1;
      }
      return 0;
    })
    globalCountries = descendingData;
    setData(descendingData);
  }

  return (
    <div className="App">
      {data && data.length !== 1 ? (
        data.map((country, idx) => <Countries key={idx} id={idx} name={country.name.common} handleClick={clickEvent}/>)
      ) :
      data && data.length === 1 ? (
        <CountryData 
          area={data[0].area}
          capital={data[0].capital}
          continents={data[0].continents}
          currencies={Object.keys(data[0].currencies).map((key) => [key, data[0].currencies[key]])[0][1].name}
          flagsPng={data[0].flags.png}
          independent={data[0].independent.toString()}
          languages={Object.keys(data[0].languages).map((key) => [key, data[0].languages[key]])[0][1]}
          population={data[0].population}
          region={data[0].region}
          subregion={data[0].subregion}
          handleBackClick={backClickEvent}
        />
      ) :
        null
      }
      {showButtons ? (
        <>
        <button onClick={sortAscending}>Sort Ascending</button>
        <button onClick={sortDescending}>Sort Descending</button>
        </>
      ) : 
        null
      }
    </div>
  );
}

export default App;
