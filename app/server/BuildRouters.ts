import { WelcomeService, WelcomeService2 } from '../services/services';
import { RouterModel } from "./servers";

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