import Task from "../models/Task";

export const renderIndex = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", {
    tasks,
  });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();
    res.redirect("/"); //**guardo y redirecciono a la pagina principal '/' */
  } catch (err) {
    console.log(err);
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const renderTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

export const updateDoneProp = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  console.log(task);
  res.redirect("/");
};
