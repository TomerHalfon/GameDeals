import { GiveawayType } from "./giveaway-type.enum"
import { GiveawaysSortingOptions } from "./giveaways-sorting-options.enum"
import { Platforms } from "./platforms.enum"

export class GiveawaysFilterOptions {
    platforms?: Platforms[]
    types?: GiveawayType[]
    sortBy?: GiveawaysSortingOptions[]
}