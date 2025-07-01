import React from 'react';
import { useState } from 'react';
import anmol from '../../../assets/anmolimpact.png';
import rekha from '../../../assets/rekhaImpact.png';

const studentData = [
    {
        name: 'Anmol Pun Magar',
        imageSrc: anmol, // Placeholder Image
        shortBio: 'From the serene green hills of Lukum in Rukum, a remote village inhabited by the Magar community, comes a boy whose journey reflects resilience.....',
        fullStory: `Case Study: Anmol Pun Magar\n\nFrom the serene green hills of Lukum in Rukum, a remote village inhabited by the Magar community, comes a boy whose journey reflects resilience and a relentless pursuit of education. Meet Anmol Pun Magar, a 15-year-old ninth grader at Bloom Nepal School.\n\nAnmol's early life in Lukum was filled with laughter, freedom, and a deep connection to nature. He fondly remembers his childhood games like guccha, hide and seek and the camaraderie with his village friends. "Life was simple, and the hills were home," he says. The peace and greenery of Lukum are things he still misses while living in the fast-paced Kathmandu Valley.\n\nBut Anmol has always known that dreams demand effort and sometimes, sacrifice. He dreams of joining the British Army, like the Gurkhas before him, and understands that strength without education is not enough. "I have to be smart and strong," he says with unwavering clarity. His resolve is what brought him back to Bloom Nepal School after an unexpected detour.\n\nDuring the COVID-19 pandemic, Anmol had to leave Kathmandu and return to his village. It was a happy return in many ways with reunions with old friends, the fresh air of the hills but it came with a cost. Online education was nearly impossible in Lukum due to weak electricity and poor network access. Still determined, Anmol enrolled in the local school to continue learning, even if the resources were limited. But deep down, he knew he belonged in Bloom.\n\nOnce the pandemic restrictions loosened, Anmol began convincing his parents to return to Kathmandu. His village friends were puzzled as to why he wanted to leave the fun and comfort of home for more homework and strict routines? But Anmol never wavered. His persistence paid off: his parents agreed to move back, and Bloom Nepal School welcomed him once again. Soon after, he became a proud CANSHIP scholar.\n\nSince returning, Anmol has shown remarkable progress in his academics, growing by [Insert Academic Growth %] over the past months. His teachers speak highly of his discipline and focus, noting how he makes the most of every learning opportunity.\n\nBut his growth hasn't been limited to the classroom. Anmol has also become more active in extracurricular activities, showing [Insert Extracurricular Engagement Growth %] improvement. He plays football passionately, trains regularly, and was recently selected for his school's upcoming football tournament. His agility and commitment make him a natural athlete and a step closer to his British Army dream.\n\nHe also participates in other school programs like dance and drawing competitions and has earned a reputation for being cheerful, confident, and inclusive. Living in a hostel hasn't been easy. He misses his family and his village but his goal keeps him grounded. "I'll visit home one day as someone my village can be proud of," he says.\n\nAnmol is also proud of his identity. He continues to speak his native Magar language, something many children are beginning to lose in urban schools. "It's who I am," he says. And who he is, a determined, humble, and future-focused young boy is exactly why Canopy believes in him.\n\nThrough the CANSHIP scholarship, Anmol's path is clearer, his steps are stronger, and his dream is one step closer. He reminds us that potential exists in every village, waiting to be nurtured not just with books, but with belief.`
    },
    {
        name: 'Rekha Bhujel',
        imageSrc: rekha, // Placeholder Image
        shortBio: 'For Rekha Bhujel, the Nepali language is not just a school subject. It is a lifeline to her roots, a thread connecting her to her home in the highlands of.....',
        fullStory: `Case Study: Rekha Bhujel\n\nFor Rekha Bhujel, a tenth grader at Shree Janakalyan School in Kathmandu, the Nepali language is not just a school subject. It is a lifeline to her roots, a thread connecting her to her home in the highlands of Okhaldhunga. Rekha carries a mission that's bigger than her textbooks: to redefine what education looks like in her village and to become the teacher she wished she had.\n\nRekha's day begins long before most of her peers have even opened their eyes. She wakes up early, studies for an hour, and then prepares breakfast for her entire family. This quiet discipline speaks volumes about her values. While many teenagers are still hitting the snooze button, Rekha is already investing in her future and in the well-being of those around her.\n\nHer family moved from Okhaldhunga to Kathmandu with one goal in mind: access to quality education. That decision, led by her parents, gave Rekha the opportunity to observe two very different worlds. In Kathmandu, she found more resources, better-trained teachers, and a broader perspective. In contrast, she still remembers how schools back home would close during planting season, how qualified teachers were scarce, and how some families saw education as optional.\n\nThat contrast sparked a fire in Rekha. She began to think critically about not just what she was learning, but why. She often talks about the importance of understanding the cultural and economic barriers that keep children from learning. For Rekha, true reform means more than new buildings or new books, it means making education relevant, accessible, and rooted in community understanding.\n\nHer dream is to become a Nepali teacher. Not just any teacher, but the kind who uplifts communities, inspires students, and stands as a voice of reason in a world still influenced by superstitions and limiting traditions. Rekha sees teachers as quiet revolutionaries who work in the background but change everything. She wants to be that kind of leader.\n\nSince becoming a CANSHIP scholar, Rekha has shown significant growth in both her academic performance [Insert Academic Growth %] and extracurricular involvement [Insert Extracurricular Engagement Growth %]. She participates actively in school programs, contributes thoughtfully in class discussions, and brings a level of maturity far beyond her age.\n\nRekha also has a unique ability to reflect on her own culture with both love and critical thought. She is respectful of traditions but not afraid to question practices that prevent progress. She dreams of starting programs in Okhaldhunga that will keep schools running year-round, bring in qualified teachers, and support children who face financial hardship. She wants every child in her hometown to see education not as a privilege, but as a right.\n\n"I aspire to be one of those people known for their contribution to society and as the go-to person for educational assistance," she says. "Along with that, I also want to be a support system for those facing financial challenges."\n\nRekha Bhujel is a powerful example of what happens when determination meets opportunity. Her dream of becoming a teacher is not just a career choice but a commitment to her community. With the support of Canopy, Rekha is transforming from a student into a changemaker.`
    }
];

