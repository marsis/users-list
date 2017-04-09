import { Observable } from 'rxjs';
import { ResponseOptions } from '@angular/http';
import { users } from './usersStub';


let options = new ResponseOptions({
  body: JSON.stringify(users)
});

let response = new Response(options);

export let usersServiceStub: any = {
  getUsers: () => {
    return Observable.create(
      observer => {
        observer.next(response);
      }
    );
  }
};
