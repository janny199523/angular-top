import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { HttpService } from './http.interceptor';
import 'rxjs/add/operator/map';

import { ClAuthenticationService } from './cl-authentication.service';
import { ClUser } from '../../models/client/index';
import { cl_configs } from '../../config/cl-config';

@Injectable()
export class ClFoodService {
    
    @Output() cartNum: EventEmitter<any> = new EventEmitter();

    constructor(
        private http: Http,
        private httpService: HttpService,
        private authenticationService: ClAuthenticationService) {
    }

    createFood(model: FormData): Observable<any> {
        
        let clienData = JSON.parse(sessionStorage.getItem('clientUser'));

        let headers = new Headers({ 'Authorization': 'Bearer ' + clienData.token});
        let options = new RequestOptions({ headers: headers });

        console.log("createfood: " + cl_configs.base_url + '/api/create/food?token=' + clienData.token);

        return this.httpService.post(cl_configs.base_url + '/api/create/food?token=' + clienData.token, model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getFoodList(model: any): Observable<any> {

        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });


        return this.httpService.post(cl_configs.base_url + '/api/search', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getFoodDetail(id: any): Observable<any> {

        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });


        return this.httpService.get(cl_configs.base_url + '/api/food/detail/' + id, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    addToCart(model: any): Observable<any> {

        let clientData = JSON.parse(sessionStorage.getItem('clientUser'));

        let headers = new Headers({'Authorization': 'Bearer ' + clientData.token});
        let options = new RequestOptions({ headers: headers });

        console.log('addcart : ' + JSON.stringify(model));


        return this.httpService.post(cl_configs.base_url + '/api/add/cart', model, options)
            .map((res: Response) => {
                let data =  res.json();

                if (data.result) {
                    this.setHeaderCartNum();
                }

                return res.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
        /*return this.httpService.post(cl_configs.base_url + '/api/test', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });*/
    }

    getCart(): Observable<any> {

        let clientData = JSON.parse(sessionStorage.getItem('clientUser'));

        let headers = new Headers({ 'Authorization': 'Bearer ' + clientData.token });
        let options = new RequestOptions({ headers: headers });


        return this.httpService.get(cl_configs.base_url + '/api/cart/list', options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    updateCart(model: any): Observable<any> {

        let clientData = JSON.parse(sessionStorage.getItem('clientUser'));

        let headers = new Headers({ 'Authorization': 'Bearer ' + clientData.token });
        let options = new RequestOptions({ headers: headers });
        
        console.log('upcart : ' + JSON.stringify(model));

        return this.httpService.post(cl_configs.base_url + '/api/update/cart', model, options)
            .map((res: Response) => {
                let data = res.json();

                if (data.result) {
                    this.setHeaderCartNum();
                }

                return res.json();
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });

        /*return this.httpService.post(cl_configs.base_url + '/api/test', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });*/
    }

    getReviews(model: any): Observable<any> {

        // let clientData = JSON.parse(sessionStorage.getItem('clientUser'));

        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });


        return this.httpService.post(cl_configs.base_url + '/api/load/review', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getTomorrowFoods(model: any): Observable<any> {

        // let clientData = JSON.parse(sessionStorage.getItem('clientUser'));

        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });


        return this.httpService.post(cl_configs.base_url + '/api/tomorrow/food', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    getDayafterTomorrowFoods(model: any): Observable<any> {

        // let clientData = JSON.parse(sessionStorage.getItem('clientUser'));

        let headers = new Headers({});
        let options = new RequestOptions({ headers: headers });


        return this.httpService.post(cl_configs.base_url + '/api/day-after-tomorrow/food', model, options)
            .map((res: Response) => res.json())
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }

    setHeaderCartNum()
    {
        
        let clientData = JSON.parse(sessionStorage.getItem('clientUser'));
        if(clientData) {
            // console.log('yayaya');
            this.getCart().subscribe(data2 => {
                if (data2.result === true) {
                    let sum = 0;
                    for (let i = 0; i < data2.data.length; i++)
                        sum += data2.data[i].quantity;
    
                    console.log('sum : ' + sum);
                    this.cartNum.emit(sum);
                }
            }, err2 => {
            });
        }
    }
}
