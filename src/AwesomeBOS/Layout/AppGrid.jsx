const componentPath = props.componentPath;
return (
    <div className="container near-bg" id="awesomebos-wrap">
        <div className="row">

            <Widget src={`${componentPath}.Layout.LeftSidebar`} props={{
                componentPath: componentPath
            }} />

            <div id="near-content-container" className="col col-md-9 py-3 near-right container ">

                <div className="awesome-hero">
                    <h1 className="awesome-title">Infrastructure</h1>
                    <p className="awesome-desc">
                        An example 2-level sidebar with collasible menu items.
                    </p>
                </div>

                <div id="bos-search-input" class="input-group">
                    <input class="form-control " type="text" placeholder="🔭 🔍 Explore NEAR" />
                </div>
                

                <button className="awesome-aside-select btn btn-lg mt-3" id="btn-mobile-show-category"
                    data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <i class="bi bi-search"></i>
                    <span className="mx-2">Explore by categories</span>
                </button>

                <Widget src={`${componentPath}.Layout.Trending`} />

                <div className="col py-3">

                    <div className="near-content">
                        <div className="near-list-container row">

                            {/* 1 item  */}
                            {
                                Array(12).fill(" ").map((v, k) => {
                                    return (

                                        <div className="near-item-wrap col-md-4 col-sm-12 p-3">
                                            <a className="near-item" target="_blank" title="Dragonfly Capital Partners" 
                                            href={`/${componentPath}.Project.Item`}>
                                                <div className="near-item-header">
                                                    <div className="tile">
                                                        <div className="tile-icon"><img src="https://web.archive.org/web/20230521202123im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/dragonfly-capital-partners/dragonfly-capital-partners.jpg" alt="Dragonfly Capital Partners" loading="lazy" /></div>
                                                        <div className="tile-content">
                                                            <h2 className="tile-title">Dragonfly Capital Partners</h2>
                                                            <div className="tile-tags"><span title="Funding programs, venture capitals and ecosystem funds on NEAR and Aurora ecosystem.">Funding</span><span title="NEAR validator nodes producing blocks and securing the NEAR network.">Validators</span></div>
                                                        </div>
                                                    </div>

                                                    <div className="tile my-2">
                                                        <h3 className="tile-subtitle">Global from day one. Global from day one.Global from day one.Global from day one.Global from day one.</h3>
                                                    </div>
                                                </div>
                                                <div className="near-item-footer">
                                                    <div className="tile-social">
                                                        <svg className="icon" height="20" width="20"></svg>
                                                    </div>
                                                    <div className="tile-series">
                                                        <div className="label-series near">
                                                            <svg className="icon iconSeries" height="20" width="20"></svg>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            }

                            {/* end 1 item  */}

                        </div> {/*app list container */}

                    </div>
                </div>

            </div> {/*END near content container */}

        </div>

    </div>

)