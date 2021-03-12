const express = require('express');
const colors = require('colors');
const fs = require('fs');
const path = require('path');
const os = require('os');
const readline = require('readline');

const say = require('say')
say.speak("Chepalaha so skorosty sveta", 1)


console.log(colors.america("i`m juniorsergeant"));

const filename = 'Test.css';

function task2(file) {
    var fullpath = __dirname + "\\" + filename;
    console.log(fullpath);
    console.log(path.basename('C:\\Users\\ADMIN\\WebstormProjects\\BookPZ1\\Pz_1.9.js'));
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
    });1
    rl.question('', (answer) => {
        const monetka = getRandomInt(2)+1;
        console.log(monetka);
        monetka==answer? console.log('you win') : console.log('you lose');
        rl.close();
    });
}

task4();
let dotask4=0;