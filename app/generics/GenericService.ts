import { InterfaceService } from "../interfaces/InterfaceService";
import { Router, Request, Response } from 'express';
import { RouterModel, Sets } from '../server/servers';

export abstract class GenericService implements InterfaceService {

    protected router:Router;

    constructor(protected path:string){
        this.router = Router();
    }

    getRouter(): RouterModel {
        if(!this.path.startsWith('/')){
            throw new Error("path must begin with /");
        }
        return new RouterModel(this.path, this.router);
    }

    addRouter(type: string, path: string, callback: (req: Request, res: Response) => void) {
        if(type == Sets.GET){
            this.router.get(path, callback);
        }
        else if(type == Sets.POST){
            this.router.post(path, callback);
        }
    }
}