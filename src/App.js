import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
//   let firstVariable =5
//   // console.log("firstvariable : "+firstVariable);

//   // const funargument = ()=>{
//   //   console.log("function argument");
//   //   return false;
//   // }
//   //  function myFunction1(variable){
//   //   console.log("badiya hai bhai bata tu")
//   //   if(variable()){
//   //     console.log("true conditions");
//   //   }else{
//   //     console.log("false conditions");
//   //   }
//   //  }
//   //  myFunction1(funargument);
  
//   //we learn about object , class , inheritamce
//   class Student {
//     id
//     name
//     rollno 
//     address
//     mobNo

//     constructor(tempid, tempname, temproll,temoaddress ,tempmob){
//         this.id = tempid;
//       this.name = tempname;
//     this.rollno =temproll;
//    this.address =temoaddress;
//     this.mobNo=tempmob;
//     }
//     print(){
//       console.log("id ="+this.id);
//       console.log("name = "+this.name);
//       console.log("roll no ="+this.rollno);
//       console.log("address ="+this.address);
//       console.log("mobile no ="+this.mobNo);
//     }
//   }
//   const mydata = new Student(200,"hdhjs",992,"wsj",7728)
//   mydata.print()


//   class Monitor extends Student{
//     batch
//     constructor(tempbatch,tempid, tempname, temproll,temoaddress ,tempmob){
//       super(tempid, tempname, temproll,temoaddress ,tempmob)
//        this.batch =tempbatch;
//     }
//      print(){
//       super.print();
//       console.log("batch time "+this.batch);
//      }
//   }
//   const ravi = new Student("2-4pm",200,"hdhjs",992,"wsj",7728,)
//   console.log("ravi",ravi)
//   ravi.print() 
 
  
//   // mydata.id=102
//   // mydata.name="vivek"
//   // mydata.mob= 7626
//   // mydata.address="kalsada"
//   // mydata.rollno=292
  
//   return (
//     <div >
//        hello {firstVariable};
//     </div>
//   );
// }


// class componets we learn

// class App extends React.Component
// {
//    onclickhandle = ()=>
//   {
//       console.log("button is clicked by user");
//     }

// render()
// {
  //first war to create a li 
// return React.createElement
// (
//   "div",
//   null,
//  React.createElement("p",null,"this is simple ment"),
//  React.createElement("ol", null, ""),
//  React.createElement("li",null,"list 1"),
//  React.createElement("li",null,"list 2"),
//  React.createElement("li",null,"list 3")

// )

//second way simple way
// return <div>,
// <p>,
// <ol>
//   <li>list 1</li>
//   <li>list 2</li>
//   <li>list 3</li>
// </ol>

// <button onClick={()=>this.onclickhandle()}>click me</button>
// </p>
// </div>
// }
// }


//by using functiom props componets we use it
// const App = (props) => 
// {
//   console.log(props);
//   console.log("color :",props.color);
//   console.log("size :",props.size);
// return <div style={{backgroundColor:props.color}}>This is functional componets
// <button onClick={props.clickEvent}>click me</button>
// </div>
// }
//-----------------------------------------------------------
//by using class component 

class App extends React.Component
{
  state ={
    counter: 0,
     component: <ChildComponent/>
  }
 
   constructor(props)
 {
  super(props)
  console.log("constructo component");
 }
 static getDerivedStateFromProps(){
  console.log("getDerivedStateFrimProps");
}
 incrementCounter = () =>
 {
  this.setState({counter : this.state.counter +1})
 }
 componentDidMount(){
 console.log("componentDidMount");
 }
 shouldComponentUpdate(){
  console.log("shouldComponentUpdate");
return true;
 }
 getSnapshotBeforeUpdate(prevprops,prevstate){
  console.log("getSnapshotBeforeUpdate");  
  return true;
 }
 componentDidUpdate(){
  console.log("componentDidUpdate");
 }
 unmountchild =()=>{
   this.setState({
        counter : this.state.counter,
  component : "this is child component"
 })
}

  render()
  {
    console.log("render method");
    return <div style={{backgroundColor:this.props.color}}>Hello brother
    <button onClick={this.props.clickEvent}>click me</button>     <br/>
    ................<br/>
    Counter: {this.state.counter}
    <button onClick={this.incrementCounter}>Increment Counter</button>
    <br/>
    Mounting child component <br/>
   
    ..............<br/>
    {/* <ChildComponent/> */}
    {this.state.component}
    ........................<br/>

    <button onClick={this.unmountchild}>Umounted component</button>
    <br/>
    </div>
  }
}

class ChildComponent extends React.Component
{
  render(){
    return <div> this is my Child Component</div>
  }
}
export default App;
