import { UsersComponent } from './users.component';
import { usersServiceStub } from '../mocks/usersServiceStub';

describe('Component: UsersComponent', () => {
  let component: UsersComponent, users;

  beforeEach(() => {
    component = new UsersComponent(usersServiceStub);
  });

  it('should return users', () => {
    spyOn(usersServiceStub, 'getUsers').and.callThrough();
    component.ngOnInit();
    expect(usersServiceStub.getUsers).toHaveBeenCalled();
  })

});
