import sanityClient from '@sanity/client';

const client = sanityClient({
	projectId: 'kjuhkyb0',
	dataset: 'production',
	apiVersion: '2021-03-25',
	useCdn: true
});

export default client;
