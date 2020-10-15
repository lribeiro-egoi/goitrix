import FormUserController from './form-user.controller.js';
import FormUserTemplate from './form-user.template.js';

export default class FormUserComponent {
    constructor(props) {
        this.controller = FormUserController;
        this.template = FormUserTemplate;
        this.bindingd = {
            $transitions$: '<'
        }
    }

}
