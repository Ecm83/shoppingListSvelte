import { writable } from "svelte/store";

const createUser = () => {
  const { subscribe, set } = writable(null)
  
  return {
    subscribe,
    setUser: (/** @type {any} */ user) => {
      set(user)
    }
  }
}

export const user = createUser()