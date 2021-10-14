<template>

  <validation-observer
    ref="createCompany"
  >
    <b-form @submit.prevent="createCompany">
      <b-row>
        <!-- <b-col>
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
        </b-col> -->

        <company-info-form
          :req="req"
          :form="form"
          @getform="getFor"
        />

        <contact-info-form
          :req="req"
          :form="form"
          @getform="getFor"
        />

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
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '../../../store'
import CompanyInfoForm from './CreateCompany/CompanyInfoForm.vue'
import ContactInfoForm from './CreateCompany/ContactInfoFrom.vue'

export default {
  name: 'CreateCompany',
  components: {
    CompanyInfoForm,
    ContactInfoForm,
    // BCardTitle,
    ValidationObserver,
    BRow,
    BButton,
    BCol,
    BForm,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      req: true,
      form: {
        company_id: '',
        module_ids: '',
        company_name: '',
        company_owner_name: '',
        company_email: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
        phone_office: '',
        phone_home: '',
        mobile: '',
        fax: '',
        gst_no: '',
        cin_no: '',
        pan: '',
        status: '',
        username: '',
        password: '',
      },
    }
  },
  mounted() {
    if (this.$route.params.id) {
      this.form.company_id = this.$route.params.id
      this.req = false
      store.dispatch('companyStore/getCompanybyId', { company_id: this.form.company_id })
        .then(response => {
          if (response.data.code === '200') {
            this.form = response.data.data
          }
        })
    } else {
      this.form.company_id = '0'
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
      this.$refs.createCompany.validate().then(success => {
        if (success) {
          const data = this.form
          if (data.company_id === '0') {
            store.dispatch('companyStore/createCompany', { data })
              .then(response => {
                if (response.data.code === '200') {
                  this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `${response.data.msg}`,
                      icon: 'Success',
                      variant: 'success',
                      text: `${response.data.data}`,
                    },
                  })
                  this.$router.push('/master-company-management/company/list')
                }
              })
          } else {
            store.dispatch('companyStore/updataCompany', { data })
              .then(response => {
                if (response.data.code === '200') {
                  this.$toast({
                    component: ToastificationContent,
                    position: 'top-right',
                    props: {
                      title: `${response.data.msg}`,
                      icon: 'Success',
                      variant: 'success',
                      text: `${response.data.data}`,
                    },
                  })
                  this.$router.push('/master-company-management/company/list')
                }
              })
          }
        }
      })
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
