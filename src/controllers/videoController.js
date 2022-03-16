export const trending = (req, res) => res.send("Home Page Videos");

export const see = (req, res) => {
  console.log(`Connecting ID from : ${req.params.id}`);
  return res.send(`Watch Video #${req.params.id}`);
};
export const edit = (req, res) => res.send("Edit Vedio");

export const search = (req, res) => res.send("Search");

export const upload = (req, res) => res.send("Upload");

export const deleteVedio = (req, res) => {
  res.send("Delete Video");
};
