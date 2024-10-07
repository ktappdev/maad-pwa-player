import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const SafariInstallGuide: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);

  const toggleGuide = () => setShowGuide(!showGuide);

  return (
    <div className="space-y-4">
      <Button
        onClick={toggleGuide}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        {showGuide ? "Hide Installation Steps" : "Show Installation Steps"}
      </Button>
      {showGuide && (
        <div className="mt-4 bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold mb-2 text-purple-400">
            Steps to install on iOS and Mac using Safari:
          </h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            <li>Tap the Share button in Safari</li>
            <li>Scroll down and tap &ldquo;Add to Home Screen&rdquo;</li>
            <li>Enter a name for the app (optional)</li>
            <li>Tap &ldquo;Add&rdquo; in the top right corner</li>
          </ol>
          <p className="mt-4 text-gray-400 italic">
            The app icon will appear on your home screen.
          </p>
        </div>
      )}
    </div>
  );
};

export default SafariInstallGuide;
