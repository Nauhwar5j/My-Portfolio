import Contact from '../models/Contact.js';

// @desc    Submit contact form message
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully. Thank you for reaching out!',
      data: contact,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};
