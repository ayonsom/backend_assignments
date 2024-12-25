const crypto = require('crypto');
const fs = require('fs');
const { Readable } = require('stream');
const os = require('os');
const { v4: uuidv4 } = require('uuid');

const operation = process.argv[2];

switch (operation) {
  case 'encrypt':
    const text = process.argv[3];
    const algorithm = 'aes-256-cbc';
    const key = crypto.randomBytes(32);
    const iv = crypto.randomBytes(16);

    function encrypt(text) {
      let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
      let encrypted = cipher.update(text);
      encrypted = Buffer.concat([encrypted, cipher.final()]);
      return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
    }

    let encrypted = encrypt(text);
    console.log('Encrypted text:', encrypted);
    console.log('UUID:', uuidv4());
    break;

  case 'stream':
    const filePath = process.argv[3];

    console.time('Stream Read');
    const stream = fs.createReadStream(filePath, 'utf8');
    let streamData = '';

    stream.on('data', chunk => {
      streamData += chunk;
    });

    stream.on('end', () => {
      console.timeEnd('Stream Read');
      console.log('Stream Read Complete');
    });

    console.time('FS Read');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err;
      console.timeEnd('FS Read');
      console.log('FS Read Complete');
    });
    break;

  case 'system':
    console.log('System details:');
    console.log('OS platform:', os.platform());
    console.log('OS release:', os.release());
    console.log('Total memory:', os.totalmem());
    console.log('Free memory:', os.freemem());
    console.log('CPU architecture:', os.arch());
    console.log('CPU details:', os.cpus());
    console.log('Network interfaces:', os.networkInterfaces());
    console.log('Home directory:', os.homedir());
    console.log('Uptime:', os.uptime());
    break;

  default:
    console.log(`Invalid operation '${operation}'`);
}
