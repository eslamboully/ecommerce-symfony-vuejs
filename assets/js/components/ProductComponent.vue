<template>
    <div>
        <!-- product section -->
        <section class="product-section">
            <div class="container">
                <div class="back-link">
                    <router-link tag="a" :to="'/category/'+this.product.Department.id+'/'+this.product.Department.name"> &lt;&lt; رجوع الي القسم </router-link>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <div class="product-pic-zoom">
                            <img class="product-big-img" :src="'/uploads/products/'+this.product.photo" style="width: 587px;height: 700px" alt="">
                        </div>
                        <div class="product-thumbs" tabindex="1" style="overflow: hidden; outline: none;">
<!--                            <div class="product-thumbs-track">-->
<!--                                <div class="pt active" data-imgbigurl="/img/single-product/1.jpg"><img src="/front/img/single-product/thumb-1.jpg" alt=""></div>-->
<!--                                <div class="pt" data-imgbigurl="/img/single-product/2.jpg"><img src="/front/img/single-product/thumb-2.jpg" alt=""></div>-->
<!--                                <div class="pt" data-imgbigurl="/img/single-product/3.jpg"><img src="/front/img/single-product/thumb-3.jpg" alt=""></div>-->
<!--                                <div class="pt" data-imgbigurl="/img/single-product/4.jpg"><img src="/front/img/single-product/thumb-4.jpg" alt=""></div>-->
<!--                            </div>-->
                        </div>
                    </div>
                    <div class="col-lg-6 product-details" style="text-align: right;">
                        <h2 class="p-title">{{ this.product.title }}</h2>
                        <h3 v-if="(this.product.price_offer !== null && this.product.start_offer_at.date <= new Date().toISOString().slice(0,10)) && this.product.end_offer_at.date >= new Date().toISOString().slice(0,10)">{{ this.product.price_offer }}</h3>
                        <h3 v-else>{{ this.product.price }}</h3>
                        <h4 class="p-stock">
                            متاح :
                            <span v-if="this.product.stock > 0">نعم</span>
                            <span v-else>لا</span>
                        </h4>
                        <div class="p-rating">
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o"></i>
                            <i class="fa fa-star-o fa-fade"></i>
                        </div>
                        <div class="p-review">
<!--                            <a href="">3 التقييمات</a> |<a href="">المزيد</a>-->
                        </div>
                        <div class="fw-size-choose">
<!--                            <p>الاحجام</p>-->
                            <div v-for="size in this.product.Size" class="sc-item">
                                <input type="radio" name="sc" id="xs-size" checked>
                                <label for="xs-size">{{ size.name }}</label>
                            </div>
                        </div>
                        <div class="quantity">
                            <p>الكمية</p>
                            <div class="pro-qty"><input type="text" min="1" :max="this.product.stock" value="1"></div>
                        </div>
                        <a href="#" v-if="user !== null" class="site-btn" v-on:click.prevent="addToCart(product.id)">اضف الي العربة</a>
                        <a href="#" v-else class="site-btn" data-toggle="modal" data-target="#exampleModal">اضف الي العربة</a>

                        <div id="accordion" class="accordion-area">
                            <div class="panel">
                                <div class="panel-header" id="headingOne">
                                    <button style="text-align: right" class="panel-link active" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">معلومات المنتج</button>
                                </div>
                                <div id="collapse1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                    <div class="panel-body" v-html="this.product.content"></div>
                                    <br/>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="panel-header" id="headingTwo">
                                    <button class="panel-link" data-toggle="collapse" data-target="#collapse2" aria-expanded="false" aria-controls="collapse2">طرق الدفع </button>
                                </div>
                                <div id="collapse2" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                    <div class="panel-body">
                                        <img src="/front/img/cards.png" alt="">
                                        <p>للأسف غير متاح حاليا الدفع الالكتروني</p>
                                        <p>زورونا في معرضنا</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="social-sharing">
                            <a href=""><i class="fa fa-instagram"></i></a>
                            <a href=""><i class="fa fa-pinterest"></i></a>
                            <a href=""><i class="fa fa-facebook"></i></a>
                            <a href=""><i class="fa fa-twitter"></i></a>
                            <a href=""><i class="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- product section end -->


        <!-- RELATED PRODUCTS section -->
        <section class="top-letest-product-section">
            <div class="container">
                <div class="section-title">
                    <h2>المنتجات المرتبطة</h2>
                </div>
                <div class="product-slider owl-carousel">
                    <div class="product-item" v-for="latest_product in latest_products">
                        <div class="pi-pic">
                            <a :href="'/product/'+ latest_product.id + '/' + latest_product.title|replace" style="color: black">
                                <img style="height: 300px" v-if="latest_product.photo !== null" :src="'/uploads/products/'+latest_product.photo" alt="">
                                <img style="height: 300px" v-else :src="'/uploads/products/default.jpg'" alt="">
                            </a>
                            <div class="pi-links">
                                <a href="#" v-if="user !== null" class="add-card" v-on:click.prevent="addToCart(latest_product.id)"><i class="flaticon-bag"></i><span>اضف الي العربة</span></a>
                                <a href="#" v-else data-toggle="modal" data-target="#exampleModal" class="add-card"><i class="flaticon-bag"></i><span>اضف الي العربة</span></a>
                                <!-- strange -->
                                <a href="#" v-if="user !== null" v-on:click.prevent="setLove(latest_product.id)" class="wishlist-btn"><i :class="loveOrNot(latest_product.id)"></i></a>
                                <a href="#" v-else data-toggle="modal" data-target="#exampleModal" class="wishlist-btn"><i class="flaticon-heart-o"></i></a>
                            </div>
                        </div>
                        <div class="pi-text">
                            <h6 v-if="(latest_product.price_offer !== null && latest_product.start_offer_at.date <= new Date().toISOString().slice(0,10)) && latest_product.end_offer_at.date >= new Date().toISOString().slice(0,10)">{{ latest_product.price_offer }}</h6>
                            <h6 v-else>{{ latest_product.price }}</h6>
                            <p><a :href="'/product/'+ latest_product.id + '/' + latest_product.title|replace" style="color: black">{{ latest_product.title }}</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- RELATED PRODUCTS section end -->

    </div>
</template>

<script>
    export default {
        data() {
            return {
                product: [],
                latest_products: [],
                user: null,
                loves: [],
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
                // product
                window.axios.post('/api/product/'+this.$route.params.id).then((response) => {
                    this.product = response.data.product[0];
                    this.latest_products = response.data.products;
                    var vm = this;
                    window.Fire.loadScript("/front/js/main.js").then(() => {
                        window.Fire.nextTick(function(){
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
                            $('.product-pic-zoom').zoom();
                        }.bind(vm));
                    });
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
            addToCart (id) {
                window.axios.post('/api/cart/'+id).then( () => {
                    alert('تمت الاضافة الي العربة بنجاح');
                });
            },
        }
    }
</script>