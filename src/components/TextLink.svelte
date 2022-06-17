<script lang="ts">
    let className = '';
    export { className as class };
    export let href: string;
    export let label: string;
</script>

<a {href} class={`${className} hover:underline font-bold`}>{label}</a>
