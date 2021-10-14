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
        @row-contextmenu="contextmenu"
      />
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
import store from '../../../store'

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
      items: [],
      menuData: [
        { icon: 'EditIcon', text: 'Edit User' },
      ],
    }
  },
  mounted() {
    store.dispatch('userManage/getUsers').then(response => {
      if (response.data.code === '200') {
        this.items = response.data.data.data
      }
    })
  },
  created() {
    // this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  methods: {
    redirectToCreate() {
      this.$router.push('/admin/create-users')
    },
    contextmenu(item, index, event) {
      event.preventDefault()
      this.values = item
      this.$refs.UserContextMenu.open(event, item)
    },
    optionClicked(text) {
      if (text === 'Edit User') {
        this.$root.$router.push(`/admin/user/edit-user/${this.values.adminuserid}`)
      }
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-context.scss';

</style>
