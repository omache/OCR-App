import React, { useRef, useState } from "react";
import { FiUpload } from "react-icons/fi"; // Assuming you have the react-icons library installed
import Layout from "@/components/Layout";
import Head from "next/head";

export default function Home() {
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [convertedText, setConvertedText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const launchCamera = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          const video = document.createElement("video");
          video.srcObject = stream;
          video.play();
          document.body.appendChild(video);
        })
        .catch((error) => {
          console.error("Error accessing camera:", error);
        });
    } else {
      console.error("Camera not supported");
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const convertToText = () => {
    if (selectedImage) {
      setIsLoading(true);
      // Simulating conversion delay
      setTimeout(() => {
        // Perform text conversion logic here
        // Replace the following line with your actual conversion code
        setConvertedText(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        );
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleCopyText = () => {
    const textArea = document.createElement("textarea");
    textArea.value = convertedText;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
  };

  const handleSaveText = () => {
    const element = document.createElement("a");
    const file = new Blob([convertedText], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "converted_text.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <Head>
        <title>Image Capture and Text Conversion</title>
        <meta name="description" content="Capture image and convert to text" />
      </Head>
      <main className="flex items-center justify-center w-full min-h-screen -mt-16">
        <Layout>
          <div className="w-3/4 mx-auto -mt-8 -pt-8">
            <h1 className={`"text-3xl text-blue-500 text-center mb-4"`}>
              Capture or Upload Image
            </h1>
            <p className="text-sm text-center mb-4">
              Capture an image using your device's camera or upload an image
              file to convert it to text.
            </p>
            <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-400 rounded-md cursor-pointer mb-4">
              <div className="text-4xl text-gray-400">
                <FiUpload />
              </div>
              <div>Drag and drop file here or click to upload</div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-2"
                onClick={launchCamera}
              >
                Capture Image
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".png,.jpeg,.jpg"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
            {selectedImage && (
              <div className="flex justify-center mb-4">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-h-60 mb-4"
                />
              </div>
            )}
            <div className="flex justify-center">
              <button
                className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-6 rounded"
                onClick={convertToText}
                disabled={!selectedImage || isLoading}
              >
                {isLoading ? "Converting..." : "Convert"}
              </button>
            </div>
            {isLoading && (
              <div className="flex justify-center mt-4">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
              </div>
            )}
            <textarea
              placeholder="If the image is not compatible, please paste your text here."
              className="w-full h-32 mt-4 p-2 bg-gray-100 border border-gray-300 rounded"
              value={convertedText}
              readOnly
            ></textarea>
            <div className="flex justify-center mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                onClick={handleCopyText}
                disabled={!convertedText}
              >
                Copy Text
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ml-4"
                onClick={handleSaveText}
                disabled={!convertedText}
              >
                Save Text
              </button>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
