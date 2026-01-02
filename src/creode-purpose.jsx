import React from 'react';
import { Target, Compass, Heart, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';

const COLORS = {
  coral: '#FD7777',
  white: '#FFFFFF',
  lightGrey: '#EDEDEF',
  darkGrey: '#292928',
  borderGrey: '#ddd'
};

const CreodePurpose = () => {
  const values = [
    {
      title: 'Own It',
      icon: CheckCircle,
      color: '#4CAF50',
      principles: [
        'Take responsibility for outcomes, not just outputs',
        'See the bigger picture - budget, timeline, goals',
        'Communicate with honesty and transparency',
        'When things go wrong, we fix them'
      ]
    },
    {
      title: 'Solve, Don\'t Shift',
      icon: Lightbulb,
      color: '#FF9800',
      principles: [
        'Clients need solutions, not just services',
        'Use insight and experience to find opportunities',
        'Bring answers, not just questions',
        'Tackle challenges head-on'
      ]
    },
    {
      title: 'Make It Count',
      icon: TrendingUp,
      color: COLORS.coral,
      principles: [
        'Focus on work that moves the needle',
        'Measure what matters',
        'Build client success and agency reputation',
        'Contribute to team and business growth'
      ]
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: COLORS.lightGrey,
      padding: '40px',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h1 style={{ 
            margin: '0 0 16px 0', 
            color: COLORS.darkGrey, 
            fontSize: '50px', 
            fontWeight: '700' 
          }}>
            Creode Purpose
          </h1>
          <p style={{ 
            color: '#666', 
            fontSize: '20px', 
            lineHeight: '1.6',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Our vision, mission, and values guide everything we do
          </p>
        </div>

        {/* Vision and Mission - Hero Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {/* Vision */}
          <div style={{
            background: COLORS.white,
            padding: '48px 40px',
            borderRadius: '16px',
            border: `2px solid ${COLORS.coral}`,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '80px',
              height: '80px',
              background: COLORS.coral + '15',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Target size={40} color={COLORS.coral} />
            </div>
            
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: COLORS.coral,
              letterSpacing: '1px',
              marginBottom: '16px'
            }}>
              Vision
            </div>
            <div style={{
              fontSize: '18px',
              color: '#999',
              marginBottom: '20px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Where we're going
            </div>
            <p style={{
              margin: 0,
              fontSize: '26px',
              lineHeight: '1.5',
              color: COLORS.darkGrey,
              fontWeight: '600'
            }}>
              "To be the go-to partner for financial services challengers who refuse to play it safe."
            </p>
          </div>

          {/* Mission */}
          <div style={{
            background: COLORS.white,
            padding: '48px 40px',
            borderRadius: '16px',
            border: `2px solid ${COLORS.coral}`,
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '80px',
              height: '80px',
              background: COLORS.coral + '15',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Compass size={40} color={COLORS.coral} />
            </div>
            
            <div style={{
              fontSize: '18px',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: COLORS.coral,
              letterSpacing: '1px',
              marginBottom: '16px'
            }}>
              Mission
            </div>
            <div style={{
              fontSize: '18px',
              color: '#999',
              marginBottom: '20px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              What guides us today
            </div>
            <p style={{
              margin: 0,
              fontSize: '26px',
              lineHeight: '1.5',
              color: COLORS.darkGrey,
              fontWeight: '600'
            }}>
              "We turn financial services challengers into market leaders through creative thinking, smart technology, and campaigns that deliver."
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginBottom: '12px'
            }}>
              <Heart size={32} color={COLORS.coral} />
            </div>
            <h2 style={{
              margin: '0 0 8px 0',
              color: COLORS.darkGrey,
              fontSize: '38px',
              fontWeight: '700'
            }}>
              Values
            </h2>
            <p style={{
              margin: 0,
              color: '#666',
              fontSize: '18px'
            }}>
              How we work
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
            gap: '32px'
          }}>
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={idx} style={{
                  background: COLORS.white,
                  padding: '40px',
                  borderRadius: '16px',
                  border: `1px solid ${COLORS.borderGrey}`,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  position: 'relative'
                }}>
                  {/* Value Number Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    width: '40px',
                    height: '40px',
                    background: value.color + '15',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '18px',
                    fontWeight: '700',
                    color: value.color
                  }}>
                    {idx + 1}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: '64px',
                    height: '64px',
                    background: value.color + '20',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    <Icon size={32} color={value.color} />
                  </div>

                  {/* Title */}
                  <h3 style={{
                    margin: '0 0 24px 0',
                    color: COLORS.darkGrey,
                    fontSize: '30px',
                    fontWeight: '700'
                  }}>
                    {value.title}
                  </h3>

                  {/* Principles */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    {value.principles.map((principle, pIdx) => (
                      <div key={pIdx} style={{
                        display: 'flex',
                        alignItems: 'start',
                        gap: '12px'
                      }}>
                        <div style={{
                          minWidth: '6px',
                          width: '6px',
                          height: '6px',
                          background: value.color,
                          borderRadius: '50%',
                          marginTop: '8px'
                        }} />
                        <p style={{
                          margin: 0,
                          fontSize: '18px',
                          lineHeight: '1.6',
                          color: COLORS.darkGrey
                        }}>
                          {principle}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Living Our Values Section */}
        <div style={{
          background: COLORS.darkGrey,
          padding: '48px 40px',
          borderRadius: '16px',
          color: COLORS.white,
          marginTop: '60px'
        }}>
          <h2 style={{
            margin: '0 0 24px 0',
            fontSize: '30px',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            Living Our Values
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div>
              <h3 style={{
                margin: '0 0 12px 0',
                color: COLORS.coral,
                fontSize: '20px',
                fontWeight: '600'
              }}>
                In Client Work
              </h3>
              <p style={{
                margin: 0,
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#ddd'
              }}>
                Our values drive every client interaction - from taking ownership of project outcomes 
                to solving complex challenges and ensuring every piece of work delivers measurable impact.
              </p>
            </div>
            <div>
              <h3 style={{
                margin: '0 0 12px 0',
                color: COLORS.coral,
                fontSize: '20px',
                fontWeight: '600'
              }}>
                In Team Culture
              </h3>
              <p style={{
                margin: 0,
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#ddd'
              }}>
                These aren't just words on a page. They define how we collaborate, communicate, 
                and support each other. Every team member contributes to living these values daily.
              </p>
            </div>
            <div>
              <h3 style={{
                margin: '0 0 12px 0',
                color: COLORS.coral,
                fontSize: '20px',
                fontWeight: '600'
              }}>
                In Growth
              </h3>
              <p style={{
                margin: 0,
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#ddd'
              }}>
                Our commitment to these values helps us grow as individuals and as an agency. 
                They guide our decisions, shape our culture, and drive our success.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Quote */}
        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          padding: '40px',
          background: COLORS.white,
          borderRadius: '16px',
          border: `1px solid ${COLORS.borderGrey}`
        }}>
          <p style={{
            fontSize: '22px',
            fontStyle: 'italic',
            color: COLORS.darkGrey,
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            "We work with financial services challengers who refuse to play it safe - 
            and our values reflect that same bold, accountable, results-driven approach."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreodePurpose;
