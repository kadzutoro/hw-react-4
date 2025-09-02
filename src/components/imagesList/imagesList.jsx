import ImageCard from "../imageCard/imageCard";
import css from './imagesList.module.css';

const imagesList = ({ images, openModal }) => {
    return (
        <ul className={css.list}>
            {images.map((image => (
                <li className="{css.item}" key={image.id}>
                    <ImageCard image={image} openModal={openModal}/>
                </li>
            )))}
        </ul>
    )
}

export default imagesList;