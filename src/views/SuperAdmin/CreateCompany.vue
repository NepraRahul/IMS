<template>

  <validation-observer
    ref="createCompany"
  >
    <b-form @submit.prevent="createCompany">
      <b-row>
        <b-col>
          <custom-input
            :id="'autosuggest__input_ajax'"
            :class="'required'"
            :label="'CustomLabel'"
            :inputname="'select_chec'"
            :type="'email'"
            :placeholder="'namsda'"
            :rules="''"
            :value="'2021-10-14 to 2021-10-22'"
            :crvalue="[{title: 'net', checked: true }, {title: 'abs', checked: false },{title: 'aas', checked: true },{title: 'aaaa', checked: false }]"
            :crlabel="'NET'"
            :radioswitch="false"
            :inline="false"
            :multiple="false"
            :options="['CFM',
                       'EPR',
                       'LR',
                       'RR',]"
            :rows="0"
            :suggestapi="'https://jsonplaceholder.typicode.com/users'"
            :enabletime="false"
            :nocalendar="false"
            :dateformat="'Y-m-d'"
            :mode="'range'"
            :icon="''"
            @getform="getFor"
          />
        </b-col>

        <company-info-form
          @getform="getFor"
        />

        <contact-info-form @getform="getFor" />

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
import { ValidationObserver } from 'vee-validate'

import {
  BCol, BForm, BRow, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import CompanyInfoForm from './CreateCompanyForm/CompanyInfoForm.vue'
import ContactInfoForm from './CreateCompanyForm/ContactInfoFrom.vue'
import CustomInput from '../InputFields/CustomInput.vue'
// import CustomSelect from '../InputFields/CustomSelect.vue'
// import CustomTextarea from '../InputFields/CustomTextarea.vue'
// import CustomCheckbox from '../InputFields/CustomCheckbox.vue'

export default {
  name: 'CreateCompany',
  components: {
    // CustomSelect,
    CompanyInfoForm,
    // CustomTextarea,
    CustomInput,
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
    // CustomCheckbox,
  },
  directives: {
    Ripple,
  },
  // mixins: [togglePasswordVisibility],
  data() {
    return {
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {
        select_chec: [],
        select_check: false,
        checkbox: '',
        selectedModule: [],
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
        net_suit: '',

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
        'CFM',
        'EPR',
        'LR',
        'RR',
      ],
    }
  },
  created() {
    this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  methods: {
    getFor(value, name, type, remove) {
      if (!name) {
        Object.assign(this.form, value)
      } else if (type === 'checkbox') {
        if (value) {
          this.form[name].push(value)
        } else {
          this.form[name].splice(this.form[name].indexOf(remove), 1)
        }
      } else {
        this.form[name] = value
      }
      console.log(this.form.select_chec)
    },
    createCompany() {
      // this.$refs.createCompany.validate().then(success => {
      console.log(this.form.select_chec)
      // })
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
