import Project from '../models/Project.js';

// @desc    Get all projects (with optional technology filtering)
// @route   GET /api/projects
// @access  Public
export const getProjects = async (req, res, next) => {
  try {
    const { tech } = req.query;
    let query = {};
    
    if (tech) {
      // Find projects where the technologies array contains the specified tech (case-insensitive)
      query.technologies = { $regex: new RegExp(`^${tech}$`, 'i') };
    }

    const projects = await Project.find(query).sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new project
// @route   POST /api/projects
// @access  Public (In production, this should be protected, but for the portfolio request we keep it simple or document how to secure it)
export const createProject = async (req, res, next) => {
  try {
    const { title, description, technologies, githubLink, liveLink, imageUrl, featured, order } = req.body;

    const project = await Project.create({
      title,
      description,
      technologies,
      githubLink,
      liveLink,
      imageUrl,
      featured,
      order,
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(400);
    next(error);
  }
};
