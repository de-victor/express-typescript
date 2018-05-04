import { WelcomeService } from "../services/WelcomeService";
import { WelcomeService2 } from "../services/WelcomeServices2";
import { RouterModel } from "./RouterModel";

export class BuildRouters{
    private routes: RouterModel[] = [];

    constructor(){
        this.routes.push(new WelcomeService().getRouter());
        this.routes.push(new WelcomeService2().getRouter());
    }

    getRouters():RouterModel[]{
        return this.routes;
    }
    
}