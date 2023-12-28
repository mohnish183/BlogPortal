import React from "react";
import { createContext, useState } from "react";

export const StoreData = createContext();
export default function Store(props) {
  const [newsData] = useState([
    {
      id: 1,
      category: "Bollywood",
      title:
        "Jawan box office collection Day 10: Shah Rukh Khan-starrer is fastest Rs 400 crore earner, eyes Pathaan records next",
      image: "https://images.indianexpress.com/2023/08/jawan021.jpg?w=640",
      description:
        "hah Rukh Khan-led actioner Jawan continues to surge and rule the domestic box office. The film once again picked up speed on its second weekend, after dominating the box office throughout its first week. On its second Saturday, Jawan box office collection was approximately Rs 31.50 crore, reported industry tracker Sacnilk. This brought#Jawan [#Tamil + #Telugu; Week 2] Fri 1 cr, Sat 2.20 cr. Total: ₹ 46.55 cr. the film’s net domestic collection to Rs 440.48 crore. Given its pace, it won’t be a surprise if the Atlee directorial touches the Rs 500 crore on Sunday.",
    },

    {
      id: 2,
      category: "Bollywood",
      title: "Sunny Deol’s film sees a gradual decline after Jawan’s release",
      image: "https://images.indianexpress.com/2023/08/gadar-2-9.jpg?w=640",
      description:
        "The weekday curse has finally hit Sunny Deol and his film Gadar 2. After ruling the box office successfully for a month, the film’s numbers saw a decline after Jawan released on September 7. And now as the weekend got over, the film saw a further slump. According to industry tracker Sacnilk, the film earned Rs 75 lakh on Monday, and saw a further dip on Tuesday, as it minted approx Rs 50 lakh. This brings its 33-day total to Rs 516.08 crore.",
    },
    {
      id: 3,
      category: "Bollywood",
      title:
        "Rocky Aur Rani Kii Prem Kahaani 'maybe subconsciously’ inspired by Akshay Kumar and Twinkle Khanna: Karan Johar",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/17/550x309/Collage_Maker-17-Sep-2023-03-12-PM-3804_1694943778264_1694943791376.jpg",
      description:
        "The storyline of Rocky Aur Rani Kii Prem Kahaani may have several real-life examples. And one of them may be a power couple in Bollywood. In a new interview with Mid-Day, director Karan Johar said that Akshay Kumar and Twinkle Khanna may have subconsciously inspired the lead characters of his new directorial.",
    },
    {
      id: 4,
      category: "Bollywood",
      title:
        "Karan Johar On Major Differences Between Ranbir Kapoor & Ranveer Singh Says “RK Has No Manager, You Ask Him For Dates & He Opens His Phone…”",
      image:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/09/karan-johar-on-major-differences-between-ranbir-kapoor-ranveer-singh-says-rk-has-no-manager-you-ask-him-for-dates-he-opens-his-phone.jpg",
      description:
        "Karan Johar is one of the most famous names in Bollywood, and the director is friends with all the A-list actors in the entertainment industry. He has no filter and never shies away from expressing his views on different topics on social media. In a recent interview, KJo spoke about his close and dear friend Ranbir Kapoor and how the Brahmastra actor has no PR or manager and handles his own dates while calling him the most ‘patient’. The director spoke about a common trait between RK and Ranveer Singh, and scroll below to read the scoop.",
    },
    {
      id: 5,
      category: "Bollywood",
      title:
        "Sima Taparia Takes On Her First Bollywood Matchmaking Job, Sets Up Jubin Nautiyal, Adah Sharma",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/sima-taparia-16950396273x2.jpg?impolicy=website&width=510&height=356",
      description:
        "Singer Jubin Nautiyal was spotted having lunch with Sima Taparia, the famous matchmaker from Netflix’s Indian Matchmaking earlier this week. Their appearance led to fans wondering what the two had been planning. In a delightful turn of events, Sima Taparia has now been featured in a video with Jubin Nautiyal and actress Adah Sharma for some much-awaited matchmaking! The video was released to promote Jubin’s new song Raabta starring Adah Sharma.",
    },
    {
      id: 6,
      category: "Bollywood",
      title:
        "Rajinikanth Reveals Exciting Details About His Next Project with Lokesh Kanagaraj",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/untitled-design-2023-09-18t182826.955-16950419163x2.jpg?impolicy=website&width=510&height=356",
      description:
        "Tamil superstar Rajinikanth, with his wife Latha, arrived at Chennai airport on their way to the Pethi Katu Kutu program in Coimbatore. During his journey, he was bombarded with questions from reporters about his upcoming projects .When asked about his collaboration with director Lokesh Kanagaraj on Thalaivar 171, Rajinikanth clarified that it wouldn’t be his next release. He shared that currently, he is currently working on a film tentatively titled Thalaivar 170. The film, which is produced by Lyca Productions, will be released before this film.",
    },
    {
      id: 7,
      category: "Bollywood",
      title:
        "Trisha Makes Hearts Swoon With Her Ravishing Black Dress At SIIMA 2023",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/untitled-design-2023-09-18t182013.020-16950414393x2.jpg?impolicy=website&width=510&height=356",
      description:
        "The SIIMA 2023 was held on Saturday in Dubai and was high on glitz and glamour. The prestigious event was graced by the who’s who of the South movie industry and kicked up the glam quotient by multiple notches. Every celebrity was styled to perfection, however, there was one actress who made heads turn and jaws drop with her alluring looks and gorgeous outfit that enhanced her beauty.",
    },
    {
      id: 8,
      category: "Bollywood",
      title:
        "Fukrey 3 Promotional Teaser: Varun Sharma And Richa Chadha Fight Elections",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/fukrey-3-promotional-teaser-varun-sharma-and-richa-chadha-fight-elections--16950378753x2.png?impolicy=website&width=510&height=356",
      description:
        "As fans eagerly await the release of Fukrey 3, the makers have unveiled a pre-release promo that teases an exciting election showdown between Varun Sharma’s character Choocha and Richa Chadha’s character Bholi Punjaban. The film also features Pulkit Samrat, Manjot Singh, and Pankaj Tripathi in key roles, promising another laughter-packed adventure following the success of the franchise’s first two installments.",
    },
    {
      id: 9,
      category: "Bollywood",
      title:
        "Ganpath: Tiger Shroff FINALLY Unveils Massy Poster Ahead Of Ganesh Chaturthi; Fans React",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/ganpath-poster-tiger-shroff-16950314663x2.jpg?impolicy=website&width=510&height=356",
      description:
        "Tiger Shroff and Kriti Sanon’s on-screen chemistry that initially set screens ablaze in their debut film Heropanti back in 2014 is poised to reignite hearts once again. The dynamic duo is making a much-anticipated comeback in the upcoming action-packed thriller, Ganapath: Part 1. Amid the buzz and excitement around the film, Tiger Shroff has finally unveiled the official poster of his magnum opus.",
    },
    {
      id: 10,
      category: "Bollywood",
      title:
        "Vicky Kaushal On Not Getting The National Award For Sardar Udham: 'Opportunity Was Big, Rest Was Bonus'",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/vicky-kaushal-16947731633x2.jpg?impolicy=website&width=510&height=356",
      description:
        "During a discussion with India Today, Vicky shared his thoughts about the film and its personal importance to him. When questioned if he felt disheartened about not receiving the National Award, Vicky replied, “Nahi! The thing is that many times, when you get a film, and get to work with a director that you like, you think that’s where your dream has come true, which is genuinely true for Sardar Udham. I am not just saying for the heck of it. Being a Punjabi, that topic, that man, that story is very, very close to my heart.”",
    },
    {
      id: 11,
      category: "Bollywood",
      title:
        "Animal: Alia Bhatt Is All Hearts For Hubby Ranbir Kapoor's Suave New Look; See Post",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/fotojet-61-16950244143x2.jpg?impolicy=website&width=510&height=356",
      description:
        "In the poster, Ranbir Kapoor sports a classic and timeless look with a nod to the past. He sports sunglasses with distinctive white borders, his hair in slightly long, wavy locks. With a cigarette casually hanging from his mouth, he exuded a wild confidence. Completing the look, Ranbir opted for a sharp blue suit that added a touch of sophistication.",
    },
    {
      id: 12,
      category: "Bollywood",
      title:
        "Mrunal Thakur's Wedding Comedy Ankh Micholi By OMG Director Umesh Shukla To Release On THIS Date; Deets Inside",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/aankh-micholi-16950242153x2.jpg?impolicy=website&width=510&height=356",
      description:
        "Director Umesh Shukla of OMG and 102 Not Out fame is gearing up for the release of another highly-anticipated family entertainer, Aankh Micholi on October 27 this year. Staged around an Indian wedding, the film showcases the madness of two mismatched families and their crazy shenanigans which will take you on a joyous journey of laughter, drama, and emotions.",
    },
    {
      id: 13,
      category: "Bollywood",
      title:
        "Game Changer: Makers Of Ram Charan-Kiara Advani Film Take Legal Action Against Those Who Leaked Song",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/kiara-advani-ram-charan-16948782653x2.jpg?impolicy=website&width=510&height=356",
      description:
        "Ram Charan’s upcoming film with Kiara Advani, Game Changer made headlines recently after a 30-second audio clip of one of the film’s songs was leaked online. Although it hasn’t been found out who leaked the song, the makers of the film have decided to not let this pass by. They have filed an FIR against the leak of the song. The name of the song has been revealed by the makers as Jaragandi Jaragandi.",
    },
    {
      id: 14,
      category: "Bollywood",
      title:
        "Suriya Set To Make His Bollywood Debut In Rakeysh Omprakash Mehra’s Karna",
      image:
        "https://images.news18.com/ibnlive/uploads/2023/09/untitled-design-2023-09-18t173139.219-16950385073x2.jpg?impolicy=website&width=510&height=356",
      description:
        "Suriya is one of the most versatile actors who predominantly works in the Tamil cinema industry. Over the past decade, he has portrayed some amazing characters on screen that fans now like to call iconic. Currently, the Jai Bhim actor is making headlines, as according to the latest report, he is all set to make his Bollywood debut with Rakeysh Omprakash Mehra’s upcoming movie Karna.",
    },
    {
      id: 15,
      category: "Tech",
      title:
        "Google's rivals get day in court as momentous US antitrust trial begins",
      image:
        "https://images.hindustantimes.com/tech/img/2023/09/16/414x233/Google__1694838784599_1694841627378.JPG",
      description:
        "DuckDuckGo, which has long complained that Google's tactics have made it too tough to get people to use their search engine on a mobile phone, will be one of many rivals to the online search giant eyeing a once-in-a-generation antitrust trial set to begin Tuesday.The U.S. Justice Department is expected to detail how Google paid billions of dollars annually to device makers like Apple Inc., wireless companies like AT&T and browser makers like Mozilla to keep Google's search engine atop the leader board.",
    },
    {
      id: 16,
      category: "Tech",
      title:
        "Sony Xperia 1 VI expected to Debut Early in 2024, may rival Samsung Galaxy S24 series",
      image:
        "https://resize.indiatvnews.com/en/centered/newbucket/250_151/2023/09/sony-xperia-1-vi-1694956188.jpg",
      description:
        "Sony is reportedly working on the Xperia 1 VI, the next addition to its one series of smartphones. Although the company hasn't officially disclosed much about the upcoming device, details regarding its specifications and launch timeline have surfaced online. It's expected to succeed the Sony Xperia 1 V, which was launched in May of this year and featured a 6.5-inch OLED display with support for 21:9 CinemaWide 4K HDR and a 120Hz refresh rate.",
    },
    {
      id: 17,
      category: "Holly",
      title:
        "Taylor Swift's The Eras Tour film shakes up Hollywood, forces movies to shuffle release dates",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/17/550x309/MTV-Video-Music-Awards-Photo-Gallery-4_1694960505332_1694960661270.jpg",
      description:
        "Taylor Swift, a powerhouse in the music world, is now making waves in the film industry with her upcoming The Eras Tour concert movie. While this marks an exciting moment for her fans, it's causing a ripple effect in the film release schedules, leaving other productions scrambling to find their place in the spotlight.",
    },
    {
      id: 18,
      category: "Holly",
      title:
        "Not Pirates Of The Caribbean, Johnny Depp To Make Hollywood Comeback With Beetlejuice 2, But There Is Also An Upsetting Twist – Reports",
      image:
        "https://static-koimoi.akamaized.net/wp-content/new-galleries/2023/09/johnny-depp-is-indeed-in-beetlejuice-2-but-001.jpg",
      description:
        "It won’t be an exaggeration to say that Johnny Depp has the world hooked to him and everything he decides to do now. The star who has had a very tumultuous past couple of years personally is taking baby steps to bounce back to the glory he once enjoyed in Hollywood. But that is, of course, not without a pinch of controversies. While his personal life is a wild ride if you have been following it on the news, his professional space seems to be having a good pace with a French on-screen comeback with Jeanne du Barry, and the discussions around Pirates Of The Caribbean return but there’s Beetlejuice in the mix now.",
    },
    {
      id: 19,
      category: "Holly",
      title:
        "Psycho,' 'The Good Nurse': Best Hollywood movies on serial killers",
      image:
        "https://i.cdn.newsbytesapp.com/images/l44120230913194215.jpeg?tr=w-720",
      description:
        "Hollywood filmmakers have long been fascinated and intrigued by serial killers. Their chilling profiles have taken center stage in several films that delve into the darkest corners of the human psyche. From true crime stories based on real life murderers to fictional stories inspired by their gruesome murders, these Hollywood movies with a myriad of narratives both terrify and intrigue audiences.",
    },
    {
      id: 20,
      category: "Holly",
      title:
        "'The Godfather' to 'The Untouchables': 5 top Hollywood mafia movies",
      image:
        "https://i.cdn.newsbytesapp.com/images/l12420230914182637.jpeg?tr=w-720",
      description:
        "Several of the all-time Hollywood classics are mafia movies. Some of the biggest Hollywood filmmakers and actors have come together to give us a glimpse into the complex and morally ambiguous world of the mafia.From timeless classics to modern masterpieces, the world of Hollywood mafia movies is a rich tapestry of crime, power, loyalty, and betrayal. We list the best of the lot.",
    },
    {
      id: 21,
      category: "Holly",
      title:
        "Holiday TV Movies Will Fully Move Forward Despite Hollywood Strike",
      image:
        "https://variety.com/wp-content/uploads/2022/11/ThreeWiseMenBaby.jpg?w=1000&h=563&crop=1",
      description:
        "The fall TV schedule may be lacking a bit of new content, but the holiday season will be filled with new TV movies. Hallmark Channel, Lifetime, Great American Family and more were able to fully complete their slate of holiday movies before the WGA and SAG strikes, Variety confirms.",
    },
    {
      id: 22,
      category: "Holly",
      title: "Katy Perry Sells Catalog Rights to Litmus Music for $225 Million",
      image:
        "https://variety.com/wp-content/uploads/2023/01/GettyImages-1440387527-e1674450103959.jpg?w=1000&h=563&crop=1",
      description:
        "After months of rumors, Katy Perry has sold her music rights to Litmus Music, the Carlyle-backed company announced Monday; multiple sources put the price at $225 million. The deal includes Perry’s stakes in master recordings and publishing rights for the five albums she released between 2008 and 2020: “One of the Boys,” “Teenage Dream”, “Prism,” “Witness” and “Smile.” Universal Music Group continues to own the masters to those albums.",
    },
    {
      id: 23,
      category: "Holly",
      title: "Hidden Strike",
      image:
        "https://assets.gadgets360cdn.com/pricee/assets/product/202305/Hidden-Strike_1685534371.jpg",
      description:
        "I recently watched the movie Hidden Strike and I have to say, it was quite an entertaining evening. I wasn't expecting much, but I was pleasantly surprised by the level of humor and action in this film.One thing that really stood out to me was the unique stunts and combat scenes. It's refreshing to see a movie that doesn't rely solely on bullets and explosions to create excitement. Instead, Hidden Strike showcased a more creative approach to fighting, which I really appreciated. It was a nice change from the typical action movies like John Wick that are filled with brutal and violent scenes.",
    },
    {
      id: 24,
      category: "Holly",
      title:
        "'Heart of Stone': Alia faces off against Gal Gadot, Jamie Dornan; Netflix sets August debut for film",
      image:
        "https://gumlet.assettype.com/nationalherald%2F2023-06%2F9e39b001-8e27-432a-9b1b-5898d9f46a8a%2FMV5BMzE1ZThhYWEtZWYzOS00ODk0LThlNDQtMGIwMTNhNzk1ZjYxXkEyXkFqcGdeQXVyMDM2NDM2MQ____V1__v1.jpg?auto=format%2Ccompress&fmt=webp&w=1200",
      description:
        "ndian cinema star Alia Bhatt is ready to steal the hearts in her Hollywood debut, Heart of Stone as an antagonist who keeps her co-stars Gal Gadot and Jamie Dornan on their toes in the espionage thriller from Netflix.Bhatt, along with Gadot  and Dornan  unveiled the first trailer of Heart of Stone during the streamer's global live event Tudum in Sao Paulo, Brazil, on late Saturday night.",
    },
    {
      id: 25,
      category: "Holly",
      title:
        "Fast X cast: All the characters, stars and cameos in Fast & Furious 10",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/3/2023/05/fast-x-poster-71ac019.jpg",
      description:
        "The 10th film in the Fast and Furious franchise, Fast X, is now in cinemas, with Vin Diesel, Michelle Rodriguez, Tyrese Gibson and the rest of the cast returning for more high octane action.Joining them for this new film are Jason Momoa as villain Dante Reyes, Brie Larson as Tess, Alan Ritchson as Aimes and more.",
    },
    {
      id: 26,
      category: "Holly",
      title: "The Black Demon – Movie Review",
      image:
        "https://www.heavenofhorror.com/wp-content/uploads/2023/06/the-black-demon-2023-review.jpg",
      description:
        "THE BLACK DEMON is a mega shark horror movie that was out in movie theaters and can now be watched as PVOD. Its current IMDb rating of 3.7 is very deceiving. As are all the 1-star ratings and the 10-star ratings, both claiming the others are wrong and to “not believe them.If you enjoy a good shark horror movie (or Megalodon, to be exact), but also enjoy it when there’s more to the story than just a bloodthirsty monster, then this is for you.",
    },
    {
      id: 27,
      category: "Holly",
      title: "47 METERS DOWN: UNCAGED",
      image:
        "https://resizing.flixster.com/Is6tVNUSHh4Q31fSqd6zr_Bggrs=/300x300/v2/https://flxt.tmsimg.com/assets/p16311223_v_v8_ai.jpg",
      description:
        "Four teenage divers discover that the sunken ruins of a Mayan city are also a hunting ground for deadly great white sharks. With their air supply steadily dwindling, the frightened girls must navigate the underwater labyrinth of claustrophobic caves and eerie tunnels in search of a way out of their watery hell.",
    },
    {
      id: 28,
      category: "Holly",
      title: "John Wick: Chapter 4",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/6aec1a106199299.5f8a325998dca.jpg",
      description:
        "John Wick (Keanu Reeves) takes on his most lethal adversaries yet in the upcoming fourth installment of the series. With the price on his head ever increasing, Wick takes his fight against the High Table global as he seeks out the most powerful players in the underworld, from New York to Paris to Osaka to Berlin.",
    },
    {
      id: 29,
      category: "Holly",
      title: "No hard feeling",
      image:
        "https://m.media-amazon.com/images/S/pv-target-images/4660345499c4537c47704e764a161eacb3d465138c2bcb9aa53a63e9f7bc2b25.jpg",
      description:
        "HOME PREMIERE. On the brink of losing her childhood home, Maddie (Lawrence) discovers an intriguing job listing: wealthy helicopter parents looking for someone to date their introverted 19-year-old son, Percy, before he leaves for college. To her surprise, Maddie soon discovers the awkward Percy is no sure thing.",
    },
    {
      id: 30,
      category: "Holly",
      title:
        "Red, White & Royal Blue movie review: A charming, frothy love story",
      image:
        "https://images.cnbctv18.com/wp-content/uploads/2023/08/Red-White-Royal-Blue-1-1019x573.jpg?im=FitAndFill,width=1200,height=900",
      description:
        "Two hours of a gorgeous fairytale that has Taylor Zakhar Perez and Nicholas Galitzine as the leads, smitten in love, set in a world where the United States has a woman president gearing up for reelection and England has a black female prime minister with the best of the British monarchy and the White House thrown into the mix? Count me in.",
    },
    {
      id: 31,
      category: "Fitness",
      title:
        "Almonds with energy-restricted diets aid in weight loss, improve cardiometabolic health: Study",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/soaked_nuts_1648371449636_1695100233707.jpg",
      description:
        "When it comes to weight reduction, nuts often get a poor rap: while they're high in protein, they're also heavy in fat, which often puts people off. However, recent research from the University of South Australia indicates that you can eat almonds and lose weight at the same time.",
    },
    {
      id: 32,
      category: "Fitness",
      title:
        "Millets for PCOS: Amazing benefits, how to add to diet, and 2 healthy recipes",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/18/550x309/varfi_1681470636209_1695023503085.jpg",
      description:
        "Millets that are best for PCOS are jowar, ragi, bajra and foxtail due to the presence of calcium, iron, zinc, magnesium that help in maintaining hormone levels. Heavy bleeding during periods can lead to nutrient deficiency. This can be balanced by eating meals made of millets.",
    },
    {
      id: 33,
      category: "Fitness",
      title: "Stress-relieving benefits of different Yoga styles",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/18/550x309/carl-barcelo-nqUHQkuVj3c-unsplash_1695003047889_1695003168320.jpg",
      description:
        "Yoga poses and meditation quiet the logical brain, which may become overstimulated in stressful situations, helping to promote mental peace. Rapid, shallow breathing during times of stress exacerbates anxiety hence, according to Yoga experts, we may reduce tension and anxiety in our life by using techniques like Trataka meditation, Hatha yoga Kriyas like Dhauthi, Nauli, Pranayama etc.",
    },
    {
      id: 34,
      category: "Fitness",
      title: "Steps to break unhealthy repeating pattern",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/16/550x309/t4hgfd_1683540764493_1694894041837.jpg",
      description:
        "Unhealthy patterns or habits develop over a considerable period of time. Some of them are impacted by the childhood beliefs that we hold and carry to adulthood, while some start as a defense mechanism and then become a part of life.Core beliefs determine how you perceive and interpret the world. It starts from when you are a child, the attachments that you have, the experiences that you go through etc",
    },
    {
      id: 35,
      category: "Fitness",
      title: "10 benefits of genome testing for everyday life",
      image:
        "https://pillarsofwellness.ca/wp-content/uploads/2021/03/mental-health-960x675.jpg.webp",

      description:
        "Genome testing determines the interplay between genes, nutrition and health; helps to personalise the diet and nutrition; provides us with a blueprint for optimal health and wellness and reveal why certain nutrients or diets works for an individual and why it doesn’t work for others. Genomic tests identify the specifics of our DNA, in terms of change in our chromosomes, associated genes and/or protein and can reveal a wide range of information, from our ancestry to our health and family history.",
    },
    {
      id: 36,
      category: "Fitness",
      title: "World Alzheimer's Day 2023: Date, history, significance",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/alzheimers_disease_thumb_1695124521766_1695124522005.jpg",
      description:
        "World Alzheimer's Day 2023: Alzheimer's disease is a condition where the brain starts to shrink, and the brain cells starts to die. This leads to significant memory loss, cognitive decline, loss of ability to do daily tasks and changes a person's ability to function properly. Alzheimer's disease is a serious condition and requires immediate treatment and supervision. Every year, World Alzheimer's Day is celebrated to create awareness about this disease and the importance of early treatment. ",
    },
    {
      id: 37,
      category: "Fitness",
      title: "Gentle ways to push yourself through depression",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/_61441eee-548f-11ea-b246-02cea10d1852_1695104618778.jpg",
      description:
        "Depression is a mood disorder where a person has the persistent feeling of sadness or low mood. It can happen due to a variety of reasons. But people in depression slowly lose interest in everything and find everything meaningless. Some of the symptoms of depression are angry outbursts, feeling of sadness, sleep disturbances and loss of interest. Speaking of gentle ways of healing depression, Therapist Andrea",
    },
    {
      id: 38,
      category: "Fitness",
      title:
        "8 signs that your body is warning you against hitting the treadmill",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/18/550x309/treadmill_1678197957178_1695033067469.jpg",
      description:
        "Regular exercise and an active lifestyle are considered heart-healthy habits, but going overboard with workout can be detrimental. The recent case of a young man losing his life after having a heart attack in gym has brought to focus the adverse effects of overexercising. It also makes us wonder if one can read the signs of cardiac trouble beforehand and take measures to prevent a heart attack. Experts say if you are feeling dizzy, having chest pain or discomfort.",
    },
    {
      id: 39,
      category: "Fitness",
      title: "Food trends for better health in the remaining months of 2023",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/18/550x309/joshua-coleman-8V4y-XXT3MQ-unsplash_1695017390056_1695017414691.jpg",
      description:
        "The food and beverages industry has witnessed a lot of change in the past few years and this change is representative of the changing consumer eating patterns where there is increased affinity for mindful eating, sustainable food patterns, convenience without compromising on nutrition and ensuring a wholesome diet.",
    },
    {
      id: 40,
      category: "Fitness",
      title: "Genetic disorders that impact male fertility",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/17/550x309/pexels-andrea-piacquadio-3974780_1694939787420_1694939818084.jpg",
      description:
        "Genetics is a major factor determining sperm production, sperm function and structure of the reproductive organs and they can directly affect the ability of males to conceive and their overall health. Having a baby is a special dream for many but sometimes, genetics can play a role that makes it a bit more challenging since genetic disorders have a significant impact on male fertility, affecting the ability to have children.",
    },
    {
      id: 41,
      category: "Fitness",
      title:
        "Here's how gut microbiome acts as a key player in diabetes prevention and management",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/16/550x309/diabetes_1686721849407_1694839558867.jpg",
      description:
        "Having about 77 million of the adult population with type 2 diabetes and another 25 million in the prediabetics group, India ranks among the top countries with the highest number of diabetes cases. As this trend continues to escalate, it becomes increasingly evident that a paradigm shift is necessary to combat the diabetes epidemic.",
    },
    {
      id: 42,
      category: "Fitness",
      title:
        "Impact of smoking and drinking on male fertility, tips to improve sperm quality",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/16/550x309/pexels-gustavo-fring-5163385_1694838182050_1694838205975.jpg",
      description:
        "According to health experts, smoking is harmful for both men and women who are trying to conceive and can cause infertility as cigarette smoking can cause reduced semen volume, decreased sperm count and also reduces the percentage of motile sperms. Hence, there should be a balance between oxidative and non oxidative levels in the body.",
    },
    {
      id: 43,
      category: "Fitness",
      title:
        "urmeric shows promise as alternative to medication for gastrointestinal symptoms: Study",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/16/550x309/turmeric_1641883735677_1694861398181.jpg",
      description:
        "Researchers discovered that a natural component found in the culinary spice turmeric may be as effective as omeprazole, a medication used to treat gastrointestinal symptoms by decreasing excess stomach acid. The research was published in the journal BMJ Evidence-Based Medicine. Turmeric is extracted from the root of the Curcuma longa plant. ",
    },
    {
      id: 44,
      category: "Fitness",
      title:
        "Why immunotherapies don’t always work as predicted? Study reveals",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/16/550x309/_fba4df6a-39e4-11eb-a276-e4491c077a70_1694871504916.jpg",
      description:
        "This block has been broken or is missing. You may be missing content or require the original module to be enabled. Checkpoint blockade inhibitors, which are cancer drugs, have proven to be effective for some cancer patients. These drugs work by stimulating the body's T cell response, causing those immune cells to destroy tumours. ",
    },
    {
      id: 45,
      category: "Tech",
      title:
        "Pregnant ‘Googler’ impacted by layoffs at parent firm Alphabet: 'Had amazing 2 years’",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/Justice-Department-Google-0_1682357181097_1695125884541.jpg",
      description:
        "A now-former Google employee, who was impacted by the recent layoffs at the company's parent organisation Alphabet Inc., has revealed she has been on a maternity leave and is due to deliver in two weeks. Remaining positive, however, the woman described her two years with the tech giant as ‘amazing.’",
    },
    {
      id: 46,
      category: "Tech",
      title:
        "Google in last-ditch effort to overturn $2.6 bn EU antitrust fine",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/TECH-RESULTS--1_1692722485784_1695124860546.JPG",
      description:
        "Alphabet's Google on Tuesday made a last ditch effort at Europe's top court to overturn a 2.42 billion euro ($2.6 billion) EU antitrust fine imposed for market abuse related to its shopping service, saying that regulators failed to show that its practices were anti-competitive.",
    },
    {
      id: 47,
      category: "Tech",
      title:
        "38TB of Microsoft data ‘accidentally exposed’ by AI researchers on company’s GitHub page: Report",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/USA-CHINA-CYBER-MICROSOFT-0_1695123162169_1695123841220.JPG",
      description:
        "Reports suggest that Microsoft researchers accidentally leaked 38TB of confidential information onto the company’s GitHub page where it could be downloaded by potentially everyone. The incident reportedly happened in June 2023.",
    },
    {
      id: 48,
      category: "Tech",
      title:
        "From Ubi's Assassin's Creed Mirage to Marvel's Spider-Man 2, here are all controller-smashing gaming titles for October",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/October_Gaming_Season_1695107647343_1695107647470.jpeg",
      description:
        "The month of October marks a significant period for the gaming community, with some highly anticipated releases. Spider-Man 2 will swing onto the PS5 this month, while Alan Wake 2 is set to arrive just in time for the Halloween season. However, there's been a change in plans for Afraid of the Dark, which has shifted its release date from October to January 2024.",
    },
    {
      id: 49,
      category: "Tech",
      title:
        "Apple unveils iOS 17. Check eligible iPhones, how to download update, features",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/Apple-Event-2_1694546154526_1695088679355.jpg",
      description:
        "Apple on Monday launched the iOS17 with several new features. The Cupertino-based technology giant unveiled the latest iPhone operating system months after making the big announcement at the Worldwide Developers Conference (WWDC) in June.",
    },
    {
      id: 50,
      category: "Tech",
      title:
        "LinkedIn server back after outage, users face temporary issue accessing website",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/18/550x309/Screenshot_2023-09-18_170505_1695036956532_1695036963505.png",
      description:
        "LinkedIn, the social media platform tailored for business and employment purposes, experienced an outage that left several users globally unable to access the website on Monday. An error message popped up temporarily when attempting to visit the platform.",
    },
    {
      id: 51,
      category: "Tech",
      title:
        "Jio AirFiber to be launched on September 19. Check features, price",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/17/550x309/reliance_1694930233593_1694930233923.JPG",
      description:
        "Reliance Jio is set to launch its Jio AirFiber on Ganesh Chaturthi, i.e September 19. The announcement related to the roll out of this service was made by Reliance Industries chairperson Mukesh Ambani during the company's annual general meeting last month.",
    },
    {
      id: 52,
      category: "Tech",
      title:
        "Apple iPhone 16 to be equipped with enhanced A17 chip, 8GB memory: Report",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/16/550x309/APPLE-IPHONE-CHINA-0_1694861128914_1694861160091.JPG",
      description:
        "The Apple iPhone 15 is now available for pre-orders, but reports have started emerging about the 16th edition of the iPhone series. A latest leak now suggests that iPhone 16 is likely to have enhanced A17 chip and 8GB memory.",
    },
    {
      id: 53,
      category: "Tech",
      title:
        "Amazon is offering massive discount on this Samsung smartphone. Check deal",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/16/550x309/Samsung_Galaxy_M33_1694857802084_1694857802444.jpg",
      description:
        "If you are planning to buy a Samsung smartphone, then it is the time for you. E-commerce platform Amazon is offering attractive discount on Samsung Galaxy M33 5G smartphone, launched last year.",
    },
    {
      id: 54,
      category: "Tech",
      title:
        "Did you receive this ‘emergency alert' on your phone today? Here's what it means",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/15/550x309/emregcy_1694768649378_1694768677784.jpeg",
      description:
        "Many smartphone users across India received an “emergency alert” on Friday afternoon with a loud beep. The notification was a test message sent by the department of telecommunication to check the new emergency alert system developed by the National Disaster Management Authority (NDMA). The message informed recipients that it was a test and that no action was required.",
    },
    {
      id: 55,
      category: "Tech",
      title: "What is WhatsApp's new ‘Channel’ feature? How to create one?",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/13/550x309/WhatsApp_Channels_Launch_1694608603568_1694608623093.png",
      description:
        "Meta-owned messaging platform WhatsApp has launched its new feature ‘Channels’, a one-way platform for sharing updates with the followers. This comes more than a year after the company had rolled out the Communities feature.",
    },
    {
      id: 56,
      category: "Tech",
      title:
        "Google parent Alphabet lays off ‘hundreds’ from global recruitment team",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/14/550x309/FILES-TECHNOLOGY-GOOGLE-COMETITION-0_1694527412926_1694670213162.jpg",
      description:
        "The company's decision to let go of a few hundred employees is not part of a wide-scale layoff and will retain a significant majority of the team for hiring critical roles. It will also help the workers search for roles within the company and elsewhere.",
    },
    {
      id: 57,
      category: "Tech",
      title: "The Future of Digital Banking in MBA: Trends and Innovations",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/15/550x309/shutters_1694762793944_1694762816521.jpg",
      description:
        "The financial enterprise is undergoing a profound transformation, pushed by using technological improvements, transferring purchaser possibilities, and disruptive innovations. In this period of digitalization, banks and financial institutions are reimagining their traditional practices, and the schooling sector is following healthy. ",
    },
    {
      id: 58,
      category: "Tech",
      title: "What is watsonX, IBM's next-generation AI and data platform?",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/13/550x309/watson_x_1694607752632_1694607752998.JPG",
      description:
        "IBM on Tuesday showcased its latest next-generational artificial intelligence (AI) and data platform WatsonX at the Think 2023 event in Mumbai. The platform has a set of AI assistants to help one scale and accelerate the impact of artificial intelligence through trusted data across his/her business.",
    },
    {
      id: 59,
      category: "Food",
      title: "Food trends for better health in the remaining months of 2023",
      image:
        "https://www.hindustantimes.com/ht-img/img/2023/09/18/550x309/joshua-coleman-8V4y-XXT3MQ-unsplash_1695017390056_1695017414691.jpg",
      description:
        "The food and beverages industry has witnessed a lot of change in the past few years and this change is representative of the changing consumer eating patterns where there is increased affinity for mindful eating, sustainable food patterns, convenience without compromising on nutrition and ensuring a wholesome diet.",
    },
    {
      id: 60,
      category: "Food",
      title:
        "Homestyle Punjabi food since 2001: Here's why we LOVE Papa Pancho Da Dhaba in Bandra!",
      image:
        "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?cs=srgb&dl=pexels-marvin-ozz-2474661.jpg&fm=jpg",
      description:
        "Known for dishing out traditional Punjabi food dishes a contemporary twist, Bandra's Papa Pancho Da Dhaba has been serving Mumbaikars since 2001. Specialised in dishing out wholesome, home-style Punjabi food, this dhaba also offers a relaxed ambience, for the ultimate dining experience.",
    },
    {
      id: 61,
      category: "Food",
      title:
        "Punjabi food has a lot of influence on Australian dishes, says chef",
      image: "https://images.indianexpress.com/2023/03/NL-chef2-3col.jpg?w=640",
      description:
        "“I love Punjabi food, and it has a lot of influence on Australian dishes, particularly in Melbourne, where I come from. The immigration of students and professionals from India and the rich culinary culture brought by the Indian immigrants has also impacted Australian food. Personally, I am exploring more Indian cuisines currently and trying my hands to master some of these,",
    },
    {
      id: 62,
      category: "Food",
      title: "Food festival serves Punjab on platter",
      image:
        "https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg",
      description:
        "'We are serving the desi, authentic and home-style Punjabi delicacies in our food pop-up. Honestly, Punjabi food was never heavy on stomach or heavy on cream and butter. It was supposed to be a simple meal that people used to have at home everyday. ''But things are no longer the same, thanks to modern times and commercialisation, everyone is serving a fusion of Nizami or Awadhi cuisine in the name of Punjabi cuisine.",
    },
    {
      id: 63,
      category: "Food",
      title:
        "Rajasthani Cuisine: A Fusion of Resilience, a Royal Past and Innovation",
      image:
        "https://www.indianfoodforever.com/iffwd/wp-content/uploads/dal-baati-churma.jpg",
      description:
        "The quintessential dish of the Rajasthani cuisine is perhaps the dal baati and churma. Baatis are bread dumplings made of whole wheat flour and can be stored for a considerable period of time. Dal is made out of a mixture of boiled lentils with a tadka or tempering of ghee and red chillies. Churma is made of coarsely ground wheat sweetened with ghee and jaggery or sugar. ",
    },
    {
      id: 64,
      category: "Food",
      title: "Rajasthani Food Platter Iconic Dishes To Try",
      image:
        "https://www.whiskaffair.com/wp-content/uploads/2020/09/Ker-Sangri-2-1.jpg",
      description:
        "Ker and sangri are two popular Rajasthani dishes. Ker is a tangy and peppery wild berry, while sangri is a type of long bean that is grown abundantly in the desert areas of Jaisalmer and Barmer. During droughts, sangri becomes a mainstay as it is 53% protein. Legend has it that during a famine in Rajasthan, villagers found these two vegetables when all other vegetation had withered away.",
    },
    {
      id: 65,
      category: "Food",
      title: "The Land of Bihar and its Wholesome Food",
      image:
        "https://cookishcreation.com/wp-content/uploads/2021/11/Vapa-Puli-Cookish-Creation.jpg",
      description:
        "A discussion on Bihari cuisine is incomplete without the mention of two of its most prominent dishes, which always represent this region, Dal-Pitha and Litti Chokha. Dal-Pitha is a unique food made using rice flour, kneaded into a dough using ghee or oil, rolled flat and stuffed with jaggery (for the sweet Pitha) or chana dal mixture (for the savoury version). It is then steamed in a steaming container.",
    },
    {
      id: 66,
      category: "Food",
      title: "Bihar Foods: What Bihar People Love To Eat",
      image:
        "https://www.adotrip.com/public/images/blogs/master_images/60ace9b10805e-Top_Dishes_of_Bihar.jpg",
      description:
        "The eastern part of the Indian subcontinent is where the state of Bihar is located. This landlocked area is well-known for its ancient customs and historical landmarks, such as Bodh Gaya, the place of Buddha's enlightenment, the antiquated Nalanda University, the lovely and lilting Bhojpuri language, and many other things. Bihari cuisine offers numerous unique dishes, but sadly they are not well known throughout the rest of the nation",
    },
    {
      id: 67,
      category: "Food",
      title: "Famous Food Delicacies of Tamil Nadu",
      image: "https://i.ndtvimg.com/i/2015-10/dosa_625x350_51444723752.jpg",
      description:
        "Tamil Nadu is a magnificent state that is located in the southernmost part of India. This region of the country is blessed with rich culture, tradition and flavoursome cuisines. So, if you visit Tamil Nadu, you should definitely try some of its local cuisines. There are countless mouthwatering traditional foods in Tamil Nadu that need to be explored by every food lover.",
    },
    {
      id: 68,
      category: "Food",
      title: "Basundi: Thickened Milk Delight",
      image: "https://realbharat.org/wp-content/uploads/2018/03/basundi.jpg",
      description:
        "Thickened and sweetened milk, basundi is a high-energy dessert laced with dry fruits and cardamom. Though it ranks high in calories it is definitely a refreshing treat when served cold at any time of the day. Cooking high-fat content milk over slow flame lends it a thick creamy texture. ",
    },
    {
      id: 69,
      category: "Food",
      title: " Khajali from Porbandar",
      image:
        "https://jamnadasghariwala.com/resources/front/images/product/KHAJALI-ShahJamnadasCGhariwala-Surat.jpg",
      description:
        "Khajali is a Gujarati snack made from simple ingredients like flour, water, and ghee. Its flakey texture just melts into your mouth. Porbandar is famous for this traditional Gujarati snack which can be enjoyed with a cup of hot beverage. It also pairs perfectly with a cup of evening tea",
    },
    {
      id: 70,
      category: "Food",
      title: " Dry Fruit Kachori from Jamnagar",
      image:
        "https://5.imimg.com/data5/QS/PD/XL/SELLER-82485359/special-jamnagar-famous-dry-fruit-kachori.jpg",
      description:
        "Dry fruit kachori is a golden crispy deep-fried ball stuffed with dry fruit and some coconut. It is perfect as an evening snack and is loved by almost everyone. Additionally, you can try Heera-Moti ice cream from Ram Dairy for the sweet journey of Jamnagar. ",
    },
  ]);

  return (
    <>
      <StoreData.Provider value={{ newsData }}>
        {/* <BollyWood />
        <Fitness />
        <Food />
        <HollyWood />
        <Tech /> */}
        {props.children}
      </StoreData.Provider>
    </>
  );
}
