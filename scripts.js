// Global Variable used to store the quotes
// fetched from the API
//var data;

let front = true;

// Getting the front and the back author boxes
const authors = document.querySelectorAll(".author");

// Getting the front and the back texts
const texts = document.querySelectorAll(".text");

// Getting the body
const body = document.getElementById("body");

// Getting the buttons
const button = document.querySelectorAll(".new-quote");

const blockFront = document.querySelector(".block__front");
const blockBack = document.querySelector(".block__back");

const authorFront = authors[0];
const authorBack = authors[1];

const textFront = texts[0];
const textBack = texts[1];

const buttonFront = button[0];
const buttonBack = button[1];


// An arrow function used to get a quote randomly
const displayQuote = () =>{

	// Generates a random number between 0
	// and the length of the dataset
	let index = Math.floor(Math.random()*data.length);

	// Stores the quote present at the randomly generated index
	let quote = data[index].text;

	// Stores the author of the respective quote
	let author = data[index].author;

	// Making the author anonymous if no author is present
	if(!author){
		author = "so mot hyt be!"
	}

	// Replacing the current quote and the author with a new one

	if(front){
		// Changing the front if back-side is displayed
		textFront.innerHTML = quote;
		authorFront.innerHTML = author;
	}else{
		// Changing the back if front-side is displayed
		textBack.innerHTML = quote;
		authorBack.innerHTML = author;
	}
	
	front = !front;

}
/* include('./data1.js');
let data = affirm(); */



