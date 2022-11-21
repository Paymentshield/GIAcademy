<template>
    <div id="tabs">
        <v-container
        class="white">
            <v-stepper
            alt-labels
            v-model="e1"
            elevation="0">
                <v-stepper-header>
                <template v-for="n in steps">
                    <v-stepper-step
                    :key="`${n}-step`"
                    :complete="e1 > n"
                    :step="n"
                    editable
                    edit-icon="mdi-check"
                    >
                        <span 
                        v-for="(trainingModule, index) in module.Modules"
                        :key="index"> 
                            <span
                            v-if="index + 1 === n" >
                                {{ trainingModule.Title }}
                            </span>
                        </span>
                    </v-stepper-step>
        
                    <v-divider
                    v-if="n !== steps"
                    :key="n"
                    ></v-divider>
                </template>
                </v-stepper-header>
        
                <v-stepper-items>
                    <v-stepper-content
                        v-for="n in steps"
                        :key="`${n}-content`"
                        :step="n"
                        :id="'id_'+n"
                    >
                        <div 
                            v-for="(trainingModule, index) in module.Modules"
                            :key="index"> 
                            <v-card
                            elevation="0"
                                v-if="index + 1 === n" 
                                min-height="200">
                                <v-row
                                class="fill-height pa-5"
                                align="center"
                                justify="center"
                                >
                                    <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-xl-2">
                                        <i v-if="trainingModule.File.ext === '.pdf'" class="fas fa-file-pdf fa-5x grey--text text-center d-block"></i>
                                        <i v-if="trainingModule.File.ext === '.png'" class="fas fa-file-image fa-5x grey--text text-center d-block"></i>
                                        <i v-if="trainingModule.File.ext === '.jpeg'" class="fas fa-file-image fa-5x grey--text text-center d-block"></i>
                                        <i v-if="trainingModule.File.ext === '.mp4'" class="fas fa-file-video fa-5x grey--text text-center d-block"></i>
                                        <i v-if="trainingModule.File.ext === '.csv'" class="fas fa-file-csv fa-5x grey--text text-center d-block"></i>
                                        <i v-if="trainingModule.File.ext === '.xls'" class="fas fa-file-csv fa-5x grey--text text-center d-block"></i>
                                        <i v-if="trainingModule.File.ext === '.xlsx'" class="fas fa-file-csv fa-5x grey--text text-center d-block"></i>
                                    </div>
                                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                        <h5 class="text-h5">{{trainingModule.Title}}</h5>
                                        <p v-html="trainingModule.Description"></p>
                                        <v-btn
                                        :href="baseURL + trainingModule.File.url"
                                        target="_blank"
                                        color="berrysmoothie"
                                        x-large
                                        class="white--text">Download</v-btn>
                                    </div>
                                </v-row>
                            </v-card>
                        </div>
                        <v-row>
                            <v-col class="text-left">
                                <v-btn
                                outlined
                                @click="prevStep(n)"
                                v-if="n != 1">
                                    Previous
                                </v-btn>
                            </v-col>
                            
                            <v-col class="text-right">
                                <v-btn
                                color="primary"
                                @click="nextStep(n)"
                                align="right"
                                v-if="n != steps"
                                onclick="gtag('event', 'Training Module', {'event_category' : 'Home Insurance', 'event_label' : 'Continue'});"
                                >
                                    Continue
                                </v-btn>
                                <v-btn
                                color="primary"
                                @click="completeModule();"
                                align="right"
                                v-if="n === steps"
                                onclick="gtag('event', 'Training Module', {'event_category' : 'Home Insurance', 'event_label' : 'Finish'});"
                                >
                                    Finish
                                </v-btn>
                            </v-col>

                        </v-row>
                    </v-stepper-content>
                </v-stepper-items>
            </v-stepper>
        </v-container>
    </div>
</template>

<script>
  export default {
    props: ['steps', 'module', 'baseURL'],
    data () {
      return {
        e1: 1,
      }
    },
     watch: {
      steps (val) {
        if (this.e1 > val) {
          this.e1 = val
        }
      },
    },
    methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.e1 = 1
        } else {
          this.e1 = n + 1
        }
      },
      prevStep (n) {
        if (n === this.steps) {
          this.e1 = n - 1
        } else {
          this.e1 = n - 1
        }
      },
      completeModule: function () {
        this.$router.push('/')
        localStorage.setItem('SalesTechniqueCompleted', true)
      }
    }
  }
</script>

<style scoped>
.v-btn {
  text-transform: capitalize !important;
}

.v-stepper span {
  text-align: center;
}
</style>