import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {DatePipe, registerLocaleData} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import localeRu from '@angular/common/locales/ru';

import {appRoutes} from "../../app/routes";
import "../../assets/styles/index.scss";

import {ApplicationComponent} from "./Component/Application";
import {PlatformService} from "./Service/PlatformService";
import {RouteHelperService} from "./Service/RouteHelperService";
import {RESTInterceptorConfig} from "./Interceptor/RESTInterceptorConfig";
import {RESTInterceptor} from "./Interceptor/RESTInterceptor";

import {PageNotFoundRoute} from "./Route/PageNotFoundRoute";
import {ForbiddenRoute} from "./Route/ForbiddenRoute";
import {CacheService} from "./Service/CacheService";
import {CacheInterceptor} from "./Interceptor/CacheInterceptor";
import {ParamsService} from "./Service/ParamsService";
import {CommonModule} from "../Common/CommonModule";

registerLocaleData(localeRu);

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation: "reload"}),
        HttpClientModule,
    ],

    declarations: [
        ApplicationComponent,
        PageNotFoundRoute,
        ForbiddenRoute,
    ],
    providers: [
        RouteHelperService,
        PlatformService,
        CacheService,
        ParamsService,
        DatePipe,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RESTInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CacheInterceptor,
            multi: true,
        },
        {
            provide: RESTInterceptorConfig,
            useValue: {
                path: "/api",
                tokenPrefix: "Bearer "
            }
        }
    ],
    exports: [ApplicationComponent]
})
export class ApplicationModule {}
