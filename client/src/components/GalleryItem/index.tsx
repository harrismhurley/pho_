import './index.css';

interface GalleryItemProps {
    aspect: 'square' | 'portrait' | 'landscape';
}

const GalleryItem: React.FC<GalleryItemProps> = ({ aspect }) => {
    return (
        <div className={`gallery_item ${aspect}`}>
            <div className="placeholder">
                {aspect.charAt(0).toUpperCase() + aspect.slice(1)}
            </div>
        </div>
    )
}

export default GalleryItem