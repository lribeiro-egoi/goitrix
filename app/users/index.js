import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import oclazyload from 'oclazyload';

const index = angular
    .module('users', [
        uirouter,
        oclazyload
    ]);

index.config(function ($tateProvider) {
    $tateProvider
        .state({
            name: 'users-add',
            url: '/users/add',
            component: 'formUsersComponent',
            lazyLoad: ($transition$) => {
                const $oclazyload = $transition$.$injector().get('$oclazyload');
                return import('./form/form-user.module').then((m) => {
                    $oclazyload.load(m.FORM_USER_MODULE);
                });
            }
        })
        .state({
            name: 'users-edit',
            url: '/users/edit/{id:[0-9]}',
            component: 'formUsersComponent',
            lazyLoad: ($transition$) => {
                const $oclazyload = $transition$.$injector().get('$oclazyload');
                return import('./form/form-user.module').then((m) => {
                    $oclazyload.load(m.FORM_USER_MODULE);
                });
            }
        })
        .state({
            name: 'users-list',
            url: '/users/list',
            component: 'listUsersComponent',
            lazyLoad: ($transition$) => {
                const $oclazyload = $transition$.$injector().get('$oclazyload');
                return import('./list/list-user.module').then((m) => {
                    $oclazyload.load(m.LIST_USER_MODULE);
                });
            }
        })
});

export default index.name;
