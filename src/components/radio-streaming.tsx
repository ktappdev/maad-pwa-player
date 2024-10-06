"use client"

import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Pause, Play, Volume2, VolumeX } from "lucide-react"

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

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <Card className="w-full max-w-md mx-auto overflow-hidden">
        <CardContent className="p-6">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Radio Streaming" width={120} height={120} className="rounded-full" />
          </div>

          <div className="mb-6 overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {["/img/01.jpeg", "/img/02.jpeg", "/img/03.jpeg"].map((src, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0">
                  <Image src={src} alt={`Advertisement ${index + 1}`} width={800} height={400} className="w-full h-auto" />
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
            <Button variant="link" className="text-primary hover:text-primary-foreground transition-colors">
              Go to main site
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}