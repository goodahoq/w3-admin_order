webpackJsonp([1],{DjEO:function(t,a,s){t.exports=s.p+"static/img/img3.eb0ffd8.jpg"},Eaaq:function(t,a,s){t.exports=s.p+"static/img/img1.a52eff3.jpg"},NHnr:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("7+uW"),i={name:"App",data:function(){return this.colors=["#7ED321","#D0021B","#4A90E2"],this.chartSettings={labelMap:{revenue:"淨額",cost:"支出",income:"收入"}},{latestOrders:[{title:"Yellow T-shirt",name:this.$faker().name.findName(),time:"2018/06/13 13:42",fee:3200,img:s("Eaaq")},{title:"Darkblue T-shirt",name:this.$faker().name.findName(),time:"2018/06/13 11:23",fee:2800,img:s("aXrP")},{title:"Brown T-shirt",name:this.$faker().name.findName(),time:"2018/06/13 08:35",fee:3300,img:s("DjEO")}],fakeData:{transaction:{facebook:{lastWeek:42937,thisWeek:55836,lastIncrease:9876},google:{lastWeek:22477,thisWeek:29837,lastIncrease:5923},amazon:{lastWeek:4493,thisWeek:4272,lastIncrease:987},wordpress:{lastWeek:2739,thisWeek:2277,lastIncrease:976}},revenue:[9212,6754,11245,9453,4353,1257,5976,7545],cost:[1242,2754,1534,2473,1986,2764,1472,2451]},show:{home:!0,orders:!1,products:!1}}},computed:{fakeOrder:function(){var t=0,a=0;return this.fakeData.revenue.forEach(function(a){t+=a}),this.fakeData.cost.forEach(function(t){a+=t}),{revenue:t,cost:a,income:t-a}},customData:function(){for(var t=[],a=0;a<7;a++)t.push({"日期":a+6+" JUN",revenue:this.fakeData.revenue[a],cost:this.fakeData.cost[a],income:this.fakeData.revenue[a]-this.fakeData.cost[a]});return{columns:["日期","revenue","cost","income"],rows:t}}},methods:{showNav:function(t){this.show.home=!1,this.show.orders=!1,this.show.products=!1,this.show[t]=!0},formatNumber:function(t,a){if(isNaN(t))return NaN;a="string"==typeof a?a:",";for(var s=t.toString().split("."),e=s[0].split(""),i=[];e.length>3;)i.unshift(e.splice(e.length-3,3).join(""));return i.unshift(e.join("")),s[0]=i.join(a),s.join(".")}}},n={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"navBar text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 navBar__title"},[t._v("ShopTime")]),t._v(" "),s("div",{staticClass:"col-1 navBar__item",class:{active:t.show.home},on:{click:function(a){t.showNav("home")}}},[t._v("HOME")]),t._v(" "),s("div",{staticClass:"col-1 navBar__item",class:{active:t.show.orders},on:{click:function(a){t.showNav("orders")}}},[t._v("ORDERS")]),t._v(" "),s("div",{staticClass:"col-1 navBar__item",class:{active:t.show.products},on:{click:function(a){t.showNav("products")}}},[t._v("PRODUCTS")]),t._v(" "),s("div",{staticClass:"col-5"}),t._v(" "),s("div",{staticClass:"col-1  text-center navBar__Name"},[t._v("ADMIN")])])]),t._v(" "),s("transition-group",{attrs:{name:"fade",tag:"div"}},[t.show.home?s("div",{key:1,staticClass:"home"},[s("div",{staticClass:"body"},[s("div",{staticClass:"overview container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-9 col-sm-6 overview__title"},[t._v("OVERVIEW")]),t._v(" "),s("div",{staticClass:"col-md-3 col-sm-6 overview__dateRange"},[s("span",[t._v("2018/06/06 "),s("i",{staticClass:"fas fa-caret-right"}),t._v(" 2018/06/13")]),t._v(" "),s("span",{staticClass:"dropdown pL10"},[s("button",{staticClass:"btn btn-secondary dropdown-toggle",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                                    Weekly\n                                ")]),t._v(" "),s("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenuButton"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Weekly")]),t._v(" "),s("a",{staticClass:"dropdown-item disabled",attrs:{href:"#"}},[t._v("Monthly")]),t._v(" "),s("a",{staticClass:"dropdown-item disabled",attrs:{href:"#"}},[t._v("Yearly")])])])])])]),t._v(" "),s("div",{staticClass:"content text-center pB30"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12 col-md-4"},[s("div",{staticClass:"content__card "},[s("div",{staticClass:"content__card-title"},[s("i",{staticClass:"mR5 fas fa-hand-holding-usd"}),t._v("TOTAL REVENUE")]),t._v(" "),s("div",{staticClass:"mT10 content__card-fee green"},[t._v("\n                                    "+t._s(t.formatNumber(t.fakeOrder.revenue))+"\n                                ")])])]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[s("div",{staticClass:"content__card"},[s("div",{staticClass:"content__card-title"},[s("i",{staticClass:"mR5 fas fa-piggy-bank"}),t._v("TOTAL COST")]),t._v(" "),s("div",{staticClass:"mT10 content__card-fee red"},[t._v("\n                                    "+t._s(t.formatNumber(t.fakeOrder.cost))+"\n                                ")])])]),t._v(" "),s("div",{staticClass:"col-sm-12 col-md-4"},[s("div",{staticClass:"content__card"},[s("div",{staticClass:"content__card-title"},[s("i",{staticClass:"mR5 fas fa-money-bill"}),t._v("NET INCOME")]),t._v(" "),s("div",{staticClass:"mT10 content__card-fee blue"},[t._v("\n                                    "+t._s(t.formatNumber(t.fakeOrder.income))+"\n                                ")])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"content__card mT20"},[s("div",{staticClass:"content__card-title text-left pT20 pL30"},[t._v("Activity")]),t._v(" "),s("ve-line",{attrs:{data:t.customData,settings:t.chartSettings,colors:t.colors}})],1)])]),t._v(" "),s("div",{staticClass:"row mT20"},[s("div",{staticClass:"col-md-6 col-sm-12"},[s("div",{staticClass:"content__card text-left"},[s("div",{staticClass:"content__card-title "},[t._v("Transaction Website")]),t._v(" "),s("div",{staticClass:"transactionWebsite"},[s("div",{staticClass:"eachWebsite mT10"},[s("i",{staticClass:"website__icon fab fa-facebook-square fa-3x"}),t._v(" "),s("div",{staticClass:"website__url"},[t._v("Facebook.com")]),t._v(" "),s("div",{staticClass:"transaction__fee"},[t._v(t._s(t.formatNumber(t.fakeData.transaction.facebook.thisWeek)))]),t._v(" "),s("div",{staticClass:"transaction__fluctuation green"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[s("div",{staticClass:"detailContent text-center",attrs:{slot:"content"},slot:"content"},[t._v("\n                                                    INCREASE "),s("span",{staticClass:"detailNumber green fz-l"},[t._v(t._s(t.formatNumber(t.fakeData.transaction.facebook.thisWeek-t.fakeData.transaction.facebook.lastWeek)))]),t._v(" VIEWS\n                                                    "),s("br"),t._v(" "),s("span",{staticClass:"detailComment grey4-ita  pT10"},[t._v("\n                                                        last week: "+t._s(t.formatNumber(t.fakeData.transaction.facebook.lastWeek))+"\n                                                    ")])]),t._v(" "),s("el-button",{staticClass:"clearBotton clearBotton-green green nobgc"},[s("i",{staticClass:"fas fa-arrow-up"}),t._v("\n                                                    "+t._s(Math.round((t.fakeData.transaction.facebook.thisWeek-t.fakeData.transaction.facebook.lastWeek-t.fakeData.transaction.facebook.lastIncrease)/t.fakeData.transaction.facebook.lastIncrease*100)/1+"%")+"\n                                                ")])],1)],1)]),t._v(" "),s("div",{staticClass:"eachWebsite mT10"},[s("i",{staticClass:"website__icon fab fa-google fa-3x"}),t._v(" "),s("div",{staticClass:"website__url"},[t._v("Google.com")]),t._v(" "),s("div",{staticClass:"transaction__fee"},[t._v(t._s(t.formatNumber(t.fakeData.transaction.google.thisWeek)))]),t._v(" "),s("div",{staticClass:"transaction__fluctuation green"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[s("div",{staticClass:"detailContent text-center",attrs:{slot:"content"},slot:"content"},[t._v("\n                                                    INCREASE "),s("span",{staticClass:"detailNumber green fz-l"},[t._v(t._s(t.formatNumber(t.fakeData.transaction.google.thisWeek-t.fakeData.transaction.google.lastWeek)))]),t._v(" VIEWS\n                                                    "),s("br"),t._v(" "),s("span",{staticClass:"detailComment grey4-ita  pT10"},[t._v("\n                                                        last week: "+t._s(t.formatNumber(t.fakeData.transaction.google.lastWeek))+"\n                                                    ")])]),t._v(" "),s("el-button",{staticClass:"clearBotton clearBotton-green green nobgc"},[s("i",{staticClass:"fas fa-arrow-up"}),t._v("\n                                                    "+t._s(Math.round((t.fakeData.transaction.google.thisWeek-t.fakeData.transaction.google.lastWeek-t.fakeData.transaction.google.lastIncrease)/t.fakeData.transaction.google.lastIncrease*100)/1+"%")+"\n                                                    ")])],1)],1)]),t._v(" "),s("div",{staticClass:"eachWebsite mT10"},[s("i",{staticClass:"website__icon fab fa-amazon fa-3x"}),t._v(" "),s("div",{staticClass:"website__url"},[t._v("Amazon.com")]),t._v(" "),s("div",{staticClass:"transaction__fee"},[t._v(t._s(t.formatNumber(t.fakeData.transaction.amazon.thisWeek)))]),t._v(" "),s("div",{staticClass:"transaction__fluctuation red"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[s("div",{staticClass:"detailContent text-center",attrs:{slot:"content"},slot:"content"},[t._v("\n                                                    DECREASE "),s("span",{staticClass:"detailNumber red fz-l"},[t._v(t._s(t.formatNumber(-(t.fakeData.transaction.amazon.thisWeek-t.fakeData.transaction.amazon.lastWeek))))]),t._v(" VIEWS\n                                                    "),s("br"),t._v(" "),s("span",{staticClass:"detailComment grey4-ita  pT10"},[t._v("\n                                                        last week: "+t._s(t.formatNumber(t.fakeData.transaction.amazon.lastWeek))+"\n                                                    ")])]),t._v(" "),s("el-button",{staticClass:"clearBotton clearBotton-red red nobgc"},[s("i",{staticClass:"fas fa-arrow-down "}),t._v("\n                                                    "+t._s(Math.round((t.fakeData.transaction.amazon.lastWeek-t.fakeData.transaction.amazon.thisWeek)/t.fakeData.transaction.amazon.lastIncrease*100)/1+"%")+"\n                                                    ")])],1)],1)]),t._v(" "),s("div",{staticClass:"eachWebsite mT10"},[s("i",{staticClass:"website__icon fab fa-wordpress fa-3x"}),t._v(" "),s("div",{staticClass:"website__url"},[t._v("Wordpress.com")]),t._v(" "),s("div",{staticClass:"transaction__fee"},[t._v(t._s(t.formatNumber(t.fakeData.transaction.wordpress.thisWeek)))]),t._v(" "),s("div",{staticClass:"transaction__fluctuation red"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",placement:"top"}},[s("div",{staticClass:"detailContent text-center",attrs:{slot:"content"},slot:"content"},[t._v("\n                                                    DECREASE "),s("span",{staticClass:"detailNumber red fz-l"},[t._v(t._s(t.formatNumber(-(t.fakeData.transaction.wordpress.thisWeek-t.fakeData.transaction.wordpress.lastWeek))))]),t._v(" VIEWS\n                                                    "),s("br"),t._v(" "),s("span",{staticClass:"detailComment grey4-ita  pT10"},[t._v("\n                                                        last week: "+t._s(t.formatNumber(t.fakeData.transaction.wordpress.lastWeek))+"\n                                                    ")])]),t._v(" "),s("el-button",{staticClass:"clearBotton clearBotton-red red nobgc"},[s("i",{staticClass:"fas fa-arrow-down "}),t._v("\n                                                    "+t._s(Math.round((t.fakeData.transaction.wordpress.lastWeek-t.fakeData.transaction.wordpress.thisWeek)/t.fakeData.transaction.wordpress.lastIncrease*100)/1+"%")+" \n                                                ")])],1)],1)])])])]),t._v(" "),s("div",{staticClass:"col-md-6 col-sm-12"},[s("div",{staticClass:"content__card text-left"},[s("div",{staticClass:"content__card-title "},[t._v("Latest Orders")]),t._v(" "),s("div",{staticClass:"latestOrders"},t._l(t.latestOrders,function(a){return s("div",{staticClass:"latestOrders__Card mT5"},[s("div",{staticClass:"latestOrders__img"},[s("img",{staticClass:"w100",attrs:{src:a.img,alt:""}})]),t._v(" "),s("div",{staticClass:"mL5 latestOrders__content"},[s("div",{staticClass:"content-title"},[t._v(t._s(a.title))]),t._v(" "),s("div",{staticClass:"mT5 content-time"},[s("i",{staticClass:"fas fa-clock mR5"}),t._v(t._s(a.time))]),t._v(" "),s("div",{staticClass:"content-people"},[s("i",{staticClass:"fas fa-male mR10 mL5"}),t._v(t._s(a.name))])]),t._v(" "),s("div",{staticClass:"text-right latestOrders__fee"},[s("div",{staticClass:"content-feeTitle"},[t._v("Total")]),t._v(" "),s("div",{staticClass:"content-fee"},[t._v(t._s(t.formatNumber(a.fee)))])])])}))])])])])])]):t._e(),t._v(" "),t.show.orders?s("div",{key:2,staticClass:"orders"},[t._v("\n            之後補\n        ")]):t._e(),t._v(" "),t.show.products?s("div",{key:3,staticClass:"products"},[t._v("\n            之後補\n        ")]):t._e()])],1)},staticRenderFns:[]};var o=s("VU/8")(i,n,!1,function(t){s("aJnJ")},null,null).exports,c=s("/ocq");e.default.use(c.a);new c.a({routes:[{path:"/"}]});var r=s("vO7p"),l=s.n(r),v=(s("FfS/"),s("zL8q")),_=s.n(v);s("tvR6"),s("SSNS"),s("K3J8");e.default.use(l.a),e.default.use(_.a),e.default.config.productionTip=!1,e.default.use(s("TNmM")),new e.default({el:"#app",render:function(t){return t(o)},components:{App:o},template:"<App/>"})},SSNS:function(t,a){},aJnJ:function(t,a){},aXrP:function(t,a,s){t.exports=s.p+"static/img/img2.1ca654d.jpg"},tvR6:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.cbe0528dacdd5284fbe1.js.map