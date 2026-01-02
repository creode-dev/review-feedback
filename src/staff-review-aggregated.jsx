import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie } from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, Award, Users, BookOpen, Heart, MessageSquare } from 'lucide-react';

const COLORS = {
  coral: '#FD7777',
  white: '#FFFFFF',
  lightGrey: '#EDEDEF',
  darkGrey: '#292928',
  borderGrey: '#ddd'
};

// Overall category averages from 8 responses
const categoryAverages = [
  { category: 'Performance', score: 6.75, responses: 8 },
  { category: 'General Skills', score: 6.72, responses: 8 },
  { category: 'Wellbeing', score: 6.50, responses: 8 },
  { category: 'Culture', score: 6.18, responses: 8 },
  { category: 'Training & Development', score: 5.58, responses: 8 }
];

// Specific questions - lowest scoring (areas for improvement)
const lowestScoring = [
  { question: 'Confident in knowing where to access support or resources', score: 4.88, category: 'Training' },
  { question: 'Contributed positively to team culture this year', score: 5.12, category: 'Culture' },
  { question: 'Receive enough feedback and guidance to develop in role', score: 5.12, category: 'Training' },
  { question: 'Feel motivated and connected to company\'s purpose', score: 5.38, category: 'Culture' },
  { question: 'Have access to training and development opportunities', score: 5.50, category: 'Training' },
  { question: 'Communication within Creode is open and transparent', score: 5.62, category: 'Culture' },
  { question: 'Able to learn in ways that suit my preferred style', score: 5.62, category: 'Training' },
  { question: 'Can motivate and positively influence others when needed', score: 5.75, category: 'Skills' },
  { question: 'My contributions are recognised and appreciated', score: 6.00, category: 'Culture' }
];

// Specific questions - highest scoring (strengths)
const highestScoring = [
  { question: 'Have not failed to meet objectives', score: 7.50, category: 'Performance' },
  { question: 'Feel comfortable sharing ideas and concerns within the team', score: 7.38, category: 'Culture' },
  { question: 'Act with accountability and align with company values', score: 7.25, category: 'Skills' },
  { question: 'Willingly share knowledge and collaborate with teammates', score: 7.25, category: 'Skills' },
  { question: 'Understand and respond effectively to client needs', score: 7.12, category: 'Skills' },
  { question: 'Coordinate effectively with other teams for delivery', score: 7.12, category: 'Performance' },
  { question: 'Have a good work-life balance', score: 7.00, category: 'Wellbeing' },
  { question: 'Feel respected and supported by colleagues', score: 7.00, category: 'Culture' },
  { question: 'Adapt flexibly to different roles and challenges', score: 7.00, category: 'Skills' }
];

// Key themes from comments (synthesized, not individual quotes)
const commonThemes = {
  strengths: [
    {
      theme: 'Strong Collaboration',
      description: 'Team members willingly share knowledge and work well together across departments',
      icon: Users,
      mentions: 7
    },
    {
      theme: 'Client Focus',
      description: 'High performance on client work with consistent delivery of campaign objectives',
      icon: Award,
      mentions: 6
    },
    {
      theme: 'Work-Life Balance',
      description: 'Most team members feel they have a good work-life balance',
      icon: Heart,
      mentions: 7
    },
    {
      theme: 'Team Support',
      description: 'Colleagues feel respected and supported by each other',
      icon: Users,
      mentions: 7
    }
  ],
  improvements: [
    {
      theme: 'Training & Development',
      description: 'Lack of structured training opportunities, development plans, and access to learning resources. Team members want more guidance on where to find support.',
      icon: BookOpen,
      mentions: 6,
      urgency: 'high'
    },
    {
      theme: 'Recognition & Appreciation',
      description: 'Team members don\'t feel their contributions are sufficiently recognised or appreciated',
      icon: Award,
      mentions: 4,
      urgency: 'medium'
    },
    {
      theme: 'Communication & Transparency',
      description: 'Communication within Creode could be more open and transparent',
      icon: MessageSquare,
      mentions: 3,
      urgency: 'medium'
    },
    {
      theme: 'Company Purpose & Culture',
      description: 'Unclear company culture and purpose. Team members want more clarity on direction and values',
      icon: TrendingUp,
      mentions: 4,
      urgency: 'medium'
    }
  ]
};

