<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
<!--        <img class="mx-auto h-12 w-auto" src="" alt="Workflow" />-->
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gold">
          Reset your password
        </h2>
        <p class="mt-2 text-center text-sm text-bord">
          insert email account
        </p>
      </div>
      <form @submit.prevent="handleSubmit" class="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Adresse e-mail</label>
            <input id="email-address" name="email" type="email" :rules="emailRules" v-model="email" autocomplete="email" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gold focus:border-goldfocus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gold bg-bord-light hover:bg-bord focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                          <LockClosedIcon class="h-5 w-5 text-bord group-hover:text-bord-light" aria-hidden="true" />
                        </span>
            Reset Password
          </button>
        </div>
      </form>
      <div v-if="validation != 0" class="rounded-md bg-green-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-green-800">
              {{ validation }}
            </h3>
            <div class="mt-2 text-sm text-green-700">
              <p>
                {{ validation }}
              </p>
            </div>
            <div class="mt-4">
              <div class="-mx-2 -my-1.5 flex">
                <a type="button" href="/" class="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600 right-0.5">
                  Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="errors != 0" class="rounded-md bg-red-50 p-4">
        <div class="flex">
          <div class="flex-shrink-0">
            <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800">
              error
            </h3>
          </div>
          <div class="ml-auto pl-3">
            <div class="-mx-1.5 -my-1.5">
              <button v-on:click="errors = 0" type="button" class="inline-flex bg-red-50 rounded-md p-1.5 text-red-800 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-50 focus:ring-red-600">
                <span class="sr-only">Dismiss</span>
                <XIcon class="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { LockClosedIcon, CheckCircleIcon, XCircleIcon, XIcon } from '@heroicons/vue/solid'

export default {
  components: {
    LockClosedIcon,
    CheckCircleIcon,
    XCircleIcon,
    XIcon
  },

  data() {
    return {
      email: "",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      validation:"",
      errors:"",
    }
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault()
      if (this.email.length > 0) {
        let email = this.email

        this.axios.post(process.env.VUE_APP_URL_API + 'api/forget-password',{email}).then(response=>{
          this.validation = response.data.message
        }).catch((error)=>{
          this.errors = error
        });
      }
    }
  }
}
</script>
