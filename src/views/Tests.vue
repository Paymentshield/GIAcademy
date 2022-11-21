<template>
  <div id="library"
  class="background">
      <Banner :tests="tests" :baseURL="baseURL"/>
      <Navigation/>
      <Resources :tests="tests" :baseURL="baseURL"/>
  </div>
</template>

<script>
import Banner from '@/components/tests/Banner';
import Resources from '@/components/tests/Resources';
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
        tests: {
          "id": 1,
          "Test": [
            {
              "id": 3,
              "Title": "Home Insurance",
              "Description": "",
              "Answers": [
                {
                  "id": 1,
                  "Answer": "AXA, LV=Broker, Prestige, RSA, UK General and Zurich"
                },
                {
                  "id": 2,
                  "Answer": "£500,000"
                },
                {
                  "id": 3,
                  "Answer": "£1 million"
                },
                {
                  "id": 4,
                  "Answer": "£50,000"
                },
                {
                  "id": 5,
                  "Answer": "£75,000"
                },
                {
                  "id": 6,
                  "Answer": "10% of contents sum insured"
                },
                {
                  "id": 7,
                  "Answer": "180 days"
                },
                {
                  "id": 8,
                  "Answer": "False"
                },
                {
                  "id": 9,
                  "Answer": "2 years"
                },
                {
                  "id": 10,
                  "Answer": "9 years"
                },
                {
                  "id": 11,
                  "Answer": "Removing and replacing any part of the buildings to find and repair the source of any water or oil escaping from tanks, pipes, equipment or fixed heating system in the buildings"
                },
                {
                  "id": 12,
                  "Answer": "£5,000"
                },
                {
                  "id": 13,
                  "Answer": "£2,500"
                },
                {
                  "id": 14,
                  "Answer": "All of the above"
                },
                {
                  "id": 15,
                  "Answer": "£1,000 per claim & £100 for overnight accommodation including VAT"
                },
                {
                  "id": 16,
                  "Answer": "Septic tanks, guttering and down pipes / Boiler or heating system that hasn’t been serviced in line with manufacturer’s recommendations / External water supply pipes your client is not responsible for"
                },
                {
                  "id": 17,
                  "Answer": "True"
                },
                {
                  "id": 18,
                  "Answer": "All of the above"
                },
                {
                  "id": 19,
                  "Answer": "£100,000"
                },
                {
                  "id": 20,
                  "Answer": "Arc Legal Assistance and Legal Insurance Management Ltd"
                },
                {
                  "id": 21,
                  "Answer": "On the renewal of their cover"
                },
                {
                  "id": 22,
                  "Answer": "True"
                },
                {
                  "id": 23,
                  "Answer": "£250"
                },
                {
                  "id": 24,
                  "Answer": "True"
                },
                {
                  "id": 25,
                  "Answer": "Paint accidentally spilled on the carpet / General wear and tear"
                },
                {
                  "id": 26,
                  "Answer": "Accidental breakage of glass, ceramic hobs or sanitary fittings fixed to and forming part of your home"
                },
                {
                  "id": 27,
                  "Answer": "Accidental breakage of underground drains and pipes / Accidental damage to TVs, DVDs, computers, laptops etc / Accidental spillages such as spilled wine or paint"
                },
                {
                  "id": 28,
                  "Answer": "All of the above"
                },
                {
                  "id": 29,
                  "Answer": "A document sent to the customer along with their certificate and Terms & Conditions to inform them who is underwriting their policy"
                },
                {
                  "id": 30,
                  "Answer": "False"
                }
              ],
              "Thumbnail": {
                "id": 6,
                "name": "home_insurance_product_test.jpg",
                "alternativeText": "Home Insurance Product Test",
                "ext": ".jpg",
                "mime": "image/jpg",
                "size": 28.94,
                "url": "/assets/img/tests/home_insurance_product_test.jpg",
              },
              "File": {
                "id": 8,
                "name": "home_insurance_product_test.pdf",
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqbb/682253/1633682454RbuZ1B87/PSL_Home_Insurance_Product_test_02137_08102021.pdf",
              }
            },
            {
              "id": 4,
              "Title": "Home Insurance exclusions",
              "Description": "",
              "Answers": [
                {
                  "id": 1,
                  "Answer": "True"
                },
                {
                  "id": 2,
                  "Answer": "All of the above"
                },
                {
                  "id": 3,
                  "Answer": "Both wet and dry rot"
                },
                {
                  "id": 4,
                  "Answer": "True"
                },
                {
                  "id": 5,
                  "Answer": "The Buildings excess shown on the certificate of insurance / Loss or damage occurring after the home has been left unoccupied"
                },
                {
                  "id": 6,
                  "Answer": "The Buildings excess shown on the certificate of insurance / Loss or damage to fences, hedges and gates / Damage caused by a rise in the water table (the level below which the ground is completely saturated with water)"
                },
                {
                  "id": 7,
                  "Answer": "The buildings excess shown on the certificate of insurance / Loss or damage occurring after the home has been left unoccupied"
                },
                {
                  "id": 8,
                  "Answer": "True"
                },
                {
                  "id": 9,
                  "Answer": "All of the above"
                },
                {
                  "id": 10,
                  "Answer": "No"
                },
                {
                  "id": 11,
                  "Answer": "Mrs. Smith is covered for the cost of replacing the glass only"
                },
                {
                  "id": 12,
                  "Answer": "All of the above"
                },
                {
                  "id": 13,
                  "Answer": "All of the above"
                },
                {
                  "id": 14,
                  "Answer": "Dentures / Musical Instruments / Contact or Corneal lenses / Camping equipment / Vehicles, watercraft and aircraft / Sports equipment while in use"
                },
                {
                  "id": 15,
                  "Answer": "Yes – providing the boiler has been maintained in line with manufacturer’s recommendations"
                }
              ],
              "Thumbnail": {
                "id": 3,
                "name": "home_insurance_exclusion_test.jpg",
                "alternativeText": "Home Insurance Exclusion Test",
                "ext": ".jpg",
                "mime": "image/jpg",
                "size": 638.57,
                "url": "/assets/img/tests/home_insurance_exclusion_test.jpg",
              },
              "File": {
                "id": 3,
                "name": "home_insurance_exclusion_test.pdf",
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqbd/682253/1633682477m91GLTSN/PSL_Home_Insurance_Exclusions_Product_test_02135_07102021.pdf",
              }
            },
            {
              "id": 5,
              "Title": "personal possessions",
              "Description": "",
              "Answers": [
                {
                  "id": 1,
                  "Answer": "£15,000 for Home Insurance and £22,500 for Home Insurance Plus "
                },
                {
                  "id": 2,
                  "Answer": "Your client’s chosen excess for contents cover"
                },
                {
                  "id": 3,
                  "Answer": "Widescreen television, pets & livestock, desktop computer, drones, software or downloaded information"
                },
                {
                  "id": 4,
                  "Answer": "True"
                },
                {
                  "id": 5,
                  "Answer": "True as long as items are in a locked boot or concealed luggage or glove compartment and violence and force has been used to enter the vehicle"
                },
                {
                  "id": 6,
                  "Answer": "£250"
                },
                {
                  "id": 7,
                  "Answer": "£500"
                },
                {
                  "id": 8,
                  "Answer": "£500"
                },
                {
                  "id": 9,
                  "Answer": "Yes"
                },
                {
                  "id": 10,
                  "Answer": "True"
                },
                {
                  "id": 11,
                  "Answer": "£76,500"
                },
                {
                  "id": 12,
                  "Answer": "True"
                },
                {
                  "id": 13,
                  "Answer": "Yes"
                },
                {
                  "id": 14,
                  "Answer": "£15,000"
                },
                {
                  "id": 15,
                  "Answer": "£50,000"
                },
                {
                  "id": 16,
                  "Answer": "£2,500"
                },
                {
                  "id": 17,
                  "Answer": "Loss or damage caused by children under 3 years old"
                },
                {
                  "id": 18,
                  "Answer": "Lades white gold ring, with plain purple sapphire stone, 15ct £3,000"
                }
              ],
              "Thumbnail": {
                "id": 3,
                "name": "personal_possessions_test.jpg",
                "alternativeText": "personal possessions Test",
                "ext": ".jpg",
                "mime": "image/jpg",
                "size": 638.57,
                "url": "/assets/img/tests/home_insurance_specifying_test.jpg",
              },
              "File": {
                "id": 3,
                "name": "personal_possessions_test.png",
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-11-12/82kys/682253/1636729711sDkJLWD5/PSL_Personal_Possessions_Product_test_02139_10222021.pdf",
              }
            },
            {
              "id": 6,
              "Title": "accidental damage cover",
              "Description": "",
              "Answers": [
                {
                  "id": 1,
                  "Answer": "All the above"
                },
                {
                  "id": 2,
                  "Answer": "Visible damage which happens suddenly and has not been caused on purpose or inevitably"
                },
                {
                  "id": 3,
                  "Answer": "Up to the chosen content sum insured"
                },
                {
                  "id": 4,
                  "Answer": "Up to the chosen buildings sum insured"
                },
                {
                  "id": 5,
                  "Answer": "Up to £1,000"
                },
                {
                  "id": 6,
                  "Answer": "The clients chosen Buildings excess"
                },
                {
                  "id": 7,
                  "Answer": "False"
                },
                {
                  "id": 8,
                  "Answer": "The clients chosen contents excess"
                },
                {
                  "id": 9,
                  "Answer": "Yes"
                },
                {
                  "id": 10,
                  "Answer": "True"
                }
              ],
              "Thumbnail": {
                "id": 3,
                "name": "accidental_damage_product_test.jpg",
                "alternativeText": "Accidental Damage Product Test",
                "ext": ".jpg",
                "mime": "image/jpg",
                "url": "/assets/img/tests/accidental_damage_product_test.jpg",
              },
              "File": {
                "id": 3,
                "name": "accidental_damage_product_test.pdf",
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqbg/682253/1633682518Euj5dzRw/PSL_Accidental_damage_Product_test_02141_07102021.pdf",
              }
            },
            {
              "id": 7,
              "Title": "home emergency",
              "Description": "",
              "Answers": [
                {
                  "id": 1,
                  "Answer": "£1,000"
                },
                {
                  "id": 2,
                  "Answer": "£100"
                },
                {
                  "id": 3,
                  "Answer": "Yes, as standard"
                },
                {
                  "id": 4,
                  "Answer": "True"
                },
                {
                  "id": 5,
                  "Answer": "All of the above"
                },
                {
                  "id": 6,
                  "Answer": "True"
                },
                {
                  "id": 7,
                  "Answer": "Arc Legal Assistance and Legal Insurance Management Ltd"
                },
                {
                  "id": 8,
                  "Answer": "No"
                },
                {
                  "id": 9,
                  "Answer": "£500"
                },
                {
                  "id": 10,
                  "Answer": "True"
                }
              ],
              "Thumbnail": {
                "id": 3,
                "name": "home_emergency_product_test.jpg",
                "alternativeText": "Home Emergency Product Test",
                "ext": ".jpg",
                "mime": "image/jpg",
                "url": "/assets/img/tests/home_emergency_product_test.jpg",
              },
              "File": {
                "id": 3,
                "name": "home_emergency_product_test.pdf",
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqhx/682253/16336844575KUpvP3E/PSL_Home_Emergency_Product_test_02136_08102021.pdf",
              }
            },
            {
              "id": 8,
              "Title": "legal expenses",
              "Description": "",
              "Answers": [
                {
                  "id": 1,
                  "Answer": "£100,000"
                },
                {
                  "id": 2,
                  "Answer": "True"
                },
                {
                  "id": 3,
                  "Answer": "51% or greater"
                },
                {
                  "id": 4,
                  "Answer": "All of the above"
                },
                {
                  "id": 5,
                  "Answer": "£100 per day, up to a max £1,000"
                },
                {
                  "id": 6,
                  "Answer": "All of the above"
                },
                {
                  "id": 7,
                  "Answer": "True"
                },
                {
                  "id": 8,
                  "Answer": "UK & worldwide"
                },
                {
                  "id": 9,
                  "Answer": "UK only"
                },
                {
                  "id": 10,
                  "Answer": "Arc Legal Assistance and Legal Insurance Management Ltd"
                }
              ],
              "Thumbnail": {
                "id": 3,
                "name": "legal_expenses_product_test.jpg",
                "alternativeText": "Legal Expenses Product Test",
                "ext": ".jpg",
                "mime": "image/jpg",
                "url": "/assets/img/tests/legal_expenses_product_test.jpg",
              },
              "File": {
                "id": 3,
                "name": "legal_expenses_product_test.pdf",
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-10-08/7vqbj/682253/1633682582o9sAjwZR/PSL_Legal_Expenses_Product_test_02138_07102021.pdf",
              }
            },
            {
              "id": 9,
              "Title": "Landlords Insurance",
              "Description": "",
              "Answers": [
                {
                  "id": 1,
                  "Answer": "£1,000,000"
                },
                {
                  "id": 2,
                  "Answer": "£50,000"
                },
                {
                  "id": 3,
                  "Answer": "Accidental Damage to Buildings / Accidental Damage to Contents / Legal Expenses / Rent Protection / Landlords Emergency"
                },
                {
                  "id": 4,
                  "Answer": "Malicious damage by tenant"
                },
                {
                  "id": 5,
                  "Answer": "£200,000"
                },
                {
                  "id": 6,
                  "Answer": "Yes"
                },
                {
                  "id": 7,
                  "Answer": "£5,000"
                },
                {
                  "id": 8,
                  "Answer": "£2 million"
                },
                {
                  "id": 9,
                  "Answer": "Tenants funding rent through the benefits agency / Students"
                },
                {
                  "id": 10,
                  "Answer": "All of the above"
                },
                {
                  "id": 11,
                  "Answer": "£250"
                },
                {
                  "id": 12,
                  "Answer": "When the property is left unoccupied for between 45 and 90 days."
                },
                {
                  "id": 13,
                  "Answer": "All of the above"
                },
                {
                  "id": 14,
                  "Answer": "£100,000"
                },
                {
                  "id": 15,
                  "Answer": "Any actual or alleged abuse to your client or the tenant / Contracts of employment / Disputes over landslip, subsidence or heave"
                },
                {
                  "id": 16,
                  "Answer": "£1,000"
                },
                {
                  "id": 17,
                  "Answer": "False"
                },
                {
                  "id": 18,
                  "Answer": "£250"
                },
                {
                  "id": 19,
                  "Answer": "Boilers with an output of over 60kwph / Trace and access / Non-gas-powered systems / Underfloor heating"
                },
                {
                  "id": 20,
                  "Answer": "Up to £2,500 per month for 6 months"
                },
                {
                  "id": 21,
                  "Answer": "£100,000"
                }
              ],
              "Thumbnail": {
                "id": 3,
                "name": "PSL_Landlords_Insurance_Product_test.jpg",
                "alternativeText": "Landlords Insurance Product Test",
                "ext": ".jpg",
                "mime": "image/jpg",
                "url": "/assets/img/tests/landlords_insurance_product_test.jpg",
              },
              "File": {
                "id": 3,
                "name": "PSL_Landlords_Insurance_Product_test.pdf",
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2021-11-24/84ddz/682253/1637772607voW1wZtu/PSL_Landlords_Insurance_Product_test_02194_24112021.pdf",
              }
            },
            {
              "id": 9,
              "Title": "Tenants Contents",
              "Description": "",
              "Answers": [
                {
                  "id": 1,
                  "Answer": "£10,000"
                },
                {
                  "id": 2,
                  "Answer": "True"
                },
                {
                  "id": 3,
                  "Answer": "All of the above"
                },
                {
                  "id": 4,
                  "Answer": "£50,000"
                },
                {
                  "id": 5,
                  "Answer": "Yes"
                },
                {
                  "id": 6,
                  "Answer": "TVs"
                },
                {
                  "id": 7,
                  "Answer": "False (but they are covered under general contents cover)"
                },
                {
                  "id": 8,
                  "Answer": "True"
                }
              ],
              "Thumbnail": {
                "id": 3,
                "name": "tenants_contents_product_test.jpg",
                "alternativeText": "Tenants Contents Product Test",
                "ext": ".jpg",
                "mime": "image/jpg",
                "url": "/assets/img/tests/tenants_contents_product_test.jpg",
              },
              "File": {
                "id": 3,
                "name": "Tenants_Contents_Product_test.pdf",
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-02-02/8qdl5/682253/1643816136CTFOzZQU/PSL_Tenants_Contents_Product_Test_02227_01022022.pdf",
              }
            },
            {
              "id": 10,
              "Title": "MPPI",
              "Description": "",
              "Answers": [
                {
                  "id": 1,
                  "Answer": "Protect a monthly mortgage payment and associated costs if the policyholder should suffer an accident or sickness"
                },
                {
                  "id": 2,
                  "Answer": "Accident and sickness"
                },
                {
                  "id": 3,
                  "Answer": "12 months/24 months"
                },
                {
                  "id": 4,
                  "Answer": "They would receive 30 days payment on day 91"
                },
                {
                  "id": 5,
                  "Answer": "£3000/75% of income"
                },
                {
                  "id": 6,
                  "Answer": "True"
                },
                {
                  "id": 7,
                  "Answer": "No, they must be within 30 days of a brand-new mortgage or re-mortgage"
                },
                {
                  "id": 8,
                  "Answer": "Any condition, injury, illness, disease, sickness or related condition and/or associated symptoms, whether diagnosed or not which you knew about, or should reasonably have known about, at the start date, or which you had seen or arranged to see a doctor about, during the 12 months immediately before the start date"
                },
                {
                  "id": 9,
                  "Answer": "Age 65"
                },
                {
                  "id": 10,
                  "Answer": "£50,000"
                }
              ],
              "Thumbnail": {
                "id": 3,
                "name": "mppi_product_test.jpg",
                "alternativeText": "MPPI Product Test",
                "ext": ".jpg",
                "mime": "image/jpg",
                "url": "/assets/img/tests/mppi_product_test.jpg",
              },
              "File": {
                "id": 3,
                "name": "MPPI_Product_test.pdf",
                "ext": ".pdf",
                "mime": "application/pdf",
                "url": "https://info.paymentshieldadvisers.co.uk/l/682253/2022-02-03/8qhxc/682253/1643883611RzDnN9iW/PSL_Mortgage_Protection_Product_Test_02226_02022022.pdf",
              }
            }
          ],
        "PageBanner": {
          "id": 4,
          "Title": "Test your knowledge",
          "Body": "<p>Find out just how much you know about our insurance with our in depth product tests.&nbsp;<br>Open and complete the test then check how you did by viewing the answers on screen.</p>",
          "Thumbnail": {
            "id": 7,
            "name": ".png",
            "alternativeText": "",
            "width": 185,
            "height": 185,
            "ext": ".png",
            "mime": "image/png",
            "size": 41.54,
            "url": "/assets/img/balls/tests.png",
          }
        }
      },
        baseURL: '',
      }
    },
    mounted(){
        window.dataLayer.push({
            'event':'virtualPageView',
            'virtualPageURL':'/vpv/tests',
            'virtualPageTitle' : 'Tests | GI Academy'
        }); 
    }
  }

  // window.dataLayer.push({
  //   'event':'virtualPageView',
  //   'virtualPageURL':'/vpv/tests',
  //   'virtualPageTitle' : 'Tests | GI Academy'
  // }); 
</script>
