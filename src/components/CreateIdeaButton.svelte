<script lang="typescript">
    import ButtonLink from './ButtonLink.svelte';
    import Icon, { Plus } from 'svelte-hero-icons';
</script>

<ButtonLink href="/ideas/new">
    <div class="flex items-center">
        <Icon class="w-5 text-green-500" src={Plus} />
        <p class="ml-4">Nouvelle idée</p>
    </div>
</ButtonLink>
