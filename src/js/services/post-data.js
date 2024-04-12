export const postData = async (url, data) => {
	let res = null;

	try {
		const resp = await fetch(
			`${process.env.API_URL}/${url}?c=${String(
				Math.floor(Math.random() * 100)
			)}`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data)
			}
		);

		res = await resp.text();
	} catch (e) {
		throw new Error(e);
	} finally {
		return res;
	}
};

export default postData;
