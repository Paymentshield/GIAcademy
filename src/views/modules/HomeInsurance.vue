<template>
  <div id="HomeInsurance"
  class="background">
    <div v-show="module">
      <Banner :module="module" :baseURL="baseURL"/>
      <Navigation/>
      <Module :steps="steps" :module="module" :baseURL="baseURL"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/modules/HomeInsurance/Banner';
import Navigation from '@/components/home/Navigation';
import Module from '@/components/modules/HomeInsurance/Module.vue';

  export default {
    name: 'HomeInsurance',

     components: {
        Banner,
        Navigation,
        Module
    },

    data () {
      return {
        module: {
          "id": 1,
          "PageBanner": {
              "id": 3,
              "Title": "Home Insurance",
              "Body": "<p>In this module we’ll illuminate what makes our Home Insurance so special. The chapters will cover everything you need to know to confidently discuss the benefits of the core policy and our optional extras.</p>",
              "Thumbnail": {
                  "id": 11,
                  "name": "gi_Logo.png",
                  "alternativeText": "GI Academy Logo",
                  "width": 500,
                  "height": 333,
                  "ext": ".png",
                  "mime": "image/png",
                  "url": "/assets/img/balls/home_insurance_ball.png",
              }
          },
          "Modules": [
              {
                  "id": 1,
                  "Title": "Home Insurance",
                  "Description": "<p>Discover the key benefits of Paymentshield’s Buildings and Contents Insurance and what optional extras are available.</p>",
                  "File": {
                      "id": 2,
                      "name": "Home Insurance Workbook",
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-11-12/82l1x/682253/1636731495YZiB1AzR/Paymentshield_Home_Insurance_Workbook_02125_12112021.pdf",
                  }
              },
              {
                  "id": 2,
                  "Title": "Optional extras",
                  "Description": "<p>Find out more about our optional extras including the key features and benefits along with the common exclusions you need to be aware of. </p>",
                  "File": {
                      "id": 6,
                      "name": "02126_optional_extras_Workbook_01102021.pdf",
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vf5b/682253/1633612580zs82491M/Paymentshield_Optional_Extras_Workbook_02126_01102021.pdf",
                  }
              },
              {
                  "id": 3,
                  "Title": "Specifying items",
                  "Description": "<p>Understand the importance of specifying items and get comfortable with what belongings needs to be specified depending on what kind of item they are and their value.</p>",
                  "File": {
                      "id": 8,
                      "name": "02127_Specifying-Items_Workbook_30092021.pdf",
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vf68/682253/1633613493Yl4qcWT7/Paymentshield_Specifying_Items_Workbook_02127_07102021.pdf",
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
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqlz/682253/16336954512juVrGy1/Paymentshield_certificate_module_2.pdf",
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
        'virtualPageURL':'/vpv/training-modules/home-insurance',
        'virtualPageTitle' : 'Home Insurance | GI Academy'
      }); 
    }
  }
</script>
