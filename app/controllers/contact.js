import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageLong: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('isValidEmail', 'isMessageLong'),

    actions: {
        sendMessage(){            
            var email = this.get('emailAddress');
            var msg = this.get('message');

            var respMsg = `To: ${email}, Message: ${msg}`;
            this.set('responseMessage', respMsg);
            this.set('emailAddress', '');
            this.set('message', '');
            console.log(respMsg);
        }
    }
});
