import { UsersComponent } from './users.component';
import { usersServiceStub } from '../mocks/usersServiceStub';
import { routerStub } from '../mocks/routerStub';

/* tslint:disable */
describe('Component: UsersComponent', () => {
  let component: UsersComponent;

  beforeEach(() => {
  component = new UsersComponent(usersServiceStub, routerStub);
  });

  it('should return users', () => {
    spyOn(usersServiceStub, 'getUsers').and.callThrough();
    component.ngOnInit();
    expect(usersServiceStub.getUsers).toHaveBeenCalled();
  });

});
