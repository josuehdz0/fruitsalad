import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";
import { saveState } from "../Utils/Store.js";

class PlayersService{
  createPlayer(formData) {
    let newPlayer = new Player(formData)
    console.log(newPlayer);
    appState.players.push(newPlayer)
    saveState('players', appState.players)
    appState.emit('players')
  }

  setActivePlayer(playerId){
    const player = appState.players.find(p => p.id == playerId)
    if (!player) {
      throw new Error('No player')
    }
    appState.player = player
    console.log(appState.player);
  }

}

export const playersService = new PlayersService()