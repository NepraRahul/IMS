<template>
  <b-row class="mb-2">
    <b-col cols="4">
      <b-form-group
        label="Username"
        label-for="vi-user-name"
      >
        <b-input-group class="input-group-merge">
          <b-input-group-prepend is-text>
            <feather-icon icon="UserIcon" />
          </b-input-group-prepend>
          <b-form-input
            id="vi-user-name"
            v-model="form.username"
            required
            placeholder="Username"
          />
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col cols="4">
      <b-form-group
        label="Username"
        label-for="vi-user-name"
      >
        <b-input-group class="input-group-merge">
          <b-input-group-prepend is-text>
            <feather-icon icon="UserIcon" />
          </b-input-group-prepend>
          <b-form-input
            id="vi-user-name"
            v-model="form.username"
            required
            placeholder="Username"
          />
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col cols="4">
      <b-form-group
        label="Username"
        label-for="vi-user-name"
      >
        <b-input-group class="input-group-merge">
          <b-input-group-prepend is-text>
            <feather-icon icon="UserIcon" />
          </b-input-group-prepend>
          <b-form-input
            id="vi-user-name"
            v-model="form.username"
            required
            placeholder="Username"
          />
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col cols="4">
      <b-form-group
        label="Username"
        label-for="vi-user-name"
      >
        <b-input-group class="input-group-merge">
          <b-input-group-prepend is-text>
            <feather-icon icon="UserIcon" />
          </b-input-group-prepend>
          <b-form-input
            id="vi-user-name"
            v-model="form.username"
            required
            placeholder="Username"
          />
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col cols="4">
      <b-form-group
        label="Username"
        label-for="vi-user-name"
      >
        <b-input-group class="input-group-merge">
          <b-input-group-prepend is-text>
            <feather-icon icon="UserIcon" />
          </b-input-group-prepend>
          <b-form-input
            id="vi-user-name"
            v-model="form.username"
            required
            placeholder="Username"
          />
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col cols="4">
      <b-form-group
        label="Username"
        label-for="vi-user-name"
      >
        <b-input-group class="input-group-merge">
          <b-input-group-prepend is-text>
            <feather-icon icon="UserIcon" />
          </b-input-group-prepend>
          <b-form-input
            id="vi-user-name"
            v-model="form.username"
            required
            placeholder="Username"
          />
        </b-input-group>
      </b-form-group>
    </b-col>
    <b-col
      cols="12"
      class="text-center"
    >
      <b-button variant="success mx-1">
        Search
      </b-button>
      <b-button variant="danger mx-1">
        Reset
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import {
  BRow, BCol, BInputGroup, BInputGroupPrepend, BFormGroup, BFormInput, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BInputGroup,
    BInputGroupPrepend,
    BFormGroup,
    BFormInput,
    BButton,
    // BCollapse,
  },

  data() {
    return {
      form: {},

    }
  },

}
</script>

<style>

</style>
