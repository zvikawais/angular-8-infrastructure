import { Globals } from '../models/globals.model';


const GLOBALS: Globals = {
    APP_ROUTES: [
        {
            route: '/', name: 'home'
        },
        {
            route: '/feature-example', name: 'feature example'
        }
    ]
};

export function globals(): Globals {
    return JSON.parse(JSON.stringify(GLOBALS));
}
