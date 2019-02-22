<template>
  <div class="minHeight">
    <Head :headerActive="headerActive"></Head>
    <div class="home">
      <swiper class="jh-home" ref="homeSwiper" :options="homeSwiperOptions">
        <swiper-slide class="home-head">
          <swiper class="banners" ref="bannerSwiper" :options="bannerSwiperOptions" v-if="bannerList.length>1">
            <swiper-slide v-bind:style="'background-image:url(' + item.url + ')'"  v-for="(item,index) in bannerList" :key="index"></swiper-slide>
            <div class="swiper-pagination banner-pagination" slot="pagination"></div>
          </swiper>
          <transition name="el-fade-in-linear">
            <div class="home-content" v-show="!showtechnological">
              <h2 class="title">打造精准的知识交流和科技转化平台</h2>
              <form class="form" >
                <div class="search-classify">
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="classify" id="all1" checked value="1" v-model="type">
                    <label class="form-check-label btn" for="all1">全部</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="classify" id="all2" value="2" v-model="type">
                    <label class="form-check-label btn" for="all2">专家</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="classify" id="all3" value="3" v-model="type">
                    <label class="form-check-label btn" for="all3">期刊</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="classify" id="all4" value="4" v-model="type">
                    <label class="form-check-label btn" for="all4">分答</label>
                  </div>
                </div>
                <div class="form-group">
                  <input class="form-control" type="text"  placeholder="请输入您感兴趣的关键词" v-model="keyword">
                  <button class="search-btn btn" type="submit" @click.prevent="keywordsSubmit"></button>
                </div>
              </form>
              <div class="list-wrap text-center">
                <div class="list-item">
                  <div class="turn-one">
                    <count-to class="number" :duration="2000" :startVal=0 :endVal="200" ></count-to>
                    <div class="txt">行业专家</div>
                  </div>
                  <div class="turn-two">
                    <div class="sub-title">
                      <a href="/professional">行业专家</a>
                    </div>
                    <ul class="two-nav">
                      <li>
                        <a href="/professional?statId=1">农林牧渔</a>
                      </li>
                      <li>
                        <a href="/professional?statId=2">生命医疗</a>
                      </li>
                      <li>
                        <a href="/professional?statId=3">材料工程</a>
                      </li>
                      <li>
                        <a href="/professional?statId=4">化学工艺</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="list-item">
                  <div class="turn-one">
                    <count-to class="number" :duration="2000" :startVal=0 :endVal="200" ></count-to>
                    <div class="txt">平台企业</div>
                  </div>
                  <div class="turn-two">
                    <div class="sub-title">
                      <a href="/enterprise">平台企业</a>
                    </div>
                    <ul class="two-nav">
                      <li>
                        <a href="/enterprise?type=1">高新科技企业</a>
                      </li>
                      <li>
                        <a href="/enterprise?type=2">先进单位企业</a>
                      </li>
                      <li>
                        <a href="/top/company/1">世界500强</a>
                      </li>
                      <li>
                        <a href="/top/company/2">全国500强</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="list-item">
                  <div class="turn-one">
                    <count-to class="number" :duration="2000" :startVal=0 :endVal="200" ></count-to>
                    <div class="txt">智慧文库</div>
                  </div>
                  <div class="turn-two">
                    <div class="sub-title">
                      <a href="/tank">智慧文库</a>
                    </div>
                    <ul class="two-nav">
                      <li>
                        <a href="/periodical">期刊</a>
                      </li>
                      <li>
                        <a href="/answer">分答</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="list-item">
                  <div class="turn-one">
                    <count-to class="number" :duration="2000" :startVal=0 :endVal="200" ></count-to>
                    <div class="txt">成果转化</div>
                  </div>
                  <div class="turn-two">
                    <div class="sub-title" @click="showTec()">
                      <a href="javascript:;">科技服务</a>
                    </div>
                    <ul class="two-nav">
                      <li>
                        <a href="/researchDemand">企业方服务</a>
                      </li>
                      <li>
                        <a href="/science">技术方服务</a>
                      </li>
                      <li>
                        <a href="/government">政府助研项目</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <transition name="el-fade-in-linear">
            <div class="technological" id="technological" ref="technological" v-show="showtechnological" @click="hideTec($event)">
              <div class="list" ref="technologicalList">
                <div class="list-item">
                  <div class="title">企业方服务</div>
                  <div class="txt">研发需求、联合开发、项目投资</div>
                  <a class="btn" href="/researchDemand">立即查看</a>
                </div>
                <div class="list-item">
                  <div class="title">技术方服务</div>
                  <div class="txt">技术成果、项目融资、技术转化</div>
                  <a class="btn" href="/science">立即查看</a>
                </div>
                <div class="list-item">
                  <div class="title">政府助研项目</div>
                  <div class="txt">政府资助研究项目、机构一览</div>
                  <a class="btn" href="/government">立即查看</a>
                </div>
              </div>
            </div>
          </transition>
        </swiper-slide>
        <swiper-slide class="home-list">
          <div class="row">
            <div class="list-item" v-for="(item,index) in partnerList" :key="index">
                <a class="img" :href="item.link!==null||item.link!=''?item.link:'javaScript:;'"  target="_blank"
                  :style="'background-image:url(' + item.backgorundVerticalImage + ')'">
                  <img :src="item.logoImage" alt="" title="" class="logo-img">
                </a>
              </div>
          </div>
        </swiper-slide>
        <swiper-slide class="home-foot">
          <Foot></Foot>
        </swiper-slide>
        <div class="home-pagination swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
  import Head from '@/components/head'
  import Foot from '@/components/foot'
  import Sidebar from '@/components/Sidebar'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import countTo from 'vue-count-to'
  import { banner, partner } from '@/api/home.js'

  export default {
    name: 'home',
    data () {
      return {
        type: 1,
        keyword: '', // 搜索关键词
        bannerList: [],
        partnerList: [],
        showtechnological: false,
        headerActive: false,
        homeSwiperOptions: {
          direction: 'vertical',
          mousewheel: true,
          speed: 800,
          autoHeight: true,
          slidesPerView: 'auto',
          allowTouchMove: false,
          pagination: {
            el: '.home-pagination',
            clickable: true
          }
        },
        bannerSwiperOptions: {
          speed: 800,
          autoplay: {
            delay: 3000
          },
          loop: true,
          pagination: {
            el: '.banner-pagination'
          }
        }
      }
    },
    computed: {
      homeSwiper () {
        return this.$refs.homeSwiper.swiper
      },
      bannerSwiper () {
        return this.$refs.bannerSwiper.swiper
      }
    },
    created () {
      this._getBanner()
      this._getPartner()
    },
    mounted () {
      let _this = this
      this.homeSwiper.on('slideChangeTransitionStart', function () {
        let index = this.activeIndex
        if (index === 1) {
          _this.headerActive = true
        } else {
         _this.headerActive = false
        }
      })
    },
    components: {
      Head,
      Foot,
      Sidebar,
      swiper,
      swiperSlide,
      countTo
    },
    methods: {
      _getBanner () {
        let _this = this
        banner().then(res => {
          _this.bannerList = res.data
        })
      },
      // 搜索
      keywordsSubmit () {
        if (this.keyword === null || this.keyword === '') {
          this.$message.warning('关键字不能为空');
          return false
        }
        if (this.type === 1) {
          this.$router.push({ path: '/research/1/' + this.keyword })
        } else if (this.type === 2) {
            this.$router.push({ path: '/research/1/' + this.keyword + '?professional=true' })
        } else if (this.type === 3) {
          this.$router.push({ path: '/research/2/' + this.keyword })
        } else {
          this.$router.push({ path: '/research/3/' + this.keyword })
        }
      },
      showTec () {
        this.showtechnological = true
      },
      hideTec (event) {
        let lists = this.$refs.technologicalList.getElementsByClassName('list-item')
        let hide = 0
        for (let elem of lists) {
          console.log(event.target, elem)
          if (event && event.target !== elem) {
            hide++
          }
        }
        if (hide === 3) {
          this.showtechnological = false
        }
      },
      _getPartner () { // 合作伙伴
        let _this = this
        partner().then(res => {
          _this.partnerList = res.data
        })
      }
    }
  }
</script>
