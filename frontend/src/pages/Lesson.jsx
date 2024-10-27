import React, { useState } from 'react';
import { Progress } from '../components/ui//progress';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { 
  Volume2, 
  Star, 
  Trophy, 
  Book, 
  Pencil, 
  MessageSquare,
  CheckCircle,
  XCircle,
  RotateCcw,
  Bookmark,
  GraduationCap,
  Edit3,
  BookOpen,
  Save
} from 'lucide-react';
const TabIcon = ({ icon: Icon, label }) => (
  <div className="flex flex-col items-center gap-1">
    <Icon className="h-5 w-5" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

const Lesson = () => {
  const [activeTab, setActiveTab] = useState('learn');
  const [level, setLevel] = useState(1);
  const [experience, setExperience] = useState(0);
  const [streak, setStreak] = useState(0);

  const hebrewAlphabet = [
    {
      hebrew: 'א',
      name: 'Alef',
      pronunciation: 'Silent',
      numerical: '1',
      examples: ['אבא (father)', 'אמא (mother)'],
    },
  ];

  const grammarLessons = [
    {
      title: 'Basic Sentence Structure',
      content: 'Hebrew sentences typically follow a Subject-Verb-Object (SVO) structure...',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6 p-4">
		<Card className="bg-gradient-to-br from-blue-600 via-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <Trophy className="h-8 w-8" />
              <span className="text-2xl font-bold">Level {level}</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-yellow-300" />
              <span className="text-xl">Streak: {streak} days</span>
            </div>
          </div>
          <Progress 
            value={(experience / 1000) * 100} 
            className="h-3 bg-white/30 rounded-full"
          />
          <div className="mt-3 text-sm font-medium">{experience}/1000 XP to next level</div>
        </CardContent>
      </Card>
      {/* Main Learning Interface */}
      <div className="shadow-lg border-0 rounded-lg overflow-hidden">
        <div className="p-4 bg-gray-50/50">
          <div className="grid grid-cols-5 gap-2">
            <button onClick={() => setActiveTab('learn')} className={`py-4 ${activeTab === 'learn' ? 'bg-gray-200' : ''}`}>
              <TabIcon icon={GraduationCap} label="Learn" />
            </button>
            <button onClick={() => setActiveTab('practice')} className={`py-4 ${activeTab === 'practice' ? 'bg-gray-200' : ''}`}>
              <TabIcon icon={BookOpen} label="Practice" />
            </button>
            <button onClick={() => setActiveTab('grammar')} className={`py-4 ${activeTab === 'grammar' ? 'bg-gray-200' : ''}`}>
              <TabIcon icon={Book} label="Grammar" />
            </button>
            <button onClick={() => setActiveTab('writing')} className={`py-4 ${activeTab === 'writing' ? 'bg-gray-200' : ''}`}>
              <TabIcon icon={Edit3} label="Writing" />
            </button>
            <button onClick={() => setActiveTab('saved')} className={`py-4 ${activeTab === 'saved' ? 'bg-gray-200' : ''}`}>
              <TabIcon icon={Save} label="Saved" />
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 bg-white">
          {activeTab === 'learn' && (
            <div>
              <h3 className="font-bold text-xl">Alphabet</h3>
              <div className="text-8xl font-bold">{hebrewAlphabet[0].hebrew}</div>
              <div className="text-2xl">{hebrewAlphabet[0].name}</div>
              <p>Pronunciation: {hebrewAlphabet[0].pronunciation}</p>
              <p>Examples:</p>
              {hebrewAlphabet[0].examples.map((example, index) => (
                <div key={index}>{example}</div>
              ))}
            </div>
          )}

          {activeTab === 'practice' && (
            <div>
              <h3 className="font-bold text-xl">Practice</h3>
              <p>Practice content goes here.</p>
            </div>
          )}

          {activeTab === 'grammar' && (
            <div>
              <h3 className="font-bold text-xl">Grammar</h3>
              {grammarLessons.map((lesson, index) => (
                <div key={index}>
                  <h4>{lesson.title}</h4>
                  <p>{lesson.content}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'writing' && (
            <div>
              <h3 className="font-bold text-xl">Writing</h3>
              <p>Writing practice content goes here.</p>
            </div>
          )}

          {activeTab === 'saved' && (
            <div>
              <h3 className="font-bold text-xl">Saved Words</h3>
              <p>Your saved words will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lesson;
