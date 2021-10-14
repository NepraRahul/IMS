<template>
  <b-col xl="6">

    <b-card>
      <b-card-title class="mb-1">
        Contact Details
      </b-card-title>
      <b-row>
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
                  <feather-icon icon="UserIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-address-line1"
                  v-model="form1.address1"
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
              name="Address Line 2"
              vid="vi-address-line2"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="BriefcaseIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-address-line2"
                  v-model="form1.address2"
                  type="text"
                  placeholder="Address Line 2"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Phone (O) -->
        <b-col cols="6">
          <b-form-group
            label="Phone (O)"
            label-for="vi-phone-office"
          >
            <validation-provider
              #default="{ errors }"
              name="Phone Office"
              vid="vi-phone-office"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="SmartphoneIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-phone-office"
                  v-model="form1.phone_office"
                  type="number"
                  placeholder="Phone Office"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Phone (R) -->
        <b-col cols="6">
          <b-form-group
            label="Phone (R)"
            label-for="vi-phone-residence"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Phone Residence"
              vid="vi-phone-residence"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="PhoneIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-phone-residence"
                  v-model="form1.phone_home"
                  type="number"
                  placeholder="Phone (R)"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Fax -->
        <b-col cols="6">
          <b-form-group
            label="Fax"
            label-for="vi-fax"
          >
            <validation-provider
              #default="{ errors }"
              name="Fax"
              vid="vi-fax"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="MailIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-fax"
                  v-model="form1.fax"
                  type="text"
                  placeholder="Fax"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Zip Code"
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
                  v-model="form1.zipcode"
                  type="text"
                  placeholder="Zip Code"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!--Country -->
        <b-col cols="12">
          <b-form-group
            label="Country"
            label-for="vi-country"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Country"
              vid="vi-country"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="MailIcon" />
                  </b-input-group-prepend> -->
                <v-select
                  v-model.number="form1.country"
                  :options="country"
                  label="country_name"
                  :selected="form1.country"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  placeholder="Select Country"
                  :reduce="c => c.country_id"
                  :disabled="countryDisabled"
                  @change="handleForm"
                  @input="countrySelected"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- State -->
        <b-col cols="12">
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
                <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="SmartphoneIcon" />
                  </b-input-group-prepend> -->
                <v-select
                  v-model.number="form1.state"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  placeholder="Select State"
                  :options="state"
                  label="state_name"
                  :reduce="s => s.state_id"
                  :disabled="stateDisabled"
                  @change="handleForm"
                  @input="stateSelected"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- City -->
        <b-col cols="12">
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
                    <feather-icon icon="ClockIcon" />
                  </b-input-group-prepend> -->
                <v-select
                  v-model.number="form1.city"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="city"
                  :reduce="city => city.location_id"
                  :disabled="cityDisabled"
                  placeholder="Select City"
                  :options="city"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group
            label="Assigned City"
            label-for="vi-assigned-city"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Assign City"
              vid="vi-assigned-city"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="ClockIcon" />
                  </b-input-group-prepend> -->
                <v-select
                  v-model="form1.assigned_city"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  multiple
                  placeholder="Select Assigned City"
                  :options="assignCities"
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
import { ValidationProvider } from 'vee-validate'
import vSelect from 'vue-select'
import {
  BCard, BCol, BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BCardTitle,
} from 'bootstrap-vue'
import store from '../../../../store'

export default {
  components: {
    BRow, BCol, BCard, BFormGroup, BInputGroup, BInputGroupPrepend, BCardTitle, BFormInput, vSelect, ValidationProvider,
  },
  props: ['form', 'req'],
  data() {
    return {
      country: [],
      state: [],
      city: [],
      assignCities: [],
      form1: {

      },
      countryDisabled: true,
      stateDisabled: true,
      cityDisabled: true,
      selectedPlaces: [],
    }
  },
  watch: {
    form(newVal) {
      const c = parseInt(newVal.country, 10)
      this.form1 = newVal
      this.form1.country = c
      if (!this.req) {
        this.countrySelected()
        this.stateSelected()
        const s = parseInt(newVal.state, 10)
        const cit = parseInt(newVal.city, 10)
        this.form1.state = s
        this.form1.city = cit
        this.cityDisabled = false
      }
    },
  },
  mounted() {
    this.getCountry()
  },
  methods: {
    handleForm() {
      this.$emit('getform', this.form1)
    },
    getCountry() {
      store.dispatch('getCountryList/getCountryList')
        .then(response => {
          if (response.data.code === '200') {
            this.country = response.data.data
            this.countryDisabled = false
            this.cityDisabled = true
            this.stateDisabled = true
          }
        })
    },
    countrySelected() {
      const { country } = this.form1
      store.dispatch('getCountryList/getStateList', { country_id: country })
        .then(response => {
          if (response.data.code === '200') {
            this.state = response.data.data
            this.cityDisabled = true
            this.stateDisabled = false
          }
        })
    },
    stateSelected() {
      const { state } = this.form1
      store.dispatch('getCountryList/getCityList', { state_id: state })
        .then(response => {
          if (response.data.code === '200') {
            this.city = response.data.data
            console.log(response.data.data)
            this.cityDisabled = false
          }
        })
    },
  },
}
</script>

<style>

</style>
