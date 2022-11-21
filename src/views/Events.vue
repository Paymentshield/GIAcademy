<template>
  <div id="home"
  class="background">
    <div v-show="modules">
      <Banner :modules="modules" :baseURL="baseURL"/>
      <Navigation/>
      <Events :modules="modules" :baseURL="baseURL"/>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/events/Banner';
import Events from '@/components/events/Events';
import Navigation from '@/components/home/Navigation';

  export default {
    name: 'Main',

     components: {
        Banner,
        Events,
        Navigation
    },

    data () {
      return {
        modules: {
          "id": 1,
          "PageBanner": {
              "id": 1,
              "Title": "Events",
              "Body": "<p>Paymentshield regularly host events to help you make the most of the general insurance opportunity. Take a look at our on-demand events and sign up for future events below.</p>",
              "Thumbnail": {
                  "id": 7,
                  "name": "giLogo.png",
                  "alternativeText": "",
                  "ext": ".png",
                  "mime": "image/png",
                  "url": "/assets/img/balls/events.png",
              }
          },
          "Resources": [
            {
                  "id": 11,
                  "Title": "Ask us anything panel",
                  "Type": "Webinar",
                  "Topics": "<p>In support of this year's National Conversation Week, we put your questions to our panel of Paymentshield and industry experts on topics ranging from general insurance to the big industry questions.</p><p>This year's theme is all about how asking questions is an important part of developing deeper conversations and trying to eradicate the stigma often attached to asking what might be considered silly questions.</p><p>The panel included: Paul Shearman, The Openwork Partnership, Martin Reynolds, Simply Biz, Vincent O’Connor, The Right Mortgage, Brian Brown, Defaqto, Louise Pengelly & Dean Marson, Paymentshield.</p>",
                  "URL": "https://www.brighttalk.com/webcast/12919/538394?utm_source=Paymentshield_Limited&utm_medium=GI_Academy&utm_campaign=GI_Academy_Events",
                  "Date": "2022-05-25",
                  "ButtonText": "Register",
                  "Thumbnail": {
                      "id": 7,
                      "name": "ask_us_anything.png",
                      "alternativeText": "",
                      "ext": ".png",
                      "mime": "image/png",
                      "url": "/assets/img/events/ask_us_anything.png",
                  }
              },
            {
                  "id": 10,
                  "Title": "Imagine reassuring your remortgage clients",
                  "Type": "Webinar",
                  "Topics": "<p>Join Regional Sales Manager, Sarah Jackson, as she helps you imagine the possibilities the remortgage opportunity can bring in 2022 and the benefits that come from fulfilling your duty of care to your remortgage clients with a conversation about GI. Plus, enlightening your clients about the risk of underinsurance and how easy it might be to have a conversation about GI using our selection of tools and resources.</p>",
                  "URL": "https://www.brighttalk.com/webcast/12919/534020?utm_source=Paymentshield_Limited&utm_medium=GI_Academy&utm_campaign=GI_Academy_Events",
                  "Date": "2022-03-30",
                  "ButtonText": "Register",
                  "Thumbnail": {
                      "id": 7,
                      "name": "march-message-webinar.png",
                      "alternativeText": "",
                      "ext": ".jpg",
                      "mime": "image/jpg",
                      "url": "/assets/img/events/march-message-webinar.png",
                  }
              },
            {
                  "id": 9,
                  "Title": "Be GI: Stronger together conference.",
                  "Type": "Session recordings",
                  "Topics": "<p>The Stronger Together virtual conference was designed to help advisers to embrace general insurance (GI) and make the most out of the opportunity. The event brought together a fantastic mix of industry experts to take part in various panel discussions on hot topics within the industry along with a choice of GI specific training sessions led by experienced members of Paymentshield's regional sales team.</p>",
                  "URL": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vdr4",
                  "Date": "2021-10-21",
                  "ButtonText": "Register",
                  "Thumbnail": {
                      "id": 7,
                      "name": "be_gi.jpg",
                      "alternativeText": "",
                      "ext": ".jpg",
                      "mime": "image/jpg",
                      "url": "/assets/img/events/bi_gi.jpg",
                  }
              },
              {
                  "id": 8,
                  "Title": "What can you learn from Netflix?",
                  "Type": "Webinar",
                  "Topics": "<p>Regional Sales Manager, Alistair Morrison, takes a look at how you can incorporate GI into your remortgage sales process, exploring the tools at your disposal such as Premium Flex, our data enriched Quick Quote experience and other materials.</p>",
                  "URL": "https://www.brighttalk.com/webcast/12919/511528?utm_source=Paymentshield&utm_medium=brighttalk&utm_campaign=511528",
                  "Date": "2021-10-21",
                  "ButtonText": "Register",
                  "Thumbnail": {
                      "id": 7,
                      "name": "what_can_learn_netflix_webinar.jpg",
                      "alternativeText": "",
                      "ext": ".jpg",
                      "mime": "image/jpg",
                      "url": "/assets/img/events/what_can_learn_netflix_webinar.jpg",
                  }
              }
          ]
      },
        baseURL: '',
      }
    },
    mounted(){
      window.dataLayer.push({
        'event':'virtualPageView',
        'virtualPageURL':'/vpv/events',
        'virtualPageTitle' : 'Events | GI Academy'
      }); 
    }
  }
</script>
