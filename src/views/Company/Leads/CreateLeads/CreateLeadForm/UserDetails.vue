<template>
  <b-col xl="12">

    <b-card>
      <b-card-title class="">
        Add Lead
      </b-card-title>
      <b-row>
        <!-- Report To -->
        <b-col cols="12">
          <b-form-group
            label="Laed"
            label-for="vi-report-to"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Report To"
              vid="vi-report-to"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <v-select
                  v-model="form.report_to"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  placeholder=""
                  :options="[]"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Reporting Person -->
        <b-col cols="12">
          <b-form-group
            label="Reporting Person"
            label-for="vi-reporting-person"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Reporting Person"
              vid="vi-reporting-person"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <v-select
                  v-model="form.reporting_person"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  placeholder=""
                  :options="[]"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Status -->
        <b-col cols="12">
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
                  v-model="form.status"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :reduce="op => op.value"
                  placeholder="Select Status"
                  :options="statusOptions"
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
import vSelect from 'vue-select'
import { ValidationProvider } from 'vee-validate'
import {
  BCard, BCol, /* BForm, */ BRow, BFormGroup, BInputGroup, BCardTitle,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
// import LoginDetails from './CreateUserForm/LoginDetails.vue'

export default {
  name: 'ReportTo',
  components: {
    vSelect,
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
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {

      },
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
  methods: {
    handleForm() {
      this.$emit('getCreateUser', this.form)
    },
  },
}
</script>

<style>

</style>
