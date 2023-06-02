// const assert = require('node:assert').strict;
// const test = require('node:test');

// function pow(num, s) {
//     let result = 1;

//     for (let i = 0; i < s; i++) {
//         result *= num;
//     }

//     return result;
// }

// test('test 2^2 = 4', (t) => {
//     assert.strictEqual(pow(2,2),4);
// });

// test('test 9^2 = 81', (t) => {
//     assert.strictEqual(pow(9,2),81);
// });

// test('test 5^4 = 625', (t) => {
//     assert.strictEqual(pow(5,4),625);
// });


// const { Buffer } = require('node:buffer');

// const buf1 = Buffer.alloc(10);
// console.log(buf1);


// const message = Buffer.from('Hello! I am Max');
// console.log(message);

// const result = message.toString();
// console.log(result);



// import cluster from 'cluster';
// import http from 'http';
// import { availableParallelism } from 'os';
// import process from 'process';

// const numCPUs = availableParallelism();

// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);

//   // Fork workers.
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // Workers can share any TCP connection
//   // In this case it is an HTTP server
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('hello world\n');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }

// console.log('jaksdfhaslk')

// console.table([
//     {
//         name:'alex'
//     },    {
//         name:'anna'
//     },    {
//         name:'alex'
//     },
// ]);

// console.dir({
//     name:'alex'
// });

// import crypto from 'crypto';
 
// const algorithm = 'aes-256-cbc';
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

// console.log(key);
// function encrypt(text) {
//     let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
//     let encrypted = cipher.update(text);
//     encrypted = Buffer.concat([encrypted, cipher.final()]);
//     return { iv: iv.toString('hex'),
//     encryptedData: encrypted.toString('hex') };
// }
 
// var encrypted = encrypt("Hello World!");
// console.log("Encrypted Text: " + encrypted.encryptedData);



// function decrypt(text) {
//     let iv = Buffer.from(text.iv, 'hex');
//     let encryptedText = Buffer.from(text.encryptedData, 'hex');
 
//     let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
 
//     let decrypted = decipher.update(encryptedText);
//     decrypted = Buffer.concat([decrypted, decipher.final()]);
 
//     return decrypted.toString();
// }
 
// const decrypted = decrypt(encrypted)
// console.log("Decrypted Text: " + decrypted); 


// import dns from "dns";

// dns.lookup('google.com', (err, address, family) => {
//   console.log('address: %j family: IPv%s', address, family);
// });


// import { EventEmitter } from 'events';


// const myEmitter = new EventEmitter();

// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });

// setInterval(()=> {
//     myEmitter.emit('event');
// }, 1000)

// import { writeFileSync, readFileSync } from 'fs';

// const text = 'Hello from the file!';

// writeFileSync('./file.txt', text);

// const result = readFileSync('./file.txt', 'utf-8');
// console.log(result);

// const result2 = readFileSync('./index.js', 'utf-8');
// console.log(result2);

// const january = new Date(9e8);
// const english = new Intl.DateTimeFormat('en', { month: 'long' });
// const spanish = new Intl.DateTimeFormat('es', { month: 'long' });
// const ukrainan = new Intl.DateTimeFormat('uk', { month: 'long' });

// console.log(english.format(january));
// // Prints "January"
// console.log(spanish.format(january));
// console.log(ukrainan.format(january));


// import net from 'net';

// const server = net.createServer((c) => {
//   // 'connection' listener.
//   console.log('client connected');
//   c.on('end', () => {
//     console.log('client disconnected');
//   });
//   c.write('hello\r\n');
//   c.pipe(c);
// });
// server.on('error', (err) => {
//   throw err;
// });
// server.listen(8124, () => {
//   console.log('server bound');
// });

// import os from 'os';
// console.dir(os.arch());
// console.dir(os.cpus());
// console.dir(os.homedir());
// console.dir(os.hostname());
// console.dir(os.platform());
// console.dir(os.version());

// import * as readline from 'readline/promises';
// import { stdin as input, stdout as output } from 'process';

// const rl = readline.createInterface({ input, output });

// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();


const { createGzip } = require('node:zlib');
const { pipeline } = require('node:stream');
const {
  createReadStream,
  createWriteStream,
} = require('node:fs');

const gzip = createGzip();
const source = createReadStream('file.txt');
const destination = createWriteStream('file.txt.zip');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});