<script lang="ts">
    let className = '';
    export { className as class };
</script>

<button class={`rounded-md shadow-md hover:shadow-lg ${className}`}>
    <slot />
</button>
