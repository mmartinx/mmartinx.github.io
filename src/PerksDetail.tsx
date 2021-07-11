import PerksContext, {Perks} from "./PerksContext"

const PerksDetail = () => {
    return (
        <PerksContext.Consumer>
            {
                ({perks}: Perks) => {
                    const map = perks
                    .reduce((obj, it) => {
                        const {name, ranks, rank, level, description} = it
                        const target = obj[it.name] || {name, ranks, ranked: []}
                        target.ranked.push({rank, level, description})
                        obj[it.name] = target
                        return obj
                    }, {} as any)
                    return Object.values(map).map((value: any) =>
                        <>
                            <p>{value.name}: {value.ranked.length} / {value.ranks}</p>
                            {
                                value.ranked.map((rank: any) =>
                                    <p style={{
                                        paddingLeft: 20,
                                        fontSize: 12
                                    }}>{rank.description}</p>)
                            }
                        </>
                    )
                }
            }
        </PerksContext.Consumer>
    )
}

export default PerksDetail
