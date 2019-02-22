<template>
  <div class="minHeight">
    <Head></Head>
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
            </div>
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
  export default {
    name: 'experts',
    data() {
      return {
        
      }
    },
    components: {
      Head,
      Foot,
      Sidebar
    },
  }
</script>

<style scoped>

</style>