<template>
<main class=" columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuroAtivo }">
  <div class="column is-one-quarter">
    <BarraLateral @aoTemaAlterado="trocarTema"/>
  </div>
  <div class="column is-tree-quarter conteudo">
    <router-view></router-view>
  </div>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import ITarefa from './interfaces/ITarefa';


export default defineComponent({
  name: 'App',
  components:{
    BarraLateral,
},
  data (){
    return {
      tarefas: [] as ITarefa[],
      mensagemProdutividade: "Você não está muito produtivo hoje",
      modoEscuroAtivo: false
    }
  },
  methods: { 
    trocarTema(modoEscuroAtivo : boolean){
      this.modoEscuroAtivo = modoEscuroAtivo
    }
  },
});
</script>

<style>
.lista{
  padding: 1rem;
}

main{
  min-height: 100vh;
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro{
  min-height: 100vh;
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo{
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>
