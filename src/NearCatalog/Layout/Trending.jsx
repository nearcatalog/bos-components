
const Css = styled.div`
.awesome-trending-content{
    overflow-x: scroll; 
   white-space: nowrap; 
}
.awesome-trending-content .near-item-sm { 
   display: inline-block; 
   float: none; 
}
.awesome-trending .awesome-trending-content{align-items:flex-start;display:flex;flex-wrap:nowrap;margin-top:1rem;overflow-x:auto;}
.awesome-trending .awesome-trending-content::-webkit-scrollbar{display:none;}
.awesome-trending .near-item-sm{flex:0 0 auto;margin-right:.1rem;width:5.5rem;}
.near-item-sm{align-items:center;border-radius:.8rem;display: block;flex-direction:column;padding:.5rem;transition:all .15s ease;float: left;}
.near-item-sm:focus,.near-item-sm:hover{background:rgba(34,34,34,.05);text-decoration:none;}
.near-item-sm .tile-icon{box-shadow:0 .5rem 1.2rem rgba(34,34,34,.2);border-radius:50%;height:3.2rem;margin:.5rem auto;width:3.2rem;}
.near-item-sm .tile-icon img{border-radius:50%;height:100%;width:100%;}
.near-item-sm .tile-content{width:100%;}
.near-item-sm .tile-title{font-size:.7rem;text-align:center;color: rgb(34, 34, 34); font-weight:bold}
`;

return (
    <Css>
        <h3 className="my-3">Trending Projects</h3>

        <div className="awesome-trending-content overflow-auto">
            <a className="near-item-sm" target="_blank" title="Ref Finance" href="/web/20221205205910/https://awesomenear.com/ref-finance">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/ref-finance.jpg" alt="Ref Finance" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Ref Finance</h2>
                </div>
            </a>
            <a className="near-item-sm" target="_blank" title="Aurora" href="/web/20221205205910/https://awesomenear.com/aurora-dev">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/aurora-dev.jpg" alt="Aurora" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Aurora</h2>
                </div>
            </a>
            <a className="near-item-sm" target="_blank" title="Trisolaris" href="/web/20221205205910/https://awesomenear.com/trisolaris">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/trisolaris.jpg" alt="Trisolaris" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Trisolaris</h2>
                </div>
            </a>
            <a className="near-item-sm" target="_blank" title="Octopus Network" href="/web/20221205205910/https://awesomenear.com/octopus-network">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/octopus-network.jpg" alt="Octopus Network" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Octopus Network</h2>
                </div>
            </a>
            <a className="near-item-sm" target="_blank" title="Paras" href="/web/20221205205910/https://awesomenear.com/paras">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/paras.jpg" alt="Paras" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Paras</h2>
                </div>
            </a>
            <a className="near-item-sm" target="_blank" title="Learn NEAR Club" href="/web/20221205205910/https://awesomenear.com/learn-near">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/learn-near.jpg" alt="Learn NEAR Club" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Learn NEAR Club</h2>
                </div>
            </a>
            <a className="near-item-sm" target="_blank" title="Sweat Еconomy" href="/web/20221205205910/https://awesomenear.com/sweat-economy">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/sweat-economy.jpg" alt="Sweat Еconomy" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Sweat Еconomy</h2>
                </div>
            </a>
            <a className="near-item-sm" target="_blank" title="Meta Pool" href="/web/20221205205910/https://awesomenear.com/meta-pool">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/meta-pool.jpg" alt="Meta Pool" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Meta Pool</h2>
                </div>
            </a>
            <a className="near-item-sm" target="_blank" title="Spin" href="/web/20221205205910/https://awesomenear.com/spin">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/spin.jpg" alt="Spin" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Spin</h2>
                </div>
            </a>     <a className="near-item-sm" target="_blank" title="Spin" href="/web/20221205205910/https://awesomenear.com/spin">
                <div className="tile-icon"><img src="https://web.archive.org/web/20221205205910im_/https://awesome-near.s3.amazonaws.com/spin.jpg" alt="Spin" /></div>
                <div className="tile-content">
                    <h2 className="tile-title">Spin</h2>
                </div>
            </a>
        </div>
        </Css>
);