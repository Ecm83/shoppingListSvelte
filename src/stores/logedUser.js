//@ts-nocheck
import { writable } from "svelte/store";

const logedUser = () => {
  const { subscribe, set } = writable(null)
  
  return {
    subscribe,
    setUser: (user) => {
      set(user)
    }
  }
}

export const user = logedUser() 
