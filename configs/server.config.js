/**
 * @desc: Exports port number for the app to run in localhost
 */

require('dotenv').config();

module.exports = {
    PORT : process.env.PORT
}