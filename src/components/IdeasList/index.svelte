<script lang="typescript">
    import IdeaCard from './IdeaCard.svelte';
    import type { Idea } from '../../models/idea';

    export let ideas: Idea[];
</script>

<div class="container mx-auto px-4 flex flex-col items-center">
    {#each ideas as idea}
        <IdeaCard idea={idea} />
    {/each}
</div>
