import Certification from '../models/Certification.js';

// @desc    Get all certifications
// @route   GET /api/certifications
// @access  Public
export const getCertifications = async (req, res, next) => {
  try {
    const certifications = await Certification.find({}).sort({ createdAt: -1 });
    res.json(certifications);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new certification
// @route   POST /api/certifications
// @access  Public
export const createCertification = async (req, res, next) => {
  try {
    const { title, issuer, issueDate, credentialLink, imageUrl } = req.body;

    const certification = await Certification.create({
      title,
      issuer,
      issueDate,
      credentialLink,
      imageUrl,
    });

    res.status(201).json(certification);
  } catch (error) {
    res.status(400);
    next(error);
  }
};
