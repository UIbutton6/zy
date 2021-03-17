<template>
  <div class="main">
    <a-form :form="form" class="user-layout-login" ref="formLogin" id="formLogin">
      <a-tabs
        @change="handleTabClick"
        :activeKey="customActiveKey"
        :tabBarStyle="{ textAlign: 'center', borderBottom: 'unset' }">
        <a-tab-pane key="tab1" tab="平台用户登录">
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="请输入帐户名 / admin"
              v-decorator="['username',{initialValue:'admin', rules: validatorRules.username.rules}]">
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              size="large"
              type="password"
              autocomplete="false"
              placeholder="密码 / 123456"
              v-decorator="['password',{initialValue:'123456', rules: validatorRules.password.rules}]">
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-row :gutter="0">
            <a-col :span="16">
              <a-form-item>
                <a-input
                  size="large"
                  type="text"
                  @change="inputCodeChange"
                  placeholder="请输入验证码"
                  v-decorator="['inputCode',validatorRules.inputCode]">
                  <a-icon slot="prefix" type="smile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8" style="text-align: right">
              <img v-if="requestCodeSuccess" style="margin-top: 2px;" :src="randCodeImage" @click="handleChangeCheckCode"/>
              <img v-else style="margin-top: 2px;" src="../../assets/checkcode.png" @click="handleChangeCheckCode"/>
            </a-col>
          </a-row>
        </a-tab-pane>

        
        <a-tab-pane key="tab2" tab="项目用户登录">
          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="请输入项目名称"
              v-decorator="['topDepartName']">
              <a-icon slot="prefix" type="mobile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              size="large"
              type="text"
              placeholder="请输入帐户名 / admin"
              v-decorator="['username',{initialValue:'admin', rules: validatorRules.username.rules}]">
              <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-form-item>
            <a-input
              size="large"
              type="password"
              autocomplete="false"
              placeholder="密码 / 123456"
              v-decorator="['password',{initialValue:'123456', rules: validatorRules.password.rules}]">
              <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
            </a-input>
          </a-form-item>

          <a-row :gutter="0">
            <a-col :span="16">
              <a-form-item>
                <a-input
                  size="large"
                  type="text"
                  @change="inputCodeChange"
                  placeholder="请输入验证码"
                  v-decorator="['inputCode',validatorRules.inputCode]">
                  <a-icon slot="prefix" type="smile" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
              </a-form-item>
            </a-col>
            <a-col :span="8" style="text-align: right">
              <img v-if="requestCodeSuccess" style="margin-top: 2px;" :src="randCodeImage" @click="handleChangeCheckCode"/>
              <img v-else style="margin-top: 2px;" src="../../assets/checkcode.png" @click="handleChangeCheckCode"/>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>

      <a-form-item>
        <a-checkbox v-decorator="['rememberMe', {initialValue: true, valuePropName: 'checked'}]" >自动登陆</a-checkbox>
      </a-form-item>

      <a-form-item style="margin-top:24px">
        <a-button
          size="large"
          type="primary"
          htmlType="submit"
          class="login-button"
          :loading="loginBtn"
          :disabled="loginBtn"
          @click.stop.prevent="handleSubmit">确定
        </a-button>
      </a-form-item>
    </a-form>

  </div>
</template>

