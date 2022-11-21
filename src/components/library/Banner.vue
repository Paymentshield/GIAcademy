<template>
    <div class="webgrey">
      <v-container>
        <v-row class="headerBanner pa-10">
          <v-col
            col="12"
            xs="12"
            sm="12"
            md="3"
            lg="3"
            xl="3">
            <v-img
              alt="GI Academy Logo"
              contain
              min-width="185"
              :src="baseURL + library.PageBanner.Thumbnail.url"
              width="185"
              class="ma-auto"
            />
          </v-col>
          <v-col
            col="12"
            xs="12"
            sm="12"
            md="9"
            lg="9"
            xl="9">
              <h1 class="white--text text-h3" v-html="library.PageBanner.Title"></h1>
              <p class="white--text text-subtitle-1 mt-5" v-html="library.PageBanner.Body"></p>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<script>
  export default {
    props: ['library', 'baseURL'],
  }
</script>

<style>
.headerBanner h1 {
  font-weight: 300;
}

.headerBanner h1 span {
  text-transform: uppercase;
}

.headerBanner h1 span.gi {
  font-weight: 900 !important;
}
</style>
