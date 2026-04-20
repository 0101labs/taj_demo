// Taj PWA — Stay screen (mobile key + concierge + in-room)

const StayScreen = ({ tokens, onBack }) => {
  const t = tokens;
  const [keyActive, setKeyActive] = React.useState(false);

  return (
    <div style={{ background: t.bg, minHeight: '100%', paddingBottom: 100 }}>
      {/* Top */}
      <div style={{ padding: '56px 24px 8px' }}>
        <Eyebrow color={t.gold} tracking={3}>YOUR STAY</Eyebrow>
        <Serif size={28} color={t.ink} style={{ marginTop: 4 }} italic>
          Welcome, Mr. Shah
        </Serif>
        <div style={{ fontFamily: t.sans, fontSize: 12, color: t.inkMuted, marginTop: 6 }}>
          Room 412 · Heritage Suite · Checks out Apr 17
        </div>
      </div>

      {/* Key card */}
      <div style={{ padding: '24px 20px 0' }}>
        <div style={{
          position: 'relative', borderRadius: t.r_lg, overflow: 'hidden',
          background: `linear-gradient(135deg, ${t.ink} 0%, #2A1F10 60%, ${t.goldDeep} 100%)`,
          padding: 24, color: t.bg,
          boxShadow: t.shadowMed, minHeight: 220,
        }}>
          {/* jali pattern background */}
          <svg width="100%" height="100%" viewBox="0 0 300 220" style={{
            position: 'absolute', inset: 0, opacity: 0.1,
          }}>
            {Array.from({ length: 12 }).map((_, r) =>
              Array.from({ length: 16 }).map((_, c) => (
                <circle key={`${r}-${c}`} cx={c * 20 + 10} cy={r * 20 + 10} r="4"
                  fill="none" stroke={t.goldLight} strokeWidth="0.8"/>
              ))
            )}
          </svg>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 }}>
            <div>
              <Eyebrow color="rgba(246,238,220,0.6)" tracking={2.5}>ROOM KEY</Eyebrow>
              <Serif size={42} color={t.bg} style={{ marginTop: 4, letterSpacing: -1 }}>412</Serif>
            </div>
            <div style={{ textAlign: 'right' }}>
              <TajWordmark color={t.goldLight} size={13} tracking={9}/>
              <div style={{ fontFamily: t.sans, fontSize: 9, color: 'rgba(246,238,220,0.6)', letterSpacing: 1.2, marginTop: 4 }}>
                MAHAL PALACE · MUMBAI
              </div>
            </div>
          </div>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div style={{ fontFamily: t.sans, fontSize: 10, color: 'rgba(246,238,220,0.6)', letterSpacing: 1.2, textTransform: 'uppercase' }}>
                Valid until
              </div>
              <div style={{ fontFamily: t.serif, fontSize: 17, color: t.goldLight, marginTop: 2 }}>
                Apr 17, 11:00 AM
              </div>
            </div>
            <button onClick={() => setKeyActive(!keyActive)} style={{
              width: 72, height: 72, borderRadius: '50%',
              background: keyActive ? t.goldLight : 'rgba(255,255,255,0.08)',
              border: `1.5px solid ${keyActive ? t.goldLight : 'rgba(246,238,220,0.3)'}`,
              color: keyActive ? t.ink : t.goldLight,
              cursor: 'pointer', transition: 'all 0.3s',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: keyActive ? `0 0 30px ${t.goldLight}55` : 'none',
            }}>{Icon.key}</button>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 10, fontFamily: t.sans, fontSize: 11, color: t.inkMuted }}>
          {keyActive ? 'Hold near the door' : 'Tap the key to unlock'}
        </div>
      </div>

      {/* Quick actions */}
      <div style={{ padding: '28px 20px 0' }}>
        <Eyebrow color={t.gold} tracking={2}>◆  At your service</Eyebrow>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 12,
        }}>
          {[
            { icon: Icon.chat, label: 'Concierge', sub: 'Reply in 2 min' },
            { icon: Icon.dine, label: 'In-room dining', sub: '24 hours' },
            { icon: Icon.spa, label: 'Book Jiva', sub: '3 slots today' },
            { icon: Icon.leaf, label: 'Housekeeping', sub: 'Request service' },
          ].map(a => (
            <div key={a.label} style={{
              padding: 14, borderRadius: t.r_md,
              background: t.bgElevated, border: `1px solid ${t.hairline}`,
              boxShadow: t.shadowSoft, cursor: 'pointer',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: t.goldPale, color: t.gold,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 10,
              }}>{a.icon}</div>
              <div style={{ fontFamily: t.serif, fontSize: 16, color: t.ink }}>{a.label}</div>
              <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkMuted, marginTop: 2 }}>
                {a.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In-room controls */}
      <div style={{ padding: '28px 20px 0' }}>
        <Eyebrow color={t.gold} tracking={2}>◆  Room controls</Eyebrow>
        <div style={{
          marginTop: 12, background: t.bgElevated, borderRadius: t.r_md,
          border: `1px solid ${t.hairline}`, padding: '6px 16px',
        }}>
          <ControlRow t={t} label="Climate" val="22°C · Cool"/>
          <div style={{ height: 1, background: t.hairline }}/>
          <ControlRow t={t} label="Lights" val="Evening scene"/>
          <div style={{ height: 1, background: t.hairline }}/>
          <ControlRow t={t} label="Do not disturb" val="Off"/>
        </div>
      </div>

      {/* Today's itinerary */}
      <div style={{ padding: '28px 20px 0' }}>
        <Eyebrow color={t.gold} tracking={2}>◆  Today, Apr 15</Eyebrow>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          {[
            { time: '6:30 AM', name: 'Sunrise Yoga', place: 'Seafront lawn', dotColor: t.gold },
            { time: '1:00 PM', name: 'Lunch, Golden Dragon', place: 'Reserved · 2 guests', dotColor: t.oxblood },
            { time: '4:30 PM', name: 'Heritage Walk', place: 'Meet at lobby concierge', dotColor: t.teal },
          ].map(i => (
            <div key={i.time} style={{
              display: 'flex', gap: 12, padding: 14, borderRadius: t.r_md,
              background: t.bgElevated, border: `1px solid ${t.hairline}`,
            }}>
              <div style={{ textAlign: 'right', width: 60 }}>
                <div style={{ fontFamily: t.sans, fontSize: 11, color: t.ink, fontWeight: 500 }}>{i.time}</div>
              </div>
              <div style={{ position: 'relative', width: 2 }}>
                <div style={{ position: 'absolute', left: 0, top: 4, width: 8, height: 8, borderRadius: '50%', background: i.dotColor, transform: 'translateX(-3px)' }}/>
              </div>
              <div style={{ flex: 1, paddingLeft: 10 }}>
                <div style={{ fontFamily: t.serif, fontSize: 16, color: t.ink }}>{i.name}</div>
                <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>{i.place}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ControlRow = ({ t, label, val }) => (
  <div style={{ padding: '12px 0', display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1, fontFamily: t.serif, fontSize: 16, color: t.ink }}>{label}</div>
    <div style={{ fontFamily: t.sans, fontSize: 12, color: t.inkMuted, marginRight: 8 }}>{val}</div>
    <div style={{ color: t.gold }}>{Icon.chevRight}</div>
  </div>
);

window.StayScreen = StayScreen;