interface Student {
    name: string;
    imageSrc: string;
    shortBio: string;
    fullStory: string;
}

const StoryModal: React.FC<{ student: Student; onClose: () => void }> = ({ student, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4" onClick={onClose}>
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8" onClick={e => e.stopPropagation()}>
                <img src={student.imageSrc} alt={student.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-primary-orange" />
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl sm:text-3xl font-bold text-primary-orange">{student.name}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
                </div>
                <div className="text-gray-600 space-y-4 prose">
                    {student.fullStory.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const StudentCard: React.FC<{ student: Student; onClick: () => void }> = ({ student, onClick }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const handleFlipAndOpen = () => {
        if (isFlipped || isAnimating) return;
        setIsFlipped(true);
        setIsAnimating(true);
        setTimeout(() => {
            onClick();
        }, 300);
        setTimeout(() => {
            setIsFlipped(false);
            setIsAnimating(false);
        }, 1500);
    };

    return (
        <div className="[perspective:1000px] w-full max-w-sm">
            <div
                className={`relative w-full transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
                onClick={handleFlipAndOpen}
            >
                <div className="[backface-visibility:hidden] w-full cursor-pointer">
                    <div className="bg-[#FFFBF2] rounded-xl p-5 text-center shadow-md hover:shadow-lg transition-shadow">
                        <img src={student.imageSrc} alt={student.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <h3 className="text-2xl font-bold text-primary-orange mb-2">{student.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">{student.shortBio}</p>
                        <button
                            onClick={e => { e.stopPropagation(); handleFlipAndOpen(); }}
                            className="mt-1 px-1 py-1 bg-primary-orange text-white text-sm rounded-lg shadow hover:bg-primary-cyan transition-colors"
                        >
                            Read More
                        </button>
                    </div>
                </div>
                <div className="absolute top-0 left-0 [backface-visibility:hidden] [transform:rotateY(180deg)] w-full">
                    <div className="bg-[#FFFBF2] rounded-xl p-5 text-center shadow-md h-[364px]"></div>
                </div>
            </div>
        </div>
    );
};

const MeetOurStudents: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

    const handleOpenModal = (student: Student) => {
        setSelectedStudent(student);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedStudent(null);
    };

    return (
        <section className="py-16">
            <h2 className="text-4xl font-bold text-center text-primary-cyan mb-8">Meet Our Students</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-4">
                {studentData.map(student => (
                    <StudentCard key={student.name} student={student} onClick={() => handleOpenModal(student)} />
                ))}
            </div>
            {modalOpen && selectedStudent && <StoryModal student={selectedStudent} onClose={handleCloseModal} />}
        </section>
    );
};

export default MeetOurStudents;