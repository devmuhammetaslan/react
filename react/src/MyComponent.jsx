import React,{ useState } from "react";

function MyComponent() {
    const [name,setName] = useState("Guest");//burası default değeri yani
    const [age,setAge] = useState(0);

    const updateName = () => {
        setName("selamlar");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    return(
        <div>
            <p>name = {name}</p>
            <p>yaş = {age}</p>
            <button onClick={updateName}>isim deistir</button>
            <button onClick={updateAge}>yaş deistir</button>

        </div>
    );
}

export default MyComponent