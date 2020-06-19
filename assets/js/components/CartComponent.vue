<template>
        <section v-if="cart !== null" class="cart-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="cart-table" style="text-align: right">
                            <h3>حقيبتي</h3>
                            <div class="cart-table-warp">
                                <table>
                                    <thead>
                                    <tr>
                                        <th class="product-th" style="text-align: right">المنتج</th>
                                        <th class="total-th">السعر بدون عروض ( سيتم احتساب سعر العرض اذا كان موجود )</th>
                                        <th class="total-th">الغاء الطلب</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="product in cart.Product">
                                            <td class="product-col">
                                                 <div class="pc-title" style="padding-right: 30px">
                                                    <h4>{{ product.title }}</h4>
                                                     <p v-if="(product.price_offer !== null && product.start_offer_at.date <= new Date().toISOString().slice(0,10)) && product.end_offer_at.date >= new Date().toISOString().slice(0,10)">{{ product.price_offer }}</p>
                                                     <p v-else>{{ product.price }}</p>
                                                 </div>
                                            </td>
                                            <td class="total-col">
                                                <h4 v-if="(product.price_offer !== null && product.start_offer_at.date <= new Date().toISOString().slice(0,10)) && product.end_offer_at.date >= new Date().toISOString().slice(0,10)">{{ product.price_offer }}</h4>
                                                <h4 v-else>{{ product.price }}</h4>
                                            </td>
                                            <td class="total-col">
                                                <h4><a href="#" v-on:click.prevent="removeProduct(product.id)" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i></a></h4>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="total-cost">
                                <h6><span> للاسف لا يوجد دفع الكتروني حتي الان</span></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 card-right">
                        <router-link to="/orders" tag="a" class="btn btn-dark btn-xl" style="width: 100%;padding: 10px;border-radius: 23px;margin: 1px">طلباتي السابقة</router-link>
                        <div class="form-group" style="text-align: right">
                            <label for="">تفاصيل الطلب</label>
                            <textarea name="details" id="details" rows="8" class="form-control" placeholder="يكتب هنا كمية معينة … مثال : اريد 20 قطعة من المنتج ( حلة جيرانيت ) الموجود في حقيبتي والمنتج ( طقم كاسات ) 3 قطع وباقي المنتجات قطعة واحدة"></textarea>
                        </div>
                        <form class="promo-code-form">
                            <input type="text" placeholder="ادخل كود خصم">
                            <button type="button">تأكيد</button>
                        </form>
                        <a href="" v-if="cart.Product.length > 0" class="site-btn" v-on:click.prevent="sendOrder()">ارسل الطلب وادفع عند الاستلام</a>
                        <a href="#" v-else class="site-btn" onclick="alert('لا يوجد منتجات للطلب')">ارسل الطلب وادفع عند الاستلام</a>
                        <router-link tag="a" to="/" class="site-btn sb-dark">اكمل التسوق</router-link>
                    </div>
                </div>
            </div>
        </section>
        <section v-else class="cart-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="cart-table" style="text-align: right">
                            <h3>حقيبتي</h3>
                            <div class="cart-table-warp">
                                <table>
                                    <thead>
                                    <tr>
                                        <th class="product-th" style="text-align: right">المنتج</th>
                                        <th class="total-th">السعر بدون عروض ( سيتم احتساب سعر العرض اذا كان موجود )</th>
                                        <th class="total-th">الغاء الطلب</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr></tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="total-cost">
                                <h6><span> للاسف لا يوجد دفع الكتروني حتي الان</span></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 card-right">
                        <div class="form-group" style="text-align: right">
                            <label for="">تفاصيل الطلب</label>
                            <textarea name="details" rows="8" class="form-control" placeholder="يكتب هنا كمية معينة … مثال : اريد 20 قطعة من المنتج ( حلة جيرانيت ) الموجود في حقيبتي والمنتج ( طقم كاسات ) 3 قطع وباقي المنتجات قطعة واحدة"></textarea>
                        </div>
                        <form class="promo-code-form">
                            <input type="text" placeholder="ادخل كود خصم">
                            <button type="button">تأكيد</button>
                        </form>
                        <a href="#" class="site-btn" onclick="alert('لا يوجد منتجات للطلب')">ارسل الطلب وادفع عند الاستلام</a>
                        <router-link tag="a" to="/" class="site-btn sb-dark">اكمل التسوق</router-link>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
    export default {
        data() {
            return {
                user: null,
                cart: null,
            }
        },
        mounted() {
            this.$Progress.start();
            this.getCart();
            this.$Progress.finish();
        },
        watch:  {
            $route() {
                this.$Progress.start();
                this.getCart();
                this.$Progress.finish();
            }
        },
        methods: {
            getCart () {
                window.axios.post('/api/own/cart').then((response) => {
                    this.cart = response.data.cart;
                });
            },
            sendOrder () {
                window.axios.post('/api/create/order/'+this.cart.id,{
                    products : this.cart.Product,
                    details: document.getElementById('details').value
                }).then(() => {
                    window.location.href = '/';
                });
            },
            removeProduct (productId) {
                let th = this;

                window.axios.post('/api/delete/product/'+this.cart.id+'/'+productId).then( () => {
                    let product = th.cart.Product.find(x => x.id == productId);
                    let index = th.cart.Product.indexOf(product);
                    th.cart.Product.splice(index,1);
                    // window.location.reload();
                });
            },
        }
    }
</script>