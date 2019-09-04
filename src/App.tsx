import React, { useState } from 'react';
import './App.css';
import { NewTaskForm } from './components/NewTaskForm';
import { Task } from './models/task';
import { TasksList } from './components/TaskList';


export const App: React.FunctionComponent = () => {

  interface ITask{
    newTask: Task;
  }

  interface ITaskArray{
    tasks: Task[]
  }
  const [params, setParams] = useState<ITask>({
    newTask: {
      id: 0,
      type: '',
      patientName:'',
      effectiveDate:''
    },
  })

  const [tasksArray, setTasksArray] = useState<ITaskArray>({
    tasks: []
  })
 // State updates are done in batches so if you call setState in one line of code and then try and access that state in the next line of code it will not have updated.
 // So I created a newTask object and then called setParams and setTasksArray using that object.
  const addTaskValues =
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    const newTask = {
      id: params.newTask.id + 1,
      type: e.target[0].value,
      patientName: e.target[1].value,
      effectiveDate: e.target[2].value
    };
    setParams({ newTask });
    setTasksArray({ tasks: [...tasksArray.tasks, newTask] })
    };

    const deleteTask = (taskToDelete: Task) => {
      setTasksArray({ tasks: [...tasksArray.tasks.filter(task => task.id !== taskToDelete.id)] })

    };

  return (
    <div id="main-container">
      <h1>Tasks App</h1>
        <NewTaskForm
          addTaskValues={addTaskValues}
        />

        <TasksList tasks={tasksArray.tasks} deleteTask={deleteTask} />
    </div>
  );
};
