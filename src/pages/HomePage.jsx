import { useState } from 'react';
import axios from 'axios';
import ImageUploadForm from '../components/ImageUploadForm';
import ImagePreview from '../components/ImagePreview';
import SubmitButton from '../components/SubmitButton';
import ResetButton from '../components/ResetButton';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import DescriptionDisplay from '../components/DescriptionDisplay';

function HomePage() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/') && file.size <= 5 * 1024 * 1024) {
      setImage(file);
      setError('');
    } else {
      setError(
        file.size > 5 * 1024 * 1024
          ? 'Image size must be under 5MB.'
          : 'Please select a valid image file (PNG, JPEG).'
      );
      setImage(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError('No image selected.');
      return;
    }

    setLoading(true);
    setError('');
    setDescription('');

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:8000/api/upload/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setDescription(response.data.description);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setImage(null);
    setDescription('');
    setError('');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="card bg-base-100 shadow-xl max-w-md mx-auto">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-center">Image Description App</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <ImageUploadForm onImageChange={handleImageChange} />
            <ImagePreview image={image} />
            <ErrorMessage error={error} />
            <div className="flex flex-col space-y-2">
              <SubmitButton loading={loading} disabled={!image} />
              <ResetButton onReset={handleReset} />
            </div>
          </form>
          <LoadingSpinner loading={loading} />
          <DescriptionDisplay description={description} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;