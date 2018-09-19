import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const EITs = new Mongo.Collection('eits');

Meteor.methods({
    'eits.insert': function(eit){
        EITs.insert({
            firstname: eit.firstName,
            surname: eit.surname,
            gender: eit.gender,
            dob: eit.dob
        });
    },
    'eits.update': function(eit){
        EITs.update(eit.id,{$set:{
            firstname: eit.firstName,
            surname: eit.surname,
            gender: eit.gender,
            dob: eit.dob
        }});
    },'eits.remove': function(){
            EITs.remove({checked: true});
    },
    'eits.setChecked': function(eitID, checkedState){
        EITs.update(eitID, {$set:{checked: checkedState}})
    }
});