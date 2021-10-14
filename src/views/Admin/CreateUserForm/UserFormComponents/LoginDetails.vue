<template>
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
            class="required"
          >
            <validation-provider
              #default="{ errors }"
              name="Username"
              vid="vi-user-name"
              rules="required"
            >
              <b-input-group class="input-group-merge">
                <b-input-group-prepend is-text>
                  <feather-icon icon="UserIcon" />
                </b-input-group-prepend>
                <b-form-input
                  id="vi-user-name"
                  v-model="form.username"
                  placeholder="Username"
                  @change="handleForm"
                />
              </b-input-group>
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- OTP Login -->
        <b-col cols="6">
          <b-form-group
            label="OTP Login"
            label-for="vi-otp-login"
            :class="req ? 'required' : ''"
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
        <b-col cols="6">
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

        <!-- Status -->
        <b-col
          cols="6"
          class="p-0"
        >
          <b-col cols="12">
            <b-form-group
              label="Password"
              label-for="vi-password"
              :class="req ? 'required' : ''"
            >
              <validation-provider
                #default="{ errors }"
                name="Password"
                vid="vi-password"
                :rules="req ? 'required' : ''"
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
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="Confirm Password"
              label-for="vi-password"
              :class="req ? 'required' : ''"
            >
              <validation-provider
                #default="{ errors }"
                name="Confirm Password"
                vid="vi-confirm-password"
                :rules="req ? 'required' : ''"
              >
                <b-input-group class="input-group-merge">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="LockIcon" />
                  </b-input-group-prepend>
                  <b-form-input
                    id="vi-password"
                    v-model="form.confirmPassowrd"
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
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col cols="12">
            <b-form-group
              label="User Type"
              label-for="vi-user-type"
              class="required"
            >
              <validation-provider
                #default="{ errors }"
                name="User Type"
                vid="vi-user-type"
                rules="required"
              >
                <b-input-group class="input-group-merge">
                  <v-select
                    v-model="form.user_type"
                    class="form-control p-0 border-0"
                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                    label="group_desc"
                    placeholder="Select User Type"
                    :reduce="ut => ut.group_id"
                    :options="userTypes"
                  />
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
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
              :class="pic_required"
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
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
import vSelect from 'vue-select'
import { ValidationProvider } from 'vee-validate'
import {
  BCard, BCol, /* BForm, */ BRow, BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, /* BButton, */ BFormCheckbox, BCardTitle, BFormFile, BInputGroupAppend,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { required } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '../../../../store'
// import LoginDetails from './CreateUserForm/LoginDetails.vue'

export default {
  name: 'LoginDetails',
  components: {
    vSelect,
    BInputGroupAppend,
    BFormFile,
    BCardTitle,
    BFormCheckbox,
    BRow,
    ValidationProvider,
    BCol,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BCard,
  },
  directives: {
    Ripple,
  },
  props: ['req', 'editdata'],
  mixins: [togglePasswordVisibility],
  data() {
    return {
      required,
      isVerticalMenuCollapsed: this.$store.state.verticalMenu.isVerticalMenuCollapsed,
      form: {
        profile_photo: 'https://staging-lr.yugtia.com/assets/images/users/1.jpg',

      },
      user_type: '',
      userTypes: [],
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    pic_required() {
      return this.form.face_login ? 'required' : ''
    },
  },
  watch: {
    editdata(newVal) {
      this.form = newVal
      const c = parseInt(newVal.user_type, 10)
      this.form.user_type = c
      this.form.profile_photo = 'https://staging-lr.yugtia.com/assets/images/users/1.jpg'
    },
  },
  mounted() {
    store.dispatch('userManage/getUserType').then(response => {
      if (response.data.code === '200') {
        this.userTypes = response.data.data
      }
    })
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
