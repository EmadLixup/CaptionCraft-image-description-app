import { useState } from 'react';

function ImageUploadForm({ onImageChange }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      onImageChange({ target: { files: [file] } });
    }
  };

  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Upload Image (or drag and drop)</span>
      </label>
      <div
        className={`border-2 border-dashed rounded-lg p-4 text-center ${
          isDragging ? 'border-primary bg-primary/10' : 'border-gray-300'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          accept="image/*"
          onChange={onImageChange}
          className="file-input file-input-bordered w-full"
          aria-label="Upload image"
        />
        <p className="text-sm text-gray-500 mt-2">
          {isDragging ? 'Drop the image here' : 'Or click to select an image'}
        </p>
      </div>
    </div>
  );
}

export default ImageUploadForm;