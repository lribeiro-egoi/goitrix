import ListUserController from './list-user.controller.js';
import ListUserTemplate from './list-user.template.js';

export default class ListUserComponent {
    constructor(props) {
        this.controller = ListUserController;
        this.template = ListUserTemplate;
        this.bindingd = {
            $transitions$: '<'
        }
    }

}
