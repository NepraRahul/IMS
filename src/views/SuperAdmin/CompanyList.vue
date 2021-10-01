<template>
  <div>
    <div class="text-right mb-1">
      <b-button
        variant="primary"
        @click="redirectToCreate"
      >
        Create Company
      </b-button>
    </div>
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
  BTable, BCard, BButton, /* BCardHeader, BCardBody, */
} from 'bootstrap-vue'

export default {
  name: 'CreateCompany',
  components: {
    BCard,
    BButton,
    // BCardHeader,
    // BCardBody,
    BTable,
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
