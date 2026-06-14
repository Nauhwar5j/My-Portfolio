import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';
import Certification from './models/Certification.js';

dotenv.config();

const projects = [
  {
    title: 'DBMS Project',
    description: 'A database management system project focusing on relational model concepts, database normalization, efficient SQL querying, and schema implementation to solve data organization problems.',
    technologies: ['SQL', 'DBMS', 'MySQL', 'Database Design'],
    githubLink: 'https://github.com/Nauhwar5j/DBMS-PROJECT',
    liveLink: '',
    imageUrl: '/dbms_1.png',
    images: ['/dbms_1.png', '/dbms_2.png', '/dbms_3.png', '/dbms_4.png', '/dbms_5.png', '/dbms_6.png', '/dbms_7.png', '/dbms_8.png'],
    featured: true,
    order: 1,
  },
  {
    title: 'Data Engineering Project',
    description: 'A data engineering platform that implements ETL pipelines, processes dataset structures, and manages data workflows using Python scripting and data transformation tools.',
    technologies: ['Python', 'Data Engineering', 'ETL', 'Pandas'],
    githubLink: 'https://github.com/Nauhwar5j/Data_engineeringProject',
    liveLink: '',
    imageUrl: '/weather_1.png',
    images: ['/weather_1.png', '/weather_2.png', '/weather_3.png'],
    featured: true,
    order: 2,
  }
];

const certifications = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    issueDate: 'May 19, 2026',
    credentialLink: 'https://verify.certiport.com', // Credential ID: yVXm-Dw8X
    imageUrl: '/azure_cert.jpg',
  }
];

const seedData = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio');
    console.log(`Connected to database for seeding: ${conn.connection.host}`);

    // Clear existing data
    await Project.deleteMany({});
    console.log('Cleared Project collection');

    await Certification.deleteMany({});
    console.log('Cleared Certification collection');

    // Insert new data
    await Project.insertMany(projects);
    console.log('Seeded projects successfully');

    await Certification.insertMany(certifications);
    console.log('Seeded certifications successfully');

    console.log('Database Seeding Complete!');
    process.exit(0);
  } catch (error) {
    console.error(`Error seeding data: ${error.message}`);
    process.exit(1);
  }
};

seedData();
