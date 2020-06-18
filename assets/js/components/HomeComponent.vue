<template>
    <div>
        <!-- Hero section -->
        <section class="hero-section">
            <div class="hero-slider owl-carousel">
                <div class="hs-item set-bg" :style="getFirstImage()">
                    <div class="container">
                        <div class="row flex-row-reverse">
                            <div class="col-xl-6 col-lg-7 text-white">
                                <span>الاحدث موجود دائما</span>
                                <h2>جميع منتجات الطبخ</h2>
                                <p>تصفح جميع المنتجات الخاصة بأدوات الطهي من المنزل بداية من اواني الطعام حتي اطباق التقديم والاكواب … خصم يصل الي 50 في المائة … اسعارنا لا تقبل المنافسة</p>
                                <a href="#" class="site-btn sb-line">اكتشف المزيد</a>
                                <a href="#" class="site-btn sb-white">اضف الي العربة</a>
                            </div>
                        </div>
                        <div class="offer-card text-white">
                            <span>يبدأ من</span>
                            <h2>$20</h2>
                            <p>تسوق الان</p>
                        </div>
                    </div>
                </div>
                <div class="hs-item set-bg" :style="getSecondImage()">
                    <div class="container">
                        <div class="row flex-row-reverse">
                            <div class="col-xl-6 col-lg-7 text-white">
                                <span>اسعار خاصة</span>
                                <h2>ولا نقبل المنافسة</h2>
                                <p>تصفح جميع المنتجات الخاصة بأدوات الطهي من المنزل بداية من اواني الطعام حتي اطباق التقديم والاكواب … خصم يصل الي 50 في المائة … اسعارنا لا تقبل المنافسة</p>
                                <a href="#" class="site-btn sb-line">افضل منتاجتنا</a>
                                <a href="#" class="site-btn sb-white">اضف الي العربة</a>
                            </div>
                        </div>
                        <div class="offer-card text-white">
                            <span>تبدأ من</span>
                            <h2>$29</h2>
                            <p>تسوق الان</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="slide-num-holder" id="snh-1"></div>
            </div>
        </section>
        <!-- Hero section end -->
        <!-- Features section -->
        <section class="features-section">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-4 p-0 feature">
                        <div class="feature-inner">
                            <div class="feature-icon">
                                <img src="front/img/icons/1.png" alt="#">
                            </div>
                            <h2>وسائل دفع سهلة</h2>
                        </div>
                    </div>
                    <div class="col-md-4 p-0 feature">
                        <div class="feature-inner">
                            <div class="feature-icon">
                                <img src="front/img/icons/2.png" alt="#">
                            </div>
                            <h2>منتجات رائعة</h2>
                        </div>
                    </div>
                    <div class="col-md-4 p-0 feature">
                        <div class="feature-inner">
                            <div class="feature-icon">
                                <img src="front/img/icons/3.png" alt="#">
                            </div>
                            <h2>توصيل مجاني وسريع</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Features section end -->
        <!-- letest product section -->
        <section class="top-letest-product-section">
            <div class="container">
                <div class="section-title">
                    <h2>احدث المنتجات</h2>
                </div>
                <div class="product-slider owl-carousel">
                    <div class="product-item" v-for="latest_product in latest_products">
                        <div class="pi-pic">
                            <router-link tag="a" :to="'/product/'+ latest_product.id + '/' + latest_product.title|replace" style="color: black">
                                <img style="height: 300px" v-if="latest_product.photo !== null" :src="'/uploads/products/'+latest_product.photo" alt="">
                                <img style="height: 300px" v-else :src="'/uploads/products/default.jpg'" alt="">
                            </router-link>
                            <div class="pi-links">
<!--                                <a href="#" v-if="user !== null" class="add-card"><i class="flaticon-bag"></i><span>اضف الي العربة</span></a>-->
<!--                                <a href="#" v-else data-toggle="modal" data-target="#exampleModal" class="add-card"><i class="flaticon-bag"></i><span>اضف الي العربة</span></a>-->
                                <!-- strange -->
<!--                                <a href="#" v-if="user !== null" v-on:click.prevent="setLove(latest_product.id)" class="wishlist-btn"><i :class="loveOrNot(latest_product.id)"></i></a>-->
<!--                                <a href="#" v-else data-toggle="modal" data-target="#exampleModal" class="wishlist-btn"><i class="flaticon-heart-o"></i></a>-->
                            </div>
                        </div>
                        <div class="pi-text">
                            <h6 v-if="(latest_product.price_offer !== null && latest_product.start_offer_at.date <= new Date().toISOString().slice(0,10)) && latest_product.end_offer_at.date >= new Date().toISOString().slice(0,10)">{{ latest_product.price_offer }}</h6>
                            <h6 v-else>{{ latest_product.price }}</h6>
                            <p><router-link tag="a" :to="'/product/'+ latest_product.id + '/' + latest_product.title|replace" style="color: black">{{ latest_product.title }}</router-link></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product filter section -->
        <section class="product-filter-section">
            <div class="container">
                <div class="section-title">
                    <h2>تصفح افضل المنتجات واكثرها مبيعا</h2>
                </div>
