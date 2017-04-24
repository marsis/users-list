import { ResponseOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { users } from './usersStub';


const options = new ResponseOptions({
  body: JSON.stringify(users)
});

const response = new Response(options);

export let usersServiceStub: any = {
  getUsers: () => {
    return Observable.create(
      observer => {
        observer.next(response);
      }
    );
  }
};
