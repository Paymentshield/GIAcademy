<template>
  <div id="home"
  class="background">
    <div v-show="modules">
      <Banner :modules="modules" :baseURL="baseURL"/>
      <Navigation/>
      <TrainingModule :modules="modules" :baseURL="baseURL"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/home/Banner';
import TrainingModule from '@/components/home/TrainingModules';
import Navigation from '@/components/home/Navigation';

  export default {
    name: 'Main',

     components: {
        Banner,
        TrainingModule,
        Navigation
    },

    data () {
      return {
        modules: {
          "id": 1,
          "TrainingModule": [
              {
                  "id": 5,
                  "Title": "Introduction to GI",
                  "Topics": "<h5 class='text-subtitle-1'>Topics covered:</h5><ul><li>Why GI?</li><li>Why Paymentshield?</li><li>Business Planning</li></ul>",
                  "URL": "/training-modules/intro-to-gi",
                  "Date": "2021-09-09",
                  "ButtonText": null,
                  "Thumbnail": {
                      "id": 11,
                      "name": "hello.png",
                      "alternativeText": "",
                      "ext": ".png",
                      "mime": "image/png",
                      "size": 249.53,
                      "url": "/assets/img/hello.png",
                  }
              },
              {
                  "id": 6,
                  "Title": "Home Insurance",
                  "Topics": "<h5 class='text-subtitle-1'>Topics covered:</h5><ul><li>Home Insurance</li><li>Optional extras</li><li>Specifying items</li></ul>",
                  "URL": "/training-modules/home-insurance",
                  "Date": "2021-09-17",
                  "ButtonText": null,
                  "Thumbnail": {
                      "id": 10,
                      "name": "dog.png",
                      "alternativeText": "",
                      "ext": ".png",
                      "mime": "image/png",
                      "size": 255.66,
                      "url": "/assets/img/dog.png",
                  }
              },
              {
                  "id": 7,
                  "Title": "Other products",
                  "Topics": "<h5 class='text-subtitle-1'>Topics covered:</h5><ul><li>Landlord's Insurance</li><li>Mortgage Protection</li><li>Tenant's Contents Insurance</li></ul>",
                  "URL": "/training-modules/other-insurance",
                  "Date": "2021-09-17",
                  "ButtonText": null,
                  "Thumbnail": {
                      "id": 9,
                      "name": "ducks.png",
                      "alternativeText": "",
                      "ext": ".png",
                      "mime": "image/png",
                      "size": 286.95,
                      "url": "/assets/img/ducks.png",
                  }
              },
              {
                  "id": 8,
                  "Title": "Adviser Hub",
                  "Topics": "<h5 class='text-subtitle-1'>Topics covered:</h5><ul><li>Quoting & quote results</li><li>My GI book</li><li>Potential earnings calculator</li></ul>",
                  "URL": "/training-modules/adviser-hub",
                  "ButtonText": null,
                  "Thumbnail": {
                      "id": 9,
                      "name": "adviser_hub.jpg",
                      "alternativeText": "",
                      "ext": ".jpg",
                      "mime": "image/jpg",
                      "size": 286.95,
                      "url": "/assets/img/adviser_hub.jpg",
                  }
              },
              {
                  "id": 9,
                  "Title": "Regulatory Changes",
                  "Topics": "<h5 class='text-subtitle-1'>Topics covered:</h5><ul><li>GI pricing practices</li><li>more coming soon</li></ul>",
                  "URL": "/training-modules/regulatory-changes",
                  "ButtonText": null,
                  "Thumbnail": {
                      "id": 9,
                      "ext": ".jpg",
                      "mime": "image/jpg",
                      "size": 286.95,
                      "url": "/assets/img/regulatory_changes.jpg",
                  }
              },
              {
                  "id": 10,
                  "Title": "Sales Techniques",
                  "Topics": "<h5 class='text-subtitle-1'>Topics covered:</h5><ul><li>Fact finding and questioning</li><li>Presenting to the client</li><li>Overcoming objections</li></ul>",
                  "URL": "/training-modules/sales-technique",
                  "ButtonText": null,
                  "Thumbnail": {
                      "id": 9,
                      "ext": ".jpg",
                      "mime": "image/jpg",
                      "size": 286.95,
                      "url": "/assets/img/sales_technique.jpg",
                  }
              },
              {
                  "id": 11,
                  "Title": "Sales process",
                  "Topics": "<h5 class='text-subtitle-1'>Coming soon</h5>",
                  "URL": "",
                  "ButtonText": null,
                  "Thumbnail": {
                      "id": 9,
                      "name": "sales_process.jpg",
                      "alternativeText": "",
                      "ext": ".jpg",
                      "mime": "image/jpg",
                      "size": 286.95,
                      "url": "/assets/img/sales_process.jpg",
                  }
              }
          ],
          "PageBanner": {
              "id": 1,
              "Title": "Welcome to the <span class=\"gi mustard--text\">GI</span><span>Academy</span>",
              "Body": "<p>Here you’ll find official CPD certified training modules designed to transform anyone looking to find out more about Paymentshield and general insurance into a GI genius!</p><p>Each module is made up of a series of chapters which we encourage you to work through at your own pace and at the end of each module you’ll find a certificate to reward yourself for your efforts!</p>",
              "Thumbnail": {
                  "id": 7,
                  "name": "giLogo.png",
                  "alternativeText": "",
                  "ext": ".png",
                  "mime": "image/png",
                  "size": 41.54,
                  "url": "/assets/img/gi_Logo.png",
              }
          }
      },
        baseURL: '',
      }
    },
    mounted(){
        window.dataLayer.push({
            'event':'virtualPageView',
            'virtualPageURL':'/vpv/home',
            'virtualPageTitle' : 'Home | GI Academy'
        }); 
    }
  }
</script>
