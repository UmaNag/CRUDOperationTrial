import React, { FunctionComponent } from 'react';

import { Task } from '../models/task';
import { TaskListItem } from './TaskListItem';

interface Props {
  tasks: Task[];
  deleteTask: (task: Task) => void;
}

// export const TasksList: FunctionComponent<Props> = ({ tasks, onDelete }) => (
  export const TasksList: FunctionComponent<Props> = ({ tasks, deleteTask}) => (

  <ul>
    {tasks.map(task => (
      <TaskListItem task={task} onDelete={deleteTask} />
    ))}
  </ul>
);