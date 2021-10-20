<template>
  <validation-observer
    ref="createLead"
  >
    <b-form @submit.prevent="createLead">
      <b-row>
        <user-details @getCreateLead="getFor" />
        <contact-details @getCreateLead="getFor" />

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
// import LoginDetails from './UserFormComponents/LoginDetails.vue'
// import UserDetails from './UserFormComponents/UserDetails.vue'
// import ReportTo from './UserFormComponents/ReportTo.vue'
import store from '../../../../store'
import ContactDetails from './CreateLeadForm/ContactDetails.vue'
import UserDetails from '@/views/Company/Leads/CreateLeads/CreateLeadForm/UserDetails.vue'

export default {
  name: 'CreateUser',
  components: {
    BRow,
    BButton,
    ContactDetails,
    BCol,
    BForm,
    ValidationObserver,
    UserDetails,
  },
  directives: {
    Ripple,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      req: true,
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      images: [],
      form: {
        lead_generation_type: '',
        vendor_id: '',
        vendor_name: '',
        landline: '',
        website: '',
        customer_type_id: '',
        address: '',
        address_line_2: '',
        landmark: '',
        latitude: '',
        longitude: '',
        contact_data: '',
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
    getFor(value, name, type, remove, index) {
      if (!name) {
        Object.assign(this.form, value)
      } else if (type === 'checkbox') {
        if (value) {
          this.form[name].push(value)
        } else {
          this.form[name].splice(this.form[name].indexOf(remove), 1)
        }
      } else if (name === 'images') {
        if (remove) {
          this.images.splice(this.images.indexOf(remove), 1)
        } else {
          this.images[index] = value
        }
      } else {
        this.form[name] = value
      }
    },

    createLead() {
      this.$refs.createLead.validate().then(success => {
        if (success) {
          const data = this.form
          store.dispatch('ManageLeads/createLead', data).then(response => {
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
              this.$router.push('/leads-list')
            }
          })
        }
      })
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-autosuggest.scss';
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
