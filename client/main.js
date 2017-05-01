import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import { Tasks } from '../imports/api/Tasks';
//Tasks = new Mongo.Collection('tasks');
Meteor.subscribe("tasks");
Template.tasks.helpers({
	tasks: function(){
		if(this.owner = Meteor.userId()){
			return Tasks.find().fetch();
		}
		else {
			return false;
		}
	},
	isOwner: function(){
		return this.owner == Meteor.userId();
	}
});
Template.tasks.events({
	"submit .add-task": function(event){
		var name=event.target.name.value;
		//console.log(name);
		Meteor.call("addTask", name);
		//Tasks.insert({name: name, createdAt: new Date(), userId: Meteor.userId()});
		event.target.name.value='';
		return false;
	},
	"click .delete-task": function(event){
		if(confirm('Delete Task?')){
			Meteor.call("deleteTask", this._id);
		}
	}
});

