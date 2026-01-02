import React, { useState } from 'react';
import DirectorFeedback from './360-directors-feedback';
import StaffReview from './staff-review-aggregated';
import CreodePurpose from './creode-purpose';
import ActionPlan from './action-plan';

const COLORS = {
  coral: '#FD7777',
  white: '#FFFFFF',
  darkGrey: '#292928'
};

function App() {
  const [view, setView] = useState('staff');

  const navButtonStyle = (isActive) => ({
    background: isActive ? COLORS.coral : 'transparent',
    border: `2px solid ${COLORS.coral}`,
    color: COLORS.white,
    padding: '10px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: '600',
    whiteSpace: 'nowrap'
  });

  return (
    <div>
      {/* Navigation */}
      <div style={{
        background: COLORS.darkGrey,
        padding: '20px 40px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{
            color: COLORS.white,
            fontSize: '28px',
            fontWeight: '700'
          }}>
            Creode Feedback Analysis
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setView('staff')}
              style={navButtonStyle(view === 'staff')}
            >
              Team Feedback
            </button>
            <button 
              onClick={() => setView('directors')}
              style={navButtonStyle(view === 'directors')}
            >
              Director Feedback
            </button>
            <button 
              onClick={() => setView('action-plan')}
              style={navButtonStyle(view === 'action-plan')}
            >
              Action Plan
            </button>
            <button 
              onClick={() => setView('purpose')}
              style={navButtonStyle(view === 'purpose')}
            >
              Creode Purpose
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '40px' }}>
        {view === 'staff' && <StaffReview />}
        {view === 'directors' && <DirectorFeedback />}
        {view === 'action-plan' && <ActionPlan />}
        {view === 'purpose' && <CreodePurpose />}
      </div>
    </div>
  );
}

export default App;
