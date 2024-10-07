"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

interface NavigatorWithStandalone extends Navigator {
  standalone?: boolean;
}

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener(
      "beforeinstallprompt",
      handleBeforeInstallPrompt as EventListener,
    );

    // Check if the app is already in standalone mode
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;

    // Check if it's iOS and not in standalone mode
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    const isInStandaloneMode =
      "standalone" in (window.navigator as NavigatorWithStandalone) &&
      (window.navigator as NavigatorWithStandalone).standalone === true;

    setIsInstallable(!isStandalone && !(isIOS && isInStandaloneMode));

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener,
      );
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
        setIsInstallable(false);
      } else {
        console.log("User dismissed the install prompt");
      }
    } catch (error) {
      console.error("Error during installation:", error);
    } finally {
      setDeferredPrompt(null);
    }
  };

  if (!isInstallable) {
    return null; // Don't show anything if the app is not installable
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-16">
      <CardHeader>
        <CardTitle>Install Our App</CardTitle>
        <CardDescription>
          Get quick access and a better experience
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleInstallClick}
          disabled={!deferredPrompt}
          className="w-full"
        >
          {deferredPrompt ? "Install App" : "Installation not available"}
        </Button>
      </CardContent>
    </Card>
  );
}
