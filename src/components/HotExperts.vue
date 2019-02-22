<template>
  <div class="hot-expert">
    <div class="title">热门专家</div>
    <ul class="list">
      <li class="list-item">
        <div class="card">
          <div class="img"></div>
          <div class="card-body">
            <div class="name"></div>
            <div class="position"></div>
          </div>
        </div>
        <div class="mechanism">
          <p>所属机构：上海交通大学</p>
          <p>专业领域：动物学</p>
        </div>
        <div class="expert-tags">
          <span></span>
        </div>
        <div class="text-right">
          <a href="javascript:;">
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
      
    },
    methods: {
      getHotExperts () {
        
      }
    },
  }
</script>

<style scoped>

</style>