<script>
  //import md5 from "md5"
  import Vue from 'vue'
  import api from '@/api'
  import store from '@/store/'
  import { mapActions } from "vuex"
  import { timeFix } from "@/utils/util"
  import { USER_INFO } from "@/store/mutation-types"
  import { putAction,postAction,getAction } from '@/api/manage'
  // import TwoStepCaptcha from '@/components/tools/TwoStepCaptcha'
  import { ACCESS_TOKEN ,ENCRYPTED_STRING} from "@/store/mutation-types"
  import { encryption , getEncryptedString } from '@/utils/encryption/aesEncrypt'

  export default {
    components: { /* TwoStepCaptcha */ },
    data () {
      return {
        customActiveKey: "tab1",
        loginBtn: false,
        loginType: 1,
        // requiredTwoStepCaptcha: false,
        stepCaptchaVisible: false,
        form: this.$form.createForm(this),
        encryptedString:{
          key:"",
          iv:"",
        },
        state: {
          time: 60,
          smsSendBtn: false,
        },
        validatorRules:{
          username:{rules: [{ required: true, message: '请输入用户名!'},{validator: this.handleUsernameOrEmail}]},
          password:{rules: [{ required: true, message: '请输入密码!',validator: 'click'}]},
          mobile:{rules: [{validator:this.validateMobile}]},
          captcha:{rule: [{ required: true, message: '请输入验证码!'}]},
          inputCode:{rules: [{ required: false, message: '请输入验证码!'}]}
        },
        verifiedCode:"",
        inputCodeContent:"",
        inputCodeNull:true,

        departList:[],
        departVisible:false,
        departSelected:"",
        currentUsername:"",
        validate_status:"",
        currdatetime:'',
        randCodeImage:'',
        requestCodeSuccess:false
      }
    },
    created () {
      this.getRouterData();
      Vue.ls.remove(ACCESS_TOKEN)
      this.handleChangeCheckCode();
      this.currdatetime = new Date().getTime();
    },
    methods: {
      ...mapActions([ "Login", "Logout","PhoneLogin","ThirdLogin" ]),
      // handler
      handleUsernameOrEmail (rule, value, callback) {
        const regex = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
        if (regex.test(value)) {
          this.loginType = 0
        } else {
          this.loginType = 1
        }
        callback()
      },
      handleTabClick (key) {
        this.customActiveKey = key
      },
      handleSubmit () {
        let that = this
        let loginParams = {};
        that.loginBtn = true;
        const obj = {}
        if(that.customActiveKey === 'tab1') {
          obj.loginType =5;
          obj.topDepartName = '';
        } else {
          obj.loginType =1;
          obj.topDepartName = this.form.getFieldValue('topDepartName');
        }

        that.form.validateFields([ 'username', 'password','inputCode', 'rememberMe' ], { force: true }, (err, values) => {
          if (!err) {
            loginParams = {
              username: values.username,
              password: values.password,
              checkKey: that.currdatetime,
              captcha: that.inputCodeContent,
            },

            that.Login(Object.assign({}, loginParams, obj)).then(res => {
              const userInfo = res.result;
              store.commit('SET_INFO', userInfo);
              Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000);
              this.loginSuccess();
            }).catch(err => that.requestFailed(err));

          }
          
          that.loginBtn = false;
        })
      },
      // getCaptcha (e) {
      //   e.preventDefault();
      //   let that = this;
      //   this.form.validateFields([ 'mobile' ], { force: true },(err,values) => {
      //       if(!values.mobile){
      //         that.cmsFailed("请输入手机号");
      //       }else if (!err) {
      //         this.state.smsSendBtn = true;
      //         let interval = window.setInterval(() => {
      //           if (that.state.time-- <= 0) {
      //             that.state.time = 60;
      //             that.state.smsSendBtn = false;
      //             window.clearInterval(interval);
      //           }
      //         }, 1000);

      //         const hide = this.$message.loading('验证码发送中..', 0);
      //         let smsParams = {};
      //             smsParams.mobile=values.mobile;
      //             smsParams.smsmode="0";
      //         postAction("/sys/sms",smsParams)
      //           .then(res => {
      //             if(!res.success){
      //               setTimeout(hide, 0);
      //               this.cmsFailed(res.message);
      //             }
      //             console.log(res);
      //             setTimeout(hide, 500);
      //           })
      //           .catch(err => {
      //             setTimeout(hide, 1);
      //             clearInterval(interval);
      //             that.state.time = 60;
      //             that.state.smsSendBtn = false;
      //             this.requestFailed(err);
      //           });
      //       }
      //     }
      //   );
      // },
      // stepCaptchaSuccess () {
      //   this.loginSuccess()
      // },
      // stepCaptchaCancel () {
      //   this.Logout().then(() => {
      //     this.loginBtn = false
      //     this.stepCaptchaVisible = false
      //   })
      // },
      handleChangeCheckCode(){
        this.currdatetime = new Date().getTime();
        getAction(`/sys/randomImage/${this.currdatetime}`).then(res=>{
          if(res.success){
            this.randCodeImage = res.result
            this.requestCodeSuccess=true
          }else{
            this.$message.error(res.message)
            this.requestCodeSuccess=false
          }
        }).catch(()=>{
          this.requestCodeSuccess=false
        })
      },
      loginSuccess () {
        // this.$router.push({ path: "/admin/projects" })
        this.$router.push({ path: "/dashboard/Home" })
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`,
        });
      },
      cmsFailed(err){
        this.$notification[ 'error' ]({
          message: "登录失败",
          description:err,
          duration: 4,
        });
      },
      requestFailed (err) {
        this.$notification[ 'error' ]({
          duration: 4,
          message: '登录失败',
          description: err.message || "请求出现错误，请稍后再试",
        });
        this.handleChangeCheckCode();
        this.loginBtn = false;
      },
      validateMobile(rule,value,callback){
        if (!value || new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(value)){
          callback();
        }else{
          callback("您的手机号码格式不正确!");
        }

      },
      validateInputCode(rule,value,callback){
        if(!value || this.verifiedCode==this.inputCodeContent){
          callback();
        }else{
          callback("您输入的验证码不正确!");
        }
      },
      generateCode(value){
        this.verifiedCode = value.toLowerCase()
      },
      inputCodeChange(e){
        this.inputCodeContent = e.target.value
      },
      departConfirm(res){
        if(res.success){
          this.loginSuccess();
        }

        this.requestFailed(res)
        this.Logout();
      },
      departOk(){
        if(!this.departSelected){
          this.validate_status='error'
          return false
        }
       let obj = {
          orgCode:this.departSelected,
          username:this.form.getFieldValue("username")
        }
        putAction("/sys/selectDepart",obj).then(res=>{
          if(res.success){
            const userInfo = res.result.userInfo;
            Vue.ls.set(USER_INFO, userInfo, 7 * 24 * 60 * 60 * 1000);
            store.commit('SET_INFO', userInfo);
            //console.log("---切换组织机构---userInfo-------",store.getters.userInfo.orgCode);
            this.departClear()
            this.loginSuccess()
          }else{
            this.requestFailed(res)
            this.Logout().then(()=>{
              this.departClear()
            });
          }
        })
      },
      departClear(){
        this.departList=[]
        this.departSelected=""
        this.currentUsername=""
        this.departVisible=false
        this.validate_status=''
      },
      departChange(value){
        this.validate_status='success'
        this.departSelected = value
      },
      getRouterData(){
        this.$nextTick(() => {
          if (this.$route.params.username) {
            this.form.setFieldsValue({
              'username': this.$route.params.username
            });
          }
      })
    },
    //获取密码加密规则
    getEncrypte(){
      var encryptedString = Vue.ls.get(ENCRYPTED_STRING);
      if(encryptedString == null){
        getEncryptedString().then((data) => {
          this.encryptedString = data
        });
      }else{
        this.encryptedString = encryptedString;
      }
    },
    }
  }
</script>

<style lang="less" scoped>

  .main {
    opacity: .95;
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 10px;
  }

  .user-layout-login {
    label {
      font-size: 14px;
    }

    .getCaptcha {
      display: block;
      width: 100%;
      height: 40px;
    }

    .forge-password {
      font-size: 14px;
    }

    button.login-button {
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }

    .user-login-other {
      text-align: left;
      margin-top: 24px;
      line-height: 22px;

      .item-icon {
        font-size: 24px;
        color: rgba(0,0,0,.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color .3s;

        &:hover {
          color: #1890ff;
        }
      }

      .register {
        float: right;
      }
    }
  }

</style>
<style>
  .valid-error .ant-select-selection__placeholder{
    color: #f5222d;
  }
</style>