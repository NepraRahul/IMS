<template>
  <b-col xl="12">

    <b-card>
      <b-card-title class="">
        Contact Details
      </b-card-title>
      <b-row
        v-for="(item, index) in form.contact_data"
        :id="item.id"
        :key="item.id"
        :ref="index"
      >
        <b-col
          cols="12"
          class="d-flex align-items-baseline justify-content-between"
        >
          <p>Contact </p>
          <b-button
            v-ripple.400="'rgba(234, 84, 85, 0.15)'"
            variant="outline-danger border-0"
            class="mt-0 mt-md-2 px-1"
            @click="removeItem(index)"
          >
            <feather-icon
              icon="XIcon"
              class="mr-25"
            />
          </b-button>
        </b-col>
        <!-- Name -->
        <b-col cols="4">
          <b-form-group
            label="Name"
            label-for="vi-Name"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Name"
              :vid="'vi-Name'+index"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  :id="'vi-Name'+index"
                  v-model="form.contact_data[index].name"
                  :class="errors[0] ? 'border-red' : ''"
                  type="text"
                  placeholder="Name"
                  @change="handleForm"
                />
              </b-input-group>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- email -->
        <b-col cols="4">
          <b-form-group
            label="Email"
            label-for="vi-email"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Email"
              :vid="'vi-email'+index"
              rules="email"
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  :id="'vi-email'+index"
                  v-model="form.contact_data[index].email"
                  :class="errors[0] ? 'border-red' : ''"
                  type="text"
                  placeholder="email"
                  @change="handleForm"
                />
              </b-input-group>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- Mobile -->
        <b-col cols="4">
          <b-form-group
            label="Mobile"
            label-for="vi-mobile"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Mobile"
              :vid="'vi-mobile'+index"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  :id="'vi-mobile'+index"
                  v-model="form.contact_data[index].mobile"
                  :class="errors[0] ? 'border-red' : ''"
                  type="number"
                  placeholder="Mobile"
                  @change="handleForm"
                />
              </b-input-group>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- landline -->
        <b-col cols="4">
          <b-form-group
            label="Landline"
            label-for="vi-landline"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Landline"
              :vid="'vi-landline'+index"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  :id="'vi-landline'+index"
                  v-model="form.contact_data[index].landline"
                  :class="errors[0] ? 'border-red' : ''"
                  type="number"
                  placeholder="Landline"
                  @change="handleForm"
                />
              </b-input-group>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Select Department -->
        <b-col cols="4">
          <b-form-group
            label="Department"
            label-for="vi-department"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Department"
              :vid="'vi-department'+index"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <v-select
                  v-model="form.contact_data[index].department"
                  :class="errors[0] ? 'border-red-vselect' : ''"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="department_name"
                  placeholder=""
                  :reduce="d => d.id"
                  :options="deparments"
                  @change="handleForm"
                />
              </b-input-group>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Designation -->
        <b-col cols="4">
          <b-form-group
            label="Designation"
            label-for="vi-designation"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Designation"
              vid="vi-designation"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-designation"
                  v-model="form.contact_data[index].designation"
                  :class="errors[0] ? 'border-red' : ''"
                  type="text"
                  placeholder="Designation"
                  @change="handleForm"
                />
              </b-input-group>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Select Services -->
        <b-col cols="8">
          <b-form-group
            label="Services"
            label-for="vi-Services"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Services"
              vid="vi-Services"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <v-select
                  v-model="form.contact_data[index].services"
                  class="form-control p-0 border-0"
                  :class="errors[0] ? 'border-red-vselect' : ''"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="service_name"
                  :reduce="s => s.id"
                  multiple
                  placeholder=""
                  :options="services"
                  @change="handleForm"
                />
              </b-input-group>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Business Card -->
        <b-col
          cols="4"
          class="p-0"
        >
          <b-col cols="12">
            <b-form-group
              label="Business Card"
              label-for="vi-business-card"
              :class="req"
            >
              <validation-provider
                #default="{ errors }"
                name="Business Card"
                :vid="'vi-business-card'+index"
                :rules="req"
              >
                <b-input-group class="input-group-merge">
                  <b-form-file
                    :id="'vi-business-card'+index"
                    v-model="form.contact_data[index].card"
                    :class="errors[0] ? 'border-red' : ''"
                    accept="image/*"
                    type="file"
                    @change="getprofile($event, index)"
                  />
                </b-input-group>
                <div
                  class="business_card_preview"
                >
                  <img
                    :src="business_card_photo[index]"
                    alt=""
                  >
                </div>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-col>
        <b-col>
          <hr>
        </b-col>
      </b-row>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="repeateAgain"
      >
        <feather-icon
          icon="PlusIcon"
          class="mr-25"
        />
        <span>Add New</span>
      </b-button>
    </b-card>
  </b-col>

</template>

<script>
import vSelect from 'vue-select'
import { ValidationProvider } from 'vee-validate'
import {
  BCard, BCol, BRow, BFormGroup, BInputGroup, BCardTitle, BFormInput, BFormFile, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '../../../../../store'
// import LoginDetails from './CreateUserForm/LoginDetails.vue'

export default {
  name: 'ReportTo',
  components: {
    vSelect,
    BButton,
    BFormInput,
    BFormFile,
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
      business_card_photo: [],
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {
        contact_data: [{
          id: 1,
        }],
        company_individual_select: 'Select Company/Individual',
      },
      deparments: [],
      nextTodoId: 2,
      services: [],
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
    store.dispatch('ManageLeads/getDepartments')
      .then(response => {
        if (response.data.code === '200') {
          this.deparments = response.data.data
        }
      })

    store.dispatch('CompanyuserManage/getServices').then(response => {
      if (response.data.code === '200') {
        this.services = response.data.data
      }
    })
  },
  methods: {
    handleForm() {
      this.$emit('getCreateLead', this.form)
    },
    getprofile(event, index) {
      if (event.target.files.length > 0) {
        console.log(event)
        // eslint-disable-next-line prefer-destructuring
        this.business_card_photo[index] = event.target.files[0]
        // console.log(this.business_card_photo[index])
        this.form.contact_data[index].card = URL.createObjectURL(event.target.files[0])
        this.$emit('getCreateLead', this.business_card_photo[index], 'images', '', '', index)
      } else {
        this.business_card_photo[index] = 'https://staging-lr.yugtia.com/assets/images/users/1.jpg'
        this.form.contact_data[index].card = 'https://staging-lr.yugtia.com/assets/images/users/1.jpg'
      }
    },
    repeateAgain() {
      this.form.contact_data.push({
        id: this.nextTodoId += this.nextTodoId,
      })
    },
    removeItem(index) {
      this.form.contact_data.splice(index, 1)
      this.$emit('getCreateLead', this.business_card_photo[index], 'images', '', index, '')
      this.business_card_photo.slice(this.business.indexOf(index), 1)
      // this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
  },
}
</script>

<style>
.business_card_preview img{
  max-height: 50px;
  padding: 5px;
}
</style>
