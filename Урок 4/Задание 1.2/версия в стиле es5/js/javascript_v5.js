"use strict";

// Вариант А
function Post(author, text, data) {
    this.author = author;
    this.text = text;
    this.data = data;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

const post1 = new Post("Alex", "иходный текст.", new Date());
console.log(post1);
post1.edit("редактируемый текст");
console.log(post1);

// Вариант B

function AttachePost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachePost.prototype = Object.create(Post.prototype);
AttachePost.prototype.constructor = AttachePost;

AttachePost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const attached1 = new AttachePost('admin', 'Lorem2 ipsum2', new Date())
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('dolor2 sit2');
console.log(attached1);