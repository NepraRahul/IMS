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
                  v-model="form.address_line1"
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
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="BriefcaseIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-address-line2"
                v-model="form.address_line2"
                type="text"
                placeholder="Address Line 2"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <!-- Phone (O) -->
        <b-col cols="6">
          <b-form-group
            label="Phone (O)"
            label-for="vi-phone-office"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="SmartphoneIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-phone-office"
                v-model="form.phone_office"
                type="number"
                placeholder="Phone Office"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <!-- Phone (R) -->
        <b-col cols="6">
          <b-form-group
            label="Phone (R)"
            label-for="vi-phone-residence"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="PhoneIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-phone-residence"
                v-model="form.phone_resident"
                type="number"
                placeholder="Phone (R)"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <!-- Fax -->
        <b-col cols="6">
          <b-form-group
            label="Fax"
            label-for="vi-fax"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="MailIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-fax"
                v-model="form.fax"
                type="text"
                placeholder="Fax"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Zip Code"
            label-for="vi-zip"
          >
            <b-input-group class="input-group-merge">
              <b-input-group-prepend is-text>
                <feather-icon icon="MapPinIcon" />
              </b-input-group-prepend>
              <b-form-input
                id="vi-zip"
                v-model="form.zip"
                type="text"
                placeholder="Zip Code"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <!--Country -->
        <b-col cols="4">
          <b-form-group
            label="Country"
            label-for="vi-country"
          >
            <b-input-group class="input-group-merge">
              <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="MailIcon" />
                  </b-input-group-prepend> -->
              <v-select
                v-model="form.countrySelected"
                class="form-control p-0 border-0"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                placeholder="Select Country"
                :options="country"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <!-- State -->
        <b-col cols="4">
          <b-form-group
            label="State"
            label-for="vi-state"
          >
            <b-input-group class="input-group-merge">
              <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="SmartphoneIcon" />
                  </b-input-group-prepend> -->
              <v-select
                v-model="form.stateSelected"
                class="form-control p-0 border-0"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                placeholder="Select State"
                :options="state"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>
        <!-- City -->
        <b-col cols="4">
          <b-form-group
            label="City"
            label-for="vi-city"
          >
            <b-input-group class="input-group-merge">
              <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="ClockIcon" />
                  </b-input-group-prepend> -->
              <v-select
                v-model="form.citySelected"
                class="form-control p-0 border-0"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                placeholder="Select City"
                :options="city"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group
            label="Assigned City"
            label-for="vi-assigned-city"
          >
            <b-input-group class="input-group-merge">
              <!-- <b-input-group-prepend is-text>
                    <feather-icon icon="ClockIcon" />
                  </b-input-group-prepend> -->
              <v-select
                v-model="form.assignedSelected"
                class="form-control p-0 border-0"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                label="title"
                multiple
                placeholder="Select Assigned City"
                :options="assignCities"
                @change="handleForm"
              />
            </b-input-group>
          </b-form-group>
        </b-col>

        <!-- <b-col cols="12">
          <b-form-group
            label=""
            label-for="vi-net-suit"
          >
            <b-form-checkbox
              v-model="form.net_suit"
              value="A"
              class="custom-control-success"
            >
              Allow Net Suit
            </b-form-checkbox>
          </b-form-group>
        </b-col> -->
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import vSelect from 'vue-select'
import {
  BCard, BCol, BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BCardTitle, /* BFormCheckbox, */
} from 'bootstrap-vue'

export default {
  components: {
    BRow, BCol, BCard, BFormGroup, BInputGroup, BInputGroupPrepend, BCardTitle, BFormInput, vSelect, /* BFormCheckbox, */ ValidationProvider,
  },

  data() {
    return {
      country: [],
      state: [],
      city: [],
      assignCities: [],
      form: {

      },
      modulesOption: [
        { title: 'CFM' },
        { title: 'EPR' },
        { title: 'LR' },
        { title: 'RR' },
      ],
    }
  },
  methods: {
    handleForm() {
      this.$emit('getform', this.form)
    },
  },
}
</script>

<style>

</style>
