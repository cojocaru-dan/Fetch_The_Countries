function CountryData(props) {
    console.log("props", props);
    return (
        <div>
            <p>Area: {props.area}</p>
            <p>Capital: {props.capital}</p>
            <p>Continents: {props.continents}</p>
            <p>Currencies: {props.currencies}</p>
            <p>Flags: {props.flagsPng}</p>
            <p>Is independent: {props.independent}</p>
            <p>Languages: {props.languages}</p>
            <p>Population: {props.population}</p>
            <p>Region: {props.region}</p>
            <p>Subregion: {props.subregion}</p>
            <button onClick={props.handleBackClick}>Back</button>
        </div>
    )
}

export default CountryData;