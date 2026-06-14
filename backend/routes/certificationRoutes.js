import express from 'express';
import { getCertifications, createCertification } from '../controllers/certificationController.js';

const router = express.Router();

router.route('/')
  .get(getCertifications)
  .post(createCertification);

export default router;
