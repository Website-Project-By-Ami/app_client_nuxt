<template>
    <div class="products">
        <div class="judul">Katalog Produk</div>
        <div class="setting">
            <div>
                <p>Showing {{ StartLimit+1 }} - {{ items.length < EndLimit+1 ? items.length : EndLimit+1 }} of {{ items.length }} results</p>
            </div>
            <div class="box-filter">
                <div class="filter"><p>Filter</p> <img src="assets/products/Logo_Filter.svg" alt="" /></div>
                <p class="sortby">Sort by Price▾</p>
                <img class="search" src="assets/products/Logo_Search.svg" alt="" />
            </div>
        </div>
        <div class="content">
            <BoxProduct v-for="(item, index) in items" v-show="index >= StartLimit && index <= EndLimit" :counter=index+1 :img="item.img"/>
        </div>
        <div class="numberPage">
            <button class="button"><img src="assets/products/Prev2.svg" alt="" /></button>
            <button class="button" @click="PrevPage()"><img src="assets/products/Prev1.svg" alt="" /></button>
            <button class="button" 
                v-for="n in Math.ceil(items.length/12)" 
                @click="SelectPage(n)"
                :class="{ 'current':  n == CurrentPage }" 
                v-show="n >= PageShowStart && n <= PageShowEnd">{{ n }}</button>
            <button class="button" v-show="PageShowEnd+1 < Math.ceil(items.length/12)" disabled>...</button>
            <button class="button" @click="SelectPage(Math.ceil(items.length/12))" :class="{ 'current':  CurrentPage == Math.ceil(items.length/12) }">{{ Math.ceil(items.length/12) }}</button>
            <button class="button" @click="NextPage()"><img src="assets/products/Next1.svg" alt="" /></button>
            <button class="button"><img src="assets/products/Next2.svg" alt="" /></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        const StartLimit = ref(0);
        const EndLimit = ref(11);
        const PageShowStart = ref(1);
        const PageShowEnd = ref(3);
        const CurrentPage = ref(1);
        const items = ref([
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
            { img: '/assets/products/Product_1.svg' },
        ]);

        function NextPage() {
            // console.log("SEBELUM");
            // console.log("StartLimit = ", StartLimit.value);
            // console.log("EndLimit = ", EndLimit.value);
            // console.log("PageShowStart = ", PageShowStart.value);
            // console.log("PageShowEnd = ", PageShowEnd.value);
            // console.log("CurrentPage = ", CurrentPage.value);
        
            if(EndLimit.value+1 < this.items.length) {
                StartLimit.value = StartLimit.value+12;
                EndLimit.value = EndLimit.value+12;
                CurrentPage.value = CurrentPage.value+1;
            }
            if(PageShowEnd.value+1 != Math.ceil(this.items.length/12)) {
                PageShowStart.value = PageShowStart.value+1;
                PageShowEnd.value = PageShowEnd.value+1;
            }

            // console.log("SESUDAH");
            // console.log("StartLimit = ", StartLimit.value);
            // console.log("EndLimit = ", EndLimit.value);
            // console.log("PageShowStart = ", PageShowStart.value);
            // console.log("PageShowEnd = ", PageShowEnd.value);
        }

        function PrevPage() {
            if(PageShowStart.value != 1 && (CurrentPage.value+1 == Math.ceil(this.items.length/12) || CurrentPage.value == PageShowStart.value)) {
                PageShowStart.value = PageShowStart.value-1;
                PageShowEnd.value = PageShowEnd.value-1;
            }
            if(StartLimit.value != 0) {
                StartLimit.value = StartLimit.value-12;
                EndLimit.value = EndLimit.value-12;
                CurrentPage.value = CurrentPage.value-1;
            }
        }

        function SelectPage(SelectedPage) {
            CurrentPage.value = SelectedPage;
            if(SelectedPage == 1) {
                StartLimit.value = 0;
                EndLimit.value = 11;
                PageShowStart.value = 1;
                PageShowEnd.value = 3;
            }
            else {
                StartLimit.value = (SelectedPage * 12) - 12;
                EndLimit.value = StartLimit.value + 11;
                if(SelectedPage == Math.ceil(this.items.length/12) || SelectedPage == (Math.ceil(this.items.length/12))-1) {
                    PageShowStart.value = (Math.ceil(this.items.length/12))-3;
                    PageShowEnd.value = (Math.ceil(this.items.length/12))-1;
                }
                else if(SelectedPage == (Math.ceil(this.items.length/12))-2){
                    PageShowStart.value = SelectedPage-2;
                    PageShowEnd.value = SelectedPage;
                }
                else if(SelectedPage == (Math.ceil(this.items.length/12))-3){
                    PageShowStart.value = SelectedPage-1;
                    PageShowEnd.value = SelectedPage+1;
                }
                else {
                    PageShowStart.value = SelectedPage;
                    PageShowEnd.value = SelectedPage+2;
                }
            }
        }

        return {
            StartLimit, EndLimit, PageShowStart, PageShowEnd, CurrentPage, items, NextPage, PrevPage, SelectPage
        };
    },
    methods: {
        // NextPage() {
        //     StartLimit.value = StartLimit+12;
        //     EndLimit.value = EndLimit+12;
        //     PageShowStart.value = PageShowStart+1;
        //     PageShowEnd.value = PageShowEnd+1;
        // }
    },
    beforeMount() {
        // CALL FUNCTION ON LOAD DALAM METHODS
    }
}
</script>