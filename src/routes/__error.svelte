<script context="module" lang="ts">

export function load({ error, status }: any) {
        return {
            props: {
                message: `${status}: ${error.message}`
            }
        };
    }

</script>

<script>

    export let message = "";

</script>

<h1 style="text-align:center;font-size:5rem">{message}</h1>