// Sample anonymised feedback quotes organised by theme
const themeFeedback = {
  training: [
    "I haven't had a development plan or check-ins since starting in my new role",
    "I've never been offered any kind of training - I'm often asked to do things without training first",
    "I feel I have hit a wall in terms of my personal development",
    "Would benefit from more frequent one-to-ones and specific training (e.g., Premiere Pro)",
    "Struggle with knowledge gaps in best practices - not sure how to move forward"
  ],
  recognition: [
    "I don't feel the positive impact of Creode's success directly",
    "Worked through lunch, cancelled holidays, logged on Sundays with little to no thanks or appreciation",
    "My good work ethic hasn't made me any more valued within the business"
  ],
  culture: [
    "I don't really know what the culture is at Creode",
    "Business feels like it's been in survival mode - culture needs to be agreed and developed",
    "With over 66% of the team being directors, it feels hierarchical in some ways",
    "Culture doesn't feel focused on employee wellbeing and development"
  ],
  positive: [
    "I am confident in my capabilities for both clients and Creode work",
    "Feel that quality of my code has improved massively due to feedback from fellow devs",
    "I feel comfortable and can talk about concerns - they will be addressed",
    "Appreciate the flexibility given this year during personal difficulties",
    "My role has evolved - would be good if job title reflected this growth"
  ]
};

// Department breakdown
const departmentBreakdown = [
  { department: 'Development', count: 4, avgScore: 6.5 },
  { department: 'Client Services', count: 2, avgScore: 6.2 },
  { department: 'Marketing', count: 1, avgScore: 6.7 },
  { department: 'Design', count: 1, avgScore: 5.8 }
];

