<template>
  <div>
    <div class="classification">
      <div class="industry">
        <div class="classif-tyitle">行业</div>
        <div class="list row js-industry">
            <div class="list-item" v-for="(item, index) in categoryList" :key="index">
                <span>{{item.title}}</span>
                <i class="icon_drop"></i>
            </div>
        </div>
        <div class="dropdown-content" ref="jsDropdown">
            <div class="dropdown-list" v-for="(item, index) in categoryList" :key="index">
                <span v-for="(children, index) in item.children" :key="index">{{children.title}}</span>
            </div>
        </div>
        <div class="more btn" @click="categoryVisible = true">更多</div>
      </div>
      <div class="region">

      </div>
      <div class="rank">

      </div>
      <div class="selected"></div>
    </div>
    <el-dialog
      title
      :show-close="false"
      :visible.sync="categoryVisible"
      width="5.6rem"
    >
      <div class="expert-layer">
        <div class="top">
          <div class="title">行业分类</div>
          <div class="close-layer js-close-layer"></div>
        </div>
        <el-tabs v-model="activeName" tab-position="left">
          <el-tab-pane :label="item.title" :name="('category'+(index+1))" v-for="(item, index) in categoryList" :key="index">
            <div class="tab-content">
              <div class="list" v-for="twoChildren in item.children" :key="twoChildren.id">
                  <div class="list-title tag">{{twoChildren.title}}</div>
                  <div class="main">
                      <span v-for="(threeChildren, index) in twoChildren.children" :key="index" class="tag">{{threeChildren.title}}</span>
                  </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'classification',
    data () {
      return {
        categoryVisible: false,
        activeName: 'category1'
      }
    },
    props: ['filteredCategoryList', 'categoryList']
  }
</script>

<style scoped>

</style>
