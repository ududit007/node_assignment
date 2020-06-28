const { zip } = require('zip-a-folder');
const dotenv = require('dotenv').config()

 
class ZipAFolder {
 
    static async main() {
        await zip(process.env.INPUT_DIRECTORY, process.env.OUTPUT_DIRECTORY);
    }
}
 
ZipAFolder.main();