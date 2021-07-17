import data from "./perks.json"
import {Perk} from "./PerksContext";

export type PerkTreePerkRank = { rank: number; level: number; description: string; }

export type PerkTreePerk = { rank: number; name: string; img: string; ranks: number; ranked: PerkTreePerkRank[]; }

export type PerkTreeCategory = { special: string; perks: PerkTreePerk[] }

export const PerksData = data as PerkTreeCategory[]

export const Perks = PerksData
.flatMap((it: any) => {
    const {special, perks} = it
    return perks.map((it: any) => ({special, ...it}))
})
.flatMap((it: any) => {
    const {special, name, rank: requiredSpecial, ranked} = it
    return ranked.map((it: any) => {
        const {level, rank, description} = it
        return {
            special,
            name,
            level,
            rank,
            requiredSpecial,
            description,
            ranks: ranked.length
        }
    })
}) as Perk[]
