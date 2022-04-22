const {getProjectData, getProjectById, createProject, updateProject, deleteProject} = require("../controllers/projectController");
const router = require("express").Router();

router.get('/projects', getProjectData);
router.get('/projects/:id', getProjectById);
router.post('/projects', createProject);
router.put('/projects/:id', updateProject);
router.delete('/projects/:id', deleteProject);

module.exports = router;