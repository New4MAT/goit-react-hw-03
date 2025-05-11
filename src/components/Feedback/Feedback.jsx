import css from './Feedback.module.css';

export default function Feedback({ feedback, total, positive }) {
  return (
    <div className={css.feedback}>
      <ul className={css.list}>
        <li className={css.item}>Good: {feedback.good}</li>
        <li className={css.item}>Neutral: {feedback.neutral}</li>
        <li className={css.item}>Bad: {feedback.bad}</li>
        <li className={css.item}>Total: {total}</li>
        <li className={css.item}>Positive: {positive}%</li>
      </ul>
    </div>
  );
}
