import {createStore} from 'vuex'

export const store = createStore({
    state:{
        personas:[{usuario:'Marcela Orrego', password:'marce@foto.com'}]
    },
    getters:{
        getPersonas:state => {
            return state.personas
        },
        getPersona:(state) => (index) => {
            return state.personas[index]
        }
    },
    mutations:{
        addPersona(state, payload){
            state.personas.push(payload)
        }
    },
    actions:{
        addPersona(context, payload){
            context.commit('addPersona', payload)
        }
    }
})