<template>
    <v-dialog
    v-model="quizDialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    >
    <template v-slot:activator="{ on, attrs }">
        <v-btn
            x-large
            color="mint"
            class="white--text mt-auto"
            target="_blank"
            download
            block
            v-bind="attrs"
            v-on="on"
            @click="downloadIDs(resource.id); quizTests(resource.quiz)">Start</v-btn>
      </template>
        <v-card>
            <v-toolbar
                dark
                color="primary"
                >
                <v-toolbar-title>{{resource.Title}} quiz</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items>
                    <v-btn
                    icon
                    dark
                    @click="quizDialog = false"
                >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                </v-toolbar-items>
            </v-toolbar>
            <div class="pa-10">
                <v-card
                    class="mx-auto"
                    max-width="800"
                >
                    <v-window v-model="step">
                        <v-window-item  v-for="(test, index) in quizTest"
                        :key="index" :value="test.id">
                            <v-card-title 
                            class="text-h6 font-weight-regular">
                            <div class="row">
                                <div class="col-2 col-sm-1">
                                    <v-avatar
                                    color="primary lighten-2"
                                    class="subheading white--text mr-2"
                                    size="40"
                                    v-text="step"
                                    ></v-avatar>
                                </div>
                                <div class="col-8 col-sm-10">
                                    <span class="word-wrap">{{test.question}}</span>
                                </div>
                                <div class="col-2 col-sm-1">
                                    <v-btn
                                        color="mint"
                                        dark
                                        fab
                                        absolute
                                        right
                                        small
                                        @click="hint = !hint"
                                        v-if="test.learning"
                                    >
                                        <v-icon dark>
                                            mdi-information-variant
                                        </v-icon>
                                    </v-btn>
                                </div>
                            </div>
                            <v-card
                                width="300px"
                                class="hint"
                                v-if="hint"
                                >
                                <v-list
                                class="learningBlock">
                                    <v-list-item>
                                        <div class="white--text">
                                            {{test.learning}}
                                        </div>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                            </v-card-title>
                            <v-card-text>
                                <ol type="a" id="answers">
                                    <li v-for="(answers, index) in test.answers"
                                    :key="index">
                                        {{answers}}
                                    </li>
                                </ol>
                                <div>
                                    <!-- This is for a multi-select answer -->
                                    <v-btn-toggle
                                    v-if="test.rightAnswer.length >= 2"
                                        :v-model="index"
                                        multiple
                                        :id="`question_${test.id}`"
                                    >
                                        <v-btn
                                            v-for="(answers, index) in test.answers"
                                            :key="index"
                                            @click="test.userAnswer.push( index )">
                                                {{index}}
                                        </v-btn>
                                    </v-btn-toggle>
                                    <!-- This is for a single answer -->
                                    <v-btn-toggle
                                    v-if="test.rightAnswer.length === 1"
                                        :v-model="index"
                                        :id="`question_${test.id}`"
                                        group
                                    >
                                        <v-btn
                                            v-for="(answers, index) in test.answers"
                                            :key="index"
                                            @click="test.userAnswer = index, result(test)">
                                                {{index}}
                                        </v-btn>
                                    </v-btn-toggle>
                                </div>
                            </v-card-text>
                        </v-window-item>
                        <v-window-item :value="quizTest.length + 1">
                            <v-card-title 
                            class="text-h3 font-weight-regular">
                                <span class="word-wrap">Results</span>
                                <v-spacer></v-spacer>
                                <v-progress-circular
                                :rotate="360"
                                :size="80"
                                :width="5"
                                :value="`${(this.count/quizTest.length*100).toFixed(0)}`"
                                color="mint"
                                class="text-h6 font-weight-regular"
                                >
                                    {{ `${(this.count/quizTest.length*100).toFixed(0)}%` }}
                                </v-progress-circular>
                            </v-card-title>
                            <v-card-text>
                                <v-simple-table>
                                    <template v-slot:default>
                                        <thead>
                                            <tr>
                                                <th class="text-left">
                                                    Question
                                                </th>
                                                <th class="text-center">
                                                    Your answer
                                                </th>
                                                <th class="text-center">
                                                    Correct answer
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                            v-for="(results, index) in quizTest"
                                            :key="index"
                                            >
                                                <td>{{results.question}}</td>
                                                <td class="text-center">{{results.userAnswer}}</td>
                                                <td class="text-center">{{results.rightAnswer}}</td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-card-text>
                        </v-window-item>
                    </v-window>


                    <v-divider></v-divider>

                    <v-card-actions>
                    <v-btn
                        :disabled="step === 1"
                        text
                        @click="step--, hint = null"
                    >
                        Back
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        v-if="step != quizTest.length + 1"
                        color="primary"
                        depressed
                        @click="step++, hint = null"
                    >
                        Next
                    </v-btn>
                    <v-btn
                        v-if="step === quizTest.length + 1"
                        color="mint"
                        class="white--text mt-auto"
                        depressed
                        @click="quizDialog = false, step++, hint = null, resultStore()"
                    >
                        Complete
                    </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
