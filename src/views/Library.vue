<template>
  <div id="library"
  class="background">
      <Banner :library="library" :baseURL="baseURL"/>
      <Navigation/>
      <Resources :library="library" :baseURL="baseURL"/>
  </div>
</template>

<script>
import Banner from '@/components/library/Banner';
import Resources from '@/components/library/Resources';
import Navigation from '@/components/home/Navigation';

  export default {
    name: 'Library',

     components: {
        Banner,
        Navigation,
        Resources
    },

    data () {
      return {
        tab: null,
        library: {
          "id": 1,
          "PageBanner": {
              "id": 1,
              "Title": "<span class=\"gi mustard--text\">GI</span><span> Library</span>",
              "Body": "<p>If you’ve got a thirst for knowledge you’re in the right place! We’ve got a whole selection of additional resources to support your GI learning.</p>",
              "Thumbnail": {
                  "id": 7,
                  "ext": ".png",
                  "mime": "image/png",
                  "url": "/assets/img/balls/library.png",
              }
          },
          "LibraryResource": [
              {
                  "id": 1,
                  "Title": "How to get your clients in the mood for GI",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/Get_your-clients-in-the-mood_ebook.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vf6d/682253/1633613674GOKgD5go/Paymentshield_Get_your_clients_in_the_mood_ebook_01901_14092021.pdf",
                  }
              },
            //   {
            //       "id": 2,
            //       "Title": "How to maximise your earnings",
            //       "Description": "eBook",
            //       "Thumbnail": {
            //           "id": 1,
            //           "url": "/assets/img/ebooks/maximise-your-earnings_ebook.jpg",
            //       },
            //       "File": {
            //           "id": 1,                  
            //           "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vn4d/682253/1633618315zAYuVUly/Paymentshield_maximise_your_earnings_ebook_01688_14092021.pdf",
            //       }
            //   },
              {
                  "id": 3,
                  "Title": "Grow your business from your cancelled clients",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/grow-your-business-from-your-cancelled-clients_ebook.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vn4l/682253/1633618536cvfLYorv/Paymentshield_grow_your_business_cancelled_clients_ebook_01679_1409202.pdf",
                  }
              },
              {
                  "id": 4,
                  "Title": "3 things mortgage advisers need to be doing right now",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/3_Things_eBook.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vn4n/682253/16336187460QzD9oLZ/Paymentshield_3_Things_eBook_01635_14092021.pdf",
                  }
              },
              {
                  "id": 5,
                  "Title": "Adviser hub: a slice of the action",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/Adviser-Hub-Slice-Action_ebook.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vn6z/682253/1633619019KzNmitEO/PSL_Adviser_Hub_Slice_Action_ebook_02054_14092021.pdf",
                  }
              },
              {
                  "id": 6,
                  "Title": "22 questions you should always ask",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/22-questions_ebook.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vn76/682253/1633619115JH3jnt6K/PSL_22_questions_ebook_01624_14092021.pdf",
                  }
              },
              {
                  "id": 7,
                  "Title": "GI specialists’ pearls of wisdom",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/GI_specialist_ebook.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vn7g/682253/16336191825IvGzGKM/PSL_GI_specialist_ebook_01782_14092021.pdf",
                  }
              },
              {
                  "id": 8,
                  "Title": "7 steps to supercharge your GI  sales to remortgage clients",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/7_STEPS_REMO_EBOOK.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vn7j/682253/1633619252Wt16P0rd/PSL_7_STEPS_REMO_EBOOK_02080_19082021.pdf",
                  }
              },
              {
                  "id": 9,
                  "Title": "7 habits of highly effective advisers",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/7-habits-of-highly-successful-advisers_ebooks.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vn82/682253/1633619327kegezvhs/PSL_7_habits_of_highly_successful_advisers_ebooks_01683_14092021.pdf",
                  }
              },
              {
                  "id": 10,
                  "Title": "How to compete & win",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/how_to_compete_and_win_ebook.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-07/7vn84/682253/1633619397Zab7EaGm/PSL_how_to_compete_and_win_ebook_01861_14092021.pdf",
                  }
              },
              {
                  "id": 11,
                  "Title": "Making the connection",
                  "Description": "eBook",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/ebooks/Making-a-connection_ebook.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-06-04/6vhbj/682253/1622811158UdaAOBPh/Paymentshield_01996_Making_a_connection_ebook_04062021.pdf",
                  }
              },
            //   {
            //       "id": 12,
            //       "Title": "The Specifying Script",
            //       "Description": "NO FILE",
            //       "Thumbnail": {
            //           "id": 1,
            //           "url": "/assets/img/ebooks/specifying_script_EBOOK.jpg",
            //       },
            //       "File": {
            //           "id": 1,                  
            //           "url": "/assets/pdf/ebooks/.pdf",
            //       }
            //   },
              {
                  "id": 13,
                  "Title": "Is consumer or adviser apathy reducing the number of GI sales at remortgage?",
                  "Description": "Whitepaper",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/whitepaper/apathy_reducing_number_gi_sales_remo.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqgg/682253/1633683575enYQWBf1/PSL_Reducing_the_number_gi_sales_remortgage_Whitepaper_01926_10092021.pdf",
                  }
              },
              {
                  "id": 14,
                  "Title": "Protecting landlords in a changing market",
                  "Description": "Whitepaper",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/whitepaper/Protecting-landlords-in-a-changing-market_Whitepaper.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqhl/682253/16336837845KSpCswK/PSL_Protecting_landlords_in_a_changing_market_Whitepaper_02109_1409202.pdf",
                  }
              },
              {
                  "id": 15,
                  "Title": "How can technology ignite customer conversations?",
                  "Description": "Whitepaper",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/whitepaper/How-can-technology-ignite_Whitepaper.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqhq/682253/1633683858YvqGVHbU/PSL_How_can_technology_ignite_Whitepaper_02110_14092021.pdf",
                  }
              },
            //   {
            //       "id": 16,
            //       "Title": "Is ignoring GI a dereliction of duty?",
            //       "Description": "",
            //       "Thumbnail": {
            //           "id": 1,
            //           "url": "/assets/img/whitepaper/dereliction-of-duty-whitepaper.jpg",
            //       },
            //       "File": {
            //           "id": 1,                  
            //           "url": "/assets/pdf/whitepaper/Paymentshield_01985_dereliction-of-duty-whitepaper_01102021.pdf",
            //       }
            //   },
              {
                  "id": 17,
                  "Title": "Why it’s good to talk GI",
                  "Description": "Whitepaper",
                  "Thumbnail": {
                      "id": 1,
                      "url": "/assets/img/whitepaper/Its-good-to-talk-GI_Whitepaper.jpg",
                  },
                  "File": {
                      "id": 1,                  
                      "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqhv/682253/1633684288ztUNFvWa/PSL_Its_good_to_talk_GI_Whitepaper_02108_01102021.pdf",
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
            'virtualPageURL':'/vpv/library',
            'virtualPageTitle' : 'Library | GI Academy'
        }); 
    }
  }
</script>
