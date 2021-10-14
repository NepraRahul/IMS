<template>
  <b-form>
    <b-row>
      <b-col xl="6">
        <validation-observer ref="changePassword">
          <b-form
            method="POST"
            class="auth-change-password-form mt-2"
            @submit.prevent="validationForm"
          >

            <!-- Current password -->

            <b-form-group
              label="Current Password"
              label-for="current-password"
            >
              <validation-provider
                #default="{ errors }"
                name="Current Password"
                vid="current-password"
                rules="required|min:8|password"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="reset-password-new"
                    v-model="change_password.current_password"
                    :type="password1FieldType"
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    name="reset-password-new"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="password1ToggleIcon"
                      @click="togglePassword1Visibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group
              label="New Password"
              label-for="change-password-new"
            >
              <validation-provider
                #default="{ errors }"
                name="Password"
                vid="change-password-new"
                rules="required|min:8|password"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="change-password-new"
                    v-model="change_password.new_password"
                    :type="password1FieldType"
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    name="reset-password-new"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="password1ToggleIcon"
                      @click="togglePassword1Visibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- password -->
            <b-form-group
              label="Confirm New Password"
              label-for="confirm-password-new"
            >
              <validation-provider
                #default="{ errors }"
                name="Confirm New Password"
                vid="confirm-password-new"
                rules="required|confirmed:change-password-new"
              >
                <b-input-group
                  class="input-group-merge"
                  :class="errors.length > 0 ? 'is-invalid':null"
                >
                  <b-form-input
                    id="reset-password-new"
                    v-model="change_password.confirm_new_password"
                    :type="password1FieldType"
                    :state="errors.length > 0 ? false:null"
                    class="form-control-merge"
                    name="reset-password-new"
                    placeholder="············"
                  />
                  <b-input-group-append is-text>
                    <feather-icon
                      class="cursor-pointer"
                      :icon="password1ToggleIcon"
                      @click="togglePassword1Visibility"
                    />
                  </b-input-group-append>
                </b-input-group>
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>

            <!-- submit button -->
            <b-button
              block
              type="submit"
              variant="primary"
            >
              Set New Password
            </b-button>

          </b-form>
        </validation-observer>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import {
  BRow, BCol, BInputGroup, BFormInput, BForm, BFormGroup, BInputGroupAppend, BButton,
} from 'bootstrap-vue'
import { required, password } from '@validations'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BRow,
    BCol,
    BInputGroup,
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    ValidationObserver,
    ValidationProvider,
    BInputGroupAppend,
  },
  data() {
    return {
      password,
      required,
      change_password: {
        current_password: '',
        new_password: '',
        confirm_new_password: '',
      },
      password1FieldType: 'password',
    }
  },
  computed: {
    password1ToggleIcon() {
      return this.password1FieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    togglePassword1Visibility() {
      this.password1FieldType = this.password1FieldType === 'password' ? 'text' : 'password'
    },
    validationForm() {
      this.$refs.changePassword.validate().then(success => {
        if (success) {
          console.log(this.change_password)
          this.$toast({
            component: ToastificationContent,
            props: {
              title: 'Form Submitted',
              icon: 'EditIcon',
              variant: 'success',
            },
          })
        }
      })
    },
  },
}
</script>

<style>

</style>
