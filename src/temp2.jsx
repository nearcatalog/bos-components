//awesome near css clone =)) 

let Css = styled.div`
h1,h2,h3,h4,h5,h6 {
    color: inherit;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: .5em;
    margin-top: 0
}

.h1,.h2,.h3,.h4,.h5,.h6 {
    font-weight: 500
}

.h1,h1 {
    font-size: 2rem
}

.h2,h2 {
    font-size: 1.6rem
}

.h3,h3 {
    font-size: 1.4rem
}

.h4,h4 {
    font-size: 1.2rem
}

.h5,h5 {
    font-size: 1rem
}

.h6,h6 {
    font-size: .8rem
}

p {
    margin: 0 0 1.2rem
}

a,ins,u {
    -webkit-text-decoration-skip: ink edges;
    text-decoration-skip: ink edges
}

abbr[title] {
    border-bottom: .1rem dotted;
    cursor: help;
    text-decoration: none
}

kbd {
    border-radius: .2rem;
    line-height: 1.2;
    padding: .1rem .25rem;
    background: #222;
    color: #fff;
    font-size: .6rem
}

mark {
    background: #ffe9b3;
    color: #2f2f2f;
    border-bottom: .05rem solid #ffd367;
    border-radius: .4rem;
    padding: .05rem .1rem 0
}

blockquote {
    border-left: .2rem solid #eee;
    margin-left: 0;
    padding: .4rem .8rem
}

blockquote p:last-child {
    margin-bottom: 0
}

ol,ul {
    padding: 0
}

ol,ol ol,ol ul,ul,ul ol,ul ul {
    margin: .8rem 0 .8rem .8rem
}

ol li,ul li {
    margin-top: .4rem
}

ul {
    list-style: disc inside
}

ul ul {
    list-style-type: circle
}

ol {
    list-style: decimal inside
}

ol ol {
    list-style-type: lower-alpha
}

dl dt {
    font-weight: 700
}

dl dd {
    margin: .4rem 0 .8rem
}

.avatar {
    font-size: .8rem;
    height: 1.6rem;
    width: 1.6rem;
    background: #fff;
    border-radius: 50%;
    color: hsla(0,0%,100%,.85);
    display: inline-block;
    font-weight: 300;
    line-height: 1.25;
    margin: 0;
    position: relative;
    vertical-align: middle
}

.avatar.avatar-xs {
    font-size: .4rem;
    height: .8rem;
    width: .8rem
}

.avatar.avatar-sm {
    font-size: .6rem;
    height: 1.2rem;
    width: 1.2rem
}

.avatar.avatar-lg {
    font-size: 1.2rem;
    height: 2.4rem;
    width: 2.4rem
}

.avatar.avatar-xl {
    font-size: 1.6rem;
    height: 3.2rem;
    width: 3.2rem
}

.avatar img {
    border-radius: 50%;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 1
}

.avatar .avatar-icon,.avatar .avatar-presence {
    background: #fff;
    bottom: 14.64%;
    height: 50%;
    padding: .2rem;
    position: absolute;
    right: 14.64%;
    transform: translate(50%,50%);
    width: 50%;
    z-index: 2
}

.avatar .avatar-presence {
    background: #c8c8c8;
    box-shadow: 0 0 0 .2rem #fff;
    border-radius: 50%;
    height: .5em;
    width: .5em
}

.avatar .avatar-presence.online {
    background: #4eaf0a
}

.avatar .avatar-presence.busy {
    background: #ea3943
}

.avatar .avatar-presence.away {
    background: #ffb700
}

.btn {
    align-items: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: rgba(34,34,34,.05);
    border: .1rem solid transparent;
    border-radius: .4rem;
    color: #222;
    cursor: pointer;
    display: inline-flex;
    font-size: .7rem;
    height: 1.8rem;
    line-height: 1.2rem;
    outline: none;
    padding: .2rem .4rem;
    text-align: center;
    text-decoration: none;
    transition: background .2s,border .2s,box-shadow .2s,color .2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    vertical-align: middle;
    white-space: nowrap
}

.btn:focus {
    box-shadow: 0 0 0 .1rem rgba(34,34,34,.2)
}

.btn:focus,.btn:hover {
    background: rgba(34,34,34,.1);
    border-color: transparent;
    text-decoration: none
}

.btn.active,.btn:active {
    background: rgba(34,34,34,.15);
    border-color: rgba(34,34,34,.05);
    text-decoration: none
}

.btn.active.loading:after,.btn:active.loading:after {
    border-bottom-color: #0052cc;
    border-left-color: #0052cc
}

.btn.disabled,.btn:disabled,.btn[disabled] {
    cursor: default;
    opacity: .5;
    pointer-events: none
}

.btn.btn-primary {
    background: #222;
    border-color: #1d1d1d;
    box-shadow: 0 .1rem .4rem rgba(34,34,34,.25);
    color: #fff
}

.btn.btn-primary:focus,.btn.btn-primary:hover {
    background: #0052cc;
    border-color: #004cbd;
    color: #fff
}

.btn.btn-primary.active,.btn.btn-primary:active {
    background: #004cbd;
    border-color: #0046ad;
    color: #fff
}

.btn.btn-primary.loading:after {
    border-bottom-color: #fff;
    border-left-color: #fff
}

.btn.btn-link {
    background: transparent;
    border-color: transparent;
    color: #222
}

.btn.btn-link.active,.btn.btn-link:active,.btn.btn-link:focus,.btn.btn-link:hover {
    color: #222
}

.btn.btn-sm {
    font-size: .6rem;
    height: 1.4rem;
    padding: 0 .3rem
}

.btn.btn-lg {
    font-size: .8rem;
    height: 2rem;
    padding: .3rem .6rem
}

.btn.btn-block {
    display: flex;
    width: 100%
}

.btn.btn-action {
    width: 1.8rem;
    padding-left: 0;
    padding-right: 0
}

.btn.btn-action.btn-sm {
    width: 1.4rem
}

.btn.btn-action.btn-lg {
    width: 2rem
}

.btn.btn-clear {
    background: transparent;
    border: 0;
    color: currentColor;
    height: 1rem;
    line-height: .8rem;
    margin-left: .2rem;
    margin-right: -2px;
    opacity: 1;
    padding: .1rem;
    text-decoration: none;
    width: 1rem
}

.btn.btn-clear:focus,.btn.btn-clear:hover {
    background: hsla(0,0%,96%,.5);
    opacity: .95
}

.btn.btn-clear:before {
    content: "✕"
}

.btn-group {
    display: inline-flex;
    flex-wrap: wrap
}

.btn-group .btn {
    flex: 1 0 auto
}

.btn-group .btn:first-child:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.btn-group .btn:not(:first-child):not(:last-child) {
    border-radius: 0;
    margin-left: -.1rem
}

.btn-group .btn:last-child:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -.1rem
}

.btn-group .btn.active,.btn-group .btn:active,.btn-group .btn:focus,.btn-group .btn:hover {
    z-index: 1
}

.btn-group.btn-group-block {
    display: flex
}

.btn-group.btn-group-block .btn {
    flex: 1 0 0
}

.form-group {
    margin-bottom: .8rem
}

.form-group.form-footer {
    margin-top: 1rem
}

fieldset,legend {
    margin-bottom: .8rem
}

legend {
    font-size: .8rem;
    font-weight: 500
}

.form-label {
    display: block;
    line-height: 1.2rem;
    padding: .3rem 0
}

.form-label.label-sm {
    font-size: .6rem;
    padding: .1rem 0
}

.form-label.label-lg {
    font-size: .8rem;
    padding: .4rem 0
}

.form-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #fff;
    background-image: none;
    border: .1rem solid #d5d5d5;
    border-radius: .4rem;
    color: #2f2f2f;
    display: block;
    font-size: .7rem;
    height: 1.8rem;
    line-height: 1.2rem;
    max-width: 100%;
    outline: none;
    padding: .2rem .4rem;
    position: relative;
    transition: background .2s,border .2s,box-shadow .2s,color .2s;
    width: 100%
}

.form-input:focus {
    box-shadow: 0 0 0 .1rem rgba(0,82,204,.2);
    border-color: #0052cc
}

.form-input::-moz-placeholder {
    color: #717171
}

.form-input::placeholder {
    color: #717171
}

.form-input.input-sm {
    font-size: .6rem;
    height: 1.4rem;
    padding: 0 .3rem
}

.form-input.input-lg {
    height: 2rem;
    padding: .3rem .6rem
}

.form-input.input-inline {
    display: inline-block;
    vertical-align: middle;
    width: auto
}

.form-input[type=file],textarea.form-input,textarea.form-input.input-lg,textarea.form-input.input-sm {
    height: auto
}

.form-input-hint {
    color: #c8c8c8;
    font-size: .6rem;
    margin-top: .2rem
}

.has-success .form-input-hint,.is-success+.form-input-hint {
    color: #4eaf0a
}

.has-error .form-input-hint,.is-error+.form-input-hint {
    color: #ea3943
}

.form-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: .1rem solid #d5d5d5;
    border-radius: .4rem;
    color: inherit;
    font-size: .7rem;
    height: 1.8rem;
    line-height: 1.2rem;
    outline: none;
    padding: .2rem .4rem;
    vertical-align: middle;
    width: 100%;
    background: #fff
}

.form-select:focus {
    box-shadow: 0 0 0 .1rem rgba(0,82,204,.2);
    border-color: #0052cc
}

.form-select::-ms-expand {
    display: none
}

.form-select.select-sm {
    font-size: .6rem;
    height: 1.4rem;
    padding: 0 1.1rem 0 .3rem
}

.form-select.select-lg {
    font-size: .8rem;
    height: 2rem;
    padding: .3rem 1.4rem .3rem .6rem
}

.form-select[multiple],.form-select[size] {
    height: auto;
    padding: .2rem .4rem
}

.form-select[multiple] option,.form-select[size] option {
    padding: .1rem .2rem
}

.form-select:not([multiple]):not([size]) {
    background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%204%205'%3E%3Cpath%20fill='%23667189'%20d='M2%200L0%202h4zm0%205L0%203h4z'/%3E%3C/svg%3E") no-repeat right .35rem center/.4rem .5rem;
    padding-right: 1.2rem
}

.has-icon-left,.has-icon-right {
    position: relative
}

.has-icon-left .form-icon,.has-icon-right .form-icon {
    height: .8rem;
    margin: 0 .2rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: .8rem;
    z-index: 2
}

.has-icon-left .form-icon {
    left: .1rem
}

.has-icon-left .form-input {
    padding-left: 1.2rem
}

.has-icon-right .form-icon {
    right: .1rem
}

.has-icon-right .form-input {
    padding-right: 1.2rem
}

.form-checkbox,.form-radio,.form-switch {
    display: block;
    line-height: 1.2rem;
    margin: .2rem 0;
    min-height: 1.2rem;
    padding: .1rem .4rem .1rem 1.2rem;
    position: relative
}

.form-checkbox input,.form-radio input,.form-switch input {
    clip: rect(0,0,0,0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    position: absolute;
    width: 1px
}

.form-checkbox input:focus+.form-icon,.form-radio input:focus+.form-icon,.form-switch input:focus+.form-icon {
    box-shadow: 0 0 0 .1rem rgba(0,82,204,.2);
    border-color: #0052cc
}

.form-checkbox input:checked+.form-icon,.form-radio input:checked+.form-icon,.form-switch input:checked+.form-icon {
    background: #0052cc;
    border-color: #0052cc
}

.form-checkbox .form-icon,.form-radio .form-icon,.form-switch .form-icon {
    border: .1rem solid #d5d5d5;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    transition: background .2s,border .2s,box-shadow .2s,color .2s
}

.form-checkbox.input-sm,.form-radio.input-sm,.form-switch.input-sm {
    font-size: .6rem;
    margin: 0
}

.form-checkbox.input-lg,.form-radio.input-lg,.form-switch.input-lg {
    font-size: .8rem;
    margin: .3rem 0
}

.form-checkbox .form-icon,.form-radio .form-icon {
    background: #fff;
    height: .8rem;
    left: 0;
    top: .3rem;
    width: .8rem
}

.form-checkbox input:active+.form-icon,.form-radio input:active+.form-icon {
    background: #eee
}

.form-checkbox .form-icon {
    border-radius: .4rem
}

.form-checkbox input:checked+.form-icon:before {
    background-clip: padding-box;
    border-color: #fff;
    border-style: solid;
    border-width: 0 .2rem .2rem 0;
    content: "";
    height: 9px;
    left: 50%;
    margin-left: -3px;
    margin-top: -6px;
    position: absolute;
    top: 50%;
    transform: rotate(45deg);
    width: 6px
}

.form-checkbox input:indeterminate+.form-icon {
    background: #0052cc;
    border-color: #0052cc
}

.form-checkbox input:indeterminate+.form-icon:before {
    background: #fff;
    content: "";
    height: 2px;
    left: 50%;
    margin-left: -5px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 10px
}

.form-radio .form-icon {
    border-radius: 50%
}

.form-radio input:checked+.form-icon:before {
    background: #fff;
    border-radius: 50%;
    content: "";
    height: 6px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 6px
}

.form-switch {
    padding-left: 2rem
}

.form-switch .form-icon {
    background: #c8c8c8;
    background-clip: padding-box;
    border-radius: .5rem;
    height: 1rem;
    left: 0;
    top: .2rem;
    width: 1.6rem
}

.form-switch .form-icon:before {
    background: #fff;
    border-radius: 50%;
    content: "";
    display: block;
    height: .8rem;
    left: 0;
    position: absolute;
    top: 0;
    transition: background .2s,border .2s,box-shadow .2s,color .2s,left .2s;
    width: .8rem
}

.form-switch input:checked+.form-icon:before {
    left: 12px
}

.form-switch input:active+.form-icon:before {
    background: #f6f6f6
}

.input-group {
    display: flex
}

.input-group .input-group-addon {
    background: #f6f6f6;
    border: .1rem solid #d5d5d5;
    border-radius: .4rem;
    line-height: 1.2rem;
    padding: .2rem .4rem;
    white-space: nowrap
}

.input-group .input-group-addon.addon-sm {
    font-size: .6rem;
    padding: 0 .3rem
}

.input-group .input-group-addon.addon-lg {
    font-size: .8rem;
    padding: .3rem .6rem
}

.input-group .form-input,.input-group .form-select {
    flex: 1 1 auto;
    width: 1%
}

.input-group .input-group-btn {
    z-index: 1
}

.input-group .form-input:first-child:not(:last-child),.input-group .form-select:first-child:not(:last-child),.input-group .input-group-addon:first-child:not(:last-child),.input-group .input-group-btn:first-child:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.input-group .form-input:not(:first-child):not(:last-child),.input-group .form-select:not(:first-child):not(:last-child),.input-group .input-group-addon:not(:first-child):not(:last-child),.input-group .input-group-btn:not(:first-child):not(:last-child) {
    border-radius: 0;
    margin-left: -.1rem
}

.input-group .form-input:last-child:not(:first-child),.input-group .form-select:last-child:not(:first-child),.input-group .input-group-addon:last-child:not(:first-child),.input-group .input-group-btn:last-child:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -.1rem
}

.input-group .form-input:focus,.input-group .form-select:focus,.input-group .input-group-addon:focus,.input-group .input-group-btn:focus {
    z-index: 2
}

.input-group .form-select {
    width: auto
}

.input-group.input-inline {
    display: inline-flex
}

.form-input.is-success,.form-select.is-success,.has-success .form-input,.has-success .form-select {
    background: #dffccb;
    border-color: #4eaf0a
}

.form-input.is-success:focus,.form-select.is-success:focus,.has-success .form-input:focus,.has-success .form-select:focus {
    box-shadow: 0 0 0 .1rem rgba(78,175,10,.2)
}

.form-input.is-error,.form-select.is-error,.has-error .form-input,.has-error .form-select {
    background: #fff;
    border-color: #ea3943
}

.form-input.is-error:focus,.form-select.is-error:focus,.has-error .form-input:focus,.has-error .form-select:focus {
    box-shadow: 0 0 0 .1rem rgba(234,57,67,.2)
}

.form-checkbox.is-error .form-icon,.form-radio.is-error .form-icon,.form-switch.is-error .form-icon,.has-error .form-checkbox .form-icon,.has-error .form-radio .form-icon,.has-error .form-switch .form-icon {
    border-color: #ea3943
}

.form-checkbox.is-error input:checked+.form-icon,.form-radio.is-error input:checked+.form-icon,.form-switch.is-error input:checked+.form-icon,.has-error .form-checkbox input:checked+.form-icon,.has-error .form-radio input:checked+.form-icon,.has-error .form-switch input:checked+.form-icon {
    background: #ea3943;
    border-color: #ea3943
}

.form-checkbox.is-error input:focus+.form-icon,.form-radio.is-error input:focus+.form-icon,.form-switch.is-error input:focus+.form-icon,.has-error .form-checkbox input:focus+.form-icon,.has-error .form-radio input:focus+.form-icon,.has-error .form-switch input:focus+.form-icon {
    box-shadow: 0 0 0 .1rem rgba(234,57,67,.2);
    border-color: #ea3943
}

.form-checkbox.is-error input:indeterminate+.form-icon,.has-error .form-checkbox input:indeterminate+.form-icon {
    background: #ea3943;
    border-color: #ea3943
}

.form-input:not(:-moz-placeholder-shown):invalid {
    border-color: #ea3943
}

.form-input:not(:placeholder-shown):invalid {
    border-color: #ea3943
}

.form-input:not(:-moz-placeholder-shown):invalid:focus {
    box-shadow: 0 0 0 .1rem rgba(234,57,67,.2);
    background: #fff
}

.form-input:not(:placeholder-shown):invalid:focus {
    box-shadow: 0 0 0 .1rem rgba(234,57,67,.2);
    background: #fff
}

.form-input:not(:-moz-placeholder-shown):invalid+.form-input-hint {
    color: #ea3943
}

.form-input:not(:placeholder-shown):invalid+.form-input-hint {
    color: #ea3943
}

.form-input.disabled,.form-input:disabled,.form-select.disabled,.form-select:disabled {
    background-color: #eee;
    cursor: not-allowed;
    opacity: .5
}

.form-input[readonly] {
    background-color: #f6f6f6
}

input.disabled+.form-icon,input:disabled+.form-icon {
    background: #eee;
    cursor: not-allowed;
    opacity: .5
}

.form-switch input.disabled+.form-icon:before,.form-switch input:disabled+.form-icon:before {
    background: #fff
}

.form-horizontal {
    padding: .8rem 0
}

.form-horizontal .form-group {
    display: flex;
    flex-wrap: wrap
}

.form-inline,.label {
    display: inline-block
}

.label {
    border-radius: .2rem;
    line-height: 1.2;
    padding: .1rem .25rem;
    background: #eee;
    color: #3c3c3c
}

.label.label-rounded {
    border-radius: 5rem;
    padding-left: .4rem;
    padding-right: .4rem
}

.label.label-primary {
    background: #0052cc;
    color: #fff
}

.label.label-secondary {
    background: #f4f6fc;
    color: #0052cc
}

.label.label-success {
    background: #4eaf0a;
    color: #fff
}

.label.label-warning {
    background: #ffb700;
    color: #fff
}

.label.label-error {
    background: #ea3943;
    color: #fff
}

.img-responsive {
    display: block;
    height: auto;
    max-width: 100%
}

.img-fit-cover {
    -o-object-fit: cover;
    object-fit: cover
}

.img-fit-contain {
    -o-object-fit: contain;
    object-fit: contain
}

.video-responsive {
    display: block;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%
}

.video-responsive:before {
    content: "";
    display: block;
    padding-bottom: 56.25%
}

.video-responsive embed,.video-responsive iframe,.video-responsive object {
    border: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%
}

video.video-responsive {
    height: auto;
    max-width: 100%
}

video.video-responsive:before {
    content: none
}

.video-responsive-4-3:before {
    padding-bottom: 75%
}

.video-responsive-1-1:before {
    padding-bottom: 100%
}

.figure {
    margin: 0 0 .8rem
}

.figure .figure-caption {
    color: #888;
    margin-top: .8rem
}

.markdown {
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.25rem;
    word-break: break-word
}

.markdown>:first-child {
    margin-top: 0
}

.markdown h1,.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6 {
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 1.2rem;
    margin-top: .4rem
}

.markdown h1+hr,.markdown h2+hr,.markdown h3+hr,.markdown h4+hr,.markdown h5+hr,.markdown h6+hr {
    margin-top: -.4rem
}

.markdown h1 {
    font-size: 28px
}

.markdown h2 {
    font-size: 24px
}

.markdown h3 {
    font-size: 22px
}

.markdown h4 {
    font-size: 20px
}

.markdown h5 {
    font-size: 18px
}

.markdown h6 {
    font-size: 16px
}

.markdown p {
    -webkit-hyphens: auto;
    hyphens: auto;
    margin: 0 0 1.6rem
}

.markdown p:first-child img {
    margin-top: 0
}

.markdown a:not(.btn) {
    border-bottom: .05rem solid transparent;
    color: #222;
    font-weight: 500;
    padding-bottom: .05rem;
    text-decoration: underline
}

.markdown a:not(.btn):active,.markdown a:not(.btn):focus,.markdown a:not(.btn):hover {
    color: #0052cc
}

.markdown a,.markdown ins,.markdown u {
    -webkit-text-decoration-skip: ink edges;
    text-decoration-skip: ink edges
}

.markdown del+del,.markdown del+s,.markdown ins+ins,.markdown ins+u,.markdown s+del,.markdown s+s,.markdown u+ins,.markdown u+u {
    margin-left: .125em
}

.markdown hr {
    background: #eee;
    border: none;
    display: block;
    height: 1px;
    margin: .4rem 0 1.2rem;
    overflow: hidden
}

.markdown hr:after {
    clear: both;
    content: "";
    display: table
}

.markdown ol,.markdown ul {
    margin: 1.6rem 0 1.6rem 1.6rem;
    padding: 0
}

.markdown ol ol,.markdown ol ul,.markdown ul ol,.markdown ul ul {
    margin: .8rem 0 .8rem 1.6rem
}

.markdown ol li,.markdown ul li {
    margin-top: .4rem
}

.markdown ol li>p,.markdown ul li>p {
    display: inline
}

.markdown ul {
    list-style: disc inside
}

.markdown ul ul {
    list-style-type: circle
}

.markdown ul>li>ul>li>ul {
    display: none
}

.markdown ol {
    list-style: decimal inside
}

.markdown ol ol {
    list-style-type: lower-alpha
}

.markdown img {
    border: 0;
    border-radius: .4rem;
    display: block;
    height: auto;
    margin: 1rem auto;
    max-width: 100%
}

.markdown blockquote {
    border-color: #222;
    margin: 1.6rem 0;
    padding: .4rem .8rem .4rem 1.6rem
}

.markdown blockquote p:last-child {
    margin-bottom: 0
}

.markdown table {
    border-collapse: collapse;
    border-spacing: 0;
    display: block;
    font-size: .7rem;
    margin: 1.6rem 0;
    padding-bottom: .75rem;
    text-align: left;
    white-space: wrap;
    width: 100%
}

.markdown table tbody tr:nth-of-type(odd) {
    background: rgba(34,34,34,.05)
}

.markdown table td,.markdown table th {
    min-width: 8rem;
    padding: .8rem
}

@media screen and (max-width: 840px) {
    .markdown table {
        overflow-x:auto;
        white-space: nowrap
    }
}

.markdown code {
    background: #f6f6f6;
    color: #d73e48;
    font-family: SF Mono,Segoe UI Mono,Roboto Mono,Menlo,Courier,monospace;
    font-size: .9em;
    padding: .2em
}

.markdown pre {
    background: #f6f6f6;
    margin: 1.6rem 0;
    overflow-x: auto;
    padding: .4rem .8rem
}

.container {
    margin-left: auto;
    margin-right: auto;
    padding-left: .8rem;
    padding-right: .8rem;
    width: 100%
}

.container.grid-xl {
    max-width: calc(.8rem + 1200px)
}

.container.grid-lg {
    max-width: calc(.8rem + 960px)
}

.container.grid-md {
    max-width: calc(.8rem + 840px)
}

.container.grid-sm {
    max-width: calc(.8rem + 600px)
}

.container.grid-xs {
    max-width: calc(.8rem + 480px)
}

.show-lg,.show-md,.show-sm,.show-xl,.show-xs {
    display: none!important
}

.columns {
    display: flex;
    flex-wrap: wrap;
    margin-left: -.8rem;
    margin-right: -.8rem
}

.columns.col-gapless {
    margin-left: 0;
    margin-right: 0
}

.columns.col-gapless>.column {
    padding-left: 0;
    padding-right: 0
}

.columns.col-oneline {
    flex-wrap: nowrap;
    overflow-x: auto
}

.column {
    flex: 1;
    max-width: 100%;
    padding-left: .8rem;
    padding-right: .8rem
}

.column.col-1,.column.col-10,.column.col-11,.column.col-12,.column.col-2,.column.col-3,.column.col-4,.column.col-5,.column.col-6,.column.col-7,.column.col-8,.column.col-9,.column.col-auto {
    flex: none
}

.col-12 {
    width: 100%
}

.col-11 {
    width: 91.66666667%
}

.col-10 {
    width: 83.33333333%
}

.col-9 {
    width: 75%
}

.col-8 {
    width: 66.66666667%
}

.col-7 {
    width: 58.33333333%
}

.col-6 {
    width: 50%
}

.col-5 {
    width: 41.66666667%
}

.col-4 {
    width: 33.33333333%
}

.col-3 {
    width: 25%
}

.col-2 {
    width: 16.66666667%
}

.col-1 {
    width: 8.33333333%
}

.col-auto {
    flex: 0 0 auto;
    max-width: none;
    width: auto
}

.col-mx-auto {
    margin-right: auto
}

.col-ml-auto,.col-mx-auto {
    margin-left: auto
}

.col-mr-auto {
    margin-right: auto
}

@media(max-width: 1200px) {
    .col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto {
        flex:none
    }

    .col-xl-12 {
        width: 100%
    }

    .col-xl-11 {
        width: 91.66666667%
    }

    .col-xl-10 {
        width: 83.33333333%
    }

    .col-xl-9 {
        width: 75%
    }

    .col-xl-8 {
        width: 66.66666667%
    }

    .col-xl-7 {
        width: 58.33333333%
    }

    .col-xl-6 {
        width: 50%
    }

    .col-xl-5 {
        width: 41.66666667%
    }

    .col-xl-4 {
        width: 33.33333333%
    }

    .col-xl-3 {
        width: 25%
    }

    .col-xl-2 {
        width: 16.66666667%
    }

    .col-xl-1 {
        width: 8.33333333%
    }

    .col-xl-auto {
        width: auto
    }

    .hide-xl {
        display: none!important
    }

    .show-xl {
        display: block!important
    }
}

@media(max-width: 960px) {
    .col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto {
        flex:none
    }

    .col-lg-12 {
        width: 100%
    }

    .col-lg-11 {
        width: 91.66666667%
    }

    .col-lg-10 {
        width: 83.33333333%
    }

    .col-lg-9 {
        width: 75%
    }

    .col-lg-8 {
        width: 66.66666667%
    }

    .col-lg-7 {
        width: 58.33333333%
    }

    .col-lg-6 {
        width: 50%
    }

    .col-lg-5 {
        width: 41.66666667%
    }

    .col-lg-4 {
        width: 33.33333333%
    }

    .col-lg-3 {
        width: 25%
    }

    .col-lg-2 {
        width: 16.66666667%
    }

    .col-lg-1 {
        width: 8.33333333%
    }

    .col-lg-auto {
        width: auto
    }

    .hide-lg {
        display: none!important
    }

    .show-lg {
        display: block!important
    }
}

@media(max-width: 840px) {
    .col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto {
        flex:none
    }

    .col-md-12 {
        width: 100%
    }

    .col-md-11 {
        width: 91.66666667%
    }

    .col-md-10 {
        width: 83.33333333%
    }

    .col-md-9 {
        width: 75%
    }

    .col-md-8 {
        width: 66.66666667%
    }

    .col-md-7 {
        width: 58.33333333%
    }

    .col-md-6 {
        width: 50%
    }

    .col-md-5 {
        width: 41.66666667%
    }

    .col-md-4 {
        width: 33.33333333%
    }

    .col-md-3 {
        width: 25%
    }

    .col-md-2 {
        width: 16.66666667%
    }

    .col-md-1 {
        width: 8.33333333%
    }

    .col-md-auto {
        width: auto
    }

    .hide-md {
        display: none!important
    }

    .show-md {
        display: block!important
    }
}

@media(max-width: 600px) {
    .col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto {
        flex:none
    }

    .col-sm-12 {
        width: 100%
    }

    .col-sm-11 {
        width: 91.66666667%
    }

    .col-sm-10 {
        width: 83.33333333%
    }

    .col-sm-9 {
        width: 75%
    }

    .col-sm-8 {
        width: 66.66666667%
    }

    .col-sm-7 {
        width: 58.33333333%
    }

    .col-sm-6 {
        width: 50%
    }

    .col-sm-5 {
        width: 41.66666667%
    }

    .col-sm-4 {
        width: 33.33333333%
    }

    .col-sm-3 {
        width: 25%
    }

    .col-sm-2 {
        width: 16.66666667%
    }

    .col-sm-1 {
        width: 8.33333333%
    }

    .col-sm-auto {
        width: auto
    }

    .hide-sm {
        display: none!important
    }

    .show-sm {
        display: block!important
    }
}

@media(max-width: 480px) {
    .col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9,.col-xs-auto {
        flex:none
    }

    .col-xs-12 {
        width: 100%
    }

    .col-xs-11 {
        width: 91.66666667%
    }

    .col-xs-10 {
        width: 83.33333333%
    }

    .col-xs-9 {
        width: 75%
    }

    .col-xs-8 {
        width: 66.66666667%
    }

    .col-xs-7 {
        width: 58.33333333%
    }

    .col-xs-6 {
        width: 50%
    }

    .col-xs-5 {
        width: 41.66666667%
    }

    .col-xs-4 {
        width: 33.33333333%
    }

    .col-xs-3 {
        width: 25%
    }

    .col-xs-2 {
        width: 16.66666667%
    }

    .col-xs-1 {
        width: 8.33333333%
    }

    .col-xs-auto {
        width: auto
    }

    .hide-xs {
        display: none!important
    }

    .show-xs {
        display: block!important
    }
}

.navbar {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
}

.navbar .navbar-section {
    align-items: center;
    display: flex;
    flex: 1 0 0
}

.navbar .navbar-section:not(:first-child):last-child {
    justify-content: flex-end
}

.navbar .navbar-center {
    align-items: center;
    display: flex;
    flex: 0 0 auto
}

.navbar .navbar-brand {
    font-size: .8rem;
    text-decoration: none
}

.modal {
    align-items: center;
    bottom: 0;
    display: none;
    justify-content: center;
    left: 0;
    opacity: 0;
    overflow: hidden;
    padding: .8rem;
    position: fixed;
    right: 0;
    top: 0
}

.modal.active,.modal:target {
    display: flex;
    opacity: 1;
    z-index: 400
}

.modal.active .modal-overlay,.modal:target .modal-overlay {
    background: hsla(0,0%,96%,.75);
    bottom: 0;
    cursor: default;
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0
}

.modal.active .modal-container,.modal:target .modal-container {
    animation: slide-down .2s ease 1;
    z-index: 1
}

.modal.modal-sm .modal-container {
    max-width: 320px;
    padding: 0 .4rem
}

.modal.modal-lg .modal-overlay {
    background: #fff
}

.modal.modal-lg .modal-container {
    box-shadow: none;
    max-width: 960px
}

.modal-container {
    box-shadow: 0 .2rem 1.4rem rgba(34,34,34,.3);
    background: #fff;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    max-height: 75vh;
    max-width: 640px;
    padding: 0 .8rem;
    width: 100%
}

.modal-container.modal-fullheight {
    max-height: 100vh
}

.modal-container .modal-header {
    color: #222;
    padding: .8rem
}

.modal-container .modal-body {
    overflow-y: auto;
    padding: .8rem;
    position: relative
}

.modal-container .modal-footer {
    padding: .8rem;
    text-align: right
}

.breadcrumb {
    font-size: .6rem;
    list-style: none;
    margin: .2rem 0;
    padding: .2rem 0
}

.breadcrumb .breadcrumb-item {
    color: #888;
    display: inline-block;
    margin: 0 .2rem 0 0;
    padding: .2rem 0
}

.breadcrumb .breadcrumb-item a {
    color: #888
}

.breadcrumb .breadcrumb-item:not(:first-child):before {
    color: #888;
    content: "→";
    padding-right: .2rem
}

.card {
    border-radius: .4rem;
    display: flex;
    flex-direction: column
}

.card .card-body,.card .card-footer,.card .card-header {
    padding: .8rem .8rem 0
}

.card .card-body:last-child,.card .card-footer:last-child,.card .card-header:last-child {
    padding-bottom: .8rem
}

.card .card-body {
    flex: 1 1 auto
}

.card .card-image {
    padding-top: .8rem
}

.card .card-image:first-child {
    padding-top: 0
}

.card .card-image:first-child img {
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem
}

.card .card-image:last-child img {
    border-bottom-left-radius: .4rem;
    border-bottom-right-radius: .4rem
}

.dropdown {
    display: inline-block;
    position: relative
}

.dropdown .menu {
    animation: slide-down .15s ease 1;
    display: none;
    left: 0;
    max-height: 50vh;
    overflow-y: auto;
    position: absolute;
    top: 90%
}

.dropdown.dropdown-right .menu {
    left: auto;
    right: 0
}

.dropdown .dropdown-toggle:focus+.menu,.dropdown .dropdown-toggle:focus>.menu,.dropdown .menu:hover,.dropdown.active .menu,.dropdown:focus .menu,.dropdown:hover .menu {
    display: block
}

.dropdown .btn-group .dropdown-toggle:nth-last-child(2) {
    border-bottom-right-radius: .4rem;
    border-top-right-radius: .4rem
}

.empty {
    border-radius: .4rem;
    color: #888;
    text-align: center;
    padding: 1.6rem
}

.empty .empty-icon {
    margin-bottom: .8rem
}

.empty .empty-subtitle,.empty .empty-title {
    margin: .8rem auto
}

.empty .empty-action {
    margin-top: .8rem
}

.menu {
    box-shadow: 0 1rem 3rem rgba(34,34,34,.3);
    background: #fff;
    border-radius: .8rem;
    list-style: none;
    margin: 0;
    min-width: 180px;
    padding: .8rem;
    transform: translateY(.2rem);
    z-index: 300
}

.menu.menu-nav {
    background: transparent;
    box-shadow: none
}

.menu .menu-item {
    margin-top: 0;
    padding: 0;
    text-decoration: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.menu .menu-item>a {
    align-items: center;
    color: inherit;
    display: flex;
    margin: 0;
    padding: .4rem;
    text-decoration: none
}

.menu .menu-item>a.active,.menu .menu-item>a:active,.menu .menu-item>a:focus,.menu .menu-item>a:hover {
    color: rgba(34,34,34,.75)
}

.menu .menu-item>span {
    align-items: center;
    color: inherit;
    display: flex;
    margin: 0;
    padding: .4rem
}

.tab {
    align-items: center;
    background: rgba(34,34,34,.05);
    border: .05rem solid rgba(34,34,34,.01);
    border-radius: .4rem;
    box-shadow: 0 .1rem .4rem rgba(34,34,34,.05);
    display: inline-flex;
    flex-wrap: wrap;
    list-style: none;
    margin: .2rem 0;
    padding: .2rem
}

.tab .tab-item {
    margin-top: 0
}

.tab .tab-item a {
    border-radius: .4rem;
    color: inherit;
    display: block;
    font-size: .6rem;
    margin: 0 .05rem;
    padding: .2rem .4rem;
    text-decoration: none
}

.tab .tab-item a:focus,.tab .tab-item a:hover {
    background: hsla(0,0%,100%,.35);
    color: #222
}

.tab .tab-item a.active,.tab .tab-item.active a {
    background: #fff;
    box-shadow: 0 .1rem .4rem rgba(34,34,34,.05);
    color: #222
}

.tab .tab-item.tab-action {
    flex: 1 0 auto;
    text-align: right
}

.tab .tab-item .btn-clear {
    margin-top: -.2rem
}

.tab.tab-block .tab-item {
    flex: 1 0 0;
    text-align: center
}

.tab.tab-block .tab-item a {
    margin: 0
}

.tab.tab-block .tab-item .badge[data-badge]:after {
    position: absolute;
    right: .1rem;
    top: .1rem;
    transform: translate(0)
}

.tab:not(.tab-block) .badge {
    padding-right: 0
}

.tile {
    align-content: space-between;
    align-items: flex-start;
    display: flex
}

.tile .tile-action,.tile .tile-icon {
    flex: 0 0 auto
}

.tile .tile-content {
    flex: 1 1 auto
}

.tile .tile-content:not(:first-child) {
    padding-left: .4rem
}

.tile .tile-content:not(:last-child) {
    padding-right: .4rem
}

.tile .tile-subtitle,.tile .tile-title {
    line-height: 1.2rem
}

.tile.tile-centered {
    align-items: center
}

.tile.tile-centered .tile-content {
    overflow: hidden
}

.tile.tile-centered .tile-subtitle,.tile.tile-centered .tile-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0
}

.tooltip {
    position: relative
}

.tooltip:after {
    background: rgba(34,34,34,.95);
    border-radius: .4rem;
    bottom: 100%;
    color: #fff;
    content: attr(data-tooltip);
    display: block;
    font-size: .6rem;
    left: 50%;
    max-width: 320px;
    opacity: 0;
    overflow: hidden;
    padding: .2rem .4rem;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    transform: translate(-50%,.4rem);
    transition: opacity .2s,transform .2s;
    white-space: pre;
    z-index: 300
}

.tooltip:focus:after,.tooltip:hover:after {
    opacity: 1;
    transform: translate(-50%,-.2rem)
}

.tooltip.disabled,.tooltip[disabled] {
    pointer-events: auto
}

.tooltip.tooltip-right:after {
    bottom: 50%;
    left: 100%;
    transform: translate(-.2rem,50%)
}

.tooltip.tooltip-right:focus:after,.tooltip.tooltip-right:hover:after {
    transform: translate(.2rem,50%)
}

.tooltip.tooltip-bottom:after {
    bottom: auto;
    top: 100%;
    transform: translate(-50%,-.4rem)
}

.tooltip.tooltip-bottom:focus:after,.tooltip.tooltip-bottom:hover:after {
    transform: translate(-50%,.2rem)
}

.tooltip.tooltip-left:after {
    bottom: 50%;
    left: auto;
    right: 100%;
    transform: translate(.4rem,50%)
}

.tooltip.tooltip-left:focus:after,.tooltip.tooltip-left:hover:after {
    transform: translate(-.2rem,50%)
}

.pagination {
    display: flex;
    list-style: none;
    margin: .2rem 0;
    padding: .2rem 0
}

.pagination .page-item {
    margin: .2rem .05rem
}

.pagination .page-item span {
    display: inline-block;
    padding: .2rem
}

.pagination .page-item a {
    border-radius: .4rem;
    display: inline-block;
    padding: .4rem;
    text-decoration: none
}

.pagination .page-item a:focus,.pagination .page-item a:hover {
    color: #0052cc
}

.pagination .page-item.disabled a {
    cursor: default;
    opacity: .5;
    pointer-events: none
}

.pagination .page-item.active a {
    background: #222;
    color: #fff
}

.pagination .page-item.page-next,.pagination .page-item.page-prev {
    flex: 1 0 50%
}

.pagination .page-item.page-next {
    text-align: right
}

.pagination .page-item .page-item-title {
    margin: 0
}

.pagination .page-item .page-item-subtitle {
    margin: 0;
    opacity: .5
}

.panel {
    border: .1rem solid #eee;
    border-radius: .4rem;
    display: flex;
    flex-direction: column
}

.panel .panel-footer,.panel .panel-header {
    flex: 0 0 auto;
    padding: .8rem
}

.panel .panel-nav {
    flex: 0 0 auto
}

.panel .panel-body {
    flex: 1 1 auto;
    overflow-y: auto;
    padding: 0 .8rem
}

@keyframes loading {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

@keyframes slide-down {
    0% {
        opacity: 0;
        transform: translateY(-1.6rem)
    }

    to {
        opacity: 1;
        transform: translateY(0)
    }
}

.text-primary {
    color: #0052cc!important
}

a.text-primary:focus,a.text-primary:hover {
    color: #0048b3
}

a.text-primary:visited {
    color: #005ce6
}

.text-secondary {
    color: #e8ecf9!important
}

a.text-secondary:focus,a.text-secondary:hover {
    color: #d4dcf3
}

a.text-secondary:visited {
    color: #fcfdfe
}

.text-gray {
    color: #888!important
}

a.text-gray:focus,a.text-gray:hover {
    color: #7b7b7b
}

a.text-gray:visited {
    color: #959595
}

.text-light {
    color: #fff!important
}

a.text-light:focus,a.text-light:hover {
    color: #f2f2f2
}

a.text-light:visited {
    color: #fff
}

.text-dark {
    color: #2f2f2f!important
}

a.text-dark:focus,a.text-dark:hover {
    color: #222
}

a.text-dark:visited {
    color: #3c3c3c
}

.text-success {
    color: #4eaf0a!important
}

a.text-success:focus,a.text-success:hover {
    color: #439709
}

a.text-success:visited {
    color: #59c70b
}

.text-warning {
    color: #ffb700!important
}

a.text-warning:focus,a.text-warning:hover {
    color: #e6a500
}

a.text-warning:visited {
    color: #ffbe1a
}

.text-error {
    color: #ea3943!important
}

a.text-error:focus,a.text-error:hover {
    color: #e8222d
}

a.text-error:visited {
    color: #ec5059
}

.bg-primary {
    background: #0052cc!important;
    color: #fff
}

.bg-secondary {
    background: #f4f6fc!important
}

.bg-dark {
    background: #222!important;
    color: #fff
}

.bg-gray {
    background: #f6f6f6!important
}

.bg-success {
    background: #4eaf0a!important;
    color: #fff
}

.bg-warning {
    background: #ffb700!important;
    color: #fff
}

.bg-error {
    background: #ea3943!important;
    color: #fff
}

.c-hand {
    cursor: pointer
}

.c-move {
    cursor: move
}

.c-zoom-in {
    cursor: zoom-in
}

.c-zoom-out {
    cursor: zoom-out
}

.c-not-allowed {
    cursor: not-allowed
}

.c-auto {
    cursor: auto
}

.d-block {
    display: block
}

.d-inline {
    display: inline
}

.d-inline-block {
    display: inline-block
}

.d-flex {
    display: flex
}

.d-inline-flex {
    display: inline-flex
}

.d-hide,.d-none {
    display: none!important
}

.d-visible {
    visibility: visible
}

.d-invisible {
    visibility: hidden
}

.text-hide {
    background: transparent;
    border: 0;
    color: transparent;
    font-size: 0;
    line-height: 0;
    text-shadow: none
}

.text-assistive {
    border: 0;
    clip: rect(0,0,0,0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    width: 1px
}

.divider,.divider-vert {
    display: block;
    position: relative
}

.divider-vert[data-content]:after,.divider[data-content]:after {
    background: #fff;
    color: #c8c8c8;
    content: attr(data-content);
    display: inline-block;
    font-size: .6rem;
    line-height: .6rem;
    padding: 0 .4rem;
    transform: translateY(-.6rem)
}

.divider {
    border-top: .05rem solid #d5d5d5;
    height: .1rem;
    margin: .4rem 0
}

.divider[data-content] {
    margin: .8rem 0
}

.divider-vert {
    display: block;
    padding: .8rem
}

.divider-vert:before {
    border-left: .1rem solid #eee;
    bottom: .4rem;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: .4rem;
    transform: translateX(-50%)
}

.divider-vert[data-content]:after {
    left: 50%;
    padding: .2rem 0;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%)
}

.loading {
    color: transparent!important;
    min-height: .8rem;
    pointer-events: none;
    position: relative
}

.loading:after {
    animation: loading .5s linear infinite;
    border-radius: 50%;
    border-color: transparent transparent #222 #222;
    border-style: solid;
    border-width: .1rem;
    content: "";
    display: block;
    height: .8rem;
    left: 50%;
    margin-left: -.4rem;
    margin-top: -.4rem;
    position: absolute;
    top: 50%;
    width: .8rem;
    z-index: 1
}

.loading.loading-lg {
    min-height: 2rem
}

.loading.loading-lg:after {
    height: 1.6rem;
    margin-left: -.8rem;
    margin-top: -.8rem;
    width: 1.6rem
}

.clearfix:after {
    clear: both;
    content: "";
    display: table
}

.float-left {
    float: left!important
}

.float-right {
    float: right!important
}

.p-relative {
    position: relative!important
}

.p-absolute {
    position: absolute!important
}

.p-fixed {
    position: fixed!important
}

.p-sticky {
    position: sticky!important
}

.p-centered {
    display: block;
    float: none;
    margin-left: auto;
    margin-right: auto
}

.flex-centered {
    align-items: center;
    display: flex;
    justify-content: center
}

.m-auto {
    margin: auto!important
}

.mb-auto {
    margin-bottom: auto!important
}

.ml-auto {
    margin-left: auto!important
}

.mr-auto {
    margin-right: auto!important
}

.mt-auto {
    margin-top: auto!important
}

.mx-auto {
    margin-left: auto!important;
    margin-right: auto!important
}

.my-auto {
    margin-bottom: auto!important;
    margin-top: auto!important
}

.m-0 {
    margin: 0!important
}

.mb-0 {
    margin-bottom: 0!important
}

.ml-0 {
    margin-left: 0!important
}

.mr-0 {
    margin-right: 0!important
}

.mt-0 {
    margin-top: 0!important
}

.mx-0 {
    margin-left: 0!important;
    margin-right: 0!important
}

.my-0 {
    margin-bottom: 0!important;
    margin-top: 0!important
}

.m-1 {
    margin: .2rem!important
}

.mb-1 {
    margin-bottom: .2rem!important
}

.ml-1 {
    margin-left: .2rem!important
}

.mr-1 {
    margin-right: .2rem!important
}

.mt-1 {
    margin-top: .2rem!important
}

.mx-1 {
    margin-left: .2rem!important;
    margin-right: .2rem!important
}

.my-1 {
    margin-bottom: .2rem!important;
    margin-top: .2rem!important
}

.m-2 {
    margin: .4rem!important
}

.mb-2 {
    margin-bottom: .4rem!important
}

.ml-2 {
    margin-left: .4rem!important
}

.mr-2 {
    margin-right: .4rem!important
}

.mt-2 {
    margin-top: .4rem!important
}

.mx-2 {
    margin-left: .4rem!important;
    margin-right: .4rem!important
}

.my-2 {
    margin-bottom: .4rem!important;
    margin-top: .4rem!important
}

.p-0 {
    padding: 0!important
}

.pb-0 {
    padding-bottom: 0!important
}

.pl-0 {
    padding-left: 0!important
}

.pr-0 {
    padding-right: 0!important
}

.pt-0 {
    padding-top: 0!important
}

.px-0 {
    padding-left: 0!important;
    padding-right: 0!important
}

.py-0 {
    padding-bottom: 0!important;
    padding-top: 0!important
}

.p-1 {
    padding: .2rem!important
}

.pb-1 {
    padding-bottom: .2rem!important
}

.pl-1 {
    padding-left: .2rem!important
}

.pr-1 {
    padding-right: .2rem!important
}

.pt-1 {
    padding-top: .2rem!important
}

.px-1 {
    padding-left: .2rem!important;
    padding-right: .2rem!important
}

.py-1 {
    padding-bottom: .2rem!important;
    padding-top: .2rem!important
}

.p-2 {
    padding: .4rem!important
}

.pb-2 {
    padding-bottom: .4rem!important
}

.pl-2 {
    padding-left: .4rem!important
}

.pr-2 {
    padding-right: .4rem!important
}

.pt-2 {
    padding-top: .4rem!important
}

.px-2 {
    padding-left: .4rem!important;
    padding-right: .4rem!important
}

.py-2 {
    padding-bottom: .4rem!important;
    padding-top: .4rem!important
}

.s-rounded {
    border-radius: .4rem
}

.s-circle {
    border-radius: 50%
}

.text-left {
    text-align: left
}

.text-right {
    text-align: right
}

.text-center {
    text-align: center
}

.text-justify {
    text-align: justify
}

.text-lowercase {
    text-transform: lowercase
}

.text-uppercase {
    text-transform: uppercase
}

.text-capitalize {
    text-transform: capitalize
}

.text-normal {
    font-weight: 400
}

.text-bold {
    font-weight: 700
}

.text-italic {
    font-style: italic
}

.text-small {
    font-size: .8em
}

.text-large {
    font-size: 1.2em
}

.text-underline {
    text-decoration: underline
}

.text-ellipsis {
    text-overflow: ellipsis
}

.text-clip,.text-ellipsis {
    overflow: hidden;
    white-space: nowrap
}

.text-clip {
    text-overflow: clip
}

.text-break {
    -webkit-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
    word-wrap: break-word
}

/*! New Awesomenear.com | MIT License */
html {
    scroll-behavior: smooth;
    scroll-padding-top: 1rem
}

.near-container {
    display: flex;
    flex-direction: column;
    width: 100vw
}

.near-bg:after,.near-bg:before {
    border-radius: 50%;
    content: "";
    display: block;
    filter: blur(3rem);
    height: 50vh;
    position: fixed;
    width: 50vh;
    z-index: -1
}

.near-bg:before {
    background: linear-gradient(270deg,#fff0e2 35%,#d7dbff);
    right: 15vh;
    top: 10vh
}

.near-bg:after {
    background: linear-gradient(180deg,#e1d7ff 25%,#e1f4f8);
    bottom: 10vh;
    left: 15vh
}

@media screen and (max-width: 600px) {
    .menu-overlay {
        background:rgba(34,34,34,.15);
        height: 100vh;
        left: 0;
        overscroll-behavior: contain;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 1
    }
}

.section-topheader {
    background: no-repeat url(/web/20230521202108im_/https://awesomenear.com/img/nearcon-2022.jpg) 50%;
    background-size: cover
}

.section-topheader a {
    align-items: center;
    display: flex;
    font-size: .65rem;
    height: 2rem;
    justify-content: center;
    text-decoration: none;
    transition: transform .15s ease-in;
    width: 100vw
}

.section-topheader a:focus,.section-topheader a:hover {
    transform: scale(1.02)
}

.awesome-header {
    padding: .5rem;
    width: 100vw
}

.awesome-header .header-container {
    align-items: center;
    display: flex;
    justify-content: space-between
}

.awesome-header .header-container .near-search {
    flex: 0 1 12rem;
    width: 12rem
}

.awesome-header .header-container .language-switcher {
    flex: 0 1 4rem;
    width: 12rem;
    margin: 0 .5rem
}

.awesome-header .menu-toggle {
    display: none
}

@media screen and (max-width: 600px) {
    .awesome-header .menu-toggle {
        display:inline-flex;
        margin-left: auto;
        position: relative;
        z-index: 99
    }

    .awesome-header.active {
        position: sticky;
        top: 0;
        z-index: 999
    }

    .awesome-header.active .near-menu {
        animation: slide-down .15s ease 1;
        background: #fff;
        border-radius: .4rem;
        box-shadow: 0 .2rem 1rem rgba(34,34,34,.1);
        display: flex;
        flex-direction: column;
        font-size: .8rem;
        left: 0;
        margin-left: 0;
        padding: 4rem 1.4rem .5rem;
        position: fixed;
        right: 0;
        top: -1rem;
        z-index: 9
    }

    .awesome-header.active .near-menu .btn {
        display: flex;
        justify-content: center;
        margin: .25rem auto;
        order: 2;
        width: 100%
    }

    .awesome-header.active .near-menu .menu-submit {
        margin-left: unset
    }

    .awesome-header.active .near-menu .menu-divider {
        border-color: #eee;
        order: 3;
        width: 100%
    }

    .awesome-header.active .near-menu .menu-submit,.awesome-header.active .near-menu .menu-twitter {
        order: 9
    }

    .awesome-header.active .near-menu .menu-homepage {
        display: flex
    }

    .awesome-header.active .near-menu .near-search {
        flex: 1 1 100%;
        width: 100%
    }

    .awesome-header.active .near-menu .near-search .search-container {
        margin: .5rem 0;
        max-width: 100%
    }
}

.awesome-header .near-menu {
    align-items: center;
    display: flex;
    flex: 1;
    font-weight: 600;
    margin-left: 1rem
}

@media screen and (max-width: 600px) {
    .awesome-header .near-menu {
        display:none
    }
}

.awesome-header .near-menu .btn {
    background: transparent;
    font-size: .75rem;
    margin-right: .2rem
}

.awesome-header .near-menu .btn:focus,.awesome-header .near-menu .btn:hover {
    background: rgba(34,34,34,.05);
    border-color: transparent
}

.awesome-header .near-menu .btn.active,.awesome-header .near-menu .btn:active {
    background: rgba(34,34,34,.1);
    border-color: transparent
}

.awesome-header .near-menu .menu-homepage {
    display: none
}

.awesome-header .near-menu .menu-submit {
    margin-left: auto
}

.awesome-header .near-header {
    align-items: center;
    display: flex;
    flex: 1;
    padding: 0;
    z-index: 999
}

.awesome-brand {
    align-items: center;
    border-radius: .8rem;
    display: inline-flex;
    font-size: .8rem;
    font-weight: 800;
    height: 2.5rem;
    margin-right: .4rem;
    padding: .6rem 0;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    z-index: 99
}

.awesome-brand,.awesome-brand:focus,.awesome-brand:hover {
    text-decoration: none
}

.awesome-brand img {
    height: 1.25rem;
    width: auto
}

.awesome-brand .brand-primary {
    background: rgba(0,82,204,.95);
    border: .1rem solid rgba(0,82,204,.95);
    border-radius: .4rem;
    box-shadow: 0 .1rem .4rem rgba(0,82,204,.5);
    color: #fff;
    font-size: .7rem;
    font-weight: 800;
    height: 1.4rem;
    line-height: .9rem;
    padding: .15rem
}

.awesome-brand .brand-secondary {
    color: #0052cc;
    height: 1.5rem;
    line-height: .9rem;
    margin-left: .1rem;
    padding: .3rem .2rem .3rem .1rem
}

.awesome-footer {
    padding: 1rem .5rem;
    text-align: center
}

.awesome-footer .disclaimer-container {
    background: rgba(34,34,34,.05);
    border-radius: .4rem;
    margin-bottom: 1rem;
    padding: 1rem
}

.awesome-footer .footer-link-title {
    font-size: .8rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 2rem
}

.awesome-footer .footer-link {
    font-size: .7rem;
    font-weight: 400;
    line-height: 1.5
}

.hero-container .near-item {
    height: auto;
    min-height: auto
}

.awesome-home {
    padding-bottom: 2rem;
    padding-top: 2rem
}

.awesome-home .hero-title {
    align-items: center;
    font-size: 2rem;
    font-weight: 900;
    line-height: 2.8rem;
    margin: 0 auto;
    max-width: 840px
}

.awesome-home .hero-title .hero-title-count {
    display: inline-block;
    min-width: 4.4rem
}

.awesome-home .hero-error {
    font-size: 6rem;
    font-weight: 800
}

.awesome-home .hero-actions {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem auto;
    max-width: 840px
}

.awesome-home .hero-actions .action-link {
    align-items: center;
    background: rgba(34,34,34,.05);
    border-radius: 1.1rem;
    display: inline-flex;
    font-size: .8rem;
    font-weight: 600;
    height: 2.2rem;
    margin: .2rem;
    padding: .2rem .6rem .2rem .2rem;
    text-decoration: none;
    transition: all .15s ease;
    white-space: nowrap
}

.awesome-home .hero-actions .action-link:focus,.awesome-home .hero-actions .action-link:hover {
    background: rgba(34,34,34,.1);
    box-shadow: 0 .2rem 1.2rem rgba(34,34,34,.05);
    transform: translateY(-.05rem)
}

.awesome-home .hero-actions .action-link.btn-black {
    background: #222;
    color: #fff
}

.awesome-home .hero-actions .action-link .action-icon {
    align-items: center;
    background: hsla(0,0%,100%,.5);
    border: .1rem solid hsla(0,0%,100%,.5);
    border-radius: 50%;
    display: inline-flex;
    font-size: 1.2rem;
    height: 1.8rem;
    justify-content: center;
    margin-right: .2rem;
    width: 1.8rem
}

.awesome-home .hero-actions .action-link .action-icon+.action-icon {
    margin-left: -.6rem
}

.awesome-home .hero-series {
    align-items: center;
    border: .1rem solid transparent;
    border-radius: 1rem;
    display: inline-flex;
    font-size: .9rem;
    font-weight: 600;
    line-height: 1rem;
    margin-top: -.2rem;
    padding: .45rem .5rem;
    text-decoration: none;
    transition: all .15s ease;
    vertical-align: middle
}

.awesome-home .hero-series .icon-series {
    height: 1rem;
    margin-right: .1rem;
    width: 1rem
}

.awesome-home .hero-series.near {
    background: rgba(38,38,38,.075);
    border-color: #262626;
    color: #262626
}

.awesome-home .hero-series.aurora {
    background: rgba(120,214,75,.2);
    border-color: #78d64b;
    color: #5dc22c
}

.awesome-home .hero-series.octopus {
    background: rgba(35,61,174,.1);
    border-color: #233dae;
    color: #233dae
}

.awesome-home .hero-series:focus,.awesome-home .hero-series:hover {
    box-shadow: 0 .2rem 1.2rem rgba(34,34,34,.1);
    transform: translateY(-.05rem)
}

.awesome-articles {
    margin-bottom: 2rem;
    margin-top: 2rem
}

.awesome-articles .article-link {
    border-radius: .4rem;
    display: flex;
    margin: 0 -.5rem;
    padding: .5rem;
    text-decoration: none;
    transition: all .15s ease
}

.awesome-articles .article-link:focus,.awesome-articles .article-link:hover {
    background: rgba(34,34,34,.05)
}

.awesome-articles .article-link .article-image {
    flex: 0 0 auto;
    margin-right: .5rem;
    width: 2.4rem
}

.awesome-articles .article-link .article-image img {
    border-radius: .4rem;
    box-shadow: 0 .1rem .4rem rgba(34,34,34,.15);
    height: 2rem;
    width: 2.4rem;
    -o-object-fit: cover;
    object-fit: cover
}

.awesome-articles .article-link .article-content {
    display: -webkit-box;
    font-size: .7rem;
    font-weight: 600;
    height: 100%;
    line-height: 1rem;
    max-height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical
}

.awesome-stats {
    align-items: center;
    background: #fff;
    box-shadow: 0 .2rem 1.6rem rgba(34,34,34,.05);
    display: flex;
    flex-wrap: nowrap;
    height: 5rem;
    margin-top: 1rem;
    overflow-x: auto;
    padding: 1rem
}

.awesome-stats::-webkit-scrollbar {
    display: none
}

.awesome-stats .stats-link {
    display: flex;
    text-decoration: none;
    padding: 0 2rem;
    white-space: nowrap
}

.awesome-stats .stats-link:not(:last-child) {
    border-right: .05rem solid #d7dbff
}

.awesome-stats .stats-link .stats-value {
    font-size: 1.8rem;
    font-weight: 800;
    letter-spacing: -.05rem;
    line-height: 2rem;
    margin-right: 1rem
}

.awesome-stats .stats-link .stats-info {
    font-size: .65rem;
    height: .8rem;
    line-height: 1rem
}

.awesome-trending {
    margin-bottom: 2rem;
    margin-top: 2rem
}

.awesome-trending .awesome-trending-header {
    align-items: center;
    display: flex;
    font-size: 1rem;
    justify-content: center;
    margin: 1rem auto
}

.awesome-trending .awesome-trending-content {
    align-items: flex-start;
    display: flex;
    flex-wrap: nowrap;
    margin-top: 1rem;
    overflow-x: auto
}

.awesome-trending .awesome-trending-content::-webkit-scrollbar {
    display: none
}

.awesome-trending .near-item-sm {
    flex: 0 0 auto;
    margin-right: .1rem;
    width: 5.5rem
}

.awesome-cards .awesome-card-item {
    background: #fff;
    border-radius: .8rem;
    box-shadow: 0 .2rem 1.6rem rgba(34,34,34,.15);
    margin: 1rem 0;
    padding: 1rem 0
}

.awesome-cards .awesome-card-header h2 {
    align-items: center;
    display: flex;
    font-size: 1rem;
    padding: .5rem 1.5rem
}

.awesome-cards .awesome-card-header .related-projects-title {
    font-size: .8rem;
    font-weight: 900;
    margin-bottom: 1rem;
    margin-left: 1.5rem
}

.awesome-cards .awesome-card-body {
    display: flex;
    flex-direction: column;
    padding: 0 1rem
}

.awesome-cards-new .awesome-card-item {
    background: #fff;
    border-radius: .8rem;
    box-shadow: 0 .2rem 1.6rem rgba(34,34,34,.15);
    margin: 1rem 0;
    padding: 1rem 0
}

.awesome-cards-new .awesome-card-header {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 1rem;
    text-decoration: none
}

.awesome-cards-new .awesome-card-header:focus .action,.awesome-cards-new .awesome-card-header:hover .action {
    text-decoration: underline
}

.awesome-cards-new .awesome-card-header .icon {
    font-size: 2.4rem
}

.awesome-cards-new .awesome-card-header h2 {
    align-items: center;
    display: flex;
    font-size: 1rem;
    margin-top: 1rem
}

.awesome-cards-new .awesome-card-header .action {
    align-items: center;
    display: flex;
    font-size: .7rem;
    font-weight: 700
}

.awesome-cards-new .awesome-card-body {
    display: flex;
    flex-direction: column;
    padding: 0 1rem
}

.awesome-hero {
    border-radius: .8rem;
    color: #222;
    display: flex;
    padding: 1rem 0;
    position: relative;
    z-index: 1
}

.awesome-hero .hero-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    margin-right: auto;
    max-width: 840px
}

.awesome-hero .hero-img {
    height: 3.6rem;
    margin: 1.8rem 1rem 1rem 0;
    width: 3.6rem
}

.awesome-hero .hero-img img {
    border-radius: 50%;
    box-shadow: 0 .2rem .6rem rgba(34,34,34,.05);
    height: 3.6rem;
    width: 3.6rem
}

@media screen and (max-width: 960px) {
    .awesome-hero .hero-img {
        margin-top:0
    }
}

.awesome-hero .hero-title {
    font-size: 1.8rem;
    font-weight: 900;
    line-height: 1.25;
    margin-bottom: 0
}

.awesome-hero .hero-title small {
    border-radius: .2rem;
    color: rgba(34,34,34,.9);
    font-size: .75rem;
    font-weight: 500;
    padding: .2rem;
    vertical-align: middle
}

.awesome-hero .hero-subtitle {
    color: #222;
    font-size: .8rem;
    font-weight: 400;
    line-height: 1.5;
    margin: .5rem 0 1rem
}

.awesome-hero .hero-series {
    display: inline-flex;
    margin-bottom: .4rem;
    order: -1
}

.awesome-hero .hero-actions {
    flex: 0 0 auto;
    margin-left: 1rem;
    margin-top: 1rem
}

.awesome-hero .hero-tags {
    margin: .4rem 0
}

.awesome-hero .hero-tags .tag-item+.tag-item {
    margin-left: .25rem
}

.awesome-hero .hero-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    margin: .5rem 0
}

@media screen and (max-width: 960px) {
    .awesome-hero .hero-links {
        justify-content:flex-start
    }
}

.awesome-hero .hero-links .link-item {
    align-items: center;
    display: inline-flex;
    height: 2rem;
    font-size: .7rem;
    margin-bottom: .2rem;
    margin-right: .2rem;
    text-decoration: none
}

.awesome-hero .hero-links .link-item span {
    line-height: 1;
    margin-left: .4rem
}

.awesome-hero .hero-links .link-item small {
    opacity: .5
}

.awesome-hero .hero-links .link-item.btn.btn-lg {
    padding: .3rem .5rem
}

.awesome-hero .hero-links .menu {
    color: #222;
    width: 12rem
}

.awesome-hero .hero-filter {
    display: flex;
    align-items: end;
    margin: .5rem 0 1rem
}

@media screen and (max-width: 960px) {
    .awesome-hero {
        flex-wrap:wrap;
        flex-direction: column
    }

    .awesome-hero .hero-actions {
        flex: 1 0 100%;
        margin-left: 0;
        width: 100%
    }

    .awesome-hero .hero-actions .hero-social {
        margin: 0
    }
}

@media screen and (max-width: 600px) {
    .awesome-hero {
        padding:1rem 0
    }
}

.awesome-hero .hero-meta {
    color: #888;
    margin: 1rem auto
}

.awesome-hero .hero-cover {
    margin-top: 1rem
}

.awesome-hero .hero-cover .img-responsive {
    margin: auto
}

.awesome-hero .article-meta {
    align-items: center;
    display: flex;
    justify-content: center
}

.awesome-hero .article-meta .article-meta-author {
    align-items: center;
    display: inline-flex;
    font-weight: 700
}

.awesome-hero .article-meta .article-meta-author .avatar {
    box-shadow: 0 .05rem .8rem rgba(34,34,34,.2)
}

.label-series {
    align-items: center;
    background: rgba(0,82,204,.1);
    border: .05rem solid transparent;
    border-radius: 1rem;
    cursor: default;
    display: inline-flex;
    font-size: .6rem;
    font-weight: 500;
    height: 1rem;
    margin-bottom: 0;
    margin-right: .2rem;
    padding: .1rem .3rem
}

.label-series .icon-series {
    height: .6rem;
    margin-right: .1rem;
    width: .6rem
}

.label-series.inactive {
    background: rgba(234,57,67,.1);
    color: #ea3943
}

.label-series.trending {
    background: rgba(0,82,204,.1);
    color: #0052cc
}

.label-series.near {
    background: rgba(38,38,38,.075);
    color: #262626
}

.label-series.aurora {
    background: rgba(120,214,75,.2);
    color: #5dc22c
}

.label-series.octopus {
    background: rgba(35,61,174,.1);
    color: #233dae
}

.section-project .awesome-hero .hero-content {
    max-width: 600px
}

.near-content .content-widget {
    background: #fff;
    border: .05rem solid #eee;
    border-radius: .8rem;
    box-shadow: 0 .1rem 1.4rem rgba(34,34,34,.05);
    font-size: .8rem;
    margin-bottom: 1rem;
    padding: 2rem
}

.near-content .article-content {
    background: transparent;
    border: 0;
    box-shadow: none
}

.near-content .twitter-widget {
    padding-bottom: .5rem
}

.near-content .related-widget .content-body {
    margin: auto -.5rem
}

@media screen and (max-width: 600px) {
    .near-content .content-widget {
        padding:1.5rem 1rem
    }
}

.near-content .content-title {
    font-size: .8rem;
    font-weight: 900;
    margin-bottom: 1rem
}

.near-content .stats-widget {
    display: flex;
    flex-wrap: nowrap;
    font-size: .7rem;
    justify-content: space-between;
    align-items: baseline;
    margin: .3rem 0
}

.near-content .stats-widget:last-child {
    margin-bottom: 0
}

.near-content .stats-widget .stats-widget-label {
    color: rgba(34,34,34,.5);
    font-size: .6rem;
    font-weight: 500;
    margin-bottom: .2rem
}

.near-content .stats-widget .stats-widget-value {
    font-weight: 700;
    color: #222;
    text-align: right;
    overflow: hidden
}

.near-content .stats-widget .stats-widget-source {
    color: #888;
    font-size: .6rem;
    margin-top: .4rem;
    text-align: right;
    width: 100%
}

.near-content .token-widget {
    display: flex;
    flex-direction: column
}

.near-content .token-widget:not(:last-child) {
    margin-bottom: 1rem
}

.near-content .token-widget .token-widget-label {
    color: rgba(51,51,51,.5);
    font-size: .6rem;
    font-weight: 500
}

.near-content .token-widget .token-widget-value {
    background: #f6f6f6;
    border: .05rem solid #eee;
    border-radius: .4rem;
    color: #333;
    font-size: .6rem;
    font-weight: 700;
    margin-top: .2rem;
    padding: .2rem .4rem;
    -webkit-user-select: all;
    -moz-user-select: all;
    user-select: all;
    word-break: break-all
}

.near-content .token-widget .token-widget-value:hover {
    background: #f3f3f3
}

.near-content .content-grants {
    align-items: center;
    display: flex;
    flex-wrap: wrap
}

.near-content .content-grants:not(:last-child) {
    margin-bottom: .5rem
}

.label-grants {
    align-items: center;
    border: .05rem solid rgba(34,34,34,.075);
    border-radius: .4rem;
    color: #222;
    display: flex;
    font-size: .7rem;
    margin: .25rem;
    padding: .25rem .5rem .25rem .25rem
}

.label-grants .icon-grants {
    border-radius: 50%;
    margin-right: .25rem
}

.label-grants.near .icon-grants {
    background: rgba(38,38,38,.075);
    color: #262626
}

.label-grants.aurora .icon-grants {
    background: rgba(120,214,75,.2);
    color: #5dc22c
}

.label-grants.octopus .icon-grants {
    background: rgba(35,61,174,.1);
    color: #233dae
}

.label-grants.proximity .icon-grants {
    background: linear-gradient(45deg,rgba(216,46,135,.25),rgba(255,173,1,.25));
    color: #d82e87
}

.markdown p:last-child {
    margin-bottom: 0
}

.markdown a img[src*="#logo"] {
    border-radius: 50%;
    display: inline-flex;
    height: 1.4rem;
    margin: auto .2rem;
    vertical-align: bottom;
    width: 1.4rem
}

.aside-container {
    display: flex;
    flex-direction: column;
    flex: 1 1 12rem;
    scrollbar-width: none;
    -ms-overflow-style: none
}

.aside-container::-webkit-scrollbar {
    background: transparent;
    display: none;
    width: 0
}

@media screen and (min-width: 960px) {
    .aside-container {
        max-height:90vh;
        overflow-y: auto;
        position: sticky;
        top: 0
    }
}

.aside-container .sidebar-container {
    bottom: 2rem;
    display: flex;
    flex-direction: column;
    padding: 0 0 1rem;
    width: 100%
}

@media screen and (min-width: 960px) {
    .aside-container .sidebar-container {
        max-width:12rem;
        padding-top: 1rem
    }
}

.aside-container .awesome-aside-menu {
    padding: 0
}

@media screen and (max-width: 960px) {
    .aside-container .awesome-aside-menu {
        display:none
    }

    .aside-container .awesome-aside-menu.active {
        background: #fff;
        box-shadow: 0 .1rem 1rem rgba(34,34,34,.1);
        display: block;
        height: 80vh;
        left: 2rem;
        overflow-y: auto;
        padding: 1rem;
        position: fixed;
        right: 2rem;
        top: 10vh;
        z-index: 999
    }
}

.aside-container .awesome-aside-menu .btn {
    background: transparent;
    display: flex;
    font-size: .75rem;
    justify-content: space-between;
    margin-bottom: .15rem;
    width: 100%
}

.aside-container .awesome-aside-menu .btn.btn-lg {
    font-weight: 700;
    padding: .4rem
}

.aside-container .awesome-aside-menu .btn:focus,.aside-container .awesome-aside-menu .btn:hover {
    background: rgba(34,34,34,.05);
    border-color: transparent
}

.aside-container .awesome-aside-menu .btn.active,.aside-container .awesome-aside-menu .btn:active {
    background: rgba(34,34,34,.1);
    border-color: transparent
}

.aside-container .awesome-aside-menu .menu-parent .menu-nav {
    padding: 0 0 .8rem .8rem
}

.aside-container .awesome-aside-menu .menu-badge {
    font-size: .6rem;
    font-weight: 400;
    margin-left: .5rem;
    opacity: .75;
    padding: 0 .2rem
}

.aside-container .awesome-aside-select {
    display: none
}

@media screen and (max-width: 960px) {
    .aside-container .awesome-aside-select {
        display:flex;
        max-width: 24rem
    }
}

.aside-container .awesome-aside-select .btn {
    font-size: .7rem;
    font-weight: 400;
    justify-content: space-between;
    position: relative;
    z-index: 9
}

.aside-container .near-aside-menu {
    color: #222;
    flex: 1 1 auto;
    padding: 0
}

.aside-container .near-aside-menu .menu-parent {
    align-items: center;
    border-radius: .4rem;
    color: #222;
    display: flex;
    font-size: .8rem;
    font-weight: 700;
    justify-content: space-between;
    padding: .5rem;
    text-decoration: none
}

.aside-container .near-aside-menu .menu-parent:active,.aside-container .near-aside-menu .menu-parent:focus,.aside-container .near-aside-menu .menu-parent:hover {
    color: #626262
}

.aside-container .near-aside-menu .menu-parent.active {
    background: #fff;
    box-shadow: 0 .2rem .6rem rgba(34,34,34,.1);
    color: #222;
    z-index: 99
}

.aside-container .near-aside-menu .menu-item a {
    border-radius: .4rem;
    font-weight: 400;
    justify-content: space-between;
    padding: .5rem
}

.aside-container .near-aside-menu .menu-item a:active,.aside-container .near-aside-menu .menu-item a:focus,.aside-container .near-aside-menu .menu-item a:hover {
    color: #626262
}

.aside-container .near-aside-menu .menu-item a.active {
    background: #fff;
    box-shadow: 0 .2rem .6rem rgba(34,34,34,.1);
    color: #222;
    z-index: 99
}

.aside-container .near-aside-menu .menu-nav {
    border-radius: 0;
    padding: 0 0 .4rem .8rem
}

.aside-container .near-aside-menu .menu-ads {
    margin-top: 1rem
}

.section-main {
    padding: .4rem
}

.section-main .near-emoji {
    align-items: center;
    color: #222;
    display: flex;
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1;
    padding: .4rem 0
}

.section-main .near-title {
    font-size: .7rem;
    font-weight: 700;
    margin-top: 1rem;
    padding-top: .5rem
}

.section-main .near-title:hover .near-anchor {
    visibility: visible
}

.section-main .near-title a {
    text-decoration: none
}

.section-main .near-title a:focus,.section-main .near-title a:hover {
    color: #0052cc
}

.section-main .near-list-container {
    margin: 0 -.8rem
}

.section-main .near-list-container>.column {
    padding: .8rem
}

.section-main .near-list-container>.near-list-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem
}

.section-main .near-list-container>.near-list-header h2 {
    align-items: center;
    display: flex;
    font-size: 1rem
}

.section-main .near-list-container>.col-order-2 {
    order: 2
}

.near-item {
    background: #fff;
    border: .05rem solid #eee;
    box-shadow: 0 .05rem .05rem rgba(34,34,34,.05),0 .2rem .8rem rgba(34,34,34,.075);
    border-radius: .8rem;
    color: #222;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 8.5rem;
    padding: 1rem;
    position: relative;
    transition: box-shadow .2s ease-in-out,transform .2s ease-in-out
}

.near-item .tile+.tile {
    flex: 1 0;
    padding: .5rem 0
}

.near-item.building {
    border: .1rem dashed #d5d5d5
}

.near-item.building,.near-item.inactive {
    background: hsla(0,0%,100%,.25);
    box-shadow: none
}

.near-item.inactive {
    opacity: .75
}

.near-item.card {
    padding: 0
}

.near-item.card .card-title {
    font-size: .8rem;
    font-weight: 900;
    line-height: 1.25
}

.near-item.card .card-image {
    height: 8rem
}

.near-item.card .card-image img {
    height: 8rem;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%
}

.near-item:focus,.near-item:hover {
    box-shadow: 0 .1rem .2rem rgba(34,34,34,.05),0 .4rem 1.6rem rgba(34,34,34,.15);
    text-decoration: none;
    transform: translateY(-.1rem)
}

.near-item a,.near-item a:focus,.near-item a:hover,.near-item.active {
    text-decoration: none
}

.near-item .tile-icon {
    box-shadow: 0 .5rem 1.2rem rgba(34,34,34,.2)
}

.near-item .tile-icon,.near-item .tile-icon img {
    border-radius: 50%;
    height: 2rem;
    width: 2rem
}

.near-item .tile-content {
    overflow: hidden
}

.near-item .tile-content:not(:first-child) {
    padding-left: .8rem
}

.near-item .near-item-header {
    display: flex;
    flex: 1 1;
    flex-direction: column
}

.near-item .near-item-footer {
    display: flex;
    justify-content: space-between;
    flex: 0 0
}

.near-item .tile-title {
    color: #222;
    font-size: .8rem;
    font-weight: 700;
    margin-bottom: 0;
    padding-bottom: .1rem
}

.near-item .tile-tags,.near-item .tile-title {
    line-height: .9rem;
    overflow: hidden;
    text-overflow: ellipsis
}

.near-item .tile-tags {
    font-size: .6rem;
    height: 1rem;
    padding-top: .1rem;
    white-space: nowrap
}

.near-item .tile-tags span {
    border-radius: .8rem;
    color: #888;
    display: inline-block
}

.near-item .tile-tags span:not(:last-child) {
    margin-right: .15rem
}

.near-item .tile-subtitle {
    color: #222;
    display: -webkit-box;
    font-size: .65rem;
    font-weight: 400;
    height: 100%;
    line-height: 1rem;
    max-height: 2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical
}

.near-item .tile-social {
    display: flex;
    height: .75rem
}

.near-item .tile-social .icon {
    align-items: center;
    color: #b1b1b1;
    height: .75rem;
    width: .75rem
}

.near-item .tile-social .icon+.icon {
    margin-left: .25rem
}

.near-item .tile-series {
    display: flex
}

.near-item .tile-series .label-series {
    align-items: center;
    background: rgba(0,82,204,.1);
    border: .05rem solid transparent;
    border-radius: 1rem;
    cursor: default;
    display: inline-flex;
    font-weight: 500;
    height: 1rem;
    justify-content: center;
    margin-right: -.15rem;
    padding: .05rem;
    width: 1rem
}

.near-item .tile-series .label-series .icon-series {
    height: .6rem;
    margin-right: 0;
    width: .6rem
}

.near-item .tile-series .label-series.trending {
    display: none
}

.near-item .tile-series .label-series.near {
    background: rgba(38,38,38,.075);
    color: #262626
}

.near-item .tile-series .label-series.aurora {
    background: rgba(120,214,75,.2);
    color: #5dc22c
}

.near-item .tile-series .label-series.octopus {
    background: rgba(35,61,174,.1);
    color: #233dae
}

.near-item .tile-actions {
    margin-top: .8rem
}

.near-item .tile-actions .action-link {
    color: #0052cc;
    font-weight: 700
}

.near-item-list {
    background: transparent;
    border: 0;
    box-shadow: none;
    min-height: auto;
    padding: .5rem
}

.near-item-sm {
    align-items: center;
    border-radius: .8rem;
    display: flex;
    flex-direction: column;
    padding: .5rem;
    transition: all .15s ease
}

.near-item-sm:focus,.near-item-sm:hover {
    background: rgba(34,34,34,.05);
    text-decoration: none
}

.near-item-sm .tile-icon {
    box-shadow: 0 .5rem 1.2rem rgba(34,34,34,.2);
    border-radius: 50%;
    height: 3.2rem;
    margin: .5rem auto;
    width: 3.2rem
}

.near-item-sm .tile-icon img {
    border-radius: 50%;
    height: 100%;
    width: 100%
}

.near-item-sm .tile-content {
    width: 100%
}

.near-item-sm .tile-title {
    font-size: .7rem;
    text-align: center
}

.near-item-sm .tile-tags {
    color: #888;
    font-size: .6rem
}

.near-item-sm .tile-tags span {
    margin-right: .25rem
}

.awesome-tag {
    background: rgba(34,34,34,.05);
    border-radius: .4rem;
    color: #3c3c3c;
    font-size: .7rem;
    line-height: 1.5rem;
    padding: .25rem .35rem
}

.awesome-tag:focus,.awesome-tag:hover {
    background: rgba(34,34,34,.08);
    border-color: rgba(34,34,34,.08);
    text-decoration: none
}

.search-container {
    position: relative;
    max-width: 12rem
}

@media screen and (max-width: 600px) {
    .search-container {
        margin-left:0
    }
}

.search-container .algolia-autocomplete {
    width: 100%
}

.search-container .aa-input-search {
    background: rgba(34,34,34,.05);
    border-color: transparent;
    padding-left: 1.6rem;
    width: 100%
}

.search-container .aa-input-search:focus {
    background: #f4f6fc;
    border-color: #222;
    box-shadow: 0 0 0 .1rem rgba(34,34,34,.2)
}

.search-container .aa-input-icon {
    height: .8rem;
    left: .6rem;
    position: absolute;
    top: .6rem;
    width: .8rem;
    fill: #484848;
    pointer-events: none
}

.search-container .aa-input-loading {
    height: .8rem;
    right: .8rem;
    position: absolute;
    top: .6rem;
    width: .8rem
}

.search-container .aa-input-loading:after {
    border-bottom-color: #222;
    border-left-color: #222
}

.search-container .aa-dropdown-menu {
    background: #fff;
    border-radius: .4rem;
    box-shadow: 0 .2rem 1rem rgba(34,34,34,.25);
    left: auto!important;
    margin-top: .1rem;
    max-height: 65vh;
    max-width: calc(100vw - 1.8rem);
    overflow-y: auto;
    padding: .5rem;
    right: 0!important;
    width: 24rem
}

@media screen and (max-width: 600px) {
    .search-container .aa-dropdown-menu {
        width:100%
    }
}

.search-container .aa-dropdown-menu .near-item {
    background: transparent;
    border-color: transparent;
    box-shadow: none;
    flex-direction: row;
    height: auto;
    margin-bottom: .2rem;
    max-width: 100%;
    min-height: auto;
    padding: .4rem;
    text-decoration: none
}

.search-container .aa-dropdown-menu .near-item:last-child {
    margin-bottom: 0
}

.search-container .aa-dropdown-menu .near-item:focus,.search-container .aa-dropdown-menu .near-item:hover {
    background: rgba(34,34,34,.05);
    transform: none
}

.search-container .aa-dropdown-menu .near-item .tile-icon,.search-container .aa-dropdown-menu .near-item .tile-icon img {
    height: 2rem;
    width: 2rem
}

.search-container .aa-dropdown-menu .near-item .tile-title {
    font-size: .75rem;
    font-weight: 700;
    margin-bottom: 0
}

.search-container .aa-dropdown-menu .near-item .tile-subtitle {
    margin-bottom: 0
}

.awesome-table {
    border: none;
    width: 100%
}

.awesome-table .table-item {
    align-items: center;
    background: #fff;
    border-radius: .4rem;
    box-shadow: 0 0 0 .05rem rgba(34,34,34,.025),0 .5rem 1rem rgba(34,34,34,.05);
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: .2rem;
    padding: 0 .5rem;
    position: relative;
    text-decoration: none;
    transition: transform .25s ease-in-out,box-shadow .25s ease-in-out
}

.awesome-table .table-item .tile {
    text-decoration: none
}

.awesome-table .table-item:hover {
    box-shadow: 0 .6rem 1.2rem rgba(34,34,34,.1);
    transform: translateY(-.1rem);
    z-index: 99
}

.awesome-table .table-item.table-header {
    background: hsla(0,0%,78%,.25);
    box-shadow: 0 .6rem 1.2rem rgba(34,34,34,.1);
    font-size: .6rem
}

.awesome-table .table-item.table-header:hover {
    transform: none;
    z-index: auto
}

.awesome-table .table-col {
    flex: 1 1 0;
    padding: .4rem .25rem
}

.awesome-table .table-col.table-col-sm {
    flex: 0 0 1.5rem
}

.awesome-table .table-col.table-col-project {
    align-items: center;
    display: flex;
    flex: 0 1 14rem
}

.awesome-table .table-col.table-col-project:focus,.awesome-table .table-col.table-col-project:hover {
    text-decoration: none
}

.awesome-table .table-col.table-col-project .tile {
    flex: 1 1;
    width: 12rem
}

.awesome-table .table-col.table-col-project .project-image {
    border-radius: 50%;
    box-shadow: 0 .2rem .4rem rgba(34,34,34,.1);
    display: block;
    height: 1.6rem;
    width: 1.6rem
}

.awesome-table .table-col.table-col-project .project-title {
    line-height: .8rem;
    white-space: nowrap
}

.awesome-table .table-col.table-col-project .project-tags {
    color: #b8b8b8;
    font-size: .6rem;
    line-height: .8rem;
    text-decoration: none
}

.awesome-table .table-col.table-col-project .project-tags .tag-item {
    margin-right: .2rem
}

.awesome-table .table-col.table-col-data {
    align-items: center;
    display: flex;
    flex: 1 0 0;
    justify-content: flex-end
}

.awesome-table .table-col.table-col-data .table-col-sort {
    flex: 1 0 5rem;
    min-width: 5rem;
    text-align: right
}

.awesome-table .table-col.table-col-data .table-col-sort:first-child,.awesome-table .table-col.table-col-data .table-col-sort:nth-child(2) {
    flex: 1 0 5rem;
    min-width: 5rem
}

.awesome-table .table-col.table-col-data .table-col-sort.active {
    color: #222;
    font-weight: 700
}

.awesome-table .table-col.table-col-data .table-col-data-item,.awesome-table .table-col.table-col-data .table-col-data-status {
    flex: 1 1 0;
    min-width: 5rem;
    text-align: right
}

.awesome-table .table-col.table-col-admin {
    align-items: center;
    display: flex;
    flex: 1 1 12rem;
    min-width: 12rem
}

.awesome-table .table-col.table-col-admin:focus,.awesome-table .table-col.table-col-admin:hover {
    text-decoration: none
}

.awesome-table .table-col.table-col-admin .article-image {
    border-radius: .4rem;
    box-shadow: 0 .2rem .4rem rgba(34,34,34,.2);
    height: 2rem;
    -o-object-fit: cover;
    object-fit: cover;
    width: 2.4rem
}

.awesome-table .table-col.table-col-admin .project-title {
    line-height: 1rem;
    margin-left: .5rem
}

.awesome-table .table-col.table-col-admin .project-image {
    border-radius: 50%;
    box-shadow: 0 .2rem .4rem rgba(34,34,34,.1);
    display: block;
    height: 1.6rem;
    width: 1.6rem
}

.awesome-table .table-col .project-id {
    width: 1rem
}

.awesome-table .table-col.table-col-meta {
    flex: .5 1 1rem
}

.awesome-table .table-col.table-col-actions {
    flex: .5 1 1rem;
    text-align: right
}

.awesome-table .table-sort-btn {
    align-items: center;
    display: flex;
    justify-content: flex-end
}

.icon-caret {
    color: rgba(34,34,34,.35);
    display: inline-flex;
    flex-direction: column;
    height: .6rem;
    width: .8rem
}

.icon-caret.asc .icon-caret-up,.icon-caret.desc .icon-caret-down {
    color: #222
}

.icon-caret .icon-caret-item {
    border-radius: .1rem;
    box-sizing: border-box;
    display: block;
    font-size: inherit;
    font-style: normal;
    height: .3rem;
    position: relative;
    text-indent: -9999px;
    width: 1rem
}

.icon-caret .icon-caret-item:after,.icon-caret .icon-caret-item:before {
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%,-50%)
}

.icon-caret .icon-caret-item.icon-caret-down:before {
    border-top: .2rem solid
}

.icon-caret .icon-caret-item.icon-caret-down:before,.icon-caret .icon-caret-item.icon-caret-up:before {
    border-right: .2rem solid transparent;
    border-left: .2rem solid transparent;
    height: 0;
    transform: translate(-50%,-25%);
    width: 0
}

.icon-caret .icon-caret-item.icon-caret-up:before {
    border-bottom: .2rem solid
}

.articles-container {
    display: flex;
    flex-direction: column
}

.articles-container .article-item {
    display: flex;
    padding-bottom: .8rem
}

.articles-container .article-item:focus,.articles-container .article-item:hover {
    text-decoration: none
}

.articles-container .article-item:focus .article-title,.articles-container .article-item:hover .article-title {
    text-decoration: underline
}

.articles-container .article-image {
    border-radius: .4rem;
    box-shadow: 0 .2rem .4rem rgba(34,34,34,.1);
    height: 2rem;
    margin-right: .4rem;
    -o-object-fit: cover;
    object-fit: cover;
    width: 2.4rem
}

.articles-container .article-detail {
    display: flex;
    flex-direction: column
}

.articles-container .article-title {
    padding-left: .2rem;
    font-weight: 700;
    font-size: .7rem
}

.articles-container .article-info {
    color: #888;
    padding-left: .2rem;
    font-weight: 400;
    font-size: .6rem
}

.center-ranking-container {
    margin: auto
}

.ranking-container {
    display: flex;
    justify-content: flex-end
}

.ranking-container .stats-link {
    text-decoration: none
}

.ranking-container .stats-link .stats-caption {
    padding: .2rem 0;
    font-weight: 700;
    font-size: .6rem
}

.ranking-container .stats-link .stats-info {
    display: flex;
    justify-content: left;
    gap: .3rem
}

.ranking-container .stats-link .stats-info .stats-info-label {
    padding: .2rem 0;
    font-weight: 400;
    font-size: .6rem
}

.ranking-container .stats-link .stats-info .stats-info-value {
    padding: .2rem 0;
    font-weight: 700;
    font-size: .6rem
}

.ranking-container .stats-link .stats-value {
    font-weight: 900;
    font-size: 1rem;
    padding: .2rem 0
}

.ranking-container .stats-link .stats-border {
    width: 5rem;
    height: 2px;
    left: 120px;
    top: 406px;
    background: linear-gradient(90deg,#1d54c4 -50%,#e1f4f8)
}

.octopus-status {
    display: flex;
    flex-wrap: nowrap;
    list-style: none;
    margin: .2rem 0;
    width: 100%
}

.octopus-status .status-item {
    flex: 1 1 0;
    margin-top: 0;
    min-height: 1rem;
    text-align: center;
    position: relative
}

.octopus-status .status-item.before-active:not(:first-child):before {
    background: #dee2f3;
    content: "";
    height: 2px;
    left: -50%;
    position: absolute;
    top: 9px;
    width: 100%
}

.octopus-status .status-item.active:not(:first-of-type):before,.octopus-status .status-item.before-active:not(:first-child):before,.octopus-status .status-item.running:before {
    background: #dee2f3;
    content: "";
    height: 2px;
    left: -30%;
    position: absolute;
    top: 9px;
    width: 100%
}

.octopus-status .status-item.after-active div,.octopus-status .status-item.before-active div {
    color: #dee2f3;
    text-decoration: none;
    background: #dee2f3;
    border: .2rem solid #fff;
    border-radius: 50%;
    display: block;
    height: .7rem;
    width: .7rem;
    position: relative;
    top: .2rem;
    z-index: 1
}

.octopus-status .status-item.active div {
    background: #dee2f3;
    color: #0052cc;
    margin-right: .2rem
}

.octopus-status .status-item.active div,.octopus-status .status-item.running div {
    text-decoration: none;
    border-radius: .3rem;
    content: attr(data-tooltip);
    display: block;
    font-size: .6rem;
    max-width: 320px;
    overflow: hidden;
    padding: 0 .2rem;
    pointer-events: none;
    position: relative;
    top: 1px;
    z-index: 400
}

.octopus-status .status-item.running div {
    background: #0052cc;
    color: #fff
}

.table-grants {
    display: inline-flex
}

.table-grants .label-series {
    align-items: center;
    border: .05rem solid transparent;
    border-radius: 1rem;
    font-weight: 500;
    height: 1rem;
    justify-content: center;
    margin-right: -.15rem;
    padding: .05rem;
    width: 1rem
}

.table-grants .label-series .icon-series {
    height: .6rem;
    margin-right: 0;
    width: .6rem
}

.dropzone {
    background: #fff;
    border: .1rem dashed #d5d5d5;
    box-shadow: none;
    border-radius: .2rem;
    color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 1.5rem;
    padding: .5rem;
    position: relative;
    transition: box-shadow .2s ease-in-out,transform .2s ease-in-out
}

.dropzone.activeDrag {
    background: #fff;
    border: .1rem solid #d5d5d5;
    box-shadow: 0 .05rem .05rem rgba(34,34,34,.05),0 .2rem .8rem rgba(34,34,34,.075)
}

.files-widget {
    background: #fff;
    border: .05rem solid #eee;
    border-radius: .8rem;
    box-shadow: 0 .1rem 1.4rem rgba(34,34,34,.05);
    font-size: .8rem;
    margin-bottom: 1rem;
    padding: .8rem
}

.files-container {
    display: flex;
    flex-direction: column
}

.files-container .file-item {
    display: flex;
    padding-bottom: .8rem
}

.files-container .file-image {
    border-radius: .4rem;
    box-shadow: 0 .2rem .4rem rgba(34,34,34,.1);
    height: 2rem;
    margin-right: .4rem;
    -o-object-fit: cover;
    object-fit: cover;
    width: 2.4rem
}

.files-container .file-detail {
    display: flex;
    flex-direction: column
}

`;
return (

    <>
    <Css>
        <div className="near-container">
            <div className="section-topheader">
                <a href="https://web.archive.org/web/20230521202123/https://awesomenear.com/articles/awesomenear-may-annoucement" target="_blank" rel="noopener noreferrer">
                    <strong>
                        AwesomeNEAR May Announcement
                    </strong>
                    <span className="hide-xs ml-1">
                        | Learn more
                    </span>
                    <svg className="icon iconArrow ml-1" height="20" width="20">

                    </svg>
                </a>
            </div>
            <div className="awesome-header ">
                <div className="container grid-xl">
                    <div className="columns">
                        <div className="header-container column col-12">
                            <div className="near-header d-flex">
                                <a className="awesome-brand" title="AwesomeNEAR" href="/web/20230521202123/https://awesomenear.com/">
                                    <img src="/web/20230521202123im_/https://awesomenear.com/img/awesomenear-logo.svg" alt="AwesomeNEAR" /></a>
                                <button className="menu-toggle btn btn-menu">
                                    <svg className="icon" height="20" width="20">

                                    </svg>
                                </button>
                                <div className="near-menu">
                                    <a className="btn btn-lg menu-homepage" title="AwesomeNEAR Homepage" href="/web/20230521202123/https://awesomenear.com/">Home</a><a className="btn btn-lg active" title="All projects building on NEAR Protocol and Aurora ecosystem." href="/web/20230521202123/https://awesomenear.com/projects">Projects</a><a className="btn btn-lg " title="Recent articles on NEAR, Aurora and ecosystem projects." href="/web/20230521202123/https://awesomenear.com/articles">Articles</a>
                                    <a className="btn btn-lg menu-twitter text-primary" href="https://web.archive.org/web/20230521202123/https://twitter.com/awesome_near" title="header.menuCloseTitle" target="_blank" rel="noopener noreferrer">
                                        <svg className="icon" height="20" width="20">

                                        </svg>
                                        <span className="ml-1">Twitter</span>
                                    </a>
                                    <a className="btn btn-lg menu-submit " target="_blank" rel="noopener noreferrer" title="Submit your project to AwesomeNEAR" href="/web/20230521202123/https://awesomenear.com/getstarted">+ Submit</a>
                                    <div className="near-search">
                                        <div className="search-container" id="aa-input-container">
                                            <span className="algolia-autocomplete" style={{position: 'relative', display: 'inline-block', direction: 'ltr', }}>
                                                <input type="search" id="searchbox" className="aa-input-search form-input input-lg aa-input" placeholder="Search projects or tokens" name="search" autocomplete="off" spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-owns="algolia-autocomplete-listbox-0" dir="auto" style={{position: 'relative', verticalAlign: 'top', }} />

                                                    <pre aria-hidden="true" style={{position: 'absolute', visibility: 'hidden', whiteSpace: 'pre', fontFamily: '-apple-system, system-ui, BlinkMacSystemFont, &quot', fontSize: '14px', fontStyle: 'normal', fontVariant: 'normal', fontWeight: 400, wordSpacing: 0, letterSpacing: 'normal', textIndent: 0, textRendering: 'auto', textTransform: 'none', }}></pre>
                                            </span>
                                            <svg className="aaInputIcon" viewBox="654 -372 1664 1664">
                                                <path d="M1806,332c0-123.3-43.8-228.8-131.5-316.5C1586.8-72.2,1481.3-116,1358-116s-228.8,43.8-316.5,131.5 C953.8,103.2,910,208.7,910,332s43.8,228.8,131.5,316.5C1129.2,736.2,1234.7,780,1358,780s228.8-43.8,316.5-131.5  C1762.2,560.8,1806,455.3,1806,332z M2318,1164c0,34.7-12.7,64.7-38,90s-55.3,38-90,38c-36,0-66-12.7-90-38l-343-342  c-119.3,82.7-252.3,124-399,124c-95.3,0-186.5-18.5-273.5-55.5s-162-87-225-150s-113-138-150-225S654,427.3,654,332  s18.5-186.5,55.5-273.5s87-162,150-225s138-113,225-150S1262.7-372,1358-372s186.5,18.5,273.5,55.5s162,87,225,150s113,138,150,225  S2062,236.7,2062,332c0,146.7-41.3,279.7-124,399l343,343C2305.7,1098.7,2318,1128.7,2318,1164z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{position: 'fixed', zIndex: 9999, top: '16px', left: '16px', right: '16px', bottom: '16px', pointerEvents: 'none', }}></div>
            <div className="section-main">
                <div className="container grid-xl">
                    <div className="columns">
                        <div className="hero-container column col-12">
                            <div className="awesome-breadcrumb text-assistive">
                                <ol className="breadcrumb" itemscope="" itemtype="https://schema.org/BreadcrumbList">
                                    <li className="breadcrumb-item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                                        <a itemscope="" itemtype="https://schema.org/WebPage" itemprop="item" itemid="https://awesomenear.com" href="https://web.archive.org/web/20230521202123/https://awesomenear.com/"><span itemprop="name">Home</span></a>
                                    </li>
                                    <li className="breadcrumb-item" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
                                        <a itemscope="" itemtype="https://schema.org/WebPage" itemprop="item" itemid="https://awesomenear.com/en/projects" href="https://web.archive.org/web/20230521202123/https://awesomenear.com/en/projects"><span itemprop="name">All Projects - AwesomeNEAR</span></a>
                                    </li>
                                </ol>
                            </div>
                            <div className="awesome-hero">
                                <div className="hero-content">
                                    <h1 className="hero-title">Projects</h1>
                                    <h2 className="hero-subtitle">All projects building on NEAR Protocol and Aurora ecosystem.</h2>
                                </div>
                                <div className="hero-filter">
                                    <div className="tab">
                                        <div className="tab-item"><a href="#" className="active">All</a></div>
                                        <div className="tab-item"><a href="#">NEAR</a></div>
                                        <div className="tab-item"><a href="#">Aurora</a></div>
                                        <div className="tab-item"><a href="#">Octopus</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns" id="scrollableParent">
                        <div className="aside-container column">
                            <div className="sidebar-container">
                                <div className="awesome-aside-select">
                                    <button className="btn btn-lg btn-block">
                                        <span>Explore by category</span>
                                        <svg className="icon iconSelect" height="20" width="20">

                                        </svg>
                                    </button>
                                </div>
                                <div className="awesome-aside-menu menu menu-nav ">
                                    <div className="menu-parent"><a className="btn btn-lg active" title="All" href="/web/20230521202123/https://awesomenear.com/projects">All<span className="menu-badge">1093</span></a></div>
                                    <div className="menu-parent">
                                        <a className="btn btn-lg " title="Infrastructure projects building on NEAR and Aurora ecosystem." href="/web/20230521202123/https://awesomenear.com/categories/infrastructure">Infrastructure<span className="menu-badge">251</span></a>
                                        <div className="menu menu-nav">
                                            <div className="menu-item"><a className="btn " title="Web, browser extension, mobile crypto wallets support NEAR and Aurora." href="/web/20230521202123/https://awesomenear.com/categories/wallets">Wallets<span className="menu-badge">61</span></a></div>
                                            <div className="menu-item"><a className="btn " title="NEAR validator nodes producing blocks and securing the NEAR network." href="/web/20230521202123/https://awesomenear.com/categories/validators">Validators<span className="menu-badge">70</span></a></div>
                                            <div className="menu-item"><a className="btn " title="NEAR Protocol Explorers and Aurora Blockchain Explorers." href="/web/20230521202123/https://awesomenear.com/categories/explorers">Explorers<span className="menu-badge">11</span></a></div>
                                            <div className="menu-item"><a className="btn " title="Cross-chain bridges and asset transfer tools for NEAR and Aurora." href="/web/20230521202123/https://awesomenear.com/categories/bridges">Bridges<span className="menu-badge">33</span></a></div>
                                            <div className="menu-item"><a className="btn " title="Data and File Storage Infrastructure for NEAR and Aurora Projects." href="/web/20230521202123/https://awesomenear.com/categories/storage">Storage<span className="menu-badge">13</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-container column col-9 col-md-12">
                            <div className="near-content">
                                <div className="near-list-container columns">
                                    <div className="column col-4 col-lg-6 col-sm-12">
                                        <a className="near-item active" target="_blank" title="Dragonfly Capital Partners" href="/web/20230521202123/https://awesomenear.com/dragonfly-capital-partners">
                                            <div className="near-item-header">
                                                <div className="tile">
                                                    <div className="tile-icon">
                                                        <img src="https://web.archive.org/web/20230521202123im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/dragonfly-capital-partners/dragonfly-capital-partners.jpg" alt="Dragonfly Capital Partners" loading="lazy" />
                                                        </div>
                                                    <div className="tile-content">
                                                        <h2 className="tile-title">Dragonfly Capital Partners</h2>
                                                        <div className="tile-tags"><span title="Funding programs, venture capitals and ecosystem funds on NEAR and Aurora ecosystem.">Funding</span><span title="NEAR validator nodes producing blocks and securing the NEAR network.">Validators</span></div>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <h3 className="tile-subtitle">Global from day onE.</h3>
                                                </div>
                                            </div>
                                            <div className="near-item-footer">
                                                <div className="tile-social">
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                </div>
                                                <div className="tile-series">
                                                    <div className="label-series near">
                                                        <svg className="icon iconSeries" height="20" width="20">

                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="column col-4 col-lg-6 col-sm-12">
                                        <a className="near-item active" target="_blank" title="LandToEmpire" href="/web/20230521202123/https://awesomenear.com/landtoempire">
                                            <div className="near-item-header">
                                                <div className="tile">
                                                    <div className="tile-icon">
                                                        <img src="https://web.archive.org/web/20230521202123im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/landtoempire/landtoempire.jpg" alt="LandToEmpire" loading="lazy"/></div>
                                                    <div className="tile-content">
                                                        <h2 className="tile-title">LandToEmpire</h2>
                                                        <div className="tile-tags"><span title="DApps building on NEAR and Aurora ecosystem.">DApps</span><span title="Gaming projects building on NEAR and Aurora ecosystem.">Gaming</span><span title="GameFi and Play to Earn games building on NEAR and Aurora.">GameFi</span><span title="NFT collectibles, marketplaces, game projects, utilities on NEAR and Aurora.">NFT</span></div>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <h3 className="tile-subtitle">Play-to-Earn mobile strategy game on NEAR Protocol.</h3>
                                                </div>
                                            </div>
                                            <div className="near-item-footer">
                                                <div className="tile-social">
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                </div>
                                                <div className="tile-series">
                                                    <div className="label-series near">
                                                        <svg className="icon iconSeries" height="20" width="20">

                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="column col-4 col-lg-6 col-sm-12">
                                        <a className="near-item active" target="_blank" title="Zero Knowledge Validator" href="/web/20230521202123/https://awesomenear.com/zero-knowledge-validator">
                                            <div className="near-item-header">
                                                <div className="tile">
                                                    <div className="tile-icon"><img src="https://web.archive.org/web/20230521202123im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/zero-knowledge-validator/zero-knowledge-validator.jpg" alt="Zero Knowledge Validator" loading="lazy"/></div>
                                                    <div className="tile-content">
                                                        <h2 className="tile-title">Zero Knowledge Validator</h2>
                                                        <div className="tile-tags"><span title="Infrastructure projects building on NEAR and Aurora ecosystem.">Infrastructure</span><span title="NEAR validator nodes producing blocks and securing the NEAR network.">Validators</span></div>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <h3 className="tile-subtitle">Stake  Support ZKP Research.</h3>
                                                </div>
                                            </div>
                                            <div className="near-item-footer">
                                                <div className="tile-social">
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                </div>
                                                <div className="tile-series">
                                                    <div className="label-series near">
                                                        <svg className="icon iconSeries" height="20" width="20">

                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="column col-4 col-lg-6 col-sm-12">
                                        <a className="near-item active" target="_blank" title="Magic Labs" href="/web/20230521202123/https://awesomenear.com/magic-labs">
                                            <div className="near-item-header">
                                                <div className="tile">
                                                    <div className="tile-icon"><img src="https://web.archive.org/web/20230521202123im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/magic-labs/magic-labs.jpg" alt="Magic Labs" loading="lazy"/></div>
                                                    <div className="tile-content">
                                                        <h2 className="tile-title">Magic Labs</h2>
                                                        <div className="tile-tags"><span title="Dev tools, docs, APIs, resources for NEAR, Aurora and Octopus developers.">Dev Tooling</span><span title="Identity, DID, Name Service projects building on NEAR and Aurora.">Identity</span><span title="Security projects building on NEAR and Aurora ecosystem.">Security</span></div>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <h3 className="tile-subtitle">Drop passwords. Use magic links.</h3>
                                                </div>
                                            </div>
                                            <div className="near-item-footer">
                                                <div className="tile-social">
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                </div>
                                                <div className="tile-series">
                                                    <div className="label-series near">
                                                        <svg className="icon iconSeries" height="20" width="20">

                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="column col-4 col-lg-6 col-sm-12">
                                        <a className="near-item active" target="_blank" title="Electric Capital" href="/web/20230521202123/https://awesomenear.com/electric-capital">
                                            <div className="near-item-header">
                                                <div className="tile">
                                                    <div className="tile-icon"><img src="https://web.archive.org/web/20230521202123im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/electric-capital/electric-capital.jpg" alt="Electric Capital" loading="lazy"/></div>
                                                    <div className="tile-content">
                                                        <h2 className="tile-title">Electric Capital</h2>
                                                        <div className="tile-tags"><span title="Funding programs, venture capitals and ecosystem funds on NEAR and Aurora ecosystem.">Funding</span><span title="Infrastructure projects building on NEAR and Aurora ecosystem.">Infrastructure</span><span title="NEAR validator nodes producing blocks and securing the NEAR network.">Validators</span></div>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <h3 className="tile-subtitle">Crypto asset management firm.</h3>
                                                </div>
                                            </div>
                                            <div className="near-item-footer">
                                                <div className="tile-social">
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                </div>
                                                <div className="tile-series">
                                                    <div className="label-series near">
                                                        <svg className="icon iconSeries" height="20" width="20">

                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="column col-4 col-lg-6 col-sm-12">
                                        <a className="near-item active" target="_blank" title="SEDA" href="/web/20230521202123/https://awesomenear.com/flux">
                                            <div className="near-item-header">
                                                <div className="tile">
                                                    <div className="tile-icon"><img src="https://web.archive.org/web/20230521202123im_/https://awesomenear-spaces.fra1.digitaloceanspaces.com/production/projects/flux/flux.jpg" alt="SEDA" loading="lazy"/></div>
                                                    <div className="tile-content">
                                                        <h2 className="tile-title">SEDA</h2>
                                                        <div className="tile-tags"><span title="NEAR-based EVM compatible Aurora ecosystem.">Aurora</span><span title="DeFi projects and DApps on NEAR and Aurora.">DeFi</span><span title="Oracles and Prediction Markets projects building on NEAR and Aurora.">Oracles</span></div>
                                                    </div>
                                                </div>
                                                <div className="tile">
                                                    <h3 className="tile-subtitle">Multichain, permissionless protocol connecting real-world data to any network on-chain. Previously Flux.</h3>
                                                </div>
                                            </div>
                                            <div className="near-item-footer">
                                                <div className="tile-social">
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                    <svg className="icon" height="20" width="20">

                                                    </svg>
                                                </div>
                                                <div className="tile-series">
                                                    <div className="label-series trending">
                                                        <svg className="icon iconSeries" height="20" width="20">

                                                        </svg>
                                                    </div>
                                                    <div className="label-series near">
                                                        <svg className="icon iconSeries" height="20" width="20">

                                                        </svg>
                                                    </div>
                                                    <div className="label-series aurora">
                                                        <svg className="icon iconSeries" height="20" width="20">

                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="column col-12">Scroll down to load more!</div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-footer">
                <div className="awesome-footer">
                    <div className="container grid-md">
                        <div className="columns">
                            <div className="footer-container disclaimer-container column col-12 col-mx-auto">
                                <a className="text-bold" title="DISCLAIMER" href="/web/20230521202123/https://awesomenear.com/disclaimer">
                                    DISCLAIMER
                                </a>
                                The information presented herein has been provided by third parties and is made available solely for general information purposes. AwesomeNEAR does not warrant the accuracy of this information. The information should not be construed as professional or financial advice of any kind. <a className="text-bold text-underline" title="DISCLAIMER" href="/web/20230521202123/https://awesomenear.com/disclaimer">More</a>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-assistive">Footer Links</h2>
                    <div className="container grid-md">
                        <div className="columns text-left">
                            <div className="footer-container column col-4 col-sm-12 col-mx-auto">
                                <h3 className="footer-link-title">About</h3>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="About AwesomeNEAR" href="/web/20230521202123/https://awesomenear.com/awesomenear">What is AwesomeNEAR?</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="About NEARFANS" href="/web/20230521202123/https://awesomenear.com/nearfans">What is NEARFANS?</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><span className="text-large mr-1">🐦</span><a href="https://web.archive.org/web/20230521202123/https://twitter.com/awesome_near" title="Follow AwesomeNEAR on Twitter" target="_blank" rel="noopener noreferrer">Twitter ↗</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><span className="text-large mr-1">📧</span><a href="https://web.archive.org/web/20230521202123/mailto:hello@awesomenear.com" title="Send email to AwesomeNEAR" target="_blank" rel="noopener noreferrer">Email ↗</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><span className="text-large mr-1">🚀</span><a target="_blank" title="Submit Your Project" href="/web/20230521202123/https://awesomenear.com/getstarted">Submit Your Project</a></h4>
                                <h3 className="footer-link-title">Learn</h3>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="About NEAR Protocol" href="/web/20230521202123/https://awesomenear.com/near-protocol">What is NEAR Protocol?</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="About Aurora" href="/web/20230521202123/https://awesomenear.com/aurora-dev">What is Aurora?</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="About Proximity Labs" href="/web/20230521202123/https://awesomenear.com/proximity">What is Proximity?</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="About Octopus Network" href="/web/20230521202123/https://awesomenear.com/octopus-network">What is Octopus?</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Educational resources, news, insights, information of the NEAR and Aurora ecosystem." href="/web/20230521202123/https://awesomenear.com/categories/education">Educational resources</a></h4>
                            </div>
                            <div className="footer-container column col-4 col-sm-12 col-mx-auto">
                                <h3 className="footer-link-title">Explore</h3>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="All projects building on NEAR Protocol and Aurora ecosystem." href="/web/20230521202123/https://awesomenear.com/projects">Ecosystem projects and DApps</a></h4>
                                <div className="footer-link mt-2 mb-2">-</div>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="DeFi projects and DApps on NEAR and Aurora." href="/web/20230521202123/https://awesomenear.com/categories/defi">DeFi projects</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="DEX projects building on NEAR and Aurora ecosystem." href="/web/20230521202123/https://awesomenear.com/categories/dex">DEX projects</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="NFT Marketplaces building on NEAR and Aurora." href="/web/20230521202123/https://awesomenear.com/categories/marketplaces">NFT Marketplaces</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="NFT collectibles and collections on NEAR and Aurora." href="/web/20230521202123/https://awesomenear.com/categories/collectibles">NFT Collectibles</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Gaming projects building on NEAR and Aurora ecosystem." href="/web/20230521202123/https://awesomenear.com/categories/gaming">Gaming projects</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Web3 Social projects building on NEAR and Aurora ecosystem." href="/web/20230521202123/https://awesomenear.com/categories/social">Social projects</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Decentralized Autonomous Organizations (DAO) on NEAR and Aurora ecosystem." href="/web/20230521202123/https://awesomenear.com/categories/dao">DAO projects and orgs</a></h4>
                                <div className="footer-link mt-2 mb-2">-</div>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="NEAR-based EVM compatible Aurora ecosystem." href="/web/20230521202123/https://awesomenear.com/categories/aurora">Aurora projects</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="NEAR-based multichain interoperable Octopus Network and Appchains Ecosystem." href="/web/20230521202123/https://awesomenear.com/categories/octopus">Octopus projects</a></h4>
                            </div>
                            <div className="footer-container column col-4 col-sm-12 col-mx-auto">
                                <h3 className="footer-link-title">Use</h3>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Web, browser extension, mobile crypto wallets support NEAR and Aurora." href="/web/20230521202123/https://awesomenear.com/categories/wallets">NEAR  Aurora Wallets</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="NEAR Protocol Explorers and Aurora Blockchain Explorers." href="/web/20230521202123/https://awesomenear.com/categories/explorers">NEAR  Aurora Explorers</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Cross-chain bridges and asset transfer tools for NEAR and Aurora." href="/web/20230521202123/https://awesomenear.com/categories/bridges">NEAR  Aurora Bridges</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="NEAR validator nodes producing blocks and securing the NEAR network." href="/web/20230521202123/https://awesomenear.com/categories/validators">NEAR Validators</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Cryptocurrency and fiat on-ramps and off-ramps services." href="/web/20230521202123/https://awesomenear.com/categories/on_off_ramps">On/Off Ramps</a></h4>
                                <h4 className="footer-link mt-2 mb-2">
                                    <a target="_blank" title="" href="/web/20230521202123/https://awesomenear.com/categories/analytics">Analytics</a>  <a target="_blank" title="" href="/web/20230521202123/https://awesomenear.com/categories/portfolio">Portfolio</a>
                                </h4>
                                <h3 className="footer-link-title">Develop</h3>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Dev tools, docs, APIs, resources for NEAR, Aurora and Octopus developers." href="/web/20230521202123/https://awesomenear.com/categories/devtooling">Dev Tooling</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Data services, indexers, explorer RPC data APIs building on NEAR and Aurora." href="/web/20230521202123/https://awesomenear.com/categories/data">Data / Indexers / RPC</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Oracles and Prediction Markets projects building on NEAR and Aurora." href="/web/20230521202123/https://awesomenear.com/categories/oracles">Oracles</a></h4>
                                <h4 className="footer-link mt-2 mb-2"><a target="_blank" title="Data and File Storage Infrastructure for NEAR and Aurora Projects." href="/web/20230521202123/https://awesomenear.com/categories/storage">Storage</a></h4>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="footer-link-title column col-md-12">
                                Made with ♥ by <a href="https://web.archive.org/web/20230521202123/https://nearfans.com/" target="_blank"><strong>NEARFans</strong></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Css>
    </>
)