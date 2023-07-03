
<template>
<BoxView>
    <div class="columns">
        <div class="column is-7">
            {{tarefa.descricao || 'tarefa sem descrição!'}}
        </div>
        <div class="column">
            <CronometroForm :tempoEmSegundos = "tarefa.duracaoEmSegundos"/>
        </div>
    </div>
</BoxView>
</template>

<script lang="ts">

import { PropType, defineComponent } from 'vue';
import CronometroForm  from "./CronometroForm.vue";
import ITarefas from '@/interfaces/ITarefa';
import BoxView from './BoxView.vue';

export default defineComponent({
    name: "TarefaItem",
    components: {
    CronometroForm,
    BoxView
},
    props:{
        tarefa : {
            type: Object as PropType<ITarefas>,
            required:true,
        }
    }


})


</script>

<style scoped>

</style>