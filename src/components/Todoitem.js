import React, { Component } from 'react'

export default class Todoitem extends Component {
    render() {
        const {title,handleDelete,handleEdit}=this.props
        return (
            <div>
              <li className="list-group-item  text-capitalize d-flex justify-content-between my-2">
                <h6>{title}</h6>
                <div className="todo-icon">
                <span className="mx-2 text-success">
                <i className="fas fa-pen"/>
                </span>
                <button type="submit"onClick={handleEdit}className="btn btn-block btn-danger">edit</button>
                <span className="mx-2 text-danger" onClick={handleDelete}>
                <i className="fas fa-trash"/>
                </span>
                <button type="submit" onClick={handleDelete} className="btn btn-block btn-primary mt-3">Deleteme</button>
                
                </div>
              </li>  
            </div>
        )
    }
}
