import {User} from './user'

export interface Marketplace{
    listingId? : number,
    itemId? : number,
    quantity : number,
    unitPrice: number,
    sellerId? : number
}