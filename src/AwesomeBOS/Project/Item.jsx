const Css = styled.div`
h1{font-size:2em;margin:.67em 0;}
a{background-color:transparent;-webkit-text-decoration-skip:objects;}
a:active,a:hover{outline-width:0;}
strong{font-weight:inherit;font-weight:bolder;}
small{font-size:80%;font-weight:400;}
img{border-style:none;}
svg:not(:root){overflow:hidden;}
*,:after,:before{box-sizing:inherit;}
a{color:#222;outline:none;text-decoration:none;}
a:active,a:focus,a:hover{color:#090909;text-decoration:underline;}
:focus{outline:0;}
h1,h2,h3{color:inherit;font-weight:500;line-height:1.2;margin-bottom:.5em;margin-top:0;}
.h4{font-weight:500;}
h1{font-size:2rem;}
h2{font-size:1.6rem;}
h3{font-size:1.4rem;}
.h4{font-size:1.2rem;}
p{margin:0 0 1.2rem;}
a{-webkit-text-decoration-skip:ink edges;text-decoration-skip:ink edges;}
ol,ul{padding:0;}
ol,ul{margin:.8rem 0 .8rem .8rem;}
ol li,ul li{margin-top:.4rem;}
ul{list-style:disc inside;}
ol{list-style:decimal inside;}
.btn{align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;background:rgba(34,34,34,.05);border:.1rem solid transparent;border-radius:.4rem;color:#222;cursor:pointer;display:inline-flex;font-size:.7rem;height:1.8rem;line-height:1.2rem;outline:none;padding:.2rem .4rem;text-align:center;text-decoration:none;transition:background .2s,border .2s,box-shadow .2s,color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;white-space:nowrap;}
.btn:focus{box-shadow:0 0 0 .1rem rgba(34,34,34,.2);}
.btn:focus,.btn:hover{background:rgba(34,34,34,.1);border-color:transparent;text-decoration:none;}
.btn:active{background:rgba(34,34,34,.15);border-color:rgba(34,34,34,.05);text-decoration:none;}
.btn:disabled{cursor:default;opacity:.5;pointer-events:none;}
.btn.btn-primary{background:#222;border-color:#1d1d1d;box-shadow:0 .1rem .4rem rgba(34,34,34,.25);color:#fff;}
.btn.btn-primary:focus,.btn.btn-primary:hover{background:#0052cc;border-color:#004cbd;color:#fff;}
.btn.btn-primary:active{background:#004cbd;border-color:#0046ad;color:#fff;}
.btn.btn-link{background:transparent;border-color:transparent;color:#222;}
.btn.btn-link:active,.btn.btn-link:focus,.btn.btn-link:hover{color:#222;}
.btn.btn-lg{font-size:.8rem;height:2rem;padding:.3rem .6rem;}
.btn-group{display:inline-flex;flex-wrap:wrap;}
.btn-group .btn{flex:1 0 auto;}
.btn-group .btn:first-child:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;}
.btn-group .btn:last-child:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-.1rem;}
.btn-group .btn:active,.btn-group .btn:focus,.btn-group .btn:hover{z-index:1;}
.markdown{font-size:.8rem;font-weight:400;line-height:1.25rem;word-break:break-word;}
.markdown>:first-child{margin-top:0;}
.markdown h2,.markdown h3{font-weight:700;line-height:1.5;margin-bottom:1.2rem;margin-top:.4rem;}
.markdown h2{font-size:24px;}
.markdown h3{font-size:22px;}
.markdown p{-webkit-hyphens:auto;hyphens:auto;margin:0 0 1.6rem;}
.markdown ul{margin:1.6rem 0 1.6rem 1.6rem;padding:0;}
.markdown ul li{margin-top:.4rem;}
.markdown ul{list-style:disc inside;}
.container{margin-left:auto;margin-right:auto;padding-left:.8rem;padding-right:.8rem;width:100%;}
.container.grid-xl{max-width:calc(.8rem + 1200px);}
.columns{display:flex;flex-wrap:wrap;margin-left:-.8rem;margin-right:-.8rem;}
.column{flex:1;max-width:100%;padding-left:.8rem;padding-right:.8rem;}
.column.col-12,.column.col-4,.column.col-8{flex:none;}
.col-12{width:100%;}
.col-8{width:66.66666667%;}
.col-4{width:33.33333333%;}
@media (max-width:960px){
.col-lg-12{flex:none;}
.col-lg-12{width:100%;}
}
@media (max-width:840px){
.col-md-12{flex:none;}
.col-md-12{width:100%;}
}
.breadcrumb{font-size:.6rem;list-style:none;margin:.2rem 0;padding:.2rem 0;}
.breadcrumb .breadcrumb-item{color:#888;display:inline-block;margin:0 .2rem 0 0;padding:.2rem 0;}
.breadcrumb .breadcrumb-item a{color:#888;}
.breadcrumb .breadcrumb-item:not(:first-child):before{color:#888;content:"→";padding-right:.2rem;}
.dropdown{display:inline-block;position:relative;}
.dropdown .menu{animation:slide-down .15s ease 1;display:none;left:0;max-height:50vh;overflow-y:auto;position:absolute;top:90%;}
.dropdown.dropdown-right .menu{left:auto;right:0;}
.dropdown .menu:hover,.dropdown:focus .menu,.dropdown:hover .menu{display:block;}
.menu{box-shadow:0 1rem 3rem rgba(34,34,34,.3);background:#fff;border-radius:.8rem;list-style:none;margin:0;min-width:180px;padding:.8rem;transform:translateY(.2rem);z-index:300;}
.menu .menu-item{margin-top:0;padding:0;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;}
.menu .menu-item>a{align-items:center;color:inherit;display:flex;margin:0;padding:.4rem;text-decoration:none;}
.menu .menu-item>a:active,.menu .menu-item>a:focus,.menu .menu-item>a:hover{color:rgba(34,34,34,.75);}
.menu .menu-item>span{align-items:center;color:inherit;display:flex;margin:0;padding:.4rem;}
.tile{align-content:space-between;align-items:flex-start;display:flex;}
.tile .tile-icon{flex:0 0 auto;}
.tile .tile-content{flex:1 1 auto;}
.tile .tile-content:not(:first-child){padding-left:.4rem;}
.tile .tile-title{line-height:1.2rem;}
.tooltip{position:relative;}
.tooltip:after{background:rgba(34,34,34,.95);border-radius:.4rem;bottom:100%;color:#fff;content:attr(data-tooltip);display:block;font-size:.6rem;left:50%;max-width:320px;opacity:0;overflow:hidden;padding:.2rem .4rem;pointer-events:none;position:absolute;text-overflow:ellipsis;transform:translate(-50%,.4rem);transition:opacity .2s,transform .2s;white-space:pre;z-index:300;}
.tooltip:focus:after,.tooltip:hover:after{opacity:1;transform:translate(-50%,-.2rem);}
.text-gray{color:#888!important;}
a.text-gray:focus,a.text-gray:hover{color:#7b7b7b;}
a.text-gray:visited{color:#959595;}
.c-hand{cursor:pointer;}
.text-assistive{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1px;}
.divider{display:block;position:relative;}
.divider[data-content]:after{background:#fff;color:#c8c8c8;content:attr(data-content);display:inline-block;font-size:.6rem;line-height:.6rem;padding:0 .4rem;transform:translateY(-.6rem);}
.divider{border-top:.05rem solid #d5d5d5;height:.1rem;margin:.4rem 0;}
.divider[data-content]{margin:.8rem 0;}
.ml-1{margin-left:.2rem!important;}
.ml-2{margin-left:.4rem!important;}
.mr-2{margin-right:.4rem!important;}
.text-small{font-size:.8em;}
.awesome-hero{border-radius:.8rem;color:#222;display:flex;padding:1rem 0;position:relative;z-index:1;}
.awesome-hero .hero-content{display:flex;flex-direction:column;flex:1;justify-content:center;margin-right:auto;max-width:840px;}
.awesome-hero .hero-img{height:3.6rem;margin:1.8rem 1rem 1rem 0;width:3.6rem;}
.awesome-hero .hero-img img{border-radius:50%;box-shadow:0 .2rem .6rem rgba(34,34,34,.05);height:3.6rem;width:3.6rem;}
@media screen and (max-width:960px){
.awesome-hero .hero-img{margin-top:0;}
}
.awesome-hero .hero-title{font-size:1.8rem;font-weight:900;line-height:1.25;margin-bottom:0;}
.awesome-hero .hero-title small{border-radius:.2rem;color:rgba(34,34,34,.9);font-size:.75rem;font-weight:500;padding:.2rem;vertical-align:middle;}
.awesome-hero .hero-subtitle{color:#222;font-size:.8rem;font-weight:400;line-height:1.5;margin:.5rem 0 1rem;}
.awesome-hero .hero-series{display:inline-flex;margin-bottom:.4rem;order:-1;}
.awesome-hero .hero-actions{flex:0 0 auto;margin-left:1rem;margin-top:1rem;}
.awesome-hero .hero-tags{margin:.4rem 0;}
.awesome-hero .hero-tags .tag-item+.tag-item{margin-left:.25rem;}
.awesome-hero .hero-links{display:flex;flex-wrap:wrap;justify-content:flex-end;margin:.5rem 0;}
@media screen and (max-width:960px){
.awesome-hero .hero-links{justify-content:flex-start;}
}
.awesome-hero .hero-links .link-item{align-items:center;display:inline-flex;height:2rem;font-size:.7rem;margin-bottom:.2rem;margin-right:.2rem;text-decoration:none;}
.awesome-hero .hero-links .link-item span{line-height:1;margin-left:.4rem;}
.awesome-hero .hero-links .link-item small{opacity:.5;}
.awesome-hero .hero-links .link-item.btn.btn-lg{padding:.3rem .5rem;}
.awesome-hero .hero-links .menu{color:#222;width:12rem;}
@media screen and (max-width:960px){
.awesome-hero{flex-wrap:wrap;flex-direction:column;}
.awesome-hero .hero-actions{flex:1 0 100%;margin-left:0;width:100%;}
}
@media screen and (max-width:600px){
.awesome-hero{padding:1rem 0;}
}
.label-series{align-items:center;background:rgba(0,82,204,.1);border:.05rem solid transparent;border-radius:1rem;cursor:default;display:inline-flex;font-size:.6rem;font-weight:500;height:1rem;margin-bottom:0;margin-right:.2rem;padding:.1rem .3rem;}
.label-series .icon-series{height:.6rem;margin-right:.1rem;width:.6rem;}
.label-series.trending{background:rgba(0,82,204,.1);color:#0052cc;}
.label-series.near{background:rgba(38,38,38,.075);color:#262626;}
.label-series.aurora{background:rgba(120,214,75,.2);color:#5dc22c;}
.section-project .awesome-hero .hero-content{max-width:600px;}
.near-content .content-widget{background:#fff;border:.05rem solid #eee;border-radius:.8rem;box-shadow:0 .1rem 1.4rem rgba(34,34,34,.05);font-size:.8rem;margin-bottom:1rem;padding:2rem;}
.near-content .twitter-widget{padding-bottom:.5rem;}
.near-content .related-widget .content-body{margin:auto -.5rem;}
@media screen and (max-width:600px){
.near-content .content-widget{padding:1.5rem 1rem;}
}
.near-content .content-title{font-size:.8rem;font-weight:900;margin-bottom:1rem;}
.near-content .stats-widget{display:flex;flex-wrap:nowrap;font-size:.7rem;justify-content:space-between;align-items:baseline;margin:.3rem 0;}
.near-content .stats-widget:last-child{margin-bottom:0;}
.near-content .stats-widget .stats-widget-label{color:rgba(34,34,34,.5);font-size:.6rem;font-weight:500;margin-bottom:.2rem;}
.near-content .stats-widget .stats-widget-value{font-weight:700;color:#222;text-align:right;overflow:hidden;}
.near-content .stats-widget .stats-widget-source{color:#888;font-size:.6rem;margin-top:.4rem;text-align:right;width:100%;}
.near-content .token-widget{display:flex;flex-direction:column;}
.near-content .token-widget:not(:last-child){margin-bottom:1rem;}
.near-content .token-widget .token-widget-label{color:rgba(51,51,51,.5);font-size:.6rem;font-weight:500;}
.near-content .token-widget .token-widget-value{background:#f6f6f6;border:.05rem solid #eee;border-radius:.4rem;color:#333;font-size:.6rem;font-weight:700;margin-top:.2rem;padding:.2rem .4rem;-webkit-user-select:all;-moz-user-select:all;user-select:all;word-break:break-all;}
.near-content .token-widget .token-widget-value:hover{background:#f3f3f3;}
.near-content .content-grants{align-items:center;display:flex;flex-wrap:wrap;}
.near-content .content-grants:not(:last-child){margin-bottom:.5rem;}
.label-grants{align-items:center;border:.05rem solid rgba(34,34,34,.075);border-radius:.4rem;color:#222;display:flex;font-size:.7rem;margin:.25rem;padding:.25rem .5rem .25rem .25rem;}
.label-grants .icon-grants{border-radius:50%;margin-right:.25rem;}
.label-grants.near .icon-grants{background:rgba(38,38,38,.075);color:#262626;}
.label-grants.proximity .icon-grants{background:linear-gradient(45deg,rgba(216,46,135,.25),rgba(255,173,1,.25));color:#d82e87;}
.markdown p:last-child{margin-bottom:0;}
.near-item{background:#fff;border:.05rem solid #eee;box-shadow:0 .05rem .05rem rgba(34,34,34,.05),0 .2rem .8rem rgba(34,34,34,.075);border-radius:.8rem;color:#222;display:flex;flex-direction:column;height:100%;min-height:8.5rem;padding:1rem;position:relative;transition:box-shadow .2s ease-in-out,transform .2s ease-in-out;}
.near-item:focus,.near-item:hover{box-shadow:0 .1rem .2rem rgba(34,34,34,.05),0 .4rem 1.6rem rgba(34,34,34,.15);text-decoration:none;transform:translateY(-.1rem);}
.near-item .tile-icon{box-shadow:0 .5rem 1.2rem rgba(34,34,34,.2);}
.near-item .tile-icon,.near-item .tile-icon img{border-radius:50%;height:2rem;width:2rem;}
.near-item .tile-content{overflow:hidden;}
.near-item .tile-content:not(:first-child){padding-left:.8rem;}
.near-item .near-item-header{display:flex;flex:1 1;flex-direction:column;}
.near-item .tile-title{color:#222;font-size:.8rem;font-weight:700;margin-bottom:0;padding-bottom:.1rem;}
.near-item .tile-tags,.near-item .tile-title{line-height:.9rem;overflow:hidden;text-overflow:ellipsis;}
.near-item .tile-tags{font-size:.6rem;height:1rem;padding-top:.1rem;white-space:nowrap;}
.near-item-list{background:transparent;border:0;box-shadow:none;min-height:auto;padding:.5rem;}
.awesome-tag{background:rgba(34,34,34,.05);border-radius:.4rem;color:#3c3c3c;font-size:.7rem;line-height:1.5rem;padding:.25rem .35rem;}
.awesome-tag:focus,.awesome-tag:hover{background:rgba(34,34,34,.08);border-color:rgba(34,34,34,.08);text-decoration:none;}
.articles-container{display:flex;flex-direction:column;}
.articles-container .article-item{display:flex;padding-bottom:.8rem;}
.articles-container .article-item:focus,.articles-container .article-item:hover{text-decoration:none;}
.articles-container .article-item:focus .article-title,.articles-container .article-item:hover .article-title{text-decoration:underline;}
.articles-container .article-image{border-radius:.4rem;box-shadow:0 .2rem .4rem rgba(34,34,34,.1);height:2rem;margin-right:.4rem;-o-object-fit:cover;object-fit:cover;width:2.4rem;}
.articles-container .article-detail{display:flex;flex-direction:column;}
.articles-container .article-title{padding-left:.2rem;font-weight:700;font-size:.7rem;}
.articles-container .article-info{color:#888;padding-left:.2rem;font-weight:400;font-size:.6rem;}
/*! CSS Used keyframes */
@keyframes slide-down{0%{opacity:0;transform:translateY(-1.6rem);}to{opacity:1;transform:translateY(0);}}
.near-bg:before {
    background: linear-gradient(270deg,#fff0e2 35%,#d7dbff);
    right: 15vh;
    top: 10vh;
  }
  .near-bg:after, .near-bg:before {
    border-radius: 50%;
    content: "";
    display: block;
    filter: blur(3rem);
    height: 50vh;
    position: fixed;
    width: 50vh;
    z-index: -1;
  }
  
  
  .near-bg:after {
    background: linear-gradient(180deg,#e1d7ff 25%,#e1f4f8);
    bottom: 10vh;
    left: 15vh;
  }
`;

