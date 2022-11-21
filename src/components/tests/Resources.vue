<template>
    <div id="tabs">
        <v-container
        class="white">
            <v-card
            flat
            outlined
            class="ma-5"
            v-for="(resource, id) in tests.Test"
            :key="id"
            >
                <v-row
                align="center"
                class="pa-5">
                    <div
                    class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3">
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
                    class="col-xs-6 col-sm-6 col-md-6 col-lg-4 col-xl-4">
                        <h5 class="text-h5">Paymentshield {{ resource.Title }}</h5>
                        <span v-html="resource.Description"></span>
                    </div>
                    <div
                    class="col-xs-6 col-sm-6 col-md-6 col-lg-2 col-xl-2"
                    align="right">
                        <v-btn
                        x-large
                        color="mint"
                        class="white--text mt-auto"
                        target="_blank"
                        download
                        block
                        :href="baseURL + resource.File.url"
                        @click="downloadIDs(resource.id)">Download</v-btn>
                    </div>
                    <div
                    class="col-xs-6 col-sm-6 col-md-6 col-lg-3 col-xl-3"
                    align="right">
                        <v-dialog
                        v-model="dialog[id]"
                        max-width="500"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn
                            x-large
                            color="berrysmoothie"
                            class="white--text mt-auto"
                            block
                            v-bind="attrs"
                            v-on="on"
                            @click="viewAnswers(resource)"
                            >
                            View answers
                            </v-btn>
                        </template>
                            <v-card>
                                <v-card-title class="text-h5 grey lighten-2 mb-3 text-capitalize">
                                    {{dialogAnswers.Title}} Answers
                                </v-card-title>
                        
                                <v-card-text>
                                    <ol id="answers">
                                        <li v-for="answers in dialogAnswers.Answers"
                                        :key="answers.id">
                                            {{answers.Answer}}
                                        </li>
                                    </ol>
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                    </div> 
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
  export default {
    props: ['tests', 'baseURL'],
    data () {
        return {
            dialogAnswers: '',
            downloadID: '',
            dialog: []
        }
    },
    methods: {
        viewAnswers(answers){
            this.dialogAnswers = answers
        },
        downloadIDs(id){
            this.downloadID = id;
        }
    }
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
