<template>
  <b-col xl="12">

    <b-card>
      <b-card-title class="">
        Lead Details
      </b-card-title>
      <b-row>
        <b-col cols="6">
          <b-row class="mx-0">
            <!-- Conpany-->
            <b-col cols="6">
              <b-form-group
                label="Company"
                label-for="vi-company"
                class=""
              >
                <validation-provider
                  #default="{ errors }"
                  name="Comapny"
                  vid="vi-company"
                  rules=""
                >
                  <b-form-radio
                    v-model="form.lead_generation_type"
                    name="company-individual"
                    value="1"
                    @change="handleForm"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <!-- Individual -->
            <b-col cols="6">
              <b-form-group
                label="Individual"
                label-for="vi-individual"
                class=""
              >
                <validation-provider
                  #default="{ errors }"
                  name="Individual"
                  vid="vi-individual"
                  rules=""
                >
                  <b-form-radio
                    v-model="form.lead_generation_type"
                    name="company-individual"
                    value="2"
                    @change="handleForm"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Select -->
          <b-col cols="12">
            <b-form-group
              :label="form.company_individual_select"
              label-for="vi-company-individual-select"
              class="required"
            >
              <validation-provider
                #default="{ errors }"
                name="company Individual Select"
                vid="vi-company_individual_select"
                rules="required"
              >
                <b-input-group class="input-group-merge">
                  <!-- <v-select
                  v-model="form.reporting_person"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  placeholder=""
                  :options="[]"
                  @change="handleForm"
                /> -->
                  <vue-autosuggest
                    ref="company_select"
                    v-model="form.vendor_name"
                    :disabled="company_select_disable"
                    :suggestions="suggestions"
                    :input-props="{id: 'autosuggest__input_ajax',
                                   placeholder: 'Enter/Select',
                                   class: 'form-control',}"
                    :render-suggestion="renderSuggestion"
                    @selected="change_autosuggest"
                    @input="fetchResults"
                  />
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <!-- Select Customer_type -->
          <b-col cols="12">
            <b-form-group
              label="Customer type"
              label-for="vi-Customer_type"
              class="required"
            >
              <validation-provider
                #default="{ errors }"
                name="Customer_type"
                vid="vi-Customer_type"
                rules="required"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.customer_type_id"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="customer_type"
                    placeholder=""
                    :reduce="ct => ct.id"
                    :options="customer_type_list"
                    @change="handleForm"
                  />
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <!-- Address -->
          <b-col cols="12">
            <b-form-group
              label="Address"
              label-for="vi-address"
              class="required"
            >
              <validation-provider
                #default="{ errors }"
                name="Address Line 1"
                vid="vi-address"
                rules="required"
              >
                <b-input-group class="input-group-merge">
                  <GmapAutocomplete
                    class="form-control"
                    @place_changed="setPlace"
                  />

                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

          <b-row class="mx-0">
            <!-- Country -->
            <b-col cols="6">
              <b-form-group
                label="Country"
                label-for="vi-Country"
                class="required"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Country"
                  vid="vi-Country"
                  rules="required"
                >
                  <b-input-group class="input-group-merge">
                    <b-form-input
                      id="vi-Country"
                      v-model="form.country"
                      type="text"
                      placeholder="Country"
                      @change="handleForm"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <!-- State -->
            <b-col cols="6">
              <b-form-group
                label="State"
                label-for="vi-State"
                class="required"
              >
                <validation-provider
                  #default="{ errors }"
                  name="State"
                  vid="vi-State"
                  rules="required"
                >
                  <b-input-group class="input-group-merge">
                    <b-form-input
                      id="vi-State"
                      v-model="form.state"
                      type="text"
                      placeholder="State"
                      @change="handleForm"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <!-- City -->
            <b-col cols="6">
              <b-form-group
                label="City"
                label-for="vi-City"
                class="required"
              >
                <validation-provider
                  #default="{ errors }"
                  name="City"
                  vid="vi-City"
                  rules="required"
                >
                  <b-input-group class="input-group-merge">
                    <b-form-input
                      id="vi-City"
                      v-model="form.city"
                      type="text"
                      placeholder="City"
                      @change="handleForm"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

            <!-- zipcode -->
            <b-col cols="6">
              <b-form-group
                label="Zip code"
                label-for="vi-zipcode"
                class="required"
              >
                <validation-provider
                  #default="{ errors }"
                  name="Zip code"
                  vid="vi-zipcode"
                  rules="required"
                >
                  <b-input-group class="input-group-merge">
                    <b-form-input
                      id="vi-zipcode"
                      v-model="form.zipcode"
                      type="text"
                      placeholder="Zip Code"
                      @change="handleForm"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>
            <!-- LandLine -->
            <b-col cols="12">
              <b-form-group
                label="Landline"
                label-for="vi-Landline"
                class=""
              >
                <validation-provider
                  #default="{ errors }"
                  name="Landline"
                  vid="vi-Landline"
                  rules=""
                >
                  <b-input-group class="input-group-merge">
                    <b-form-input
                      id="vi-Landline"
                      v-model="form.landline"
                      type="text"
                      placeholder="Landline"
                      @change="handleForm"
                    />
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
            </b-col>

          </b-row>
          <!-- Website -->
          <b-col cols="12">
            <b-form-group
              label="Website"
              label-for="vi-Website"
              class=""
            >
              <validation-provider
                #default="{ errors }"
                name="Website"
                vid="vi-Website"
                rules="url"
              >
                <b-input-group class="input-group-merge">
                  <b-form-input
                    id="vi-Website"
                    v-model="form.website"
                    type="text"
                    placeholder="Website"
                    @change="handleForm"
                  />
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>

        </b-col>
        <b-col cols="6">
          <GmapMap
            :center="center"
            :zoom="12"
            style="width: 100%; height: 400px; margin-top: 20px"
          >
            <GmapMarker
              v-for="(m, index) in markers"
              :key="index"
              :position="m.position"
              @click="center = m.position"
            />
          </GmapMap>
        </b-col>
      </b-row>
    </b-card>
  </b-col>

