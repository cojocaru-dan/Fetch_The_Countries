function Countries(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <button onClick={props.handleClick} id={props.id}>Learn More</button>
        </div>
    );
}

export default Countries;