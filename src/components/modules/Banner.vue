<template>
    <div class="footergrey">
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
              src="@/assets/img/giLogo.png"
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
              <h1 class="white--text text-h3">Introduction to <span class="gi mustard--text">GI</span></h1>
              <p class="white--text text-subtitle-1 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non turpis in nunc dapibus aliquam vitae quis velit. Sed iaculis massa aliquam turpis fermentum, nec euismod metus posuere. Nunc purus odio, posuere sed ante sed, porta venenatis lacus. Fusce sed quam in lectus tincidunt ultrices.</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<style scoped>
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
