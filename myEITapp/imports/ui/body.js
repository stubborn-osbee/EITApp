import {Template} from 'meteor/templating';

import { EITs } from '../api/eits.js';

import './body.html';
import './eit.js';

var id = '';
var update = false;

export const PopulateForUpdate = (eitDetails) =>{
    document.querySelector('form').firstname.value = eitDetails.firstName;
    document.querySelector('form').surname.value = eitDetails.surname;
    document.querySelector('form').gender.value = eitDetails.gender;
    document.querySelector('form').dob.value = eitDetails.dob;
    id = eitDetails.eitID;
    update = true;
}

Template.body.helpers({
    eits: function(){
        return EITs.find({}, {sort:{firstname: 1}});//sort by firstname
    },
});

Template.body.events({
    'submit .form form': function(e){
        e.preventDefault();

        const target = e.target;
        form = target;
        const firstName = target.firstname.value;
        const surname = target.surname.value;
        const gender = target.gender.value;
        const dob = target.dob.value;

        if(update){
            Meteor.call('eits.update',{
                id,
                firstName,
                surname,
                gender,
                dob
            });
            update = false;//reset update
        }else{
            Meteor.call('eits.insert',{
                firstName,
                surname,
                gender,
                dob
            });
        }
        
        target.firstname.value = '';
        target.surname.value = '';
        target.gender.value = '';
        target.dob.value = '';
    },
    'click #delete': function(){
        Meteor.call('eits.remove');
    }
});