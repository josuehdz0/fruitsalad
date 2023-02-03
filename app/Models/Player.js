import { generateId } from "../Utils/generateId.js";

export class Player{
constructor(data){
  this.id = generateId()
  this.name = data.name
  this.score = data.score || 0
}

get playersScoreTemplate(){
  return`
  <div class="d-flex justify-content-between">
                <h6 onclick="app.playersController.setActivePlayer('${this.id}')">${this.name}</h6>
                <h6>Highscore: ${this.score}</h6>
              </div>
  `
}

get PlayerDetailTemplate(){
  return`
  <div class="d-flex justify-content-between">
                <h6>${this.name}</h6>
                <h6>Highscore: ${this.score}</h6>
              </div>
  `
  
}



}