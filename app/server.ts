import { Server, BuildRouters } from './server/servers';

const app = new Server();

app.mountRouters(new BuildRouters().getRouters());

app.run();