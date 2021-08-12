<script lang="typescript">
    import IdeasList from '../components/IdeasList';
    import type { Idea } from '../models/idea';
    import ideasString from '../ideas.json';

    const ideas = ideasString.map(({ createdAt, ...idea }) => ({ ...idea, createdAt: new Date(createdAt) })) as Idea[];
</script>

<IdeasList ideas={ideas} />
