<script lang="typescript">
    import IdeaCard from '../components/IdeaCard.svelte';
    import type { Idea } from '../models/idea';

    const idea: Idea =  {
        createdAt: new Date(),
        description: 'Dire "Titre !" quand un collègue dis quelmque chose sujet à interprétation qui pourrait être assimilé à un contenu NSFW.',
        downvotes: 36,
        title: "Titre",
        upvotes: 3000,
    }
</script>

<div class="container mx-auto px-4 flex flex-col items-center">
    <IdeaCard idea={idea} />
</div>
