<template>
    <div class="products">
        <div class="judul">Katalog Produk</div>
        <div class="setting">
            <div class="box-total">
                <p class="total">Showing {{ StartLimit+1 }} - {{ items.length < EndLimit+1 ? items.length : EndLimit+1 }} of {{ items.length }} results</p>
            </div>
            <div class="box-filter">
                <!-- <button class="sortby" @click="ChangeSort()">{{ Sort == "Desc" ? 'Sort by Price▴' : 'Sort by Price▾' }}</button> -->
                <p class="label-sort">Urutkan:</p>
                <div class="box-sort">
                    <div class="button" @click="Dropdown = !Dropdown">
                        <p class="text" v-if="Sort == 'Asc'">Harga Terendah</p>
                        <p class="text" v-else-if="Sort == 'Desc'">Harga Tertinggi</p>
                        <p class="text" v-else>Sort Berdasarkan Harga</p>
                        <img src="~/assets/products/DropdownButton.svg" alt="" />
                    </div>
                    <div class="items" v-if="Dropdown">
                        <div class="item" id="rendah" @click="ChangeSort('Asc')">Harga Terendah</div>
                        <div class="item" id="tinggi" @click="ChangeSort('Desc')">Harga Tertinggi</div>
                    </div>
                </div>
                <div class="box-search">
                    <img class="search" src="assets/products/Logo_Search.svg" alt="" />
                    <input class="input" type="text" placeholder="Cari di ProjectByAmi" @keyup="SearchItems($event.target.value)"/>
                </div>
            </div>
        </div>
        <div class="content">
            <BoxProduct v-for="(item, index) in items" v-show="index >= StartLimit && index <= EndLimit" :counter=index+1 :nama="item.nama" :img="item.img" :harga="item.harga"/>
        </div>
        <div class="numberPage">
            <button class="button" @click="MoveFirstPage()"><img class="logo" src="assets/products/Prev2.svg" alt="" /></button>
            <button class="button" @click="PrevPage()"><img class="logo" src="assets/products/Prev1.svg" alt="" /></button>
            <button class="button" 
                v-for="n in Math.ceil(items.length/12)" 
                @click="SelectPage(n)"
                :class="{ 'current':  n == CurrentPage }" 
                v-show="n >= PageShowStart && n <= PageShowEnd">{{ n }}</button>
            <button class="button" v-show="PageShowEnd+1 < Math.ceil(items.length/12)" disabled>...</button>
            <button class="button" v-show="Math.ceil(items.length/12) > 3" @click="SelectPage(Math.ceil(items.length/12))" :class="{ 'current':  CurrentPage == Math.ceil(items.length/12) }">{{ Math.ceil(items.length/12) }}</button>
            <button class="button" @click="NextPage()"><img class="logo" src="assets/products/Next1.svg" alt="" /></button>
            <button class="button" @click="MoveLastPage()"><img class="logo" src="assets/products/Next2.svg" alt="" /></button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    data() {
        const StartLimit = ref(0);
        const EndLimit = ref(11);
        const PageShowStart = ref(1);
        const PageShowEnd = ref(3);
        const CurrentPage = ref(1);
        const Dropdown = ref(false);
        const Sort = ref(null);
        const AllItems = [
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
            { nama: 'Bucket Wisuda', img: '/assets/products/Product_1.svg', harga: 130 },
            { nama: 'Bucket Valentine', img: '/assets/products/Product_1.svg', harga: 125 },
            { nama: 'Bucket Ulang Tahun', img: '/assets/products/Product_1.svg', harga: 150 },
            { nama: 'Bucket Wedding', img: '/assets/products/Product_1.svg', harga: 170 },
            { nama: 'Bucket Lahiran', img: '/assets/products/Product_1.svg', harga: 120 },
            { nama: 'Bucket Lamaran', img: '/assets/products/Product_1.svg', harga: 140 },
        ];
        const items = ref(AllItems);
        // let items = this.AllItems.slice(0);

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

        function MoveFirstPage() {
            StartLimit.value = 0;
            EndLimit.value = 11;
            PageShowStart.value = 1;
            PageShowEnd.value = 3;
            CurrentPage.value = 1;
        }

        function MoveLastPage() {
            StartLimit.value = (Math.ceil(this.items.length/12)*12)-12;
            EndLimit.value = this.items.length-1;
            PageShowStart.value = Math.ceil(this.items.length/12)-3;
            PageShowEnd.value = Math.ceil(this.items.length/12)-1;
            CurrentPage.value = Math.ceil(this.items.length/12);
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

        function ChangeSort(props) {
            Sort.value = props;
            Dropdown.value = !Dropdown;
            if(Sort.value == "Asc") {
                this.items.sort((a, b) => {
                    const diff = a.harga - b.harga;
                    if(diff === 0) return 0;
                    const sign = Math.abs(diff)/diff;
                    return sign;
                });
            }
            else if(Sort.value == "Desc") {
                this.items.sort((a, b) => {
                    const diff = b.harga - a.harga;
                    if(diff === 0) return 0;
                    const sign = Math.abs(diff)/diff;
                    return sign;
                });
            }
        }

        const SearchItems = (props) => {
            const SemuaItem = this.AllItems;

            if(props.length == 0) {
                this.items = this.AllItems;
            }
            else {
                const filterItems = SemuaItem.filter(p => p.nama.toLowerCase().indexOf(props.toLowerCase()) >= 0);
                this.items = filterItems;
            }
        }

        return {
            StartLimit, 
            EndLimit, 
            PageShowStart, 
            PageShowEnd, 
            CurrentPage,
            Dropdown,
            Sort,
            AllItems,
            items,
            NextPage, 
            PrevPage, 
            SelectPage, 
            MoveFirstPage, 
            MoveLastPage,
            ChangeSort,
            SearchItems
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