return (
    <Css>
        <div className="container grid-xl near-bg">
            <div className="columns">
                <div className="hero-container column col-md-12">
                    <div className="awesome-breadcrumb text-assistive">
                        <ol className="breadcrumb" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                            <li className="breadcrumb-item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                                <a itemscope="" itemtype="https://schema.org/WebPage" itemprop="item" itemid="https://awesomenear.com" href="https://web.archive.org/web/20230521202119/https://awesomenear.com/"><span itemprop="name">Home</span></a>
                            </li>
                            <li className="breadcrumb-item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                                <a itemscope="" itemtype="https://schema.org/WebPage" itemprop="item" itemid="https://awesomenear.com/en/projects" href="https://web.archive.org/web/20230521202119/https://awesomenear.com/en/projects"><span itemprop="name">Projects</span></a>
                            </li>
                            <li className="breadcrumb-item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                                <a itemscope="" itemtype="https://schema.org/WebPage" itemprop="item" itemid="https://awesomenear.com/en/ref-finance" href="https://web.archive.org/web/20230521202119/https://awesomenear.com/en/ref-finance"><span itemprop="name">Ref Finance</span></a>
                            </li>
                        </ol>
                    </div>
                    <div className="awesome-hero">
                        <div className="hero-img"><img src="https://web.archive.org/web/20230521202119im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/ref-finance/ref-finance.jpg" alt="Ref Finance" loading="lazy" /></div>
                        <div className="hero-content">
                            <h1 className="hero-title">Ref Finance <small>(REF)</small></h1>
                            <h2 className="hero-subtitle">Multi-purpose DeFi platform built on NEAR Protocol.</h2>
                            <div className="hero-series">
                                <h3 className="tooltip label-series trending" data-tooltip="TRENDING">
                                    <span className="text-assistive">Ref Finance on </span>
                                    <svg className="icon iconSeries" height="20" width="20">

                                    </svg>
                                    TRENDING
                                </h3>
                                <h3 className="tooltip label-series near" data-tooltip="NEAR">
                                    <span className="text-assistive">Ref Finance on </span>
                                    <svg className="icon iconSeries" height="20" width="20">

                                    </svg>
                                    NEAR
                                </h3>
                                <h3 className="tooltip label-series aurora" data-tooltip="AURORA">
                                    <span className="text-assistive">Ref Finance on </span>
                                    <svg className="icon iconSeries" height="20" width="20">

                                    </svg>
                                    AURORA
                                </h3>
                            </div>
                            <div className="hero-tags"><a className="tag-item awesome-tag" title="NEAR-based EVM compatible Aurora ecosystem." href="/web/20230521202119/https://awesomenear.com/categories/aurora"><span className="text-assistive">Explore NEAR Protocol and Aurora </span>Aurora<span className="text-assistive"> projects and DApps</span></a><a className="tag-item awesome-tag" title="DApps building on NEAR and Aurora ecosystem." href="/web/20230521202119/https://awesomenear.com/categories/dapps"><span className="text-assistive">Explore NEAR Protocol and Aurora </span>DApps<span className="text-assistive"> projects and DApps</span></a><a className="tag-item awesome-tag" title="DeFi projects and DApps on NEAR and Aurora." href="/web/20230521202119/https://awesomenear.com/categories/defi"><span className="text-assistive">Explore NEAR Protocol and Aurora </span>DeFi<span className="text-assistive"> projects and DApps</span></a><a className="tag-item awesome-tag" title="DEX projects building on NEAR and Aurora ecosystem." href="/web/20230521202119/https://awesomenear.com/categories/dex"><span className="text-assistive">Explore NEAR Protocol and Aurora </span>DEX<span className="text-assistive"> projects and DApps</span></a><a className="tag-item awesome-tag" title="Crypto Exchanges and DEX projects building on NEAR and Aurora." href="/web/20230521202119/https://awesomenear.com/categories/exchanges"><span className="text-assistive">Explore NEAR Protocol and Aurora </span>Exchanges<span className="text-assistive"> projects and DApps</span></a></div>
                        </div>
                        <div className="hero-actions">
                            <h2 className="text-assistive">Ref Finance official website and Twitter, Facebook, Medium, GitHub, LinkedIn, Telegram, Discord links</h2>
                            <div className="hero-links">
                                <div className="btn-group"><a href="https://web.archive.org/web/20230521202119/https://ref.finance/" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-primary">Visit Website<span className="text-assistive"> Ref Finance Official Website</span></a><a href="https://web.archive.org/web/20230521202119/https://app.ref.finance/" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-primary" title="Open DApp"><span className="text-assistive">Ref Finance</span>DApp</a></div>
                                <a href="https://web.archive.org/web/20230521202119/https://app.ref.finance/#wrap.near|token.v2.ref-finance.near" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-primary">Buy<span className="text-assistive"> REF Ref Finance </span><small className="ml-1">via Ref</small></a>
                                <div className="btn-group">
                                    <a href="##" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg" title="Share to Twitter">Share</a>
                                    <div className="link-item btn btn-lg dropdown dropdown-right dropdown-toggle c-hand" tabindex="0">
                                        <svg className="icon iconMore" height="20" width="20">

                                        </svg>
                                        <ul className="menu">
                                            <li className="menu-item"><a href="https://web.archive.org/web/20230521202119/https://forms.gle/YYvBQAW9ptLs1k7W9" target="_blank" rel="noopener noreferrer" title="Report inaccurate data via Google Forms">Inaccurate data?</a></li>
                                            <li className="menu-item"><a target="_blank" href="/web/20230521202119/https://awesomenear.com/user/projects/401b8b2d-3a4b-4e18-b608-98e2339a055c">Edit project</a></li>
                                            <li className="divider" data-content="Last Updated"></li>
                                            <li className="menu-item"><span className="text-small">Mon, 27 Feb 2023 08:45:53 GMT</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-links">
                                <a href="https://web.archive.org/web/20230521202119/https://twitter.com/finance_ref" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-link" title="Twitter">
                                    <svg className="icon iconTwitter" height="20" width="20">

                                    </svg>
                                    <h3 className="text-assistive">Ref Finance Twitter</h3>
                                </a>
                                <a href="https://web.archive.org/web/20230521202119/https://ref-finance.medium.com/" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-link" title="Medium">
                                    <svg className="icon iconMediun" height="20" width="20">

                                    </svg>
                                    <h3 className="text-assistive">Ref Finance Medium, blog, news, tutorials, and announcements</h3>
                                </a>
                                <a href="https://web.archive.org/web/20230521202119/https://t.me/ref_finance" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-link" title="Telegram">
                                    <svg className="icon iconTelegram" height="20" width="20">

                                    </svg>
                                    <h3 className="text-assistive">Ref Finance Telegram groups and channels</h3>
                                </a>
                                <a href="https://web.archive.org/web/20230521202119/https://github.com/ref-finance" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-link" title="GitHub, Open source org, Source code repos">
                                    <svg className="icon iconGithub" height="20" width="20">

                                    </svg>
                                    <h3 className="text-assistive">Ref Finance GitHub developers and source code</h3>
                                </a>
                                <a href="https://web.archive.org/web/20230521202119/https://www.linkedin.com/company/ref-finance/" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-link" title="LinkedIn">
                                    <svg className="icon iconLinkedin" height="20" width="20">

                                    </svg>
                                    <h3 className="text-assistive">Ref Finance LinkedIn company page</h3>
                                </a>
                                <a href="https://web.archive.org/web/20230521202119/https://app.astrodao.com/dao/ref-finance.sputnik-dao.near" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-link" title="AstroDAO">
                                    <svg className="icon iconAstrodao" height="20" width="20">

                                    </svg>
                                    <h3 className="text-assistive">Ref Finance AstroDAO and DAO link</h3>
                                </a>
                                <a href="https://web.archive.org/web/20230521202119/https://guide.ref.finance/" target="_blank" rel="noopener noreferrer" className="link-item btn btn-lg btn-link" title="Whitepaper Documents">
                                    <svg className="icon iconWhitepaper" height="20" width="20">

                                    </svg>
                                    <h3 className="text-assistive">Ref Finance Documents Whitepaper Litepaper Tokenomics Token Allocation</h3>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="content-container column col-12">
                    <div className="columns content-container" id="stats-columns-container-sidebar">
                        <div className="column col-lg-12 col-8">
                            <div className="near-content">
                                <div className="content-widget markdown">
                                    <h2 className="content-title">About Ref Finance</h2>
                                    <h3 className="text-assistive">What is Ref Finance and how does it work? What is Ref Finance token REF how is it used? Where can I get Ref Finance REF tokens? What are the key features and benefits of Ref Finance? How can I learn more about Ref Finance and stay up-to-date?</h3>
                                    <p>Ref Finance is a community-led, multi-purpose DeFi platform built on NEAR Protocol. Ref Finance takes full advantage of Near’s low fees, onE-to-two second finality, and WebAssembly-based runtime (hello, Rust smart contracts!).</p>
                                    <p>In addition to the advantages of being built on top of NEAR, Ref Finance provides:</p>
                                    <ul>
                                        <li>Multiple pools in onE contract</li>
                                        <li>Atomic transactions</li>
                                        <li>Customisable pool fee</li>
                                    </ul>
                                    <div className="content-grants">
                                        <span className="content-grants-title mr-2"><strong>Grants</strong>:</span>
                                        <div className="tooltip label-grants near" data-tooltip="Received NEAR Grant">
                                            <svg className="icon iconGrants" height="20" width="20">

                                            </svg>
                                            NEAR Grant
                                        </div>
                                        <div className="tooltip label-grants proximity" data-tooltip="Received Proximity Grant">
                                            <svg className="icon iconGrants" height="20" width="20">

                                            </svg>
                                            Proximity Grant
                                        </div>
                                    </div>
                                    <h3 className="text-assistive">Who invested in Ref Finance? Ref Finance Funding, Financials, Valuation  Investors</h3>
                                    <p><strong>Investors</strong>: <small>Alameda Research, D1 Ventures, KuCoin, Jump Crypto, Dragonfly Capital Partners, Block Dream Fund, Move Capital, SevenX Ventures,  WOO Network, Puzzle Ventures</small></p>
                                </div>
                            </div>
                            <div className="near-content">
                                <div className="content-widget article-widget">
                                    <h2 className="content-title">Ref Finance News</h2>
                                    <h3 className="text-assistive">Ref Finance funding news, strategic partnership news, announcements, product updates, tutorials articles, how-to, and guides</h3>
                                    <div className="articles-container">
                                        <a className="article-item" target="_blank" title="Orderbook Launch on Ref: Trading Competition with Orderly Network" href="/web/20230521202119/https://awesomenear.com/articles/orderbook-launch-on-ref-trading-competition-with-orderly-network">
                                            <img className="article-image" src="https://web.archive.org/web/20230521202119im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/articles/orderbook-launch-on-ref-trading-competition-with-orderly-network/1*oMmOebBPlfG2lbyyMUQFjQ.jpeg" alt="Orderbook Launch on Ref: Trading Competition with Orderly Network" loading="lazy" />
                                            <div className="article-detail">
                                                <h3 className="article-title">Orderbook Launch on Ref: Trading Competition with Orderly Network</h3>
                                                <div className="article-info">March 30, 2023</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column col-lg-12 col-4">
                            <div className="near-content">
                                <div className="content-widget chart-widget">
                                    <h2 className="content-title">Ref Finance Token Stats<span className="text-assistive">Chart</span></h2>
                                    <div className="stats-widget">
                                        <h3 className="stats-widget-symbol h4"><span className="text-assistive">Ref Finance Token Symbol is</span>REF</h3>
                                        <h3><span className="text-assistive">REF Price Today</span></h3>
                                        <div className="stats-widget-value h4" style={{ color: 'rgba(51, 51, 51, 0.25)', }}>$0.102966
                                        </div>
                                    </div>
                                    <div className="stats-widget">
                                        <h3 className="stats-widget-label"><span className="text-assistive">REF </span>Total Supply</h3>
                                        <div className="stats-widget-value">100,000,000</div>
                                    </div>
                                    <div className="stats-widget">
                                        <div className="stats-widget-source">Data Source : <a href="https://web.archive.org/web/20230521202119/https://www.coingecko.com/coins/ref-finance" target="_blank" rel="noopener noreferrer" className="text-gray">CoinGecko</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="near-content">
                                <div className="content-widget">
                                    <h2 className="content-title">REF Token Contract</h2>
                                    <div className="token-widget">
                                        <h3 className="token-widget-label"><span className="text-assistive">REF is deployed on the NEAR Chain (NEP-141). Find the Ref Finance (REF) NEAR contract address details below.</span>NEAR Chain (NEP-141)<a href="https://web.archive.org/web/20230521202119/https://explorer.near.org/accounts/token.v2.ref-finance.near" target="_blank" rel="noopener noreferrer" className="text-gray ml-2" title="NEAR Explorer">↗</a></h3>
                                        <div className="token-widget-value">token.v2.ref-finance.near</div>
                                    </div>
                                    <div className="token-widget">
                                        <h3 className="token-widget-label"><span className="text-assistive">Ref Finance is deployed on the Aurora Chain. Find the Ref Finance (REF) Aurora contract address details below.</span>Aurora Chain<a href="https://web.archive.org/web/20230521202119/https://aurorascan.dev/address/0x221292443758f63563a1ed04b547278b05845fcb" target="_blank" rel="noopener noreferrer" className="text-gray ml-2" title="Aurorascan Explorer">↗</a></h3>
                                        <div className="token-widget-value">0x221292443758f63563a1ed04b547278b05845fcb</div>
                                    </div>
                                </div>
                            </div>
                            <div className="near-content">
                                <div className="content-widget twitter-widget">
                                    <h2 className="content-title">Ref Finance Twitter</h2>
                                    <div>
                                        <div twdiv="yes"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="near-content">
                                <div className="content-widget related-widget">
                                    <h2 className="content-title">Related Projects</h2>
                                    <div className="content-body">
                                        <a className="near-item near-item-list" target="_blank" title="Tonic DEX" href="/web/20230521202119/https://awesomenear.com/tonic-dex">
                                            <div className="near-item-header">
                                                <div className="tile">
                                                    <div className="tile-icon"><img src="https://web.archive.org/web/20230521202119im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/tonic-dex/tonic-dex.jpg" alt="Tonic DEX" loading="lazy" /></div>
                                                    <div className="tile-content">
                                                        <h3 className="tile-title">Tonic DEX</h3>
                                                        <div className="tile-tags text-gray">Orderbook DEX on NEAR.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Css>
)