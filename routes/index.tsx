import { supabase } from "@/lib/supabase.ts";
import { Head } from "$fresh/runtime.ts";
import Container from "@/components/Container.tsx";
import Stack from "@/components/Stack.tsx";
import Icon from "@/components/Icon.tsx";
import { Handler } from "@/types/Handler.ts";
import type { App } from "@/types/App.ts";
import { PageProps } from "$fresh/server.ts";
import Button from "@/components/Button.tsx";
import Card from "@/components/Card.tsx";
import Divider from "@/components/Divider.tsx";
import ListItem from "@/components/ListItem.tsx";
import Features from "@/components/compound/Features.tsx";
import { APP } from "@/lib/app.ts";

interface DataProps {
	apps: App[];
}

export default function Welcome({ data: { apps } }: PageProps<DataProps>) {
	return (
		<>
			<Head>
				<title>Paquet</title>
			</Head>
			<Container class="flex flex-col h-screen justify-center relative">
				<a
					class="text-7xl font-bold"
					href="/home"
				>
					Access your apps{" "}
					<span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
						instantly
					</span>
				</a>
				<p class="self-center text-center opacity-50 font-medium absolute bottom-4">
					Interested? Scroll down to learn more.<br />
					<Icon
						name="arrow-big-down-line"
						inline
					/>
				</p>
			</Container>
			<Container>
				<Stack>
					<h2 class="text-5xl font-bold">
						No downloads. No installs. You just{" "}
						<span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
							open it
						</span>.
					</h2>
					<div class="grid grid-cols-4 md:grid-cols-8 gap-2 place-items-center place-content-center filter grayscale">
						{apps.map((app) => (
							<a
								href={`/app/${app.id}`}
							>
								<img
									class="w-16 h-16 rounded"
									src={app.icon}
								/>
							</a>
						))}
					</div>
					<a
						href="/home"
						class="w-full"
					>
						<Button
							icon="external-link"
							class="max-w-screen-sm w-full mx-auto"
						>
							Open Paquet
						</Button>
					</a>
				</Stack>
				<Stack>
					<h3 class="text-center font-bold text-3xl mt-32">
						What's in store?
					</h3>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
						<Card>
							<p class="font-bold mb-2">
								<Icon
									name="download-off"
									inline
									size={18}
								/>{" "}
								No downloads
							</p>
							<p>
								No need to download anything. Paquet is a web
								app that runs in your browser. All apps you find
								inside work the same way Paquet does.
							</p>
						</Card>
						<Card>
							<p class="font-bold mb-2">
								<Icon
									name="check"
									inline
									size={18}
								/>{" "}
								Verified
							</p>
							<p>
								Every app on Paquet is verified manually. We
								make sure that the app is safe and works as
								intended. We also make sure that the app is
								accessible to everyone.
							</p>
						</Card>
						<Card>
							<p class="font-bold mb-2">
								<Icon
									name="hearts"
									inline
									size={18}
								/>{" "}
								Ranked by the community
							</p>
							<p>
								Apps are not ranked by us. They are ranked by
								the community. The more people like an app, the
								higher it will rank. This way you can find the
								best apps for you.
							</p>
						</Card>
					</div>
					<h2 class="text-5xl font-bold text-center mt-32">
						See if it's{" "}
						<span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
							for you
						</span>{" "}
						before you even open it.
					</h2>
					<Divider inset class="mb-4" />
				</Stack>
			</Container>
			<Features
				features={["mobile", "desktop", "openSource"]}
			/>
			<Container>
				<Stack>
					<Divider inset class="mt-4" />
					<h3 class="text-center font-bold text-3xl mt-32">
						Close to the community
					</h3>
					<Card disableGutters>
						<a
							href={APP.discordInvite}
							target="_blank"
							rel="noreferrer noopener"
						>
							<ListItem
								icon="discord"
								title="Discord"
								subtitle="Join our server!"
								button
								divider
							/>
						</a>
						<a
							href={APP.githubRepo}
							target="_blank"
							rel="noreferrer noopener"
						>
							<ListItem
								icon="github"
								title="GitHub"
								subtitle="notangelmario/paquet"
								button
								divider
							/>
						</a>
						<a
							href={APP.githubRepo + "/blob/main/CONTRIBUTING.md"}
							target="_blank"
							rel="noreferrer noopener"
						>
							<ListItem
								icon="file-description"
								title="Contribution Guide"
								subtitle="Learn how to contribute to Paquet"
								button
							/>
						</a>
					</Card>
					<h3 class="text-center font-bold text-3xl mt-32">
						Built with{" "}
						<span class="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
							the future
						</span>{" "}
						in mind.
					</h3>
					<div class="max-w-screen-sm w-full mx-auto">
						<ul class="list-disc list-outside ml-4 text-lg">
							<li>
								<a
									class="underline"
									href="https://deno.land/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<Icon
										name="deno"
										inline
										size={18}
									/>{" "}
									Deno
								</a>{" "}
								&middot; Because we love <b>web standards</b>
							</li>
							<li>
								<a
									class="underline"
									href="https://fresh.deno.dev/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<Icon
										name="fresh"
										inline
										size={18}
									/>{" "}
									Fresh
								</a>{" "}
								&middot; Because we love <b>performance</b>
							</li>
							<li>
								<a
									class="underline"
									href="https://supabase.com/"
									target="_blank"
									rel="noreferrer noopener"
								>
									<Icon
										name="supabase"
										inline
										size={18}
									/>{" "}
									Supabase
								</a>{" "}
								&middot; Because we love <b>open source</b> and
								{" "}
								<b>privacy</b>
							</li>
						</ul>
					</div>
					<h3 class="text-center font-bold text-3xl mt-32">
						Try it yourself
					</h3>
					<Card
						inset
						class="bg-light dark:bg-dark flex flex-row flex-wrap gap-4"
					>
						<img
							class="rounded w-20 h-20 shadow-outset-light dark:shadow-outset-dark bg-light-light dark:bg-dark-light"
							src="/android-chrome-192x192.png"
						/>
						<div class="flex-1">
							<h2 class="text-3xl">
								Paquet
							</h2>
							<p class="opacity-50">
								notangelmario
							</p>
						</div>
						<div class="min-w-full space-y-2 sm:min-w-[30%]">
							<a href="/home">
								<Button
									icon="external-link"
									fullWidth
								>
									Open
								</Button>
							</a>
							<Button
								outlined
								icon="hearts"
								disabled
								class="max-w-screen-sm w-full mx-auto"
							>
								I already love Paquet
							</Button>
						</div>
					</Card>
				</Stack>
			</Container>
		</>
	);
}

export const handler: Handler = async (req, ctx) => {
	const url = new URL(req.url);

	if (url.searchParams.get("utm_source") === "pwa") {
		return new Response("", {
			status: 307,
			headers: {
				"Location": "/home?utm_source=pwa",
			},
		});
	}

	const { data: apps } = await supabase.from("random_apps")
		.select("id, icon")
		.limit(8);

	return ctx.render({ apps });
};
