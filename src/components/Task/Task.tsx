import { useState } from 'react';
import styles from './task.module.css';

interface TaskProps {
  taskText: string;
}

function Task({ taskText }: TaskProps) {
  const [completed, setCompleted] = useState(false);
  const simpleTaskReward = import.meta.env.VITE_SIMPLE_TASK_REWARD || 0; // Default to 0 if not set

  const handleComplete = () => {
    if (!completed) {
      console.log("task text is: " + taskText)
      console.log("Reward Amount is: " + simpleTaskReward);
      setCompleted(true);taskText
    }
  };

  return (
    <div className={styles.taskCard}>
      <p className={styles.taskText}>taskText</p>
      {!completed ? (
        <button className={styles.completeButton} onClick={handleComplete}>
          Complete
        </button>
      ) : (
        <button className={styles.completedButton} disabled>
          Completed
        </button>
      )}
    </div>
  );
}

export default Task;