// Data array

    const data = [
 {
    text: "If you want to change your world, change your mind.",
    author: "so mot hyt be!"
  },
  {
    text: "I am a divine expression of my lord.",
    author: "so mot hyt be!"    
  },

  {
    text: "Faith makes me grow morally and ethically.",
    author: "so mot hyt be!"
  },

  {
    text: "I am living in the love that surrounds my world.",
    author: "so mot hyt be!"
  },

  {
    text: "I am getting everything that I meant to have",
    author: "so mot hyt be!"
  },
  {
    text: "I am great and living the life that is best for me.",
    author: "so mot hyt be!"
  },
  {
    text: "I am accountable for my spiritual growth.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to share my strength and love.",
    author: "so mot hyt be!"
  },

  {
    text: "Everything is happening for good.",
    author: "so mot hyt be!"
  },

  {
    text: "I am attuned to the universe and its flow.",
    author: "so mot hyt be!"
  },

  {
    text: "Life is a beautiful blessing.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy to where I am",
    author: "so mot hyt be!"
  },

  {
    text: "I am valued for my vitality and health.",
    author: "so mot hyt be!"
  },

  {
    text: "I am getting smarter and stronger daily.",
    author: "so mot hyt be!"
  },

  {
    text: "I am vibrant in my mind and spirit.",
    author: "so mot hyt be!"
  },

  {
    text: "I am complete and celebrate my fitness.",
    author: "so mot hyt be!"
  },

  {
    text: "I am choosing good health over everything.",
    author: "so mot hyt be!"
  },

  {
    text: "I take care of my body.",
    author: "so mot hyt be!"
  },

  {
    text: "I am maintaining an ideal weight to live a healthy life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am motivated and hold all energies to accomplish my goals.",
    author: "so mot hyt be!"
  },

  {
    text: "I am strong-willed to be healthier and happier with each passing day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am blessed to be healthy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am satisfied, happy and aligned to my purpose.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a dream chaser.",
    author: "so mot hyt be!"
  },

  {
    text: "Living a purposeful life is not a hard thing for me.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in my ideas.",
    author: "so mot hyt be!"
  },

  {
    text: "I am working in the right direction.",
    author: "so mot hyt be!"
  },

  {
    text: "I am all ears to my guardian angels to guide me towards my purpose.",
    author: "so mot hyt be!"
  },

  {
    text: "I am persistent in chasing my dreams.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to explore my passion.",
    author: "so mot hyt be!"
  },

  {
    text: "My actions take me closer to my greater purpose.",
    author: "so mot hyt be!"
  },

  {
    text: "I am living a life of purpose and happiness.",
    author: "so mot hyt be!"
  },

  {
    text: "I cherish my dreams.",
    author: "so mot hyt be!"
  },

  {
    text: "I do not need people's approval of my happiness.",
    author: "so mot hyt be!"
  },

  {
    text: "I am about my dreams and aspirations, not only about my body.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ok with my imperfections.",
    author: "so mot hyt be!"
  },

  {
    text: "I am charming.",
    author: "so mot hyt be!"
  },

  {
    text: "I am connected with myself at deeper levels to achieve all that I wish for.",
    author: "so mot hyt be!"
  },

  {
    text: "I know my limits.",
    author: "so mot hyt be!"
  },

  {
    text: "I am responsible for devising my life's master plan.",
    author: "so mot hyt be!"
  },

  {
    text: "I am not made for imitating someone else.",
    author: "so mot hyt be!"
  },

  {
    text: "I am the best version of myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am born to conquer and shine.",
    author: "so mot hyt be!"
  },

  {
    text: "I let go of painful patterns and accept new patterns to refresh myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for being given a chance to live.",
    author: "so mot hyt be!"
  },

  {
    text: "I know it takes time to change things and heal yourself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy and satisfied with my present.",
    author: "so mot hyt be!"
  },

  {
    text: "I do not regret mistakes and bad decisions.",
    author: "so mot hyt be!"
  },

  {
    text: "Forgiving those who have hurt me, heals me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am determined to be healthier day by day.",
    author: "so mot hyt be!"
  },
  {
    text: "I treat my body as a chamber of my soul and respect it.",
    author: "so mot hyt be!"
  },

  {
    text: "I love looking after myself to ensure my wellbeing.",
    author: "so mot hyt be!"
  },

  {
    text: "Health and healing are priorities in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am an aims achiever.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing is impossible.",
    author: "so mot hyt be!"
  },

  {
    text: "I know I can do wonders.",
    author: "so mot hyt be!"
  },

  {
    text: "I am stronger than I look.",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident in my skin.",
    author: "so mot hyt be!"
  },

  {
    text: "I am unique and brilliant.",
    author: "so mot hyt be!"
  },

  {
    text: "I trust my abilities.",
    author: "so mot hyt be!"
  },

  {
    text: "I have the power to overcome obstacles.",
    author: "so mot hyt be!"
  },

  {
    text: "I am strong.",
    author: "so mot hyt be!"
  },

  {
    text: "I am enough.",
    author: "so mot hyt be!"
  },

  {
    text: "I love to be surrounded by cheerful people.",
    author: "so mot hyt be!"
  },

  {
    text: "I am eager to unfold new ways of joys today.",
    author: "so mot hyt be!"
  },

  {
    text: "I am blessed to be happy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in a relationship with joy and fun.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy with me and I need not prove it.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy with what I have.",
    author: "so mot hyt be!"
  },

  {
    text: "I am always a happy-go-lucky kind of person.",
    author: "so mot hyt be!"
  },

  {
    text: "Happiness and gratitude are my mantras of life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am determined to be happy forever.",
    author: "so mot hyt be!"
  },

  {
    text: "I am awakening to new dawn to greet happiness.",
    author: "so mot hyt be!"
  },

  {
    text: "I welcome all the wealth life offers me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a confident money magnet.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in think and grow rich.",
    author: "so mot hyt be!"
  },

  {
    text: "My money is multiplying as I deliver more of myself to serve humanity.",
    author: "so mot hyt be!"
  },

  {
    text: "I am entitled to financial freedom and carefree life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am not only thinking of becoming wealthy, but I am also striving for it.",
    author: "so mot hyt be!"
  },

  {
    text: "I am committed to growing my bank balance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to engage all my skills and knowledge to become rich.",
    author: "so mot hyt be!"
  },

  {
    text: "I am attracting money from all directions with my hard work.",
    author: "so mot hyt be!"
  },

  {
    text: "I am rich enough to fulfill all my desires.",
    author: "so mot hyt be!"
  },

  {
    text: "I celebrate the abundance of everything in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a charmer. I emanate ampleness effortlessly.",
    author: "so mot hyt be!"
  },

  {
    text: "I am enjoying everything I have, and this constitutes my abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am attuned to the abundance of success.",
    author: "so mot hyt be!"
  },

  {
    text: "I am blessed to have an abundance of health, prosperity and affirmative willingness.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a magnet to attract endless abundance with a positive attitude.",
    author: "so mot hyt be!"
  },

  {
    text: "I am curious to knock and open new doors to discover the gems of abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful to have unlimited abundance in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am accustomed to the power of abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am capable of attracting daily abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy with who I am and can be.",
    author: "so mot hyt be!"
  },

  {
    text: "Today I am going to bid farewell to old bad habits and welcome a positive change in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I have infinite potential to grow and improve.",
    author: "so mot hyt be!"
  },

  {
    text: "I am not afraid of failures. I learn from my mistakes and turn failures into favorable results.",
    author: "so mot hyt be!"
  },

  {
    text: "I am full of vitality. My confidence, positive attitude and self-belief are my biggest assets to take me a step closer to my success.",
    author: "so mot hyt be!"
  },

  {
    text: "My family and friends are my strength to create an amazing world for me.",
    author: "so mot hyt be!"
  },

  {
    text: "There is a whole world of opportunities for me to see myself successful in my career.",
    author: "so mot hyt be!"
  },

  {
    text: "There is a whole world of opportunities for me to see myself successful in my career.",
    author: "so mot hyt be!"
  },

  {
    text: "I am the architect of my fate. I can achieve what I have dreamt for myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am harder than all the challenges and hurdles lying in my way.",
    author: "so mot hyt be!"
  },

  {
    text: "I am blessed to have everything in my life to make it successful.",
    author: "so mot hyt be!"
  },

  {
    text: "I am responsible for making smart decisions to drive success in my personal and professional life.",
    author: "so mot hyt be!"
  },

  {
    text: "Forgiveness is not about forgetting, it is about moving on",
    author: "so mot hyt be!"
  },

  {
    text: "Self-forgiveness is the best choice",
    author: "so mot hyt be!"
  },

  {
    text: "It is easy for me to forgive others",
    author: "so mot hyt be!"
  },

  {
    text: "I prefer self-love",
    author: "so mot hyt be!"
  },

  {
    text: "I acknowledge my faults and will forgive myself",
    author: "so mot hyt be!"
  },

  {
    text: "Being peaceful is my priority",
    author: "so mot hyt be!"
  },

  {
    text: "I breathe peace, live peace, and feel peace",
    author: "so mot hyt be!"
  },

  {
    text: "I will remain in peace with me and with the world",
    author: "so mot hyt be!"
  },

  {
    text: "I will practice calm and relax in every situation",
    author: "so mot hyt be!"
  },

  {
    text: "I will always choose to have a peaceful day",
    author: "so mot hyt be!"
  },

  {
    text: "Wherever I go I will perform only kind acts",
    author: "so mot hyt be!"
  },

  {
    text: "It is always easy for me to be kind",
    author: "so mot hyt be!"
  },

  {
    text: "Being a kind person is the greatest reward of life",
    author: "so mot hyt be!"
  },

  {
    text: "I will speak only the kind words",
    author: "so mot hyt be!"
  },

  {
    text: "I will treat others with a soft and kind-hearted nature",
    author: "so mot hyt be!"
  },

  {
    text: "I am very much thankful for all the lovable and beautiful relationships in my life",
    author: "so mot hyt be!"
  },

  {
    text: "I will practice and show kindness and love to the people who surround me",
    author: "so mot hyt be!"
  },

  {
    text: "I love infinitely, and I am infinitely loved",
    author: "so mot hyt be!"
  },

  {
    text: "I'll be surrounded by people who can spread positive energy to me, and also who lift my energy",
    author: "so mot hyt be!"
  },

  {
    text: "In my relationship, my communication will be full of honesty and compassion<",
    author: "so mot hyt be!"
  },

  {
    text: "There are no such things called failure in my life, it is only experiences",
    author: "so mot hyt be!"
  },

  {
    text: "I am the captain of my ship so I will guide my life<",
    author: "so mot hyt be!"
  },

  {
    text: "Every single new day, I am becoming more confident which is turning me into a stronger and wiser person",
    author: "so mot hyt be!"
  },

  {
    text: "I always believe in my talents and skills",
    author: "so mot hyt be!"
  },

  {
    text: "I can face all the challenges of my life with strength",
    author: "so mot hyt be!"
  },

  {
    text: "I am at peace with my body parts",
    author: "so mot hyt be!"
  },

  {
    text: "I will consider my body as a tremendous gift and I will make sure to treat my body with kind and love",
    author: "so mot hyt be!"
  },

  {
    text: "My body is the biggest responsibility for me, and I will do anything which is best for my body, and only for me",
    author: "so mot hyt be!"
  },

  {
    text: "I love to fill every inch of my skin with the warmth of love, and I will allow embracing it",
    author: "so mot hyt be!"
  },

  {
    text: "I accept myself the way I am. My body is ideal the way it is.",
    author: "so mot hyt be!"
  },

  {
    text: "I am amazing",
    author: "so mot hyt be!"
  },

  {
    text: "I am brave enough to ask anything for me",
    author: "so mot hyt be!"
  },

  {
    text: "I will radiate confidence within me and to the others",
    author: "so mot hyt be!"
  },

  {
    text: "If I want to see a better version of myself, then I need to come out of the comfort zone",
    author: "so mot hyt be!"
  },

  {
    text: "I'm worthy of all the good things in the world, as I am strong and courageous",
    author: "so mot hyt be!"
  },

  {
    text: "In every situation, I will stand up for myself, and I believe that I truly feel kindness with me",
    author: "so mot hyt be!"
  },

  {
    text: "I am immensely blessed, as all is well in my life",
    author: "so mot hyt be!"
  },

  {
    text: "The thoughts, actions, and words of me are divinely guided and protected",
    author: "so mot hyt be!"
  },

  {
    text: "The universe will guide me divinely on everything and anything",
    author: "so mot hyt be!"
  },

  {
    text: "The wisdom of the entire universe lives inside of me. I am more than what I feel, see, and think",
    author: "so mot hyt be!"
  },

  {
    text: "The universe will always hold my back",
    author: "so mot hyt be!"
  },

  {
    text: "I experience happiness in all the things I do",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to live a happy life",
    author: "so mot hyt be!"
  },

  {
    text: "I am a radiant and joyous person",
    author: "so mot hyt be!"
  },

  {
    text: "My inner joy is the key to all the good things in my life",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy with myself and being myself",
    author: "so mot hyt be!"
  },

  {
    text: "The positive thoughts will help to nourish my body, and also helps me to radiate joy to the others",
    author: "so mot hyt be!"
  },

  {
    text: "I will attract only to the energies and situations which will give joy to me",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to recognize the blessing in my life, and each day my life is filled with joy",
    author: "so mot hyt be!"
  },

  {
    text: "I will have a most amazing day as I will have all the happiness, love, and positive energy which is required for today",
    author: "so mot hyt be!"
  },

  {
    text: "I am committed and will make sure to live joy and happy life",
    author: "so mot hyt be!"
  },

  {
    text: "I am succesful in whatever I do",
    author: "so mot hyt be!"
  },

  {
    text: "I have the power that I can attract the things which I want",
    author: "so mot hyt be!"
  },

  {
    text: "The contributions which I make to achieve my goal will be unique and meaningful",
    author: "so mot hyt be!"
  },

  {
    text: "I consider the challenges which I face in my life as an opportunity to grow and improve",
    author: "so mot hyt be!"
  },

  {
    text: "For me, the world is full of endless opportunities",
    author: "so mot hyt be!"
  },

  {
    text: "I will try to achieve all my goals, and I will trust myself that I have all the capability which is required to achieve the goals",
    author: "so mot hyt be!"
  },

  {
    text: "I am committing myself to a healthier life",
    author: "so mot hyt be!"
  },

  {
    text: "My body feels perfect with me",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to be healthy and happy",
    author: "so mot hyt be!"
  },

  {
    text: "My body is working towards the perfect health",
    author: "so mot hyt be!"
  },

  {
    text: "My mind is at peace and in my control",
    author: "so mot hyt be!"
  },

  {
    text: "I am healthy and it makes me happy",
    author: "so mot hyt be!"
  },

  {
    text: "I am becoming better in each and every way",
    author: "so mot hyt be!"
  },

  {
    text: "The older I get, the healthier I become",
    author: "so mot hyt be!"
  },

  {
    text: "I care for my body, and the body cares for me",
    author: "so mot hyt be!"
  },

  {
    text: "I am filled with a lot of energy which is needed for doing daily activities of my life",
    author: "so mot hyt be!"
  },

  {
    text: "I am appreciating the cycles which are experienced by my body",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident with my sexuality",
    author: "so mot hyt be!"
  },

  {
    text: "The beautiful part of being alive is that I combine health and intelligence",
    author: "so mot hyt be!"
  },

  {
    text: "The greatest gift in the universe which I received is being a alive",
    author: "so mot hyt be!"
  },

  {
    text: "I am only attracted to healthy relationships",
    author: "so mot hyt be!"
  },

  {
    text: "My love relationships are fulfilling",
    author: "so mot hyt be!"
  },

  {
    text: "I will find love wherever I go",
    author: "so mot hyt be!"
  },

  {
    text: "The universe is searching for the most wonderful and fulfilling love for me",
    author: "so mot hyt be!"
  },

  {
    text: "I am in a wonderful relationship where my partner respects me and treats me equal",
    author: "so mot hyt be!"
  },

  {
    text: "I'm very satisfied in a fun relationship with a partner who loves me deeply",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready for a healthy relationship",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve love and peace",
    author: "so mot hyt be!"
  },

  {
    text: "I receive love openly and freely",
    author: "so mot hyt be!"
  },

  {
    text: "I love the way I am",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in myself",
    author: "so mot hyt be!"
  },

  {
    text: "I am creative and also unlimited",
    author: "so mot hyt be!"
  },

  {
    text: "Creativity flows inside of me as my mind is clear and focussed",
    author: "so mot hyt be!"
  },

  {
    text: "I will maintain strong will powers so that my habits can be easily changed",
    author: "so mot hyt be!"
  },

  {
    text: "I will set clear goals and will take action towards achieving my goal",
    author: "so mot hyt be!"
  },

  {
    text: "The financial choices which I am making today will help to build a life that I desire the most",
    author: "so mot hyt be!"
  },

  {
    text: "I can spend money on the things which matters to me the most",
    author: "so mot hyt be!"
  },

  {
    text: "I have the ability to control my financial state now so that I can enjoy an easy life later",
    author: "so mot hyt be!"
  },

  {
    text: "I can overcome any kind of money obstacles that will come into my way",
    author: "so mot hyt be!"
  },

  {
    text: "Money will come into my life in both the expected and unexpected ways",
    author: "so mot hyt be!"
  },

  {
    text: "I won't get scared of the financial crisis because I have a plan",
    author: "so mot hyt be!"
  },

  {
    text: "Wherever I go in the world, money flows to me freely",
    author: "so mot hyt be!"
  },

  {
    text: "I will get money, as I deserve a prosperous life",
    author: "so mot hyt be!"
  },

  {
    text: "I will use money as a tool that will take my life to better",
    author: "so mot hyt be!"
  },

  {
    text: "I control the money and not the other way round",
    author: "so mot hyt be!"
  },

  {
    text: "I earn enough money",
    author: "so mot hyt be!"
  },

  {
    text: "I have an endless flow of money",
    author: "so mot hyt be!"
  },

  {
    text: "I am always financially stable",
    author: "so mot hyt be!"
  },

  {
    text: "I attract money effortlessly and easily",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to make money easily",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to attract money",
    author: "so mot hyt be!"
  },

  {
    text: "I always listen to my inner feelings, and I will express them when I need to",
    author: "so mot hyt be!"
  },

  {
    text: "I will step into my inner power, by releasing the limiting beliefs",
    author: "so mot hyt be!"
  },

  {
    text: "I live my life with joy and confidence, as my life is the greatest gift to me",
    author: "so mot hyt be!"
  },

  {
    text: "I am surround by the right group of supportive and positive people, so that they can bring the best version of me",
    author: "so mot hyt be!"
  },

  {
    text: "I am forgiving, gentle with myself, and with my mistakes",
    author: "so mot hyt be!"
  },

  {
    text: "I am completely in peace with myself, and I respect and honor all the decisions which are made by me",
    author: "so mot hyt be!"
  },

  {
    text: "I will unconditionally love myself, and I am allowed to feel good about myself",
    author: "so mot hyt be!"
  },

  {
    text: "I believe that the joy and love life offered to me is worthy of it",
    author: "so mot hyt be!"
  },

  {
    text: "I will accept that I have a bitter past but I will make sure that my past won't define me",
    author: "so mot hyt be!"
  },

  {
    text: "I believe that I am unique in all ways and nothing can replace me",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud to be a part of something special.",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud to be a part of something special.",
    author: "so mot hyt be!"
  },

  {
    text: "I am excited to do good work today.",
    author: "so mot hyt be!"
  },

  {
    text: "I am attracting great opportunities into my life.",
    author: "so mot hyt be!"
  },

  {
    text: "People appreciate me for the work I do.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day I am getting better at what I do.",
    author: "so mot hyt be!"
  },

  {
    text: "My voice matters and I make a difference at work.",
    author: "so mot hyt be!"
  },

  {
    text: "I love solving problems and overcoming challenges at my job.",
    author: "so mot hyt be!"
  },

  {
    text: "I am capable of great things.",
    author: "so mot hyt be!"
  },

  {
    text: "I am respected",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy going to work every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in control of my future.",
    author: "so mot hyt be!"
  },

  {
    text: "My career gives me great satisfaction.",
    author: "so mot hyt be!"
  },

  {
    text: "I love my job.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day I make good choices towards staying fit.",
    author: "so mot hyt be!"
  },

  {
    text: "Being healthy and fit is part of my daily lifestyle.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my healthy body.",
    author: "so mot hyt be!"
  },

  {
    text: "I am strong and disciplined.",
    author: "so mot hyt be!"
  },

  {
    text: "Being slim and healthy is my natural state of being.",
    author: "so mot hyt be!"
  },

  {
    text: "My body is shedding the extra weight fast.",
    author: "so mot hyt be!"
  },

  {
    text: "I love exercising and going to the gym.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day I am getting closer to my ideal weight.",
    author: "so mot hyt be!"
  },

  {
    text: "I love eating healthy foods that keeps me thin.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing will stop me from accomplishing my goal.",
    author: "so mot hyt be!"
  },

  {
    text: "I love and respect myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I love and respect myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I know I will lose the weight.",
    author: "so mot hyt be!"
  },

  {
    text: "My body is thin and healthy.",
    author: "so mot hyt be!"
  },

  {
    text: "Losing weight is easy.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to be thin.",
    author: "so mot hyt be!"
  },

  {
    text: "I am financially abundant.",
    author: "so mot hyt be!"
  },

  {
    text: "I am courageous.",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident.",
    author: "so mot hyt be!"
  },

  {
    text: "Life is beautiful.",
    author: "so mot hyt be!"
  },

  {
    text: "I do everything the best I can",
    author: "so mot hyt be!"
  },

  {
    text: "I have a great body.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am healthy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am successful.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am radiating positive thoughts and vibes.",
    author: "so mot hyt be!"
  },

  {
    text: "I am drawn to positive people and situations.",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to feel good in every moment.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in control of how I feel.",
    author: "so mot hyt be!"
  },

  {
    text: "My mind and heart is full of joy.",
    author: "so mot hyt be!"
  },

  {
    text: "I feel great right now.",
    author: "so mot hyt be!"
  },

  {
    text: "I am optimistic about my future.",
    author: "so mot hyt be!"
  },

  {
    text: "Thinking positively comes natural to me.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing will get in my way of thinking good thoughts.",
    author: "so mot hyt be!"
  },

  {
    text: "I can turn any negative situation into a positive one.",
    author: "so mot hyt be!"
  },

  {
    text: "My mind is full of positive images.",
    author: "so mot hyt be!"
  },

  {
    text: "I always focus on the positive.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in control of my thoughts.",
    author: "so mot hyt be!"
  },

  {
    text: "I am at peace and ready to have a good day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a magnet for abundance and success.",
    author: "so mot hyt be!"
  },

  {
    text: "Everything is happening perfectly in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am accomplishing great things.",
    author: "so mot hyt be!"
  },

  {
    text: "I am inspired and motivated to achieve everything my heart desires.",
    author: "so mot hyt be!"
  },

  {
    text: "Everything I do becomes a great success.",
    author: "so mot hyt be!"
  },

  {
    text: "No matter what happens today, I will stay positive and upbeat.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the amount of success in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to be successful and happy.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing will stop me from creating success.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in control of my future and will succeed.",
    author: "so mot hyt be!"
  },

  {
    text: "No matter what happens today, I will stay positive and upbeat.",
    author: "so mot hyt be!"
  },

  {
    text: "I welcome good things to happen in my life today.",
    author: "so mot hyt be!"
  },

  {
    text: "I can handle anything that comes my way.",
    author: "so mot hyt be!"
  },

  {
    text: "I see the good in every person.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing can stop me from having an amazing day.",
    author: "so mot hyt be!"
  },

  {
    text: "Everything is happening perfectly for me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am at peace and ready to have a good day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a magnet for good things in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am full of energy, love, and joy.",
    author: "so mot hyt be!"
  },

  {
    text: "I have the power to create my reality.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in charge of my life.",
    author: "so mot hyt be!"
  },

  {
    text: "Today is a great day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to start the day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy to be alive.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to receive wealth into my life now.",
    author: "so mot hyt be!"
  },

  {
    text: "My wealth is constantly growing.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a multimillionaire.",
    author: "so mot hyt be!"
  },

  {
    text: "Money comes to me from all areas of my life.",
    author: "so mot hyt be!"
  },

  {
    text: "My life is flowing with wealth and abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I welcome large amounts of money into my bank account.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day my income is growing.",
    author: "so mot hyt be!"
  },

  {
    text: "The universe is sending me a lot of money.",
    author: "so mot hyt be!"
  },

  {
    text: "I am attracting a great deal of financial abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to be rich and wealthy.",
    author: "so mot hyt be!"
  },

  {
    text: "Being wealthy comes natural to me.",
    author: "so mot hyt be!"
  },

  {
    text: "My bank is full of money.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract wealth into my life.",
    author: "so mot hyt be!"
  },

  {
    text: "The Universe will send me the perfect person to share my life with.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the loving relationships I have.",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy giving love to my partner.",
    author: "so mot hyt be!"
  },

  {
    text: "Receiving love comes natural and effortless to me.",
    author: "so mot hyt be!"
  },

  {
    text: "I create long lasting relationships filled with joy and laughter.",
    author: "so mot hyt be!"
  },

  {
    text: "I am filled with love and enjoy sharing it with my partner.",
    author: "so mot hyt be!"
  },

  {
    text: "I am attracting the perfect person into my life.",
    author: "so mot hyt be!"
  },

  {
    text: "My relationships are filled with joy and happiness.",
    author: "so mot hyt be!"
  },

  {
    text: "I am manifesting the perfect person to share my life with.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to have an amazing soul mate.",
    author: "so mot hyt be!"
  },

  {
    text: "My heart is open and willing to accept love.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract love into my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I love myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of the person I am becoming.",
    author: "so mot hyt be!"
  },

  {
    text: "I can do anything I set my mind to.",
    author: "so mot hyt be!"
  },

  {
    text: "It's okay if I make mistakes and am not perfect.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my friends and family.",
    author: "so mot hyt be!"
  },

  {
    text: "Each day I look forward to taking on a new adventure.",
    author: "so mot hyt be!"
  },

  {
    text: "I am smart and make good choices.",
    author: "so mot hyt be!"
  },

  {
    text: "My life is fun and filled with joy.",
    author: "so mot hyt be!"
  },

  {
    text: "I have the confidence to be myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve good things to happen in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I love making new friends.",
    author: "so mot hyt be!"
  },

  {
    text: "I am healthy and happy.",
    author: "so mot hyt be!"
  },

  {
    text: "I love to learn new things.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in control of my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am fulfilled.",
    author: "so mot hyt be!"
  },

  {
    text: "I am resilient.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a good person.",
    author: "so mot hyt be!"
  },

  {
    text: "I am courageous.",
    author: "so mot hyt be!"
  },

  {
    text: "I am powerful.",
    author: "so mot hyt be!"
  },

  {
    text: "I am brave.",
    author: "so mot hyt be!"
  },

  {
    text: "I am smart.",
    author: "so mot hyt be!"
  },

  {
    text: "I am healthy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am good looking.",
    author: "so mot hyt be!"
  },

  {
    text: "I am successful.",
    author: "so mot hyt be!"
  },

  {
    text: "I am wealthy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident.",
    author: "so mot hyt be!"
  },

  {
    text: "I am bold.",
    author: "so mot hyt be!"
  },

  {
    text: "I am strong.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a good person.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a good friend.",
    author: "so mot hyt be!"
  },

  {
    text: "I am compassionate.",
    author: "so mot hyt be!"
  },

  {
    text: "I am giving.",
    author: "so mot hyt be!"
  },

  {
    text: "I am kind.",
    author: "so mot hyt be!"
  },

  {
    text: "I am love.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am fulfilled.",
    author: "so mot hyt be!"
  },

  {
    text: "I am empowered.",
    author: "so mot hyt be!"
  },

  {
    text: "I am courageous.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a strong person",
    author: "so mot hyt be!"
  },

  {
    text: "I am a powerful person.",
    author: "so mot hyt be!"
  },

  {
    text: "I am healthy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident.",
    author: "so mot hyt be!"
  },

  {
    text: "I am loved.",
    author: "so mot hyt be!"
  },

  {
    text: "I am sexy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am beautiful.",
    author: "so mot hyt be!"
  },

  {
    text: "Each and every cell of my body is full of life force energy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am whole and my body is healed.",
    author: "so mot hyt be!"
  },

  {
    text: "My body is filled with vitality and good health.",
    author: "so mot hyt be!"
  },

  {
    text: "My mind and body is a sacred temple.",
    author: "so mot hyt be!"
  },

  {
    text: "Each day of my life is filled with vibrant health.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to be healthy and happy.",
    author: "so mot hyt be!"
  },

  {
    text: "I have an abundance of energy.",
    author: "so mot hyt be!"
  },

  {
    text: "My mind and body is filled with positive energy.",
    author: "so mot hyt be!"
  },

  {
    text: "I eat healthy foods each and every day.",
    author: "so mot hyt be!"
  },

  {
    text: "My body is healthy and strong.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my good health.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a happy and loving person.",
    author: "so mot hyt be!"
  },

  {
    text: "My mind is filled with happy thoughts.",
    author: "so mot hyt be!"
  },

  {
    text: "Living happy is my natural state of being.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful to be happy and alive right now.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract happy people into my life.",
    author: "so mot hyt be!"
  },

  {
    text: "My happiness is contagious to those around me.",
    author: "so mot hyt be!"
  },

  {
    text: "Happiness radiates through my body.",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to be happy no matter what happens.",
    author: "so mot hyt be!"
  },

  {
    text: "I am getting happier and happier each and every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am delighted to to be alive.",
    author: "so mot hyt be!"
  },

  {
    text: "My life is filled with joy and good energy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am so happy today.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to be happy.",
    author: "so mot hyt be!"
  },

  {
    text: "I radiate positive energy to all of those around me.",
    author: "so mot hyt be!"
  },

  {
    text: "My heart is filled with love and joy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am blessed with good health.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for all of the wonderful things in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing will stand in my way of having a great day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am surrounded by beautiful people.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract abundance and wonderful things.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy and full of joy.",
    author: "so mot hyt be!"
  },

  {
    text: "Today is a beautiful day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am excited to start the day.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing will stop me from succeeding.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day I take action and move forward in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing will stop me from succeeding.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to take on the world.",
    author: "so mot hyt be!"
  },

  {
    text: "I can take on any challenge.",
    author: "so mot hyt be!"
  },

  {
    text: "I embrace challenges as opportunities.",
    author: "so mot hyt be!"
  },

  {
    text: "People are attracted to my self-confidence.",
    author: "so mot hyt be!"
  },

  {
    text: "I can overcome any obstacle.",
    author: "so mot hyt be!"
  },

  {
    text: "I am good at anything I put my mind to.",
    author: "so mot hyt be!"
  },

  {
    text: "I am bold and courageous.",
    author: "so mot hyt be!"
  },

  {
    text: "I can overcome anything I put my mind to.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I can do anything I want.",
    author: "so mot hyt be!"
  },

  {
    text: "Every part of my life is filled with prosperity.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract an abundance of wealth and opportunity.",
    author: "so mot hyt be!"
  },

  {
    text: "The universe will provide for me.",
    author: "so mot hyt be!"
  },

  {
    text: "Prosperity flows through every aspect of my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I have enough of everything I need.",
    author: "so mot hyt be!"
  },

  {
    text: "I am attracting money and wealth into my environment.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the amount of abundance I have.",
    author: "so mot hyt be!"
  },

  {
    text: "Each day of my life is filled with abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a magnet for success.",
    author: "so mot hyt be!"
  },

  {
    text: "I am wealthy and prosperous.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve everything I want.",
    author: "so mot hyt be!"
  },

  {
    text: "I have everything I need in life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am abundant.",
    author: "so mot hyt be!"
  },

  {
    text: "I am healed.",
    author: "so mot hyt be!"
  },

  {
    text: "My body is healing itself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in great shape.",
    author: "so mot hyt be!"
  },

  {
    text: "My health is improving.",
    author: "so mot hyt be!"
  },

  {
    text: "My body is getting stronger each day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am the master of my world. I release the hurt and move into future with joy and enthusiasm.",
    author: "so mot hyt be!"
  },

  {
    text: "I let go of my painful past feelings. I recognize the good in life and in me.",
    author: "so mot hyt be!"
  },

  {
    text: "I release my feelings of pain and replace them with loving kindness for myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I move beyond forgiveness to understanding, and I have compassion for all.",
    author: "so mot hyt be!"
  },

  {
    text: "I listen to my feelings and I know that my feelings are my friends.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to be healed so I allow forgiveness to manifest.",
    author: "so mot hyt be!"
  },

  {
    text: "I return the basics of life: forgiveness, courage, gratitude, love and humor.",
    author: "so mot hyt be!"
  },

  {
    text: "Everyone has something to teach me, I raise above the events and see the main picture.",
    author: "so mot hyt be!"
  },

  {
    text: "As I forgive myself, it becomes easier to forgive others.",
    author: "so mot hyt be!"
  },

  {
    text: "I give myself the gift of freedom from the past and move with joy into the future.",
    author: "so mot hyt be!"
  },

  {
    text: "The past is over and it has no power over me now. I refuse to be a victim anymore. I claim my power.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my negative emotions as they teach me valuable lessons.",
    author: "so mot hyt be!"
  },

  {
    text: "Life wants the best for me and I allow happy events to enter my world.",
    author: "so mot hyt be!"
  },

  {
    text: "How I feel matters, therefore I concentrate on aspects of life that make me feel good.",
    author: "so mot hyt be!"
  },

  {
    text: "I learn to love myself unconditionally, more and more every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am letting go of all negative feelings.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing will stand in my way of being at peace",
    author: "so mot hyt be!"
  },

  {
    text: "By changing my thoughts, I create peace in my world.",
    author: "so mot hyt be!"
  },

  {
    text: "I practice being at peace when other people are agitated.",
    author: "so mot hyt be!"
  },

  {
    text: "I can be tranquil in every situation.",
    author: "so mot hyt be!"
  },

  {
    text: "I am safe when I'm near other people.",
    author: "so mot hyt be!"
  },

  {
    text: "In my sadness I create space to heal myself.",
    author: "so mot hyt be!"
  },

  {
    text: "All things are unfolding as they are supposed to.",
    author: "so mot hyt be!"
  },

  {
    text: "I allow love to guide all my relationships.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract people who accept me and love me for who I am.",
    author: "so mot hyt be!"
  },

  {
    text: "I am excited to start a new page in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe everything happens for a reason, even though I may not know it in this moment.",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to let go of the past and open my heart for love again.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to forgive myself or anyone who has caused me emotional pain.",
    author: "so mot hyt be!"
  },

  {
    text: "I move beyond forgiveness to understanding and I have compassion and kindness for all.",
    author: "so mot hyt be!"
  },

  {
    text: "I forgive myself for holding a grudge for anyone who has wronged me and I free myself.",
    author: "so mot hyt be!"
  },

  {
    text: "Nothing and no one can take away my power.",
    author: "so mot hyt be!"
  },

  {
    text: "I know when to say NO.",
    author: "so mot hyt be!"
  },

  {
    text: "I am strong, independent and respect my boundaries.",
    author: "so mot hyt be!"
  },

  {
    text: "I see every situation as an opportunity to heal and grow.",
    author: "so mot hyt be!"
  },

  {
    text: "What I went through does not define who I am.",
    author: "so mot hyt be!"
  },

  {
    text: "I am open to receive and give love.",
    author: "so mot hyt be!"
  },

  {
    text: "The love that I have for myself and others is beyond words.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract people who can help me heal through love.",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy of being loved.",
    author: "so mot hyt be!"
  },

  {
    text: "I am surrounded by people who love me and who I love.",
    author: "so mot hyt be!"
  },

  {
    text: "I have the power to overcome my sadness.",
    author: "so mot hyt be!"
  },

  {
    text: "I know that my feelings do not define my essence.",
    author: "so mot hyt be!"
  },

  {
    text: "I am becoming happier every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I see every emotion as guidance to my healing.",
    author: "so mot hyt be!"
  },

  {
    text: "I accept and do not judge myself for feeling sad.",
    author: "so mot hyt be!"
  },

  {
    text: "Everything in my life is working great.",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to heal.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in my ability to manifest happiness and healing.",
    author: "so mot hyt be!"
  },

  {
    text: "I am gentle with myself through the healing process.",
    author: "so mot hyt be!"
  },

  {
    text: "I allow myself time and space for my soul to heal.",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy playing in my body I am grateful that I no longer have back pain.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my healthy pain free back and body.",
    author: "so mot hyt be!"
  },

  {
    text: "My back is healthy, strong, flexible and pain free.",
    author: "so mot hyt be!"
  },

  {
    text: "I am healthy, happy, and in harmony.",
    author: "so mot hyt be!"
  },

  {
    text: "I am glad to be completely pain free.",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy my healthy body and am free of any and all residual back pain.",
    author: "so mot hyt be!"
  },

  {
    text: "My back is strong and flexible. I walk with ease and grace.",
    author: "so mot hyt be!"
  },

  {
    text: "Health is my birthright and I am grateful to be pain free.",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy feeling healthy and am grateful that my back is healed and free from pain.",
    author: "so mot hyt be!"
  },

  {
    text: "I consistently take all of the necessary action steps to heal my back. These steps help me to be pain free.",
    author: "so mot hyt be!"
  },

  {
    text: "My body, mind, and spirt are happy, healthy, and in harmony. I am free of pain.",
    author: "so mot hyt be!"
  },

  {
    text: "I choose a life that is free of pain, happy, and healthy.",
    author: "so mot hyt be!"
  },

  {
    text: "My body, mind, and spirit are healthy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am pain free, happy, and healthy.",
    author: "so mot hyt be!"
  },

  {
    text: "I have the allies and tools necessary to heal my back. For this I am grateful.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy, healthy, and free from back pain and I am psyched.",
    author: "so mot hyt be!"
  },

  {
    text: "I am healthy, healed, happy, and pain free.",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy my pain free back and my pain free body.",
    author: "so mot hyt be!"
  },

  {
    text: "I appreciate my healthy body, mind, and spirit.",
    author: "so mot hyt be!"
  },

  {
    text: "I am free of back pain and I am grateful.",
    author: "so mot hyt be!"
  },

  {
    text: "My back is free of pain and I move through my life gracefully and joyfully.",
    author: "so mot hyt be!"
  },

  {
    text: "I move freely and joyfully in my body.",
    author: "so mot hyt be!"
  },

  {
    text: "My back is healthy, strong, and flexible.",
    author: "so mot hyt be!"
  },

  {
    text: "My body is healthy and thriving.",
    author: "so mot hyt be!"
  },

  {
    text: "I am healthy, happy, and thriving.",
    author: "so mot hyt be!"
  },

  {
    text: "My back is healthy and pain-free.",
    author: "so mot hyt be!"
  },

  {
    text: "My body is healthy and free from pain.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for what I have. I choose to want what I have.",
    author: "so mot hyt be!"
  },

  {
    text: "I know that I will not have time in my life to use this, and that is okay. One lifetime is a gift from the universe and it is enough.",
    author: "so mot hyt be!"
  },

  {
    text: "Hoarding objects comes out of valid fears, but I let them go as they no longer serve me.",
    author: "so mot hyt be!"
  },

  {
    text: "I welcome abundance rather than fear and scarcity into my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am strong enough not to need to buy this.",
    author: "so mot hyt be!"
  },

  {
    text: "I find security in myself and through my Higher Power rather than in the things I own.",
    author: "so mot hyt be!"
  },

  {
    text: "If I end up needing something, I can always buy it later.",
    author: "so mot hyt be!"
  },

  {
    text: "People who matter notice me, not my possessions.",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to find meaning through relationships and experiences rather than just through objects.",
    author: "so mot hyt be!"
  },

  {
    text: "I am okay. My possessions do not define me.",
    author: "so mot hyt be!"
  },

  {
    text: "Owning too many things weighs me down.",
    author: "so mot hyt be!"
  },

  {
    text: "I do not need to own a lot of stuff.",
    author: "so mot hyt be!"
  },

  {
    text: "My bedroom is neat and tidy and I look forward to sleeping in my made bed.",
    author: "so mot hyt be!"
  },

  {
    text: "My bathroom is beautiful and spotless.",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy cleaning before things get too messy.",
    author: "so mot hyt be!"
  },

  {
    text: "My environment is in harmony with nature and everything flows effortlessly.",
    author: "so mot hyt be!"
  },

  {
    text: "My home is an extension of my life which is clean and organized.",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy spending the time it takes to clean my house.",
    author: "so mot hyt be!"
  },

  {
    text: "I love inviting people over to my clean house.",
    author: "so mot hyt be!"
  },

  {
    text: "Living in a clean house makes me feel good.",
    author: "so mot hyt be!"
  },

  {
    text: "My house is clean and highly organized.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract abundance in my life through being organized.",
    author: "so mot hyt be!"
  },

  {
    text: "My life flows effortlessly because I am organized.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in control of my life and surroundings.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a highly efficient and disciplined person.",
    author: "so mot hyt be!"
  },

  {
    text: "My life and home are organized and clean.",
    author: "so mot hyt be!"
  },

  {
    text: "Being organized allows me to do more in life.",
    author: "so mot hyt be!"
  },

  {
    text: "I love being organized.",
    author: "so mot hyt be!"
  },

  {
    text: "I gratefully accept the limited lifetime that I have and let go of things I will not live long enough to use again.",
    author: "so mot hyt be!"
  },

  {
    text: "If it's not meaningful, I don't need it.",
    author: "so mot hyt be!"
  },

  {
    text: "I can learn the skills necessary to develop an organizational system that works for me.",
    author: "so mot hyt be!"
  },

  {
    text: "I lived without this object for years, and I can live without it again.",
    author: "so mot hyt be!"
  },

  {
    text: "If I haven't needed it in a year, I can survive without it.",
    author: "so mot hyt be!"
  },

  {
    text: "I can appreciate things without possessing them.",
    author: "so mot hyt be!"
  },

  {
    text: "I close one chapter in my life and release the objects associated with it so I can open new ones.",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to show gratitude for the memories each object represents and then to release them to welcome a new chapter in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I don't have to declutter my whole house in a day, just one area.",
    author: "so mot hyt be!"
  },

  {
    text: "I don't have to declutter my whole house in a day, just one area.",
    author: "so mot hyt be!"
  },

  {
    text: "I have the discipline and stamina to tackle this decluttering project, one step at a time.",
    author: "so mot hyt be!"
  },

  {
    text: "Having space in my home, car, or office allows me to think clearly.",
    author: "so mot hyt be!"
  },

  {
    text: "I easily let go of things that no longer serve me.",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy living a simple life.",
    author: "so mot hyt be!"
  },

  {
    text: "I thrive because I place my health and wellbeing at the top of my priorities.",
    author: "so mot hyt be!"
  },

  {
    text: "All my cells are working together in perfectly balanced harmony.",
    author: "so mot hyt be!"
  },

  {
    text: "I consume delicious, nutritious food and joyfully exercise daily.",
    author: "so mot hyt be!"
  },

  {
    text: "I treat my body with tender respect and caring compassion.",
    author: "so mot hyt be!"
  },

  {
    text: "I patiently surrender to the powerful process of healing.",
    author: "so mot hyt be!"
  },

  {
    text: "I think loving thoughts and my body responds with perfect health.",
    author: "so mot hyt be!"
  },

  {
    text: "I have gratitude for every function of my beautifully healthy body!",
    author: "so mot hyt be!"
  },

  {
    text: "I am the resilient embodiment of strength, stamina, and endurance.",
    author: "so mot hyt be!"
  },

  {
    text: "I experience wellbeing in my entire body, head to toes.",
    author: "so mot hyt be!"
  },

  {
    text: "I walk in gratitude, dignity, and patience on this exact day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am determined to make today a marvelously gorgeous day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to create positive life choices and good habits today.",
    author: "so mot hyt be!"
  },

  {
    text: "I intend to take action towards my highest purpose today.",
    author: "so mot hyt be!"
  },

  {
    text: "Today, I choose freedom from my past habits and limitations.",
    author: "so mot hyt be!"
  },

  {
    text: "Infinite and exciting possibilities await me on this exact day.",
    author: "so mot hyt be!"
  },

  {
    text: "I will passionately endeavor towards my goals, dreams, and ambitions today.",
    author: "so mot hyt be!"
  },

  {
    text: "My day will be productive, inspiring, and rewarding.",
    author: "so mot hyt be!"
  },

  {
    text: "I have chosen to have an uplifting and optimistic mindset today.",
    author: "so mot hyt be!"
  },

  {
    text: "Today, I will live the way that I passionately dream of living.",
    author: "so mot hyt be!"
  },

  {
    text: "I am always expecting wonderful and gratifying outcomes.",
    author: "so mot hyt be!"
  },

  {
    text: "I am full of hope and always expecting life to work for me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am optimistic about my excitingly dynamic future.",
    author: "so mot hyt be!"
  },

  {
    text: "I am so energized and so ready for endless enjoyment.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a creator of endless wonderful ideas!",
    author: "so mot hyt be!"
  },

  {
    text: "I am brilliantly delighted by my beautiful life!",
    author: "so mot hyt be!"
  },

  {
    text: "I am deserving of phenomenal bliss and happiness.",
    author: "so mot hyt be!"
  },

  {
    text: "I am creating a meaningful and prosperous life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am enjoying my life to my fullest and most energetic potential.",
    author: "so mot hyt be!"
  },

  {
    text: "I am an uplifter and a beacon of hope for the world.",
    author: "so mot hyt be!"
  },

  {
    text: "My choice to think positive thoughts has healed my mind and heart.",
    author: "so mot hyt be!"
  },

  {
    text: "My past is over. I choose to be joyous and alive today.",
    author: "so mot hyt be!"
  },

  {
    text: "I am thriving and doing great things for this beautiful world.",
    author: "so mot hyt be!"
  },

  {
    text: "People cherish me and love having me around because I bring joy.",
    author: "so mot hyt be!"
  },

  {
    text: "I speak loving words of kindness to myself and others.",
    author: "so mot hyt be!"
  },

  {
    text: "I cherish life, and I treasure and appreciate myself.",
    author: "so mot hyt be!"
  },

  {
    text: "Feelings of empowerment and self-esteem flow through me.",
    author: "so mot hyt be!"
  },

  {
    text: "It is safe for me to explore and enjoy the world.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to feel loved, important, respected, and beautiful.",
    author: "so mot hyt be!"
  },

  {
    text: "My mind is healing, and I am learning to enjoy life again.",
    author: "so mot hyt be!"
  },

  {
    text: "I am so grateful for my shoes, even when they are squeaky.",
    author: "so mot hyt be!"
  },

  {
    text: "There are lots of things to be happy about, especially chocolate and pizza.",
    author: "so mot hyt be!"
  },

  {
    text: "I am always comfortable. I could peacefully sleep on a bed of broken glass.",
    author: "so mot hyt be!"
  },

  {
    text: "I am always optimistic about everything, even about volcanic eruptions!",
    author: "so mot hyt be!"
  },

  {
    text: "I am so sexy, even when I forget to shave one of my legs.",
    author: "so mot hyt be!"
  },

  {
    text: "My future will benefit from my time spent learning and studying.",
    author: "so mot hyt be!"
  },

  {
    text: "I easily balance my life as a dedicated student with my leisurely time.",
    author: "so mot hyt be!"
  },

  {
    text: "I am honored to be considered an intelligent, gifted, and bright student.",
    author: "so mot hyt be!"
  },

  {
    text: "I fully allow and accept my friends to be who they are without judgment.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve to be surrounded by generous and loving friends.",
    author: "so mot hyt be!"
  },

  {
    text: "I can be a giving, rejoiceful, and compassionate friend.",
    author: "so mot hyt be!"
  },

  {
    text: "I cherish my close friendships with gratitude, love, and appreciation.",
    author: "so mot hyt be!"
  },

  {
    text: "I have the most exhilarating adventures with my adventurous friends.",
    author: "so mot hyt be!"
  },

  {
    text: "I support my friends with loving thoughts and caring words.",
    author: "so mot hyt be!"
  },

  {
    text: "I am allowed to be relaxed, comfortable, and peaceful at work.",
    author: "so mot hyt be!"
  },

  {
    text: "My satisfying work allows me to experience wealth, luxury, and prosperity.",
    author: "so mot hyt be!"
  },

  {
    text: "There is an opportunity for me to grow and learn at my job.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful to receive excellent benefits and good pay at work.",
    author: "so mot hyt be!"
  },

  {
    text: "I am passionate about my career because I chose a satisfying life path.",
    author: "so mot hyt be!"
  },

  {
    text: "I feel energized, empowered, and motivated by the inspirational work I do.",
    author: "so mot hyt be!"
  },

  {
    text: "I quickly and effortlessly balance my time at work and my leisurely time.",
    author: "so mot hyt be!"
  },

  {
    text: "My coworkers are pleasant people, and I do enjoy being around them.",
    author: "so mot hyt be!"
  },

  {
    text: "I feel important because the work that I do is essential influential.",
    author: "so mot hyt be!"
  },

  {
    text: "My work is deeply fulfilling and beneficial to the world.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day I choose to take care of my fundamental needs and desires.",
    author: "so mot hyt be!"
  },

  {
    text: "I appreciate and love everyone because I know judgment is futile.",
    author: "so mot hyt be!"
  },

  {
    text: "My intuition is always there to guide my present moment safely.",
    author: "so mot hyt be!"
  },

  {
    text: "All the approval and praise I need comes from within myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I would love to learn something new about myself every day.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day I become calmer and do more good for the world.",
    author: "so mot hyt be!"
  },

  {
    text: "I experience ease and flow as I navigate my exhilarating life.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day I am devoted to my passions and dreams.",
    author: "so mot hyt be!"
  },

  {
    text: "I live in a loving, nurturing, safe, and beautiful world.",
    author: "so mot hyt be!"
  },

  {
    text: "I have committed to being my most outstanding self.",
    author: "so mot hyt be!"
  },

  {
    text: "I have peace of mind in every situation, and my heart beats calmly.",
    author: "so mot hyt be!"
  },

  {
    text: "I have the solid mental faculties to remain calm no matter what.",
    author: "so mot hyt be!"
  },

  {
    text: "My thoughts flow easily, my mind and body are relaxed.",
    author: "so mot hyt be!"
  },

  {
    text: "My thoughts flow easily, my mind and body are relaxed.",
    author: "so mot hyt be!"
  },

  {
    text: "Most of the time, I feel carefree, tranquil, and content.",
    author: "so mot hyt be!"
  },

  {
    text: "There is nothing serious going on. I am safe and confident.",
    author: "so mot hyt be!"
  },

  {
    text: "The friends I choose want me to feel comfortable, confident, and relaxed.",
    author: "so mot hyt be!"
  },

  {
    text: "I trust myself to choose safe and comfortable situations and places.",
    author: "so mot hyt be!"
  },

  {
    text: "I feel safe, protected, and secure in my everyday life.",
    author: "so mot hyt be!"
  },

  {
    text: "My mind is tranquil when I take relaxingly deep and slow breaths.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve love, laughter, freedom, and to feel amazing!",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy of all the tremendous joys that life has to offer.",
    author: "so mot hyt be!"
  },

  {
    text: "Thanks for all the beautiful things I have done to make me happy.",
    author: "so mot hyt be!"
  },

  {
    text: "My positivity allows me to have a clarifying view of life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am amazing!",
    author: "so mot hyt be!"
  },

  {
    text: "I am a unique kid with great ideas.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a good person with lots to offer.",
    author: "so mot hyt be!"
  },

  {
    text: "I am making good choices every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am okay with failure and learn from my mistakes.",
    author: "so mot hyt be!"
  },

  {
    text: "I am smart and determined.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a loyal friend with a kind heart.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy with who I am and how I look.",
    author: "so mot hyt be!"
  },

  {
    text: "I am loved.",
    author: "so mot hyt be!"
  },

  {
    text: "I am safe and secure.",
    author: "so mot hyt be!"
  },

  {
    text: "I am gloriously healthy in body, mind, and spirit.",
    author: "so mot hyt be!"
  },

  {
    text: "I am rested, relaxed, and free of stress.",
    author: "so mot hyt be!"
  },

  {
    text: "I am choosing positive thoughts that promote physical health and well-being.",
    author: "so mot hyt be!"
  },

  {
    text: "I am fit, thriving, and feeling healthier every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am discovering easy ways to exercise and boost my energy level.",
    author: "so mot hyt be!"
  },

  {
    text: "I am free to choose, and today I choose what's best for my health.",
    author: "so mot hyt be!"
  },

  {
    text: "I am taking time for the self-care I need to be able to nurture others.",
    author: "so mot hyt be!"
  },

  {
    text: "I am motivated to help my body become the best it can be.",
    author: "so mot hyt be!"
  },

  {
    text: "I am more and more in tune with the needs of my physical self.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my body and appreciate how it serves me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am living my dream relationship with my wonderful new partner.",
    author: "so mot hyt be!"
  },

  {
    text: "I am giving and receiving an abundance of love and affection.",
    author: "so mot hyt be!"
  },

  {
    text: "I am blessed with a relationship based on mutual acceptance, respect, and love.",
    author: "so mot hyt be!"
  },

  {
    text: "I am enjoying a new relationship filled with fun, laughter, and happiness.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for past experiences that help me define my ideal partner.",
    author: "so mot hyt be!"
  },

  {
    text: "I am open to the adventure of an exciting new romance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am attracting only healthy relationships into my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am feeling joyful about finding my perfect mate and falling in love.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a loving, giving person and open to a loving, giving partner.",
    author: "so mot hyt be!"
  },

  {
    text: "I am becoming the best that I can be as I create a leaner, healthier body.",
    author: "so mot hyt be!"
  },

  {
    text: "I am feeling a lot less stress and a lot more energetic.",
    author: "so mot hyt be!"
  },

  {
    text: "I am setting a great example for my family and friends.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for everyone who supports and encourages me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am beginning to see a slimmer me in the mirror.",
    author: "so mot hyt be!"
  },

  {
    text: "I am amazed to discover that exercise can be fun.",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of my efforts to take better care of my body.",
    author: "so mot hyt be!"
  },

  {
    text: "I am enjoying foods that are healthy and taste great too!",
    author: "so mot hyt be!"
  },

  {
    text: "I am honoring my body by making better choices.",
    author: "so mot hyt be!"
  },

  {
    text: "I am letting go of old habits that no longer serve me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am enjoying the career of my dreams and creating lucrative opportunities for others.",
    author: "so mot hyt be!"
  },

  {
    text: "I am always open to exploring new ideas and possibilities.",
    author: "so mot hyt be!"
  },

  {
    text: "I am good at making smart decisions to solve problems quickly.",
    author: "so mot hyt be!"
  },

  {
    text: "I am calm under pressure and always keep matters in perspective.",
    author: "so mot hyt be!"
  },

  {
    text: "I am working with team players who support and encourage each other.",
    author: "so mot hyt be!"
  },

  {
    text: "I am respectful of my colleagues and have earned their respect.",
    author: "so mot hyt be!"
  },

  {
    text: "I am clear about my goals and focused on making daily progress.",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident in my ability to succeed in my work and my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am intelligent, skilled, and blessed with unique talents.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my current job and all it has taught me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am getting closer and closer to the lifestyle of my dreams.",
    author: "so mot hyt be!"
  },

  {
    text: "I am prosperous in all that I do.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a money magnet.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my ever increasing prosperity.",
    author: "so mot hyt be!"
  },

  {
    text: "I am creating new wealth for myself and my world.",
    author: "so mot hyt be!"
  },

  {
    text: "I am feeling excited about achieving financial freedom.",
    author: "so mot hyt be!"
  },

  {
    text: "I am always seeing new opportunities to grow and prosper.",
    author: "so mot hyt be!"
  },

  {
    text: "I am welcoming a steady flow of abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am looking forward to all the benefits of having more money.",
    author: "so mot hyt be!"
  },

  {
    text: "I am free of limiting beliefs about money.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for where I am in life as I look forward to where I'm going.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for precious memories that still warm my heart.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for all the good in my life and ever mindful of my blessings.",
    author: "so mot hyt be!"
  },

  {
    text: "I am passionate about expressing gratitude to share my joy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the opportunity to change the world by changing me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for struggles that have made me a stronger, better person.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for loving relationships with my family and friends.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my ability to always find the good in people.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my optimism and positive outlook.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the gift of being alive today.",
    author: "so mot hyt be!"
  },

  {
    text: "I am successful.",
    author: "so mot hyt be!"
  },

  {
    text: "I am creating a lifestyle that I love.",
    author: "so mot hyt be!"
  },

  {
    text: "I am enjoying challenges that lead to even greater success.",
    author: "so mot hyt be!"
  },

  {
    text: "I am discovering all the ideas and solutions I need.",
    author: "so mot hyt be!"
  },

  {
    text: "I am inspired, motivated, and determined to succeed.",
    author: "so mot hyt be!"
  },

  {
    text: "I am accomplishing more and more every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am meeting new mentors that help me learn and grow.",
    author: "so mot hyt be!"
  },

  {
    text: "I am surrounded by an abundance of opportunities.",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy of overwhelming success.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a unique individual with unlimited potential.",
    author: "so mot hyt be!"
  },

  {
    text: "I am living my dream.",
    author: "so mot hyt be!"
  },

  {
    text: "I am welcoming more and more happy people into my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am truly happy in this present moment.",
    author: "so mot hyt be!"
  },

  {
    text: "I am finding more reasons to be happy every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am blessed in every way.",
    author: "so mot hyt be!"
  },

  {
    text: "I am fulfilled.",
    author: "so mot hyt be!"
  },

  {
    text: "I am joyful every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am joyful every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful to be where I am.",
    author: "so mot hyt be!"
  },

  {
    text: "I am always positive.",
    author: "so mot hyt be!"
  },

  {
    text: "I am peaceful and content.",
    author: "so mot hyt be!"
  },

  {
    text: "I am welcoming the serenity of being free of emotional burdens.",
    author: "so mot hyt be!"
  },

  {
    text: "I am releasing yesterday so that I can be fully present today.",
    author: "so mot hyt be!"
  },

  {
    text: "I am letting go of expectations and enjoying my journey.",
    author: "so mot hyt be!"
  },

  {
    text: "I am at peace with my past.",
    author: "so mot hyt be!"
  },

  {
    text: "I am free of resentment.",
    author: "so mot hyt be!"
  },

  {
    text: "I am embracing forgiveness and reclaiming my personal power.",
    author: "so mot hyt be!"
  },

  {
    text: "I am discovering the peace of release.",
    author: "so mot hyt be!"
  },

  {
    text: "I am focused on looking forward.",
    author: "so mot hyt be!"
  },

  {
    text: "I am releasing all attachment to past hurts.",
    author: "so mot hyt be!"
  },

  {
    text: "I am letting go more and more every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am unshakable in any storm.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a powerful force for positive change.",
    author: "so mot hyt be!"
  },

  {
    text: "I am sure of myself and stand up for my beliefs.",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident in my ability to achieve my goals.",
    author: "so mot hyt be!"
  },

  {
    text: "I am capable of thriving in any situation.",
    author: "so mot hyt be!"
  },

  {
    text: "I am always served well by my inner wisdom.",
    author: "so mot hyt be!"
  },

  {
    text: "I am learning to step out of my comfort zone.",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of all my accomplishments, big and small.",
    author: "so mot hyt be!"
  },

  {
    text: "I am at ease with both my strengths and weaknesses.",
    author: "so mot hyt be!"
  },

  {
    text: "I am releasing old limiting beliefs about myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a beautiful person inside and out.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a survivor and proud of my scars.",
    author: "so mot hyt be!"
  },

  {
    text: "I am comfortable declaring my own worth.",
    author: "so mot hyt be!"
  },

  {
    text: "I am walking in the truth of who I am.",
    author: "so mot hyt be!"
  },

  {
    text: "I am enjoying feeling better about myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am becoming a better me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am enough.",
    author: "so mot hyt be!"
  },

  {
    text: "I am safe and secure.",
    author: "so mot hyt be!"
  },
  {
    text: "I am loved.",
    author: "so mot hyt be!"
  },

  {
    text: "I am thankful for everything in my life!",
    author: "so mot hyt be!"
  },

  {
    text: "Gratitude is my default attitude.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my unwavering faith that everything always works out for the best in the end.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my success that is continually growing my wealth.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the unlimited abundance of the universe that is available to all.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for new ideas and opportunities that show up for me every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful that I always approach new situations with a positive attitude.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for challenges that open my mind to new possibilities.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for all my accomplishments that contribute to the success of everyone in my company.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful that I have a good mind that serves me so well in my career.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my coworkers who support and encourage me on the job.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for every teacher, coach, and mentor who has educated me and helped me grow.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the generous spirits of volunteers who work to make our little corner of the world a better place.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the leaders who serve my community with honesty and integrity.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my country and my freedom.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful to have a comfortable home in a good location with nice, friendly neighbors.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for ordinary days that get interrupted by pleasant surprises.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the pleasure of relaxed evenings with loved ones after hectic days at work.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the glorious sunrise, for the peaceful sunset, and for each precious moment in between.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the beauty of nature that calms my mind and soothes my soul.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my dreams that raise my awareness of my own potential and possibilities.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful that my life is my choice, and I always choose happiness.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for family and friends who believe in me even when I struggle to believe in myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my ability to find a little joy even in difficult times.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful to be blessed in ways that enable me to be a blessing to others.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for all the loving-kindness, acceptance, and understanding that I receive in abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the peacefulness I experience as I let go of past hurts and resentment.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful that my heart is open to receiving universal love.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my keen awareness of all that is good in the world.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the simple joys and pleasures that I experience every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the inner calm that is always available to me, anywhere, any time.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for cherished memories of departed loved ones who live on in my heart.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for each and every one of the loving relationships in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for each and every one of the loving relationships in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my healthy body and all the ways it serves and supports me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful to be alive to enjoy this day.",
    author: "so mot hyt be!"
  },

  {
    text: "I have a sharp mind that makes me a very good student.",
    author: "so mot hyt be!"
  },

  {
    text: "I am free to make my own choices.",
    author: "so mot hyt be!"
  },

  {
    text: "I strive to do my best every day.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in my goals and dreams.",
    author: "so mot hyt be!"
  },

  {
    text: "I am kind and courteous to all people.",
    author: "so mot hyt be!"
  },

  {
    text: "My mistakes help me learn and grow.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a gifted student, and I can achieve anything.",
    author: "so mot hyt be!"
  },

  {
    text: "I get better every single day.",
    author: "so mot hyt be!"
  },

  {
    text: "I feel thankful to be a student and it shows.",
    author: "so mot hyt be!"
  },

  {
    text: "There is no one better to be than myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I grow towards my interests, like a plant reaching for the sun.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in the good things coming.",
    author: "so mot hyt be!"
  },

  {
    text: "I am responsible for myself, and I start there.",
    author: "so mot hyt be!"
  },

  {
    text: "I am choosing and not waiting to be chosen.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in charge of how I feel and I choose to feel happy.",
    author: "so mot hyt be!"
  },

  {
    text: "I am in charge of my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am allowed to ask for what I want and what I need.",
    author: "so mot hyt be!"
  },

  {
    text: "I can. I will. End of story.",
    author: "so mot hyt be!"
  },

  {
    text: "I affirm and encourage others, as I do myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy of what I desire.",
    author: "so mot hyt be!"
  },

  {
    text: "I have created the perfect business for myself and my pay is overwhelming.",
    author: "so mot hyt be!"
  },

  {
    text: "The type of work I do is miraculously in complete demand.",
    author: "so mot hyt be!"
  },

  {
    text: "I know my calling and the work I am supposed to do in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day I wake up and go to the best job in the world.",
    author: "so mot hyt be!"
  },

  {
    text: "My employer recognizes my hard work and gives me a huge raise.",
    author: "so mot hyt be!"
  },

  {
    text: "Success flows easily into my open arms.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a magnet for success.",
    author: "so mot hyt be!"
  },

  {
    text: "I love and enjoy my work and I receive the perfect pay.",
    author: "so mot hyt be!"
  },

  {
    text: "I am acknowledged for all my good efforts at work.",
    author: "so mot hyt be!"
  },

  {
    text: "I am respected by everyone in my work environment.",
    author: "so mot hyt be!"
  },

  {
    text: "I have wealth in every area of my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I have more than enough money to pay my bills.",
    author: "so mot hyt be!"
  },

  {
    text: "I create money easily and effortlessly.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in my unlimited prosperity.",
    author: "so mot hyt be!"
  },

  {
    text: "I am wealthier each day.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the riches in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am financially free.",
    author: "so mot hyt be!"
  },

  {
    text: "I am connected to the abundance of the universe.",
    author: "so mot hyt be!"
  },

  {
    text: "Abundance flows through my open arms.",
    author: "so mot hyt be!"
  },

  {
    text: "I am abundant.",
    author: "so mot hyt be!"
  },

  {
    text: "I am free of diabetes, free of blood pressure problems, free of cancerous cells, and free of all life-threatening diseases.",
    author: "so mot hyt be!"
  },

  {
    text: "I breathe deeply, exercise regularly and feed only good nutritious food to my body.",
    author: "so mot hyt be!"
  },

  {
    text: "I treat my body as a temple. It is holy, it is clean, and it is full of goodness.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day is a new day full of hope, happiness, and health.",
    author: "so mot hyt be!"
  },

  {
    text: "I always feel good. As a result, my body feels good and I radiate good feelings.",
    author: "so mot hyt be!"
  },

  {
    text: "I think only positive thoughts and am always happy and joyous, no matter what the external conditions are.",
    author: "so mot hyt be!"
  },

  {
    text: "I am full of energy and vitality and my mind is calm and peaceful.",
    author: "so mot hyt be!"
  },

  {
    text: "Every cell in my body is health conscious.",
    author: "so mot hyt be!"
  },

  {
    text: "I love myself and I am perfectly healthy.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day, in every way, I am getting healthier and healthier and feeling better and better.",
    author: "so mot hyt be!"
  },

  {
    text: "I love and accept myself just as I am.",
    author: "so mot hyt be!"
  },

  {
    text: "I am always growing and developing.",
    author: "so mot hyt be!"
  },

  {
    text: "I love who I am. I love who I have become.",
    author: "so mot hyt be!"
  },

  {
    text: "I let go of negative thoughts and feelings about myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I surround myself with people who bring out the best in me, and I see the best in others.",
    author: "so mot hyt be!"
  },

  {
    text: "I recognize the many good qualities I have.",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am competent, smart, and able.",
    author: "so mot hyt be!"
  },

  {
    text: "I love and approve of myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am too big a gift to this world to feel self-pity and sadness.",
    author: "so mot hyt be!"
  },

  {
    text: "I forgive myself completely.",
    author: "so mot hyt be!"
  },

  {
    text: "I have the freedom and power to create the life I desire.",
    author: "so mot hyt be!"
  },

  {
    text: "I am now clearing my negative beliefs.",
    author: "so mot hyt be!"
  },

  {
    text: "I trust my body, I trust myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I choose life. I choose happiness.",
    author: "so mot hyt be!"
  },

  {
    text: "My dreams can come true.",
    author: "so mot hyt be!"
  },

  {
    text: "I can reward myself for trying new things.",
    author: "so mot hyt be!"
  },

  {
    text: "It is safe for me to be vulnerable.",
    author: "so mot hyt be!"
  },

  {
    text: "It is healthier to express myself clearly and directly.",
    author: "so mot hyt be!"
  },

  {
    text: "I accept and experience all my feelings.",
    author: "so mot hyt be!"
  },

  {
    text: "I am forgiving, loving, gentle, and kind, and I know that life loves me.",
    author: "so mot hyt be!"
  },

  {
    text: "I know that old, negative patterns no longer limit me. I let them go with ease.",
    author: "so mot hyt be!"
  },

  {
    text: "Each day is a new opportunity. Yesterday is over and done.",
    author: "so mot hyt be!"
  },

  {
    text: "I move beyond forgiveness to understanding, and I have compassion for all.",
    author: "so mot hyt be!"
  },

  {
    text: "I am ready to be healed. I am willing to forgive. All is well.",
    author: "so mot hyt be!"
  },

  {
    text: "There is no problem so big or small that it cannot be solved with love.",
    author: "so mot hyt be!"
  },

  {
    text: "I give myself the gift of freedom from the past and move with joy into the now.",
    author: "so mot hyt be!"
  },

  {
    text: "The past is over, so it has no power now. The thoughts of THIS moment create my future.",
    author: "so mot hyt be!"
  },

  {
    text: "The door to my heart opens inward. I move through forgiveness to love.",
    author: "so mot hyt be!"
  },

  {
    text: "I release all ill feelings in me about people, incidents and anything else. I forgive everyone associated with me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for the people in my life.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for all the positive things that are coming my way.",
    author: "so mot hyt be!"
  },

  {
    text: "I am thankful for what I have.",
    author: "so mot hyt be!"
  },

  {
    text: "I am thankful for simply being alive.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for my family, my friends, and my relationships.",
    author: "so mot hyt be!"
  },

  {
    text: "I take time to be grateful for all the small things, such as the blue sky or the sound of laughter.",
    author: "so mot hyt be!"
  },

  {
    text: "I am sincerely grateful, and this attracts positivity into my life.",
    author: "so mot hyt be!"
  },

  {
    text: "My thoughts are focused on positivity and thankfulness.",
    author: "so mot hyt be!"
  },

  {
    text: "I have an attitude of gratitude.",
    author: "so mot hyt be!"
  },

  {
    text: "I am grateful for all that I am, for all that I have, and for all that I experience.",
    author: "so mot hyt be!"
  },

  {
    text: "I radiate love and happiness to my family.",
    author: "so mot hyt be!"
  },

  {
    text: "I encourage my family to achieve their dreams.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a source of love and inspiration for my family.",
    author: "so mot hyt be!"
  },

  {
    text: "My family is healthy and vibrant.",
    author: "so mot hyt be!"
  },

  {
    text: "We are a well-balanced family.",
    author: "so mot hyt be!"
  },

  {
    text: "My family cooperates with each other.",
    author: "so mot hyt be!"
  },

  {
    text: "I communicate well with my family.",
    author: "so mot hyt be!"
  },

  {
    text: "I am the family member I want to be.",
    author: "so mot hyt be!"
  },

  {
    text: "I am generous with time, patience, and love to my family.",
    author: "so mot hyt be!"
  },

  {
    text: "I am positive and loyal.",
    author: "so mot hyt be!"
  },

  {
    text: "I am dependable.",
    author: "so mot hyt be!"
  },

  {
    text: "I am the friend I would want for myself.",
    author: "so mot hyt be!"
  },

  {
    text: "I am a compassionate, forgiving friend.",
    author: "so mot hyt be!"
  },

  {
    text: "I always stay in contact with my friends.",
    author: "so mot hyt be!"
  },

  {
    text: "My relationships are loving and harmonious.",
    author: "so mot hyt be!"
  },

  {
    text: "I am available for my friends and family.",
    author: "so mot hyt be!"
  },

  {
    text: "My friends empower me.",
    author: "so mot hyt be!"
  },

  {
    text: "I cherish my friendships.",
    author: "so mot hyt be!"
  },

  {
    text: "I get the help I need, when I need it, from various sources. My support system is strong and loving.",
    author: "so mot hyt be!"
  },

  {
    text: "I am blessed with a beautiful family.",
    author: "so mot hyt be!"
  },

  {
    text: "I freely express the love I feel to those I love, and they return my gesture.",
    author: "so mot hyt be!"
  },

  {
    text: "I attract love in everything I do.",
    author: "so mot hyt be!"
  },

  {
    text: "I love myself and because of that everyone loves me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am surrounded by love every day of my life.",
    author: "so mot hyt be!"
  },

  {
    text: "Everywhere I go, I find love. Life is joyous.",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve love and I get it in abundance.",
    author: "so mot hyt be!"
  },

  {
    text: "I see everything with loving eyes, and I love everything I see.",
    author: "so mot hyt be!"
  },

  {
    text: "All my relationships are long-lasting and loving.",
    author: "so mot hyt be!"
  },

  {
    text: "My heart is always open, and I radiate love.",
    author: "so mot hyt be!"
  },

  {
    text: "I am surrounded by love and everything is fine.",
    author: "so mot hyt be!"
  },

  {
    text: "I'm good enough, I'm smart enough and dog gone it, people like me.",
    author: "so mot hyt be!"
  },
  {
    text: "I'm good enough, I'm smart enough and , people like me.",
    author: "so mot hyt be!"
  },

  {
    text: "Every day in every way I am getting better and better!",
    author: "so mot hyt be!"
  },

  {
    text: "I admire and respect my partner.",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy I am part of this family.",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy activities and celebrations with my family.",
    author: "so mot hyt be!"
  },
  {
    text: "I enjoy activities and celebrations with my family.",
    author: "so mot hyt be!"
  },

  {
    text: "My family provides the love and care need",
    author: "so mot hyt be!"
  },

  {
    text: "I show my family how much I love them in every way possible - both verbal and non-verbal",
    author: "so mot hyt be!"
  },

  {
    text: "I love my parents, my siblings, extended family unconditionally",
    author: "so mot hyt be!"
  },

  {
    text: "I love my family even though they sometimes do not understand me",
    author: "so mot hyt be!"
  },

  {
    text: "I feel happy and content in this moment right now",
    author: "so mot hyt be!"
  },

  {
    text: "I embrace happiness as my way of lookking at the world",
    author: "so mot hyt be!"
  },

  {
    text: "I embrace happiness as my way of lookking at the world",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy as I pursue my daily tasks",
    author: "so mot hyt be!"
  },

  {
    text: "As I look at the world around joy and smile me, I feel",
    author: "so mot hyt be!"
  },

  {
    text: "I love to laugh and find humor in everyday situations",
    author: "so mot hyt be!"
  },

  {
    text: "I have inner happiness that I can tap anytime want to",
    author: "so mot hyt be!"
  },

  {
    text: "I wake up in the morning feeling about my life into happy",
    author: "so mot hyt be!"
  },

  {
    text: "My happiness inspires those around me to be happy",
    author: "so mot hyt be!"
  },

  {
    text: "Things are getting better every day",
    author: "so mot hyt be!"
  },

  {
    text: "I am important to others - my family and my friends",
    author: "so mot hyt be!"
  },

  {
    text: "I feel the love of both those who are close to me and those not physically around me",
    author: "so mot hyt be!"
  },

  {
    text: "I love, like, and approve of myself h",
    author: "so mot hyt be!"
  },

  {
    text: "Wealth is pouring into my life",
    author: "so mot hyt be!"
  },

  {
    text: "My possibilities are endless",
    author: "so mot hyt be!"
  },

  {
    text: "I possess an endless supply of creativity, project that energy and tolerance for any I assume",
    author: "so mot hyt be!"
  },

  {
    text: "I gratefully accept all the health, wealth and happiness that the universe pours into me every day.",
    author: "so mot hyt be!"
  },

  {
    text: "The riches of the universe come to me effortlessly",
    author: "so mot hyt be!"
  },

  {
    text: "I am a money magnet!",
    author: "so mot hyt be!"
  },

  {
    text: "I deserve love, success and happiness",
    author: "so mot hyt be!"
  },

  {
    text: "I have abundant energy, vitality and well-being.",
    author: "so mot hyt be!"
  },

  {
    text: "I have abundant energy, vitality and well-being.",
    author: "so mot hyt be!"
  },

  {
    text: "I have everything I need right now to accomplish everything I want.",
    author: "so mot hyt be!"
  },

  {
    text: "I am getting wealthier each day",
    author: "so mot hyt be!"
  },

  {
    text: "I am a lucky, happy, healthy and successful person",
    author: "so mot hyt be!"
  },

  {
    text: "Love, health and wealth flows abundantly into my life",
    author: "so mot hyt be!"
  },

  {
    text: "The Universe supports my every effort",
    author: "so mot hyt be!"
  },

  {
    text: "I possess an abundance of creativity and energy",
    author: "so mot hyt be!"
  },

  {
    text: "At every turn, opportunity appears before me",
    author: "so mot hyt be!"
  },

  {
    text: "I am thankful for the limitless, overflowing source of my abundance",
    author: "so mot hyt be!"
  },

  {
    text: "Everything touch returns riches to me",
    author: "so mot hyt be!"
  },

  {
    text: "I am easily, openly and freely accepting abundance, now!",
    author: "so mot hyt be!"
  },

  {
    text: "My income is constantly increasing",
    author: "so mot hyt be!"
  },

  {
    text: "I have more than enough money to fulfill all of my needs and desires",
    author: "so mot hyt be!"
  },

  {
    text: "Everything is good right now",
    author: "so mot hyt be!"
  },

  {
    text: "I accept and embrace all of life's experiences even the unpleasant ones",
    author: "so mot hyt be!"
  },

  {
    text: "I am completely in control of my thoughts",
    author: "so mot hyt be!"
  },

  {
    text: "I easily return to the present moment and what is happening to me.",
    author: "so mot hyt be!"
  },

  {
    text: "I am participating in the experience of the moment",
    author: "so mot hyt be!"
  },

  {
    text: "I find joy in the moment",
    author: "so mot hyt be!"
  },

  {
    text: "I remain engaged and focused on the present moment",
    author: "so mot hyt be!"
  },

  {
    text: "I am an excellent employee, always productive and giving my best effort",
    author: "so mot hyt be!"
  },

  {
    text: "I am experiencing success in my career",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy working toward future career success",
    author: "so mot hyt be!"
  },

  {
    text: "I have a satisfying job",
    author: "so mot hyt be!"
  },

  {
    text: "I know exactly what I need to do to achieve success in my career",
    author: "so mot hyt be!"
  },

  {
    text: "My work environment is calm and productive",
    author: "so mot hyt be!"
  },

  {
    text: "The job I have is perfect for me",
    author: "so mot hyt be!"
  },

  {
    text: "Every day I become more successful",
    author: "so mot hyt be!"
  },

  {
    text: "I am successful in my daily life",
    author: "so mot hyt be!"
  },

  {
    text: "I feel powerful and full of energy, capable and confident",
    author: "so mot hyt be!"
  },

  {
    text: "I learn from my mistakes and they become stepping stones to my success",
    author: "so mot hyt be!"
  },

  {
    text: "I love challenges, easily find solutions to problems, and move past roadblocks quickly",
    author: "so mot hyt be!"
  },

  {
    text: "Even though disagree with some of my friends activities and choices, I still care about them",
    author: "so mot hyt be!"
  },

  {
    text: "I am the best friend anyone can be, because I am loyal, loving, and understanding",
    author: "so mot hyt be!"
  },

  {
    text: "I choose friends who love me for who I am and approve of me",
    author: "so mot hyt be!"
  },

  {
    text: "I take time to show my friends that I care about them and their interests",
    author: "so mot hyt be!"
  },

  {
    text: "My friends do not judge me and I do not judge them",
    author: "so mot hyt be!"
  },

  {
    text: "I communicate openly with my spouse and resolve conflicts with respect",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy the time I spend with my spouse and we have fun together",
    author: "so mot hyt be!"
  },

  {
    text: "I have loving relationship with my spouse",
    author: "so mot hyt be!"
  },

  {
    text: "I love my partner exactly as they are, enjoying their unique qualities",
    author: "so mot hyt be!"
  },

  {
    text: "I share emotional intimacy with my partner",
    author: "so mot hyt be!"
  },

  {
    text: "I want the best for my spouse and go out my way to support them in their perrsonal and professional life",
    author: "so mot hyt be!"
  },

  {
    text: "All my body systems function pertectly",
    author: "so mot hyt be!"
  },

  {
    text: "Every part of my body is healthy and full of energy",
    author: "so mot hyt be!"
  },

  {
    text: "I can stay healthy because my immune system is very strong",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy strengthening my body with exercise. Exercise regularly, breathe deeply, and feed my body only nutritious food",
    author: "so mot hyt be!"
  },

  {
    text: "I feel better and better every day as my body heals",
    author: "so mot hyt be!"
  },

  {
    text: "I pay attention and listen to what my body tells me it needs to be healthy and vital",
    author: "so mot hyt be!"
  },

  {
    text: "I sleep soundly each night, awaking rested and full of energy",
    author: "so mot hyt be!"
  },

  {
    text: "I surround myself with people who encourage me to make healthy choices",
    author: "so mot hyt be!"
  },

  {
    text: "My body is full of energy and pain free",
    author: "so mot hyt be!"
  },

  {
    text: "My body stays nourished with healthy food",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident, enthusiastic, and energetic",
    author: "so mot hyt be!"
  },

  {
    text: "My personality shows am confident",
    author: "so mot hyt be!"
  },

  {
    text: "I attract confident people",
    author: "so mot hyt be!"
  },

  {
    text: "I breath in and out, exhaling hesitancy and inhaling confidence",
    author: "so mot hyt be!"
  },

  {
    text: "I love change, easily adjusting to new people and situation",
    author: "so mot hyt be!"
  },

  {
    text: "I love meeting strangers and approach them with boldness and enthusiasm",
    author: "so mot hyt be!"
  },

  {
    text: "I thrive on self-confidence, knowing that nothing¬†is impossible",
    author: "so mot hyt be!"
  },

  {
    text: "I am outgoing and make friends easily",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident of my future",
    author: "so mot hyt be!"
  },

  {
    text: "I am a loving person, seeing to the needs of those I love",
    author: "so mot hyt be!"
  },

  {
    text: "I am a loving person , successfully creating a loving home environment",
    author: "so mot hyt be!"
  },

  {
    text: "I am a wonderful person and my friends love and respect me",
    author: "so mot hyt be!"
  },

  {
    text: "I am beautiful, happy, and healthy",
    author: "so mot hyt be!"
  },

  {
    text: "I am capable and kind, constantly learning new things and developing my personality",
    author: "so mot hyt be!"
  },

  {
    text: "I am happy to be a respected person",
    author: "so mot hyt be!"
  },

  {
    text: "I am loving, giving and receiving love unconditionally",
    author: "so mot hyt be!"
  },

  {
    text: "I am successful in my chosen career",
    author: "so mot hyt be!"
  },

  {
    text: "I see to the needs of my household with pride and capability",
    author: "so mot hyt be!"
  },

  {
    text: "I know my wisdom and experiences guide me to the right decision",
    author: "so mot hyt be!"
  },

  {
    text: "I look at my options objectively and then make the best decision for me",
    author: "so mot hyt be!"
  },

  {
    text: "I make the right decision always",
    author: "so mot hyt be!"
  },

  {
    text: "I receive all advice and feedback with grateful kindness, but make the final decision myself",
    author: "so mot hyt be!"
  },

  {
    text: "I trust myself to make the best decisions",
    author: "so mot hyt be!"
  },

  {
    text: "I accept full responsibility for any angry words or actions that have hurt anyone",
    author: "so mot hyt be!"
  },

  {
    text: "I apologize to those I have hurt with my anger",
    author: "so mot hyt be!"
  },

  {
    text: "I let of as go my anger as quickly possible so I can see clearly and understand others",
    author: "so mot hyt be!"
  },

  {
    text: "I release my anger with laughter and deep breathing",
    author: "so mot hyt be!"
  },

  {
    text: "I replace my anger with compassion and understanding",
    author: "so mot hyt be!"
  },

  {
    text: "I am a unique individual, with many special talents and abilities",
    author: "so mot hyt be!"
  },

  {
    text: "I am attractive, healthy, and confident",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of myself and the things I have accomplished",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy of great things in my life",
    author: "so mot hyt be!"
  },

  {
    text: "I like myself just the way I am",
    author: "so mot hyt be!"
  },

  {
    text: "My self-esteem and confidence increases each day",
    author: "so mot hyt be!"
  },

  {
    text: "I am loved by others as much as I love them",
    author: "so mot hyt be!"
  },

  {
    text: "I am overwhelmed by feeling of love for my life and everyone in it",
    author: "so mot hyt be!"
  },

  {
    text: "I am surrounded by love",
    author: "so mot hyt be!"
  },

  {
    text: "I great each moment of each day with love",
    author: "so mot hyt be!"
  },

  {
    text: "I radiate love and happiness",
    author: "so mot hyt be!"
  },

  {
    text: "All of my thoughts and feelings are under control",
    author: "so mot hyt be!"
  },

  {
    text: "I awake each day with excitement, awaiting the good things coming to me",
    author: "so mot hyt be!"
  },

  {
    text: "I breathe in and out, releasing all stress from my body",
    author: "so mot hyt be!"
  },

  {
    text: "I forgive myself for mistakes and bad decisions I have made",
    author: "so mot hyt be!"
  },

  {
    text: "I observe my emotions without overreacting",
    author: "so mot hyt be!"
  },

  {
    text: "I meditate with joy resistance or anxiety and without",
    author: "so mot hyt be!"
  },

  {
    text: "I reject the idea that I am a prisoner of my emotions and past actions",
    author: "so mot hyt be!"
  },

  {
    text: "Even when chaos is around me, l remain calm and at peace",
    author: "so mot hyt be!"
  },

  {
    text: "Everything is well in my world; I am calm, relaxed, content, and happy",
    author: "so mot hyt be!"
  },

  {
    text: "I am free of anxiety, and inner calm controls my body and mind",
    author: "so mot hyt be!"
  },

  {
    text: "I breathe out stress and breathe in relaxation",
    author: "so mot hyt be!"
  },

  {
    text: "I release past experiences and live completely in the present moment",
    author: "so mot hyt be!"
  },

  {
    text: "I rest completely when sleep, knowing everything is well",
    author: "so mot hyt be!"
  },

  {
    text: "I slowly breathe in and out, relaxing and grounding myself",
    author: "so mot hyt be!"
  },

  {
    text: "This situation is working out for my greatest good",
    author: "so mot hyt be!"
  },

  {
    text: "I am experiencing wealth every day",
    author: "so mot hyt be!"
  },

  {
    text: "I am financially successful in all my endeavors",
    author: "so mot hyt be!"
  },

  {
    text: "I am getting wealthier each day",
    author: "so mot hyt be!"
  },

  {
    text: "I am living the life of my dreams",
    author: "so mot hyt be!"
  },

  {
    text: "I have enough wealth to fulfill my desires",
    author: "so mot hyt be!"
  },

  {
    text: "I comprehend what I read quickly",
    author: "so mot hyt be!"
  },

  {
    text: "I enjoy participating in extracurricular activities",
    author: "so mot hyt be!"
  },

  {
    text: "I love learning new things and using them in my life",
    author: "so mot hyt be!"
  },

  {
    text: "I love my classes and my teachers",
    author: "so mot hyt be!"
  },

  {
    text: "I make excellent grades on quizzes and tests",
    author: "so mot hyt be!"
  },

  {
    text: "I study comprehensively for my classes",
    author: "so mot hyt be!"
  },

  {
    text: "I always attract the best and most interesting people",
    author: "so mot hyt be!"
  },

  {
    text: "I am a good friend",
    author: "so mot hyt be!"
  },

  {
    text: "I am a unique person that has a lot to offer a friendship",
    author: "so mot hyt be!"
  },

  {
    text: "I am confident and friendly",
    author: "so mot hyt be!"
  },

  {
    text: "I ask others to spend time with me",
    author: "so mot hyt be!"
  },

  {
    text: "I reach out to others realizing I can meet their needs",
    author: "so mot hyt be!"
  },

  {
    text: "I reach out to others realizing I can meet their needs",
    author: "so mot hyt be!"
  },

  {
    text: "I will be myself in my relationships and relax, knowing I am likable",
    author: "so mot hyt be!"
  },

  {
    text: "I will respond to those who come into life today with understanding and joy",
    author: "so mot hyt be!"
  },

  {
    text: "It is alright to feel lonely sometimes",
    author: "so mot hyt be!"
  },

  {
    text: "I release past anger, hurts, and loneliness, filling myself with joy",
    author: "so mot hyt be!"
  },

  {
    text: "I take pleasure in being alone",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to set a high standard for myself",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in myself even when no one else does",
    author: "so mot hyt be!"
  },

  {
    text: "I believe in myself even when no one else does",
    author: "so mot hyt be!"
  },

  {
    text: "I do my best to achieve a life balance",
    author: "so mot hyt be!"
  },

  {
    text: "I understand others and forgive them",
    author: "so mot hyt be!"
  },

  {
    text: "I love and want to change",
    author: "so mot hyt be!"
  },

  {
    text: "I am the best in the world at living my life",
    author: "so mot hyt be!"
  },

  {
    text: "I am the best of me the world has ever seen",
    author: "so mot hyt be!"
  },

  {
    text: "I can show leadership in whatever position I am in life",
    author: "so mot hyt be!"
  },

  {
    text: "I accept and seek to understand criticism because I need it to grow",
    author: "so mot hyt be!"
  },

  {
    text: "I'm willing to learn and grow",
    author: "so mot hyt be!"
  },

  {
    text: "I did my best with the information I had",
    author: "so mot hyt be!"
  },

  {
    text: "I accept my mistakes and I keep improving",
    author: "so mot hyt be!"
  },

  {
    text: "I am here for a purpose, to make a difference",
    author: "so mot hyt be!"
  },

  {
    text: "I love helping others in any way I can",
    author: "so mot hyt be!"
  },

  {
    text: "No one has my exact perspective so my opinions are important",
    author: "so mot hyt be!"
  },

  {
    text: "I have qualities that are helpful to others",
    author: "so mot hyt be!"
  },

  {
    text: "My existence is important",
    author: "so mot hyt be!"
  },

  {
    text: "I have my own purpose in this life",
    author: "so mot hyt be!"
  },

  {
    text: "I do my best and that's enough",
    author: "so mot hyt be!"
  },

  {
    text: "I am inspired by other people's success",
    author: "so mot hyt be!"
  },

  {
    text: "I base my confidence on what I think of myself",
    author: "so mot hyt be!"
  },

  {
    text: "I have my own standards of success and don't need to fulfill those of others",
    author: "so mot hyt be!"
  },

  {
    text: "I have everything I need to be a better person today",
    author: "so mot hyt be!"
  },

  {
    text: "I am capable of achieving my dreams",
    author: "so mot hyt be!"
  },

  {
    text: "My dreams are valid",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to be happy",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to be kind",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to love no matter what",
    author: "so mot hyt be!"
  },

  {
    text: "I am the leader of my life",
    author: "so mot hyt be!"
  },

  {
    text: "I can choose who I want to be",
    author: "so mot hyt be!"
  },

  {
    text: "I can overcome negative thinking",
    author: "so mot hyt be!"
  },

  {
    text: "Negative thoughts come, positive thoughts come; I choose to feed the positive",
    author: "so mot hyt be!"
  },

  {
    text: "I can think this through, I am stronger than these anxious thoughts",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to starve negative thoughts",
    author: "so mot hyt be!"
  },

  {
    text: "I am in charge of my feelings, I choose to be happy",
    author: "so mot hyt be!"
  },

  {
    text: "I don't accept negative thoughts, I understand them",
    author: "so mot hyt be!"
  },

  {
    text: "I respond in the best way I can during stress",
    author: "so mot hyt be!"
  },

  {
    text: "There's always hope no matter my situation",
    author: "so mot hyt be!"
  },

  {
    text: "One step at a time is how I shall handle this",
    author: "so mot hyt be!"
  },

  {
    text: "I know when to pause, to push on, and to let go",
    author: "so mot hyt be!"
  },

  {
    text: "The reality now is, I'm at my best and I'm not going to quit",
    author: "so mot hyt be!"
  },

  {
    text: "I am doing the best I can so I have nothing to fear",
    author: "so mot hyt be!"
  },

  {
    text: "I have the strength to get through this",
    author: "so mot hyt be!"
  },
  {
    text: "I won't stop fighting for I am a fighter",
    author: "so mot hyt be!"
  },

  {
    text: "I can face every barrier that crosses my path",
    author: "so mot hyt be!"
  },

  {
    text: "These challenges are here to help me grow",
    author: "so mot hyt be!"
  },

  {
    text: "I fail but I'm not my failures",
    author: "so mot hyt be!"
  },

  {
    text: "My struggles don't define me",
    author: "so mot hyt be!"
  },

  {
    text: "Every time I decide, I create a chance to become wiser",
    author: "so mot hyt be!"
  },

  {
    text: "Making this decision shall improve my decision making",
    author: "so mot hyt be!"
  },

  {
    text: "My answers are not in others but within myself",
    author: "so mot hyt be!"
  },

  {
    text: "I've analyzed all the options and are ready to make the best choice",
    author: "so mot hyt be!"
  },

  {
    text: "I trust myself to make the best decision",
    author: "so mot hyt be!"
  },

  {
    text: "Using the information I have, I can make the best decision",
    author: "so mot hyt be!"
  },

  {
    text: "I am capable of making wise decisions",
    author: "so mot hyt be!"
  },

  {
    text: "I can adjust to every change in my life",
    author: "so mot hyt be!"
  },

  {
    text: "I can become the person I believe I can be",
    author: "so mot hyt be!"
  },

  {
    text: "I believe I am capable of doing better",
    author: "so mot hyt be!"
  },

  {
    text: "I have the power to change",
    author: "so mot hyt be!"
  },

  {
    text: "My unique experiences molded the amazing person I am",
    author: "so mot hyt be!"
  },

  {
    text: "I'm the only one who can fulfill my unique purpose on this earth",
    author: "so mot hyt be!"
  },

  {
    text: "I contribute something unique to the world",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to express my uniqueness in positive ways",
    author: "so mot hyt be!"
  },

  {
    text: "My uniqueness gives me special power",
    author: "so mot hyt be!"
  },

  {
    text: "I inspire others by being myself",
    author: "so mot hyt be!"
  },

  {
    text: "It's incredible that I am unique",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy when I do good and when I make errors",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy always, whether some see it or not",
    author: "so mot hyt be!"
  },

  {
    text: "I value who I am and shall always do my best to spread that value",
    author: "so mot hyt be!"
  },

  {
    text: "My self-worth isn't what someone thinks of me but what I think of myself",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy of the beautiful things in life",
    author: "so mot hyt be!"
  },

  {
    text: "I am worthy when I succeed and I am worthy when I fail",
    author: "so mot hyt be!"
  },

  {
    text: "I don't need to feel superior to feel worthy",
    author: "so mot hyt be!"
  },

  {
    text: "My self-worth is not attached to being busy",
    author: "so mot hyt be!"
  },

  {
    text: "My self-worth is not attached to what I do",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of myself for desiring to learn",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of myself for taking action when I could easily run from my life",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of myself for overcoming pride",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of my courage to be authentic",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of my values",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of myself because I didn't give up",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of myself for the tragedies I survived",
    author: "so mot hyt be!"
  },

  {
    text: "I am proud of who I am becoming",
    author: "so mot hyt be!"
  },

  {
    text: "I love that I am imperfect",
    author: "so mot hyt be!"
  },

  {
    text: "I love every aspect that makes who I am",
    author: "so mot hyt be!"
  },

  {
    text: "I love my creativity",
    author: "so mot hyt be!"
  },

  {
    text: "I love my uniqueness",
    author: "so mot hyt be!"
  },

  {
    text: "I love my body",
    author: "so mot hyt be!"
  },

  {
    text: "I love that I am learning",
    author: "so mot hyt be!"
  },

  {
    text: "I love that I am kind",
    author: "so mot hyt be!"
  },

  {
    text: "I love who I am",
    author: "so mot hyt be!"
  },

  {
    text: "I accept change",
    author: "so mot hyt be!"
  },

  {
    text: "I accept I'm learning to accept myself",
    author: "so mot hyt be!"
  },

  {
    text: "I accept I can't change some things",
    author: "so mot hyt be!"
  },

  {
    text: "I accept not everyone will like me",
    author: "so mot hyt be!"
  },

  {
    text: "I accept I make mistakes and I learn from them",
    author: "so mot hyt be!"
  },

  {
    text: "I accept my awesome qualities and my imperfections as well",
    author: "so mot hyt be!"
  },

  {
    text: "I accept myself as I am",
    author: "so mot hyt be!"
  },

  {
    text: "I use deep breathing to help me become more present in all situations and circumstances in my life",
    author: "so mot hyt be!"
  },

  {
    text: "I feel more confident and in tune with my true self when I am present",
    author: "so mot hyt be!"
  },

  {
    text: "I feel more calm and relaxed in all situations when I become present",
    author: "so mot hyt be!"
  },

  {
    text: "I dive into the power of now and I live a better life",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to make better decisions when I feel present",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to connect with myself when I feel fully present",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to control my emotions when I feel fully present",
    author: "so mot hyt be!"
  },

  {
    text: "As I become present, my life unfolds before me in the best way possible",
    author: "so mot hyt be!"
  },

  {
    text: "I find it easy to anchor myself to the present moment",
    author: "so mot hyt be!"
  },

  {
    text: "I choose to be in the moment in my everyday life",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to manage change and resolve conflicts effectively",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to communicate effectively and clearly",
    author: "so mot hyt be!"
  },

  {
    text: "I genuinely care and feel empathy towards people",
    author: "so mot hyt be!"
  },

  {
    text: "I know myself, and where I stand with my values",
    author: "so mot hyt be!"
  },

  {
    text: "I use deep breathing to ground myself and stay present",
    author: "so mot hyt be!"
  },

  {
    text: "I stay calm and relaxed in challenging life situations",
    author: "so mot hyt be!"
  },

  {
    text: "I intelligently choose my reactions and responses when I communicate",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to express and articulate my emotions clearly",
    author: "so mot hyt be!"
  },

  {
    text: "I am fully aware of myself, my emotions and my thoughts",
    author: "so mot hyt be!"
  },

  {
    text: "I am able to understand and manage my emotions effectively",
    author: "so mot hyt be!"
  },
  
  {
    text: "The reality now is, I'm at my best and I'm not going to quit",
    author: "so mot hyt be!"
  },
  
  {
    text: "Today, instead of being upset by all the things that are wrong, I will be thankful for all the things that are right.",
    author: "so mot hyt be!"
  },
    
  {
    text: "I'm so pumped to consistently set and achieve meaningful extraordinary goals.",
    author: "so mot hyt be!"
  },
  
];



 

 
// Fetching the quotes from the type.fit API using promises
/* fetch("https://type.fit/api/quotes")
	.then(function(response) {
		return response.json();
	}) // Getting the raw JSON data
	.then(function(data) {

		// Storing the quotes internally upon
		// successful completion of request
		this.data = data;

		// Displaying the quote When the Webpage loads
		displayQuote()
});
 */

// Adding an onclick listener for the button
function newQuote(){
	
	// Rotating the Quote Box
	blockBack.classList.toggle('rotateB');
	blockFront.classList.toggle('rotateF');

	// Displaying a new quote when the webpage loads
	displayQuote();
}



