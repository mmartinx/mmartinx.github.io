import PerksContext from "./PerksContext"
import {useContext, useMemo, useState} from "react";
import {Button} from "react-bootstrap";

const PerksDetail = () => {
    const {perks, perkPointsRemaining, perkLevelRequired} = useContext(PerksContext)
    const [show, setShow] = useState(true)
    const requiredLevel = useMemo(() => Math.max(perkLevelRequired, 50 - perkPointsRemaining()), [perkLevelRequired, perkPointsRemaining])
    return (
        <>
            <div>
                <div style={{display: "flex", alignItems: "center", marginBottom: 10}}>
                    <h3 style={{marginBottom: 0}}>Perks Added</h3>
                    {
                        perks.length > 0 &&
                        <Button
                            size={"sm"}
                            onClick={() => setShow(!show)}
                            style={{
                                padding: "1.6px 3px",
                                marginLeft: 10,
                                height: 24,
                                alignItems: "center",
                                display: "flex"
                            }}
                        >
                            {
                                show ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                         height="16"
                                         fill="currentColor" className="bi bi-dash"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                         height="16"
                                         fill="currentColor" className="bi bi-plus"
                                         viewBox="0 0 16 16">
                                        <path
                                            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg>
                            }
                        </Button>
                    }
                </div>
                <div style={{paddingBottom: 10, color: "#505050"}}>
                    <span>
                        Requires level: {requiredLevel}
                    </span>
                    <span className={"float-end"}>
                        Remaining perk points: {perkPointsRemaining()}
                    </span>
                </div>
            </div>
            <div>
                {
                    show &&
                    Object.values(
                        perks.reduce((obj, it) => {
                            const {name, ranks, rank, level, description} = it
                            const target = obj[it.name] || {name, ranks, ranked: []}
                            target.ranked.push({rank, level, description})
                            obj[it.name] = target
                            return obj
                        }, {} as any)
                    ).map(({name, ranked, ranks}: any) =>
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
            </div>
        </>
    )
}

export default PerksDetail
