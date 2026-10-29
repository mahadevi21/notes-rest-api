const notes = [
  {
    id: 1,
    title: "Learn React",
    content: "Practice components",
    category: "Learning",
  },
  { id: 2,
    title: "Learn Express", 
    content: "Build APIs", 
    category: "Backend"
  },
  {
    id: 3,
    title: "Learn MongoDB",
    content: "Practice queries",
    category: "Database",
  },
];

const getAllNotes = (req, res) => {
  res.json(notes);
};

const getNotesById = (req, res) => {
  const id = Number(req.params.id);

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  res.json(note);
};

const createNote = (req, res) => {
  const { title, content, category } = req.body;

  const newNote = {
    id: Date.now(),
    title,
    content,
    category,
  };
  notes.push(newNote);

  res.status(201).json(newNote);
};

const updateNote = (req, res) => {
  const id = Number(req.params.id);

  const note = notes.find((note) => note.id === id);

  if (!note) {
    return res.status(404).json({
      message: "Note not found",
    });
  }
  const { title, content, category } = req.body;

  note.title = title;
  note.content = content;
  note.category = category;

  res.json(note);
};

const deleteNote = (req, res) => {
  const id = Number(req.params.id);

  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex === -1) {
    return res.status(404).json({
      message: "Note not found",
    });
  }
  const deletedNotes = notes.splice(noteIndex, 1);

  res.json({
    message: "Note deleted successfully",
    note: deletedNotes[0],
  });
};

module.exports = {
  getAllNotes,
  getNotesById,
  createNote,
  updateNote,
  deleteNote,
};
