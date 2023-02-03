import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawPlayers(){
  let players = appState.players
  let template = ''
  players.forEach(p => template += p.playersScoreTemplate)
  setHTML('players', template)
}

// function _drawPlayer() {
//   // @ts-ignore
//   setText('playerModal', `${appState.player.name} ${appState.player.score}`)
//   setHTML('player-modal-body', appState.player?.PlayerDetailTemplate)
// }

export class PlayersController{

  constructor(){
    _drawPlayers()
    appState.on('players',_drawPlayers)
    // appState.on('players',_drawPlayer)


  }

  createPlayer(){
    try {
      window.event?.preventDefault()
      const form = window.event.target
      const formData = getFormData(form)
      console.log(formData);
      playersService.createPlayer(formData)
    } catch (error) {
      
    }
  }

  setActivePlayer(playerId){
    try {
      playersService.setActivePlayer(playerId)
    } catch (error) {
      Pop.error(error)
    }
  }
}