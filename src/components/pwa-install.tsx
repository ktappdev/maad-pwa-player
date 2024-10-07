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
import SafariInstallGuide from "./SafariInstallGuide";

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
  const [isSafari, setIsSafari] = useState<boolean>(false);

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

    // Check if it's Safari on iOS or Mac
    const isSafariOnApple =
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) &&
      (navigator.platform.indexOf("Mac") > -1 ||
        /iPad|iPhone|iPod/.test(navigator.userAgent));
    setIsSafari(isSafariOnApple);

    // Check if the app is already in standalone mode (installed)
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;
    if (isStandalone) {
      setIsInstallable(false);
    }

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
        setIsInstallable(false);
      }
    } catch (error) {
      console.error("Error during installation:", error);
    } finally {
      setDeferredPrompt(null);
    }
  };

  if (!isInstallable && !isSafari) {
    return null;
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-16 bg-gray-800 text-white border-gray-700 shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-purple-400">
          Install Our App
        </CardTitle>
        <CardDescription className="text-gray-400">
          {isSafari
            ? "Use Chrome to install our app or follow the steps below to install with Safari"
            : "Get quick access and a better experience"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isSafari ? (
          <SafariInstallGuide />
        ) : deferredPrompt ? (
          <Button
            onClick={handleInstallClick}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Install App
          </Button>
        ) : null}
      </CardContent>
    </Card>
  );
}
