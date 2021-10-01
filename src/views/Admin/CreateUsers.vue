<template>
  <b-form @submit.prevent="createCompany">
    <b-row>
      <b-col xl="6">
        <b-card>
          <b-card-title class="mb-1">
            Login Details
          </b-card-title>
          <b-row>
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
                label="Base Location"
                label-for="vi-base-location"
              >
                <b-input-group class="input-group-merge">
                  <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="MapPinIcon" />
                  </b-input-group-prepend> -->
                  <v-select
                    v-model="form.selectedBase"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder="Select Location"
                    :options="baseLocation"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Owner Name -->
            <b-col cols="6">
              <b-form-group
                label="City"
                label-for="vi-city"
              >
                <b-input-group class="input-group-merge">
                  <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="SmartphoneIcon" />
                  </b-input-group-prepend> -->
                  <v-select
                    v-model="form.selectedCity"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder="Select City"
                    :options="city"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- password -->
            <b-col cols="12">
              <b-form-group
                label="Assign Base Locations"
                label-for="vi-assign-base-location"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.selectedCity"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    multiple
                    placeholder="Select City"
                    :options="city"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- MRF List -->
            <b-col cols="6">
              <b-form-group
                label="MRF List"
                label-for="vi-mrf-list"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.selectedCity"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder="Select MRF"
                    :options="city"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- OTP Login -->
            <b-col cols="3">
              <b-form-group
                label="OTP Login"
                label-for="vi-otp-login"
              >
                <b-form-checkbox
                  v-model="form.otp_login"
                  checked="true"
                  name="check-button"
                  switch
                  inline
                />
              </b-form-group>
            </b-col>
            <!-- face Login -->
            <b-col cols="3">
              <b-form-group
                label="Face Login"
                label-for="vi-face-login"
              >
                <b-form-checkbox
                  v-model="form.face_login"
                  checked="true"
                  name="face-login"
                  switch
                  inline
                />
              </b-form-group>
            </b-col>
            <!-- Assign MRF Locations -->
            <b-col cols="12">
              <b-form-group
                label="Assign MRF Locations"
                label-for="vi-assign-mrf"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.selectedCity"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder="Assign MRF"
                    :options="city"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- Status -->
            <b-col
              cols="6"
              class="p-0"
            >
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
              <b-col cols="12">
                <b-form-group
                  label="Confirm Password"
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
              <b-col cols="12">
                <b-form-group
                  label="User Type"
                  label-for="vi-user-type"
                >
                  <b-input-group class="input-group-merge">
                    <v-select
                      v-model="form.userType"
                      class="form-control p-0 border-0"
                      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                      label="title"
                      placeholder="Select Country"
                      :options="country"
                    />
                  </b-input-group>
                </b-form-group>
              </b-col>
              <b-col cols="12">
                <b-form-group
                  label="CFM Code"
                  label-for="vi-cfm-code"
                >
                  <b-input-group class="input-group-merge">
                    <b-input-group-prepend is-text>
                      <feather-icon icon="ClockIcon" />
                    </b-input-group-prepend>
                    <b-form-input
                      id="vi-cfm-code"
                      v-model="form.cfmCode"
                      type="text"
                      placeholder="CFM Code"
                    />
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-col>

            <b-col
              cols="6"
              class="p-0"
            >
              <b-col cols="12">
                <b-form-group
                  label="Profile Photo"
                  label-for="vi-profile-photo"
                >
                  <div
                    v-if="form.profile_photo"
                    id="profile_photo_preview"
                  >
                    <img
                      :src="form.profile_photo"
                      max-height="220"
                      alt=""
                    >
                  </div>
                  <b-input-group class="input-group-merge">
                    <b-form-file
                      id="vi-profile-photo"
                      v-model="form.profile_pic"
                      accept="image/*"
                      type="file"
                      @change="getprofile"
                    />
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

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
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="UserIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-first-name"
                    v-model="form.first_name"
                    type="text"
                    placeholder="First Name"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Last Name -->
            <b-col cols="6">
              <b-form-group
                label="Last Name"
                label-for="vi-last-name"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="UserIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-last-name"
                    v-model="form.last_name"
                    type="text"
                    placeholder="Last Name"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Address Line 1 -->
            <b-col cols="12">
              <b-form-group
                label="Address Line 1"
                label-for="vi-address-line1"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="BriefcaseIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-address-line1"
                    v-model="form.address_line1"
                    type="text"
                    placeholder="Address Line 1"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Address Line 2 -->
            <b-col cols="12">
              <b-form-group
                label="Address Line 2"
                label-for="vi-address-line2"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="BriefcaseIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-address-line2"
                    v-model="form.address_line2"
                    type="text"
                    placeholder="Address Line 2"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- email -->
            <b-col cols="6">
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

            <b-col cols="6">
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
            <!--State -->
            <b-col cols="6">
              <b-form-group
                label="State"
                label-for="vi-state"
              >
                <b-input-group class="input-group-merge">
                  <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="MailIcon" />
                  </b-input-group-prepend> -->
                  <v-select
                    v-model="form.stateSelected"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder="Select State"
                    :options="state"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
            <!-- zip -->
            <b-col cols="6">
              <b-form-group
                label="Zip"
                label-for="vi-zip"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="MapPinIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-zip"
                    v-model="form.mobile"
                    type="text"
                    placeholder="Zip"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col xl="6">

        <b-card>
          <b-card-title class="">
            Report To
          </b-card-title>
          <b-row>
            <!-- Report To -->
            <b-col cols="12">
              <b-form-group
                label="Report To"
                label-for="vi-report-to"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.report_to"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder=""
                    :options="report_to"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Reporting Person -->
            <b-col cols="12">
              <b-form-group
                label="Reporting Person"
                label-for="vi-reporting-person"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.reporting_person"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder=""
                    :options="reporting_person"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Visible -->
            <b-col cols="12">
              <b-form-group
                label="Visible"
                label-for="vi-visible"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.visible"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder=""
                    :options="visible"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Status -->
            <b-col cols="12">
              <b-form-group
                label="Status"
                label-for="vi-status"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.status"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder=""
                    :options="status"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

          </b-row>
        </b-card>
      </b-col>
      <b-col xl="6">

        <b-card>
          <b-card-title class="mb-Login">
            Other Details
          </b-card-title>
          <b-row>
            <!-- Task Group -->
            <b-col cols="12">
              <b-form-group
                label="Task Group"
                label-for="vi-task-group"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.task_group"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="title"
                    placeholder=""
                    multiple
                    :options="task_group"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- IMEI Code -->
            <b-col cols="6">
              <b-form-group
                label="IMEI Code"
                label-for="vi-imei-code"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SmartphoneIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-imei-code"
                    v-model="form.imei_code"
                    type="text"
                    placeholder="IMEI Code"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Net Suit Code -->
            <b-col cols="6">
              <b-form-group
                label="Net Suit Code"
                label-for="vi-net-suit-code"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="BriefcaseIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-net-suit-code"
                    v-model="form.net_suit_code"
                    type="text"
                    placeholder="Net Suit Code"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Collection Rate/Kg -->
            <b-col cols="4">
              <b-form-group
                label="Collection Rate/Kg"
                label-for="vi-phone-residence"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="DatabaseIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-phone-residence"
                    v-model="form.collection_rate"
                    type="number"
                    placeholder="Collection Rate/Kg"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Dispatch Rate/Kg -->
            <b-col cols="4">
              <b-form-group
                label="Dispatch Rate/Kg"
                label-for="vi-dispatch-rate"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="MailIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-dispatch-rate"
                    v-model="form.dispatch_rate"
                    type="number"
                    placeholder="Dispatch Rate/Kg"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Transfer Rate -->
            <b-col cols="4">
              <b-form-group
                label="Transfer Rate"
                label-for="vi-transfer-rate"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="Minimize2Icon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-transfer-rate"
                    v-model="form.transfer_rate"
                    type="text"
                    placeholder="Transfer Rate"
                  />
                </b-input-group>
              </b-form-group>
            </b-col>

            <!-- Add Customer(in App) -->
            <b-col cols="6">
              <b-form-group
                label=""
                label-for="vi-add-customer"
              >
                <b-form-checkbox
                  v-model="form.add_customer"
                  class="custom-control-success"
                >
                  Add Customer(in App)
                </b-form-checkbox>
              </b-form-group>
            </b-col>

            <!-- Is Account Manager -->
            <b-col cols="6">
              <b-form-group
                label=""
                label-for="vi-is-account-manager"
              >
                <b-form-checkbox
                  v-model="form.is_account_manager"
                  class="custom-control-success"
                >
                  Is Account Manager
                </b-form-checkbox>
              </b-form-group>
            </b-col>

          </b-row>
        </b-card>
      </b-col>
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
</template>

