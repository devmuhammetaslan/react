import Header from "./Header"   
import Footer from "./Footer"
import Card from "./Card"  
import Button from "./Button/button"  
import Students from "./Students"
import Userlogin from "./Userlogin"
import List from "./List"
import MyComponent from "./MyComponent"
import Counter from "./Counter"
import OnChange from "./onChange" 
function App() {
  return(
    <>
      <Header></Header>
      <Footer></Footer>
      <Header></Header>  {/*tekrar kullanabiliyorsun*/}
      {/* <div className="container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div> */}
      <Button></Button>
      <Button></Button>
      <Students name="serdar" explain="sağlam hoca" note=":O"></Students>
      <Students name></Students>
      <Userlogin name="muhammet" isLogged={true}></Userlogin>
      <List></List>
      <MyComponent></MyComponent>
      <Counter></Counter>
      <OnChange></OnChange>
      

    </>
    
  );
}

export default App
