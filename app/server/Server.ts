import express, { Router } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {RouterModel} from "../server/RouterModel";

export class Server{
    private app: express.Application;
    private port: number = 8080;

    constructor(){
        this.app = express();
        this.runConfig();
    }

    private runConfig(): void{
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    mountRouter(path: string, router: Router): void{
        this.app.use(path, router);
    }

    mountRouters(routers:RouterModel[]): void{
        routers.forEach(router => {
            this.app.use(router.getPath(), router.getRouter());
        });
    }  

    run(): void{
        console.log('Iniciando server');
        this.app.listen(this.port, () =>{
            console.log(`Escutando em http://localhost:${this.port}/`);
        });
    }


}