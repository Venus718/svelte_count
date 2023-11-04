import { writable } from "svelte/store";

const initStore = () => {
    const initialCounter: Array<number> = [0,0];

    const { subscribe, set, update } = writable(initialCounter);

    return {
        subscribe,
        inc: ( index: number ) => update((value) => value.map((v, i) => i === index ? v++ : v)),
        dec: ( index: number ) => update((value) => value.map((v, i) => i === index ? v-- : v)),
        reset: ( index: number ) => update((value) => value.map((v, i) => i === index ? -1 : v).filter((vv) => vv != -1)) 
    }
}

export const values = initStore();