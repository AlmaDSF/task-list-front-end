import React from 'react';
import { useState } from 'react';
import './NewTaskForm.css';

const INITIAL_TASK_DATA = {
    title : '',
    description : '',
};

const NewTaskForm = () => {
    const[formData, setFormData] = useState(INITIAL_TASK_DATA);

    const handleChange = (e) => {
        console.log(`Target name: ${e.target.name} Target value: ${e.target.value}`);

        const newTaskData = {
            ...formData,
            [e.target.name]: e.target.value
        };
        setFormData(newTaskData);
    };

return (
    <form>
        <div>
            <label htmlFor="title" > Task Title </label>
            <input 
                type="text" 
                id="title" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="description" > Task Title </label>
            <input 
                type="text" 
                id="description" 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
            />
        </div>

    </form>
    );
};

export default NewTaskForm;


