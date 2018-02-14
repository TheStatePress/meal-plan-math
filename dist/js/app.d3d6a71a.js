webpackJsonp([1],{0:function(s,e,t){s.exports=t("NHnr")},Fm4c:function(s,e){},NHnr:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t("/5sW"),n=t("UlOv"),r={extends:n["a"],mixins:[n["b"].reactiveProp],props:[],mounted(){this.renderChart(this.chartData,this.options)}},l={name:"app",data(){return{}},components:{MealPlanChart:r},computed:{cashCostString(){return"$"+this.$store.getters.cashCost.toLocaleString()},cashCost(){return this.$store.getters.cashCost},mealPlanPrice(){return this.$store.getters.mealPlanPrice},numBreakfasts(){return this.$store.getters.numBreakfasts},numLunches(){return this.$store.getters.numLunches},numDinners(){return this.$store.getters.numDinners},mealsPerWeek(){return this.$store.getters.mealsPerWeek},mealsPerSemester(){return this.$store.getters.mealsPerSemester},getChartData(){let s=[{label:"Unlimited",value:2360,tooManyMeals:()=>{return!1}},{label:"Sparky's Favorite",value:2075,tooManyMeals:()=>{return this.mealsPerWeek>14}},{label:"Maroon",value:1710,tooManyMeals:()=>{return this.mealsPerSemester>180}},{label:"Gold",value:1260,tooManyMeals:()=>{return this.mealsPerWeek>8}},{label:"Cash",value:this.cashCost}];return s.sort((s,e)=>{return s.value==e.value?0:s.value>e.value?-1:1}),{labels:s.map(s=>s.label),datasets:[{label:"Semester Costs",backgroundColor:s.map(s=>"Cash"==s.label?"#FED106":s.tooManyMeals()?"#D3D3D3":"#8D383F"),data:s.map(s=>s.value)}]}}},methods:{breakfastsChange:function(s){const e=s.target;this.$store.dispatch("setNumBreakfasts",parseInt(e.value))},lunchesChange:function(s){const e=s.target;this.$store.dispatch("setNumLunches",parseInt(e.value))},dinnersChange:function(s){const e=s.target;this.$store.dispatch("setNumDinners",parseInt(e.value))}}},u=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"container-fluid",attrs:{id:"app"}},[t("div",{staticClass:"row"},[t("div",{staticClass:"meal-input col-sm-4"},[t("p",[s._v("Types of Meal Per Week")]),s._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"input-group"},[t("label",{staticClass:"col",attrs:{for:"breakfasts"}},[s._v("Breakfasts: "+s._s(s.numBreakfasts))]),s._v(" "),t("input",{staticClass:"col",attrs:{type:"range",min:"0",max:"7",value:"2",name:"breakfasts",id:"numBreakfasts"},on:{change:s.breakfastsChange}})])]),s._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"input-group"},[t("label",{staticClass:"col",attrs:{for:"lunches"}},[s._v("Lunches: "+s._s(s.numLunches))]),s._v(" "),t("input",{staticClass:"col",attrs:{type:"range",min:"0",max:"7",value:"2",name:"lunches",id:"numLunches"},on:{change:s.lunchesChange}})])]),s._v(" "),t("div",{staticClass:"row"},[t("div",{staticClass:"input-group"},[t("label",{staticClass:"col",attrs:{for:"dinners"}},[s._v("Dinners: "+s._s(s.numDinners))]),s._v(" "),t("input",{staticClass:"col",attrs:{type:"range",min:"0",max:"7",value:"2",name:"dinners",id:"numDinners"},on:{change:s.dinnersChange}})])]),s._v(" "),s._m(0)]),s._v(" "),t("div",{staticClass:"col-sm-8",attrs:{id:"results"}},[t("p",[s._v("Cash Cost: "+s._s(s.cashCostString))]),s._v(" "),t("meal-plan-chart",{attrs:{height:300,"chart-data":s.getChartData}})],1)])])},i=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"row"},[t("p",[s._v("Change the number of each type of meal you eat per week. The cash value will be graphed on the right in "),t("span",{staticClass:"gold"},[s._v("gold.")]),s._v(" If you have selected more meals than are in a meal plan, it will be displayed in "),t("span",{staticClass:"gray"},[s._v("gray.")]),s._v(" All other meal plans will be displayed in "),t("span",{staticClass:"maroon"},[s._v("maroon.")]),s._v(" Meal plan prices are calculated by subtracting M&G dollars from total price (M&G is 1:1 with cash).")])])}],o=t("XyMi");function c(s){t("Fm4c")}var m=!1,j=c,h=null,v=null,d=Object(o["a"])(l,u,i,m,j,h,v),p=d.exports,f=t("NYxO");a["a"].use(f["a"]);var g=new f["a"].Store({state:{numBreakfasts:2,numLunches:2,numDinners:2,breakfastPrice:6.95,lunchPrice:8.95,dinnerPrice:9.95,numWeeksInSemester:15},mutations:{setNumBreakfasts:(s,e)=>{s.numBreakfasts=e},setNumLunches:(s,e)=>{s.numLunches=e},setNumDinners:(s,e)=>{s.numDinners=e}},actions:{setNumBreakfasts:({commit:s},e)=>{s("setNumBreakfasts",e)},setNumLunches:({commit:s},e)=>{s("setNumLunches",e)},setNumDinners:({commit:s},e)=>{s("setNumDinners",e)}},getters:{cashCost:s=>{return s.numWeeksInSemester*(s.numBreakfasts*s.breakfastPrice+s.numLunches*s.lunchPrice+s.numDinners*s.dinnerPrice)},numBreakfasts:s=>{return s.numBreakfasts},numLunches:s=>{return s.numLunches},numDinners:s=>{return s.numDinners},mealsPerWeek:s=>{return s.numBreakfasts+s.numLunches+s.numDinners},mealsPerSemester:s=>{return s.numWeeksInSemester*(s.numBreakfasts+s.numLunches+s.numDinners)}}});a["a"].config.productionTip=!1,new a["a"]({store:g,render:s=>s(p)}).$mount("#app")},uslO:function(s,e,t){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(s){return t(r(s))}function r(s){var e=a[s];if(!(e+1))throw new Error("Cannot find module '"+s+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=r,s.exports=n,n.id="uslO"}},[0]);
//# sourceMappingURL=app.d3d6a71a.js.map