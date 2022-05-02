import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
	projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
	// projectId: '477dglwz',
	dataset: 'production',
	apiVersion: '2022-02-01',
	useCdn: true,
	token: process.env.REACT_APP_SANITY_TOKEN
	// token:
	// 	'skJ9j48Km0SoULSwoPbcbdBbCWrBNE10zfm4Vd9KDMnw23B8HHeU6at0RPqT40qEOzlnpO7wMp3eTAfIp9Rg4XI2rxcE2GnaFML0HCgMUNEHskGBP0dccW45F6gUBlzg9TaSRAXazLLxflPf7hCRdge3Zrz2evbyddklOOqUjNQklqM1wzJj'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
