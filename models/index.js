const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
//creating realationships between tables
Post.belongsTo(User,{
    foreignKey: "userId",
    onDelete: "CASCADE",
})
Post.hasMany(Comment, {foreignKey: "postId", onDelete: "CASCADE"})
Comment.belongsTo(User, {foreignKey: "userId", onDelete: "CASCADE"})
module.exports = {User, Post, Comment};