"use strict";(self.webpackChunkangular_component_library=self.webpackChunkangular_component_library||[]).push([[501],{3501:(D,u,r)=>{r.r(u),r.d(u,{DatepickersComponent:()=>l});var i=r(6895),t=r(1571),y=r(5384),m=r(878),c=r(433),p=r(2216),h=r(2687),g=r(3353);function C(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",3),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.showDatePicker())}),t._UZ(1,"fa-icon",4),t.qZA()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("icon",n.faCalender)}}(0,i.qS)(m.Z);class s{constructor(e){this.platform=e,this.dateChanged=new t.vpe,this.faCalender=h.fT7,this.showOverlayBtn=!0}ngOnInit(){(this.platform.IOS||this.platform.SAFARI||this.platform.WEBKIT)&&(this.showOverlayBtn=!1)}changeDate(e){this.dateChanged.emit(this.date)}showDatePicker(){const e=document.querySelector("#date-input");e&&e.showPicker()}}function _(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",5),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.showStartDatePicker())}),t._UZ(1,"fa-icon",6),t.qZA()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("icon",n.faCalender)}}function P(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",5),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.showEndDatePicker())}),t._UZ(1,"fa-icon",6),t.qZA()}if(2&o){const n=t.oxw();t.xp6(1),t.Q6J("icon",n.faCalender)}}s.\u0275fac=function(e){return new(e||s)(t.Y36(g.t4))},s.\u0275cmp=t.Xpm({type:s,selectors:[["date-picker-component"]],inputs:{date:"date"},outputs:{dateChanged:"dateChanged"},standalone:!0,features:[t._Bn([{provide:t.soG,useValue:"de-DE"}]),t.jDz],decls:4,vars:5,consts:[[1,"datepicker"],["id","date-input","type","date",3,"ngModel","ngModelChange"],["class","btn-overlay",3,"click",4,"ngIf"],[1,"btn-overlay",3,"click"],[3,"icon"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"input",1),t.NdJ("ngModelChange",function(a){return n.changeDate(n.date=a)}),t.ALo(2,"date"),t.qZA(),t.YNc(3,C,2,1,"div",2),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngModel",t.xi3(2,2,n.date,"yyyy-MM-dd")),t.xp6(2),t.Q6J("ngIf",n.showOverlayBtn))},dependencies:[i.ez,i.O5,i.uU,c.u5,c.Fj,c.JJ,c.On,p.uH,p.BN,g.ud],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{position:relative;display:inline-block}.datepicker[_ngcontent-%COMP%]{position:relative;display:inline-block;margin:0 10px}.datepicker[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]{height:35px;min-width:160px;font-size:1.2em;outline:none;font-family:Source Sans Pro;border:1px solid #ccc;border-radius:0;padding:2px 5px 2px 10px;cursor:pointer;color:var(--text-color);background:transparent}.datepicker[_ngcontent-%COMP%]   .btn-overlay[_ngcontent-%COMP%]{height:35px;position:absolute;top:0;right:0;background:var(--bg-color);border:1px solid #ccc;padding:2px 10px;cursor:pointer;display:flex;justify-content:center;align-items:center}.datepicker[_ngcontent-%COMP%]   .btn-overlay[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--primary-color);font-size:1.5em;display:contents}.datepicker[_ngcontent-%COMP%]   .btn-overlay[_ngcontent-%COMP%]:hover{background-color:var(--primary-color)}.datepicker[_ngcontent-%COMP%]   .btn-overlay[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{color:var(--fa-icon-color)}.datepicker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .datepicker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .btn-overlay[_ngcontent-%COMP%]{border-color:var(--primary-color)}']}),(0,i.qS)(m.Z);class d{constructor(e){this.platform=e,this.startDateChanged=new t.vpe,this.endDateChanged=new t.vpe,this.faCalender=h.fT7,this.showOverlayBtn=!0}ngOnInit(){(this.platform.IOS||this.platform.SAFARI||this.platform.WEBKIT)&&(this.showOverlayBtn=!1)}changeStartDate(e){this.startDateChanged.emit(this.startDate)}changeEndDate(e){this.endDateChanged.emit(this.endDate)}showStartDatePicker(){const e=document.querySelector("#startdate-input");e&&e.showPicker()}showEndDatePicker(){const e=document.querySelector("#enddate-input");e&&e.showPicker()}}d.\u0275fac=function(e){return new(e||d)(t.Y36(g.t4))},d.\u0275cmp=t.Xpm({type:d,selectors:[["date-range-picker-component"]],inputs:{startDate:"startDate",endDate:"endDate"},outputs:{startDateChanged:"startDateChanged",endDateChanged:"endDateChanged"},standalone:!0,features:[t._Bn([{provide:t.soG,useValue:"de-DE"}]),t.jDz],decls:11,vars:10,consts:[[1,"date-range-picker"],[1,"item"],["id","startdate-input","type","date",3,"ngModel","ngModelChange"],["class","btn-overlay",3,"click",4,"ngIf"],["id","enddate-input","type","date",3,"ngModel","ngModelChange"],[1,"btn-overlay",3,"click"],[3,"icon"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"input",2),t.NdJ("ngModelChange",function(a){return n.changeStartDate(n.startDate=a)}),t.ALo(3,"date"),t.qZA(),t.YNc(4,_,2,1,"div",3),t.qZA(),t.TgZ(5,"p"),t._uU(6,"-"),t.qZA(),t.TgZ(7,"div",1)(8,"input",4),t.NdJ("ngModelChange",function(a){return n.changeEndDate(n.endDate=a)}),t.ALo(9,"date"),t.qZA(),t.YNc(10,P,2,1,"div",3),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngModel",t.xi3(3,4,n.startDate,"yyyy-MM-dd")),t.xp6(2),t.Q6J("ngIf",n.showOverlayBtn),t.xp6(4),t.Q6J("ngModel",t.xi3(9,7,n.endDate,"yyyy-MM-dd")),t.xp6(2),t.Q6J("ngIf",n.showOverlayBtn))},dependencies:[i.ez,i.O5,i.uU,c.u5,c.Fj,c.JJ,c.On,p.uH,p.BN,g.ud],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}[_nghost-%COMP%]{position:relative;display:inline-block}.date-range-picker[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:5px 10px;margin:5px 10px;min-width:300px;align-items:center;border-radius:4px}.date-range-picker[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{margin:0 10px;position:relative}.date-range-picker[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]{height:35px;min-width:160px;font-size:1.2em;outline:none;font-family:Source Sans Pro;border:1px solid #ccc;border-radius:0;padding:2px 5px 2px 10px;cursor:pointer;color:var(--text-color);background:transparent}.date-range-picker[_ngcontent-%COMP%]   .btn-overlay[_ngcontent-%COMP%]{height:35px;position:absolute;top:0;right:0;background:var(--bg-color);border:1px solid #ccc;padding:2px 10px;cursor:pointer;display:flex;justify-content:center;align-items:center}.date-range-picker[_ngcontent-%COMP%]   .btn-overlay[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{color:var(--primary-color);font-size:1.5em;display:contents}.date-range-picker[_ngcontent-%COMP%]   .btn-overlay[_ngcontent-%COMP%]:hover{background-color:var(--primary-color)}.date-range-picker[_ngcontent-%COMP%]   .btn-overlay[_ngcontent-%COMP%]:hover   fa-icon[_ngcontent-%COMP%]{color:var(--fa-icon-color)}.date-range-picker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .date-range-picker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + .btn-overlay[_ngcontent-%COMP%]{border-color:var(--primary-color)}']});class l{constructor(){this.date=new Date,this.startDate=new Date,this.endDate=new Date}dateChanged(e){this.date=e}startDateChanged(e){this.startDate=e}endDateChanged(e){this.endDate=e}}l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["datepickers-component"]],standalone:!0,features:[t._Bn([{provide:t.soG,useValue:"de-DE"}]),t.jDz],decls:27,vars:15,consts:[[1,"header"],[1,"content"],[1,"container"],[3,"startDate","endDate","startDateChanged","endDateChanged"],[1,"output"],[3,"date","dateChanged"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Datepickers"),t.qZA(),t._UZ(3,"theme-changer-component"),t.qZA(),t.TgZ(4,"div",1)(5,"div",2)(6,"h2"),t._uU(7,"date-range-picker-component"),t.qZA(),t.TgZ(8,"date-range-picker-component",3),t.NdJ("startDateChanged",function(a){return n.startDateChanged(a)})("endDateChanged",function(a){return n.endDateChanged(a)}),t.qZA(),t.TgZ(9,"p",4),t._uU(10,"Output: "),t.TgZ(11,"span"),t._uU(12),t.ALo(13,"date"),t.qZA(),t._uU(14," - "),t.TgZ(15,"span"),t._uU(16),t.ALo(17,"date"),t.qZA()()(),t.TgZ(18,"div",2)(19,"h2"),t._uU(20,"date-picker-component"),t.qZA(),t.TgZ(21,"date-picker-component",5),t.NdJ("dateChanged",function(a){return n.dateChanged(a)}),t.qZA(),t.TgZ(22,"p",4),t._uU(23,"Output: "),t.TgZ(24,"span"),t._uU(25),t.ALo(26,"date"),t.qZA()()()()),2&e&&(t.xp6(8),t.Q6J("startDate",n.startDate)("endDate",n.endDate),t.xp6(4),t.Oqu(t.xi3(13,6,n.startDate,"dd.MM.yyyy")),t.xp6(4),t.Oqu(t.xi3(17,9,n.endDate,"dd.MM.yyyy")),t.xp6(5),t.Q6J("date",n.date),t.xp6(4),t.Oqu(t.xi3(26,12,n.date,"dd.MM.yyyy")))},dependencies:[d,s,i.uU,y.a],styles:['@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Light.135bda5f93552875.ttf) format("truetype");font-weight:300}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Regular.41bc40a970f067ff.ttf) format("truetype");font-weight:400}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Semibold.e1686d3d32e2271f.ttf) format("truetype");font-weight:600}@font-face{font-family:Source Sans Pro;src:url(SourceSansPro-Bold.98b626f2f9024c05.ttf) format("truetype");font-weight:700}@font-face{font-family:Comfortaa;src:url(Comfortaa-Light.8051ed65f736c1d8.ttf) format("truetype");font-weight:300}@font-face{font-family:Comfortaa;src:url(Comfortaa-Regular.2b0e16fa829a5656.ttf) format("truetype");font-weight:400}@font-face{font-family:Comfortaa;src:url(Comfortaa-Bold.ba921710a388f51c.ttf) format("truetype");font-weight:700}@font-face{font-family:"soleil,sans-serif";src:url(SoleilLight.9b900c100a84d309.otf) format("truetype");font-weight:300}@font-face{font-family:"soleil,sans-serif";src:url(SoleilRegular.6889504e786edd01.otf) format("truetype");font-weight:400}@font-face{font-family:"soleil,sans-serif";src:url(SoleilBold.240907ffb90d327a.otf) format("truetype");font-weight:700}.content[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:5px}']})}}]);