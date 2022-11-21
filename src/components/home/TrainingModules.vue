<template>
    <div id="tabs">
        <v-container
        class="white">
            <v-card
            flat
            outlined
            class="ma-5"
            v-for="(trainingModule, id) in modules.TrainingModule"
            :key="id"
            >
                <v-row
                align="center"
                class="pa-5"
                >
                    <div
                    class="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <img
                        :alt="trainingModule.Thumbnail.alternativeText"
                        contain
                        :src="baseURL + trainingModule.Thumbnail.url"
                        width="100%"
                        max-width="200"
                        class="ma-auto"
                        />
                    </div>
                    <div
                    class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <h5 class="text-h5">{{ trainingModule.Title }}</h5>
                        <!-- <h5 class="text-subtitle-1">Topics covered:</h5> -->
                        <span v-html="trainingModule.Topics"></span>
                    </div>
                    <v-col
                    align="right"
                    >
                        <v-btn
                        x-large
                        color="berrysmoothie"
                        class="white--text mt-auto"
                        block
                        v-if="!IntroToGICompleted && id === 0 || !HomeInsuranceCompleted && id === 1 || !OtherInsuranceCompleted && id === 2 || !AdviserHubCompleted && id === 3 || !RegulatoryChangesCompleted && id === 4 || !SalesTechniqueCompleted && id === 5"
                        :to="trainingModule.URL">Start module</v-btn>

                        <router-link 
                        class="text-decoration-none"
                        :to="trainingModule.URL">
                            <v-btn
                            x-large
                            color="mint"
                            block
                            class="white--text mt-auto"
                            v-if="IntroToGICompleted && id === 0 || HomeInsuranceCompleted && id === 1 || OtherInsuranceCompleted && id === 2 || AdviserHubCompleted && id === 3 || RegulatoryChangesCompleted && id === 4 || SalesTechniqueCompleted && id === 5"
                            @click="resetStorage(id)">Restart module</v-btn>
                        </router-link>
                    </v-col>
                    <span class="completedCertificate" v-if="IntroToGICompleted && id === 0">
                        <i class="fas fa-award fa-3x mint--text"></i>
                    </span>
                    <span class="completedCertificate" v-if="HomeInsuranceCompleted && id === 1">
                        <i class="fas fa-award fa-3x mint--text"></i>
                    </span>
                    <span class="completedCertificate" v-if="OtherInsuranceCompleted && id === 2">
                        <i class="fas fa-award fa-3x mint--text"></i>
                    </span>
                    <span class="completedCertificate" v-if="AdviserHubCompleted && id === 3">
                        <i class="fas fa-award fa-3x mint--text"></i>
                    </span>
                    <span class="completedCertificate" v-if="RegulatoryChangesCompleted && id === 4">
                        <i class="fas fa-award fa-3x mint--text"></i>
                    </span>
                    <span class="completedCertificate" v-if="SalesTechniqueCompleted && id === 5">
                        <i class="fas fa-award fa-3x mint--text"></i>
                    </span>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
export default {
    props: ['modules', 'baseURL'],
    data(){
        return {
            IntroToGICompleted: '',
            HomeInsuranceCompleted: '',
            OtherInsuranceCompleted: '',
            AdviserHubCompleted: '',
            RegulatoryChangesCompleted: '',
            SalesTechniqueCompleted: ''
        }
    },
    mounted() {
        // Get the data
        var IntroToGICompleted = localStorage.getItem('IntroToGICompleted');
        var HomeInsuranceCompleted = localStorage.getItem('HomeInsuranceCompleted');
        var OtherInsuranceCompleted = localStorage.getItem('OtherInsuranceCompleted');
        var AdviserHubCompleted = localStorage.getItem('AdviserHubCompleted');
        var RegulatoryChangesCompleted = localStorage.getItem('RegulatoryChangesCompleted');
        var SalesTechniqueCompleted = localStorage.getItem('SalesTechniqueCompleted');

        // Convert the localStorage string to an array
        this.IntroToGICompleted = JSON.parse(IntroToGICompleted);
        this.HomeInsuranceCompleted = JSON.parse(HomeInsuranceCompleted);
        this.OtherInsuranceCompleted = JSON.parse(OtherInsuranceCompleted);
        this.AdviserHubCompleted = JSON.parse(AdviserHubCompleted);
        this.RegulatoryChangesCompleted = JSON.parse(RegulatoryChangesCompleted);
        this.SalesTechniqueCompleted = JSON.parse(SalesTechniqueCompleted);
    },
    methods: {
        resetStorage(id) {
            console.log(id)
            if (id === 0) {
                localStorage.removeItem('IntroToGICompleted')
            }
            if (id === 1) {
                localStorage.removeItem('HomeInsuranceCompleted')
            }
            if (id === 2) {
                localStorage.removeItem('OtherInsuranceCompleted')
            }
            if (id === 3) {
                localStorage.removeItem('AdviserHubCompleted')
            }
            if (id === 4) {
                localStorage.removeItem('RegulatoryChangesCompleted')
            }
            if (id === 5) {
                localStorage.removeItem('SalesTechniqueCompleted')
            }
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

    .v-btn {
        text-transform: none !important;
    }

    span.completedCertificate {
        position: absolute;
        top: -10px;
        right: -10px;
        background: #ffffff;
    }

    /* .completedCertificate i {
        transform: rotate(20deg);
    } */
</style>
