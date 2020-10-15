import angular from 'angular';
import ListUserComponent from "./list-user.component";

const LIST_USER_MODULE = angular
    .module('list-user', [])
    .component('listUserComponent', new ListUserComponent());

export {LIST_USER_MODULE};
