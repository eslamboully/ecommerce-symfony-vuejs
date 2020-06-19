<template>
        <section class="cart-section spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cart-table" style="text-align: right">
                            <h3>الطلبات</h3> يمكنك التواصل معنا لالغاء طلب … (معلومات التواصل موجودة في اسفل الموقع)
                            <div class="cart-table-warp">
                                <table>
                                    <thead>
                                    <tr>
                                        <th class="product-th" style="text-align: right">رقم الطلب</th>
                                        <th class="total-th" style="text-align: right">السعر الكلي</th>
                                        <th class="total-th" style="text-align: right">الحالة</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="order in orders">
                                        <td class="product-th" style="text-align: right">{{ order.id }}</td>
                                        <td class="total-th">{{ order.total_price }} جنية مصري</td>
                                        <td class="total-th">
                                            <p v-if="order.status == 1">{{ 'جاري التجهيز' }}</p>
                                            <p v-if="order.status == 2">{{ 'تم تجهيز الطلب' }}</p>
                                            <p v-if="order.status == 3">{{ 'تم الاستلام' }}</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
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
                orders: [],
            }
        },
        mounted() {
            this.$Progress.start();
            this.getOrders();
            this.$Progress.finish();
        },
        watch:  {
            $route() {
                this.$Progress.start();
                this.getOrders();
                this.$Progress.finish();
            }
        },
        methods: {
            getOrders() {
                window.axios.post('/api/orders').then((response) => {
                    this.orders = response.data.data;
                });
            }
        }
    }
</script>