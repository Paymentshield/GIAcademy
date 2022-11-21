<template>
  <v-app>
    <v-app-bar
      app
      color="headergrey"
      dark
    >
      <div class="d-flex align-center">
        <router-link
          to="/">
          <v-img
            alt="Paymentshield Logo"
            class="shrink mt-1"
            contain
            min-width="150"
            src="./assets/img/logo.png"
            width="150"
          />
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
      @click="drawer = true"
      align="right"
      class="drawerContainer"/>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer
            v-model="drawer"
            temporary
            class="fixedPos"
            fixed
          >
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="@/assets/img/giLogo.png"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title><span class="gi">GI</span> Academy</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
            <v-list dense>
              <div 
                v-for="item in items"
                :key="item.title"
              >
                <v-list-item
                  v-if="item.href"
                  link
                  :href="item.link"
                  target="_blank"
                >
                  <v-list-item-content
                  align="center">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item
                  v-if="!item.href"
                  link
                  :to="item.link"
                >
                  <v-list-item-content
                  align="center">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </div>
            </v-list>
          </v-navigation-drawer>
          <v-btn
            large
            color="mint"
            bottom
            right
            elevation="2"
            fixed
            class="above"
            target="_blank"
            href="https://paymentshield.typeform.com/to/EqM84SrC"
          >
            Feedback
          </v-btn>
      <Main/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Main from './views/Main';
import Footer from './views/Footer';

export default {
  name: 'App',

  components: {
    Main,
    Footer,
  },
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Training modules', link: '/' },
        { title: 'Tests', link: '/tests' },
        { title: 'Library', link: '/library' },
        { title: 'Events', link: '/events' },
        { title: 'Book a callback', link: 'https://www.paymentshieldadvisers.co.uk/contact-us', href: true },
      ],
    }
  },
  watch: {
      '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Your Website'
        },
         immediate: true
      }
    }
};
</script>

<style scoped>
.fixedPos .v-list-item--active .v-list-item__content::after {
  background: #fab519;
  content: "";
  height: 1px;
  width: 60%;
  bottom: -8px;
  position: relative;
  left: 20%;
}

.v-list-item--dense .v-list-item__title, .v-list-item--dense .v-list-item__subtitle, .v-list--dense .v-list-item .v-list-item__title, .v-list--dense .v-list-item .v-list-item__subtitle {
  font-size: 18px;
  font-weight: 400;
  line-height: 20px;
}

.theme--light.v-list-item--active:hover::before, .theme--light.v-list-item--active::before {
  opacity: 0;
}

span.gi {
  font-weight: 900 !important;
  color: #fab519;
}

.above {
  z-index: 99;
}

@media screen and (max-width: 960px) {
  .drawerContainer {
    display: block;
  }
}

@media screen and (min-width: 960px) {
  .drawerContainer {
    display: none;
  }
}
</style>
