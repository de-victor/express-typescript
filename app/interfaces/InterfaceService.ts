import { Router } from 'express';
import { RouterModel } from '../server/RouterModel'

export interface InterfaceService{

    getRouter(): RouterModel;
    addRouter(type: string, path: string, callback: () => void): void;

}