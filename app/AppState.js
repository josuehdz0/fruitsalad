import { Player } from "./Models/Player.js"
import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  
  /** @type {import('./Models/Player').Player|null} */
  player = null
  /** @type {import('./Models/Player').Player[]} */
  players = [
    new Player (
      {
        name: 'Jeremy',
        score: 4
      }
    ),
    new Player (
      {
        name: 'Jeff',
        score: 2
      }
    ),

  ]



}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
