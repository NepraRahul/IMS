<template>
  <validation-observer
    ref="createUser"
  >
    <b-form @submit.prevent="createUser">
      <b-row>
        <login-details
          :req="req"
          :editdata="form"
          @getCreateUser="getFor"
        />

        <user-details
          :req="req"
          :editdata="form"
          @getCreateUser="getFor"
        />

        <report-to
          :req="req"
          :editdata="form"
          @getCreateUser="getFor"
        />
        <!-- reset and submit -->
        <b-col
          cols="12"
          class="text-center"
        >
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            type="submit"
            variant="primary"
            class="mr-1"
          >
            Submit
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-secondary"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import {
  BCol, BForm, BRow, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import LoginDetails from './UserFormComponents/LoginDetails.vue'
import UserDetails from './UserFormComponents/UserDetails.vue'
import ReportTo from './UserFormComponents/ReportTo.vue'
import store from '../../../store'

export default {
  name: 'CreateUser',
  components: {
    BRow,
    BButton,
    BCol,
    BForm,
    LoginDetails,
    UserDetails,
    ReportTo,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      req: true,
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {
        assigned_service: '',
        username: '',
        password: '',
        confirmPassword: '',
        email: '',
        user_type: '',
        mobile: '',
        status: '',
        address1: '',
        address2: '',
        firstname: '',
        lastname: '',
        city: '',
        zip: '',
        state: '',
        profile_photo: 'https://staging-lr.yugtia.com/assets/images/users/1.jpg',

      },

    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },

  mounted() {
    if (this.$route.params.id) {
      this.form.companyuserid = this.$route.params.id
      this.req = false
      store.dispatch('CompanyuserManage/getUserById', { companyuserid: this.form.companyuserid })
        .then(response => {
          if (response.data.code === '200') {
            this.form = response.data.data
          }
        })
    } else {
      this.form.companyuserid = '0'
    }
  },
  created() {
    this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  methods: {
    getFor(value, name, type, remove) {
      if (!name) {
        Object.assign(this.form, value)
      } else if (type === 'checkbox') {
        if (value) {
          this.form[name].push(value)
        } else {
          this.form[name].splice(this.form[name].indexOf(remove), 1)
        }
      } else {
        this.form[name] = value
      }
      console.log(this.form.select_chec)
    },

    createUser() {
      this.$refs.createUser.validate().then(success => {
        if (success) {
          const data = this.form
          if (data.companyuserid === '0') {
            store.dispatch('CompanyuserManage/createUser', data).then(response => {
              if (response.data.code === '200') {
                this.$toast({
                  component: ToastificationContent,
                  position: 'top-right',
                  props: {
                    title: `${response.data.msg.replace('message.', '')}`,
                    icon: 'Success',
                    variant: 'success',
                    text: '',
                  },
                })
                this.$router.push('/company/users-list')
              }
            })
          } else {
            store.dispatch('CompanyuserManage/updateUser', this.form).then(response => {
              if (response.data.code === '200') {
                this.$toast({
                  component: ToastificationContent,
                  position: 'top-right',
                  props: {
                    title: `${response.data.msg.replace('message.', '')}`,
                    icon: 'Success',
                    variant: 'success',
                    text: '',
                  },
                })
                this.$router.push('/company/users-list')
              }
            })
          }
        }
      })
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#profile_photo_preview{
    text-align: center;
}
#profile_photo_preview img{
    padding: 10px;
    max-height: 164px;
    width: auto;
}
@media (max-width: 400px){
  #profile_photo_preview img{
    width: 100%;
}
}
</style>
