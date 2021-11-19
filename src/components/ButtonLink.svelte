<script lang="typescript">
    import Button from './Button.svelte';

    let className = '';
    export { className as class };
    export let href: string;
</script>

<a {href}>
    <Button class={`p-2 ${className}`}>
        <slot />
    </Button>
</a>
