import React, { use, useState } from "react";

function OnChange() {
    const[name,setName] = useState("Guest");
    const[payment,setPayment] = useState("Visa");
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    return(
        <div>
            <input type="text" onChange={handleNameChange}/>
            <p>name = {name}</p>

            <select value={payment} onChange={handlePaymentChange}> 
                <option value="Visa">Visa</option>
                <option value="Paypal">Paypal</option>              
            </select>
            <p>Payment : {payment}</p>
        </div>
    );
}

export default OnChange