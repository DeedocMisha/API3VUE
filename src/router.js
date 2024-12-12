import { createRouter,createWebHashHistory } from "vue-router";

import MaIne from "./components/MaIne.vue";
import Login from "./components/Login.vue";
import PaY from '@/components/PaY.vue'


export default createRouter ({
    history: createWebHashHistory(),
    routes: [
        {path: '/',component:MaIne},
        {path: '/login',component:Login},
        {path: '/pays',component:PaY},
    ]
})
