import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    buyTask,
    createTask,
    deleteTask,
    getTasks,
    getTasksById,
    getSellableTasks,
    userBuyTasks,
    userTasks,
} from "../controllers/task.controller.js";

const taskRouter = Router();

taskRouter.post("/", verifyJWT, createTask);
taskRouter.get("/getalltasks", verifyJWT, getTasks);
taskRouter.get("/usertasks", verifyJWT, userTasks);
taskRouter.put("/tasks/:taskId/buy", verifyJWT, buyTask);
taskRouter.get("/getSellableTasks", verifyJWT, getSellableTasks);
taskRouter.get("/buytasklist", verifyJWT, userBuyTasks);
taskRouter.get("/gettaskbyid/:taskId", verifyJWT, getTasksById);
taskRouter.delete("/:taskId", verifyJWT, deleteTask);

export default taskRouter;
