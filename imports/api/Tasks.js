export const Tasks = new Mongo.Collection('tasks');
Meteor.methods({
	addTask: function(name) {
		Tasks.insert({name: name, createdAt: new Date(), owner: Meteor.userId()});
		return false;
	},
	deleteTask: function(id) {
		Tasks.remove(id);
	}
});