<template>

  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:py-20">
      <div class="max-w-3xl sm:mt-10 mt-10 mx-auto text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gold sm:text-4xl uppercase">
          {{ $t("services.title") }}
        </h2>
        <p class="mt-4 text-gray-500">
        </p>
      </div>

      <div class="mt-5 lg:mt-20">
        <div v-for="(person, featureIdx) in ourservices" :key="person.name" :id="person.id" :ref="person.ref" class="flex mb-5 flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-2 py-4 lg:items-center">
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-6 xl:col-start-5', 'mt-6 lg:mt-0 lg:row-start-1 lg:col-span-8 xl:col-span-7']">
            <h3 :class="[featureIdx % 2 === 0 ? 'text-center lg:text-left' : 'text-center lg:text-right']" class="text-xl font-medium uppercase" style="font-weight: 800;">{{ person.name }}</h3>
            <p :class="[featureIdx % 2 === 0 ? 'text-center lg:text-justify' : 'text-center lg:text-justify']" class="mt-2 text-base">{{ person.bio }}</p>
            <!-- <div v-if="person.href == 1">
              <button class="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gold bg-bord focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold">
                {{person.button}}
              </button>
            </div>
            <div v-else>
              <router-link :to="person.href" class="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gold bg-bord focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold">
                {{person.button}}
              </router-link>
            </div> -->
          </div>
          <div :class="[featureIdx % 2 === 0 ? 'lg:col-start-10 xl:col-start-9' : 'lg:col-start-1', 'flex-auto lg:row-start-1 lg:col-span-3 xl:col-span-3']">
            <div class="bg-gray-100 overflow-hidden shadow-2xl">
              <img :src="person.imageUrl" :alt="person.alt" class="object-center object-cover h-96 w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {  return { } },

  components: { },

  setup() {
    return {
    }
  },

  mounted() { },


  computed: {

    ourservices() {

      return [
        {
          name: this.$t('services.sauna.title'),
          imageUrl: 'img/sauna.jpg',
          bio: this.$t('services.sauna.description'),
          alt: this.$t('services.sauna.alt'),
          id:'id1',
        },
        {
          name: this.$t('services.pool.title'),
          imageUrl: 'img/pool.jpg',
          bio: this.$t('services.pool.description'),
          alt: this.$t('services.pool.alt'),
           id:'id2',
        },
        {
          name: this.$t('services.wintergarden.title'),
          imageUrl: 'img/wintergarden.jpg',
          bio: this.$t('services.wintergarden.description'),
          alt: this.$t('services.wintergarden.alt'),
          id:'id3',

        },
        {
          name: this.$t('services.garden.title'),
          imageUrl: 'img/garden.jpg',
          bio: this.$t('services.garden.description'),
          alt: this.$t('services.garden.alt'),
          id:'id4',
        },
        {
          name: this.$t('services.catering.title'),
          imageUrl: 'img/dish.jpg',
          bio: this.$t('services.catering.description'),
          alt: this.$t('services.catering.alt'),
           id:'id5',
        },
      ]
    },
  }
}
</script>
