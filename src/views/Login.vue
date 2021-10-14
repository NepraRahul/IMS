<template>
  <div class="auth-wrapper auth-v1 px-2">
    <div class="auth-inner py-2">

      <!-- Login v1 -->
      <b-card class="mb-0">
        <b-link class="brand-logo">
          <vuexy-logo />

          <h2 class="brand-text text-primary ml-1">
            IMS
          </h2>
        </b-link>

        <!-- form -->
        <validation-observer
          ref="loginForm"
          #default="{invalid}"
        >
          <b-form
            class="auth-login-form mt-2"
            @submit.prevent="login"
          >

            <!-- email -->
            <b-form-group
              label-for="email"
              label="Email"
            >
              <validation-provider
                #default="{ errors }"
                name="Email"
                vid="email"
                rules="required|email"
              >
                <b-form-input
                  id="email"
                  v-model="userEmail"
                  name="login-email"
                  :state="errors.length > 0 ? false:null"
                  placeholder="john@example.com"
                  autofocus
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group>
              <div class="d-flex justify-content-between">
                <label for="password">Password</label>
                <b-link :to="{name:'auth-forgot-password'}">
                  <small>Forgot Password?</small>
                </b-link>
              </div>
              <validation-provider
                #default="{ errors }"
                name="Password"
                vid="password"
                rules="required"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="password"
                    v-model="password"
                    :type="passwordFieldType"
                    class="form-control-merge"
                    :state="errors.length > 0 ? false:null"
                    name="login-password"
                    placeholder="Password"
                  />

                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="passwordToggleIcon"
                      @click="togglePasswordVisibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- checkbox -->
            <b-form-group>
              <b-form-checkbox
                id="remember-me"
                v-model="status"
                name="checkbox-1"
              >
                Remember Me
              </b-form-checkbox>
            </b-form-group>

            <!-- submit button -->
            <b-button
              variant="primary"
              type="submit"
              block
              :disabled="invalid"
            >
              Sign in
            </b-button>
          </b-form>
        </validation-observer>

        <!-- <b-card-text class="text-center mt-2">
          <span>New on our platform? </span>
          <b-link :to="{name:'auth-register-v1'}">
            <span>Create an account</span>
          </b-link>
        </b-card-text> -->

        <!-- <div class="divider my-2">
          <div class="divider-text">
            or
          </div>
        </div> -->

        <!-- social button -->
        <!-- <div class="auth-footer-btn d-flex justify-content-center">
          <b-button
            href="javascript:void(0)"
            variant="facebook"
          >
            <feather-icon icon="FacebookIcon" />
          </b-button>
          <b-button
            href="javascript:void(0)"
            variant="twitter"
          >
            <feather-icon icon="TwitterIcon" />
          </b-button>
          <b-button
            href="javascript:void(0)"
            variant="google"
          >
            <feather-icon icon="MailIcon" />
          </b-button>
          <b-button
            href="javascript:void(0)"
            variant="github"
          >
            <feather-icon icon="GithubIcon" />
          </b-button>
        </div> -->
      </b-card>
      <!-- /Login v1 -->
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BButton, BForm, BFormInput, BFormGroup, BCard, BInputGroup, BInputGroupAppend, BFormCheckbox, /* BRow, BCol, */ BLink, /* BCardText, BCardTitle, BImg, */ /* BAlert, */ VBTooltip,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import useJwt from '@/auth/jwt/useJwt'
import store from '@/store/index'
import { getHomeRouteForLoggedInUser } from '@/auth/utils'

export default {
  directives: {
    'b-tooltip': VBTooltip,
  },
  components: {
    // BRow,
    // BCol,
    BCard,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    // BCardText,
    // BCardTitle,
    // BImg,
    BForm,
    BButton,
    // BAlert,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: '',
      password: 'admin@123',
      userEmail: 'admin@admin.com',
      sideImg: require('@/assets/images/pages/login-v2.svg'),
      userData: {},
      menu: {},
      permission: [],
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-v2-dark.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  methods: {
    login() {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          document.getElementById('loading-bg').style.display = 'block'
          useJwt.login({
            email: this.userEmail,
            password: this.password,
          })
            .then(async response => {
              if (response.data.code === '200') {
                this.userData = response.data.data.user_details
                this.menu = response.data.data.menu
                this.permission = response.data.data.permission

                this.dataLocalize()
                // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease
                this.$router.replace(getHomeRouteForLoggedInUser(this.userData.user_type))
                  .then(() => {
                    this.$toast({
                      component: ToastificationContent,
                      position: 'top-right',
                      props: {
                        title: `Welcome ${this.userData.firstname || this.userData.username}`,
                        icon: 'CoffeeIcon',
                        variant: 'success',
                        text: `You have successfully logged in as ${this.userData.user_type}. Now you can start to explore!`,
                      },
                    })
                  })
              } else {
                console.log(response)
                this.$toast({
                  component: ToastificationContent,
                  position: 'top-right',
                  props: {
                    title: 'Incorrect Details',
                    icon: 'Warning',
                    variant: 'danger',
                    text: `${response.data.msg}. Please check details`,
                  },
                })
              }
            })
            .catch(error => {
              this.$toast({
                component: ToastificationContent,
                position: 'top-right',
                props: {
                  title: 'Something Went Wrong!',
                  icon: 'Warning',
                  variant: 'danger',
                  text: error,
                },
              })
              // this.$refs.loginForm.setErrors(error.data)
            })
          // document.getElementById('loading-bg').style.display = 'none'
        }
      })
    },
    dataLocalize() {
      useJwt.setToken(this.userData.token.plainTextToken)
      localStorage.setItem('menu', JSON.stringify(this.menu))
      localStorage.setItem('userData', JSON.stringify(this.userData))
      localStorage.setItem('permission', this.permission)
    },
  },

}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-auth.scss';
</style>
