import React from 'react';
import heroImg from '../../../assets/kbtop.png';
import secondSection from '../../../assets/kbmiddle.png';
import kblifecycle from '../../../assets/kblifecycle.png';
import canshipBottom from '../../../assets/canshipbottom.png';
import kbImpact from '../../../assets/kbImpact.png';

const KathaBunaun = () => {
  return (
    <div className="min-h-screen bg-white mt-28">
      {/* Hero Image at the very top */}
      <img
        src={heroImg}
        alt="Canopy Nepal Scholarship Hero"
        className="w-full h-[500px] object-cover object-bottom mb-8"
      />

      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-red mb-2">
          Katha Bunaun
        </h1>
        <div className='mt-4'>
        <p className="text-gray-700 text-xl leading-relaxed mb-4">
        Katha Bunaun, which translates to "Weaving Stories," is <span className='text-primary-red font-semibold'>Canopy Nepal's signature story-based learning program</span> that brings classrooms to life.

              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
              Through interactive sessions, students explore language, identity, values, creativity, self-expression and critical thinking by crafting and sharing stories. Whether it's a tale about their village, a dream for the future, or a social issue they care about, students learn to express themselves with confidence and curiosity.
              </p>
              </div>
      </div>

      {/* Second Section with Image */}
      <img
        src={secondSection}
        alt="CANSHIP Section Divider"
        className="w-full h-[400px] object-cover object-center"
        style={{ maxHeight: '400px' }}
      />

      <div className="bg-white px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full text-center">
              <p className=" text-xl leading-relaxed mb-8">
              Katha Bunaun isn't just about storytelling, it's about building the foundational skills that traditional classrooms often overlook: empathy, communication, collaboration, and voice.

              </p>
              <p className=" text-xl leading-relaxed">Designed to align with local curriculum and 
                <span className='text-primary-red font-semibold text-xl'> delivered in partnership with teachers and local governments, Katha Bunaun is Nepal's only storytelling program 
              </span> that creates a new kind of classroom, one where every child has the space to imagine, reflect, and speak up.
              </p>
              <p className='mt-4 text-xl leading-relaxed'>
              Because when students tell their own stories, they start to believe in their own power.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Section - Single Image */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-red text-center">
          Katha Bunaun Incorporation in the System
          </h2>
          <div className="flex justify-center">
            <img 
              src={kblifecycle}
              alt="Canopy Scholar Lifecycle Flowchart"
              className="w-full max-w-6xl h-[250px]"
            />
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-red mb-8">Impact</h2>
              <ul className="space-y-6 text-gray-700 text-xl">
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Engagement & Expression:</span> Students who were once shy or disengaged now speak up, participate actively, and take pride in their ideas and identities.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Foundational Skills:</span> Improvements in communication, empathy, creativity, and critical thinking, skills rarely prioritized in traditional classrooms.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Academic Improvement:</span> Increased classroom participation, engagement in extracurricular activities, comprehension, and retention by connecting curriculum with personal experiences and imagination.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Wellbeing & Confidence:</span> Students report feeling more confident, seen, and heard. Teachers observe better peer relationships and expression.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Leadership & Collaboration:</span> Students learn to listen and collaborate while leading group discussions and projects, often guiding their friends in shared storytelling activities.
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-end items-stretch">
              <img 
                src={kbImpact}
                alt="Student and mentor interaction"
                className="rounded-xl h-auto object-cover transform -scale-x-100"
                style={{  }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white px-6 py-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-primary-red mb-2">
              Local governments have increased their budget by XX on average to incorporate storytelling into their curriculum.
            </h3>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-primary-red mb-2">
              XXX schools have adapted interactive learning and child-centered learning values.
            </h3>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-primary-red mb-2">
              Students have increased engagement in school activities by XXX%.
            </h3>
          </div>
        </div>
      </div>
        
        <div className="text-center mx-auto max-w-2xl my-4">
          <p className="text-2xl leading-relaxed">
            And by 2030, we aim to bring this program to
            <span className='text-primary-red font-semibold text-2xl'> half a million students, </span>
            making storytelling not an extra but an essential part of every Nepali classroom.
          </p>
        </div>
 
    </div>
    
  );
};

export default KathaBunaun;