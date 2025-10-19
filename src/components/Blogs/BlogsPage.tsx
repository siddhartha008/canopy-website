import React, { useState } from 'react';
import exploringImg from '../../assets/blogpic/exploring.png';
import smallImg from '../../assets/blogpic/small.png';
import weavingImg from '../../assets/blogpic/weaving.png';

// Placeholder images for blogs (replace with real images when available)
// You can place blog cover images under src/assets/blogs/ and import them similarly to Featured

type BlogItem = {
  id: number;
  title: string;
  url: string;
  image: string;
  excerpt: string;
  content: string;
};

// For now, use Featured-like card structure; populate with provided 3 blogs
const blogsData: BlogItem[] = [
  {
    id: 1,
    title: 'Exploring the Horizon',
    url: '#',
    image: exploringImg,
    excerpt: '2021',
    content: `Nepal’s Education system is but a blurred line that distinguishes knowledge from understanding. Students study because they feel obliged to. They aim to excel due to the fear of failure and not a love for learning. The system is flawed because the learning aspect is based upon a mechanism, “rote learning”. A technique that is used to instil fundamentals of mathematics and sciences, languages and arts, any and every other subject from elementary level. Students groom themselves under the shadows of society’s expectation and it gallops their true yearning for knowledge. Young students are naturally inquisitive and imaginative, but our education system limits their horizon of creativity with this mechanism of rote learning. Not only does the system have such loopholes in its delivery, but the majority of the public, as well as private schools in Nepal, also aren’t even well-facilitated infrastructure wise.

Oprah Winfrey rightly said, “The biggest adventure you can ever take is to live the life of your dreams”. Do schools in our country make this adventure seem achievable? This question reverberated around the meeting hall at the office of Canopy Nepal. The Canopy team was long aware of this real face of the education system in Nepal and this was the root of frustration in the team. Hence, the idea of introducing interactive learning to expand critical thinking skills and boost creativity in students came forth in the year 2015.

The first session of this interactive learning program was taken in Shanti Nikunja School located in Basantapur. To make things different from a usual classroom learning environment,  students were arranged in a circular seminar system. It all started with the idea of discussing a book. For the first session, under the facilitation of Ms Roni Lama, Roald Dahl’s Matilda was chosen as the book for discussion. Students were given free space and were allowed to explore their creativity. This was the initial motive of these sessions, to expand free and critical thinking capacity in students to embolden their learning experience. Along with the development in their thinking skills, another major observation was also an improvement in their quality of English i.e. basic aspects like reading, writing, comprehending, listening, speaking and creativity among others. Thus, these sessions were named, “English Improvement Classes”.

Over time, as this intensive one-month long program got initiated in many different schools, including public as well as private schools, a different dimension was added to this program. It now turned into a program that aimed to develop multifaceted skills such as reading, writing, listening, speaking, creative thinking and critical thinking while strengthening their overall learning abilities so that they can transform everyday knowledge into lifelong learning. The curriculum is enriched with unique and interactive methods of imparting skills to help students immerse themselves in the idea that “learning is fun”.

When introduced to schools as “English Improvement Classes”, it feels as if the essence of this program is not given justice as the English language is merely a medium of delivery of this learning technique. It does improve the fundamentals of the English Language as observed after completion of many EIC sessions but it isn’t the primary objective. The main motive under the hood is Skill Enhancement in students. It is about promoting skills in students to make education less monotonous and more likeable for students, to spark in them a passion for learning, a love for knowledge and a hunger for understanding.

Currently, EIC is one of the flagship programs of Canopy Nepal. With a tangible curriculum, EIC has come a long way and it has led the team to create more programs focusing on other students’ skills. What started with a piece of paper to plan and design ideas for sessions has become one of the most powerful programs in schools. The month-long session is broken down into week-wise activities. Starting from the most important step which is building rapport and bonding with the students, the activities gradually start focusing on the skill enhancements based on pre evaluations and then pushing learners to newer focus areas. Finally, the facilitators conduct the post-evaluation session and assess the learners’ growth. The facilitators take note of their growth in areas of meta-cognitive awareness, articulation, grammar, sentence structure, self-expression, punctuation, critical analysis and creativity.

Getting started and redesigning EIC was not as easy as it may sound. Getting and training facilitators, convincing schools, at least, during the initial phase and also working on the curriculum were challenging. But today, when students respond with commendable growth in their learning abilities, it all seems worth the wear. We can say that EIC has been the backbone of the learners’ hub programs and it has given confidence to the team and gained its share of love from the students. This story doesn’t end here, with every student that can unfold their calibre and enhance their skills, this story continues to explore its horizon.`,
  },
  {
    id: 2,
    title: 'Small Things Matter A Lot',
    url: '#',
    image: smallImg,
    excerpt: '2021',
    content: `Things to bring- A water bottle, Notebook, Pen, and positive energy :)

On the 25th of January 2021, I got an invitation from Mr Angirash Karki (referred to as Angirash Dada later) to an event organized by Canopy Nepal. It was the Katha Bunaun program in Unique Nepal Academy, a school in Lokanthali. On the 26th of January, with a backpack containing a water bottle, a notebook, and a pen, I left home and reached Lokanthali with the littlest idea of what it was all about. As soon as I entered the gates of the school, I greeted Ms Monal Bhattarai (or Monal Didi with love), with a stupid grin on my face. She then introduced me to two of the Learners’ Hub facilitators- Briksha and Keith. I was already overwhelmed by the warmth in their smiles and the hint of friendliness I sensed around them.

About 10 mins passed by, Monal di had just been briefed about the Katha Bunaun program and what was expected of me in the sessions. “It is really to allow students to find self-expression”, her words were reverberating in the back of my mind as I climbed up the stairs to the classes. I had almost reached in front of the class when I saw a student join his hands and said, “Good morning ma’am.” with a slightly shy smile on his face. I snapped back to reality, so to speak,  but that moment was too surreal for me, I couldn’t react or respond to it. Hence, I stood still and ended up staring foolishly at that child as if  I didn’t understand what “Good morning ma’am” meant. I was still trying to process what exactly just happened when suddenly, students started switching rooms to fit the arrangement that was designed for them by the facilitators.

It was the second day of the Katha Bunaun session and the facilitators had completed a part of pre evaluating the students. They had been introduced to the basic steps of story writing and it was now time for them to start weaving their stories. I was thrilled by the energy of these students as they jumped around switching rooms. Eventually, as they settled down, the facilitators started engaging these students in many ways. It was awe-inspiring to see how the facilitators were able to empathize with the students so well. They were making the teaching-learning environment welcoming and interactive. I realized how the students called them, “ma’am” and “sir” but treated them as one of them. It was very interesting to witness this bond of friendship the facilitators had established with the students. They were taking sessions based on a specific to-do list but the energy they shared knew no bounds.

As I switched from one room to another observing both the groups of students, I noticed how these children were making the best of the present. While seeing these kids interact in class, I had a euphoric moment where I realized that while there is always so much to complain about, there are more things to cherish about life. My younger self was never able to express herself with no reluctance but these children were doing so with ease. They were learning something new, knowing each other better, working with their friends, playing games, and sharing stories. Frankly speaking, these were little things but it seemed to matter a lot to them because the joy reflected in their eyes was simply ineffable. After these classroom interactions, the day ended with quite a lot of physical activities including energizers, audio-visual stories and their enactments, and many more.

The following day I was the first to arrive and unsurprisingly the children were keenly anticipating the arrival of their dear sir and ma’am. They glanced at me with looks of expectations and excitement and asked me so many questions about when sessions would start when the facilitators would arrive, and many other inquisitive questions. I replied that their facilitators would be coming soon. Then, they chuckled and went to grab lunch. This day was filled with relatively more indoor activities. The students were all working on their individual stories. Despite the fundamental loopholes in grammatical understanding and the English language in general, these students seemed to apply what had been taught to them about character detailing in story writing pretty well. The best part about this day was that they seemed to enjoy writing stories and working with their friends. It was most heartwarming to see one friend teaching another full of zest. By the end of this day, most students had a well-crafted story and the facilitators were to assess their growth.

The next day was the presentation day where all the students presented their stories in speech. There were unique stories from each student and hearing all of them made the day an eventful one. Of course, the story which remains imprinted on my mind is the one that partially revolved around me. I must say the student who wrote that story did grasp a solid understanding of the character description because he mentioned minute details about me like the pimples on my face rather than just broadly describing me as a “girl” or a “teacher” in this case. Despite how shocking it sounded to my ears, it still brought my heart immense joy to be mentioned in a story written with the energy that the student devoted to it. This day came to an end after all these children presented their stories.

I prepared to leave my house on the 29th of January and the next thing I realized it was the last day of the program already. The children were full of energy that day too as usual. Ms Nikita, one of the facilitators, had also joined us on this day as the emcee and the day before to help students prepare some performances. The children had prepared some dances under her guidance and they performed them one by one on this day. Seeing them dance under those little hours of preparations managed to bring a wide smile to my face again. I can't stress enough how there were countless times I had a huge smile on my face because of these young students. Thereafter, there were speeches from the principal and teachers and a few students. Certificates for the best stories and the best storytellers were distributed and then the students were flocking back to their classes exchanging smiles and flying kisses.

Trust me, I’d been a nerd all along which was a limiting factor for my interpersonal growth. I didn’t want to be enriched with bookish knowledge while not being able to implicate it in practice. While most people believe that emerging out of one's comfort zones is important, I like to differ. I feel like I’m mostly in my  “uncomfortable” zone when I’m sitting on a sofa trying to chill or when I know I lack social skills but opt to reject a social gathering, or when I turn down a hangout with my friends and instead sit at home cluelessly staring at the ceiling. Rather, I like to explore my comfort zones, the ones that get me overwhelmed and overworked, the ones that push me to work under pressure and the ones that bring me real smiles to my face and not merely an instant gratification. Through Katha Bunaun, I learned the skill of appreciation and gratefulness from these students and the team so subtly. It brought innocent and genuine smiles to my face and gave me an eccentric feeling of joy from within.

I’m not sure whether I entered the gates of Unique Nepal with the “positive energy” that was expected from me however there's no denying the fact that I left the gates of Unique Nepal with immeasurable positivity.`,
  },
  {
    id: 3,
    title: 'Weaving Stories of Growth: Katha Bunaun Sessions with UWS',
    url: '#',
    image: weavingImg,
    excerpt: '2021',
    content: `The Learners’ Hub team from Canopy Nepal headed towards the Sankhuwasabha district to hold the Katha Bunaun sessions in collaboration with the United World Schools (UWS), Nepal in late January.

Located in the high and mid-mountainous belt of the Koshi zone in Eastern Nepal, Sankhuwasabha is a district, rich in topography. In the district, the Learners’ Hub team had to conduct sessions in three different schools of UWS in the Nundhaki, Khamare, and Heluwabesi regions. As they prepared to leave for the 19 days long sessions, a spark of joy could be reflected in their eyes and with immense excitement, the team departed.

Nundhaki is situated in an elevated region and it has striking environmental characteristics. Despite being the remotest area among the ones that the team had attended, it was enriched with natural beauty. The session at UWS school, Nundhaki had begun with the pre-evaluation period. During this period, the team had realized the differences in this remote community of people than the urban community. A harsh reality faced by the students unfolded to the team and they tried to adapt to these differences and improvise accordingly. The geographical complexity of the region itself invited a lot of struggle for the students as they had to travel long routes to reach the school and had daily chores to complete.

When the facilitators were first introduced to the students, they were almost like statues. They wouldn’t interact or respond and they displayed maturity rather than childlike traits. In their writing as well as presentation skills, there were some under nourishments. They seemed stiff and reserved during their presentations and there were no crosstalks that the facilitators could observe. It was quite shocking for the facilitators to witness this but as they carved their way to reach out to the students, they too carved themselves out of their reluctance.

When it came to story writing and the learning process, they displayed self-discipline and obedience. They seemed to be good learners and were attentive to every detail that was given to them. Remarkably enough, they had the eagerness and the willingness to learn. Unfortunately, a political strike was announced in the country so chances were that the school would remain closed. However, despite the adversities, almost all the students showed up on the day they were to write the final draft. At this point, it was clear to the facilitators that these young minds had an intriguing willingness to attend the session. By this time, most of the students had become more familiar and less hesitant to bond with the facilitators and weave diverse stories. Their stories got more elaborative and their presentations more expressive. Many students personified characters and also wrote creative pieces of monologues.

Regardless of the unease the students previously displayed, at the end of the day, they were able to seek comfort with the facilitators and come out of the bubble of apprehensiveness they were trapped in. They came up with many personal stories and presented them confidently and the ideas that the stories were based upon were jaw-dropping. On graduation day, these students presented their drama better than ever before given that they hadn’t ever performed to a huge crowd as such. It was a poignant and proud moment for the facilitators. When they were covered with tika all over their faces and draped in khadas and garlands made of flowers.

For the facilitators, the greatest challenge was to form a bond with the students so that they could resonate more with their stories.  There were UWS volunteers in the UWS school, Nundhaki around whom the students weren’t as uncomfortable as they were around the teachers. During the reenactment activity, the students were growing more interactive and the facilitators learned that making the students not view them as “teachers” was the most important to bring out the best in them. The sessions at Nundhaki were an immense success for the team and the students portrayed a gradual but significant growth holistically. With these learnings, the team then moved down to Khamare.

At Khamare, the environment was much different compared to that at Nundhaki. It was at a lower height than Nundhaki and the weather was more humid since the movement of air was blocked by the hills that surrounded the region. As it wasn’t at as elevated a region, it meant that it was also less conservative in its beliefs and lesser remote. The nature of students differed accordingly. As the sessions began, the facilitators realized that the students were not as introverted as they were in Nundhaki.

The school in this region was better privileged in terms of facilitation in comparison to the one at Nundhaki because it was geographically less complex. The students were hence more proactive. The community here was also very diverse in comparison to the previously visited region. They were more open-minded and fairly exposed to urban lifestyles. Students were not as much burdened with household and livestock chores and they were much more energetic than the facilitators had imagined.

Since the nature of the students was so drastically different here than in Nundhaki, the facilitators almost felt a mismatch in the energy level. The stories received from these students during the pre-evaluation were short and common ones. So, the facilitators decided to give them prompts to write stories and almost magically the stories got so much better. The accomplishment of the objective of the program to improve the story writing skills and presentation skills was being reflected in their stories.

Although the facilitators were caught off-guard during the pre-evaluation, it took no time for them to change that and by the time it was the graduation ceremony, most students had woven detailed stories. Therefore, the facilitators had to adapt and improvise to overcome the challenges they were faced with during these sessions. There was a huge number of students here so bonding with them on a personal level was a little challenging. However, the students here showed gestures of affection towards the facilitators which was an overwhelming realization for the facilitators. They left this region with the learning that pre-preparedness was very important as things might not turn out as expected.

With two drastically different experiences, the team then moved further down to Heluwabesi. The school in this region was very close to the hub that the team was temporarily residing in. This region comparatively the most developed hence the school was well facilitated. During the pre-evaluation session in this school, the students seemed less interested in indoor activities that dealt with writing but were greatly enthusiastic about the outdoor activities. But they eventually made improvements under the guidance of the facilitators. The written drafts were enhanced but the students had to be pushed more for burnishing their presentation skills. However, some students were exceptionally able to present interactively.

It was more difficult to bond with the students in this school but the facilitators found ways to reach out to the students beyond the sessions and that helped students get out of their comfort zones. However, the facilitators realized the eagerness of the students to participate was reflected when most of the students showed up for the sessions despite having an occasion of Lhosar which was their local festival. Moreover, the sessions got extended for an additional 2 hours but the students weren’t in a hurry to go back home. The final drafts and presentations were much more demonstrative and they developed the confidence to present to a larger audience. Identifying which activities are best for the students and improvising the activities as per their nature proved to be the most challenging for the facilitators but they could overcome it with informal interaction with the students.

In a nutshell, the 19 days long program left a significant impression on the facilitators as they learned a lot during the process and experienced distinct scenarios. This Katha Bunaun session hence came to a fruitful end on both the students’ and the team’s end. These learnings will be cherished and these memories safe in the hearts and minds of the entire team.`,
  },
];

const BlogModal: React.FC<{ blog: BlogItem; onClose: () => void }> = ({ blog, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8" onClick={e => e.stopPropagation()}>
        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-lg mx-auto mb-4" />
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-orange">{blog.title}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-3xl" aria-label="Close">&times;</button>
        </div>
        <div className="text-gray-700 space-y-4 prose">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogsPage: React.FC = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogItem | null>(null);

  return (
    <section className="bg-white min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-primary-orange mb-14">Blogs</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {blogsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFF6E6] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-6 text-center w-full max-w-sm md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded-xl mb-6 border border-orange-100"
                style={{ background: '#fff' }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {item.title}
              </h3>
              <p className="italic text-gray-600 text-sm mb-1">{item.excerpt}</p>
              <button
                onClick={() => setSelectedBlog(item)}
                className="mt-auto text-primary-orange font-bold text-lg hover:underline"
              >
                Read More &gt;
              </button>
            </div>
          ))}
        </div>
      </div>
      {selectedBlog && (
        <BlogModal blog={selectedBlog} onClose={() => setSelectedBlog(null)} />
      )}
    </section>
  );
};

export default BlogsPage;


