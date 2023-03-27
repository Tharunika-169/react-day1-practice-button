function Test()
{
    let age =18;
    let name="kiran";
    let setStatus=false;
    let userDefault=undefined;
    let responseValue = null;
    console.log(age,name,setStatus,userDefault,responseValue)
    let oldage=age;
    age=25;
    let status=setStatus;
    setStatus=true;
    console.log(status);
    const hi=()=>{
     alert("Check the console output")
    }
    return<div><button onClick={hi}>Check</button></div>
}
ReactDOM.render(<Test/>,document.getElementById('sp'))