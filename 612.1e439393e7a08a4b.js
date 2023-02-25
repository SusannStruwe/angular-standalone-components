"use strict";(self.webpackChunkangular_component_library=self.webpackChunkangular_component_library||[]).push([[612],{5384:(x,y,i)=>{i.d(y,{a:()=>l});var e=i(6895),s=i(433),h=i(2216),m=i(2687),t=i(1571);class c{constructor(){}readProperty(a){return window.getComputedStyle(document.body).getPropertyValue("--"+a)}setProperty(a,f){document.body.style.setProperty("--"+f,a)}}c.\u0275fac=function(a){return new(a||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["sass-helper"]],standalone:!0,features:[t.jDz],decls:1,vars:0,template:function(a,f){1&a&&t._UZ(0,"div")},encapsulation:2});class l{constructor(a){this.changeDetector=a,this.faRefresh=m.QDM,this.primaryColor=null}ngAfterViewInit(){this.sassHelper&&(this.primaryColor=this.sassHelper.readProperty("primary-color"),this.changeDetector.detectChanges())}refreshView(){this.sassHelper?.setProperty(this.primaryColor,"primary-color"),this.sassHelper?.setProperty(this.primaryColor,"primary-color-dark")}}l.\u0275fac=function(a){return new(a||l)(t.Y36(t.sBO))},l.\u0275cmp=t.Xpm({type:l,selectors:[["theme-changer-component"]],viewQuery:function(a,f){if(1&a&&t.Gf(c,5),2&a){let u;t.iGM(u=t.CRH())&&(f.sassHelper=u.first)}},standalone:!0,features:[t.jDz],decls:9,vars:4,consts:[[1,"theme-input"],[1,"flex-row"],[1,"color-preview"],["type","text",3,"ngModel","ngModelChange"],[1,"refresh-btn",3,"click"],[3,"icon"]],template:function(a,f){1&a&&(t._UZ(0,"sass-helper"),t.TgZ(1,"div",0)(2,"p"),t._uU(3,"Change primary-color:"),t.qZA(),t.TgZ(4,"div",1),t._UZ(5,"div",2),t.TgZ(6,"input",3),t.NdJ("ngModelChange",function(S){return f.primaryColor=S}),t.qZA(),t.TgZ(7,"div",4),t.NdJ("click",function(){return f.refreshView()}),t._UZ(8,"fa-icon",5),t.qZA()()()),2&a&&(t.xp6(5),t.Udp("background",f.primaryColor),t.xp6(1),t.Q6J("ngModel",f.primaryColor),t.xp6(2),t.Q6J("icon",f.faRefresh))},dependencies:[e.ez,h.uH,h.BN,c,s.u5,s.Fj,s.JJ,s.On],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.theme-input[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px;margin:0 10px}.theme-input[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.theme-input[_ngcontent-%COMP%]   .flex-row[_ngcontent-%COMP%]{position:relative}.theme-input[_ngcontent-%COMP%]   .color-preview[_ngcontent-%COMP%]{position:absolute;width:20px;height:20px;border-radius:3px;background:var(--primary-color);left:5px;top:10px}.theme-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:40px;box-sizing:border-box;border:1px solid #ccc;border-right:none;border-radius:0;font-size:1.2em;outline:none;font-family:Source Sans Pro;padding:2px 5px 2px 40px;width:150px;cursor:pointer}.theme-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border-color:var(--primary-color)}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]{height:40px;border:1px solid var(--primary-color);padding:7px;background:var(--primary-color);display:flex;justify-content:center;cursor:pointer;transition:background .6s ease;box-sizing:border-box}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.5em;color:#fff}.theme-input[_ngcontent-%COMP%]   .refresh-btn[_ngcontent-%COMP%]:hover{filter:brightness(.9)}']})},3612:(x,y,i)=>{i.r(y),i.d(y,{LoadersComponent:()=>b});var e=i(1571),s=i(2687),h=i(5384),m=i(6895),t=i(2216);function C(n,r){if(1&n&&e._UZ(0,"fa-icon",3),2&n){const o=e.oxw();e.Udp("font-size",o.size,"px")("color",o.color),e.Q6J("icon",o.faIcon)("spin",!0)}}function c(n,r){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.Udp("color",o.color),e.xp6(1),e.Oqu(o.text)}}class l{constructor(){}}l.\u0275fac=function(r){return new(r||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["fa-icon-loader-component"]],inputs:{color:"color",faIcon:"faIcon",size:"size",text:"text"},standalone:!0,features:[e.jDz],decls:3,vars:2,consts:[[1,"icon-container"],[3,"font-size","color","icon","spin",4,"ngIf"],[3,"color",4,"ngIf"],[3,"icon","spin"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0),e.YNc(1,C,1,6,"fa-icon",1),e.YNc(2,c,2,3,"p",2),e.qZA()),2&r&&(e.xp6(1),e.Q6J("ngIf",o.faIcon),e.xp6(1),e.Q6J("ngIf",o.text))},dependencies:[m.ez,m.O5,t.uH,t.BN],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{display:inline-block;margin:5px}.icon-container[_ngcontent-%COMP%]{padding:5px;display:flex;flex-direction:column}.icon-container[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:40px;color:var(--primary-color)}.icon-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--primary-color);font-size:18px;font-weight:400}']});const d=function(n,r){return[n,r]};function a(n,r){if(1&n&&(e.TgZ(0,"div",3),e._UZ(1,"span")(2,"span")(3,"span"),e.qZA()),2&n){const o=e.oxw();e.Q6J("ngClass",e.WLB(1,d,o.loaderStyle,o.animation))}}const f=function(n){return[n]};function u(n,r){if(1&n&&(e.TgZ(0,"div",3),e._UZ(1,"span")(2,"span")(3,"span"),e.qZA()),2&n){const o=e.oxw();e.Q6J("ngClass",e.VKq(1,f,o.loaderStyle))}}function S(n,r){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Oqu(o.text)}}var p=(()=>{return(n=p||(p={})).SPINNER="spinner",n.SPINNER2="spinner-2",n.DOT_LOADER="dot-loader",n.DOT_LOADER2="dot-loader-2",p;var n})();class g{constructor(){}}g.\u0275fac=function(r){return new(r||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["loader-component"]],inputs:{loaderStyle:"loaderStyle",animation:"animation",text:"text"},standalone:!0,features:[e.jDz],decls:4,vars:3,consts:[[1,"icon-container"],[3,"ngClass",4,"ngIf"],[4,"ngIf"],[3,"ngClass"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0),e.YNc(1,a,4,4,"div",1),e.YNc(2,u,4,3,"div",1),e.YNc(3,S,2,1,"p",2),e.qZA()),2&r&&(e.xp6(1),e.Q6J("ngIf",o.loaderStyle&&o.animation),e.xp6(1),e.Q6J("ngIf",o.loaderStyle&&!o.animation),e.xp6(1),e.Q6J("ngIf",o.text))},dependencies:[m.ez,m.mk,m.O5,t.uH],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{display:inline-block;margin:5px}.icon-container[_ngcontent-%COMP%]{padding:5px;display:flex;flex-direction:column;justify-content:center;min-width:50px;min-height:50px;position:relative}.icon-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{color:var(--primary-color)}.icon-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--primary-color);font-size:18px;font-weight:400}.spinner[_ngcontent-%COMP%]{border:8px solid #f3f3f3;border-top:8px solid var(--primary-color);border-radius:50%;width:50px;height:50px;margin:auto}.spinner-2[_ngcontent-%COMP%]{border:8px solid transparent;border-top:8px solid var(--primary-color);border-bottom:8px solid var(--primary-color);border-radius:50%;width:50px;height:50px;margin:auto}.linear[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_spin 2s linear infinite}.ease[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading 1s ease infinite}.dot-loader[_ngcontent-%COMP%]{position:relative;flex-direction:column;display:flex;justify-content:center;align-items:center;width:70px;height:70px;margin:auto}.dot-loader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;font-size:10px;width:1em;height:1em;border-radius:50%;animation:_ngcontent-%COMP%_dotSpin 1.1s infinite ease}.dot-loader-2[_ngcontent-%COMP%]{margin:10px auto 0;width:auto;text-align:center}.dot-loader-2[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:18px;height:18px;margin:3px;background-color:var(--primary-color);border-radius:100%;display:inline-block;animation:_ngcontent-%COMP%_sk-bouncedelay 1.4s infinite ease-in-out both}.dot-loader-2[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-of-type{animation-delay:-.32s}.dot-loader-2[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:nth-child(2){animation-delay:-.16s}@keyframes _ngcontent-%COMP%_dotSpin{0%,to{box-shadow:0 -2.6em 0 0 var(--primary-color),1.8em -1.8em #00bdab33,2.5em 0 #00bdab33,1.75em 1.75em #00bdab33,0 2.5em #00bdab33,-1.8em 1.8em #00bdab33,-2.6em 0 #00bdab80,-1.8em -1.8em #00bdabb3}12.5%{box-shadow:0 -2.6em #00bdabb3,1.8em -1.8em 0 0 var(--primary-color),2.5em 0 #00bdab33,1.75em 1.75em #00bdab33,0 2.5em #00bdab33,-1.8em 1.8em #00bdab33,-2.6em 0 #00bdab33,-1.8em -1.8em #00bdab80}25%{box-shadow:0 -2.6em #00bdab80,1.8em -1.8em #00bdabb3,2.5em 0 0 0 var(--primary-color),1.75em 1.75em #00bdab33,0 2.5em #00bdab33,-1.8em 1.8em #00bdab33,-2.6em 0 #00bdab33,-1.8em -1.8em #00bdab33}37.5%{box-shadow:0 -2.6em #00bdab33,1.8em -1.8em #00bdab80,2.5em 0 #00bdabb3,1.75em 1.75em 0 0 var(--primary-color),0 2.5em #00bdab33,-1.8em 1.8em #00bdab33,-2.6em 0 #00bdab33,-1.8em -1.8em #00bdab33}50%{box-shadow:0 -2.6em #00bdab33,1.8em -1.8em #00bdab33,2.5em 0 #00bdab80,1.75em 1.75em #00bdabb3,0 2.5em 0 0 var(--primary-color),-1.8em 1.8em #00bdab33,-2.6em 0 #00bdab33,-1.8em -1.8em #00bdab33}62.5%{box-shadow:0 -2.6em #00bdab33,1.8em -1.8em #00bdab33,2.5em 0 #00bdab33,1.75em 1.75em #00bdab80,0 2.5em #00bdabb3,-1.8em 1.8em 0 0 var(--primary-color),-2.6em 0 #00bdab33,-1.8em -1.8em #00bdab33}75%{box-shadow:0 -2.6em #00bdab33,1.8em -1.8em #00bdab33,2.5em 0 #00bdab33,1.75em 1.75em #00bdab33,0 2.5em #00bdab80,-1.8em 1.8em #00bdabb3,-2.6em 0 0 0 var(--primary-color),-1.8em -1.8em #00bdab33}87.5%{box-shadow:0 -2.6em #00bdab33,1.8em -1.8em #00bdab33,2.5em 0 #00bdab33,1.75em 1.75em #00bdab33,0 2.5em #00bdab33,-1.8em 1.8em #00bdab80,-2.6em 0 #00bdabb3,-1.8em -1.8em 0 0 var(--primary-color)}}@keyframes _ngcontent-%COMP%_loading{to{transform:rotate(1turn)}}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_sk-bouncedelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}']});class b{constructor(){this.faSpinner=s.LM3,this.faCircleNotch=s.IJ7,this.spinner=p.SPINNER,this.spinner2=p.SPINNER2,this.dotLoader=p.DOT_LOADER,this.dotLoader2=p.DOT_LOADER2}}b.\u0275fac=function(r){return new(r||b)},b.\u0275cmp=e.Xpm({type:b,selectors:[["loaders-component"]],standalone:!0,features:[e._Bn([{provide:e.soG,useValue:"de-DE"}]),e.jDz],decls:34,vars:49,consts:[[1,"header"],[1,"content"],[1,"container"],[3,"faIcon","size"],[3,"faIcon","color","text"],[3,"color","faIcon"],[3,"faIcon","text"],[3,"loaderStyle","animation"],[3,"loaderStyle","animation","text"],[3,"loaderStyle"],[3,"loaderStyle","text"]],template:function(r,o){1&r&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Loaders"),e.qZA(),e._UZ(3,"theme-changer-component"),e.qZA(),e.TgZ(4,"div",1)(5,"div",2)(6,"h2"),e._uU(7,"fa-icon-loader-component"),e.qZA(),e._UZ(8,"fa-icon-loader-component",3)(9,"fa-icon-loader-component",4)(10,"fa-icon-loader-component",5)(11,"fa-icon-loader-component",6),e.qZA(),e.TgZ(12,"div",2)(13,"h2"),e._uU(14,"loader-component (loaderType spinner)"),e.qZA(),e._UZ(15,"loader-component",7)(16,"loader-component",7)(17,"loader-component",8),e.qZA(),e.TgZ(18,"div",2)(19,"h2"),e._uU(20,"loader-component (loaderType spinner-2)"),e.qZA(),e._UZ(21,"loader-component",7)(22,"loader-component",7)(23,"loader-component",8),e.qZA(),e.TgZ(24,"div",2)(25,"h2"),e._uU(26,"loader-component (loaderType dot-loader)"),e.qZA(),e._UZ(27,"loader-component",9)(28,"loader-component",10),e.qZA(),e.TgZ(29,"div",2)(30,"h2"),e._uU(31,"loader-component (loaderType dot-loader-2)"),e.qZA(),e._UZ(32,"loader-component",9)(33,"loader-component",10),e.qZA()()),2&r&&(e.xp6(8),e.Q6J("faIcon",o.faSpinner)("size",45),e.xp6(1),e.Q6J("faIcon",o.faSpinner)("color","#63cdc3")("text","Daten werden geladen..."),e.xp6(1),e.Q6J("color","#0054bd")("faIcon",o.faCircleNotch),e.xp6(1),e.Q6J("faIcon",o.faCircleNotch)("text","Daten werden geladen..."),e.xp6(4),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.spinner)("animation","linear"),e.xp6(1),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.spinner)("animation","ease"),e.xp6(1),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.spinner)("animation","ease")("text","Daten werden geladen..."),e.xp6(4),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.spinner2)("animation","ease"),e.xp6(1),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.spinner2)("animation","linear"),e.xp6(1),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.spinner2)("animation","linear")("text","Daten werden geladen..."),e.xp6(4),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.dotLoader),e.xp6(1),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.dotLoader)("text","Daten werden geladen..."),e.xp6(4),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.dotLoader2),e.xp6(1),e.Udp("border","1px solid #ddd"),e.Q6J("loaderStyle",o.dotLoader2)("text","Daten werden geladen..."))},dependencies:[h.a,l,g],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:5px}']})}}]);