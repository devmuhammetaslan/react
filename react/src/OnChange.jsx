import React, { use, useState } from "react";

function OnChange() {
    const[name,setName] = useState("Guest");
    const[payment,setPayment] = useState("Visa");
    const[car,setCar] = useState({year:2020,
                                  make:"Fiat",
                                  model:"Egea"});
    const[cars,setCars] = useState([]);
    const[carYear,setCarYear] = useState(new Date().getFullYear());
    const[carMake,setCarMake] = useState("");
    const[carModel,setCarModel] = useState("");



    function handleNameChange(event){
        setName(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleYearChange(event){
        setCar(c => ({...c,year : event.target.value}));
    }

    function handleMakeChange(event){
        setCar(c => ({...c,make : event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...c,model : event.target.value}));
    }

    function handleAddCar(){
        const newCar = {year:carYear,
                        make:carMake,
                        model:carModel};
        setCars(c => [...c,newCar]);
    }
    function handleRemoveCar(index){
        setCars(cars.filter((_, i) => i !== index));
    }

    function handleYearChange2(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange2(event){
        setCarMake(event.target.value);
    }

    function handleModelChange2(event){
        setCarModel(event.target.value);
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

            <p>your favorite car = {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleYearChange}/>
            <input type="text" value={car.make} onChange={handleMakeChange}/>
            <input type="text" value={car.model} onChange={handleModelChange}/>
            <br/><br/><br/>
            <h2>list of cars</h2>
            <ul>
                {cars.map((car,index) =>{
                    return(
                        <li key={index}>
                        {car.year}{car.make}{car.model}
                        <button onClick={() => handleRemoveCar(index)}>X</button>
                    </li>
                    );
                })}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange2}/>
            <input type="text" value={carMake} onChange={handleMakeChange2}/>
            <input type="text" value={carModel} onChange={handleModelChange2}/>
            <button onClick={handleAddCar}>Add Car</button>
            <br /><br /><br />
        </div>
    );
}

export default OnChange