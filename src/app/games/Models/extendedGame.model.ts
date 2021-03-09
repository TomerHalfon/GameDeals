import { Deal } from "./deal.model"

export class ExtendedGame{
    
    gameID: number
    title:string
    steamAppID: number
    thumb: string
    cheapestPriceEver:{price:number,date:string}
    deals:Deal[]
}