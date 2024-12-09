import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [loaded, setLoaded] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(false);
    }, 500); // Preloader stays for 500ms after the component mounts

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  if (!loaded) return null;

  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default Preloader;
