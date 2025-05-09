<script>


// 获取员工数据
import {getEmployeeData} from "@/utils/EmployeeData";
// 物品列表
import apply_goods from "@/utils/SelectData"
import {officeCreate} from "@/api/approvalApply";

export default {
  name: "OfficeApply",
  async mounted() {
    try {
      this.EmployeeData = await getEmployeeData()

    } catch (error) {
      this.$notify({
        title: '提示',
        message: '获取人员列表信息失败,请联系管理员',
        type: 'error'
      })
    }
  },
  data() {
    return {
      apply_goods,
      EmployeeData: [],
      ruleForm: {
        // 用户名
        applicant: "",
        // 时间
        created: "",
        // 物品
        apply_goods: "",
        // 数量
        apply_goods_num: "",
        // 原因
        apply_reason: "",
      },
      // 校验规则
      rules: {
        // 用户名   --必填的标志不显示
        applicant: [
          {required: true, message: '请输入用户名称', trigger: 'blur'},
        ],
        // 时间
        created: [
          {type: 'date', required: true, message: '请选择申请时间', trigger: 'blur'}
        ],
        // 物品
        apply_goods: [
          {required: true, message: '请选择申请的物品', trigger: 'blur'}
        ],
        // 数量
        apply_goods_num: [
          {required: true, message: '请选择申请数量', trigger: 'blur'}
        ],
        // 原因
        apply_reason: [
          {required: true, message: '请填写申请原因', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          // 发送请求
          let response = await officeCreate(this.ruleForm)
          // 解构数据
          let {code} = response.data;
          // 判断一下
          if (code === 20000) {
            await this.$router.push('/approvalManage/officeManage')
            // 提示
            this.$notify({
              title: '申请成功',
              message: '你已申请成功等待审批',
              type: 'success'
            });
          }
        } else {
          this.$notify({
            title: '申请失败',
            message: '申请失败,请思完整填写表单数据',
            type: 'error'
          });
          return false;
        }
      });
    },
    // 取消申请---element ui 的重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  }
}
</script>

<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>办公审批</span>
    </div>

    <!--  from表单-->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item label="申请人" prop="applicant">
        <el-select v-model="ruleForm.applicant" placeholder="请选择申请人" style="width: 100%">
          <el-option v-for="user in EmployeeData" :key="user.id" :label="user.account" :value="user.id"></el-option>
        </el-select>
      </el-form-item>


      <el-form-item label="申请时间" prop="created">
        <el-form-item prop="date">
          <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.created"
                          style="width: 100%;"></el-date-picker>
        </el-form-item>
      </el-form-item>


      <el-form-item label="申请物品" required prop="apply_goods">
        <el-select v-model="ruleForm.apply_goods" placeholder="请选择申请物品" style="width: 100%">
          <el-option v-for="goods in apply_goods" :label="goods.goods_name" :value="goods.goods_name"
                     :key="goods.key"></el-option>
        </el-select>
      </el-form-item>


      <el-form-item label="申请数量" prop="apply_goods_num">
        <el-input-number v-model="ruleForm.apply_goods_num" :min="1" :max="50" label="申请数量"></el-input-number>
      </el-form-item>


      <el-form-item label="申请描述" prop="apply_reason">
        <el-input type="textarea" v-model="ruleForm.apply_reason"></el-input>
      </el-form-item>


      <!--      表单按钮-->
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm'); open" plain>立即申请</el-button>
        <el-button @click="resetForm('ruleForm')">重置表单</el-button>
      </el-form-item>


    </el-form>


  </el-card>
</template>

<style scoped>

</style>