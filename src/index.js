export default {
	async fetch(request, env) {

		if (!/favicon/i.test(request.url))

			await fetch(env.LOG_WEBHOOK, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					embeds: [
						{
							title: "Request",
							color: 0xff6188,
							fields: [
								{
									name: "Method",
									value: request.method ?? "N/A",
									inline: true
								},
								{
									name: "URL",
									value: request.url ?? "N/A",
									inline: true
								},
								{
									name: "Origin",
									value: request.headers.get("cf-connecting-ip") ?? "N/A",
									inline: true
								},
								{
									name: "User Agent",
									value: request.headers.get("user-agent") ?? "N/A",
								},
								{
									name: "HTTP Protocol",
									value: request.cf.httpProtocol ?? "N/A",
									inline: true
								},
								{
									name: "Provider",
									value: request.cf.asOrganization ?? "N/A",
									inline: true
								},
								{
									name: "TLS Version",
									value: request.cf.tlsVersion ?? "N/A",
									inline: true
								},
							]
						},
						{
							title: "Region",
							color: 0xffd866,
							fields: [
								{
									name: "Continent",
									value: request.cf.continent ?? "N/A",
									inline: true
								},
								{
									name: "Country",
									value: request.cf.country ?? "N/A",
									inline: true
								},
								{
									name: "City",
									value: request.cf.city ?? "N/A",
									inline: true
								},
								{
									name: "Colo",
									value: request.cf.colo ?? "N/A",
									inline: true
								},
								{
									name: "Latitude",
									value: request.cf.latitude ?? "N/A",
									inline: true
								},
								{
									name: "Longitude",
									value: request.cf.longitude ?? "N/A",
									inline: true
								},
								{
									name: "Postal Code",
									value: request.cf.postalCode ?? "N/A",
									inline: true
								},
								{
									name: "Metro Code",
									value: request.cf.metroCode ?? "N/A",
									inline: true
								},
								{
									name: "Region",
									value: request.cf.region ?? "N/A",
									inline: true
								},
								{
									name: "Region Code",
									value: request.cf.regionCode ?? "N/A",
									inline: true
								}
							]
						},
						{
							title: "Time",
							color: 0x78DCE8,
							footer: {
								text: "segato.dev"
							},
							timestamp: new Date().toISOString(),
							fields: [
								{
									name: "Local",
									value: new Date().toLocaleString("en-GB", { timeZone: "Europe/Lisbon", hour: "2-digit", minute: "2-digit" }) ?? "N/A",
									inline: true
								},
								{
									name: "Request",
									value: new Date().toLocaleString("en-GB", { timeZone: request.cf.timezone, hour: "2-digit", minute: "2-digit" }) ?? "N/A",
									inline: true
								},
								{
									name: "Timezone",
									value: request.cf.timezone ?? "N/A",
									inline: true
								},
								{
									name: "Local Date",
									value: new Date().toLocaleString("en-GB", { timeZone: "Europe/Lisbon", day: "2-digit", month: "2-digit", year: "2-digit" }) ?? "N/A",
									inline: true
								},
								{
									name: "Request Date",
									value: new Date().toLocaleString("en-GB", { timeZone: request.cf.timezone, day: "2-digit", month: "2-digit", year: "2-digit" }) ?? "N/A",
									inline: true
								}
							]
						}
					]

				})
			});

		if (request.url != "https://segato.dev/") return Response.redirect("https://segato.dev/", 301);

		return env.ASSETS.fetch(`${request.url}/owo.webm`);
	},
};