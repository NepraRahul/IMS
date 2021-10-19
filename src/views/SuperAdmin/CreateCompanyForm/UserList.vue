<template>
  <div>
    <div class="text-right mb-1">
      <b-button
        variant="primary"
        @click="redirectToCreate"
      >
        Create User
      </b-button>
    </div>
    <b-card>
      <b-table
        sticky-header
        responsive="true"
        :items="items"
        :fields="userFields"
        @row-contextmenu="contextmenu"
      >
        <template #cell(id)="data">
          <span class="">{{ data.item.companyuserid }}</span>
        </template>
        <template #cell(username)="data">
          <span class="">{{ data.item.username }}</span>
        </template>
        <template #cell(email)="data">
          <span class="">{{ data.item.email }}</span>
        </template>
        <template #cell(firstname)="data">
          <span class="">{{ data.item.firstname.charAt(0).toUpperCase() + data.item.firstname.slice(1) }}</span>
        </template>
        <template #cell(lastname)="data">
          <span class="">{{ data.item.lastname.charAt(0).toUpperCase() + data.item.lastname.slice(1) }}</span>
        </template>
        <template #cell(cityname)="data">
          <span class="">{{ data.item.city_name }}</span>
        </template>
        <template #cell(usertype)="data">
          <span
            v-if="data.item.user_type === constants.USER_TYPE_ADMIN"
            class=""
          >Admin</span>
          <span
            v-if="data.item.user_type === constants.USER_TYPE_SUPER_ADMIN"
            class=""
          >Superadmin</span>
          <span
            v-if="data.item.user_type === constants.USER_TYPE_USER"
            class=""
          >User</span>
        </template>
        <template #cell(status)="data">
          <span
            v-if="data.item.status === constants.USER_STATUS_ACTIVE"
            class="text-success"
          >Active</span>
          <span
            v-if="data.item.status === constants.USER_STATUS_INACTIVE"
            class="text-danger"
          >In-Active</span>
        </template>
      </b-table>
    </b-card>
    <vue-context
      ref="UserContextMenu"
    >
      <li>
        <b-link
          v-for="data in menuData"
          :key="data.text"
          class="d-flex align-items-center"
          @click="optionClicked(data.text)"
        >
          <feather-icon
            :icon="data.icon"
            size="16"
          />
          <span class="ml-75">{{ data.text }}</span>
        </b-link>
      </li>
    </vue-context>
  </div>
</template>

<script>
import {
  BTable, BCard, BButton, BLink,
} from 'bootstrap-vue'
import VueContext from 'vue-context'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import store from '../../../store'
import constants from '../../../constants'

export default {
  name: 'UserList',
  components: {
    BLink,
    BCard,
    BButton,
    BTable,
    VueContext,
  },
  data() {
    return {
      constants,
      items: [],
      userFields: ['Id', 'Username', 'Email', 'FirstName', 'LastName', 'CityName', 'Usertype', 'Status'],
      menuData: [
        { icon: 'EditIcon', text: 'Edit User' },
      ],
    }
  },
  mounted() {
    store.dispatch('companyStore/getUserList').then(response => {
      if (response.data.code === '200') {
        this.items = response.data.data.data
      }
    }).catch(e => {
      if (e.response.data.message === 'Unauthenticated.') {
        this.$toast({
          component: ToastificationContent,
          position: 'top-right',
          props: {
            title: `${e.response.data.message}`,
            icon: 'Danger',
            variant: 'danger',
            text: '',
          },
        })
        localStorage.clear()
        this.$router.push('login')
      }
    })
  },
  created() {
    // this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  methods: {
    redirectToCreate() {
      this.$router.push('/company/create-user')
    },
    contextmenu(item, index, event) {
      event.preventDefault()
      this.values = item
      this.$refs.UserContextMenu.open(event, item)
    },
    optionClicked(text) {
      if (text === 'Edit User') {
        this.$root.$router.push(`/company/user/edit-user/${this.values.companyuserid}`)
      }
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-context.scss';

</style>
