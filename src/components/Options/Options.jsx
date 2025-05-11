import css from './Options.module.css';

export default function Options({
  updateFeedback,
  resetFeedback,
  hasFeedback,
}) {
  return (
    <div className={css.options}>
      <button className={css.button} onClick={() => updateFeedback('good')}>
        Good
      </button>
      <button className={css.button} onClick={() => updateFeedback('neutral')}>
        Neutral
      </button>
      <button className={css.button} onClick={() => updateFeedback('bad')}>
        Bad
      </button>
      {hasFeedback && (
        <button className={css.button} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
