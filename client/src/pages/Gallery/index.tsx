import './index.css';
import GalleryItem from '../../components/GalleryItem';

const Gallery: React.FC = () => {
  // placeholder photos 
  const images = [
    { id: 1, aspect: 'square' },
    { id: 2, aspect: 'portrait' },
    { id: 3, aspect: 'landscape' },
    { id: 4, aspect: 'square' },
    { id: 5, aspect: 'landscape' },
    { id: 6, aspect: 'portrait' },
    { id: 7, aspect: 'portrait' },
    { id: 8, aspect: 'landscape' },
    { id: 9, aspect: 'square' },
    { id: 10, aspect: 'square' },
    { id: 11, aspect: 'portrait' },
    { id: 12, aspect: 'landscape' },
    { id: 13, aspect: 'landscape' },
    { id: 14, aspect: 'portrait' },
    { id: 15, aspect: 'portrait' },
    { id: 16, aspect: 'landscape' },
    { id: 17, aspect: 'square' },
    { id: 18, aspect: 'square' },
    { id: 19, aspect: 'portrait' },
  ];


  return (
    <div className="gallery_container">
      <h1>Gallery</h1>
      <br />
      <div className="gallery_grid">
        {images.map((image) => (
          <GalleryItem key={image.id} aspect={image.aspect as 'square' | 'portrait' | 'landscape'} />
        ))}
      </div>
    </div>
  )
}


export default Gallery