/**
 * 
 */
function FormUserController() {

    // define vm
    const ctrl = this;

    // user ID
    ctrl.userID = null;

    this.$onInit = function() {
        ctrl.userID = this.$transitions$.params().get('id');
    }

};

export default FormUserController;
