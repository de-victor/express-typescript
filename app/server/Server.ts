import express, { Router } from "express";

export class Server{
    private app: express.Application;
    private port: number = 8080;

    constructor(){
        this.app = express();
    }

    mountRouter(path: string, router: Router): void{
        this.app.use(path, router);
    }

    mountRouters(routers: Router[]): void{
        routers.forEach(router => this.app.use(router));
    }

    run(): void{
        console.log('Iniciando server');
        this.app.listen(this.port, () =>{
            console.log(`Escutando em http://localhost:${this.port}/`);
        });
    }


}