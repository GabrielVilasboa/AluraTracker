<template>
    <section class="projetos">
        <h1 class="title"> Projetos </h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td> {{ projeto.id }}</td>
                    <td> {{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/store/';
import { computed } from '@vue/reactivity';
export default defineComponent({
    name: 'PFormulario',
    props: {
        id: {
            type: String
        }
    },

    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }
    },
    data() {
        return {
            nomeDoProjeto: "",
        };
    },
    methods: {
        salvar() {

            if (this.id) {
                this.store.commit('ALTERA_PROJETO', {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })

            } else {
                this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
            }
            this.nomeDoProjeto = ''
            this.$router.push('/projetos')
        }
    },

    setup() {
        const store = useStore()
        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
    }

})

</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>