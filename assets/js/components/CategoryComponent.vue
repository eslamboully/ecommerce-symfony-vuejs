<template>
    <div>
        <!-- Category section -->
        <section class="category-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 order-2 order-lg-1" style="text-align: right">
                        <div class="filter-widget">
                            <h2 class="fw-title">اقسام مشابهه</h2>
                            <ul class="category-menu">
                                <li v-for="category in categories"><router-link tag="a" :to="'/category/'+category.id+'/'+category.name|replace">{{ category.name }}</router-link></li>
                            </ul>
                        </div>
                        <div class="filter-widget mb-0">
                            <h2 class="fw-title">فلترة ب</h2>
                            <div class="price-range-wrap">
                                <h4>السعر</h4>
<!--                                <div class="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min="" data-max="">-->
<!--                                    <div class="ui-slider-range ui-corner-all ui-widget-header" style="left: 0%; width: 100%;"></div>-->
<!--                                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 0%;">-->
<!--								    </span>-->
<!--                                    <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default" style="left: 100%;">-->
<!--								    </span>-->
<!--                                </div>-->
                                <div class="range-slider">
                                    <div class="price-input">
                                        <input type="number" v-on:keypress="getMinPrice()" min="0" id="max_amount" placeholder="اقصي">
                                        <input type="number" v-on:keypress="getMinPrice()" min="0" id="min_amount" placeholder="يبدأ من">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="filter-widget mb-0">
                            <h2 class="fw-title">الالوان الموجودة</h2>
                            <div class="fw-color-choose">
                                <div v-for="color in colors" class="cs-item">
                                    <input type="radio" name="cs" :id="color.name+'-color'">
                                    <label v-bind:style="{backgroundColor:color.color}" :for="color.name+'-color'">
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="filter-widget mb-0">
                            <h2 class="fw-title">الاحجام الموجودة</h2>
                            <div class="fw-size-choose">
                                <div class="sc-item">
                                    <input type="radio" name="sc" id="xs-size">
                                    <label for="xs-size">XS</label>
                                </div>
                                <div class="sc-item">
                                    <input type="radio" name="sc" id="s-size">
                                    <label for="s-size">S</label>
                                </div>
                                <div class="sc-item">
                                    <input type="radio" name="sc" id="m-size"  checked="">
                                    <label for="m-size">M</label>
                                </div>
                                <div class="sc-item">
                                    <input type="radio" name="sc" id="l-size">
                                    <label for="l-size">L</label>
                                </div>
                                <div class="sc-item">
                                    <input type="radio" name="sc" id="xl-size">
                                    <label for="xl-size">XL</label>
                                </div>
                                <div class="sc-item">
                                    <input type="radio" name="sc" id="xxl-size">
                                    <label for="xxl-size">XXL</label>
                                </div>
                            </div>
                        </div>
                        <div class="filter-widget">
                            <h2 class="fw-title">العلامة التجارية</h2>
                            <ul class="category-menu">
                                <li v-for="trademark in trademarks"><a href="#">{{ trademark.name }}<span>( {{ products.length }} )</span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
                        <h2 v-if="products.length == 0" style="text-align: right">للاسف لا توجد منتجات في هذا القسم حاليا</h2>
                        <div v-else>
                            <h4 style="text-align:right">{{ category.name }} <span style="font-size: 15px;font-weight: lighter">{{ products.length }} في الصفحة</span></h4>
                            <br/>
                            <div class="row">
                                <div v-for="product in products" class="col-lg-4 col-sm-6">
                                    <div class="product-item">
                                        <div class="pi-pic">
                                            <div v-if="(product.price_offer !== null && product.start_offer_at.date <= new Date().toISOString().slice(0,10)) && product.end_offer_at.date >= new Date().toISOString().slice(0,10)" class="tag-sale">عرض خاص</div>
                                            <router-link tag="a" :to="'/product/'+ product.id + '/' + product.title|replace" style="color: black">
                                                <img style="height: 300px" v-if="product.photo !== null" :src="'/uploads/products/'+product.photo" alt="">
                                                <img style="height: 300px" v-else :src="'/uploads/products/default.jpg'" alt="">
                                            </router-link>
                                            <div class="pi-links">
                                                <a href="#" v-if="user !== null" class="add-card" v-on:click.prevent="addToCart(product.id)"><i class="flaticon-bag"></i><span>اضف الي العربة</span></a>
                                                <a href="#" v-else data-toggle="modal" data-target="#exampleModal" class="add-card"><i class="flaticon-bag"></i><span>اضف الي العربة</span></a>
                                                <!-- strange -->
                                                <a href="#" v-if="user !== null" v-on:click.prevent="setLove(product.id)" class="wishlist-btn"><i :class="loveOrNot(product.id)"></i></a>
                                                <a href="#" v-else data-toggle="modal" data-target="#exampleModal" class="wishlist-btn"><i class="flaticon-heart-o"></i></a>
                                            </div>
                                        </div>
                                        <div class="pi-text">
                                            <h6 v-if="(product.price_offer !== null && product.start_offer_at.date <= new Date().toISOString().slice(0,10)) && product.end_offer_at.date >= new Date().toISOString().slice(0,10)">{{ product.price_offer }}</h6>
                                            <h6 v-else>{{ product.price }}</h6>
                                            <p><router-link tag="a" :to="'/product/'+ product.id + '/' + product.title|replace" style="color: black">{{ product.title }}</router-link></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center w-100 pt-3">
                                    <button class="site-btn sb-line sb-dark more_btn" @click.prevent="getMoreProduct()">عرض المزيد</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Category section end -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                category: [],
                products: [],
                products_old: [],
                categories: [],
                trademarks: [],
                colors: [],
                loves: [],
                user: null,
            }
        },
        mounted() {
            this.$Progress.start();
            this.getCategory();
            this.getUser();
            this.$Progress.finish();
        },
        watch:  {
            $route() {
                this.$Progress.start();
                this.getCategory();
                this.getUser();
                this.$Progress.finish();
            }
        },
        methods: {
            getCategory () {
                // category
                window.axios.post('/api/category/'+this.$route.params.id).then((response) => {
                    this.category = response.data.category[0];
                    this.products = response.data.products;
                    this.products_old = response.data.products;
                    this.categories = response.data.categories;
                    this.colors = response.data.colors;
                    this.trademarks = response.data.trademarks;
                    window.Fire.loadScript("/front/js/main.js");
                });
            },
            getMoreProduct() {
                // more products
                window.axios.post('/api/more/specific/products/'+this.category.id+'/'+this.products.length).then((response) => {
                    this.products = [].concat(this.products,response.data.data);
                    if (response.data.data.length == 0){
                        $('.more_btn').hide();
                    }
                });
            },
            getMinPrice() {
                let th = this;
                let min = document.getElementById('min_amount').value;
                let max = document.getElementById('max_amount').value;

                th.products = th.products_old;
                setTimeout(function () {
                    th.products.forEach(function (product,index) {
                        if (product.price >= min && product.price <= max) {
                            th.products.splice(0,index);
                        }

                    });
                },2000);

            },
            getUser () {
                window.axios.post('/profile').then((response) => {
                    this.user = response.data.user;
                    this.getLoves(this.user.id);
                });
            },
            setLove (id) {
                window.axios.post('/api/create/love/'+id).then((response) => {
                    this.love = response.data.love;
                    this.getLoves(this.user.id);
                });
            },
            getLoves (id) {
                window.axios.post('/api/loves/'+id).then((response) => {
                    this.loves = response.data.love;
                });
            },
            loveOrNot (id) {
                let product = this.loves.find(x => x.Product.id == id);
                if (product) {
                    return 'fa fa-heart';
                }
                return 'fa fa-heart-o';
            },
            addToCart (id) {
                window.axios.post('/api/cart/'+id).then( () => {
                    alert('تمت الاضافة الي العربة بنجاح');
                });
            },
        }
    }
</script>