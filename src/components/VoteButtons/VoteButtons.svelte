<script lang="typescript">
    import { Thumb } from '$utils/types/vote';
    import VoteButton from './VoteButton.svelte';

    export let downvotes: number;
    export let upvotes: number;
</script>

<div class="flex">
    <VoteButton count={upvotes} thumb={Thumb.UP} />
    <VoteButton count={downvotes} thumb={Thumb.DOWN} />
</div>
