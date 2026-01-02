import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { User, ThumbsUp, ThumbsDown, MessageSquare, TrendingUp } from 'lucide-react';

const COLORS = {
  coral: '#FD7777',
  white: '#FFFFFF',
  lightGrey: '#EDEDEF',
  darkGrey: '#292928',
  borderGrey: '#ddd'
};

// Company-wide scores from all 7 responses
const companyScores = [
  { category: 'Development Support', avg: 5.4, scores: [6, 6, 4, 6, 3, 7, 6] },
  { category: 'Trust & Accountability', avg: 6.1, scores: [7, 7, 4, 7, 4, 8, 6] },
  { category: 'Culture Clarity', avg: 4.0, scores: [4, 5, 2, 5, 3, 6, 3] },
  { category: 'Culture Alignment', avg: 4.1, scores: [4, 5, 2, 5, 3, 7, 3] },
  { category: 'Processes', avg: 4.3, scores: [3, 5, 2, 7, 3, 6, 6] },
  { category: 'Communication', avg: 5.3, scores: [6, 5, 3, 6, 4, 7, 6] },
  { category: 'Overall Experience', avg: 6.4, scores: [7, 6, 4, 7, 6, 8, 7] }
];

// 360 Feedback for each director (from 7 team members)
const directorsData = {
  Guy: {
    role: 'CEO',
    strengths: [
      "Accommodating, encourages involvement across projects, actively shares his knowledge with the team",
      "Adapts well to different situations and is quick to suggest solutions when problems come up",
      "Innovative, seems to be ahead of the curve tech/AI wise, good listener, always takes time to help when very busy",
      "Great at suggesting new ways of working, trying to encourage development and improvement",
      "Context switching, directness, big picture thinking, getting clients to see our way of thinking, strong decision maker, always seeking new opportunities",
      "Problem solving and thinking on his feet in a tricky situation",
      "Genuinely helpful and thoughtful in all his responses, calm approach to stressful situations creates a grounded environment"
    ],
    improvements: [
      "Online communication. Sometimes difficult to get an answer to a question if it's not face to face",
      "Follow-through is the gap. We kick things off strong on consistency, and then they stall",
      "You've got too many plates spinning at once. Map out what only you can do and what can move to others",
      "Starts lots of things/implements new ways of working but things often get left/forgotten about, could communicate better",
      "Persisting with processes that have been set in place",
      "Sometimes difficult to get hold of (very busy schedule)",
      "Can sometimes feel hard to reach, occasionally steps in and overrides team choices where the team's approach might have led to smoother outcomes"
    ],
    themes: {
      positive: ['Problem solving', 'Innovation', 'Big picture thinking', 'Adaptability', 'Supportive'],
      negative: ['Follow-through', 'Availability', 'Consistency', 'Communication']
    }
  },
  Saz: {
    role: 'Director',
    strengths: [
      "Brings energy and motivation to the team, gives productive feedback and encouragement",
      "Has added real value since joining: fresh perspective, thoughtful challenges in the right places, positive nudge to how we operate",
      "Great creative, trying really hard to improve the culture of the agency and is straight up",
      "Good at getting straight to the point, trying to encourage everyone to get involved",
      "Quality of her work, teaching ability and patience, action oriented and assertive, directness, detail oriented, makes an effort daily to encourage a positive culture",
      "Manages her time well, always got loads on but never looks flustered, great attention to detail",
      "Excellent at fostering a more positive and engaged team culture and making people feel comfortable approaching her, proactiveness and empathy really noticeable"
    ],
    improvements: [
      "More active sharing of the creative process and knowledge - showing wider teams how you took something and created a brand concept would be beneficial",
      "Passion for design and eye for detail are obvious and raise the bar, but feedback can come in hot and fast which can make you feel less approachable. Slowing the first reaction and starting with questions would keep standards high while making collaboration easier",
      "If given more free rein changes would happen quicker",
      "Be more open to other people's suggestions, and follow processes set in place",
      "Sometimes feel she is listening to respond, not to listen. Internal dev feedback is sometimes overruled and devs feel under-considered",
      "Sometimes takes a while to respond to a Slack message (very busy)",
      "Occasional moments where communication around updates or next steps can move quickly, which can leave team unsure about who should take action on what"
    ],
    themes: {
      positive: ['Culture building', 'Quality work', 'Teaching', 'Energy', 'Detail oriented'],
      negative: ['Feedback delivery', 'Listening', 'Knowledge sharing', 'Response time']
    }
  },
  Andy: {
    role: 'Director',
    strengths: [
      "Approachable, encourages your thoughts and opinions in discussions which makes work feel like a collaboration",
      "Easy to talk to and consistently brings a positive vibe, adds personal touch to how we work and shows real care for the team",
      "Helpful, kind, good with clients and good all round guy",
      "Good at keeping spirits up and getting everyone motivated",
      "Caring and considerate of others, does not let his mood affect others except in a positive way, really helpful and informative when talking through UX work, listens to everyone, seen improvement in dipping into different roles where needed",
      "Brings a great energy to the office, great quality control",
      "Kindness and humour make him great to have on the team, adds a lot to overall team dynamic, brings uplifting energy, easy to talk to, always curious about new software tools"
    ],
    improvements: [
      "Online communication. Sometimes replies on Slack take a while",
      "Big on full ownership, which is great. When cover is needed though, you sometimes resist taking it on. Being quicker to step in would keep things moving",
      "Don't see all that Andy does - which can mean it feels like Guy, Ben and now Saz doing a lot of the 'do' in terms of being directors/new business and he can appear to take more of a back seat",
      "Following processes set in place",
      "Sometimes does not offer help until towards the end of something and jumps in last minute. Needs to take more ownership of client projects. Confidence in his opinions",
      "Raising project challenges or blockers earlier would help avoid last-minute pressure and ensure team can support without workloads increasing unexpectedly"
    ],
    themes: {
      positive: ['Approachability', 'Positive energy', 'Caring', 'UX expertise', 'Team morale'],
      negative: ['Ownership', 'Proactivity', 'Visibility', 'Communication timing']
    }
  },
  BenR: {
    role: 'Director',
    strengths: [
      "Always seems engaged in meetings and discussions, and checks in on people",
      "Seeing real clarity in your direction, and your measured approach is paying off. The improvement in your attitude and mindset stands out—it's a big shift, and you've earned the praise",
      "Good with clients, new business",
      "Keeping things organised and structured whether it's in the office or around work that we're doing",
      "Seen an improvement in overall mood and positivity recently, can see a clear dedication to the business, great in client calls and communications",
      "Appreciate how open and transparent all directors are, especially when times are hard. Ben usually the one who shares details. Appreciate that transparency",
      "Clear Ben has made noticeable improvement in his communication and how confidently he shares work and updates, bringing positivity to the work. His hard work really noticeable the past few months"
    ],
    improvements: [
      "Same as Saz, actively sharing knowledge and talking through work done to develop a brand would be helpful for those not on those projects all the time",
      "You lean hard into brand—which makes sense given your background—but it can box you in. There's real growth for you and for Creode if you step into other parts of the business. Mosaic is a perfect chance to get closer to the technical side",
      "Not always open to other ways of doing things (thinks his way is the right way), quite old school, but can see he's working on it",
      "Feels a bit absent at times when we're in the office",
      "When in negative mood it can impact rest of the office. Has been known to interrupt people and talk over people in meetings (positive change seen recently). Could engage more with wider business: development",
      "Areas for improvement hard to identify - maintaining the momentum he's shown would be a great continuation"
    ],
    themes: {
      positive: ['Improvement trajectory', 'Client skills', 'Organisation', 'Transparency', 'Positivity'],
      negative: ['Flexibility', 'Cross-functional engagement', 'Mood impact', 'Office presence']
    }
  }
};

