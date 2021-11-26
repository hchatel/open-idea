<script lang="typescript">
    import type { Writable } from 'svelte/store';

    type InputType = 'email' | 'password' | 'number' | 'text' | 'textarea';

    export let errors: Writable<Record<string | number | symbol, string>>,
        form: Writable<Record<string, string | number | string[]>>,
        handleChange: () => void,
        label: string,
        name: string,
        placeholder: string = '',
        rows: number = 1,
        type: InputType = 'text';

    $: error = $errors[name];

    // A way to dynamically set input type : https://github.com/sveltejs/svelte/issues/3921
    const setInputType = (node) => {
        node.type = type;
    };
</script>

<div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" for={name}>
        {label}
    </label>
    {#if 'textarea' === type}
        <textarea
            class={`shadow appearance-none border ${
                error ? 'border-red-500' : ''
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id={name}
            {placeholder}
            {name}
            {rows}
            on:change={handleChange}
            bind:value={$form[name]}
        />
    {:else}
        <input
            class={`shadow appearance-none border ${
                error ? 'border-red-500' : ''
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id={name}
            {placeholder}
            {name}
            on:change={handleChange}
            bind:value={$form[name]}
            use:setInputType
        />
    {/if}
    {#if error}
        <p class="text-red-500 text-xs italic mt-1">
            {error}
        </p>
    {/if}
</div>
