import cookieparser from 'cookieparser'

export const actions = {
  nuxtServerInit({ commit }, { req }) {
 
      if (req && req.headers && req.headers.cookie){
        const parsed = cookieparser.parse(req.headers.cookie)

        if (parsed.userjwt == 'null')
        commit('auth/setUser', null)
        else 
        commit('auth/setUser', parsed.userjwt)
      }

            /* parse cart */

            let cart
            if (req && req.headers && req.headers.cookie) {
              const parsed = cookieparser.parse(req.headers.cookie)
              cart = (parsed.cart && JSON.parse(parsed.cart)) || []
           
            }
      
            commit('cart/setItems', cart)
      
            /* parse cart */
      
  }
}

/*
export const state = {
    x: 'global x value'
}

export const getters = {
    modifiedx(state){
        return state.x + 'modified'
    }
}

export const mutations = {
    updatex(state, payload){
        state.x = payload
    }
}
*/
/*
export const actions = {
    updatexaction(context, payload){

        context.commit('updatex',payload)

    },
    async getip(context){
        let ip = await this.$axios.$get('http://icanhazip.com/')
        context.commit('updatex',ip)
    }
}
*/