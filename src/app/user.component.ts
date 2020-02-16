import { Component, Input } from '@angular/core';
import { ResourceModel } from 'ngx-resource-factory/resource/resource-model';

import { UserResource, User } from './user.resource';

@Component({
  selector: 'app-user',
  template: `
    <pre>{{ userData | json }}</pre>
    
    <button class="btn btn-primary btn-lg btn-block" [ngStyle]="{ 'background-color':
     'lightblue' ,'color' : 'darkblue' , 'font-weight' : 'bold'}
       "(click)="getData()">Read</button>
    <button 
    class="btn btn-primary btn-lg btn-block"  [ngStyle]="{ 'background-color':
     'lightpink' ,'color' : 'purple' , 'font-weight' : 'bold'}"
    (click)="updateData()">Update</button>
        <button 
    class="btn btn-primary btn-lg btn-block"  [ngStyle]="{ 'background-color':
     'lightgreen' ,'color' : 'green' , 'font-weight' : 'bold'}"
    (click)="createData()">Create</button>
      
    <button 
    class="btn btn-primary btn-danger btn-lg btn-block"  [ngStyle]="{ 'background-color':
     'yellow' ,'color' : 'darkred' , 'font-weight' : 'bold'}"
     (click)="removeData()">Remove</button>
    `,
})
export class UserComponent {

  userData: ResourceModel<User>;

  constructor(private userResource: UserResource) {
  }

  getData() {
    this.userResource.get({id: 2}).$promise
      .then((data) => {
          this.userData = data;
      })
      .catch((error) => {
          console.log(error);
      });
  }

  updateData() {
    this.userResource.update({}, {'id': 2, 'first_name': 'Test', 'last_name': 'Update'}).$promise
      .then((data) => {
          this.userData = data;
      })
      .catch((error) => {
          console.log(error);
      });
  }

  createData() {
    this.userResource.save({}, {'first_name': 'Test', 'last_name': 'Update'}).$promise
      .then((data) => {
          this.userData = data;
      })
      .catch((error) => {
          console.log(error);
      });
  }

  removeData() {
    this.userResource.remove({id: 2}).$promise
      .then((data) => {
          this.userData = data;
      })
      .catch((error) => {
          console.log(error);
      });
  }

  $updateData() {
    this.userData.first_name = 'Test 1';
    this.userData.last_name = 'Update';
    
    this.userData.$update().$promise
      .then((data) => {
          this.userData = data;
      })
      .catch((error) => {
          console.log(error);
      });
  }

  $removeData() {
    this.userData.$remove().$promise
      .then((data) => {
          this.userData = data;
      })
      .catch((error) => {
          console.log(error);
      });
  }

}
