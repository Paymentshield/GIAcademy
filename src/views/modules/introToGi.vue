<template>
  <div id="introToGi"
  class="background">
    <div v-show="module">
      <Banner :module="module" :baseURL="baseURL"/>
      <Navigation/>
      <Module :steps="steps" :module="module" :baseURL="baseURL"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/modules/introToGi/Banner';
import Navigation from '@/components/home/Navigation';
import Module from '@/components/modules/introToGi/Module';

  export default {
    name: 'introToGI',

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
              "Title": "Introduction to <span class=\"gi mustard--text\">GI</span>",
              "Body": "<p>This module will shine a light on how important it is that every customer gets advice when buying insurance so they end up with a policy that properly meets their needs and you can develop a strong recurring income.</p>",
              "Thumbnail": {
                  "id": 11,
                  "name": "gi_Logo.png",
                  "alternativeText": "GI Academy Logo",
                  "width": 500,
                  "height": 333,
                  "ext": ".png",
                  "mime": "image/png",
                  "size": 249.53,
                  "url": "/assets/img/balls/intro_to_gi.png",
              }
          },
          "Modules": [
              {
                  "id": 1,
                  "Title": "Why GI?",
                  "Description": "<p>If you’re not already convinced about how important it is to discuss your client’s GI needs, then this is a great place to start. Find out why clients need advice and how that advice can avoid claims being rejected.</p>",
                  "File": {
                      "id": 2,
                      "name": "Why GI Workbook",
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vf2x/682253/1633611480eJVfcwQO/Paymentshield_Why_GI_Workbook_02122_01102021.pdf",
                  }
              },
              {
                  "id": 2,
                  "Title": "Why Paymentshield?",
                  "Description": "<p>Discover a little more about the journey Paymentshield have been on since 1992 and what makes our proposition so special.</p>",
                  "File": {
                      "id": 6,
                      "name": "02123_Why_Paymentshield_Workbook_01102021.pdf",
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vf4g/682253/1633611871JN43UUWU/Paymentshield_Why_Paymentshield_Workbook_02123_01102021.pdf",
                  }
              },
              {
                  "id": 3,
                  "Title": "Business planning ",
                  "Description": "<p>If you fail to plan you plan to fail, so get your GI sales going in the right direction with this chapter on how to create a GI business plan.</p>",
                  "File": {
                      "id": 8,
                      "name": "02124_Business-Plan_Workbook_30092021.pdf",
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vf4j/682253/1633611889U8q58PhU/Paymentshield_Business_Planning_Workbook_02124_01102021.pdf",
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
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqlx/682253/1633695400nLjSkuPp/Paymentshield_certificate_module_1.pdf",
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
        'virtualPageURL':'/vpv/training-modules/intro-to-gi',
        'virtualPageTitle' : 'Introduction to GI | GI Academy'
      }); 
    }
  }
</script>
