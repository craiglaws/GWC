<template>
  <div>
    <HeroHeader
      title="Learn new sales skills.<br><span class='font-secondary'>Grow</span> your business with <span class='font-secondary'>confidence.</span>"
      mobileTitle="Coaching"
      image="/images/coaching.jpg"
    />
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <h2 class="mb-6">Sell with Confidence, Grow with Confidence</h2>
        <p>
          Coaching is vital and can make a world of difference for your bottom
          line. Sales coaching develops each salesperson's full potential. It
          boosts confidence and improves social, communication and questioning
          skills to discover areas for improvement and possibilities for new
          levels of success.
        </p>
        <p class="font-primary font-weight-bold">
          It helps continuously improve performance through feedback, practice,
          and repetition.
        </p>
        <p>
          I am experienced and successful sales professional, I have worked with
          international, national, and local businesses. I have covered many
          sectors – engineering, stationary, food and drink, hospitality, and
          creative agency. You can be successful in any industry with the right
          support. I have received first class sales training and monthly
          coaching in my previous jobs, and it truly boosted my confidence in
          selling and being successful in every sales job, no matter what I
          sold.
        </p>
        <CoachingGrid class="my-8" @scroll-to="scrollTo" />
      </v-col>
    </v-row>
    <ContactHero />
    <v-row class="">
      <v-col cols="11" md="10" class="mx-auto">
        <div class="gwc-row">
          <!-- Account Management -->
          <div class="service gwc-mb-3 mt-10">
            <div cols="12" md="8" class="py-0">
              <h2 class="mb-4" ref="accountManagement">Account Management</h2>
              <div class="d-flex">
                <div class="pr-md-10 flex-grow-1">
                  <ul>
                    <li
                      v-for="(item, i) in accountList"
                      :key="i"
                      class="management-list"
                    >
                      {{ item }}
                    </li>
                  </ul>
                  <div class="coach-btn">
                    <v-btn color="secondary" to="/contact" class="mt-4">
                      Book Now
                    </v-btn>
                  </div>
                </div>
                <nuxt-img
                  class="account-img"
                  src="/images/coaching-2.jpg"
                  v-show="$vuetify.breakpoint.mdAndUp"
                ></nuxt-img>
              </div>
            </div>
          </div>
          <!-- Business Development -->
          <div class="service gwc-mb-3">
            <div cols="12" md="8" class="py-0">
              <h2 class="mb-4" ref="businessDevelopment">
                Business Development & Live Prospecting
              </h2>
              <div class="d-flex">
                <div class="pr-md-10 flex-grow-1">
                  <ul>
                    <li
                      v-for="(item, i) in busDevList"
                      :key="i"
                      class="management-list"
                    >
                      {{ item }}
                    </li>
                  </ul>
                  <div class="coach-btn">
                    <v-btn color="secondary" to="/contact" class="mt-4">
                      Book Now
                    </v-btn>
                  </div>
                </div>
                <nuxt-img
                  class="account-img"
                  src="/images/bus-dev.jpg"
                  v-show="$vuetify.breakpoint.mdAndUp"
                ></nuxt-img>
              </div>
            </div>
          </div>
          <v-row class="gwc-mb-3">
            <!-- Online Sales -->
            <v-col
              cols="12"
              md="6"
              ref="salesCoaching"
              class="service-one service-cols gwc-mb-2"
            >
              <div class="pr-md-6">
                <h2 class="mb-4">Online Sales Coaching</h2>
                <ul>
                  <li
                    v-for="(item, i) in onlineSalesList"
                    :key="i"
                    class="management-list"
                  >
                    {{ item }}
                  </li>
                </ul>
                <div class="coach-btn">
                  <v-btn color="secondary" to="/contact" class="mt-4">
                    Book Now
                  </v-btn>
                </div>
              </div>
            </v-col>
            <!-- Sales Assessment -->
            <v-col cols="12" md="6" ref="salesAssessment" class="service-cols">
              <div class="pl-md-6">
                <h2 class="mb-4">Sales Assessment</h2>
                <ul>
                  <li
                    v-for="(item, i) in salesAssessList"
                    :key="i"
                    class="management-list"
                  >
                    {{ item }}
                  </li>
                </ul>
                <div class="coach-btn">
                  <v-btn color="secondary" to="/contact" class="mt-4">
                    Book Now
                  </v-btn>
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <Testimonials />
  </div>
</template>

<script>
export default {
  data() {
    return {
      onlineSalesList: [
        "How to set targets",
        "How to build a pipeline",
        "How to plan daily routine activities to deliver sales targets for the month",
        "Weekly video call to catch up on progress",
        "8 hours per month Live Online Coaching"
      ],
      salesAssessList: [
        "Cold calling, pipeline generation, account management and closing",
        "Assessment is based on specific evidence observed to focus on a personalised approach, listening to calls and accompanying you in a field on visits to existing and potential clients"
      ],
      accountList: [
        "How to effectively use a consultative sales approach to drive sales performance",
        "How to analyse your product, your sales scripts and how you open conversations with the customer, and how to respond to objections",
        "How to manage your time more effectively to free up time for selling",
        "How to identify target clients and retain, grow and protect them",
        "How to grow and strengthen existing customer relationships",
        "How to effectively upsell /cross-sell to increase revenue from existing customers",
        "How to lead an effective meeting to achieve SMART objectives (agenda setting)",
        "Understanding your existing client’s purchasing behaviour"
      ],
      busDevList: [
        "How to meet monthly targets",
        "How to create a step-by-step selling, prospecting and follow up system",
        "How to eliminate all the activities that are costing you sales, time, and energy",
        "How to make a professional introduction and building rapport",
        "How to Handle objections confidently and professionally to improve levels of client commitment",
        "How to effectively fact find to uncover new selling opportunities",
        "How to build a pipeline",
        "How to set sales conversions",
        "Telephone Sales Training",
        "How a positive belief and attitude will benefit telephone sales and prospecting",
        "Spend a day in a field with you",
        "Boost your self-confidence"
      ]
    };
  },
  methods: {
    scrollTo(refName) {
      const element = this.$refs[refName];
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.service-one {
  border-right: solid 1px gray;
}

.service::after {
  content: "";
  display: block;
  height: 1px;
  width: 50%;
  background-color: grey;
  margin: auto;
  margin-top: 52px;
}

.account-img {
  width: 400px;
  max-height: 300px;
  object-fit: cover;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.management-list {
  background: url("/icons/arrows.png") no-repeat left top;
  height: fit-content;
  padding-left: 40px;
  padding-top: 2px;
  margin-bottom: 12px;
}

@media (max-width: 1200px) {
  .account-img {
    display: none;
  }
}

@media (max-width: 960px) {
  .service-one {
    border-right: none;
  }
  .service-cols::after {
    content: "";
    display: block;
    height: 1px;
    width: 50%;
    background-color: grey;
    margin: auto;
    margin-top: 52px;
  }
}

@media (max-width: 425px) {
  .coach-btn {
    display: flex;
    justify-content: center;
  }
}
</style>
