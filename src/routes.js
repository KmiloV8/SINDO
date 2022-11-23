import formulario from './pages/FormData.vue'
import Detail from './pages/DetailsAll.vue'
import PrintData from './pages/PrintData.vue'
import home from './pages/HomeAll.vue'
import productos from './pages/ProductosAll.vue'
import sobreNosotros from './pages/SobreNosotros.vue'


export const routes= [
    {path:'/formulario', component:formulario},
    {path:'/detail/:index', component:Detail},
    {path:'/print', component:PrintData},
    {path:'/home', component:home},
    {path:'/productos', component:productos},
    {path:'/sobreNosotros', component:sobreNosotros},

]