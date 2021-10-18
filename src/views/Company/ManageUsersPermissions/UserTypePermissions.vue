<template>

  <b-form
    method="POST"
    class="auth-permission-form"
    @submit.prevent="saveUserTypePermission"
  >
    <b-row>
      <b-col md="12">
        <b-form-group
          label="Users Type"
          label-for="id"
        >
          <b-input-group class="input-group-merge">

            <v-select
              id="id"
              v-model="userTypeSelected"
              name="inputname"
              class="form-control p-0 border-0"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              placeholder="Select"
              label="group_desc"
              :reduce="userType => userType.group_id"
              :options="user"
              @input="changeUser"
            />

          </b-input-group>
        </b-form-group>

      </b-col>
      <b-col
        v-for="per in permission"
        :key="per.trngroupid"
        md="4"
        class="py-1"
      >
        <b-card
          class="h-100"
          :header="per.trngrouptitle"
        >

          <b-form-checkbox
            v-for="trans in per.transaction"
            :key="trans.trnid"
            v-model="permissionSelected"
            class="my-1"
            :name="per.trngrouptitle+trans.trnid"
            :value="trans.trnid"
          >
            <span> {{ trans.trnname }} </span>
          </b-form-checkbox>

        </b-card>

      </b-col>
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
</template>

<script>
import {
  BRow, BCol, BCard, BForm, BFormGroup, BInputGroup, BFormCheckbox, BButton,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'
import store from '../../../store'

export default {
  components: {
    BRow,
    BCol,
    BForm,
    BFormGroup,
    BInputGroup,
    BFormCheckbox,
    vSelect,
    BCard,
    BButton,

  },
  directives: {
    Ripple,
  },
  data() {
    return {
      user: [],
      permission: [],
      userTypeSelected: '',
      permissionSelected: [],
    }
  },
  mounted() {
    store.dispatch('CompanyPermission/getPermissionSettings')
      .then(response => {
        if (response.data.code === '200') {
          this.permission = response.data.data
        }
      })
    store.dispatch('CompanyPermission/getUsers')
      .then(response => {
        if (response.data.code === '200') {
          this.user = response.data.data
        }
      })
  },
  methods: {
    changeUser() {
      store.dispatch('CompanyPermission/getUserTypePermissions', { companyuserid: this.userTypeSelected })
        .then(response => {
          if (response.data.code === '200') {
            this.permissionSelected = response.data.data
          }
        })
    },
    saveUserTypePermission() {
      store.dispatch('CompanyPermission/saveUserTypePermissions', { companyuserid: this.userTypeSelected, transactionIds: this.permissionSelected })
        .then(response => {
          if (response.data.code === '200') {
            this.user = response.data.data
          }
        })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
  .card {
    max-height: 350px;
    margin-bottom: 0;
  }
  .card-header {
    background: linear-gradient(to right , rgba(99, 99, 248, 0.199), rgba(99, 99, 248, 0.199), rgba(255, 128, 255, 0.281));
    font-weight: bold;
  }
  .card-body {
    overflow: auto;
    margin-bottom: 1.5rem;
  }
  .card-body::-webkit-scrollbar {
    display: none;
  }
</style>
