import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
            <div className='card  w-50 border-bottom  my-2' >
                <div className="card-body d-flex  flex-column">
                    <h4 className='card-text'>{todo.title}</h4>
                    <p className='card-text'>{todo.desc}</p>
                    <button className="btn btn-sm btn-danger " onClick={() => { onDelete(todo) }}>Delete</button>
                </div>
            </div>
           
        </>
    )
}
