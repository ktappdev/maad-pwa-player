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
    console.log("PWAInstaller component mounted");

    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      console.log("beforeinstallprompt event fired");
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
    console.log("Is app in standalone mode:", isStandalone);

    // Check if it's iOS and not in standalone mode
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    console.log("Is iOS device:", isIOS);

    const isInStandaloneMode =
      "standalone" in (window.navigator as NavigatorWithStandalone) &&
      (window.navigator as NavigatorWithStandalone).standalone === true;
    console.log("Is in standalone mode (iOS):", isInStandaloneMode);

    const shouldShowInstaller = !isStandalone && !(isIOS && isInStandaloneMode);
    console.log("Should show installer:", shouldShowInstaller);

    setIsInstallable(shouldShowInstaller);

    // Log PWA-related details
    console.log("Navigator:", navigator.userAgent);
    console.log("Window object:", window);
    if ("serviceWorker" in navigator) {
      console.log("Service Worker is supported");
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        console.log("Service Worker registrations:", registrations);
      });
    } else {
      console.log("Service Worker is not supported");
    }

    // Check for manifest
    const manifestLink = document.querySelector('link[rel="manifest"]');
    console.log("Manifest link found:", !!manifestLink);

    return () => {
      console.log("PWAInstaller component unmounting");
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt as EventListener,
      );
    };
  }, []);

  const handleInstallClick = async () => {
    console.log("Install button clicked");
    if (!deferredPrompt) {
      console.log("No deferred prompt available");
      return;
    }

    try {
      console.log("Prompting for installation");
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

  console.log(
    "Rendering PWAInstaller. isInstallable:",
    isInstallable,
    "deferredPrompt:",
    !!deferredPrompt,
  );

  if (!isInstallable) {
    console.log("App is not installable, returning null");
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