<script>
import vSelect from 'vue-select'
import {
  BCard, BCol, BForm, BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BButton, BFormCheckbox, BCardTitle, BFormFile, BInputGroupAppend,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

export default {
  name: 'CreateCompany',
  components: {
    vSelect,
    BInputGroupAppend,
    BFormFile,
    BCardTitle,
    BFormCheckbox,
    BRow,
    BButton,
    BCol,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BCard,
    BForm,
  },
  directives: {
    Ripple,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {
        selectedBase: [],
        username: '',
        company_name: '',
        owner_name: '',
        password: '',
        c_password: '',
        email: '',
        mobile: '',
        status: '',
        address_line1: '',
        address_line2: '',
        phone_office: '',
        phone_resident: '',
        fax: '',
        zip: '',
        countrySelected: '',
        stateSelected: '',
        citySelected: '',
        assignedSelected: [],
        net_suit: false,
        profile_photo: 'https://staging-lr.yugtia.com/assets/images/users/1.jpg',

      },

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
      baseLocation: [
        { title: 'Indore' },
        { title: 'Ahmedabad' },
      ],
    //   codeVerticalIcon,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  created() {
    this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  methods: {
    getprofile(event) {
      if (event.target.files.length > 0) this.form.profile_photo = URL.createObjectURL(event.target.files[0])
      else this.form.profile_photo = 'https://staging-lr.yugtia.com/assets/images/users/1.jpg'
    },
    createCompany() {
      console.log(this.form)
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
    max-height: 220px;
}
</style>
