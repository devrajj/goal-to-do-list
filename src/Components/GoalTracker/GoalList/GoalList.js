import './GoalList.css';
import GoalItem from './../GoalItem/GoalItem';
function GoalList(props) {
  return (
    <ul className="goal-list">
      {props.goalList.map(goal => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDelete}>{goal.txt}</GoalItem>
      ))}
    </ul>
  )
}
export default GoalList
