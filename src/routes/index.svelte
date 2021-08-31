<script lang="typescript">
    import IdeaList from '$components/IdeasList/IdeaList.svelte';
    import type { Idea } from '$models/idea';
    import ideasString from '../ideas.json';

    const ideas = ideasString.map(({ createdAt, ...idea }) => ({ ...idea, createdAt: new Date(createdAt) })) as Idea[];
</script>

<IdeaList {ideas} />
