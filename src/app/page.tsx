'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(1);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.plugins().autoplay.play();
    }
  }, [emblaApi]);


  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // const adjustVolume = (adjustment: number) => {
  //   if (audioRef.current) {
  //     const newVolume = Math.max(0, Math.min(1, volume + adjustment));
  //     audioRef.current.volume = newVolume;
  //     setVolume(newVolume);
  //   }
  // };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  return (
    <main className="flex min-h-screen flex-col items-center p-4 max-w-xl mx-auto">
      <div className="flex flex-col w-full h-screen">
        <div className="flex justify-center mb-8">
          <Image src="/logo.png" alt="Radio Streaming" width={100} height={100} />
        </div>

        <div className="mb-8 h-full">
          <div className="w-full max-w-xs mx-auto overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {['/img/01.jpeg', '/img/02.jpeg', '/img/03.jpeg'].map((src, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <div className="p-1">
                    <Image src={src} alt={`Publicidad ${index + 1}`} width={800} height={400} className="w-full h-auto" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <audio ref={audioRef} src="https://stream.lugetech.com/stream" />
        <div className="flex items-center justify-center w-full mb-8">
          <p className="text-center text-gray-300">
            Go to main sute
          </p>
        </div>

        <div className="flex items-center justify-center w-full mb-8">
          <button onClick={togglePlayPause} className="bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors">
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button>
          {/* <button onClick={() => adjustVolume(-0.1)} className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"> */}
          {/*   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
          {/*     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /> */}
          {/*   </svg> */}
          {/* </button> */}
          {/* <div className="bg-gray-800 text-white px-3 py-2 rounded-full shadow-lg"> */}
          {/*   {Math.round(volume * 100)}% */}
          {/* </div> */}
          {/* <button onClick={() => adjustVolume(0.1)} className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"> */}
          {/*   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> */}
          {/*     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /> */}
          {/*   </svg> */}
          {/* </button> */}
        </div>
      </div>
    </main>
  );
}
