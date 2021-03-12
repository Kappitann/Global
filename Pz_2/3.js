const express = require('express');
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const say = require('say')
say.speak("281 gruppa sila", 1)


console.log(colors.america("i`m aariiiiiiiiinkaaaaaaaaa"));

const filename = 'style.css';

function task2(file) {
    var fullpath = __dirname + "/uploads/" + filename;
    console.log(fullpath);
    console.log(path.basename('D:/Java_projects/1-4/style.css'));
    console.log(os.platform());
}
task2(filename);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function task4() {
    console.log("play in orel or reshka");
    console.log("enter 1 or 2");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('', (answer) => {
        const monetka = getRandomInt(2)+1;
        console.log(monetka);
        monetka==answer? console.log('you win') : console.log('you lose');
        rl.close();
    });
}

task4();
let dotask4=0;