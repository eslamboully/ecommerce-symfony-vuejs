<template>
        <section class="cart-section spad">
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
                                        <th class="quy-th" >الكمية</th>
                                        <th class="size-th">الحجم</th>
                                        <th class="total-th">السعر</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="product in cart.Product">
                                            <td class="product-col">
                                                 <div class="pc-title" style="padding-right: 30px">
                                                    <h4>{{ product.title }}</h4>
                                                    <p>${{ product.price }}</p>
                                                </div>
                                            </td>
                                            <td class="quy-col">
                                                <div class="quantity">
                                                    <div class="pro-qty">
                                                        <input type="text" value="1">
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="size-col"><h4>Size M</h4></td>
                                            <td class="total-col"><h4>$45.90</h4></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="total-cost">
                                <h6>الاجمالي <span>$99.90</span></h6>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 card-right">
                        <form class="promo-code-form">
                            <input type="text" placeholder="ادخل كود خصم">
                            <button>تأكيد</button>
                        </form>
                        <a href="" class="site-btn">تابع عملية الدفع</a>
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
        }
    }
</script>