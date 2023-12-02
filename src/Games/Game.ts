import type { PlayerInfo } from "../sockets/types"
import { TicTacToe } from "./TicTacToeGame"
import {RockPaperScissors} from "./RPS"

interface Game {
  startGameLoop(): void
  playerLeave(playerId: string): void
  addPlayer(playerInfo: PlayerInfo): boolean
  move(playerId: string, action: unknown): void
}

type GameState<TGameState, TPlayerState> = {
  config: {
    timeout: number,
    maxPlayers: number
    //TODO rondas
  },
  state: TGameState,
  players: Record<string, TPlayerState>
}

export {
  Game,
  GameState,
  TicTacToe,
  RockPaperScissors
}
