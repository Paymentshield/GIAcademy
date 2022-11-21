<template>
    <v-container
    class="navContainer">
        <v-bottom-navigation
            grow
            class="d-md"
        >
            <v-btn
            to="/"
            class="text-h6 font-weight-thin"
            max-width="210px"
            plain>
            Training modules
            </v-btn>

            <v-btn
            to="/tests"
            class="text-h6 font-weight-thin"
            max-width="210px"
            plain>
            Tests
            </v-btn>

            <v-btn
            to="/library"
            class="text-h6 font-weight-thin"
            max-width="210px"
            plain>
            Library
            </v-btn>

            <v-btn
            to="/events"
            class="text-h6 font-weight-thin"
            max-width="210px"
            plain>
            Events
            </v-btn>

            <v-btn
            href="https://www.paymentshieldadvisers.co.uk/contact-us?utm_source=direct&utm_medium=navigation&utm_campaign=book_a_callback&utm_id=gi_academy"
            target="_blank"
            class="text-h6 font-weight-thin"
            max-width="210px"
            plain
            onclick="gtag('event', 'Book a Callback', {'event_category' : 'Click', 'event_label' : 'Navigation'});"
            >
            Book a callback
            </v-btn>
        </v-bottom-navigation>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Training Modules', icon: 'mdi-view-dashboard', link: '/' },
          { title: 'Library', icon: 'mdi-forum', link: '/library' },
        ],
      }
    },
  }
</script>

<style scoped>
.v-item-group.v-bottom-navigation .v-btn.v-btn--active:after {
  content: '';
  height: 1px;
  width: 100%;
  background: #fab519;
  bottom: 7px;
  position: absolute;
}

.navContainer {
  padding: 0;
  border-bottom: 1px solid #ddd;
}

.navContainer .v-item-group.v-bottom-navigation {
  box-shadow: none;
}

.v-item-group.v-bottom-navigation--grow .v-btn {
  font-weight: 400 !important;
}

@media screen and (max-width: 960px) {
  .navContainer .v-bottom-navigation {
    display: none;
  }
}

@media screen and (max-width: 1265px) {
  .v-item-group.v-bottom-navigation--grow .v-btn {
    font-size: 18px !important;
  }
}

</style>