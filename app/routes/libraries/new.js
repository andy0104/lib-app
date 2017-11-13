import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        return this.store.createRecord('library');
    },
    actions: {
        saveLibrary(newLibrary){
            //console.log(newLibrary._internalModel.__attributes.address);
            return 0;

            newLibrary.save().then(() => {
                this.transitionTo('libraries');
            })
        },
        willTransition(){
            //will rollback data from table
            //if the model is isNew
            this.controller.get('model').rollbackAttributes();
        }
    }
});
