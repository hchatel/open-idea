<script>
    import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
    <title>My test app</title>
</svelte:head>

<Nav />

<slot />

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
