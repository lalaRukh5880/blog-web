import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";
import { ImageAsset } from 'sanity'


export const client = createClient({
    apiVersion:'2023-05-03',
    dataset: 'production',
    projectId :'ulocmlub',
    useCdn:false,
    })


const builder = ImageUrlBuilder(client)

export function urlFor(source:ImageAsset){
    return builder.image(source)
}