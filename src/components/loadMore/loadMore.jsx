import css from './loadMore.module.css';

const LoadMore = ({ handleLoadMore }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;