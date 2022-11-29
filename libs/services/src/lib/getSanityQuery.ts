import { groq } from "next-sanity"
import { sanityClient} from "./getClient";

export const getSanityQuery = async (): Promise<string[]> => {
    const query = groq`*[!(_id in path('drafts.**')) && _type == "page"] {
        ...
    }`

    const data = await sanityClient.fetch(query)

    return data
}


