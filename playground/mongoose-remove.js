const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/* Todo.remove({}).then((result) => {
    console.log(result);
}); */

Todo.findByIdAndRemove('5b8b499d2c6c9a23568c46eb').then((todo) => {
    console.log(todo);
});

Todo.findOneAndUpdate({_id: '5b8b499d2c6c9a23568c46eb'}).then((todo) => {
    console.log(todo);
});