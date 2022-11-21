<template>
  <div id="OtherInsurance"
  class="background">
    <div v-show="module">
      <Banner :module="module" :baseURL="baseURL"/>
      <Navigation/>
      <Module :steps="steps" :module="module" :baseURL="baseURL"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/modules/OtherInsurance/Banner';
import Navigation from '@/components/home/Navigation';
import Module from '@/components/modules/OtherInsurance/Module.vue';

  export default {
    name: 'OtherInsurance',

     components: {
        Banner,
        Navigation,
        Module
    },

    data () {
      return {
        module: {
          "PageBanner": {
            "id": 3,
            "Title": "Other products",
            "Body": "<p>In this module we’ll explore the range of other products we currently have available. The chapters will cover everything you need to know to confidently discuss the benefits of Landlord’s Insurance, Mortgage Protection and Tenant’s Contents Insurance.</p>",
            "Thumbnail": {
                "name": "placeholder.png",
                "alternativeText": "Placeholder",
                "width": 185,
                "height": 185,
                "ext": ".png",
                "url": "/assets/img/balls/other_products.png",
            }
          },
          "Modules": [
            {
              "id": 1,
              "Title": "Landlord's Insurance",
              "Description": "<p>Discover the key benefits of Paymentshield’s Landlord’s Insurance and what optional extras are available.</p>",
              "File": {
                "id": 2,
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": " https://info.paymentshieldadvisers.co.uk/l/682253/2021-11-17/83cr8/682253/1637150416uMpvtacm/Paymentshield_Landlords_Insurance_Workbook_02128_17112021.pdf",
              }
            },
            {
              "id": 2,
              "Title": "Mortgage Protection",
              "Description": "<p>Get to grips with the key features and benefits of Paymentshield’s Mortgage Protection. Plus, how best to tailor this product to your client’s needs and budget.</p>",
              "File": {
                "id": 2,
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": " https://info.paymentshieldadvisers.co.uk/l/682253/2021-11-17/83cr6/682253/1637150413eCdQmSWU/Paymentshield_Mortgage_Protector_Workbook_02130_17112021.pdf",
              }
            },
            {
              "id": 3,
              "Title": "Tenant's Contents Insurance",
              "Description": "<p>A run down of the key benefits available on Paymentshield’s Tenant’s Contents Insurance, what optional extras are offered and insight into this products choice & flexibility for you clients.</p>",
              "File": {
                "id": 2,
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": " https://info.paymentshieldadvisers.co.uk/l/682253/2021-11-12/82l6b/682253/1636733212486NZITs/Paymentshield_Tenants__Contents_Insurance_Workbook_02138_03112021.pdf",
              }
            },
            {
              "id": 4,
              "Title": "Download certificate",
              "Description": "<p>Once you’ve completed all of the chapters in this module please download your certificate.</p>",
              "File": {
                "id": 2,
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": " https://info.paymentshieldadvisers.co.uk/l/682253/2021-11-17/83dgd/682253/1637155380j8wVIzY2/Paymentshield_Other_Products_Certificate_17112021.pdf",
              }
            },
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
        'virtualPageURL':'/vpv/training-modules/other-insurance',
        'virtualPageTitle' : 'Other Insurance | GI Academy'
      }); 
    }
  }
</script>
