<script lang="ts">
    import Button from '$components/Button.svelte';
    import { Thumb } from '$utils/types/vote';
    import { Icon, ThumbDown, ThumbUp } from 'svelte-hero-icons';

    export let thumb: Thumb;
    export let count: number;

    const thumbUp = Thumb.UP === thumb;
    const color = thumbUp ? 'text-green-400' : 'text-red-400';
    const icon = thumbUp ? ThumbUp : ThumbDown;
</script>

<Button class="flex justify-evenly flex-col items-center mr-2 w-14">
    <Icon class={`w-5 h-5 ${color}`} src={icon} />
    <div class="text-gray-600 text-sm">{count}</div>
</Button>