const StaffReviewDashboard = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: COLORS.lightGrey,
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ margin: '0 0 8px 0', color: COLORS.darkGrey, fontSize: '38px', fontWeight: '700' }}>
            Team Feedback
          </h1>
          <p style={{ margin: 0, color: '#666', fontSize: '18px' }}>
            October 2025
          </p>
        </div>

        {/* Overall Category Scores */}
        <div style={{
          background: COLORS.white,
          padding: '32px',
          borderRadius: '12px',
          border: `1px solid ${COLORS.borderGrey}`,
          marginBottom: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <TrendingUp size={24} color={COLORS.coral} />
            <h2 style={{ margin: 0, color: COLORS.darkGrey, fontSize: '26px', fontWeight: '600' }}>
              Overall Category Scores
            </h2>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={categoryAverages} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.borderGrey} />
              <XAxis type="number" domain={[0, 8]} tick={{ fill: COLORS.darkGrey, fontSize: 18 }} />
              <YAxis dataKey="category" type="category" width={180} tick={{ fill: COLORS.darkGrey, fontSize: 18 }} />
              <Tooltip contentStyle={{ background: COLORS.white, border: `1px solid ${COLORS.borderGrey}`, borderRadius: '8px', fontSize: '18px' }} />
              <Bar dataKey="score" radius={[0, 8, 8, 0]}>
                {categoryAverages.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={
                    entry.score >= 7 ? '#4CAF50' :
                    entry.score >= 6 ? '#FFC107' :
                    COLORS.coral
                  } />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Strengths and Improvement Areas Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))', gap: '24px', marginBottom: '32px' }}>
          {/* Top Strengths */}
          <div style={{
            background: COLORS.white,
            padding: '32px',
            borderRadius: '12px',
            border: `1px solid ${COLORS.borderGrey}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <Award size={24} color='#4CAF50' />
              <h2 style={{ margin: 0, color: COLORS.darkGrey, fontSize: '22px', fontWeight: '600' }}>
                Top Performing Areas
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {highestScoring.slice(0, 6).map((item, idx) => (
                <div key={idx} style={{
                  background: '#E8F5E9',
                  padding: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '18px', color: COLORS.darkGrey, fontWeight: '500', marginBottom: '4px' }}>
                      {item.question}
                    </div>
                    <div style={{ fontSize: '18px', color: '#666', textTransform: 'uppercase', fontWeight: '600' }}>
                      {item.category}
                    </div>
                  </div>
                  <div style={{
                    background: '#4CAF50',
                    color: COLORS.white,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '18px'
                  }}>
                    {item.score.toFixed(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Areas for Improvement */}
          <div style={{
            background: COLORS.white,
            padding: '32px',
            borderRadius: '12px',
            border: `1px solid ${COLORS.borderGrey}`
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <AlertCircle size={24} color={COLORS.coral} />
              <h2 style={{ margin: 0, color: COLORS.darkGrey, fontSize: '22px', fontWeight: '600' }}>
                Areas Needing Improvement
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {lowestScoring.slice(0, 6).map((item, idx) => (
                <div key={idx} style={{
                  background: '#FFF3E0',
                  padding: '16px',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '18px', color: COLORS.darkGrey, fontWeight: '500', marginBottom: '4px' }}>
                      {item.question}
                    </div>
                    <div style={{ fontSize: '18px', color: '#666', textTransform: 'uppercase', fontWeight: '600' }}>
                      {item.category}
                    </div>
                  </div>
                  <div style={{
                    background: COLORS.coral,
                    color: COLORS.white,
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontWeight: '700',
                    fontSize: '18px'
                  }}>
                    {item.score.toFixed(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Themes */}
        <div style={{
          background: COLORS.white,
          padding: '32px',
          borderRadius: '12px',
          border: `1px solid ${COLORS.borderGrey}`,
          marginBottom: '32px'
        }}>
          <h2 style={{ margin: '0 0 24px 0', color: COLORS.darkGrey, fontSize: '26px', fontWeight: '600' }}>
            Key Themes from Feedback
          </h2>

          {/* Strengths */}
          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: '#4CAF50', fontSize: '20px', fontWeight: '600' }}>
              ✓ What's Working Well
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {commonThemes.strengths.map((theme, idx) => {
                const Icon = theme.icon;
                return (
                  <div key={idx} style={{
                    background: '#E8F5E9',
                    padding: '20px',
                    borderRadius: '12px',
                    borderLeft: `4px solid #4CAF50`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '8px' }}>
                      <div style={{
                        background: COLORS.white,
                        padding: '8px',
                        borderRadius: '8px',
                        display: 'flex'
                      }}>
                        <Icon size={20} color="#4CAF50" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <h4 style={{ margin: '0 0 8px 0', color: COLORS.darkGrey, fontSize: '18px', fontWeight: '600' }}>
                          {theme.theme}
                        </h4>
                        <p style={{ margin: 0, fontSize: '18px', color: '#666', lineHeight: '1.5' }}>
                          {theme.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Improvements */}
          <div>
            <h3 style={{ margin: '0 0 16px 0', color: COLORS.coral, fontSize: '20px', fontWeight: '600' }}>
              ⚠ What Needs Attention
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {commonThemes.improvements.map((theme, idx) => {
                const Icon = theme.icon;
                return (
                  <div key={idx} style={{
                    background: theme.urgency === 'high' ? '#FFEBEE' : '#FFF3E0',
                    padding: '20px',
                    borderRadius: '12px',
                    borderLeft: `4px solid ${theme.urgency === 'high' ? '#D32F2F' : COLORS.coral}`
                  }}>
                    <div style={{ display: 'flex', alignItems: 'start', gap: '12px', marginBottom: '8px' }}>
                      <div style={{
                        background: COLORS.white,
                        padding: '8px',
                        borderRadius: '8px',
                        display: 'flex'
                      }}>
                        <Icon size={20} color={theme.urgency === 'high' ? '#D32F2F' : COLORS.coral} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                          <h4 style={{ margin: 0, color: COLORS.darkGrey, fontSize: '18px', fontWeight: '600' }}>
                            {theme.theme}
                          </h4>
                          {theme.urgency === 'high' && (
                            <span style={{
                              background: '#D32F2F',
                              color: COLORS.white,
                              padding: '2px 8px',
                              borderRadius: '12px',
                              fontSize: '18px',
                              fontWeight: '600',
                              textTransform: 'uppercase'
                            }}>
                              High Priority
                            </span>
                          )}
                        </div>
                        <p style={{ margin: 0, fontSize: '18px', color: '#666', lineHeight: '1.5' }}>
                          {theme.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StaffReviewDashboard;
