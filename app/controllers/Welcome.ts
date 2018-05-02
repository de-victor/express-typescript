import { Router, Request, Response } from 'express';

export class Welcome{
    private router: Router;

    helloWorld(req: Request, res: Response): void{
        res.send("Hello World");
    }

    helloWorld2(req: Request, res: Response): void{
        let {name} = req.params;
        res.send(`Hello ${name}`);
    }

    constructor(){
        this.router = Router();
    }

    private mountRouters(): Router{
        this.router.get('/',this.helloWorld);
        this.router.get('/:name', this.helloWorld2);

        return this.router;
    }

    getRouters(): Router{
        return this.mountRouters();
    }
}