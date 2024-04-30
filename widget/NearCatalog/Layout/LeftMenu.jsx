
const path = props.indexPath;
const cat = props.cat;
const listItems = [{l:"",t:"All"},{l:"?cat=community",t:"Community"},{l:"?cat=dapps",t:"DApps",menuItems:[{l:"?cat=defi",t:"DeFi"},{l:"?cat=dex",t:"DEX"},{l:"?cat=exchanges",t:"Exchanges"},{l:"?cat=launchpads",t:"Launchpads"},{l:"?cat=lending",t:"Lending"},{l:"?cat=stablecoins",t:"Stablecoins"},{l:"?cat=yield_aggregators",t:"Yield Aggregators"},{l:"?cat=gaming",t:"Gaming"},{l:"?cat=metaverse",t:"Metaverse"},{l:"?cat=social",t:"Social"},{l:"?cat=music",t:"Music"}]},{l:"?cat=ecosystem",t:"Ecosystem",menuItems:[{l:"?cat=dao",t:"DAO"},{l:"?cat=regional_hubs",t:"Regional Hubs"},{l:"?cat=funding",t:"Funding"},{l:"?cat=guilds",t:"Guilds"},{l:"?cat=education",t:"Education"},{l:"?cat=refi",t:"ReFi"},{l:"?cat=events",t:"Events"}]},{l:"?cat=aurora",t:"Aurora"},{l:"?cat=octopus",t:"Octopus"},{l:"?cat=infrastructure",t:"Infrastructure",menuItems:[{l:"?cat=wallets",t:"Wallets"},{l:"?cat=validators",t:"Validators"},{l:"?cat=explorers",t:"Explorers"},{l:"?cat=bridges",t:"Bridges"},{l:"?cat=storage",t:"Storage"}]},{l:"?cat=nft",t:"NFT",menuItems:[{l:"?cat=marketplaces",t:"Marketplaces"},{l:"?cat=collectibles",t:"Collectibles"}]},{l:"?cat=utilities",t:"Utilities",menuItems:[{l:"?cat=devtooling",t:"Dev Tooling"},{l:"?cat=oracles",t:"Oracles"},{l:"?cat=security",t:"Security"},{l:"?cat=data",t:"Data"},{l:"?cat=analytics",t:"Analytics"},{l:"?cat=portfolio",t:"Portfolio"},{l:"?cat=on_off_ramps",t:"On/Off Ramps"},{l:"?cat=payments",t:"Payments"}]}];
return (
    <>
        {/* the menu */}
        <div className="awesome-aside-menu menu menu-nav">
            {
                listItems.map( e => {
                    console.log("the path is:" , path , "cat: " , cat);
                    let subMenu = e.menuItems ? e.menuItems.map(s => { return(
                        <div className="menu-item"><a key={s.t} preventScrollReset={true} className={`${ ( cat == ( s.l.length > 0 ? s.l.substring(5) : "" ) ? " active " : "" )+ "btn" }`}
                         href={`/${path + (s.l ? s.l : "") }`}>{s.t}<span className="menu-badge d-none">6</span></a></div>
                    ) }) : false;
                    return(
                        <div className="menu-parent"><a key={e.t}  preventScrollReset={true} className={`${ ( cat == ( e.l.length > 0 ? e.l.substring(5) : "" ) ? " active " : "" )+ "btn btn-lg" }`} 
                            href={`/${path + (e.l ? e.l : "") }`}>{e.t}<span className="menu-badge d-none">9</span></a>
                            { subMenu ?  <div className="menu menu-nav">{subMenu}</div> : <></> }
                        </div>
                    )
                } )
            }
            
            
        </div>
        {/* end the menu */}
    </>
)