import { Server } from './server/Server';
import {BuildRouters} from "./server/BuildRouters";

const app = new Server();

app.mountRouters(new BuildRouters().getRouters());

app.run();