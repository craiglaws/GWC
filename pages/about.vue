<template>
  <div>
    <HeroHeader title="I’m ready to share my experience<br>to help you <span class='font-secondary'>grow</span> with <span class='font-secondary'>confidence.</span>"  mobileTitle="About Me" image="/images/gwc-hen-2.jpg"/>
    <v-row class="gwc-row-5">
        <v-col cols="11" md="10" class="mx-auto">
          <div class="d-flex mb-10" :class="{'flex-column': $vuetify.breakpoint.smAndDown}">
            <div class="flex-grow-1">
              <h2 class="mb-6">Hi, I'm Henrieta</h2>
              <p>An experienced and successful sales professional, I have worked with international, national and local businesses. I have covered many sectors – engineering, stationary, food & drink, hospitality and creative agency. You can be successful in any industry.</p>
              <p>For me it was mainly about learning the business, product or service then applying the same sales process and principles that bring me success every time.</p>
              <p>But I wasn’t always a confident salesperson. Far from it. On my first ever sales call I had a door shut in my face! I swore I would never cold call  again. That quickly changed.</p>
            </div>
            <nuxt-img src="/images/gwc-hen-3.JPG" class="about-img" :class="{'mx-auto': $vuetify.breakpoint.smAndDown}"></nuxt-img>
          </div>
          <div>
            <h2 class="mb-6">Let’s go back to the start</h2>
            <p>Born and raised in Slovakia. Passionate handball player from age 6, competitive and keen to win every game. Moved to UK at age 19 to make a new start. I became aware of my deep interest in getting to know people, understanding their personal and career journeys. I realised I have the skills to develop long-term relationships with strangers and the ability to achieve all my goals with a positive mindset.</p>
            <p>This attitude was recognised by a recruitment agent who suggested that I would make a brilliant salesperson. ‘’ She was a great listener, driven, competitive and had the ability to build long-term relationships. ‘’ The perfect combination to make a successful salesperson.</p>
            <p>I  improved my English skills and got my first ever office job. A year later the business relocated, but I didn’t want to move away from Oxford. On a holiday trip to Switzerland I met a business owner who manufactured engineering tools. I sold him on the idea that he should bring the product to the UK. Six months later he opened an office in the UK and I was running the business for him.</p>
          </div>
        </v-col>
      </v-row>
    <SmallContactHero />
    <v-row class="gwc-row-5">
      <v-col cols="11" md="10" class="mx-auto">
        <h2 class="mb-6">Growing with confidence</h2>
        <p>Having my first ever sales opportunity, I quickly grew in confidence. I was provided with first-class sales training and coaching in each workplace and after 14 years in sales role I realised that I wouldn’t have been successful without this training and the right coaches.</p>
        <p>I meet so many people who say “you are such a natural sales person”. I always laugh - this wasn’t natural to me when I started out. To be confident and successful in sales, you have to develop a thick skin, understand your targets, provide the best customer service ,be passionate about accepting NO and converting it to YES. To have no fear when cold calling. To build long-term relationships and understand your offering.</p>
        <p>I’ve had an incredibly successful sales career and now I’m ready to share my experience by training others to:<br><span class="font-secondary font-weight-bold">Sell with confidence, Grow with confidence</span></p>
      </v-col>
    </v-row>
    <Testimonials />
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.about-img{
  width: 300px;
  max-height: 320px;
  margin-left: 30px;
  object-fit: contain;
}

</style>