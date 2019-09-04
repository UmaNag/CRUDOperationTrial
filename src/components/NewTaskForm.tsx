import React from 'react';

interface IAddTaskValues {
  addTaskValues(event: React.FormEvent<HTMLFormElement>): void;

}
export const NewTaskForm: React.FunctionComponent<IAddTaskValues> = ({
   addTaskValues
  }) => {
    return (
      <form onSubmit={addTaskValues}>
        <p>
          <label>Type   </label>
          <input type="text" name="type"  placeholder="Type..." />
          </p>
        <p>
          <label>Name  </label>
          <input type="text" name="patientName" placeholder="Patient name..." />
          </p>
        <p>
          <label>Date  </label>
          <input type="text" name="Date" placeholder="Date..." />
        </p>

        <p><button type="submit">Add a task</button></p>
      </form>
    );
  };