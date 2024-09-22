// components/Hero.js
export default function Hero() {
    return (
      <section className="bg-deepPurple text-gold h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-5xl font-bold">Welcome to Sweet Delights Bakery</h1>
          <p className="mt-4">Handcrafted premium cakes for your special occasions.</p>
          <a
            href="#cakes"
            className="mt-6 inline-block bg-gold text-deepPurple py-3 px-6 rounded-lg hover:bg-opacity-90"
          >
            Explore Our Cakes
          </a>
        </div>
      </section>
    );
  }
  