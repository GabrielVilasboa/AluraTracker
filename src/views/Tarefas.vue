<template>
    <FormularioPrincipal @aoSalvarTarefa = "salvarTarefa"/>
    <div class="lista">
      <BoxView v-if="listaEstaVazia">
          {{ mensagemProdutividade }} <span class="has-text-weight-bold"></span>
        </BoxView>
      <TarefaItem v-for="(tarefa, index) in tarefas" :tarefa="tarefa" :key="index" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormularioPrincipal from '../components/FormularioPrincipal.vue';
import TarefaItem from '../components/TarefaItem.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxView from '../components/BoxView.vue';

export default defineComponent({
  name: 'AppTarefas',
  components:{
    FormularioPrincipal,
    TarefaItem,
    BoxView
},
  data (){
    return {
      tarefas: [] as ITarefa[],
      mensagemProdutividade: "Está na hora de começar a trabalhar!",
    }
  },
  computed: {
    listaEstaVazia(): boolean{
        return this.tarefas.length === 0
    }
  },
  methods: { 
    salvarTarefa (tarefa : ITarefa){
      this.tarefas.push(tarefa)
    },    
  },
});
</script>

