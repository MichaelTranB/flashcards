"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3790],{3790:(U,g,r)=>{r.r(g),r.d(g,{PlaceDetailPageModule:()=>S});var p=r(177),m=r(4341),d=r(5171),t=r(4742),u=r(6697),e=r(3953);const h=["f"];let f=(()=>{var i;class c{constructor(o){this.modalCtrl=o}ngOnInit(){const o=new Date(this.selectedPlace.availableFrom),n=new Date(this.selectedPlace.availableTo);"random"===this.selectedMode&&(this.startDate=new Date(o.getTime()+Math.random()*(n.getTime()-6048e5-o.getTime())).toISOString(),this.endDate=new Date(new Date(this.startDate).getTime()+Math.random()*(new Date(this.startDate).getTime()+5184e5-new Date(this.startDate).getTime())).toISOString())}onCancel(){this.modalCtrl.dismiss(null,"cancel")}onBookPlace(){!this.form.valid||!this.datesValid()||this.modalCtrl.dismiss({bookingData:{firstName:this.form.value["first-name"],lastName:this.form.value["last-name"],guestNumber:+this.form.value["guest-number"],startDate:new Date(this.form.value["date-from"]),endDate:new Date(this.form.value["date-to"])}},"confirm")}datesValid(){const o=new Date(this.form.value["date-from"]);return new Date(this.form.value["date-to"])>o}}return(i=c).\u0275fac=function(o){return new(o||i)(e.rXU(t.W3))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-create-booking"]],viewQuery:function(o,n){if(1&o&&e.GBs(h,7),2&o){let s;e.mGM(s=e.lsd())&&(n.form=s.first)}},inputs:{selectedPlace:"selectedPlace",selectedMode:"selectedMode"},decls:52,vars:9,consts:[["f","ngForm"],["startDateCtrl","ngModel"],["slot","primary"],[3,"click"],["name","close"],["padding","",1,"ion-text-center"],[3,"ngSubmit"],["size-sm","6","offset-sm","3"],["position","floating"],["type","text","ngModel","","name","first-name","required",""],["type","text","ngModel","","name","last-name","required",""],["name","guest-number",3,"ngModel"],["value","1"],["value","2"],["value","3"],["size-sm","3","offset-sm","3"],["display-format","MMM DD YYYY","picker-format","YY MMM DD","name","date-from","required","",3,"min","max","ngModel"],["display-format","MMM DD YYYY","picker-format","YY MMM DD","name","date-to","required","",3,"min","max","ngModel"],["type","submit","color","primary","expand","block",3,"disabled"]],template:function(o,n){if(1&o){const s=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),e.EFF(3),e.k0s(),e.j41(4,"ion-buttons",2)(5,"ion-button",3),e.bIt("click",function(){return e.eBV(s),e.Njj(n.onCancel())}),e.nrm(6,"ion-icon",4),e.k0s()()()(),e.j41(7,"ion-content",5)(8,"form",6,0),e.bIt("ngSubmit",function(){return e.eBV(s),e.Njj(n.onBookPlace())}),e.j41(10,"ion-grid")(11,"ion-row")(12,"ion-col",7)(13,"ion-item")(14,"ion-label",8),e.EFF(15,"First Name"),e.k0s(),e.nrm(16,"ion-input",9),e.k0s()()(),e.j41(17,"ion-row")(18,"ion-col",7)(19,"ion-item")(20,"ion-label",8),e.EFF(21,"Last Name"),e.k0s(),e.nrm(22,"ion-input",10),e.k0s()()(),e.j41(23,"ion-row")(24,"ion-col",7)(25,"ion-item")(26,"ion-label",8),e.EFF(27,"Number of Guests"),e.k0s(),e.j41(28,"ion-select",11)(29,"ion-select-option",12),e.EFF(30,"1"),e.k0s(),e.j41(31,"ion-select-option",13),e.EFF(32,"2"),e.k0s(),e.j41(33,"ion-select-option",14),e.EFF(34,"3"),e.k0s()()()()(),e.j41(35,"ion-row")(36,"ion-col",15)(37,"ion-item")(38,"ion-label",8),e.EFF(39,"From"),e.k0s(),e.nrm(40,"ion-datetime",16,1),e.k0s()()(),e.j41(42,"ion-row")(43,"ion-col",15)(44,"ion-item")(45,"ion-label",8),e.EFF(46,"To"),e.k0s(),e.nrm(47,"ion-datetime",17),e.k0s()()(),e.j41(48,"ion-row")(49,"ion-col",7)(50,"ion-button",18),e.EFF(51," Book! "),e.k0s()()()()()()}if(2&o){const s=e.sdS(9),l=e.sdS(41);e.R7$(3),e.JRh(n.selectedPlace.title),e.R7$(25),e.Y8G("ngModel","2"),e.R7$(12),e.Y8G("min",n.selectedPlace.availableFrom.toISOString())("max",n.selectedPlace.availableTo.toISOString())("ngModel",n.startDate),e.R7$(7),e.Y8G("min",l.value)("max",n.selectedPlace.availableTo.toISOString())("ngModel",n.endDate),e.R7$(3),e.Y8G("disabled",!s.valid||!n.datesValid())}},dependencies:[m.qT,m.BC,m.cb,m.YS,m.vS,m.cV,t.Jm,t.QW,t.hU,t.W9,t.A9,t.lO,t.eU,t.iq,t.$w,t.uz,t.he,t.ln,t.Nm,t.Ip,t.BC,t.ai,t.Je,t.Gw]}),c})();var b=r(2276),k=r(3656),D=r(8591),v=r(8244),P=r(9033);function C(i,c){1&i&&(e.j41(0,"div",4),e.nrm(1,"ion-spinner",5),e.k0s())}function M(i,c){if(1&i){const a=e.RV6();e.j41(0,"ion-row")(1,"ion-col",12)(2,"ion-button",13),e.bIt("click",function(){e.eBV(a);const n=e.XpG(2);return e.Njj(n.onBookPlace())}),e.EFF(3,"Book"),e.k0s()()()}}function F(i,c){if(1&i){const a=e.RV6();e.j41(0,"ion-grid",6)(1,"ion-row")(2,"ion-col",7),e.nrm(3,"ion-img",8),e.k0s()(),e.j41(4,"ion-row")(5,"ion-col",9)(6,"p"),e.EFF(7),e.k0s()()(),e.j41(8,"ion-row")(9,"ion-col",9)(10,"p"),e.EFF(11),e.k0s()()(),e.j41(12,"ion-row")(13,"ion-col",7)(14,"ion-img",10),e.bIt("click",function(){e.eBV(a);const n=e.XpG();return e.Njj(n.onShowFullMap())}),e.k0s()()(),e.DNE(15,M,4,0,"ion-row",11),e.k0s()}if(2&i){const a=e.XpG();e.R7$(3),e.Y8G("src",a.place.imageUrl),e.R7$(4),e.JRh(a.place.description),e.R7$(4),e.JRh(a.place.location.address),e.R7$(3),e.Y8G("src",a.place.location.staticMapImageUrl),e.R7$(),e.Y8G("ngIf",a.isBookable)}}const B=[{path:"",component:(()=>{var i;class c{constructor(o,n,s,l,j,I,w,T,Y,R){this.navCtrl=o,this.route=n,this.placesService=s,this.modalCtrl=l,this.actionSheetCtrl=j,this.bookingService=I,this.loadingCtrl=w,this.authService=T,this.alertCtrl=Y,this.router=R,this.isBookable=!1,this.isLoading=!1}ngOnInit(){this.route.paramMap.subscribe(o=>{if(!o.has("placeId"))return void this.navCtrl.navigateBack("/places/tabs/discover");this.isLoading=!0;const n=o.get("placeId");this.placeSub=this.placesService.getPlace(n).subscribe(s=>{this.place=s,this.authService.userId.pipe((0,u.s)(1)).subscribe(l=>{this.isBookable=s.userId!==l,this.isLoading=!1})},s=>{this.alertCtrl.create({header:"An error occurred!",message:"Could not load place.",buttons:[{text:"Okay",handler:()=>{this.router.navigate(["/places/tabs/discover"])}}]}).then(l=>l.present())})})}onBookPlace(){this.actionSheetCtrl.create({header:"Choose an Action",buttons:[{text:"Select Date",handler:()=>{this.openBookingModal("select")}},{text:"Random Date",handler:()=>{this.openBookingModal("random")}},{text:"Cancel",role:"cancel"}]}).then(o=>{o.present()})}openBookingModal(o){console.log(o),this.modalCtrl.create({component:f,componentProps:{selectedPlace:this.place,selectedMode:o}}).then(n=>(n.present(),n.onDidDismiss())).then(n=>{"confirm"===n.role&&this.loadingCtrl.create({message:"Booking place..."}).then(s=>{s.present();const l=n.data.bookingData;this.bookingService.addBooking(this.place.id,this.place.title,this.place.imageUrl,l.firstName,l.lastName,l.guestNumber,l.startDate,l.endDate).subscribe(()=>{s.dismiss()})})})}onShowFullMap(){this.modalCtrl.create({component:b.z,componentProps:{center:{lat:this.place.location.lat,lng:this.place.location.lng},selectable:!1,closeButtonText:"Close",title:this.place.location.address}}).then(o=>{o.present()})}ngOnDestroy(){this.placeSub&&this.placeSub.unsubscribe()}}return(i=c).\u0275fac=function(o){return new(o||i)(e.rXU(k.q9),e.rXU(d.nX),e.rXU(D._),e.rXU(t.W3),e.rXU(t.GD),e.rXU(v.L),e.rXU(t.Xi),e.rXU(P.u),e.rXU(t.hG),e.rXU(d.Ix))},i.\u0275cmp=e.VBU({type:i,selectors:[["app-place-detail"]],decls:9,vars:3,consts:[["slot","start"],["defaultHref","/places/tabs/discover"],["class","ion-text-center",4,"ngIf"],["class","ion-no-padding",4,"ngIf"],[1,"ion-text-center"],["color","primary"],[1,"ion-no-padding"],["size-sm","6","offset-sm","3",1,"ion-no-padding"],[3,"src"],["size-sm","6","offset-sm","3","padding","",1,"ion-text-center"],["role","button",1,"location-image",3,"click","src"],[4,"ngIf"],["size-sm","6","offset-sm","3",1,"ion-text-center"],["color","primary","margin","",3,"click"]],template:function(o,n){1&o&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0),e.nrm(3,"ion-back-button",1),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.k0s()()(),e.j41(6,"ion-content"),e.DNE(7,C,2,0,"div",2)(8,F,16,5,"ion-grid",3),e.k0s()),2&o&&(e.R7$(5),e.JRh(n.isLoading?"Loading...":n.place.title),e.R7$(2),e.Y8G("ngIf",n.isLoading),e.R7$(),e.Y8G("ngIf",!n.isLoading))},dependencies:[p.bT,t.Jm,t.QW,t.hU,t.W9,t.lO,t.eU,t.KW,t.ln,t.w2,t.BC,t.ai,t.el]}),c})()}];let S=(()=>{var i;class c{}return(i=c).\u0275fac=function(o){return new(o||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[p.MD,m.YN,t.bv,d.iI.forChild(B)]}),c})()}}]);