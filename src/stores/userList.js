//@ts-nocheck
import { writable } from "svelte/store";

const userList = () => {
  const { subscribe, set } = writable(null)
  
  return {
    
    subscribe,
    setUser: (user) => {
      set(user)
    }
  }
}


export const list = userList()