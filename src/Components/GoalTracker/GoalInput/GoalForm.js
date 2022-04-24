import './GoalForm.css';
import { useState } from 'react';
function GoalForm(props) {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [isValid, setIsValid] = useState(true);
  function goalChangeHandler(e) {
    setEnteredGoal(e.target.value);
  }
  function goalSubmitHandler(e) {
    e.preventDefault();
    let enteredValue = { id: Math.random().toString(), txt: enteredGoal };
    if (!enteredGoal.length) {
      setIsValid(false);
      return;
    }
    props.onAddingGoal(enteredValue);
    setEnteredGoal('');
    setIsValid(true);
  }
  return (
    <form action="" onSubmit={goalSubmitHandler}>
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>CREATE A TO DO ACTIVITY</label>
        <input type="text" value={enteredGoal} onChange={goalChangeHandler} />
      </div>
      <button type="submit" className='form-control input:focus'>Add Todo</button>
    </form >
  );
}
export default GoalForm;
