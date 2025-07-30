import React, { useState } from "react";

const apiUrl = "https://siteiq-backend.onrender.com/upload/";
const previewBaseUrl = "https://siteiq-backend.onrender.com/previews/";

function Index() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch(apiUrl, { method: "POST", body: formData });
    const data = await res.json();
    setPreview(previewBaseUrl + data.filename);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">SiteIQ - Video Intelligence Console</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      <button onClick={handleUpload} className="bg-blue-600 px-4 py-2 rounded">Upload Video</button>
      {preview && (
        <div className="mt-6">
          <video src={preview} controls className="w-full max-w-4xl mx-auto" />
        </div>
      )}
    </div>
  );
}

export default Index;