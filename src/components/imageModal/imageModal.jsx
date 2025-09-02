import Modal from 'react-modal';
import css from './imageModal.module.css';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    padding: 32,
  },
};

const ImageModal = ({ modalIsOpen, closeModal, modal }) => {
  if (!modal) return null;

  const { alt_description, urls, user, likes, description } = modal;

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles}>
      <div className={css.imageWrapper}>
        <img className={css.image} src={urls?.regular} alt={alt_description ?? 'Image'} />
        <div className={css.info}>
          <h3>{user?.name}</h3>
          {description && <p>{description}</p>}
          <p>Likes: {likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;