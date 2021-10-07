<template>
  <b-form-group
    :label="label"
    :label-for="id"
  >
    <validation-provider
      #default="{ errors }"
      :name="label"
      :vid="id"
      :rules="rules"
    >
      <b-input-group class="input-group-merge">
        <b-input-group-prepend
          v-if="icon"
          is-text
        >
          <feather-icon :icon="icon" />
        </b-input-group-prepend>

        <b-form-textarea
          v-if="type == 'textarea' || type == 'Textarea'"
          :id="id"
          v-model="val"
          :placeholder="placeholder"
          :rows="rows"
          :name="inputname"
          @input="$emit('getform', $event, inputname, type)"
        />

        <div
          v-else-if="type == 'checkbox' || type == 'Checkbox'"
          class="d-flex w-100 justify-content-between"
        >
          <b-form-checkbox
            v-for="(crv, index) in crvalue"
            :key="index"
            v-model="crva[index]"
            :name="inputname"
            :value="crv.title"
            :switch="radioswitch"
            :inline="inline"
            @change="$emit('getform', $event, inputname, type, crv.title)"
          >
            <span class="px-1"> {{ crv.title }} </span>
          </b-form-checkbox>
        </div>
        <!-- <b-form-radio
          v-else-if="type == 'radio' || type == 'radio'"
          v-model="crval"
          :name="inputname"
          @input="$emit('getform', $event, inputname)"
        >
          {{ crlabel }}
        </b-form-radio> -->

        <div
          v-else-if="type == 'radio' || type == 'radio'"
          class="d-flex w-100 justify-content-between"
        >
          <b-form-radio
            v-for="(crv, index) in crvalue"
            :key="index"
            v-model="crva[index]"
            :name="inputname"
            :value="crv.title"
            @change="$emit('getform', crv.title, inputname, type)"
          >
            <span class="px-1">{{ crv.title }}</span>
          </b-form-radio>
        </div>

        <vue-autosuggest
          v-else-if="type == 'autosuggest' || type == 'Autosuggest'"
          ref="autocomplete"
          v-model="val"
          :suggestions="suggestions"
          :input-props="{
            id: id,
            placeholder: placeholder,
            class: 'form-control',
            name: inputname,
          }"
          :section-configs="sectionConfigs"
          :limit="10"
          :render-suggestion="renderSuggestion"
          :on-selected="onSelected"
          @input="fetchResults"
        />

        <v-select
          v-else-if="type == 'select' || type == 'Select'"
          :id="id"
          v-model="val"
          :name="inputname"
          class="form-control p-0 border-0"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          :multiple="multiple"
          :placeholder="'Select '+label"
          label="title"
          :options="options"
          @input="$emit('getform', $event, inputname, type)"
        />

        <flat-pickr
          v-else-if="type == 'datetime' || type == 'datetime'"
          v-model="val"
          class="form-control"
          :config="{ enableTime: enabletime, dateFormat: dateformat, mode: mode, noCalendar: nocalendar}"
          @input="$emit('getform', $event, inputname, type)"
        />

        <b-form-input
          v-else
          :id="id"
          v-model="val"
          :type="type"
          :placeholder="placeholder"
          :name="inputname"
          @input="$emit('getform', $event, inputname, type)"
        />
      </b-input-group>
      <small class="text-danger">{{ errors[0] }}</small>
    </validation-provider>
  </b-form-group>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import flatPickr from 'vue-flatpickr-component'
import { required, email } from '@validations'
import {
  BFormGroup, BFormInput, BInputGroup, BInputGroupPrepend, BFormTextarea, BFormCheckbox, BFormRadio,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { VueAutosuggest } from 'vue-autosuggest'
import axios from 'axios'

export default {
  components: {
    BFormCheckbox,
    flatPickr,
    BFormRadio,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    ValidationProvider,
    vSelect,
    BFormTextarea,
    VueAutosuggest,
  },
  props: {
    id: { type: String, required: true },
    label: { type: String, required: true },
    type: { type: String, required: true },
    rules: { type: String, required: true },
    icon: { type: String, required: true },
    inputname: { type: String, required: true },
    value: { type: String, required: false, default: '' },
    // Checkbox / Radio Value and Label
    crvalue: { type: Array, required: false, default: () => [] },
    crlabel: { type: String, required: false, default: '' },

    placeholder: { type: String, required: false, default: '' },
    // Rows for TextArea
    rows: { type: Number, required: false, default: 5 },
    // Vue Select with Multiple Selector
    multiple: { type: Boolean, required: false, default: false },
    // Vue Select with Options
    options: { type: Array, required: false, default: () => [] },
    // Switch Checkbox Params
    radioswitch: { type: Boolean, required: false, default: false },
    inline: { type: Boolean, required: false, default: false },
    // AutoSuggest Params
    suggestapi: { type: String, required: false, default: '' },
    // DatePicker
    enabletime: { type: Boolean, required: false, default: true },
    nocalendar: { type: Boolean, required: false, default: true },
    dateformat: { type: String, required: false, default: 'Y-m-d' },
    mode: { type: String, required: false, default: 'range' },

  },
  data() {
    return {
      required,
      email,
      suggestions: [],
      val: this.value,
      crva: [],
      crval: []/* this.crvalue */,
      sectionConfigs: {
        selection: {
          onSelected: selected => {
            this.$emit('getform', selected.item.name, this.inputname, this.type)
          },
        },
      },
    }
  },
  mounted() {
    // crva() {
    // const valle = []
    const a = this
    this.crvalue.forEach((e, i) => {
      if (e.checked) { this.crva[i] = e.title; console.log(e); a.$emit('getform', e.title, this.inputname, this.type) } else { this.crva[i] = '' }
    })
    // return valle
    // },
  },
  methods: {
    onSelected(option) {
      return option
    },
    fetchResults() {
      const { val } = this
      const usersPromise = axios.get(this.suggestapi)

      Promise.all([usersPromise]).then(values => {
        this.suggestions = []
        this.selected = null
        console.log(values)
        const users = this.filterResults(values[0].data, val, 'name')
        this.suggestions.push({ name: 'selection', data: users })
      })
    },
    filterResults(data, text, field) {
      return data.filter(item => {
        if (item[field].toLowerCase().indexOf(text.toLowerCase()) > -1) {
          return item[field]
        }
        return false
      }).sort()
    },
    renderSuggestion(suggestion) {
      return suggestion.item.name
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
