'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // Check if the app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
      setIsInstalled(true)
    } else {
      console.log('User dismissed the install prompt')
    }
    setDeferredPrompt(null)
  }

  if (isInstalled) {
    return null // Don't show anything if the app is already installed
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-16">
      <CardHeader>
        <CardTitle>Install Our App</CardTitle>
        <CardDescription>Get quick access and a better experience</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleInstallClick}
          disabled={!deferredPrompt}
          className="w-full"
        >
          {deferredPrompt ? 'Install App' : 'Installation not available'}
        </Button>
      </CardContent>
    </Card>
  )
}
