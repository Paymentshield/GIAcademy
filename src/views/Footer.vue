<template>
  <v-footer
  color="headergrey"
  padless
  class="pa-5">
  <v-row>
      <v-col
      class="text-center white--text text-caption offset-2"
      cols="8">
          <p>Paymentshield Limited (registered number 02728936) is a company registered in England and Wales at Southport Business Park, Wight Moss Way, Southport,
    PR8 4HQ. Telephone calls may be recorded for security purposes and monitored under our quality control procedures.
          </p>
          <p>Paymentshield Limited is authorised and regulated by the Financial Conduct Authority (FCA) under registration No. 312708. See the
            <a rel="noreferrer" href="https://register.fca.org.uk/" target="_blank" class="mint--text">Financial Services Register</a> for further details.
          </p>
      </v-col>
  </v-row>
    <v-col
      class="text-center white--text text-caption"
      cols="12">
      <span class="mx-1">&copy; Paymentshield Limited {{ new Date().getFullYear() }}</span> |
        <a target="_blank" rel="noreferrer" href="https://www.paymentshieldadvisers.co.uk/terms-and-conditions" class="mx-1 white--text">Terms &amp; Conditions</a> |
        <a target="_blank" rel="noreferrer" href="https://www.paymentshieldadvisers.co.uk/accessibility" class="mx-1 white--text">Accessibility</a> |
        <a target="_blank" rel="noreferrer" href="https://www.paymentshieldadvisers.co.uk/privacy-policy" class="mx-1 white--text">Privacy Policy</a> |
        <a target="_blank" rel="noreferrer" href="https://www.paymentshieldadvisers.co.uk/cookies" class="mx-1 white--text">Website Cookies</a> |
        <a target="_blank" rel="noreferrer" href="https://www.paymentshieldadvisers.co.uk/contact-us" class="mx-1 white--text">Contact Us</a>
    </v-col>
  </v-footer>
</template>

<style scoped>
  .v-footer p, .v-footer span, .v-footer a {
    font-size: 11px !important;
    line-height: 14px;
    margin-bottom: 8px;
    text-decoration: none;
  }

  .v-footer a:hover {
    text-decoration: underline;
  }
</style>