import { createStore } from 'vuex'
import Moduleuser from "@/store/user";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        user: Moduleuser,
    }
})
