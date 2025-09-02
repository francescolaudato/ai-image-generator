import { useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import defaultImage from "../assets/default_image.jpeg";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState("/");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  const handleGenerateImage = async () => {
    if (!inputRef.current.value) return;

    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: inputRef.current.value }),
      });

      const data = await response.json();
      setImageUrl("data:image/png;base64," + data.image);
    } catch (error) {
      console.error("Error generating image:", error);
      setImageUrl("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col justify-between">
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12">

        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg opacity-70 animate-pulse"></div>
          <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 p-6 rounded-full shadow-2xl">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>

        <div className="text-center mb-12 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            AI Image{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Turn your ideas into amazing artwork with the power of AI
          </p>
        </div>

        <div className="mb-8">
          <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-3 border border-white/20 shadow-2xl w-80 h-80 flex items-center justify-center overflow-hidden">
            {loading ? (
              <p className="text-white">Generating image...</p>
            ) : (
              <img
                src={imageUrl === "/" ? defaultImage : imageUrl}
                alt="Generated"
                className="w-full h-full object-cover rounded-2xl"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl -z-10"></div>
          </div>
        </div>

        <div className="w-full max-w-2xl mb-6 flex gap-3">
          <input
            type="text"
            ref={inputRef}
            placeholder="Describe your image..."
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
          <button
            onClick={handleGenerateImage}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      </div>

      <footer className="text-center py-4 text-gray-400 text-sm">
        Designed by <a href="https://github.com/francescolaudato" target="_blank" className="underline">Francesco Laudato</a>
      </footer>
    </div>
  );
};

export default ImageGenerator;
