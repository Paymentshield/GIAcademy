<template>
  <div id="RegulatoryChanges"
  class="background">
    <div v-show="module">
      <Banner :module="module" :baseURL="baseURL"/>
      <Navigation/>
      <Module :steps="steps" :module="module" :baseURL="baseURL"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/modules/RegulatoryChanges/Banner.vue';
import Navigation from '@/components/home/Navigation';
import Module from '@/components/modules/RegulatoryChanges/Module.vue';

  export default {
    name: 'RegulatoryChanges',

     components: {
        Banner,
        Navigation,
        Module
    },

    data () {
      return {
        module: {
          "id": 5,
          "PageBanner": {
              "id": 4,
              "Title": "Regulatory Changes",
              "Body": "<p>This module has been created to help keep you up to speed on any significant regulatory changes around general insurance.</p>",
              "Thumbnail": {
                  "id": 11,
                  "width": 500,
                  "height": 333,
                  "ext": ".png",
                  "mime": "image/png",
                  "url": "/assets/img/balls/regulatory_changes.png",
              }
          },
          "Modules": [
              {
                  "id": 1,
                  "Title": "GI pricing practices",
                  "Description": "<p>This chapter covers the FCA's latest guidance on general insurance pricing practices, how Paymentshield has responded and the possible impact the guidance may have on advisers.</p>",
                  "File": {
                      "id": 2,
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-02-03/8qjl1/682253/1643903474fzQF6pa6/Paymentshield_GI_pricing_practices_Workbook_02208_03022022.pdf",
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
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-02-03/8qjm7/682253/1643904320rZynhM8F/PSL_Regulatory_changes_Module_5_Certificate_03022022.pdf",
                  }
              }
          ]
      },
        baseURL: '',        
        steps: 2,
        totalSteps: '',
      }
    },
    mounted(){
      window.dataLayer.push({
        'event':'virtualPageView',
        'virtualPageURL':'/vpv/training-modules/regulatory-changes',
        'virtualPageTitle' : 'Regulatory Changes Test | GI Academy'
      }); 
    }
  }
</script>
