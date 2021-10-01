<template>
  <b-col xl="6">
    <b-card>
      <b-card-title class="mb-1">
        Company Details
      </b-card-title>
      <b-row>
        <!-- Select Module -->
        <b-col cols="12">
          <b-form-group
            label="Module"
            label-for="vi-module"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Module"
              vid="vi-module"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <!-- <b-input-group-prepend is-text>
                  <feather-icon icon="UserIcon" />
                </b-input-group-prepend> -->
                <v-select
                  id="vi-module"
                  v-model="form1.selectedModule"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  multiple
                  label="title"
                  placeholder="Select Module"
                  :options="modulesOption"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- Username -->
        <b-col cols="12">
          <b-form-group
            label="Username"
            label-for="vi-user-name"
          >
            <validation-provider
              #default="{ errors }"
              name="Username"
              vid="vi-username"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="UserIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-username"
                  v-model="form1.username"
                  placeholder="Username"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Company Name -->
        <b-col cols="6">
          <b-form-group
            label="Company Name"
            label-for="vi-company-name"
          >
            <validation-provider
              #default="{ errors }"
              name="Company Name"
              vid="vi-company-name"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="BriefcaseIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-company-name"
                  v-model="form1.company_name"
                  type="text"
                  placeholder="Company Name"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Owner Name -->
        <b-col cols="6">
          <b-form-group
            label="Owner Name"
            label-for="vi-owner-name"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SmartphoneIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-owner-name"
                v-model="form1.owner_name"
                type="text"
                placeholder="Owner Name"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <!-- password -->
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="vi-password"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="LockIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-password"
                v-model="form1.passowrd"
                :type="passwordFieldType"
                placeholder="Password"
                @change="handleForm"
              />
              <b-input-group-append is-text>
                <feather-icon
                  class="cursor-pointer"
                  :icon="passwordToggleIcon"
                  @click="togglePasswordVisibility"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>

        <!-- Confirm password -->
        <b-col cols="12">
          <b-form-group
            label="Confirm Password"
            label-for="vi-confirm-password"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="LockIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-confirm-password"
                v-model="form1.c_password"
                :type="passwordFieldType"
                class="form-control-merge"
                placeholder="Confirm Password"
                @change="handleForm"
              />
              <b-input-group-append is-text>
                <feather-icon
                  class="cursor-pointer"
                  :icon="passwordToggleIcon"
                  @click="togglePasswordVisibility"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <!-- Email -->
        <b-col cols="4">
          <b-form-group
            label="Email"
            label-for="vi-email"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="MailIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-email"
                v-model="form1.email"
                type="email"
                placeholder="Email"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <!-- Mobile -->
        <b-col cols="4">
          <b-form-group
            label="Mobile"
            label-for="vi-mobile"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SmartphoneIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-mobile"
                v-model="form1.mobile"
                type="number"
                placeholder="Mobile"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <!-- Status -->
        <b-col cols="4">
          <b-form-group
            label="Status"
            label-for="vi-status"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="ClockIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-status"
                v-model="form1.status"
                type="text"
                placeholder="Status"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import vSelect from 'vue-select'
import { required } from '@validations'
import {
  BCard, BCol, BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BCardTitle, BInputGroupAppend,
} from 'bootstrap-vue'

export default {
  components: {
    BCard, BCol, BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BCardTitle, vSelect, BInputGroupAppend, ValidationProvider,
  },
  mixins: [togglePasswordVisibility],
  // eslint-disable-next-line vue/require-prop-types
  props: ['value', 'errors'],
  data() {
    return {
      required,
      form1: {

      },
      modulesOption: [
        { title: 'CFM' },
        { title: 'EPR' },
        { title: 'LR' },
        { title: 'RR' },
      ],
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  watch: {
    value(val) {
      if (!val) return
      this.setCurrentValue(val)
    },
  },
  methods: {
    handleForm() {
      this.$emit('getform', this.form1)
    },
    setCurrentValue(form) {
    //   console.log(form)
      this.form1 = form
    },
  },
}
</script>

<style>

</style>
