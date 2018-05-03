import {Welcome} from "../controllers/Welcome";
import {RouterModel} from "./RouterModel";

export class BuildRouters{
    private routes: RouterModel[] = [];

    constructor(){
        this.routes.push(new Welcome().getRouter());
    }

    getRouters():RouterModel[]{
        return this.routes;
    }
    
}