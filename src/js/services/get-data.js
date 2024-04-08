export const getData = async (url, params) => {
	let res = null;

	try {
		const resp = await fetch(
			`${process.env.API_URL}/${url}?c=${String(
				Math.floor(Math.random() * 100)
			)}&${params}`
		);

		res = resp.ok ? await resp.json() : null;
	} catch (e) {
		throw new Error(e);
	} finally {
		return res;
	}
};

export default getData;
