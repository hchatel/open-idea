<script lang="typescript">
    import IdeaCard from './IdeaCard.svelte';
    import type { Idea } from '$models/idea';
    import Container from '../Container.svelte';

    export let ideas: Idea[];
</script>

<Container>
    {#each ideas as idea}
        <IdeaCard {idea} />
    {/each}
</Container>
