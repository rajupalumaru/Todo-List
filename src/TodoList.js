import React from 'react'

const TodoList = ({ todoList,DeleteHandler }) => {
    return (
        <div>
            {todoList.map((todo, index) =>
                <div key={index}>
                    <h5>{todo} &nbsp; <button onClick={DeleteHandler(index)}>Delete</button></h5>
                </div>)}
        </div>
    )
}

export default TodoList;
