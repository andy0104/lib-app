import Ember from 'ember';

export default Ember.Controller.extend({
    responseMsg: '',
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
            var _that = this;
            this.set('responseMsg', `Thank you! We've saved your email address: ${this.get('emailAddress')}`);
            const newInvitation = this.store.createRecord('invitation', {email: this.get('emailAddress')});
            newInvitation.save().then(function(response){
                console.log(`Invitation email address ${response.get('id')} is saved`);
                _that.set('emailAddress', '');
            });
        }
    }
});
