<script lang="ts">
    import { Form } from '$components/form';
    import { Container, Title } from '$components';
    import Fields from './Fields.svelte';
    import type { Idea } from '$models/idea';
    import * as yup from 'yup';

    type IdeaFormValues = Pick<Idea, 'description' | 'title'>;

    const validationSchema = yup.object().shape({
        description: yup
            .string()
            .required(
                'Une description est attendue, elle permetra au lecteur de mieux comprendre les détails de votre idée',
            ),
        title: yup.string().required("Un titre est nécessaire pour cerner votre idée en un coup d'oeil"),
    });

    const initialValues: IdeaFormValues = { description: '', title: '' };
    const handleSubmit = (idea: IdeaFormValues) => console.log('Submited:', idea);
</script>

<Container class="max-w-2xl">
    <Title class="m-8 font-extrabold">Nouvelle idée</Title>
    <Form let:errors let:form let:handleChange {initialValues} onSubmit={handleSubmit} {validationSchema}>
        <Fields slot="fields" {errors} {form} {handleChange} />
    </Form>
</Container>
