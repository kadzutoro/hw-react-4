import css from './imageCard.module.css';

const ImageCard = ({ image, openModal }) => {
  const { alt_description, urls, user, likes, description, color } = image;

  return (
    <div className={css.card} style={{ backgroundColor: color || '#f0f0f0' }}>
      <img
        onClick={() => openModal(image)}
        src={urls?.small}
        alt={alt_description ?? 'Unrecognized image'}
      />
      <div className={css.info}>
        <p>{user?.name}</p>
        <p>Likes: {likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;