import { Request, Response } from 'express';
import { GenericService } from "../generics/GenericService";
import {Model} from "../model/Model";
import { Sets } from '../server/Sets';

export class WelcomeService2 extends GenericService{
    
    constructor(){
        super("/welcome2");
        this.addRouter(Sets.GET, '/', this.helloWorld);
        this.addRouter(Sets.GET, '/json', this.jsonTest);
        this.addRouter(Sets.POST, '/json2', this.jsonTest2);
        this.addRouter(Sets.GET, '/:name', this.helloWorld2);
    }

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
}