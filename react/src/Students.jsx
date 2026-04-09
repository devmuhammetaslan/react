

function Students({name,explain,note}) {
    return(
        <div>
            <h2>{name}</h2>
            <p>{explain}</p>
            <h3>{note}</h3>
        </div>
    );
}

export default Students