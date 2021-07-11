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
                    return Object.values(map).map(({name, ranked, ranks}: any) =>
                        <span key={name}>
                            <p>{name}: {ranked.length} / {ranks}</p>
                            {
                                ranked.map((rank: any) =>
                                    <p
                                        key={rank.level}
                                        style={{
                                            paddingLeft: 20,
                                            fontSize: 12
                                        }}
                                    >
                                        {rank.description}
                                    </p>
                                )
                            }
                        </span>
                    )
                }
            }
        </PerksContext.Consumer>
    )
}

export default PerksDetail
