import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const PhotoUploader = ({ onImageSelect }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
        onImageSelect(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {previewImage && (
        <img
          src={previewImage}
          alt="Preview"
          style={{ maxWidth: '100%', maxHeight: '200px' }}
        />
      )}
    </div>
  );
};

// Add PropTypes validation for onImageSelect
PhotoUploader.propTypes = {
  onImageSelect: PropTypes.func.isRequired,
};

export default PhotoUploader;
