import { Router, Request, Response } from 'express';
import {Model} from "../model/Model";
import {RouterModel} from "../server/RouterModel";

export class Welcome{
    private router: Router;
    private path:string = "/welcome";

    private helloWorld(req: Request, res: Response): void{
        res.send("Hello World");
    }

    private helloWorld2(req: Request, res: Response): void{
        let {name} = req.params;
        res.send(`Hello ${name}`);
    }

    private jsonTest(req: Request, res: Response): void{
        let m = new Model(1, 'victor');
        res.json(m);
        
    }

    private jsonTest2(req: Request, res: Response): void{
        let m:Model =  req.body;
        m.id = 10;
        res.json(m);
        
    }

    constructor(){
        this.router = Router();
    }

    private mountRouters(): Router{
        this.router.get('/',this.helloWorld);
        this.router.get('/json',this.jsonTest);
        this.router.post('/json2',this.jsonTest2);
        this.router.get('/:name', this.helloWorld2);

        return this.router;
    }

    private getRouters(): Router{
        return this.mountRouters();
    }

    getRouter(): RouterModel{
        return new RouterModel(this.path, this.getRouters());
    }
}