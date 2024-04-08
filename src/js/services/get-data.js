export const getData = async (url, params) => {
	let res = null;

	try {
		const resp = await fetch(
			`http://127.0.0.1:8000/${url}?c=${String(
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
