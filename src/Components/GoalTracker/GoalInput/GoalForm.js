import './GoalForm.css';
import { useState } from 'react';
function GoalForm(props) {
  const [enteredGoal, setEnteredGoal] = useState('');
  function goalChangeHandler(e) {
    setEnteredGoal(e.target.value);
  }
  function goalSubmitHandler(e) {
    e.preventDefault();
    let enteredValue = { id: Math.random().toString(), txt: enteredGoal };
    if (!enteredGoal.length) {
      return;
    }
    props.onAddingGoal(enteredValue);
    setEnteredGoal('');
  }
  return (
    <form action="" onSubmit={goalSubmitHandler}>
      <div className="form-control">
        <label>Create Goal</label>
        <input type="text" value={enteredGoal} className='form-control input' onChange={goalChangeHandler} />
      </div>
      <button type="submit" className='form-control input:focus'>Add Goal</button>
    </form>
  );
}
export default GoalForm;
