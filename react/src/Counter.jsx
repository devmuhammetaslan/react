import React, { useState } from "react";

function Counter() {
    const [count,setCount] = useState(0);

    const artir = () => {
        // setCount(count+1);
        setCount(c => c +1);//bu daha sağlıklı yöntem 
    }
    const azalt = () => {
        if(count > 0){
            setCount(count-1);
        }         

    }
    const reset = () => {
        setCount(0);
    }
    return(
        <div>
            <p>count = {count}</p>
            <button onClick={artir}>artir</button>
            <button onClick={azalt}>azalt</button>
            <button onClick={reset}>reset</button>

        </div>
    );
}
export default Counter