<template>
  <div class="minHeight">
    <Head :navigation="2"></Head>
    <div class="expert">
      <div class="container">
        <div class="row justify-content-between">
          <div class="jh-left">
            <Classification :categoryList="categoryList"></Classification>
            <div class="expert-box"></div>
            <div class="loadMore btn">加载更多</div>
          </div>
          <div class="jh-right">
            <div class="expert-category">
              <div class="title">专家类别</div>
              <ul class="list">
                <li class="list-item"  v-for="(item, index) in ['农林牧渔','生命医疗','材料工程','化学工艺']" :key="index" :style="('background-image:url(../images/category_bg_0'+(index+1)+'.png)')">
                  <div class="main" v-if="index==0">
                      <div class="name">{{item}}</div>
                      <div class="number">
                          <span></span>位
                      </div>
                  </div>
                  <div class="main" v-else-if="index==1">
                    <div class="name">{{item}}</div>
                      <div class="number">
                          <span></span>位
                      </div>
                  </div>
                  <div class="main" v-else-if="index==2">
                    <div class="name">{{item}}</div>
                      <div class="number">
                          <span></span>位
                      </div>
                  </div>
                  <div class="main" v-else>
                    <div class="name">{{item}}</div>
                      <div class="number">
                          <span></span>位
                      </div>
                  </div>
                  <div class="icon_more" v-if="statParam==null"></div>
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
  import Head from '@/components/Head'
  import Foot from '@/components/Foot'
  import Sidebar from '@/components/Sidebar'
  import Classification from '@/components/Classification'
  import HotExperts from '@/components/HotExperts'
  import { expertCategory, categoryList } from '@/api/expert'
  export default {
    name: 'experts',
    data () {
      return {
        categortStatistic: {
          'agricultureCount': 0,
          'chemicalCount': 0,
          'lifeHealthCount': 0,
          'materialsCount': 0
        },
        categoryList: [],
        statParam: null
      }
    },
    created () {
      this.getExpertCategory();
      this.getCategoryList();
    },
    components: {
      Head,
      Foot,
      Sidebar,
      Classification,
      HotExperts
    },
    methods: {
      // 获取行业分类
      getCategoryList () {
        let _this = this;
        categoryList().then(res => {
          _this.categoryList = res.data;
          console.log(_this.categoryList);
        })
      },
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