// General management feedback themes
const generalFeedback = [
  "With smaller team, it's harder to see who's on what. Everyone needs to do a quick handover before they're off",
  "Need to get control of Productive. People frustrated—time tracking, basic flows, all used differently. Need single owner to map process",
  "Wish cost of living/inflation was considered on an annual basis with small across the board increases",
  "Would love to see official flexi time in place for all staff",
  "All things individual teams are working on/using that managers might not be aware of and therefore not being able to sell these services to clients",
  "Processes should be followed by everyone, even management",
  "Peer review would be a good idea as a way to gather feedback"
];

const Dashboard360 = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);

  const DirectorCard = ({ name, data }) => (
    <div 
      onClick={() => setSelectedDirector(name)}
      style={{
        background: COLORS.white,
        padding: '24px',
        borderRadius: '12px',
        border: `2px solid ${selectedDirector === name ? COLORS.coral : COLORS.borderGrey}`,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        ':hover': { transform: 'translateY(-2px)' }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
        <div>
          <h3 style={{ margin: 0, color: COLORS.darkGrey, fontSize: '26px', fontWeight: '700' }}>{name}</h3>
          <p style={{ margin: '4px 0 0 0', color: '#666', fontSize: '18px' }}>{data.role}</p>
        </div>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: COLORS.lightGrey,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <User size={24} color={COLORS.coral} />
        </div>
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <ThumbsUp size={16} color='#4CAF50' />
          <span style={{ fontSize: '18px', fontWeight: '600', color: COLORS.darkGrey }}>TOP STRENGTHS</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {data.themes.positive.slice(0, 4).map((theme, idx) => (
            <span key={idx} style={{
              background: '#E8F5E9',
              color: '#2E7D32',
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              {theme}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <TrendingUp size={16} color={COLORS.coral} />
          <span style={{ fontSize: '18px', fontWeight: '600', color: COLORS.darkGrey }}>DEVELOPMENT AREAS</span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {data.themes.negative.slice(0, 4).map((theme, idx) => (
            <span key={idx} style={{
              background: '#FFF3E0',
              color: '#E65100',
              padding: '4px 10px',
              borderRadius: '12px',
              fontSize: '18px',
              fontWeight: '600'
            }}>
              {theme}
            </span>
          ))}
        </div>
      </div>

      <div style={{
        marginTop: '16px',
        padding: '12px',
        background: COLORS.lightGrey,
        borderRadius: '8px',
        fontSize: '18px',
        color: '#666',
        textAlign: 'center'
      }}>
        {data.strengths.length} strengths • {data.improvements.length} areas for growth
      </div>
    </div>
  );

  const DetailView = ({ name, data }) => (
    <div style={{ background: COLORS.white, padding: '32px', borderRadius: '12px', border: `2px solid ${COLORS.coral}` }}>
      <button 
        onClick={() => setSelectedDirector(null)}
        style={{
          background: COLORS.lightGrey,
          border: 'none',
          padding: '8px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '24px',
          fontSize: '18px'
        }}
      >
        ← Back to Overview
      </button>

      <div style={{ marginBottom: '32px' }}>
        <h2 style={{ margin: '0 0 8px 0', color: COLORS.darkGrey, fontSize: '34px' }}>{name}</h2>
        <p style={{ margin: 0, color: '#666', fontSize: '18px' }}>{data.role}</p>
      </div>

      {/* Strengths */}
      <div style={{ marginBottom: '32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <ThumbsUp size={24} color='#4CAF50' />
          <h3 style={{ margin: 0, color: COLORS.darkGrey, fontSize: '22px' }}>What {name} Does Particularly Well</h3>
        </div>
        <div style={{ display: 'grid', gap: '12px' }}>
          {data.strengths.map((strength, idx) => (
            <div key={idx} style={{
              background: '#E8F5E9',
              padding: '16px',
              borderRadius: '8px',
              borderLeft: `4px solid #4CAF50`,
              fontSize: '18px',
              lineHeight: '1.6',
              color: COLORS.darkGrey
            }}>
              {strength}
            </div>
          ))}
        </div>
      </div>

      {/* Improvements */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <TrendingUp size={24} color={COLORS.coral} />
          <h3 style={{ margin: 0, color: COLORS.darkGrey, fontSize: '22px' }}>What {name} Could Improve On</h3>
        </div>
        <div style={{ display: 'grid', gap: '12px' }}>
          {data.improvements.map((improvement, idx) => (
            <div key={idx} style={{
              background: '#FFF3E0',
              padding: '16px',
              borderRadius: '8px',
              borderLeft: `4px solid ${COLORS.coral}`,
              fontSize: '18px',
              lineHeight: '1.6',
              color: COLORS.darkGrey
            }}>
              {improvement}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (selectedDirector) {
    return (
      <div style={{ minHeight: '100vh', background: COLORS.lightGrey, padding: '40px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <DetailView name={selectedDirector} data={directorsData[selectedDirector]} />
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: COLORS.lightGrey, padding: '40px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ margin: '0 0 8px 0', color: COLORS.darkGrey, fontSize: '38px', fontWeight: '700' }}>
            Director Feedback
          </h1>
          <p style={{ margin: 0, color: '#666', fontSize: '18px' }}>
            Anonymous feedback • November 2024
          </p>
        </div>

        {/* Company Scores */}
        <div style={{
          background: COLORS.white,
          padding: '32px',
          borderRadius: '12px',
          border: `1px solid ${COLORS.borderGrey}`,
          marginBottom: '32px'
        }}>
          <h2 style={{ margin: '0 0 24px 0', color: COLORS.darkGrey, fontSize: '26px', fontWeight: '600' }}>
            Company-Wide Scores
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={companyScores}>
              <CartesianGrid strokeDasharray="3 3" stroke={COLORS.borderGrey} />
              <XAxis dataKey="category" tick={{ fill: COLORS.darkGrey, fontSize: 18 }} angle={-45} textAnchor="end" height={100} />
              <YAxis domain={[0, 10]} tick={{ fill: COLORS.darkGrey, fontSize: 18 }} />
              <Tooltip contentStyle={{ background: COLORS.white, border: `1px solid ${COLORS.borderGrey}`, borderRadius: '8px', fontSize: '18px' }} />
              <Bar dataKey="avg" radius={[8, 8, 0, 0]}>
                {companyScores.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.avg < 4 ? COLORS.coral : entry.avg < 6 ? '#FFC107' : '#4CAF50'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Director Cards */}
        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ margin: '0 0 24px 0', color: COLORS.darkGrey, fontSize: '26px', fontWeight: '600' }}>
            Individual Director Feedback (Click for Details)
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
            {Object.entries(directorsData).map(([name, data]) => (
              <DirectorCard key={name} name={name} data={data} />
            ))}
          </div>
        </div>

        {/* General Feedback */}
        <div style={{
          background: COLORS.white,
          padding: '32px',
          borderRadius: '12px',
          border: `1px solid ${COLORS.borderGrey}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <MessageSquare size={24} color={COLORS.coral} />
            <h2 style={{ margin: 0, color: COLORS.darkGrey, fontSize: '26px', fontWeight: '600' }}>
              What The Management Team Should Know
            </h2>
          </div>
          <div style={{ display: 'grid', gap: '12px' }}>
            {generalFeedback.map((feedback, idx) => (
              <div key={idx} style={{
                background: COLORS.lightGrey,
                padding: '16px',
                borderRadius: '8px',
                borderLeft: `4px solid ${COLORS.coral}`,
                fontSize: '18px',
                lineHeight: '1.6',
                color: COLORS.darkGrey
              }}>
                {feedback}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard360;
