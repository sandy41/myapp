import { Meteor } from 'meteor/meteor';
import { Tasks } from '../imports/api/Tasks';
//Tasks = new Mongo.Collection('tasks');
Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish("tasks", function() {
	return Tasks.find();
});
