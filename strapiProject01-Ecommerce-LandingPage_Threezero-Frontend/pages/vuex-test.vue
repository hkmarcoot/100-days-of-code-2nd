<template>
    <div>
        {{ globalx }}
        <button @click='mutatex'>Mutate</button>
        <button @click='actionx'>Action</button>
        <button @click='getip'>getip</button>
        <button @click='jmapmutation'>jmapmutation</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex' 
export default {
    computed:{
        globalx(){
            // return this.$store.state.x
            return this.$store.getters.modifiedx
        }

    },
    methods:{
        ...mapMutations({
            nowupdatex: 'updatex'
        }),
      /*  mutatex(){
            this.$store.commit('updatex','new value')
        },
        actionx(){
            this.$store.dispatch('updatexaction','new action value')
        },
        getip(){
            this.$store.dispatch('getip')
        }, */
        jmapmutation(){
            this.nowupdatex('very nice map value')
        }
    }
}
</script>