const sanityClient = require('@sanity/client')

const SANITY_API_CLIENT_VERSION = '2021-03-25'

const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    apiVersion: SANITY_API_CLIENT_VERSION,
    useCdn: true,
}

module.exports = sanityClient(config)