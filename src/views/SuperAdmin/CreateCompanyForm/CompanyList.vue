<template>
  <div>
    <div class="d-flex justify-content-between mb-1">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-toggle.collapse-1
        variant="outline-primary"
      >
        Filters
      </b-button>
      <b-button
        variant="primary"
        @click="redirectToCreate"
      >
        Create Company
      </b-button>
    </div>
    <b-collapse
      id="collapse-1"
      class="mt-2"
    >
      <company-filter />
    </b-collapse>
    <b-card>
      <b-table
        sticky-header
        responsive="true"
        :items="items"
        @row-contextmenu="contextmenu"
      />
    </b-card>
    <vue-context
      ref="companyContextMenu"
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
  BTable, BCard, BButton, VBToggle, BCollapse, BLink, /* BCardHeader, BCardBody, */
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import VueContext from 'vue-context'
import CompanyFilter from './CompanyFilter.vue'
import store from '../../../store'

export default {
  name: 'CreateCompany',
  components: {
    BCard,
    BButton,
    BLink,
    BCollapse,
    CompanyFilter,
    VueContext,
    BTable,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },
  data() {
    return {
      items: [],
      values: [],
      menuData: [
        { icon: 'EditIcon', text: 'Edit Company' },
      ],
    }
  },
  created() {
    // this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  mounted() {
    store.dispatch('companyStore/getCompanyList')
      .then(response => {
        if (response.data.code === '200') {
          this.items = response.data.data.data
        }
      })
  },
  methods: {
    redirectToCreate() {
      this.$router.push('/master-company-management/company/create-company')
    },
    contextmenu(item, index, event) {
      event.preventDefault()
      this.values = item
      this.$refs.companyContextMenu.open(event, item)
    },
    optionClicked(text) {
      if (text === 'Edit Company') {
        this.$root.$router.push(`/master-company-management/company/edit-company/${this.values.company_id}`)
      }
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-context.scss';
</style>
