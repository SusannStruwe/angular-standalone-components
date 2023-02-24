"use strict";(self.webpackChunkangular_component_library=self.webpackChunkangular_component_library||[]).push([[828],{2828:(I,u,i)=>{i.r(u),i.d(u,{ProgressbarsComponent:()=>d});var a=i(6895),r=i(8256),c=i(2216),b=i(2687),_=i(5384);function m(t,e){if(1&t&&(r.TgZ(0,"div",2),r._UZ(1,"span",3),r.TgZ(2,"span",4),r._uU(3),r.qZA()()),2&t){const o=r.oxw();r.Udp("background",o.getProgress())("border-color",o.progressColor),r.ekj("bordered",o.bordered),r.xp6(1),r.Udp("width","calc(100% - "+o.progressWidth+"px)")("height","calc(100% - "+o.progressWidth+"px)")("border-color",o.progressColor),r.xp6(1),r.Udp("font-size",o.fontSize,"em"),r.xp6(1),r.AsE("",o.percentage," ",o.unit,"")}}function h(t,e){if(1&t&&(r.TgZ(0,"div",5),r.O4$(),r.TgZ(1,"svg",6),r._UZ(2,"circle",7)(3,"circle",8),r.qZA(),r.kcU(),r.TgZ(4,"span",4),r._uU(5),r.qZA()()),2&t){const o=r.oxw();r.xp6(2),r.Udp("stroke",o.progressBgColor),r.xp6(1),r.Udp("stroke",o.progressColor)("stroke-dashoffset",o.getRoundedProgress()),r.xp6(1),r.Udp("font-size",o.fontSize,"em"),r.xp6(1),r.AsE("",o.percentage," ",o.unit,"")}}class g{constructor(){this.percentage=0,this.unit="%",this.fontSize=1.5,this.progressWidth=20,this.progressColor="#00bdab",this.progressBgColor="#ddd",this.bordered=!1,this.roundedCorner=!1}getProgress(){return`conic-gradient(${this.progressColor} ${this.percentage}%, ${this.progressBgColor} ${this.percentage}%)`}getRoundedProgress(){return 100-this.percentage/100*100}}function C(t,e){if(1&t&&r._UZ(0,"div",2),2&t){const o=r.oxw();r.Udp("width",o.percentage,"%")}}g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=r.Xpm({type:g,selectors:[["circular-progressbar-component"]],inputs:{percentage:"percentage",unit:"unit",fontSize:"fontSize",progressWidth:"progressWidth",progressColor:"progressColor",progressBgColor:"progressBgColor",bordered:"bordered",roundedCorner:"roundedCorner"},standalone:!0,features:[r.jDz],decls:2,vars:2,consts:[["class","circular-progress-bar",3,"background","bordered","border-color",4,"ngIf"],["class","rounded-progress-bar",4,"ngIf"],[1,"circular-progress-bar"],[1,"inner-content"],[1,"text"],[1,"rounded-progress-bar"],["xmlns","http://www.w3.org/2000/svg","viewBox","-1 -1 34 34"],["cx","16","cy","16","r","15.9155",1,"progress-background"],["cx","16","cy","16","r","15.9155",1,"progress-indicator"]],template:function(e,o){1&e&&(r.YNc(0,m,4,16,"div",0),r.YNc(1,h,6,10,"div",1)),2&e&&(r.Q6J("ngIf",!o.roundedCorner),r.xp6(1),r.Q6J("ngIf",o.roundedCorner))},dependencies:[a.ez,a.O5,c.uH],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;margin:10px;height:150px;width:150px}.circular-progress-bar[_ngcontent-%COMP%]{position:relative;height:100%;width:100%;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--primary-color) 5%,#ddd 5%);transition:background 1s linear}.circular-progress-bar[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%]{height:calc(100% - 20px);width:calc(100% - 20px);background-color:var(--bg-color);border-radius:50%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.circular-progress-bar[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;color:var(--text-color);width:100%;font-size:1.5em;z-index:4}.circular-progress-bar.bordered[_ngcontent-%COMP%]{border:1px solid var(--primary-color)}.circular-progress-bar.bordered[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%]{border:1px solid var(--primary-color);box-shadow:none}.rounded-progress-bar[_ngcontent-%COMP%]{position:relative;display:flex;height:100%;width:100%;justify-content:center;align-items:center}.rounded-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{height:100%;transform:rotate(-90deg);width:100%}.rounded-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .progress-background[_ngcontent-%COMP%]{fill:none;stroke:#e2eff0;stroke-width:1.8}.rounded-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   .progress-indicator[_ngcontent-%COMP%]{fill:none;stroke:#78bec7;stroke-dasharray:100 100;stroke-dashoffset:100;stroke-linecap:round;stroke-width:1.8}.rounded-progress-bar[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;color:var(--text-color);margin:auto;font-size:1.5em;z-index:4}']});class p{constructor(){this.percentage=0,this.progressColor="#00bdab",this.progressBgColor="#ddd",this.height=35,this.bordered=!1,this.striped=!1,this.gradient=!1}}function x(t,e){if(1&t&&(r.TgZ(0,"div",2),r.O4$(),r.TgZ(1,"svg"),r._UZ(2,"line",3)(3,"line",4),r.qZA()()),2&t){const o=r.oxw();r.Udp("stroke-dasharray",o.strokeDasharray),r.xp6(2),r.Udp("stroke",o.progressBgColor)("stroke-width",o.strokeWidth),r.xp6(1),r.Udp("stroke",o.progressColor)("stroke-width",o.strokeWidth),r.uIk("x2",o.getIndicatorWidth())}}function P(t,e){if(1&t&&(r.TgZ(0,"div",5),r.O4$(),r.TgZ(1,"svg",6),r._UZ(2,"circle"),r.qZA(),r.kcU(),r._UZ(3,"div",7)(4,"span",8),r.TgZ(5,"span",9),r._uU(6),r.qZA()()),2&t){const o=r.oxw();r.Udp("width",o.size,"px")("height",o.size,"px"),r.xp6(2),r.Udp("stroke-dasharray",o.strokeDasharray)("stroke",o.progressColor)("stroke-width",o.strokeWidth),r.uIk("cy",o.circleSize)("cx",o.circleSize)("r",o.radius),r.xp6(1),r.Udp("background",o.getProgress()),r.xp6(1),r.Udp("top",o.strokeWidth,"px")("left",o.strokeWidth,"px")("right",o.strokeWidth,"px")("bottom",o.strokeWidth,"px"),r.xp6(1),r.Udp("font-size",o.fontSize,"em")("top",o.radius,"px"),r.xp6(1),r.AsE("",o.percentage," ",o.unit,"")}}p.\u0275fac=function(e){return new(e||p)},p.\u0275cmp=r.Xpm({type:p,selectors:[["rectangle-progressbar-component"]],inputs:{percentage:"percentage",progressColor:"progressColor",progressBgColor:"progressBgColor",height:"height",bordered:"bordered",striped:"striped",gradient:"gradient"},standalone:!0,features:[r.jDz],decls:3,vars:17,consts:[[1,"progress-bar"],["class","striped",3,"width",4,"ngIf"],[1,"striped"]],template:function(e,o){1&e&&(r.TgZ(0,"div",0),r._UZ(1,"div"),r.YNc(2,C,1,2,"div",1),r.qZA()),2&e&&(r.Udp("height",o.height,"px")("border-color",o.progressColor)("background-color",o.progressBgColor),r.ekj("bordered",o.bordered),r.xp6(1),r.Udp("background",o.progressColor)("background-size","250px 100%")("width",o.percentage,"%"),r.ekj("gradient",o.gradient),r.xp6(1),r.Q6J("ngIf",o.striped))},dependencies:[a.ez,a.O5,c.uH],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;margin:10px;height:auto;width:200px}.progress-bar[_ngcontent-%COMP%]{position:relative;height:35px;width:100%;display:grid;place-items:center;float:left;background:#ddd}.progress-bar[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{position:absolute;background:var(--primary-color);height:100%;top:0;left:0;width:20px;transition:background 1s linear}.progress-bar[_ngcontent-%COMP%] > div.gradient[_ngcontent-%COMP%]{width:0%;background-image:linear-gradient(to right,#f58b20,#00bdab)!important;background-size:200px 100%!important}.progress-bar[_ngcontent-%COMP%] > div.striped[_ngcontent-%COMP%]{background:repeating-linear-gradient(135deg,rgba(0,0,0,.1),rgba(0,0,0,.1) 10px,transparent 10px,transparent 20px)}.progress-bar[_ngcontent-%COMP%] > div.striped-2[_ngcontent-%COMP%]{background:repeating-linear-gradient(90deg,rgba(0,0,0,.1),rgba(0,0,0,.1) 10px,var(--bg-color) 10px,var(--bg-color) 20px)}.progress-bar.bordered[_ngcontent-%COMP%]{border:1px solid var(--primary-color)}.stroked-progress-bar[_ngcontent-%COMP%]{stroke-dasharray:5;stroke-width:20;width:100%}.stroked-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.stroked-progress-bar[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:first-of-type{stroke:#ddd}.stroked-progress-bar[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]:last-of-type{stroke:var(--primary-color)}']});var f=(()=>{return(t=f||(f={})).CIRCLE="circle",t.RECTANGLE="rectangle",f;var t})();class l{constructor(){this.percentage=0,this.progressColor="#00bdab",this.progressBgColor="#ddd",this.unit="%",this.fontSize=2,this.size=250,this.strokeWidth=30,this.strokeDasharray="5",this.form=f.RECTANGLE,this.circleSize=125,this.radius=90,this.bgColor="white"}ngOnInit(){this.circleSize=this.size/2,this.radius=this.circleSize-this.strokeWidth/2}getIndicatorWidth(){return this.percentage+"%"}getProgress(){let e=window.getComputedStyle(document.body);return e.getPropertyValue("--bg-color")&&(this.bgColor=e.getPropertyValue("--bg-color")),`conic-gradient(transparent ${this.percentage}%, ${this.bgColor} ${this.percentage}%)`}}function y(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function k(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function Z(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function w(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function S(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function v(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function T(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function U(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function J(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function M(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function O(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function z(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function Q(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function A(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function B(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function q(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}function N(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.runProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPlay)}}function R(t,e){if(1&t){const o=r.EpF();r.TgZ(0,"button",26),r.NdJ("click",function(){r.CHM(o);const n=r.oxw();return r.KtG(n.stopProgress())}),r._UZ(1,"fa-icon",27),r.qZA()}if(2&t){const o=r.oxw();r.xp6(1),r.Q6J("icon",o.faPause)}}l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=r.Xpm({type:l,selectors:[["stroked-progressbar-component"]],inputs:{percentage:"percentage",progressColor:"progressColor",progressBgColor:"progressBgColor",unit:"unit",fontSize:"fontSize",size:"size",strokeWidth:"strokeWidth",strokeDasharray:"strokeDasharray",form:"form"},standalone:!0,features:[r.jDz],decls:2,vars:2,consts:[["class","stroked-rectangle-progress-bar",3,"stroke-dasharray",4,"ngIf"],["class","stroked-circular-progress-bar",3,"width","height",4,"ngIf"],[1,"stroked-rectangle-progress-bar"],["x1","0","y1","0","x2","100%","y2","0"],["x1","0","y1","0","y2","0"],[1,"stroked-circular-progress-bar"],["xmlns","http://www.w3.org/2000/svg"],[1,"circular-progress-bar"],[1,"inner-content"],[1,"text"]],template:function(e,o){1&e&&(r.YNc(0,x,4,11,"div",0),r.YNc(1,P,7,29,"div",1)),2&e&&(r.Q6J("ngIf","rectangle"===o.form),r.xp6(1),r.Q6J("ngIf","circle"===o.form))},dependencies:[a.ez,a.O5,c.uH],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{display:inline-block;box-sizing:border-box;margin:10px;position:relative}.stroked-rectangle-progress-bar[_ngcontent-%COMP%]{stroke-dasharray:5;stroke-width:30;display:inline-block;margin:auto;width:100%;height:40px;resize:both}.stroked-rectangle-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%}.stroked-circular-progress-bar[_ngcontent-%COMP%]{position:relative;padding:1px}.stroked-circular-progress-bar[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:100%;height:100%;margin:auto}.stroked-circular-progress-bar[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke-width:30;stroke-dasharray:7 4;stroke:var(--primary-color);fill:none}.stroked-circular-progress-bar[_ngcontent-%COMP%]   .circular-progress-bar[_ngcontent-%COMP%]{position:absolute;top:0;left:0;height:101%;width:101%;border-radius:50%;display:grid;place-items:center;background:conic-gradient(var(--primary-color) 5%,transparent 5%);transition:background 1s linear;opacity:.7}.stroked-circular-progress-bar[_ngcontent-%COMP%]   .inner-content[_ngcontent-%COMP%]{position:absolute;inset:35px 37px 37px 35px;background-color:var(--bg-color);border-radius:50%;box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-shadow:0 1px 3px #0000001f,0 1px 2px #0000003d}.stroked-circular-progress-bar[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{position:absolute;top:0;left:0;color:var(--text-color);width:100%;font-size:1.5em;z-index:4}']});class d{constructor(){this.faPlay=b.zc,this.faPause=b.XQY,this.progress=90,this.isRunning=!1,this.strokeFormCircle=f.CIRCLE}runProgress(){this.progress=1,this.intervalId=setInterval(()=>{this.isRunning=!0,this.progress=this.progress+1,100===this.progress&&(clearInterval(this.intervalId),this.isRunning=!1)},100)}stopProgress(){clearInterval(this.intervalId),this.isRunning=!1}}d.\u0275fac=function(e){return new(e||d)},d.\u0275cmp=r.Xpm({type:d,selectors:[["progressbars-component"]],standalone:!0,features:[r._Bn([{provide:r.soG,useValue:"de-DE"}]),r.jDz],decls:83,vars:165,consts:[[1,"header"],[1,"content"],[1,"container"],[1,"flex-row"],[3,"click",4,"ngIf"],[3,"percentage"],[3,"percentage","progressColor","progressBgColor","height"],[3,"percentage","progressColor","height"],[3,"percentage","bordered","progressBgColor"],[3,"percentage","progressColor","progressBgColor","bordered"],[3,"percentage","progressBgColor","bordered","striped"],[3,"percentage","progressColor","progressBgColor","bordered","striped"],[3,"percentage","bordered","gradient","progressBgColor"],[3,"percentage","progressBgColor","progressColor"],[3,"strokeWidth","strokeDasharray","percentage","progressBgColor","progressColor"],[3,"percentage","progressColor","form"],[3,"size","strokeWidth","strokeDasharray","percentage","progressColor","form"],[3,"size","strokeWidth","strokeDasharray","percentage","progressColor","fontSize","form"],[3,"percentage","progressWidth"],[3,"percentage","unit","progressColor"],[3,"percentage","unit","progressColor","progressWidth","fontSize"],[3,"percentage","progressWidth","progressBgColor","bordered"],[3,"percentage","unit","progressColor","progressBgColor","bordered"],[3,"percentage","unit","progressColor","progressBgColor","bordered","progressWidth","fontSize"],[3,"percentage","progressBgColor","roundedCorner"],[3,"percentage","unit","progressColor","progressBgColor","fontSize","roundedCorner"],[3,"click"],[3,"icon"]],template:function(e,o){1&e&&(r.TgZ(0,"div",0)(1,"h1"),r._uU(2,"Progressbars"),r.qZA(),r._UZ(3,"theme-changer-component"),r.qZA(),r.TgZ(4,"div",1)(5,"div",2)(6,"h2"),r._uU(7,"rectangle-progressbar-component"),r.qZA(),r.TgZ(8,"div",3),r.YNc(9,y,2,1,"button",4),r.YNc(10,k,2,1,"button",4),r._UZ(11,"rectangle-progressbar-component",5),r.qZA(),r._UZ(12,"rectangle-progressbar-component",6)(13,"rectangle-progressbar-component",7),r.qZA(),r.TgZ(14,"div",2)(15,"h2"),r._uU(16,"rectangle-progressbar-component(bordered)"),r.qZA(),r.TgZ(17,"div",3),r.YNc(18,Z,2,1,"button",4),r.YNc(19,w,2,1,"button",4),r._UZ(20,"rectangle-progressbar-component",8),r.qZA(),r._UZ(21,"rectangle-progressbar-component",9),r.qZA(),r.TgZ(22,"div",2)(23,"h2"),r._uU(24,"rectangle-progressbar-component(bordered,striped)"),r.qZA(),r.TgZ(25,"div",3),r.YNc(26,S,2,1,"button",4),r.YNc(27,v,2,1,"button",4),r._UZ(28,"rectangle-progressbar-component",10),r.qZA(),r._UZ(29,"rectangle-progressbar-component",11)(30,"rectangle-progressbar-component",11),r.qZA(),r.TgZ(31,"div",2)(32,"h2"),r._uU(33,"rectangle-progressbar-component(gradient)"),r.qZA(),r.TgZ(34,"div",3),r.YNc(35,T,2,1,"button",4),r.YNc(36,U,2,1,"button",4),r._UZ(37,"rectangle-progressbar-component",12),r.qZA(),r._UZ(38,"rectangle-progressbar-component",12),r.qZA(),r.TgZ(39,"div",2)(40,"h2"),r._uU(41,"stroked-progressbar-component (form rectangle)"),r.qZA(),r.TgZ(42,"div",3),r.YNc(43,J,2,1,"button",4),r.YNc(44,M,2,1,"button",4),r._UZ(45,"stroked-progressbar-component",13),r.qZA(),r._UZ(46,"stroked-progressbar-component",14)(47,"stroked-progressbar-component",14),r.qZA(),r.TgZ(48,"div",2)(49,"h2"),r._uU(50,"stroked-progressbar-component (form circle)"),r.qZA(),r.TgZ(51,"div",3),r.YNc(52,O,2,1,"button",4),r.YNc(53,z,2,1,"button",4),r._UZ(54,"stroked-progressbar-component",15),r.qZA(),r._UZ(55,"stroked-progressbar-component",16)(56,"stroked-progressbar-component",17),r.qZA(),r.TgZ(57,"div",2)(58,"h2"),r._uU(59,"circular-progressbar-component"),r.qZA(),r.TgZ(60,"div",3),r.YNc(61,Q,2,1,"button",4),r.YNc(62,A,2,1,"button",4),r._UZ(63,"circular-progressbar-component",18),r.qZA(),r._UZ(64,"circular-progressbar-component",19)(65,"circular-progressbar-component",20),r.qZA(),r.TgZ(66,"div",2)(67,"h2"),r._uU(68,"circular-progressbar-component(bordered)"),r.qZA(),r.TgZ(69,"div",3),r.YNc(70,B,2,1,"button",4),r.YNc(71,q,2,1,"button",4),r._UZ(72,"circular-progressbar-component",21),r.qZA(),r._UZ(73,"circular-progressbar-component",22)(74,"circular-progressbar-component",23),r.qZA(),r.TgZ(75,"div",2)(76,"h2"),r._uU(77,"circular-progressbar-component(roundedCorner)"),r.qZA(),r.TgZ(78,"div",3),r.YNc(79,N,2,1,"button",4),r.YNc(80,R,2,1,"button",4),r._UZ(81,"circular-progressbar-component",24),r.qZA(),r._UZ(82,"circular-progressbar-component",25),r.qZA()()),2&e&&(r.xp6(8),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress),r.xp6(1),r.Q6J("percentage",60)("progressColor","red")("progressBgColor","#fbdddd")("height",15),r.xp6(1),r.Q6J("percentage",60)("progressColor","#115cb9")("height",10),r.xp6(4),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("bordered",!0)("progressBgColor","transparent"),r.xp6(1),r.Q6J("percentage",60)("progressColor","red")("progressBgColor","transparent")("bordered",!0),r.xp6(4),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Udp("width",350,"px"),r.Q6J("percentage",o.progress)("progressBgColor","transparent")("bordered",!0)("striped",!0),r.xp6(1),r.Q6J("percentage",60)("progressColor","#115cb9")("progressBgColor","transparent")("bordered",!0)("striped",!0),r.xp6(1),r.Q6J("percentage",30)("progressColor","#ff8f00")("progressBgColor","transparent")("bordered",!0)("striped",!0),r.xp6(4),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("bordered",!0)("gradient",!0)("progressBgColor","transparent"),r.xp6(1),r.Q6J("percentage",30)("bordered",!0)("gradient",!0)("progressBgColor","transparent"),r.xp6(4),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("progressBgColor","#d2f5f1")("progressColor","#00bdab"),r.xp6(1),r.Udp("width",200,"px"),r.Q6J("strokeWidth",50)("strokeDasharray","15 5")("percentage",33)("progressBgColor","#ddd")("progressColor","red"),r.xp6(1),r.Udp("width",450,"px"),r.Q6J("strokeWidth",60)("strokeDasharray","15 5")("percentage",75)("progressBgColor","#f9dcb6")("progressColor","#ff8f00"),r.xp6(1),r.Udp("min-height",700,"px"),r.xp6(3),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("progressColor","#00bdab")("form",o.strokeFormCircle),r.xp6(1),r.Q6J("size",200)("strokeWidth",30)("strokeDasharray","15 4")("percentage",33)("progressColor","red")("form",o.strokeFormCircle),r.xp6(1),r.Q6J("size",250)("strokeWidth",40)("strokeDasharray","15 5")("percentage",75)("progressColor","#ff8f00")("fontSize",3)("form",o.strokeFormCircle),r.xp6(4),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("progressWidth",10),r.xp6(1),r.Udp("width",200,"px")("height",200,"px"),r.Q6J("percentage",10)("unit","St\xfcck")("progressColor","red"),r.xp6(1),r.Udp("width",300,"px")("height",300,"px"),r.Q6J("percentage",40)("unit","\u20ac")("progressColor","#ff8f00")("progressWidth",40)("fontSize",4),r.xp6(4),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("progressWidth",10)("progressBgColor","black")("bordered",!0),r.xp6(1),r.Udp("width",200,"px")("height",200,"px"),r.Q6J("percentage",10)("unit","St\xfcck")("progressColor","red")("progressBgColor","white")("bordered",!0),r.xp6(1),r.Udp("width",300,"px")("height",300,"px"),r.Q6J("percentage",50)("unit","\u20ac")("progressColor","#0b5e56")("progressBgColor","#d2f5f1")("bordered",!0)("progressWidth",40)("fontSize",4),r.xp6(4),r.Udp("justify-content","center"),r.xp6(1),r.Q6J("ngIf",!o.isRunning),r.xp6(1),r.Q6J("ngIf",o.isRunning),r.xp6(1),r.Q6J("percentage",o.progress)("progressBgColor","#111")("roundedCorner",!0),r.xp6(1),r.Udp("width",300,"px")("height",300,"px"),r.Q6J("percentage",33)("unit","\u20ac")("progressColor","#0b5e56")("progressBgColor","#d2f5f1")("fontSize",4)("roundedCorner",!0))},dependencies:[a.ez,a.O5,c.uH,c.BN,_.a,g,p,l],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:5px}.container[_ngcontent-%COMP%]{min-height:300px}button[_ngcontent-%COMP%]{position:relative;height:45px;width:65px;margin:0 5px;padding:10px 25px;border:0;font-weight:300;font-size:1.2em;background:var(--primary-color);color:var(--fa-icon-color);cursor:pointer;border-radius:4px;z-index:10}button[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--fa-icon-color)}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:0 5px}button[_ngcontent-%COMP%]:hover{filter:brightness(.9)}']})}}]);