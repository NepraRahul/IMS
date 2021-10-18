<template>
  <b-col xl="5">

    <b-card>
      <b-card-title class="">
        Contact Details
      </b-card-title>
      <b-row>
        <!-- Name -->
        <b-col cols="12">
          <b-form-group
            label="Name"
            label-for="vi-Name"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Name"
              vid="vi-Name"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-Name"
                  v-model="form.name"
                  type="text"
                  placeholder="Name"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- email -->
        <b-col cols="12">
          <b-form-group
            label="Email"
            label-for="vi-email"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Email"
              vid="vi-email"
              rules="email"
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-email"
                  v-model="form.email"
                  type="text"
                  placeholder="email"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <!-- Mobile -->
        <b-col cols="12">
          <b-form-group
            label="Mobile"
            label-for="vi-mobile"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Mobile"
              vid="vi-mobile"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-mobile"
                  v-model="form.mobile"
                  type="number"
                  placeholder="Mobile"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- landline -->
        <b-col cols="12">
          <b-form-group
            label="Landline"
            label-for="vi-landline"
            class=""
          >
            <validation-provider
              #default="{ errors }"
              name="Landline"
              vid="vi-landline"
              rules=""
            >
              <b-input-group class="input-group-merge">
                <b-form-input
                  id="vi-landline"
                  v-model="form.landline"
                  type="number"
                  placeholder="Landline"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Select Department -->
        <b-col cols="12">
          <b-form-group
            label="Department"
            label-for="vi-department"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Department"
              vid="vi-department"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <v-select
                  v-model="form.department"
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

        <!-- Designation -->
        <b-col cols="12">
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
                  v-model="form.designation"
                  type="number"
                  placeholder="Designation"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Select Services -->
        <b-col cols="12">
          <b-form-group
            label="Services"
            label-for="vi-Services"
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Services"
              vid="vi-Services"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <v-select
                  v-model="form.services"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  multiple
                  placeholder=""
                  :options="[]"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Business Card -->
        <b-col
          cols="12"
          class="p-0"
        >
          <b-col cols="12">
            <b-form-group
              label="Profile Photo"
              label-for="vi-profile-photo"
              :class="pic_required"
            >
              <validation-provider
                #default="{ errors }"
                name="Profile Photo"
                vid="vi-profile-photo"
                :rules="pic_required"
              >
                <b-input-group class="input-group-merge">
                  <b-form-file
                    id="vi-profile-photo"
                    v-model="form.profile_pic"
                    accept="image/*"
                    type="file"
                    @change="getprofile"
                  />
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
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
                  v-model="form.customer_type"
                  class="form-control p-0 border-0"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  multiple
                  placeholder=""
                  :options="[]"
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
import vSelect from 'vue-select'
import { ValidationProvider } from 'vee-validate'
import {
  BCard, BCol, BRow, BFormGroup, BInputGroup, BCardTitle, BFormInput, BFormFile,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
// import LoginDetails from './CreateUserForm/LoginDetails.vue'

export default {
  name: 'ReportTo',
  components: {
    vSelect,
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
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {
        company_individual_select: 'Select Company/Individual',

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
    getprofile(event) {
      if (event.target.files.length > 0) this.form.profile_photo = URL.createObjectURL(event.target.files[0])
      else this.form.profile_photo = 'https://staging-lr.yugtia.com/assets/images/users/1.jpg'
    },
  },
}
</script>

<style>

</style>
