<template>
  <div class="minHeight">
    <Head :navigation="2"></Head>
    <div class="expert">
      <div class="container">
        <div class="row justify-content-between">
          <div class="jh-left">
            <div class="classification"></div>
            <div class="expert-box"></div>
            <div class="loadMore btn">加载更多</div>
          </div>
          <div class="jh-right">
            <div class="expert-category">
              <div class="title">专家类别</div>
              <ul class="list" v-if="categortStatistic">
                <li class="list-item"  v-for="(item, index) in ['农林牧渔','生命医疗','材料工程','化学工艺']" :key="index">
                  <div class="main">
                      <div class="name" v-if="index==0">{{item}}</div>
                      <div class="name" v-else-if="index==1">{{item}}</div>
                      <div class="name" v-else-if="index==2">{{item}}</div>
                      <div class="name" v-else>{{item}}</div>
                      <div class="number">
                          <span v-if="index==0">{{item.agricultureCount}}</span>位
                      </div>
                  </div>
                  <div class="icon_more"></div>
                </li>
              </ul>
            </div>
            <HotExperts></HotExperts>
          </div>
        </div>
      </div>
    </div>
    <Foot></Foot>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
  import Head from '@/components/head'
  import Foot from '@/components/foot'
  import Sidebar from '@/components/Sidebar'
  import HotExperts from '@/components/HotExperts'
  import { expertCategory } from '@/api/expert'
  export default {
    name: 'experts',
    data() {
      return {
        categortStatistic: []
      }
    },
    created () {
      this.getExpertCategory();
    },
    components: {
      Head,
      Foot,
      Sidebar,
      HotExperts
    },
    methods: {
      // 获取专家类别统计数据
      getExpertCategory () {
        let _this = this;
        expertCategory().then((res) => {
          _this.categoryStatistic = res.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>
