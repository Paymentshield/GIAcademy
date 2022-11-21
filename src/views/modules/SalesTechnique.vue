<template>
  <div id="SalesTechnique"
  class="background">
    <div v-show="module">
      <Banner :module="module" :baseURL="baseURL"/>
      <Navigation/>
      <Module :steps="steps" :module="module" :baseURL="baseURL"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/modules/SalesTechnique/Banner.vue';
import Navigation from '@/components/home/Navigation';
import Module from '@/components/modules/SalesTechnique/Module.vue';

  export default {
    name: 'SalesTechnique',

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
              "Title": "Sales Techniques",
              "Body": "<p>In this module we’ll cover some of the techniques used by successful advisers to help win your clients’ business. We’ll look at best practice throughout the sales process from getting your prep right to handling objections and difficult questions from your client.</p>",
              "Thumbnail": {
                  "id": 11,
                  "width": 500,
                  "height": 333,
                  "ext": ".png",
                  "mime": "image/png",
                  "url": "/assets/img/balls/sales_technique.png",
              }
          },
          "Modules": [
              {
                  "id": 1,
                  "Title": "Fact finding and questioning",
                  "Description": "<p>A look at how to prepare effectively for your client discussions and use different questioning techniques to help fully understand your clients’ needs.</p>",
                  "File": {
                      "id": 1,
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-05-19/b3yf5/682253/1652956999Kh8v7YiR/Paymentshield_Fact_Finding_Workbook_02272_05052022.pdf",
                  }
              },
              {
                  "id": 2,
                  "Title": "Presenting to the client",
                  "Description": "<p>Understand the importance of highlighting the value of your advice and consider two different tried and tested approaches when presenting insurance quotes to your clients.</p>",
                  "File": {
                      "id": 2,
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-05-19/b3yfc/682253/1652957215kCjW3lFK/Paymentshield_Presenting_to_a_client_Workbook_02273_06052022.pdf",
                  }
              },
              {
                  "id": 3,
                  "Title": "Overcoming objections",
                  "Description": "<p>Take a look at the most common questions and concerns clients have when buying insurance and the different techniques successful advisers use to overcome these objections.</p>",
                  "File": {
                      "id": 3,
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-05-19/b3yf8/682253/1652957000tfR7JTet/Paymentshield_Objection_Handling_Workbook_02274_06052022.pdf",
                  }
              },
              {
                  "id": 4,
                  "Title": "Download certificate",
                  "Description": "Once you’ve completed all of the chapters in this module please download your certificate.",
                  "File": {
                      "id": 4,
                      "name": ".pdf",
                      "ext": ".pdf",
                      "mime": "application/pdf",
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-05-16/b2n1k/682253/1652687158g3JpQNUj/PSL_Sales_techniques_Module_6_Certificate_13052022.pdf",
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
        'virtualPageURL':'/vpv/training-modules/sales-techniques',
        'virtualPageTitle' : 'Sales Techniques Test | GI Academy'
      }); 
    }
  }
</script>
