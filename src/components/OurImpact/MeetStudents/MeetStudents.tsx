import React from 'react';
import { useState } from 'react';
import { useSite } from '../../../cms/ContentContext';
import { mediaUrl } from '../../../cms/media';

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
                <img src={student.imageSrc} alt={student.name} className="w-64 h-64 object-cover rounded-lg mx-auto mb-4" />
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
                        <img src={student.imageSrc} alt={student.name} className="w-64 h-64 object-cover rounded-lg mx-auto mb-4" />
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
    const page = useSite().impactPage;
    const studentData = page.students.map((student) => ({ ...student, imageSrc: mediaUrl(student.image) }));
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
            <h2 className="text-4xl font-bold text-center text-primary-blue mb-8">{page.studentsTitle}</h2>
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