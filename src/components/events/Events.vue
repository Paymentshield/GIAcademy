<template>
    <div id="tabs">
        <v-container
        class="white">
            <v-card
            flat
            outlined
            class="ma-5"
            v-for="(event, id) in modules.Resources"
            :key="id"
            >
                <v-row
                align="center"
                class="pa-5"
                >
                    <div
                    class="col-xs-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                        <img
                        :alt="event.Thumbnail.alternativeText"
                        contain
                        :src="baseURL + event.Thumbnail.url"
                        width="100%"
                        max-width="200"
                        class="ma-auto"
                        />
                    </div>
                    <div
                    class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <span class="nordicsky--text" v-html="event.Type"></span>
                        <h5 class="text-h5">{{ event.Title }}</h5>
                        <!-- <h5 class="text-subtitle-1">Topics covered include:</h5> -->
                        <span v-html="event.Topics"></span>
                    </div>
                    <v-col
                    align="right"
                    >
                        <v-btn
                        v-if="today <= event.Date"
                        color="berrysmoothie"
                        x-large
                        block
                        class="white--text mt-auto"
                        target="_blank"
                        :href="event.URL">
                            Register
                        </v-btn>
                        <v-btn
                        v-if="today > event.Date"
                        color="mint"
                        x-large
                        block
                        class="white--text mt-auto"
                        target="_blank"
                        :href="event.URL">
                            Watch
                        </v-btn>
                    </v-col>
                    <span class="eventDate" v-if="today <= event.Date">
                        {{event.Date | moment}}
                    </span>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    props: ['modules', 'baseURL'],
    data(){
        return {
            today: ''
        }
    },
    filters: {
        moment: function (date) {
            return moment(date).format('D [\r\n] MMM [\r\n] YYYY');
        }
    },
    mounted() {
        this.today = moment().format('YYYY-MM-DD');
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

    span.eventDate {
        position: absolute;
        top: -10px;
        right: 15px;
        background: #67b5ba;
        white-space: pre;
        color: #ffffff;
        text-align: center;
        box-shadow: 2px 8px 12px #6b6666;
        padding: 5px;
        font-size: 12px;
    }

    span.eventDate:before {
        content: '';
        left: -6px;
        top: 0;
        display: block;
        position: absolute;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 10px 6px 0px 0;
        border-color: transparent #447a7d transparent transparent;
    }
</style>
