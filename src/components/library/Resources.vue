<template>
    <div id="tabs">
        <v-container
        class="white">
            <v-card
            flat
            outlined
            class="ma-5"
            v-for="(resource, id) in library.LibraryResource"
            :key="id"
            >
                <v-row
                align="center"
                class="pa-5">
                    <div
                    class="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <img
                        :alt="resource.Title"
                        contain
                        :src="baseURL + resource.Thumbnail.url"
                        width="100%"
                        max-width="200px;"
                        class="ma-auto"
                        />
                    </div>
                    <div
                    class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <span class="nordicsky--text" v-html="resource.Description"></span>
                        <h5 class="text-h5 leadingCap">{{ resource.Title }}</h5>
                    </div>
                    <v-col
                    align="right">
                        <v-btn
                        x-large
                        color="mint"
                        block
                        class="white--text mt-auto"
                        target="_blank"
                        :href="baseURL + resource.File.url">Download</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
  export default {
    props: ['library', 'baseURL'],
  }
</script>

<style scoped>
    .v-tab {
        text-transform: capitalize;
        font-size: 18px;
        font-weight: 100;
    }

    .v-tab:before {
        background-color: transparent !important;
    }

    .v-tabs {
        border-bottom: 1px solid #ddd;
    }

    .v-slide-group__content .v-tabs-slider[style] {
        background-color: #fab519 !important;
    }
</style>
