import React, { useState } from 'react';

export default function ToDoList() {
    const [taskTitle, setTaskTitle] = useState('');
    const [count, setCount] = useState(0);
    const [tasks, setTasks] = useState([]);

    function handleTaskTitle(event){
        setTaskTitle(event.target.value);
    }

    function addTask(event){
        event.preventDefault();
        if (taskTitle.trim() === '') return false;
        const newTask = {
            id: count,
            title: taskTitle,
        };
        setTasks([...tasks, newTask])
        setCount(count + 1);
        setTaskTitle('');
    }

    function editTask(id){
        const newTitle = prompt('Edit your Task');
        if (newTitle) {
            setTasks(tasks.map(task => task.id===id ? {...task, title: newTitle} : task));
        }
    }

    function deleteTask(id){
        setTasks(tasks.filter(task => task.id !=id));
    }
    return (
        <div>
            <h1>ToDo List</h1>
            <div>
                <form onSubmit={addTask}>
                    <input 
                        type='text'
                        placeholder='Write your task here'
                        value={taskTitle}
                        onChange={handleTaskTitle}
                    />
                    <button type='submit'>+</button>
                </form>
            </div>
            <div>
                {tasks.map((task) => 
                    <div key={task.id} style={{display : 'flex'}}>
                        <p>{task.title}</p>
                        <button onClick={() => editTask(task.id)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    )    
}