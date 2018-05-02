import { Server } from './server/Server';
import {Welcome} from './controllers/Welcome';

let welcome = new Welcome();

const app = new Server();
app.mountRouter('/welcome', welcome.getRouters());

app.run();