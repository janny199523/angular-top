import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpService } from './http.interceptor';
import { JwtHelper } from 'angular2-jwt/angular2-jwt';
import 'rxjs/add/operator/map';
import { cl_configs } from '../../config/cl-config';

@Injectable()
export class ClAuthenticationService {
    public token: string;
    public userData: any = {};
    jwtHelper: JwtHelper = new JwtHelper();

    constructor(private http: Http,
                private httpService: HttpService)
    {
        console.log('auth init');
        // set token if saved in local storage
        let clientUser = JSON.parse(sessionStorage.getItem('clientUser'));
        this.token = clientUser && clientUser.token;
    }

    login(model: any): Observable<any> {
        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(cl_configs.base_url + '/api/login', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    register(model: FormData): Observable<any> {
        console.log("roro : " + model.get('email'));
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(cl_configs.base_url + '/api/register', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    updateProfile(model: FormData): Observable<any> {
        console.log("up roro : " + model.get('email'));

        let clientData = JSON.parse(sessionStorage.getItem('clientUser'));

        let headers = new Headers({ 'Authorization': 'Bearer ' + clientData.token });
        let options = new RequestOptions({ headers: headers });

        console.log("up roro1 : " + cl_configs.base_url + '/api/edit/profile');

        return this.httpService.post(cl_configs.base_url + '/api/edit/profile', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
        /*console.log("up roro1 : " + cl_configs.base_url + '/api/test');

        return this.httpService.post(cl_configs.base_url + '/api/test', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });*/
    }

    verification(code: any): Observable<any> {
        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(cl_configs.base_url + '/api/verify/' + code, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    forgotPassword(model: any): Observable<any> {
        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(cl_configs.base_url + '/api/password/email', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    resetPassword(model: any): Observable<any> {
        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });

        return this.httpService.post(cl_configs.base_url + '/api/password/reset', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        sessionStorage.removeItem('clientUser');
    }

    setUserData(userObject: any): Observable<any> {
        sessionStorage.setItem('clientUser', JSON.stringify(userObject));
        // this.userData = userObject;
        return Observable.of(this.userData);
    }

    getUserData(): Observable<any> {
        // let token = this.cookies.getCookie("sessionId");
        
        let sessionUser = sessionStorage.getItem('clientUser') || null;
        console.log("get user data : " + JSON.stringify(sessionUser));

        return Observable.of(JSON.parse(sessionUser));
    }


}
