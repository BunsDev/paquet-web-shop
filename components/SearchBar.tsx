import type { JSX } from "preact";
import Icon from "@/components/Icon.tsx";

export type Props = {
	text?: string;
};

export default function SearchBar(
	props?: Props & JSX.HTMLAttributes<HTMLDivElement>,
) {
	return (
		<div
			{...props}
			class={`
				flex flex-row
				items-center justify-between
				w-full rounded
				bg-paper-light dark:bg-paper-dark
				${props?.class || ""}
			`}
		>
			<Icon
				name="search"
				class="ml-2 opacity-50"
				width={18}
				height={18}
			/>
			<input
				autocomplete="off"
				name="q"
				value={props?.text}
				type="text"
				placeholder="Search..."
				class={`
					p-2 w-full
					bg-transparent
					border-none
					outline-none
					text-black dark:text-white
				`}
			/>
		</div>
	);
}
