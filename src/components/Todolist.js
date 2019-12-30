import React, { Component } from 'react'
import Todoitem from './Todoitem'


export default class Todolist extends Component {
    render() {
        const {items,Clearlist,handleDelete,handleEdit}=this.props
        return (
            <div>
              <ul className="list-group my-5">
              <h3 className="text-capitalize text-center"> Todolist</h3>

                {
                    items.map(item =>{
                        return(
                            <Todoitem 
                            key={item.id}
                             title={item.title}
                             handleDelete={()=>handleDelete(item.id)}
                             handleEdit={()=>handleEdit(item.id)}
                             />
                        )
                    })
                }

              

              <button 
              type="submit" 
              className="btn btn-danger text-capitalize mt-5"
              onClick={Clearlist}
              >Clear list</button>
              </ul> 
            </div>
        )
    }
}
