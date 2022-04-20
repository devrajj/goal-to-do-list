import './App.css';
import GoalForm from './Components/GoalTracker/GoalInput/GoalForm';
import GoalList from './Components/GoalTracker/GoalList/GoalList';
import { useState } from 'react';
function App() {
  const [goalList, setGoalList] = useState([
    {
      id: 'ab',
      txt: 'Studied For Interview'
    },
    {
      id: 'lm',
      txt: 'Got a very good company'
    },
    {
      id: 'no',
      txt: 'Done Starting Reading React'
    }
  ]);
  function addGoalToList(addedGoal) {
    setGoalList((previous) => {
      return previous.concat([addedGoal]);
    })
  }
  let content = <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>;
  if (goalList.length) {
    content = <GoalList goalList={goalList} onDelete={deletingItemId} />
  }
  function deletingItemId(deleteId) {
    setGoalList((prev) => {
      return prev.filter(result => result.id !== deleteId);
    });
  }
  return (
    <div>
      <section id="goal-form">
        <GoalForm onAddingGoal={addGoalToList} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