<!--                <ul class="product-filter-menu">-->
<!--                    <li v-for="category in categories"><a href="#">{{ category.name }}</a></li>-->
<!--                </ul>-->
                <div class="row">
                    <div v-for="product in products" class="col-lg-3 col-sm-6">
                        <div class="product-item">
                            <div class="pi-pic">
                                <router-link tag="a" :to="'/product/'+ product.id + '/' + product.title|replace" style="color: black">
                                    <img style="height: 300px" v-if="product.photo !== null" :src="'/uploads/products/'+product.photo" alt="">
                                    <img style="height: 300px" v-else :src="'/uploads/products/default.jpg'" alt="">
                                </router-link>
                                <div class="pi-links">
                                    <a href="#" v-if="user !== null" class="add-card" v-on:click.prevent="addToCart(product.id)"><i class="flaticon-bag"></i><span>اضف الي العربة</span></a>
                                    <a href="#" v-else data-toggle="modal" data-target="#exampleModal" class="add-card"><i class="flaticon-bag"></i><span>اضف الي العربة</span></a>
                                    <!-- strange -->
                                    <a href="#" v-if="user !== null" v-on:click.prevent="setLove(product.id)" class="wishlist-btn"><i :class="loveOrNot(product.id)"></i></a>
                                    <a href="#" v-else data-toggle="modal" data-target="#exampleModal" class="wishlist-btn"><i class="fa fa-heart-o"></i></a>
                                </div>
                            </div>
                            <div class="pi-text">
                                <h6 v-if="(product.price_offer !== null && product.start_offer_at.date <= new Date().toISOString().slice(0,10)) && product.end_offer_at.date >= new Date().toISOString().slice(0,10)">{{ product.price_offer }}</h6>
                                <h6 v-else>{{ product.price }}</h6>
                                <p><router-link tag="a" :to="'/product/'+ product.id + '/' + product.title|replace" style="color: black">{{ product.title }}</router-link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-center pt-5">
                    <button class="site-btn sb-line sb-dark more_btn" @click.prevent="getMoreProduct()">عرض المزيد</button>
                </div>
            </div>
        </section>
        <!-- Product filter section end -->
        <!-- Banner section -->
        <section class="banner-section">
            <div class="container">
                <div class="banner set-bg" :style="{backgroundImage: '/front/img/banner-bg.jpg'}">
                    <div class="tag-new">جديد</div>
                    <span>عروض جديدة</span>
                    <h2>اواني المطبخ</h2>
                    <a href="#" class="site-btn">تسوق الان</a>
                </div>
            </div>
        </section>
        <!-- Banner section end  -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                latest_products: [],
                products: [],
                loves: [],
                user: null,
            }
        },
        mounted() {
            this.$Progress.finish();
        },
        beforeMount () {
            this.$Progress.start();
            this.getLatestProduct();
            this.getProducts();
            this.getUser();
        },
        methods: {
            getLatestProduct () {
                // latest products
                window.axios.post('/api/latest/products').then((response) => {
                    this.latest_products = response.data.data;
                    var vm = this;
                    window.Fire.nextTick(function(){
                        $('.hero-slider').owlCarousel({
                            loop: true,
                            margin: 0,
                            nav: true,
                            items: 1,
                            dots: true,
                            animateOut: 'fadeOut',
                            animateIn: 'fadeIn',
                            navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
                            smartSpeed: 1200,
                            autoHeight: false,
                            autoplay: true,
                            onInitialized: function() {
                                var a = this.items().length;
                                $("#snh-1").html("<span>1</span><span>" + a + "</span>");
                            }
                        });
                        $('.product-slider').owlCarousel({
                            loop: true,
                            nav: true,
                            dots: false,
                            margin : 30,
                            autoplay: true,
                            navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
                            responsive : {
                                0 : {
                                    items: 1,
                                },
                                480 : {
                                    items: 2,
                                },
                                768 : {
                                    items: 3,
                                },
                                1200 : {
                                    items: 4,
                                }
                            }
                        });
                        $('.main-menu').slicknav({
                            prependTo:'.main-navbar .container',
                            closedSymbol: '<i class="flaticon-right-arrow"></i>',
                            openedSymbol: '<i class="flaticon-down-arrow"></i>',
                            label: 'القائمة',
                        });
                    }.bind(vm));
                });
            },
            getProducts () {
                // products
                window.axios.post('/api/products').then((response) => {
                    this.products = response.data.data;
                });
            },
            getMoreProduct () {
                // more products
                window.axios.post('/api/more/products/'+this.products.length).then((response) => {
                    this.products = [].concat(this.products,response.data.data);
                    if (response.data.data.length == 0){
                        $('.more_btn').hide();
                    }
                });
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
            getFirstImage(){
                return 'text-align:right;background-image: url("/front/img/bg-4.jpg")';
            },
            getSecondImage(){
                return 'text-align:right;background-image: url("/front/img/bg-6.jpg")';
            },
            addToCart (id) {
                window.axios.post('/api/cart/'+id).then( () => {
                    alert('تمت الاضافة الي العربة بنجاح');
                });
            },
        }
    }
</script>