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
          >
            <b-input-group class="input-group-merge">
              <!-- <b-input-group-prepend is-text>
                  <feather-icon icon="UserIcon" />
                </b-input-group-prepend> -->
              <v-select
                v-model="form.selectedModule"
                class="form-control p-0 border-0"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                label="title"
                placeholder="Select Module"
                :options="modulesOption"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <!-- Username -->
        <b-col cols="12">
          <b-form-group
            label="Username"
            label-for="vi-user-name"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="UserIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-user-name"
                v-model="form.username"
                required
                placeholder="Username"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <!-- Company Name -->
        <b-col cols="6">
          <b-form-group
            label="Company Name"
            label-for="vi-company-name"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="BriefcaseIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-company-name"
                v-model="form.company_name"
                type="text"
                placeholder="Company Name"
              />
            </b-input-group>
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
                v-model="form.owner_name"
                type="text"
                placeholder="Owner Name"
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
                v-model="form.passowrd"
                :type="passwordFieldType"
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
                v-model="form.c_password"
                :type="passwordFieldType"
                class="form-control-merge"
                placeholder="Confirm Password"
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
                v-model="form.email"
                type="email"
                placeholder="Email"
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
                v-model="form.mobile"
                type="number"
                placeholder="Mobile"
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
                v-model="form.status"
                type="text"
                placeholder="Status"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
import vSelect from 'vue-select'
import {
  BCard, BCol, BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BCardTitle, BInputGroupAppend,
} from 'bootstrap-vue'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

export default {
  components: {
    vSelect,
    BInputGroupAppend,
    BCardTitle,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BCard,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      form: {},
      assignCities: [
        { title: 'India' },
        { title: 'Nepal' },
      ],
      country: [
        { title: 'India' },
        { title: 'Nepal' },
      ],
      state: [
        { title: 'J&K' },
        { title: 'Gujarat' },
      ],
      city: ['Jammu', 'Ahmedabad'],
      modulesOption: [
        { title: 'CFM' },
        { title: 'EPR' },
        { title: 'LR' },
        { title: 'RR' },
      ],
    //   codeVerticalIcon,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
}
</script>

<style>

</style>
