<script lang="ts">
    let className = '';
    export { className as class };
</script>

<div class="container mx-auto px-4 flex flex-col items-center {className}">
    <slot />
</div>
