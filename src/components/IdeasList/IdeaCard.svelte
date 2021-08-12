<script lang="typescript">
    import type { Idea } from "src/models/idea";
    import Icon, { ThumbDown, ThumbUp } from 'svelte-hero-icons';


    export let idea: Idea;

    const { createdAt, description, downvotes, title, upvotes } = idea;
    const votes = [
        {
            color: "text-green-400",
            icon: ThumbUp,
            count: upvotes,
        },
        {
            color: "text-red-400",
            icon: ThumbDown,
            count: downvotes,
        },
    ]
</script>


{#if idea}
    <div class="shadow-md rounded-xl margin-top-2 p-4 my-2 max-w-3xl">
        <div class="flex mb-6">
            <div class="flex-grow">
                <h3 class="text-xl">{title}</h3>
                <p class="text-gray-600 text-xs">{createdAt.toLocaleString([], {
                    dateStyle: "short",
                    timeStyle: "short",
                })}</p>
            </div>
            <div class="flex">
                {#each votes as { color, count, icon }}
                    <button class="flex justify-evenly cursor-pointer rounded-md flex-col items-center mr-2 shadow-md hover:shadow-lg w-14">
                        <Icon class={`w-5 h-5 ${color}`} src="{icon}" />
                        <div class="text-gray-600 text-sm">{count}</div>
                    </button>
                {/each}
            </div>
        </div>
        <p class="line-clamp-3 text-gray-800 text-base">{description}</p>
        
    </div>
{/if}

