<script lang="typescript">
    import { Container, CreateIdeaButton, IdeaList, Title } from '$components';
    import type { Idea } from '$models/idea';
    import ideasString from '../ideas.json';

    const ideas = ideasString.map(({ createdAt, ...idea }) => ({ ...idea, createdAt: new Date(createdAt) })) as Idea[];
</script>

<Container class="!items-end lg:max-w-3xl">
    <div class="flex justify-between w-full mt-6 mb-6">
        <Title>Les dernières idées</Title>
        <CreateIdeaButton />
    </div>
</Container>
<IdeaList {ideas} />
