module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				useBuiltIns: "usage",
				debug: true,
				corejs: 3
			}
		]
	]
};
