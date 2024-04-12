const catchError = require('../utils/catchError');
const ToDo = require('../models/ToDo');

const getAll = catchError(async (req, res) => {
  const { id } = req.user
  const results = await ToDo.findAll({ where: { userId: id } });
  return res.json(results);
});

const create = catchError(async (req, res) => {
  const user = req.user
  console.log(user.id);

  // const body = {
  //   task: req.body.task,
  //   isCompleted: req.body.isCompleted,
  //   userId: user.id
  // }
  const body = { ...req.body, userId: user.id }
  const result = await ToDo.create(body);
  return res.status(201).json(result);
});

const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await ToDo.findByPk(id);
  if (!result) return res.sendStatus(404);
  return res.json(result);
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await ToDo.destroy({ where: { id } });
  if (!result) return res.sendStatus(404);
  return res.sendStatus(204);
});

const update = catchError(async (req, res) => {
  const { id } = req.params;
  delete req.body.userId
  const result = await ToDo.update(
    req.body,
    { where: { id }, returning: true }
  );
  if (result[0] === 0) return res.sendStatus(404);
  return res.json(result[1][0]);
});

module.exports = {
  getAll,
  create,
  getOne,
  remove,
  update
}