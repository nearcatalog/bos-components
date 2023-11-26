
return (
    <>
        {/* the menu  */}
        <div className="awesome-aside-menu menu menu-nav">
            <div className="menu-parent"><a className="btn btn-lg active" title="All" href={`/${props.componentPath}.App`}>All<span className="menu-badge">1093</span></a></div>
            <div className="menu-parent"><a className="btn btn-lg" title="NEAR-based EVM compatible Aurora ecosystem." href={`/${props.componentPath}.App?cat=aurora`}>Aurora
                <span className="menu-badge">283</span></a></div>
            <div className="menu-parent"><a className="btn btn-lg " title="NEAR-based multichain interoperable Octopus Network and Appchains Ecosystem." href={`/${props.componentPath}.App?cat=octopus`}>Octopus<span className="menu-badge">20</span></a></div>
            <div className="menu-parent">
                <a className="btn btn-lg " title="Infrastructure projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=infrastructure`}>Infrastructure<span className="menu-badge">251</span></a>
                <div className="menu menu-nav">
                    <div className="menu-item"><a className="btn" title="Web, browser extension, mobile crypto wallets support NEAR and Aurora." href={`/${props.componentPath}.App?cat=wallets`}>Wallets<span className="menu-badge">61</span></a></div>
                    <div className="menu-item"><a className="btn" title="NEAR validator nodes producing blocks and securing the NEAR network." href={`/${props.componentPath}.App?cat=validators`}>Validators<span className="menu-badge">70</span></a></div>
                    <div className="menu-item"><a className="btn" title="NEAR Protocol Explorers and Aurora Blockchain Explorers." href={`/${props.componentPath}.App?cat=explorers`}>Explorers<span className="menu-badge">11</span></a></div>
                    <div className="menu-item"><a className="btn" title="Cross-chain bridges and asset transfer tools for NEAR and Aurora." href={`/${props.componentPath}.App?cat=bridges`}>Bridges<span className="menu-badge">33</span></a></div>
                    <div className="menu-item"><a className="btn" title="Data and File Storage Infrastructure for NEAR and Aurora Projects." href={`/${props.componentPath}.App?cat=storage`}>Storage<span className="menu-badge">13</span></a></div>
                </div>
            </div>
            <div className="menu-parent">
                <a className="btn btn-lg " title="DApps building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=dapps`}>DApps<span className="menu-badge">488</span></a>
                <div className="menu menu-nav">
                    <div className="menu-item"><a className="btn" title="DeFi projects and DApps on NEAR and Aurora." href={`/${props.componentPath}.App?cat=defi`}>DeFi<span className="menu-badge">209</span></a></div>
                    <div className="menu-item"><a className="btn" title="DEX projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=dex`}>DEX<span className="menu-badge">47</span></a></div>
                    <div className="menu-item"><a className="btn" title="Crypto Exchanges and DEX projects building on NEAR and Aurora." href={`/${props.componentPath}.App?cat=exchanges`}>Exchanges<span className="menu-badge">63</span></a></div>
                    <div className="menu-item"><a className="btn" title="Launchpads, IDO, Token Sale platforms building on NEAR and Aurora." href={`/${props.componentPath}.App?cat=launchpads`}>Launchpads<span className="menu-badge">20</span></a></div>
                    <div className="menu-item"><a className="btn" title="Lending and borrowing projects building on NEAR and Aurora." href={`/${props.componentPath}.App?cat=lending`}>Lending<span className="menu-badge">20</span></a></div>
                    <div className="menu-item"><a className="btn" title="Collateralized and algorithmic stablecoins building on NEAR and Aurora." href={`/${props.componentPath}.App?cat=stablecoins`}>Stablecoins<span className="menu-badge">14</span></a></div>
                    <div className="menu-item"><a className="btn" title="Yield Aggregator DeFi projects building on NEAR and Aurora ecosystems." href={`/${props.componentPath}.App?cat=yield_aggregators`}>Yield Aggregators<span className="menu-badge">17</span></a></div>
                    <div className="menu-item"><a className="btn" title="Gaming projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=gaming`}>Gaming<span className="menu-badge">129</span></a></div>
                    <div className="menu-item"><a className="btn" title="Metaverse projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=metaverse`}>Metaverse<span className="menu-badge">32</span></a></div>
                    <div className="menu-item"><a className="btn" title="Web3 Social projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=social`}>Social<span className="menu-badge">52</span></a></div>
                    <div className="menu-item"><a className="btn" title="Music projects, NFTs, toolsets building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=music`}>Music<span className="menu-badge">18</span></a></div>
                </div>
            </div>
            <div className="menu-parent">
                <a className="btn btn-lg " title="NFT collectibles, marketplaces, game projects, utilities on NEAR and Aurora." href={`/${props.componentPath}.App?cat=nft`}>NFT<span className="menu-badge">290</span></a>
                <div className="menu menu-nav">
                    <div className="menu-item"><a className="btn" title="NFT Marketplaces building on NEAR and Aurora." href={`/${props.componentPath}.App?cat=marketplaces`}>Marketplaces<span className="menu-badge">60</span></a></div>
                    <div className="menu-item"><a className="btn" title="NFT collectibles and collections on NEAR and Aurora." href={`/${props.componentPath}.App?cat=collectibles`}>Collectibles<span className="menu-badge">99</span></a></div>
                </div>
            </div>
            <div className="menu-parent">
                <a className="btn btn-lg " title="Utilities projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=utilities`}>Utilities<span className="menu-badge">98</span></a>
                <div className="menu menu-nav">
                    <div className="menu-item"><a className="btn" title="Dev tools, docs, APIs, resources for NEAR, Aurora and Octopus developers." href={`/${props.componentPath}.App?cat=devtooling`}>Dev Tooling<span className="menu-badge">124</span></a></div>
                    <div className="menu-item"><a className="btn" title="Oracles and Prediction Markets projects building on NEAR and Aurora." href={`/${props.componentPath}.App?cat=oracles`}>Oracles<span className="menu-badge">15</span></a></div>
                    <div className="menu-item"><a className="btn" title="Security projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=security`}>Security<span className="menu-badge">13</span></a></div>
                    <div className="menu-item"><a className="btn" title="Data services, indexers, explorer RPC data APIs building on NEAR and Aurora." href={`/${props.componentPath}.App?cat=data`}>Data<span className="menu-badge">21</span></a></div>
                    <div className="menu-item"><a className="btn" title="Data-driven analytics, stats and tracking solutions on NEAR and Aurora." href={`/${props.componentPath}.App?cat=analytics`}>Analytics<span className="menu-badge">41</span></a></div>
                    <div className="menu-item"><a className="btn" title="Portfolio projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=portfolio`}>Portfolio<span className="menu-badge">21</span></a></div>
                    <div className="menu-item"><a className="btn" title="Cryptocurrency and fiat on-ramps and off-ramps services." href={`/${props.componentPath}.App?cat=on_off_ramps`}>On/Off Ramps<span className="menu-badge">16</span></a></div>
                    <div className="menu-item"><a className="btn" title="Payments services and fiat on/off-ramps tools building on NEAR and Aurora." href={`/${props.componentPath}.App?cat=payments`}>Payments<span className="menu-badge">30</span></a></div>
                </div>
            </div>
            <div className="menu-parent">
                <a className="btn btn-lg " title="Ecosystem projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=ecosystem`}>Ecosystem<span className="menu-badge">132</span></a>
                <div className="menu menu-nav">
                    <div className="menu-item"><a className="btn" title="Decentralized Autonomous Organizations (DAO) on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=dao`}>DAO<span className="menu-badge">94</span></a></div>
                    <div className="menu-item"><a className="btn" title="Regional hubs projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=regional_hubs`}>Regional Hubs<span className="menu-badge">6</span></a></div>
                    <div className="menu-item"><a className="btn" title="Funding programs, venture capitals and ecosystem funds on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=funding`}>Funding<span className="menu-badge">17</span></a></div>
                    <div className="menu-item"><a className="btn" title="Guilds, DAOs and communities on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=guilds`}>Guilds<span className="menu-badge">44</span></a></div>
                    <div className="menu-item"><a className="btn" title="Educational resources, news, insights, information of the NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=education`}>Education<span className="menu-badge">30</span></a></div>
                    <div className="menu-item"><a className="btn" title="ReFi projects building on NEAR and Aurora ecosystem." href={`/${props.componentPath}.App?cat=refi`}>ReFi<span className="menu-badge">10</span></a></div>
                    <div className="menu-item"><a className="btn" title="Global events, conferences, hackathons, meetups hosted by the NEAR and Aurora communities." href={`/${props.componentPath}.App?cat=events`}>Events<span className="menu-badge">7</span></a></div>
                </div>
            </div>
        </div>
        {/* end the menu */}
    </>
)