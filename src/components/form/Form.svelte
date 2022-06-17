<script lang="ts">
    import { createForm } from 'svelte-forms-lib';

    // TODO: Find a way to type initialValues and onSubmit correctly
    export let initialValues,
        onSubmit: (values) => void,
        submitLabel = 'Valider',
        validationSchema = undefined;

    const { errors, form, handleChange, handleSubmit } = createForm({
        initialValues,
        onSubmit,
        validationSchema,
    });
</script>

<form on:submit={handleSubmit} class="w-full">
    <slot name="fields" {errors} {form} {handleChange} />
    <div>
        <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            {submitLabel}
        </button>
    </div>
</form>
