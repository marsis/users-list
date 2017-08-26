import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RequestService {

  constructor( private _http: Http) { }

}

/*
@Injectable()export class RequestService  {
  constructor(private http: Http,
              private _jsonp: Jsonp,
              private router: Router,
              private storeservice: UserStoreService)  {}

  commonLink: string = 'http://';
  userId: any = '';
  token: string = '';
  roomId: any;
  headers: Headers = new Headers({
   'Content-Type': 'application/json',
    'AppKey': 'abcd1234',
    'AppVersion': 'Tifo 1.0',
     'x-public': 'Angular', 'OS': 'NodeJs'});
    options: RequestOptions  = new RequestOptions({ headers: this.headers });

    changeWallOrder(dataToServer: any): Observable {
        let sendData = {
             user_id: this.userId,
             room_id: dataToServer.room_id,
             walls_order: dataToServer.walls_order    };
        let data = {
             sendData: sendData,
             apiLink: 'room/wall/order'    };
     return this.makePostRequest(data)  }

     makePostRequest(data: any): Observable {

         this.addTimeToHeaders();
         return this.http.post(this.commonLink + data.apiLink, JSON.stringify(data.sendData), this.options)
         .map((resp:Response)=>{
               return resp.json();
          })
         .catch((error: any)=> {
            error.json().message && error.json().message == 'token_not_authorized' && this.router.navigateByUrl('/login');
         return Observable.throw(error.json());});  }



 */