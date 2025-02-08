import { PortableTextBlock } from '@portabletext/react';
import { ImageAsset } from 'sanity'
export interface simpleBlogCard {
    title: string;
    description: string;
    currentSlug: string;
    titleImage: ImageAsset;
}
export interface fullBlog {
    currentSlug:string;
    title: string;
    content: PortableTextBlock[];
    titleImage: ImageAsset;
}