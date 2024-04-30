const offcanvas = props.offcanvas;
const indexPath = props.indexPath;
const cat = props.cat;
return (
    <>
        <div id="offcanvas-menu" className="sidebar-container container-fluid">
            {/* start offcanvas menu */}
            <div class="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="staticBackdropLabel">NEARCatalog</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body aside-container">
                    {/* <Widget src={`${props.componentPath}.Layout.LeftMenu`}
                        props={{
                            indexPath,
                            cat
                        }}
                    /> */}
                </div>
            </div>
            {/* offcanvas menu */}
        </div>

        <div id="near-sidebar" className="col-auto col-md-3 px-sm-2 px-0" >
            <div className="aside-container">
                <div className="container">
                    <div id="sidebar-menu-lg">
                        {/* <Widget src={`${props.componentPath}.Layout.LeftMenu`}
                            props={{
                                indexPath,
                                cat
                            }} /> */}
                    </div>
                </div>
            </div>
        </div>



    </>
)