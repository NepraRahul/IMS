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
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!--State -->
        <b-col cols="6">
          <b-form-group
            label="State"
            label-for="vi-state"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="State"
              vid="vi-state"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MapPinIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-state"
                  v-model="form.state"
                  type="text"
                  placeholder="State"
                />
                <!-- <v-select
                  v-model="form.stateSelected"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  placeholder="Select State"
                  :options="[]"
                /> -->
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
// import vSelect from 'vue-select'
import { ValidationProvider } from 'vee-validate'
import {
  BCard, BCol, /* BForm, */ BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BCardTitle,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
// import LoginDetails from './CreateUserForm/LoginDetails.vue'

export default {
  name: 'UserDetails',
  components: {
    // vSelect,
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
  mounted() {
  },
}
</script>

<style>

</style>
