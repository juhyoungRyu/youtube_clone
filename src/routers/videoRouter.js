import express from "express";

const videoRouter = express.Router();

videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/edit", handleEditVideo);

export default videoRouter;
