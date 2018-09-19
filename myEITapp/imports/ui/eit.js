import { Template } from 'meteor/templating';

import { PopulateForUpdate } from './body.js';

import './eit.html';

Template.eit.events({
    'change .toggle-checked': function(e){
        Meteor.call(
            'eits.setChecked',
            this._id, 
            e.target.checked
        );
        
    },
    'click .click-to-update': function(){
        PopulateForUpdate({
            eitID:this._id,
            firstName: this.firstname,
            surname: this.surname,
            gender: this.gender,
            dob: this.dob
        });
    }
});