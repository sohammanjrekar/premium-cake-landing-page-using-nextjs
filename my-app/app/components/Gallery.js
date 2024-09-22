// components/Gallery.js
const galleryImages = [
    { src: '/cake1.jpg', alt: 'Chocolate Delight' },
    { src: '/cake2.jpg', alt: 'Red Velvet' },
    { src: '/cake3.jpg', alt: 'Fruit Paradise' },
  ];
  
  export default function Gallery() {
    return (
      <section id="gallery" className="bg-cream py-12 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Cake Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={image.src} alt={image.alt} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </section>
    );
  }
  