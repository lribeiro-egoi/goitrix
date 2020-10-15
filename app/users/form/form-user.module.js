import angular from 'angular';
import FormUserComponent from "./form-user.component";

const FORM_USER_MODULE = angular
    .module('form-user', [])
    .component('formUserComponent', new FormUserComponent());

export {FORM_USER_MODULE};
