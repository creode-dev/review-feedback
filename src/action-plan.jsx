import React from 'react';
import { CheckCircle, Circle, TrendingUp, Users, BookOpen, Calendar, Heart, MessageSquare, Award, Zap } from 'lucide-react';

const COLORS = {
  coral: '#FD7777',
  white: '#FFFFFF',
  lightGrey: '#EDEDEF',
  darkGrey: '#292928',
  borderGrey: '#ddd'
};

const ActionPlanDashboard = () => {
  const actions = [
    {
      category: 'Professional Development',
      icon: BookOpen,
      color: '#4CAF50',
      items: [
        {
          action: 'Personal Development Plans (PDPs)',
          status: 'implemented',
          description: 'Individual PDPs where team members identify their training requirements - these will be addressed as they arise'
        },
        {
          action: 'Regular Reviews',
          status: 'implemented',
          description: 'Formal review process established to track progress and identify development needs'
        },
        {
          action: 'Udemy Access',
          status: 'available',
          description: 'Access to Udemy training resources - browse the library to find courses that support your development'
        },
        {
          action: 'Process Documentation',
          status: 'in-progress',
          description: 'Being built out as part of our systemisation and productisation effort'
        },
        {
          action: 'Creode Lunch - Knowledge Sharing',
          status: 're-introducing',
          description: 'Re-introducing the knowledge sharing element to Creode Lunch sessions'
        }
      ]
    },
    {
      category: 'Recognition & Compensation',
      icon: Award,
      color: '#FF9800',
      items: [
        {
          action: 'Annual Pay Reviews',
          status: 'implemented',
          description: 'Structured annual pay reviews (June cycle)'
        },
        {
          action: 'Team Shout-Outs',
          status: 'implemented',
          description: 'Regular team shout-outs during Creode Lunch to celebrate achievements'
        },
        {
          action: 'Peer-to-Peer Recognition',
          status: 'implemented',
          description: 'An established feature of our monthly Creode Lunch.'
        },
        {
          action: 'Open to Suggestions',
          status: 'ongoing',
          description: 'We\'re open to suggestions for additional recognition initiatives'
        }
      ]
    },
    {
      category: 'Communication & Transparency',
      icon: MessageSquare,
      color: '#2196F3',
      items: [
        {
          action: 'Regular Company Updates',
          status: 'implemented',
          description: 'Regular updates shared during Creode Lunch sessions'
        },
        {
          action: 'Systemisation & Process',
          status: 'in-progress',
          description: 'Ongoing work to improve process visibility and consistency across teams'
        },
        {
          action: 'Better Project Visibility',
          status: 'in-progress',
          description: 'Part of the systemisation effort to make it clearer who\'s working on what'
        }
      ]
    },
    {
      category: 'Culture & Working Environment',
      icon: Heart,
      color: COLORS.coral,
      items: [
        {
          action: 'Clarity on Time Off & Holidays',
          status: 'implemented',
          description: 'Clear policies and processes for managing time off and holidays'
        },
        {
          action: 'Shared Cultural Ownership',
          status: 'ongoing',
          description: 'Organisational culture is defined by more than social engagement; it is built on professional conduct, mutual respect, and accountability. Every team member contributes to the standards and environment we operate in daily.'
        },
        {
          action: 'Leading by Example',
          status: 'ongoing',
          description: 'We recognise and encourage the many instances where team members model our core values. Consistently demonstrating these positive professional behaviours reinforces the standard for the entire agency.'
        }
      ]
    },
    {
      category: 'Systems & Processes',
      icon: Zap,
      color: '#9C27B0',
      items: [
        {
          action: 'Process Standardisation',
          status: 'in-progress',
          description: 'Working on systemisation and productisation to create consistent, clear processes'
        },
        {
          action: 'Tool Consistency',
          status: 'in-progress',
          description: 'Standardising how we use tools like Productive across teams'
        }
      ]
    }
  ];

  const getStatusBadge = (status) => {
    const statusConfig = {
      'implemented': { color: '#4CAF50', text: 'Implemented', icon: CheckCircle },
      'in-progress': { color: '#FF9800', text: 'In Progress', icon: Circle },
      'available': { color: '#2196F3', text: 'Available Now', icon: CheckCircle },
      're-introducing': { color: '#9C27B0', text: 'Re-introducing', icon: TrendingUp },
      'ongoing': { color: '#607D8B', text: 'Ongoing', icon: Circle }
    };

    const config = statusConfig[status] || statusConfig['in-progress'];
    const Icon = config.icon;

    return (
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: config.color + '20',
        color: config.color,
        padding: '4px 12px',
        borderRadius: '20px',
        fontSize: '18px',
        fontWeight: '600',
        textTransform: 'uppercase'
      }}>
        <Icon size={12} />
        {config.text}
      </div>
    );
  };

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
            What We're Doing About It
          </h1>
          <p style={{ margin: 0, color: '#666', fontSize: '18px', lineHeight: '1.6', maxWidth: '800px' }}>
            Based on your feedback, here are the actions we've implemented and the work currently in progress. 
            This is an ongoing effort - we're committed to continuous improvement.
          </p>
        </div>

        {/* Summary Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            background: COLORS.white,
            padding: '24px',
            borderRadius: '12px',
            border: `1px solid ${COLORS.borderGrey}`,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '50px', fontWeight: '700', color: '#4CAF50' }}>8</div>
            <div style={{ fontSize: '18px', color: '#666', marginTop: '4px' }}>Actions Implemented</div>
          </div>
          <div style={{
            background: COLORS.white,
            padding: '24px',
            borderRadius: '12px',
            border: `1px solid ${COLORS.borderGrey}`,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '50px', fontWeight: '700', color: '#FF9800' }}>5</div>
            <div style={{ fontSize: '18px', color: '#666', marginTop: '4px' }}>Currently In Progress</div>
          </div>
          <div style={{
            background: COLORS.white,
            padding: '24px',
            borderRadius: '12px',
            border: `1px solid ${COLORS.borderGrey}`,
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '50px', fontWeight: '700', color: COLORS.coral }}>5</div>
            <div style={{ fontSize: '18px', color: '#666', marginTop: '4px' }}>Key Focus Areas</div>
          </div>
        </div>

        {/* Action Categories */}
        <div style={{ display: 'grid', gap: '32px' }}>
          {actions.map((category, idx) => {
            const Icon = category.icon;
            return (
              <div key={idx} style={{
                background: COLORS.white,
                padding: '32px',
                borderRadius: '12px',
                border: `1px solid ${COLORS.borderGrey}`
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    background: category.color + '20',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={24} color={category.color} />
                  </div>
                  <h2 style={{
                    margin: 0,
                    color: COLORS.darkGrey,
                    fontSize: '26px',
                    fontWeight: '600'
                  }}>
                    {category.category}
                  </h2>
                </div>

                <div style={{ display: 'grid', gap: '16px' }}>
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{
                      background: COLORS.lightGrey,
                      padding: '20px',
                      borderRadius: '8px',
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'start'
                    }}>
                      <div style={{ flex: 1 }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '8px'
                        }}>
                          <h3 style={{
                            margin: 0,
                            color: COLORS.darkGrey,
                            fontSize: '20px',
                            fontWeight: '600'
                          }}>
                            {item.action}
                          </h3>
                          {getStatusBadge(item.status)}
                        </div>
                        <p style={{
                          margin: 0,
                          color: '#666',
                          fontSize: '18px',
                          lineHeight: '1.6'
                        }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Principles */}
        <div style={{
          background: COLORS.white,
          padding: '32px',
          borderRadius: '12px',
          border: `2px solid ${COLORS.coral}`,
          marginTop: '32px'
        }}>
          <h2 style={{
            margin: '0 0 20px 0',
            color: COLORS.darkGrey,
            fontSize: '26px',
            fontWeight: '600'
          }}>
            Our Approach
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            <div>
              <h3 style={{
                margin: '0 0 8px 0',
                color: COLORS.coral,
                fontSize: '20px',
                fontWeight: '600'
              }}>
                Bottom-Up Development
              </h3>
              <p style={{
                margin: 0,
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                Training and development starts with you. Identify what you need in your PDP, and we'll work to make it happen.
              </p>
            </div>
            <div>
              <h3 style={{
                margin: '0 0 8px 0',
                color: COLORS.coral,
                fontSize: '20px',
                fontWeight: '600'
              }}>
                Culture is Collective
              </h3>
              <p style={{
                margin: 0,
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                Everyone shapes our culture through daily actions - how we work, communicate, and support each other matters.
              </p>
            </div>
            <div>
              <h3 style={{
                margin: '0 0 8px 0',
                color: COLORS.coral,
                fontSize: '20px',
                fontWeight: '600'
              }}>
                Continuous Improvement
              </h3>
              <p style={{
                margin: 0,
                fontSize: '18px',
                color: '#666',
                lineHeight: '1.6'
              }}>
                This isn't a one-time effort. We're committed to ongoing improvement based on your feedback and our collective learning.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          background: COLORS.lightGrey,
          padding: '24px',
          borderRadius: '12px',
          marginTop: '32px',
          textAlign: 'center'
        }}>
          <p style={{
            margin: 0,
            color: '#666',
            fontSize: '18px',
            lineHeight: '1.6'
          }}>
            Have suggestions for other areas we should address? <br />
            We're open to ideas - let's keep the conversation going.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActionPlanDashboard;
