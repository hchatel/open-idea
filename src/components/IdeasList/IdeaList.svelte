<script lang="ts">
    import IdeaCard from './IdeaCard.svelte';
    import type { Idea } from '$models/idea';
    import Container from '../Container.svelte';

    export let ideas: Idea[];
</script>

<Container class="lg:max-w-3xl">
    {#each ideas as idea}
        <IdeaCard {idea} />
    {/each}
</Container>
