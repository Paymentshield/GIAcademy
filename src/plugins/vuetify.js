import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from '/src/assets/js/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.psl.headergrey, // #272727
        headergrey: colors.psl.headergrey, //#272727
        webgrey: colors.psl.webgrey, //#2C3536
        footergrey: colors.psl.footergrey, //#363636
        mustard: colors.psl.mustard, //#FAB519
        steelygrey: colors.psl.steelygrey, //#665D58
        mint: colors.psl.mint, //#8FC99D
        berrysmoothie: colors.psl.berrysmoothie, //#CF6A86
        nordicsky: colors.psl.nordicsky, //#67B5BA
        thistle: colors.psl.thistle, //#A190A3
        navy: colors.psl.navy, //#071F36
        orange: colors.psl.orange, //#F18A22
        teal: colors.psl.teal, //#009BA4
        firstdawn: colors.psl.firstdawn, //#BCD1D2
        background: colors.psl.background, //#E9EAEA
        limegreen: colors.psl.limegreen, //#D1D834
        juicyred: colors.psl.juicyred, //#E50046
        purplepout: colors.psl.purplepout, //#473185
        wolfy: colors.psl.wolfy, //#071215
        hippo: colors.psl.hippo, //#C3C1BA
        putty: colors.psl.putty, //#DEE0CE
      },
    },
  },
})
