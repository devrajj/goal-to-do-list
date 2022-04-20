import React from 'react';
import './GoalItem.css';
const CourseGoalItem = props => {
  function onDeletingGoal() {
    props.onDelete(props.id);
  }
  return (
    <li className="goal-item" onClick={onDeletingGoal}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
