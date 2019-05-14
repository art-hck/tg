import {AppRoutes} from "../modules/Application/Entity/Route";
import {PageNotFoundRoute} from "../modules/Application/Route/PageNotFoundRoute";
import {ApplicationComponent} from "../modules/Application/Component/Application";

export const appRoutes: AppRoutes = [
    {
        path: '',
        component: ApplicationComponent,
    },
    {
        path: 'not-found',
        component: PageNotFoundRoute,
        data: {title: '404 - Now found'}
    },
    {
        path: '**',
        component: PageNotFoundRoute,
        data: {title: '404 - Now found'}
    }
];