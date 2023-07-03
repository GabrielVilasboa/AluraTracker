import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/projetos/Projetos.vue'
import PFormulario from '@/views/projetos/Formulario.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    },
    {
        path: '/projetos/novo',
        name: 'novo projeto',
        component: PFormulario
    },
    {
        path: '/projetos/:id',
        name: 'Editar projeto',
        component: PFormulario,
        props: true
    },
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;