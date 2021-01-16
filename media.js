import { createMedia } from '@artsy/fresnel';

const MediaApp = createMedia({
	breakpoints: {
		mobile: 0,
		tablet: 768,
		laptop: 1440,
		desktop: 1600,
	},
});

// Make styles for injection into the header of the page
export const mediaStyles = MediaApp.createMediaStyle();

export const { Media, MediaContextProvider } = MediaApp;