import HomeInsurance from "@/components/tests/quiz/HomeInsurance.json";
import HomeInsuranceExclusions from "@/components/tests/quiz/HomeInsuranceExclusions.json";
import PersonalPossessions from "@/components/tests/quiz/PersonalPossessions.json";
import AccidentalDamageCover from "@/components/tests/quiz/AccidentalDamageCover.json";
import HomeEmergency from "@/components/tests/quiz/HomeEmergency.json";
import LegalExpenses from "@/components/tests/quiz/LegalExpenses.json";

  export default {
    props: ['resource', 'allResults'],

    data () {
        return {
            quizDialog: false,
            downloadID: '',
            quizTest: '',
            step: 1,
            hint: null,
            toggle: false,
            label: '',
            results: [
                false
            ],
            count: '',
            resTotal: '',
            res: []
        }
    },
    methods: {
        quizTests(quiz){
            this.quizDialog = true;
        },
        select(id) {
            this.toggle = !this.toggle;
            this.label = (this.toggle) ? 'Selected '+''+ id : "Select";
        },
        downloadIDs(id){
            this.downloadID = id;
            if (this.downloadID === 3) {
                this.quizTest = HomeInsurance.quiz
            }
            if (this.downloadID === 4) {
                this.quizTest = HomeInsuranceExclusions.quiz
            }
            if (this.downloadID === 5) {
                this.quizTest = PersonalPossessions.quiz
            }
            if (this.downloadID === 6) {
                this.quizTest = AccidentalDamageCover.quiz
            }
            if (this.downloadID === 7) {
                this.quizTest = HomeEmergency.quiz
            }
            if (this.downloadID === 8) {
                this.quizTest = LegalExpenses.quiz
            }
        },
        result(test){
            if (test.userAnswer === test.rightAnswer){
                this.results[test.id - 1] = true;
            }
            else {
                this.results[test.id - 1] = false;
            }
            const count = this.results.filter(Boolean).length;
            this.count = count;
            
            this.resTotal = this.quizTest.length
        },
        resultStore(){
            if (this.count === "") {
                this.$emit('resultStore', ({id: this.downloadID, count: 0, total: 1}))
            }
            else {
                this.$emit('resultStore', ({id: this.downloadID, count: this.count, total: this.resTotal}))
            }
            // this.res = [({ID: this.downloadID, count: this.count, total: this.resTotal})]
            // localStorage.setItem('results', JSON.stringify(this.res));
        }
    }
  }
</script>

<style scoped>
    ol#answers li {
        padding: 7px 0;
    }
    .learningBlock {
        background: #2C3536;
        color: white;
    }
    .v-window {
        overflow: visible;
    }
    .hint {
        position: absolute;
        right: -295px;
        top: 10px;
        display: block;
        z-index: 99;
        word-break: break-word;
        font-size: 15px;
        line-height: 20px;
    }
    .hint:before {
        content: '';
        background: transparent;
        display: block;
        left: -20px;
        top: 15px;
        width:0px;
        height:0px;
        border-top: 10px solid transparent;
        border-right: 10px solid #2c3536;
        border-bottom: 10px solid transparent;
        border-left: 10px solid transparent;
        position: absolute;
    }
    .word-wrap {
        word-break: break-word;
    }
    @media screen and (max-width: 1400px) {
        .hint {
            right: 68px;
        }

        .hint:before {
            border-right: 10px solid transparent;
            border-left: 10px solid #2c3536;
            right: -20px;
            left: auto;
        }
    }

</style>
