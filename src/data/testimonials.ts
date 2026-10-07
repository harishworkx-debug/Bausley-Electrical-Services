export interface Testimonial {
  author: string;
  timeAgo: string;
  content: string;
  services?: string;
  ownerResponse?: string;
  stars: number;
}

export const testimonials: Testimonial[] = [
  {
    author: 'Russell Henson',
    timeAgo: '4 years ago',
    stars: 5,
    content: 'I highly recommend Bausley Electrical Services for all your electrical needs! They are very professional, punctual, friendly, & get the job done! They are some of the nicest people you’ll meet and very easy to talk to, and they don’t give you the “run around” like most other services do. I will be using them for all my electrical needs from now on. They did a great job for me and I highly recommend them to anyone!',
    services: 'Electrical outlet & switch installation, Electrical outlet & switch repair',
    ownerResponse: 'Thank you SO MUCH!! It was a pleasure meeting you and we look forward to working with you again very soon! We appreciate your business!😊'
  },
  {
    author: 'David Burroughs',
    timeAgo: '4 years ago',
    stars: 5,
    content: 'Absolutely wonderful experience working with them. I called needed power restored and they came same day. It was pleasure doing business with them and even better meeting them. I went ahead and got them to quote some more things while they were here. I will definitely use them for this upcoming work and everything else electrical in the future!',
    services: 'Electrical power restoration',
    ownerResponse: 'Thanks so much!! You guys are absolutely AMAZING!! Looking forward to your upcoming projects. Thanks again!🥰🥰🥰🥰'
  },
  {
    author: 'wanda hunt',
    timeAgo: 'a year ago',
    stars: 5,
    content: 'I trust this company. They are fair, honest, on time, do outstanding work, and are just good folks. You will think so too. You can number them among the best. 🥰',
    ownerResponse: 'It was a pleasure meeting you!! Thanks again for your business.🥰'
  },
  {
    author: 'Rachel Cotney',
    timeAgo: '2 years ago',
    stars: 5,
    content: 'I don\'t have enough nice things to say about Bausley Electrical. We had issues that caused us to lose power to our house, and Bausley came as quickly as possible because we were in the middle of a heat wave. Of the three electricians we spoke to, they were the only ones who told us the truth and didn\'t try to rewire our house or redo our electrical panels. Mr. Bausley told me exactly what was wrong, and Alabama Power said the same thing when they came out to fix it. Thank you so much for being honest and saving us thousands of dollars!',
    ownerResponse: 'You guys are amazing!! Thanks again for your business and kind words. We look forward to working with you guys in the future.'
  },
  {
    author: 'Judy Rollins',
    timeAgo: '3 years ago',
    stars: 5,
    content: 'They did exactly what they said they were going to do. They came when they said, which is highly unusual. They were so friendly and helpful. They worked hard to fix our problem and made it look very nice and I\'m sure it will be good for many years to come. I would definitely refer any one to call them for their needs.',
    ownerResponse: 'It was such a pleasure meeting you and your husband. You guys are the best. Thank you so much!!!!'
  },
  {
    author: 'Elaine Alexander',
    timeAgo: '5 years ago',
    stars: 5,
    content: 'Great Service, and very friendly. Responsive and on time. Great family business. I encourage anyone needing electrical work to call Bausley first!!!!',
    services: 'Electrical outlet & switch repair',
    ownerResponse: 'Thanks so much! It was VERY nice meeting you guys.'
  },
  {
    author: 'Key_Dope',
    timeAgo: '4 years ago',
    stars: 5,
    content: 'The Bausley are very dependable, professional, and punctual. They went over and beyond. Definitely 10/10. Very outstanding..',
    services: 'Remodeling, Ground wire installation, Electrical panel repair, Electrical power restoration',
    ownerResponse: 'THANKS SO MUCH!! WE APPRECIATE YOU AND YOUR BUSINESS!'
  },
  {
    author: 'Shane Bailey',
    timeAgo: '4 years ago',
    stars: 5,
    content: 'Great work at a fair price. Got my flood lights, TV outlet and master bedroom fan/light issues taken care of in a timely manner.',
    ownerResponse: 'Thanks so much!! It was so nice meeting you. We appreciate your business.🥰'
  },
  {
    author: 'Kayla Ruble',
    timeAgo: '2 years ago',
    stars: 5,
    content: 'They are the sweetest! They showed up when stated, took care of the electrical running to the camper. Awesome people!',
    ownerResponse: 'You are a sweetheart!! Thanks for your business and we look forward to our upcoming service with you. Thanks again!🥰'
  }
];
