const sanityClient = require('@sanity/client')
const {config} = require("./libs/services/src");
module.exports = sanityClient(config)