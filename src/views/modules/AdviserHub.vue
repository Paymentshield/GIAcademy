<template>
  <div id="AdviserHub"
  class="background">
    <div v-show="module">
      <Banner :module="module" :baseURL="baseURL"/>
      <Navigation/>
      <Module :steps="steps" :module="module" :baseURL="baseURL"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/modules/AdviserHub/Banner.vue';
import Navigation from '@/components/home/Navigation';
import Module from '@/components/modules/AdviserHub/Module.vue';

  export default {
    name: 'AdviserHub',

     components: {
        Banner,
        Navigation,
        Module
    },

    data () {
      return {
        module: {
          "id": 4,
          "PageBanner": {
              "id": 3,
              "Title": "Adviser Hub",
              "Body": "<p>In this module, we’ll explore our unique Adviser Hub and how you can utilise its features to help grow your GI business. From quoting and making the most of my GI book through to how to use the potential earnings calculator.</p>",
              "Thumbnail": {
                  "id": 11,
                  "width": 500,
                  "height": 333,
                  "ext": ".png",
                  "mime": "image/png",
                  "url": "/assets/img/balls/adviser_hub.png",
              }
          },
          "Modules": [
              {
                  "id": 1,
                  "Title": "Quoting & quote results",
                  "Description": "<p>A look at how to quote using Quick Quote and full quote, including when you might choose to use these. Plus, a run-through of all the features of the quote result screen and some quoting tips.</p>",
                  "File": {
                      "id": 2,
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-02-03/8qjfk/682253/1643901234UK2NTZW7/Paymentshield_Quoting___quote_results_Workbook_02209_03022022.pdf",
                  }
              },
              {
                  "id": 2,
                  "Title": "My GI book",
                  "Description": "<p>A run-through of all the features available in my GI book and how to utilise them to support the growth of your GI business.</p>",
                  "File": {
                      "id": 6,
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-02-03/8qjgk/682253/1643902606iWiOZVBd/Paymentshield_My_GI_book__Workbook_02210_03022022.pdf",
                  }
              },
              {
                  "id": 3,
                  "Title": "Potential earnings calculator",
                  "Description": "<p>Need to know what your potential earnings could be from GI? This chapter shows you where to find the calculator and how to use it, how to maximise your earnings and what your commission options are.</p>",
                  "File": {
                      "id": 8,
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-02-03/8qjgm/682253/1643902823P21Qnybg/Paymentshield_Potential_earnings_calculator_Workbook_02211_03022022.pdf",
                  }
              },
              {
                  "id": 8,
                  "Title": "Download certificate",
                  "Description": "Once you’ve completed all of the chapters in this module please download your certificate.",
                  "File": {
                      "id": 8,
                      "name": ".pdf",
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-02-03/8qhxr/682253/16438854172WuGRWrK/PSL_Adviser_Hub_Module_4_Certificate_03022022.pdf",
                  }
              }
          ]
      },
        baseURL: '',        
        steps: 4,
        totalSteps: '',
      }
    },
    mounted(){
      window.dataLayer.push({
        'event':'virtualPageView',
        'virtualPageURL':'/vpv/training-modules/adviser-hub',
        'virtualPageTitle' : 'Adviser Hub Test | GI Academy'
      }); 
    }
  }
</script>
