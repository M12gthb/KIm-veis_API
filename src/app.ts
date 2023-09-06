import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import { handleError } from "./middlewares/handleError.middleware";
import { usersRouters } from "./routes/users.routers";
import { loginRouters } from "./routes/login.routers";
import { categoriesRouters } from "./routes/categories.routers";
import { realEstateRouters } from "./routes/realEstate.routers";
import { schedulesRouters } from "./routes/schedules.routers";

const app: Application = express();

app.use(express.json());

app.use("/users", usersRouters);

app.use("/login", loginRouters);

app.use("/categories", categoriesRouters);

app.use("/realEstate", realEstateRouters);

app.use("/schedules", schedulesRouters);

app.use(handleError);

export default app;
