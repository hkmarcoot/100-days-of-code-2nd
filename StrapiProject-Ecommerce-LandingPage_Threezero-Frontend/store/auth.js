import Cookies from 'js-cookie'

export const state = {}

export const getters = {
    getuserjwt(state){
        if (state.userjwt)
            return 'Bearer '+ state.userjwt
        else
            return null
    }
}

export const mutations = {

    setUser(state, payload){
        state.userjwt = payload
        Cookies.set('userjwt',payload)
    },
    logout(state){
        state.userjwt = null
        Cookies.set('userjwt',null)
    }


}