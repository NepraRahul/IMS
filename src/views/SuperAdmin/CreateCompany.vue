<template>

  <validation-observer
    ref="createCompany"
  >
    <b-form @submit.prevent="createCompany">
      <b-row>
        <company-info-form
          @getform="getFor"
        />

        <contact-info-form @getform="form" />

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
  </validation-observer>
</template>

<script>
// import vSelect from 'vue-select'
import { /* ValidationProvider, */ ValidationObserver } from 'vee-validate'

import {
  /* BCard, */ BCol, BForm, BRow, /* BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, */ BButton, /* BFormCheckbox, BCardTitle, */ /* BInputGroupAppend, */
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
// import { togglePasswordVisibility } from '@core/mixins/ui/forms'
// import CompanyInformationForm from '../SuperAdmin/CompanyInformationForm.vue'
import CompanyInfoForm from './CompanyInfoForm.vue'
import ContactInfoForm from './ContactInfoFrom.vue'

export default {
  name: 'CreateCompany',
  components: {
    CompanyInfoForm,
    // ValidationProvider,
    ContactInfoForm,
    // BCardTitle,
    ValidationObserver,
    // BFormCheckbox,
    BRow,
    BButton,
    BCol,
    // BFormGroup,
    // BFormInput,
    // BInputGroup,
    // BInputGroupPrepend,
    // BCard,
    BForm,
  },
  directives: {
    Ripple,
  },
  // mixins: [togglePasswordVisibility],
  data() {
    return {
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {
        // selectedModule: [],
        // username: '',
        // company_name: '',
        // owner_name: '',
        // password: '',
        // c_password: '',
        // email: '',
        // mobile: '',
        // status: '',
        // address_line1: '',
        // address_line2: '',
        // phone_office: '',
        // phone_resident: '',
        // fax: '',
        // zip: '',
        // countrySelected: '',
        // stateSelected: '',
        // citySelected: '',
        // assignedSelected: [],
        // net_suit: '',

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
      modulesOption: [
        { title: 'CFM' },
        { title: 'EPR' },
        { title: 'LR' },
        { title: 'RR' },
      ],
    //   codeVerticalIcon,
    }
  },
  // computed: {
  //   passwordToggleIcon() {
  //     return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
  //   },
  // },
  created() {
    this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  methods: {
    getFor(a) {
      this.form = a
    },
    createCompany() {
      this.$refs.createCompany.validate().then(success => {
        console.log(success)
      })
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
