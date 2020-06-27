"use strict";

//Вариант А
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const post1 = new Post('alex', 'lorem ipsum', new Date());
console.log(post1);
post1.edit('Dolor site');
console.log(post1);

// Вариант В

class AttachedPost extends Post{
    constructor(author, text, date) {
        super(author,text,date);
        this.highlighted = false;
    }
    makeTextHighlighted(){
        this.highlighted = true;
    }
}

const attached1 =new AttachedPost('admin', 'lorem2 epsum2', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('Dolor2 sit2');
console.log(attached1);