<template>
  <div class="hot-expert">
    <div class="title">热门专家</div>
    <ul class="list" v-if="expertsList.length>0">
      <li class="list-item" v-for="(item, index) in expertsList" :key="index">
        <div class="card">
          <div class="img"></div>
          <div class="card-body">
            <div class="name">{{item.name}}</div>
            <div class="position"></div>
          </div>
        </div>
        <div class="mechanism">
          <p>所属机构：{{item.organizationTitle}}</p>
          <p>专业领域：{{item.professionalFieldTitle}}</p>
        </div>
        <div class="expert-tags" v-if="JSON.parse(item.tag).length">
          <span v-for="(val ,i) in JSON.parse(item.tag)" :key='i'>{{val}}</span>
        </div>
        <div class="text-right">
          <a href="javascript:;" class="check-detail">
            <span>查看详情</span>
            <i class="icon_more"></i>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { hotList } from '@/api/expert'
  export default {
    name: 'hotExperts',
    data() {
      return {
        expertsList: []
      }
    },
    created() {
      this.getHotExperts();
    },
    methods: {
      getHotExperts () {
        let _this = this;
        hotList().then(res => {
          _this.expertsList = res.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>
