import React, { Component } from 'react'
import Todolist from './components/Todolist';
import Todoinput from './components/Todoinput';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       id:uuid(),
       item:"",
       editItem:false
    };
  }
  handleChange= (e) =>{
    this.setState({
      item:e.target.value
    });
  };
  handleSubmit=(e)=>{
    e.preventDefault();

    const newitem={
      id:this.state.id,
      title:this.state.item
    };
    console.log(newitem);
    const updateditems=[...this.state.items,newitem];
    this.setState({
      items:updateditems,
      item:"",
      id:uuid(),
      editItem:false
    
    })

  }
  Clearlist=()=>{
    this.setState({
      items:[]
    })
  }
  handleDelete=(id)=>{
    const filtereditems=this.state.items.filter(item=>item.id!==id)
    this.setState({
      items:filtereditems
    });
  }
  handleEdit=(id)=>{
const filtereditems=this.state.items.filter(item=>item.id!==id)

    const selecteditems=this.state.items.find(item=>item.id!==id)
    console.log(selecteditems);
    this.setState({
      items:filtereditems,
      item:selecteditems.title,
      editItem:true,
      id:id
    })
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-8">
          <h1 className="text-capitalize text-center">Todo Input</h1>
          <Todoinput item= {this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem}/>
          <Todolist items={this.state.items} Clearlist={this.Clearlist} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>

          </div>
        </div>
      </div>

      
    )
  }
}
