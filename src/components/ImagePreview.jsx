function ImagePreview({ image }) {
  if (!image) return null;
  return (
    <div className="mt-4">
      <img
        src={URL.createObjectURL(image)}
        alt="Preview"
        className="w-full h-auto rounded-lg shadow-md"
      />
    </div>
  );
}

export default ImagePreview;