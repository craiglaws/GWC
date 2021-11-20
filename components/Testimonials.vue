<template>
  <div class="gwc-row bg-primary-light">
    <v-row>
      <v-col cols="10" class="mx-auto">
        <h2 class="font-white">Testimonials</h2>
        <TitleBorder color="secondary-bd" class="mb-10"/>
        <VueSlickCarousel v-bind="settings">
          <TestimonialSliderItem 
            v-for="(slide, i) in slides"
            :key="i"
            :slide="slide"
          />
        </VueSlickCarousel>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

  data(){
    return{
      slides: [
        {
          name: "John Thomson",
          position: "Day Shift Supervisor",
          company: "Swansons Friut Company",
          review: "Henrieta and I worked at Swansons Fruit Company. I thoroughly enjoyed my time working with her and came to know her as truly an asset to the team. She is honest, dependable, incredibly hard-working. Beyond that, she is an impressive Sales Representative who is always driven to get the results required and meet customers’ needs. Her knowledge of hotels/restaurant and sales was a huge advantage to our entire office. She put this skillset to work to get new clients to use our products and to keep existing clients on board at Swansons. Along with her undeniable talent, Henrieta has always been an absolute joy to work with. She is a true team player and always manages to foster positive discussions and bring the best out of other employees."
        },
        {
          name: "John Buttar",
          position: "Area Sales Manager",
          company: "M&J Seafoods",
          review: "Henrieta and I were working together for over a year. She was a joy to have in our team at M&J Seafoods, quick and eager to learn about products and service. Her commitment to take on my clients and continue to fight to ensure her customers receive the best produce and customer service gave me peace of mind my customer was in good hands."
        },
        {
          name: "Pam Sloan",
          position: "Sales Operative",
          company: "M&J Seafoods",
          review: "I worked with Henrieta at M&J Seafoods. I was her dedicated Telesales Operative and she worked as Area Sales Manager. I can honestly say that in the 10 years I have been at M&J Seafoods, Henrieta was my best Area Sales Manager. She was motivated and she motivated me. She kept me up to date with her daily activity and about the customers she visited. Henrieta always smiled. Her motivation and dedication to what she was selling were outstanding."
        },
        {
          name: "Gary Palethorpe",
          position: "Sales Manager",
          company: "M&J Seafoods / Campbell Brothers",
          review: "I worked with Henrieta for four years with M&J Seafoods and Campbell Brothers, both as a colleague and as her Sales Manager. I have always found Henrieta to be very articulate and professional in everything she done. She was without doubt one of the best salespeople I have ever had the pleasure to work with and always put her customers first. She worked extremely hard to make sure she achieved all goals set for her, and she was a great role model for new sales people. I would recommend Henrieta for any sales role, either as a Field Sales Person or a Sales Training role for future salespeople looking for a career in sales."
        },
        {
          name: "Diane McInnes",
          position: "Telesales Operative",
          company: "Campbell Brothers",
          review: "I had the pleasure of working with Henrieta while working at Campbell Brothers. Henrieta is a team player but also works well on her own, with excellent time management skills. Henrieta was always willing to help in any situation – she always goes the extra mile for her clients and is a nice person someone, I am lucky to have worked with and I also learned a few new life skills from Henrieta. Henrieta is a very positive person and will bring a positive attitude to anything thrown at her."
        },
        {
          name: "Emmanuel Moine",
          position: "Hotel General Manager",
          company: "Glen Mhor Hotel",
          review: "Henrieta worked with us at the Glen Mhor Hotel for almost two years as S&M Manager. She developed her department very successfully, implementing a real sales structure within the hotel and the events team including sales strategy, targets, procedures and trainings. It was great to have her in the team!"
        },
        {
          name: "Claire Belshaw",
          position: "Wedding & Events Sales Manager",
          company: "Glen Mhor Hotel",
          review: "Henrieta is a highly experienced saleswoman with a professional work ethic. She was always happy to share her sales knowledge with others."
        },
        {
          name: "Gabriela Muehlebach",
          position: "Assistant General Manager",
          company: "Glen Mhor Hotel",
          review: "I worked with Henrieta for almost two years. She is such a great and amazing salesperson. She has such a professional attitude towards work and is very passionate about it!"
        },
        {
          name: "Futura Mazzucco",
          position: "Corporate Sales",
          company: "Glen Mhor Hotel",
          review: "Henrieta has been an understanding and patient manager. She was always on time and never had a problem being the last one of the team to leave after a long day. Henrieta shared her valuable experience in sales with the team and guided us to achieve better performance and results. She always cared for the team she looked after, and encouraged everyone to work together to achieve our targets. I would recommend Henrieta for any future company looking for a bright and experienced sales manager."
        },
        {
          name: "Sam McKee",
          position: "Executive for Scotland & Ireland",
          company: "Scent Air UK",
          review: "Henrieta has a keen awareness, a great business and marketing mind and is a gifted listener. She sees the big picture in a fantastic way but also has a keen eye for the details. I found her an absolute pleasure to work with and she is just the kind of person you could also have a drink with and chat about life easily! I really hope we get a chance to work again sometime. She is a credit to the business."
        },
        {
          name: "Matt Wallace",
          position: "Owner",
          company: "Clarity Walk",
          review: "Henrieta was kind enough to meet with me and provide sales and marketing advice for my business, which really helped. She is an expert with lots of experience and is passionate about delivering great service. Would highly recommend any service she offers and meeting her if you get the chance."
        },
        
      ],
      settings: {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  }

}
</script>

<style scoped>
.review-bg{
  background-color: #f5b084;
  padding-left: 50px;
  padding-right: 50px;
}

>>> .slick-track
{
    display: flex !important;
}

>>> .slick-slide
{
    height: auto !important;
}

>>> .slick-slide > div {
  height: 100%
}

>>> .slick-next{
  top: 40%;
}

>>> .slick-prev{
  top: 40%;
  left: -40px;
}

>>> .slick-next:before {
  opacity: 1 !important;
}
>>> .slick-prev:before {
  opacity: 1 !important;
}

>>> .slick-dots{
  padding: 0 !important;
}

>>> .slick-dots li button:before {
    opacity: 0.5;
    color: white;
}

>>> .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #E6324A;
}
</style>