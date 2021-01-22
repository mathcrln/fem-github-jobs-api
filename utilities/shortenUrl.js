export const shortenUrl = (url) => {
	let shortenedUrl = url?.split(/\//)[2];
	if (shortenedUrl.includes('/www./')) {
		shortenedUrl = url?.split(/\//)[2]?.split(/www./)[1];
	}

	return shortenedUrl;
};
