<script lang="ts">
    import Input from '$components/form/Input.svelte';
    import type { Writable } from 'svelte/store';

    export let errors: Writable<Record<string | number | symbol, string>>,
        form: Writable<Record<string, string | number | string[]>>,
        handleChange: () => void;
</script>

<Input label="Titre" name="title" placeholder="Mon idée" {errors} {form} {handleChange} />
<Input
    label="En Bref"
    name="description"
    placeholder="Décrivez votre idée en quelques mots..."
    type="textarea"
    rows={5}
    {errors}
    {form}
    {handleChange}
/>
