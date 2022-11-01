import home from './pages/HomeAll.vue'
import productos from './pages/ProductosAll.vue'
import sobreNosotros from './pages/SobreNosotros.vue'

export const routes= [
    {path:'/home', component:home},
    {path:'/productos', component:productos},
    {path:'/sobreNosotros', component:sobreNosotros}
]