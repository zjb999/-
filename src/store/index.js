import { createStore } from 'vuex'

const moduleA = {

    state: {
        username: "moduleA"
    },
    getters: {
        newName(state) {
            return state.username + "/////"
        }
    },
    mutations: {
        updateName(state) {
            state.username = "moduleAAAAAA"
        }
    }
}
const moduleB = {
    namespaced: true,
    state: {
        username: "moduleB"
    },
    getters: {
        newName(state) {
            return state.username + "/////"
        }
    },
    mutations: {
        updateName(state, payload) {
            state.username = payload
        }
    },
    actions: {
        update(ctx, payload) {
            setTimeout(() => {
                ctx.commit("updateName", payload)
            }, 1000)

        }
    },
}
export default createStore({
    // state: {
    //     username: "zjb"
    // },
    // mutations: {
    //     updateName(state, payload) {
    //         state.username = payload
    //     }
    // },
    // actions: {
    //     update(ctx, payload) {
    //         setTimeout(() => {
    //             ctx.commit("updateName", payload)
    //         }, 1000)

    //     }
    // },
    modules: {
        moduleA,
        moduleB
    }
})