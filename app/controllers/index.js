import Ember from 'ember';

export default Ember.Controller.extend({
    isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isDisabled: Ember.computed.not('isValid'),
    emailAddress: '',
    actualEmailId: Ember.computed('emailAddress', function(){
        console.log('Actual email id is ', this.get('emailAddress'));
    }),
    modifiedEmailId: Ember.observer('emailAddress', function(){
        console.log('Changed email id is ', this.get('emailAddress'));
    }),
    actions: {
        saveInvitation(){
            console.log('Save the invitation', this.get('emailAddress'));
        }
    }
});
