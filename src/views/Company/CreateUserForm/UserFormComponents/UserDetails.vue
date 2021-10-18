<template>
  <b-col xl="6">

    <b-card>
      <b-card-title class="mb-Login">
        User Details
      </b-card-title>
      <b-row>
        <!-- First Name -->
        <b-col cols="6">
          <b-form-group
            label="First Name"
            label-for="vi-first-name"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="First Name"
              vid="vi-first-name"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="UserIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-first-name"
                  v-model="form.firstname"
                  type="text"
                  placeholder="First Name"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Last Name -->
        <b-col cols="6">
          <b-form-group
            label="Last Name"
            label-for="vi-last-name"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Last Name"
              vid="vi-last-name"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="UserIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-last-name"
                  v-model="form.lastname"
                  type="text"
                  placeholder="Last Name"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Address Line 1 -->
        <b-col cols="12">
          <b-form-group
            label="Address Line 1"
            label-for="vi-address-line1"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Address Line 1"
              vid="vi-address-line1"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="BriefcaseIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-address-line1"
                  v-model="form.address1"
                  type="text"
                  placeholder="Address Line 1"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Address Line 2 -->
        <b-col cols="12">
          <b-form-group
            label="Address Line 2"
            label-for="vi-address-line2"
          >
            <validation-provider
              #default="{ errors }"
              name="Address Line2"
              vid="vi-address-line2"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="BriefcaseIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-address-line2"
                  v-model="form.address2"
                  type="text"
                  placeholder="Address Line 2"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- email -->
        <b-col cols="6">
          <b-form-group
            label="Email"
            label-for="vi-email"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Email"
              vid="vi-email"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MailIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-email"
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Mobile"
            label-for="vi-mobile"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Mobile"
              vid="vi-mobile"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="SmartphoneIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-mobile"
                  v-model="form.mobile"
                  type="number"
                  placeholder="Mobile"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!--State -->
        <b-col cols="6">
          <b-form-group
            label="City"
            label-for="vi-city"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="City"
              vid="vi-city"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <!-- <b-input-group-prepend is-text>
                  <feather-icon icon="MapPinIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-city"
                  v-model="form.city"
                  type="text"
                  placeholder="City"
                  @change="handleForm"
                /> -->
                <v-select
                  v-model="form.city"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="city"
                  :reduce="op => op.location_id"
                  placeholder="Select Status"
                  :options="cityOptions"
                  @search="suggestForm"
                  @input="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- zip -->
        <b-col cols="6">
          <b-form-group
            label="Zip"
            label-for="vi-zip"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Zip"
              vid="vi-zip"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MapPinIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-zip"
                  v-model="form.zip"
                  type="text"
                  placeholder="Zip"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
import vSelect from 'vue-select'
import { ValidationProvider } from 'vee-validate'
import {
  BCard, BCol, /* BForm, */ BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BCardTitle,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
// import LoginDetails from './CreateUserForm/LoginDetails.vue'
import store from '../../../../store'

export default {
  name: 'UserDetails',
  components: {
    vSelect,
    BCardTitle,
    ValidationProvider,
    BRow,
    // BButton,
    BCol,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BCard,
  },
  directives: {
    Ripple,
  },
  mixins: [togglePasswordVisibility],
  props: ['req', 'editdata'],
  data() {
    return {
      cityOptions: [],
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {
        profile_photo: 'https://staging-lr.yugtia.com/assets/images/users/1.jpg',

      },

    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  watch: {
    editdata(newVal) {
      this.form = newVal
    },
  },
  methods: {
    handleForm() {
      this.$emit('getCreateUser', this.form)
    },
    suggestForm(val) {
      store.dispatch('getCountryList/getCityAuto', { city: val }).then(response => {
        if (response.data.code === '200') {
          this.cityOptions = response.data.data
          this.selected = null
        }
      })
    },
  },
}
</script>

<style>

</style>
