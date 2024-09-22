"use client"
// components/Reels.js
import { useState } from 'react';

const reelsData = [
  { thumbnail: '/reel1.jpg', video: '/reel1.mp4' },
  { thumbnail: '/reel2.jpg', video: '/reel2.mp4' },
  { thumbnail: '/reel3.jpg', video: '/reel3.mp4' },
];

export default function Reels() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section className="bg-blushPink py-12 text-center">
      <h2 className="text-3xl font-bold mb-8">Check out our Latest Reels</h2>
      <div className="flex justify-center gap-8">
        {reelsData.map((reel, index) => (
          <div
            key={index}
            className="w-24 h-24 rounded-full overflow-hidden border-4 border-emeraldGreen cursor-pointer"
            onClick={() => setSelectedVideo(reel.video)}
          >
            <img src={reel.thumbnail} alt={`Reel ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {selectedVideo && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedVideo(null)}
        >
          <video controls src={selectedVideo} autoPlay className="max-w-3xl max-h-full" />
        </div>
      )}
    </section>
  );
}
