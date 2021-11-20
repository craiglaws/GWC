<template>
  <div>
    <v-form class="" ref="form" @submit.prevent="handleSend">
      <v-text-field
        v-model="enquiry.name"
        :rules="[rules.required]"
        label="Name"
        background-color="#fff"
        required
        solo
        flat
        class="gwc-form"
      >
      </v-text-field>
      <v-text-field
        v-model="enquiry.email"
        :rules="[rules.required, rules.email]"
        label="Contact Email"
        required
        background-color="#fff"
        solo
        flat
      >
      </v-text-field>
      <v-text-field
        v-model="enquiry.telNumber"
        :rules="[rules.required]"
        label="Contact Number"
        required
        background-color="#fff"
        solo
        flat
      >
      </v-text-field>
      <v-textarea
        dense
        solo
        background-color="#fff"
        full-width
        label="Message"
        v-model="enquiry.message"
      ></v-textarea>
      <v-checkbox
        dense
        :rules="[rules.required]"
        required
        dark
        color="#fff"
        name="Terms Accepted"
      >
          <template v-slot:label>
          <div style="font-size: 12px; color: #fff">
            I agree for my details to be processed in accordance with GWC
            <a href="" target="_blank" @click.stop style=" color: #fff">
              Privacy Policy
            </a>
          </div>
        </template>
      </v-checkbox>
      <div class="text-center">
        <v-btn
          :disabled="loading"
          :loading="loading"
          type="submit"
          color="secondary"
          large
          >Send
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-form>
    <v-slide-y-transition>
      <div v-if="showError" class="py-1 mt-4">
        <v-alert dense type="error"
          >Sorry, there was an error submitting your message.
          Please try again.
        </v-alert>
      </div>
    </v-slide-y-transition>
    <v-slide-y-transition hide-on-leave>
        <div v-if="showSuccess" class="mt-4 py-1">
          <v-alert type="success" prominent>
            Thanks for your message.<br>
            One of our team will be in touch as soon as possible.
          </v-alert>
        </div>
      </v-slide-y-transition>
  </div>
</template>

<script>
export default {
   data() {
    return {
      enquiry: {
        name: "",
        telNumber: "",
        email: "",
        message: "",

      },
      loading: false,
      showSuccess: false,
      showError: false,
      rules: {
        required: (value) => !!value || "This is a required field!",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  methods: {
    handleSend() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        this.sendResults();
      }
    },

    sendResults(){
    },
    showSuccessAlert() {
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
        this.name = "";
        this.business = "";
        this.telNumber = "";
        this.email = "";
        this.message = "";
      }, 3000);
    },
    showErrorAlert() {
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
    },
  }
}
</script>

<style scoped>

.gwc-form.error--text,
.gwc-form .error--text {
  color: rgb(0, 0, 0) !important;
  caret-color: rgb(2, 0, 0) !important;
}

</style>