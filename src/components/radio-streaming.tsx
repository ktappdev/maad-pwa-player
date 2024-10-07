"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"
import Link from "next/link"

interface CarouselCardProps {
  imageSrc: string
  title: string
  subtitle: string
}

const CarouselCard: React.FC<CarouselCardProps> = ({ imageSrc, title, subtitle }) => (
  <div className="relative w-full aspect-video">
    <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-lg" />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
      <h2 className="text-white text-xl font-bold mb-1">{title}</h2>
      <p className="text-gray-200 text-sm">{subtitle}</p>
    </div>
  </div>
)

export function RadioStreaming() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const adjustVolume = (newVolume: number[]) => {
    if (audioRef.current) {
      const volumeValue = newVolume[0]
      audioRef.current.volume = volumeValue
      setVolume(volumeValue)
      setIsMuted(volumeValue === 0)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = volume
        setIsMuted(false)
      } else {
        audioRef.current.volume = 0
        setIsMuted(true)
      }
    }
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const carouselCards: CarouselCardProps[] = [
    {
      imageSrc: "/img/01.jpeg",
      title: "Holy Ghost Power and Life Show",
      subtitle: "Hosted by DJ Skatta Weekdays 5am to 7am",
    },
    {
      imageSrc: "/img/02.jpeg",
      title: "The Meltdown",
      subtitle: "Hosted By Annmarie - Weekdays 6pm to 7pm",
    },
    {
      imageSrc: "/img/03.jpeg",
      title: "The Rush Hour Drive",
      subtitle: "Hosted by N.E.B592 Weekdays 3pm to 6pm",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <Card className="w-full max-w-md mx-auto overflow-hidden">
        <CardContent className="p-6">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Radio Streaming" width={120} height={120} className="rounded-full" />
          </div>

          <div className="mb-6 overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {carouselCards.map((card, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <CarouselCard {...card} />
                </div>
              ))}
            </div>
          </div>

          <audio ref={audioRef} src="https://stream.lugetech.com/stream" />

          <div className="flex items-center justify-between mb-4">
            <Button variant="outline" size="icon" onClick={togglePlayPause} className="w-12 h-12 rounded-full">
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
            </Button>
            <div className="flex items-center space-x-2 flex-1 mx-4">
              <Button variant="outline" size="icon" onClick={toggleMute}>
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </Button>
              <Slider
                value={[isMuted ? 0 : volume]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={adjustVolume}
                className="flex-1"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-400 mb-2">Now Playing: Live Stream</p>
            <Link href="https://maad97.com" variant="link" className="text-primary hover:text-primary-foreground transition-colors">
              Go to main site
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
