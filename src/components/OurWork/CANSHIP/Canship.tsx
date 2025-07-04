import React from 'react';
import heroImg from '../../../assets/canship.jpg';
import canshipLifecycle from '../../../assets/canshiplifecycle.png';
import canshipBottom from '../../../assets/canshipBottom.jpg';
import canshipImpact from '../../../assets/canshipImpact.png';

const CanopyScholarshipPage = () => {
  return (
    <div className="min-h-screen bg-white mt-28">
      {/* Hero Image at the very top */}
      <img
        src={heroImg}
        alt="Canopy Nepal Scholarship Hero"
        className="w-full h-[500px] object-cover mb-8"
      />

      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-blue mb-8">
          Canopy Nepal Scholarship Program
        </h1>
        <div className='mt-4'>
        <p className="text-gray-700 text-xl leading-relaxed mb-8">
                CANSHIP, short for Canopy Scholarship Program, is our long-term commitment to supporting 
                students through their entire educational journey.
              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
                At Canopy, we believe scholarships should do more than cover fees. That's why CANSHIP offers 
                holistic support: school materials, nutritious meals, mentorship, psychosocial care, and hands-on 
                learning opportunities. <span className="font-semibold text-primary-blue">It's a program built not just to help students stay in school, but to 
                help them grow, lead, and thrive.</span>
              </p>
              </div>
      </div>

      {/* Second Section with Image */}
      {/* <img
        src={secondSection}
        alt="CANSHIP Section Divider"
        className="w-full h-[400px] object-cover object-center"
        style={{ maxHeight: '400px' }}
      /> */}

      <div className="bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full text-center">
              <p className="text-gray-700 text-xl leading-relaxed mb-8">
                With our long-term support and mentorship, CANSHIP helps break the cycle of poverty, 
                empowering young people with the skills, confidence, and choices they need to shape their 
                futures.
              </p>
              <p className=" text-xl leading-relaxed">
                <span className='text-primary-blue font-semibold text-xl'>And it doesn't end at graduation.</span> Many of our scholars go on to pursue higher education, 
                launch careers, and land jobs that allow them to support themselves and their families, creating 
                real change in their lives and communities.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Section - Single Image */}
      <div className= "px-6 py-12 pb-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue text-center">
            Canopy Scholar Lifecycle
          </h2>
          
          <div className="flex justify-center">
            <img 
              src={canshipLifecycle}
              alt="Canopy Scholar Lifecycle Flowchart"
              className="w-full max-w-6xl h-auto"
            />
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className=" px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-8">Impact</h2>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-blue mr-3 mt-1">•</span>
                  <div className="text-xl">
                    <span className="font-semibold text-xl">Retention and Completion:</span> Scholars stay in school year after year, even when many of their peers drop out.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-3 mt-1 text-xl">•</span>
                  <div className="text-xl">
                    <span className="font-semibold text-xl">Academic Progress:</span> Improved test scores, grade promotions, and graduation rates.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-3 mt-1 text-xl">•</span>
                  <div className="text-xl">
                    <span className="font-semibold text-xl">Wellbeing:</span> Increased confidence, better mental health, improved attendance due to meals and psychosocial support.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-3 mt-1 text-xl">•</span>
                  <div className="text-xl">
                    <span className="font-semibold text-xl">Skills Development:</span> Public speaking, critical thinking, digital literacy, storytelling, leadership, etc.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-blue mr-3 mt-1 text-xl">•</span>
                  <div className="text-xl">
                    <span className="font-semibold text-xl">Post-Program Outcomes:</span> Scholars pursuing higher education, vocational training, or entering the job market with readiness.
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-end items-stretch">
              <img 
                src={canshipImpact}
                alt="Student and mentor interaction"
                className="rounded-lg h-auto object-cover"
                style={{  }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl mb-2">
              <span className='font-bold text-primary-blue'>100% employed</span> within one year of graduation
            </h3>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl mb-2">
            <span className='font-bold text-primary-blue'>Avg X% increase</span> in family income after student enters workforce
            </h3>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl  mb-2">
            <span className='font-bold text-primary-blue'>X scholars</span> have joined Canopy as mentors for younger scholars
            </h3>
          </div>
        </div>
      </div>
      <img
        src={canshipBottom}
        alt="CANSHIP Section Divider"
        className="w-full h-[500px] object-cover object-center"
        style={{ maxHeight: '500px' }}
      />
    </div>
    
  );
};

export default CanopyScholarshipPage;