<template>
  <div>
    <div class="d-flex justify-content-between mb-1">
      <b-button
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        v-b-toggle.collapse-1
        variant="outline-primary"
      >
        Toggle Collapse
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
        responsive="sm"
        :items="items"
      />
    </b-card>
  </div>
</template>

<script>
import {
  BTable, BCard, BButton, VBToggle, BCollapse, /* BCardHeader, BCardBody, */
} from 'bootstrap-vue'
import CompanyFilter from './CompanyFilter.vue'

export default {
  name: 'CreateCompany',
  components: {
    BCard,
    BButton,
    BCollapse,
    CompanyFilter,
    // BCardHeader,
    // BCardBody,
    BTable,
  },
  directives: {
    'b-toggle': VBToggle,
  },
  data() {
    return {
      items: [
        {
          age: 40, first_name: 'Dickerson', last_name: 'Macdonald', Occupation: 'Job',
        },
        {
          age: 21, first_name: 'Larsen', last_name: 'Shaw', Occupation: 'Job',
        },
        {
          age: 89, first_name: 'Geneva', last_name: 'Wilson', Occupation: 'Bussiness',
        },
        {
          age: 38, first_name: 'Jami', last_name: 'Carney', Occupation: 'Bussiness',
        },
        {
          age: 40, first_name: 'James', last_name: 'Thomson', Occupation: 'Job',
        },
      ],
    }
  },
  created() {
    // this.$store.commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', true)
  },
  methods: {
    redirectToCreate() {
      this.$router.push('/create-company')
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
