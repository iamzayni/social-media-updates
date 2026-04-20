const cloudinary = require('cloudinary').v2;

const cloudinaryUrl = process.env.CLOUDINARY_URL;
const cloudName = process.env.CLOUD_NAME;
const apiKey = process.env.API_KEY || process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.API_SECRET || process.env.CLOUDINARY_API_SECRET;

if (cloudinaryUrl) {
  cloudinary.config({ cloudinary_url: cloudinaryUrl });
} else {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret
  });
}

const hasPlaceholder = (value = '') =>
  value.includes('<') ||
  value.includes('>') ||
  value.includes('your_api_key') ||
  value.includes('your_api_secret') ||
  value.includes('your_cloudinary_name');

const urlConfigured = Boolean(cloudinaryUrl) && !hasPlaceholder(cloudinaryUrl);
const keyConfigured =
  Boolean(cloudName) &&
  Boolean(apiKey) &&
  Boolean(apiSecret) &&
  !hasPlaceholder(cloudName) &&
  !hasPlaceholder(apiKey) &&
  !hasPlaceholder(apiSecret);

cloudinary.isConfigured =
  urlConfigured || keyConfigured;

module.exports = cloudinary;