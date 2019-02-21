<template>
    <div>
        <div class="fixed-sideBar">
            <div class="backTop js-backTop"></div>
            <div class="release-demand" @click="dialogVisible = true">
                <p class="txt">发布需求</p>
            </div>
            <div class="code">
                <div class="main">
                    <img class="code-img" src="/images/code-bg.jpg" alt="微信分享二维码" title="微信分享二维码">
                    <div class="text">扫一扫激活更多资讯</div>
                </div>
            </div>
            <div class="phone">
                <p>
                    <i class="icon_phone"></i>
                    <span>联系电话</span>
                </p>
                <p class="number">021-32028387</p>
            </div>
        </div>
        <el-dialog
            title=""
            :show-close="false"
            :visible.sync="dialogVisible"
            width="5.6rem"
            :before-close="handleClose">
            <div class="tab-layer">
                <div class="close-layer js-close-layer"></div>
                <el-tabs v-model="activeName">
                    <el-tab-pane label="专家需求" name="first" class="tab-pane">
                        <form @submit.prevent="professionalSubmit">
                            <div class="form">
                                <div class="form-group">
                                    <div class="group-left">需求类型：</div>
                                    <div class="group-right">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="type" id="type1" value="1"
                                                v-model="form.demandType">
                                            <label class="form-check-label btn" for="type1">专家培训</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="type" id="type2" value="2"
                                                v-model="form.demandType">
                                            <label class="form-check-label btn" for="type2">技术专利</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="type" id="type3" value="3"
                                                v-model="form.demandType">
                                            <label class="form-check-label btn" for="type3">其他</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="group-left">所属行业：</div>
                                    <div class="group-right">
                                        <el-cascader @change="setCategoryId"
                                                    :options="categoryList"
                                                    :show-all-levels=false
                                                    filterable
                                                    v-model="industry"
                                                    change-on-select
                                        ></el-cascader>
                                    </div>
                                </div>
                                <div class="form-group textarea">
                                    <div class="group-left align-self-baseline">需求描述：</div>
                                    <div class="group-right">
                                        <textarea class="form-control" placeholder="请输入您的详细需求，如有问题请联系我们"
                                                v-model="form.description"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="group-left">联系人：</div>
                                    <div class="group-right">
                                        <input class="form-control" type="text" placeholder="请输入联系人"
                                            v-model="form.contacts">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="group-left">联系方式：</div>
                                    <div class="group-right">
                                        <input class="form-control" type="text" placeholder="请输入联系方式"
                                            v-model="form.contactInformation">
                                    </div>
                                </div>
                            </div>
                            <div class="form-button clearfix">
                                <a class="float-left btn" href="/about#about">联系我们</a>
                                <button class="float-right btn submit" type="submit">提交</button>
                                <button class="float-right btn" type="reset">取消</button>
                            </div>
                        </form>
                    </el-tab-pane>
                    <el-tab-pane label="我要提问" name="second" class="tab-pane">
                        <form>
                            <div class="form">
                                <div class="form-group">
                                    <div class="group-left align-self-start">开放范围</div>
                                    <div class="group-right">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="open" id="open"
                                                v-model="questionForm.demandType" value="1">
                                            <label class="form-check-label btn" for="open"
                                            >公开</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="private" id="private"
                                                v-model="questionForm.demandType" value="2">
                                            <label class="form-check-label btn" for="private">私密</label>
                                        </div>
                                        <div class="warning">仅设置为公开的问答会在平台进行展示，私密问答我们将为您保密。</div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="group-left">所属行业：</div>
                                    <div class="group-right">
                                        <el-cascader @change="setQuestionCategoryId"
                                                    :options="categoryList"
                                                    v-model="industry1"
                                                    :show-all-levels=false
                                                    filterable
                                                    change-on-select
                                        ></el-cascader>
                                    </div>
                                </div>
                                <div class="form-group textarea">
                                    <div class="group-left align-self-baseline">问题描述：：</div>
                                    <div class="group-right">
                                        <textarea class="form-control" placeholder="请输入您的问题描述：，如有问题请联系我们"
                                                v-model="questionForm.description"></textarea>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="group-left">指定专家：</div>
                                    <div class="group-right">
                                        <input class="form-control" type="text" placeholder="请输入意向专家，选填"
                                            v-model="questionForm.specialist">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="group-left">联系方式：</div>
                                    <div class="group-right">
                                        <input class="form-control" type="text" placeholder="默认为注册手机号，可修改"
                                            v-model="questionForm.contactInformation">
                                    </div>
                                </div>
                            </div>
                            <div class="form-button clearfix">
                                <a class="float-left btn" href="/about#about">联系我们</a>
                                <button class="float-right btn submit" type="submit">提交</button>
                                <button class="float-right btn" type="reset">取消</button>
                            </div>
                        </form>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
      name: 'sidebar',
      data () {
          return {
                activeName: 'first',
                dialogVisible: false,
                industry: [],
                industry1: [],
                form: {
                    categoryId: "",
                    demandType: "",
                    specialist: "",
                    contactInformation: "",
                    description: "",
                    contacts: ""
                },
                categoryList: [],
                questionForm: {
                    categoryId: "",
                    demandType: "",
                    specialist: "",
                    contactInformation: "",
                    description: "",
                    contacts: ""
                }
          }
      },
      methods: {
        handleClose (done) {
        },
        setCategoryId () {

        },
        setQuestionCategoryId () {

        }
      }
    }
</script>

<style scoped>

</style>
