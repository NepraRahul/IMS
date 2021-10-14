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
                  v-model="form1.module_ids"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  multiple
                  label="module_title"
                  :reduce="mod => mod.module_id"
                  placeholder="Select Module"
                  :disabled="moduleDisabled"
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
            class="required"
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
            class="required"
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
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Owner Name"
              vid="vi-ownername"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="SmartphoneIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-owner-name"
                  v-model="form1.company_owner_name"
                  type="text"
                  placeholder="Owner Name"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- password -->
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="vi-password"
            :class="req ? 'required' : ''"
          >
            <validation-provider
              #default="{ errors }"
              name="Password"
              vid="vi-password"
              :rules="req ? 'required|min:8|password' : ''"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="LockIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-password"
                  v-model="form1.password"
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
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Confirm password -->
        <b-col cols="12">
          <b-form-group
            label="Confirm Password"
            label-for="vi-confirm-password"
            :class="req ? 'required' : ''"
          >
            <validation-provider
              #default="{ errors }"
              name="Confirm Password"
              vid="vi-confirm-password"
              :rules="req ? 'required|confirmed:vi-password' : ''"
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
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- GST -->
        <b-col cols="12">
          <b-form-group
            label="GST No."
            label-for="vi-gst-no"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="GST No."
              vid="vi-gst_no"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <!-- <b-input-group-prepend is-text>
                  <feather-icon icon="MailIcon" />
                </b-input-group-prepend> -->
                <b-form-input
                  id="vi-gst-no"
                  v-model="form1.gst_no"
                  type="text"
                  placeholder="GSTIN"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- PAN  -->
        <b-col cols="12">
          <b-form-group
            label="PAN"
            label-for="vi-pan"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="PAN"
              vid="vi-pan"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <!-- <b-input-group-prepend is-text>
                  <feather-icon icon="MailIcon" />
                </b-input-group-prepend> -->
                <b-form-input
                  id="vi-pan"
                  v-model="form1.pan"
                  type="text"
                  placeholder="PAN No."
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- CIN -->
        <b-col cols="12">
          <b-form-group
            label="CIN No."
            label-for="vi-cin-no"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="PAN"
              vid="vi-cin-no"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <!-- <b-input-group-prepend is-text>
                  <feather-icon icon="MailIcon" />
                </b-input-group-prepend> -->
                <b-form-input
                  id="vi-cin-no"
                  v-model="form1.cin_no"
                  type="text"
                  placeholder="CIN No."
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- Email -->
        <b-col cols="4">
          <b-form-group
            label="Email"
            label-for="vi-email"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Email"
              vid="vi-email"
              rules="required|email"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MailIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-email"
                  v-model="form1.company_email"
                  type="email"
                  placeholder="Email"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- Mobile -->
        <b-col cols="4">
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
                  v-model="form1.mobile"
                  type="number"
                  placeholder="Mobile"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- Status -->
        <b-col cols="4">
          <b-form-group
            label="Status"
            label-for="vi-status"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Status"
              vid="vi-status"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <v-select
                  id="vi-status"
                  v-model="form1.status"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :reduce="mod => mod.value"
                  placeholder="Select Status"
                  :options="statusOption"
                  @input="handleForm"
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
import { ValidationProvider } from 'vee-validate'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import vSelect from 'vue-select'
import { required, email, password } from '@validations'
import {
  BCard, BCol, BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BCardTitle, BInputGroupAppend,
} from 'bootstrap-vue'
import store from '../../../../store'

export default {
  components: {
    BCard, BCol, BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BCardTitle, vSelect, BInputGroupAppend, ValidationProvider,
  },
  mixins: [togglePasswordVisibility],
  // eslint-disable-next-line vue/require-prop-types
  props: ['form', 'errors', 'req'],
  data() {
    return {
      required,
      email,
      password,
      form1: {

      },
      statusOption: [
        {
          title: 'Active',
          value: 'A',
        },
        {
          title: 'In-Active',
          value: 'I',
        },
      ],
      modulesOption: [],
      moduleDisabled: true,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  watch: {
    form(newVal) {
      this.form1 = newVal
    },
  },
  mounted() {
    store.dispatch('getCountryList/getModuleList')
      .then(response => {
        if (response.data.code === '200') {
          this.modulesOption = response.data.data
          this.moduleDisabled = false
        }
      })
  },
  methods: {
    handleForm() {
      this.$emit('getform', this.form1)
    },
  },
}
</script>

<style>

</style>
