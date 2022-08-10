<script context="module" lang="ts">
    import rawIdeas from '../../ideas.json';

    /** @type {import('./__types/[slug]').Load} */
    export const load = async ({ params }: { params: { id: string } }) => {
        const rawIdea = (rawIdeas as IdeaRaw[]).find(({ id }) => params.id === id);

        if (rawIdea) {
            const idea: Idea = {
                ...rawIdea,
                createdAt: new Date(rawIdea.createdAt),
            };
            return {
                props: {
                    idea,
                },
            };
        }

        return {
            status: 404,
            error: new Error(`Could not load idea ${params.id}`),
        };
    };
</script>

<script lang="ts">
    import { Container, VoteButtons } from '$components';
    import type { Idea, IdeaRaw } from '$models/idea';

    export let idea: Idea;
    const { createdAt, description, downvotes, title, upvotes } = idea;
</script>

<Container class="max-w-2xl">
    <h1 class=" m-8 text-3xl font-extrabold">{title}</h1>
    <div class="w-full pt-5 pb-5 block border-b-2">
        <h2 class="text-lg font-bold">En bref</h2>
        <div class="block mt-3">
            {description}
        </div>
    </div>
    <div class="w-full pt-6 flex justify-between">
        <p class="text-gray-600 text-xs">
            {createdAt.toLocaleString([], {
                dateStyle: 'short',
                timeStyle: 'short',
            })}
        </p>
        <VoteButtons {downvotes} {upvotes} />
    </div>
</Container>
