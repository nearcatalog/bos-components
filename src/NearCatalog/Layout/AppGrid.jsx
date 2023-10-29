const componentPath = props.componentPath;
const projects = props.projects;
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
                                Object.keys(projects).map(( e ) => {
                                    console.log("E: " , e) ;
                                    let p  = projects[e];

                                    return (

                                        <div className="near-item-wrap col-md-4 col-sm-12 p-3">
                                            <a className="near-item" target="_blank" title={p.name}
                                                href={`/${componentPath}.Project?id=${e}`}>
                                                <div className="near-item-header">
                                                    <div className="tile">
                                                        <div className="tile-icon">
                                                            <img src={p.profile.image?.url || "https://static.mediacdn.vn/genk/web_images/logogenk.svg" } 
                                                            alt={p.profile.name} loading="lazy" /></div>
                                                        <div className="tile-content">
                                                            <h2 className="tile-title">{p.profile.name}</h2>
                                                            <div className="tile-tags">
                                                            {
                                                                Object.keys(p.profile.tags).length > 0 && Object.keys(p.profile.tags).map( e => {
                                                                   return(
                                                                        <span title={e}>{e}</span>
                                                                   )
                                                                } )
                                                            }
                                                            </div>
            
                                                        </div>
                                                    </div>

                                                    <div className="tile my-2">
                                                        <h3 className="tile-subtitle">{p.profile.tagline}</h3>
                                                    </div>
                                                </div>

                                                {/* <div className="near-item-footer">
                                                    <div className="tile-social">
                                                        <svg className="icon" height="20" width="20"></svg>
                                                    </div>
                                                    <div className="tile-series">
                                                        <div className="label-series near">
                                                            <svg className="icon iconSeries" height="20" width="20"></svg>
                                                        </div>
                                                    </div>
                                                </div> */}
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