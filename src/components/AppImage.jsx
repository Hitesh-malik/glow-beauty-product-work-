import React, { useState } from "react";

function Image({
  src,
  alt = "Image Name",
  className = "",
  fallbackSrc = "/assets/images/beauty_placeholder.svg",
  ...props
}) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
      setIsLoading(false);
    }
  };

  const handleLoad = () => {
    setHasError(false);
    setIsLoading(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div
          className={`absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 animate-pulse rounded-lg ${className}`}
        >
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-8 h-8 border-4 border-pink-300 border-t-pink-500 rounded-full animate-spin mx-auto mb-2"></div>
              <div className="text-pink-500 text-xs">Loading beauty...</div>
            </div>
          </div>
        </div>
      )}
      <img
        src={imgSrc}
        alt={alt}
        className={`${className} ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        onLoadStart={handleLoadStart}
        {...props}
      />
    </div>
  );
}

export default Image;
