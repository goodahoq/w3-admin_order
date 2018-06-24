<template>
    <div id="app">
        <div class="navBar text-center">
            <div class="row">
                <div class="col-3 navBar__title">ShopTime</div>
                <div class="col-1 navBar__item" :class="{active : show.home}" 
                    @click="showNav('home')">HOME</div>
                <div class="col-1 navBar__item" :class="{active : show.orders}" 
                    @click="showNav('orders')">ORDERS</div>
                <div class="col-1 navBar__item" :class="{active : show.products}" 
                    @click="showNav('products')">PRODUCTS</div>
                <div class="col-5"></div>
                <div class="col-1  text-center navBar__Name">ADMIN</div>
            </div>
        </div>
        <transition-group name="fade" tag="div">
            <div v-if="show.home" class="home" :key="1">
                <div class="body">
                    <div class="overview container">
                        <div class="row">
                            <div class="col-md-9 col-sm-6 overview__title">OVERVIEW</div>
                            <div class="col-md-3 col-sm-6 overview__dateRange">
                                <span>2018/06/06 <i class="fas fa-caret-right"></i> 2018/06/13</span>
                                <span class="dropdown pL10">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Weekly
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Weekly</a>
                                        <a class="dropdown-item disabled" href="#">Monthly</a>
                                        <a class="dropdown-item disabled" href="#">Yearly</a>
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="content text-center pB30">
                        <div class="row">
                            <div class="col-sm-12 col-md-4">
                                <div class="content__card ">
                                    <div class="content__card-title"><i class="mR5 fas fa-hand-holding-usd"></i>TOTAL REVENUE</div>
                                    <div class="mT10 content__card-fee green">
                                        {{formatNumber(fakeOrder.revenue)}}
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <div class="content__card">
                                    <div class="content__card-title"><i class="mR5 fas fa-piggy-bank"></i>TOTAL COST</div>
                                    <div class="mT10 content__card-fee red">
                                        {{formatNumber(fakeOrder.cost)}}
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <div class="content__card">
                                    <div class="content__card-title"><i class="mR5 fas fa-money-bill"></i>NET INCOME</div>
                                    <div class="mT10 content__card-fee blue">
                                        {{formatNumber(fakeOrder.income)}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="content__card mT20">
                                    <div class="content__card-title text-left pT20 pL30">Activity</div>
                                    <ve-line :data="customData"
                                            :settings="chartSettings"
                                            :colors="colors">
                                    </ve-line>
                                </div>
                            </div>
                        </div>
                        <div class="row mT20">
                            <div class="col-md-6 col-sm-12">
                                <div class="content__card text-left">
                                    <div class="content__card-title ">Transaction Website</div>
                                    <div class="transactionWebsite">
                                        <div class="eachWebsite mT10">
                                            <i class="website__icon fab fa-facebook-square fa-3x"></i>
                                            <div class="website__url">Facebook.com</div>
                                            <div class="transaction__fee">{{formatNumber(fakeData.transaction.facebook.thisWeek)}}</div>
                                            <div class="transaction__fluctuation green">
                                                <el-tooltip class="item" effect="dark" placement="top">
                                                    <div slot="content" class="detailContent text-center">
                                                        INCREASE <span class="detailNumber green fz-l">{{formatNumber(fakeData.transaction.facebook.thisWeek -
                                                        fakeData.transaction.facebook.lastWeek)}}</span> VIEWS
                                                        <br>
                                                        <span class="detailComment grey4-ita  pT10">
                                                            last week: {{formatNumber(fakeData.transaction.facebook.lastWeek)}}
                                                        </span>
                                                    </div>
                                                    <el-button class="clearBotton clearBotton-green green nobgc"> 
                                                        <i class="fas fa-arrow-up"></i>
                                                        {{ Math.round(((fakeData.transaction.facebook.thisWeek -
                                                        fakeData.transaction.facebook.lastWeek-fakeData.transaction.facebook.lastIncrease)/fakeData.transaction.facebook.lastIncrease)*100)/1 + '%'}}
                                                    </el-button>
                                                </el-tooltip>
                                                
                                            </div>
                                        </div>
                                        <div class="eachWebsite mT10">
                                            <i class="website__icon fab fa-google fa-3x"></i>
                                            <div class="website__url">Google.com</div>
                                            <div class="transaction__fee">{{formatNumber(fakeData.transaction.google.thisWeek)}}</div>
                                            <div class="transaction__fluctuation green">
                                                <el-tooltip class="item" effect="dark" placement="top">
                                                    <div slot="content" class="detailContent text-center">
                                                        INCREASE <span class="detailNumber green fz-l">{{formatNumber(fakeData.transaction.google.thisWeek -
                                                        fakeData.transaction.google.lastWeek)}}</span> VIEWS
                                                        <br>
                                                        <span class="detailComment grey4-ita  pT10">
                                                            last week: {{formatNumber(fakeData.transaction.google.lastWeek)}}
                                                        </span>
                                                    </div>
                                                    <el-button class="clearBotton clearBotton-green green nobgc"> 
                                                        <i class="fas fa-arrow-up"></i>
                                                        {{ Math.round(((fakeData.transaction.google.thisWeek -
                                                        fakeData.transaction.google.lastWeek-fakeData.transaction.google.lastIncrease)/fakeData.transaction.google.lastIncrease)*100)/1 + '%'}}
                                                        </el-button>
                                                </el-tooltip>
                                            </div>
                                        </div>
                                        <div class="eachWebsite mT10">
                                            <i class="website__icon fab fa-amazon fa-3x"></i>
                                            <div class="website__url">Amazon.com</div>
                                            <div class="transaction__fee">{{formatNumber(fakeData.transaction.amazon.thisWeek)}}</div>
                                            <div class="transaction__fluctuation red">
                                                <el-tooltip class="item" effect="dark" placement="top">
                                                    <div slot="content" class="detailContent text-center">
                                                        DECREASE <span class="detailNumber red fz-l">{{formatNumber(-(fakeData.transaction.amazon.thisWeek -
                                                        fakeData.transaction.amazon.lastWeek))}}</span> VIEWS
                                                        <br>
                                                        <span class="detailComment grey4-ita  pT10">
                                                            last week: {{formatNumber(fakeData.transaction.amazon.lastWeek)}}
                                                        </span>
                                                    </div>
                                                    <el-button class="clearBotton clearBotton-red red nobgc">
                                                        <i class="fas fa-arrow-down "></i>
                                                        {{ Math.round(((fakeData.transaction.amazon.lastWeek-fakeData.transaction.amazon.thisWeek)/fakeData.transaction.amazon.lastIncrease)*100)/1 + '%'}}
                                                        </el-button>
                                                </el-tooltip>
                                            </div>
                                        </div>
                                        <div class="eachWebsite mT10">
                                            <i class="website__icon fab fa-wordpress fa-3x"></i>
                                            <div class="website__url">Wordpress.com</div>
                                            <div class="transaction__fee">{{formatNumber(fakeData.transaction.wordpress.thisWeek)}}</div>
                                            <div class="transaction__fluctuation red">
                                                <el-tooltip class="item" effect="dark" placement="top">
                                                    <div slot="content" class="detailContent text-center">
                                                        DECREASE <span class="detailNumber red fz-l">{{formatNumber(-(fakeData.transaction.wordpress.thisWeek -
                                                        fakeData.transaction.wordpress.lastWeek))}}</span> VIEWS
                                                        <br>
                                                        <span class="detailComment grey4-ita  pT10">
                                                            last week: {{formatNumber(fakeData.transaction.wordpress.lastWeek)}}
                                                        </span>
                                                    </div>
                                                    <el-button class="clearBotton clearBotton-red red nobgc">
                                                        <i class="fas fa-arrow-down "></i>
                                                        {{ Math.round(((fakeData.transaction.wordpress.lastWeek-fakeData.transaction.wordpress.thisWeek)/fakeData.transaction.wordpress.lastIncrease)*100)/1 + '%'}} 
                                                    </el-button>
                                                </el-tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <div class="content__card text-left">
                                    <div class="content__card-title ">Latest Orders</div>
                                    <div class="latestOrders">
                                        <div v-for="order in latestOrders" 
                                            class="latestOrders__Card mT5">
                                            <div class="latestOrders__img">
                                                <img class="w100" :src="order.img" alt="">
                                            </div>
                                            <div class="mL5 latestOrders__content">
                                                <div class="content-title">{{order.title}}</div>
                                                <div class="mT5 content-time"><i class="fas fa-clock mR5"></i>{{order.time}}</div>
                                                <div class="content-people"><i class="fas fa-male mR10 mL5"></i>{{order.name}}</div>
                                            </div>
                                            <div class="text-right latestOrders__fee">
                                                <div class="content-feeTitle">Total</div>
                                                <div class="content-fee">{{formatNumber(order.fee)}}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="show.orders" class="orders" :key="2">
                之後補
            </div>
            <div v-if="show.products" class="products" :key="3">
                之後補
            </div>
        </transition-group>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        this.colors = ['#7ED321', '#D0021B', '#4A90E2'];
        this.chartSettings = {
            labelMap: {
                'revenue': '淨額',
                'cost': '支出',
                'income': '收入'
            },
        }
        return {
            latestOrders: [
                {
                    title: 'Yellow T-shirt',
                    name: this.$faker().name.findName(),
                    time: "2018/06/13 13:42",
                    fee: 3200,
                    img: require('./assets/img1.jpg')
                },
                {
                    title: 'Darkblue T-shirt',
                    name: this.$faker().name.findName(),
                    time: "2018/06/13 11:23",
                    fee: 2800,
                    img: require('./assets/img2.jpg')
                },
                {
                    title: 'Brown T-shirt',
                    name: this.$faker().name.findName(),
                    time: "2018/06/13 08:35",
                    fee: 3300,
                    img: require('./assets/img3.jpg')
                },
            ],
            fakeData: {
                transaction: {
                    facebook: {
                        lastWeek: 42937, thisWeek: 55836, lastIncrease: 9876
                    },
                    google: {
                        lastWeek: 22477, thisWeek: 29837, lastIncrease: 5923
                    },
                    amazon: {
                        lastWeek: 4493, thisWeek: 4272, lastIncrease: 987
                    },
                    wordpress: {
                        lastWeek: 2739, thisWeek: 2277, lastIncrease: 976
                    },
                },
                revenue: [9212, 6754, 11245, 9453, 4353, 1257, 5976, 7545],
                cost: [1242, 2754, 1534, 2473, 1986, 2764, 1472, 2451],
            },

            show: {
                home: true,
                orders: false,
                products: false,
            }
        }
    },
    computed: {
        fakeOrder() {
            let sum1 = 0;
            let sum2 = 0;
            this.fakeData.revenue.forEach(el => {
                sum1 += el;
            });
            this.fakeData.cost.forEach(el => {
                sum2 += el;
            });
            return {
                revenue: sum1,
                cost: sum2,
                income: sum1 - sum2,
            };;
        },
        customData() {
            let columns = ['日期', 'revenue', 'cost', 'income'];
            let rows = [];
            for (let i = 0; i < 7; i++) {
                rows.push({
                    '日期': `${i + 6} JUN`,
                    'revenue': this.fakeData.revenue[i],
                    'cost': this.fakeData.cost[i],
                    'income': this.fakeData.revenue[i] - this.fakeData.cost[i],
                });
            }
            return {
                columns, rows
            };
        },
    },
    methods: {
        showNav(el) {
            this.show.home = false;
            this.show.orders = false;
            this.show.products = false;
            this.show[el] = true;
        },
        formatNumber(str, glue) {
            // 如果傳入必需為數字型參數，不然就噴 isNaN 回去
            if (isNaN(str)) {
                return NaN;
            }
            // 決定三個位數的分隔符號
            var glue = (typeof glue == 'string') ? glue : ',';
            var digits = str.toString().split('.'); // 先分左邊跟小數點

            var integerDigits = digits[0].split(""); // 獎整數的部分切割成陣列
            var threeDigits = []; // 用來存放3個位數的陣列

            // 當數字足夠，從後面取出三個位數，轉成字串塞回 threeDigits
            while (integerDigits.length > 3) {
                threeDigits.unshift(integerDigits.splice(integerDigits.length - 3, 3).join(""));
            }

            threeDigits.unshift(integerDigits.join(""));
            digits[0] = threeDigits.join(glue);

            return digits.join(".");
        }
    },
}
</script>

<style lang="scss">
@import "./style/main";
</style>
