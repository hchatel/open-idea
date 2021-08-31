<script lang="typescript">
    import type { Idea } from '$models/idea';
    import TextLink from '../../components/TextLink.svelte';
    import VoteButtons from '../VoteButtons/VoteButtons.svelte';

    export let idea: Idea;

    const { createdAt, description, downvotes, id, title, upvotes } = idea;
</script>

<div class="shadow-md rounded-xl margin-top-2 p-4 my-2 max-w-3xl">
    <div class="flex mb-6">
        <div class="flex-grow">
            <h3 class="text-3xl">{title}</h3>
            <p class="text-gray-600 text-xs">
                {createdAt.toLocaleString([], {
                    dateStyle: 'short',
                    timeStyle: 'short',
                })}
            </p>
        </div>
        <VoteButtons {downvotes} {upvotes} />
    </div>
    <p class="line-clamp-3 text-gray-800 text-base">{description}</p>
    <TextLink class="block mt-4 text-rose-400" href={`ideas/${id}`} label="Lire plus" />
</div>