</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest'
import vSelect from 'vue-select'
import { ValidationProvider } from 'vee-validate'
import {
  BCard, BCol, BFormRadio, BRow, BFormGroup, BInputGroup, BCardTitle, BFormInput,
} from 'bootstrap-vue'
import { required } from '@validations'
import Ripple from 'vue-ripple-directive'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store'
// import LoginDetails from './CreateUserForm/LoginDetails.vue'

export default {
  name: 'ReportTo',
  components: {
    VueAutosuggest,
    vSelect,
    BFormInput,
    BFormRadio,
    BCardTitle,
    BRow,
    ValidationProvider,
    BCol,
    BFormGroup,
    BInputGroup,
    BCard,

  },
  directives: {
    Ripple,
  },
  mixins: [togglePasswordVisibility],
  props: ['req', 'editdata'],
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [],
      company_select_disable: true,
      required,
      suggestions: [],
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {
        company_individual: '',
        vendor_name: '',
        zipcode: '',
        company_individual_select: 'Company/Individual',
        latitude: '',
        longitude: '',
        city: '',
        state: '',
        country: '',

      },
      customer_type_list: [],
      statusOptions: [
        {
          title: 'Active',
          value: 'A',
        },
        {
          title: 'In-Active',
          value: 'I',
        },
      ],
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
    store.dispatch('ManageLeads/getCustomersTypeList')
      .then(response => {
        if (response.data.code === '200') {
          this.customer_type_list = response.data.data
        }
      })
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place
      console.log(place)
      this.form.address = place.formatted_address
      this.form.address_line_2 = ''
      this.form.city = ''
      this.form.state = ''
      this.form.country = ''
      this.form.zipcode = ''
      this.form.latitude = place.geometry.location.lat()
      this.form.longitude = place.geometry.location.lng()
      place.address_components.forEach(address => {
        if (address.types.includes('postal_code')) {
          this.form.zipcode = address.long_name
        }
        if (address.types.includes('administrative_area_level_1')) {
          this.form.state = address.long_name
        }
        if (address.types.includes('locality')) {
          this.form.city = address.long_name
        }
        if (address.types.includes('country')) {
          this.form.country = address.long_name
        }
      })
      this.addMarker()
      this.$emit('getCreateLead', this.form)
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        }
        this.markers.push({ position: marker })
        this.center = marker
        this.currentPlace = null
      }
    },
    handleForm() {
      if (this.form.lead_generation_type === '1') {
        this.form.company_individual_select = 'Company'
        this.company_select_disable = false
      } else {
        this.form.company_individual_select = 'Title'
        this.company_select_disable = false
      }
      this.$emit('getCreateLead', this.form)
    },
    fetchResults() {
      if (this.form.vendor_name.length >= 3) {
        store.dispatch('ManageLeads/getVendors', { keyword: this.form.vendor_name, lead_generation_type: this.form.lead_generation_type })
          .then(response => {
            if (response.data.code === '200') {
              this.suggestions = []
              this.form.vendor_id = ''
              this.suggestions.push({ data: response.data.data })
              this.$emit('getCreateLead', this.form)
            }
          })
      }
    },
    change_autosuggest(val) {
      this.form.vendor_id = val.item.id
      this.form.vendor_name = val.item.name
      this.$emit('getCreateLead', this.form)
    },
    renderSuggestion(suggestion) {
      return suggestion.item.name
    },
  },
}
</script>

<style>
</style>
