import {Router} from "express"

export class RouterModel{
    constructor(private path:string, private router: Router){}

    public getPath():string{
        return this.path;
    }

    public getRouter():Router{
        return this.router;
    }

}