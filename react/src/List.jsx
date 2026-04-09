
function List() {
    const fruits = ["elma","muz","portakal","mandalina","greyfurt"];

    return(
        <ul>
            {fruits.map((fruit,index) =>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}

export default List