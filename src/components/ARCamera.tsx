import { useState, useRef, useEffect } from "react";

interface ARCameraProps {
  onCardDetected: (cardData: any) => void;
  onClose: () => void;
}

const ARCamera = ({ onCardDetected, onClose }: ARCameraProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [detectedCard, setDetectedCard] = useState<string | null>(null);

  // Sample card data for simulation
  const cardDatabase = {
    "historic-card-1": {
      id: "hc001",
      name: "Proklamasi Kemerdekaan",
      era: "Kemerdekaan",
      difficulty: "Mudah",
      description:
        "Kartu tentang proklamasi kemerdekaan Indonesia 17 Agustus 1945",
    },
    "historic-card-2": {
      id: "hc002",
      name: "Kerajaan Majapahit",
      era: "Hindu-Buddha",
      difficulty: "Sedang",
      description: "Kartu tentang kerajaan besar Majapahit di Jawa Timur",
    },
    "historic-card-3": {
      id: "hc003",
      name: "Perang Diponegoro",
      era: "Kolonial",
      difficulty: "Sulit",
      description: "Kartu tentang perang Pangeran Diponegoro melawan Belanda",
    },
  };

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      // Check if getUserMedia is supported
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("Camera not supported in this browser");
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: { ideal: "environment" }, // Prefer back camera, but allow front
          width: { ideal: 1280, min: 640 },
          height: { ideal: 720, min: 480 },
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasPermission(true);
        setIsScanning(true);

        // Simulate card detection after 3 seconds
        setTimeout(() => {
          simulateCardDetection();
        }, 3000);
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
      setHasPermission(false);

      // More specific error handling
      if (error.name === "NotAllowedError") {
        // User denied permission
        console.log("Camera permission denied by user");
      } else if (error.name === "NotFoundError") {
        // No camera found
        console.log("No camera device found");
      } else if (error.name === "NotSupportedError") {
        // Camera not supported
        console.log("Camera not supported in this browser");
      }
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const simulateCardDetection = () => {
    // Simulate random card detection
    const cardKeys = Object.keys(cardDatabase);
    const randomCard = cardKeys[Math.floor(Math.random() * cardKeys.length)];
    const cardData = cardDatabase[randomCard];

    setDetectedCard(cardData.name);
    setIsScanning(false);

    // Show detection for 2 seconds then call onCardDetected
    setTimeout(() => {
      onCardDetected(cardData);
    }, 2000);
  };

  const handleRetry = () => {
    setDetectedCard(null);
    setIsScanning(true);
    setTimeout(() => {
      simulateCardDetection();
    }, 3000);
  };

  if (hasPermission === false) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8 max-w-md mx-4 text-center">
          <div className="text-6xl mb-4">📷</div>
          <h3 className="font-quicksand text-xl font-bold text-gray-800 mb-4">
            Tidak Dapat Mengakses Kamera
          </h3>
          <p className="font-quicksand text-gray-600 mb-6">
            Pastikan browser memiliki izin akses kamera dan tidak sedang
            digunakan oleh aplikasi lain.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="font-quicksand text-yellow-800 text-sm">
              💡 Tips: Coba refresh halaman atau gunakan simulasi AR di bawah
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={startCamera}
              className="px-4 py-2 bg-historic-brown text-white rounded-lg font-quicksand hover:bg-historic-brown-dark"
            >
              Coba Lagi
            </button>
            <button
              onClick={() => {
                // Simulate card detection without camera
                setTimeout(() => {
                  simulateCardDetection();
                }, 1000);
              }}
              className="px-4 py-2 bg-historic-yellow text-historic-brown-dark rounded-lg font-quicksand hover:bg-historic-yellow-light"
            >
              🎲 Simulasi AR (Demo)
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg font-quicksand hover:bg-gray-50"
            >
              Batal
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black text-white">
        <h2 className="font-quicksand text-lg font-bold">📱 AR Scan Kartu</h2>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-300 text-2xl"
        >
          ✕
        </button>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Scanning Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Scanning Frame */}
          <div className="relative w-80 h-52 border-4 border-historic-yellow rounded-lg">
            {isScanning && (
              <div className="absolute inset-0 border-4 border-historic-yellow rounded-lg animate-pulse">
                <div className="absolute top-0 left-0 w-6 h-6 border-l-4 border-t-4 border-white"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-r-4 border-t-4 border-white"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-l-4 border-b-4 border-white"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-r-4 border-b-4 border-white"></div>
              </div>
            )}

            {/* Detection Success */}
            {detectedCard && (
              <div className="absolute inset-0 bg-green-500 bg-opacity-80 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl mb-2">✅</div>
                  <div className="font-quicksand font-bold text-lg">
                    Kartu Terdeteksi!
                  </div>
                  <div className="font-quicksand">{detectedCard}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-20 left-0 right-0 text-center text-white px-4">
          {isScanning ? (
            <div className="bg-black bg-opacity-50 rounded-lg p-4">
              <div className="font-quicksand text-lg mb-2">
                🔍 Mencari kartu Historic Block...
              </div>
              <div className="font-quicksand text-sm opacity-80">
                Arahkan kamera ke kartu Historic Block Anda
              </div>
            </div>
          ) : detectedCard ? (
            <div className="bg-green-600 bg-opacity-90 rounded-lg p-4">
              <div className="font-quicksand text-lg">
                🎉 Kartu berhasil dipindai!
              </div>
            </div>
          ) : (
            <div className="bg-black bg-opacity-50 rounded-lg p-4">
              <div className="font-quicksand text-lg mb-2">
                📋 Siap untuk memindai
              </div>
              <button
                onClick={handleRetry}
                className="bg-historic-brown text-white px-6 py-2 rounded-lg font-quicksand hover:bg-historic-brown-dark mt-2"
              >
                Mulai Scan
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ARCamera;
