import { Injectable } from "@angular/core";

import { Resource } from 'ngx-resource-factory/resource/resource';
import { ResourceConfiguration } from 'ngx-resource-factory/resource/resource-configuration';
import { ResourceInstance } from 'ngx-resource-factory/resource/resource-instance';
import { ResourceAction } from "ngx-resource-factory/resource/resource-action";
import { ResourceActionMethod } from "ngx-resource-factory/resource/resource-action-method";
import { ResourceActionHttpMethod } from "ngx-resource-factory/resource/resource-action-http-method";

export class User extends ResourceInstance {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
}

@Injectable({
    providedIn: 'root'
})
@ResourceConfiguration({
    name: 'UserResource',
    url: 'https://reqres.in/api/users/:pk/',
    pkAttr: 'id',
    instanceClass: User,
    stripTrailingSlashes: true,
    dataAttr: 'data',
    useDataAttrForList: true,
    useDataAttrForObject: false,
    withCredentials: false,
})
export class UserResource extends Resource<User> {

  @ResourceAction({
    method: ResourceActionHttpMethod.GET,
    isList: false,
    dataAttr: 'data',
  })
  get: ResourceActionMethod<any, any, User>;

}
