// Taj PWA — Trips + NeuPass + Profile + Confirmation

const TripsScreen = ({ tokens, onHotel }) => {
  const t = tokens;
  const upcoming = TAJ_HOTELS[0];
  return (
    <div style={{ background: t.bg, minHeight: '100%', paddingBottom: 100 }}>
      <div style={{ padding: '56px 24px 16px' }}>
        <Eyebrow color={t.gold} tracking={3}>YOUR JOURNEYS</Eyebrow>
        <Serif size={32} color={t.ink} style={{ marginTop: 4 }} italic>Trips</Serif>
      </div>

      <div style={{ padding: '16px 20px' }}>
        <Eyebrow color={t.gold} tracking={2}>◆  Upcoming · in 12 days</Eyebrow>
        <div onClick={() => onHotel(upcoming.id)} style={{
          marginTop: 12, borderRadius: t.r_lg, overflow: 'hidden',
          background: t.bgElevated, boxShadow: t.shadowMed, cursor: 'pointer',
        }}>
          <div style={{ position: 'relative', height: 160 }}>
            <img src={upcoming.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.6))' }}/>
            <div style={{ position: 'absolute', bottom: 14, left: 16, color: '#fff' }}>
              <Eyebrow color="rgba(255,255,255,0.8)" tracking={2}>{upcoming.era}</Eyebrow>
              <Serif size={22} color="#fff" italic style={{ marginTop: 2 }}>{upcoming.name}</Serif>
            </div>
          </div>
          <div style={{ display: 'flex', borderTop: `1px solid ${t.hairline}` }}>
            <TripCell t={t} label="CHECK-IN" val="Apr 14"/>
            <div style={{ width: 1, background: t.hairline }}/>
            <TripCell t={t} label="NIGHTS" val="3"/>
            <div style={{ width: 1, background: t.hairline }}/>
            <TripCell t={t} label="ROOM" val="412"/>
          </div>
        </div>
      </div>

      <div style={{ padding: '20px 20px' }}>
        <Eyebrow color={t.gold} tracking={2}>◆  Past stays</Eyebrow>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          {TAJ_HOTELS.slice(1, 4).map(h => (
            <div key={h.id} onClick={() => onHotel(h.id)} style={{
              padding: 12, display: 'flex', gap: 12, alignItems: 'center',
              background: t.bgElevated, borderRadius: t.r_md,
              border: `1px solid ${t.hairline}`, cursor: 'pointer',
            }}>
              <img src={h.img} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: t.r_sm }}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: t.serif, fontSize: 16, color: t.ink }}>{h.name}</div>
                <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>
                  {h.city} · Nov 2025
                </div>
              </div>
              <div style={{ color: t.inkMuted }}>{Icon.chevRight}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TripCell = ({ t, label, val }) => (
  <div style={{ flex: 1, padding: 14, textAlign: 'center' }}>
    <Eyebrow color={t.inkMuted} tracking={1.2} size={9}>{label}</Eyebrow>
    <div style={{ fontFamily: t.serif, fontSize: 18, color: t.ink, marginTop: 3 }}>{val}</div>
  </div>
);

const NeuPassScreen = ({ tokens }) => {
  const t = tokens;
  const points = 28420;
  const nextTier = 50000;
  const pct = (points / nextTier) * 100;
  return (
    <div style={{ background: t.bg, minHeight: '100%', paddingBottom: 100 }}>
      <div style={{ padding: '56px 24px 16px' }}>
        <Eyebrow color={t.gold} tracking={3}>NEUPASS</Eyebrow>
        <Serif size={30} color={t.ink} style={{ marginTop: 4 }} italic>Good evening,<br/>Aarav Shah</Serif>
      </div>

      {/* Membership card */}
      <div style={{ padding: '16px 20px' }}>
        <div style={{
          position: 'relative', borderRadius: t.r_lg, overflow: 'hidden',
          background: `linear-gradient(135deg, #1A1611, #3A2818 55%, ${t.goldDeep})`,
          padding: 22, color: t.bg, boxShadow: t.shadowDeep, minHeight: 200,
        }}>
          {/* Jali pattern */}
          <svg width="100%" height="100%" viewBox="0 0 300 200" style={{ position: 'absolute', inset: 0, opacity: 0.12 }}>
            {Array.from({ length: 10 }).map((_, r) =>
              Array.from({ length: 14 }).map((_, c) => (
                <g key={`${r}-${c}`}>
                  <circle cx={c * 22 + 12} cy={r * 22 + 10} r="5" fill="none" stroke={t.goldLight} strokeWidth="0.7"/>
                  <path d={`M${c*22+12} ${r*22+4}L${c*22+18} ${r*22+10}L${c*22+12} ${r*22+16}L${c*22+6} ${r*22+10}Z`}
                    fill="none" stroke={t.goldLight} strokeWidth="0.5"/>
                </g>
              ))
            )}
          </svg>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <TajLogo size={26} color={t.goldLight}/>
              <div style={{ marginTop: 8 }}>
                <TajWordmark color={t.goldLight} size={11} tracking={7}/>
                <div style={{ fontFamily: t.sans, fontSize: 9, color: 'rgba(246,238,220,0.55)', letterSpacing: 1.4, marginTop: 2 }}>
                  NEUPASS MEMBER
                </div>
              </div>
            </div>
            <div style={{
              padding: '5px 11px', borderRadius: 999,
              background: t.goldLight, color: t.ink,
              fontFamily: t.sans, fontSize: 10, letterSpacing: 1.5,
              fontWeight: 600, textTransform: 'uppercase',
            }}>Silver</div>
          </div>

          <div style={{ position: 'relative', marginTop: 40 }}>
            <Eyebrow color="rgba(246,238,220,0.6)" tracking={2}>AVAILABLE POINTS</Eyebrow>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
              <Serif size={36} color={t.goldLight} style={{ fontWeight: 500 }}>
                {points.toLocaleString('en-IN')}
              </Serif>
              <div style={{ fontFamily: t.sans, fontSize: 11, color: 'rgba(246,238,220,0.6)', letterSpacing: 1 }}>PTS</div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div style={{ marginTop: 18 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, letterSpacing: 0.5 }}>
              {(nextTier - points).toLocaleString('en-IN')} points to <span style={{ color: t.gold, fontWeight: 600 }}>Gold</span>
            </div>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted }}>{Math.round(pct)}%</div>
          </div>
          <div style={{ height: 4, background: t.hairline, borderRadius: 2, overflow: 'hidden' }}>
            <div style={{ width: `${pct}%`, height: '100%', background: `linear-gradient(90deg, ${t.gold}, ${t.goldLight})`, borderRadius: 2 }}/>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div style={{ padding: '28px 20px 0' }}>
        <Eyebrow color={t.gold} tracking={2}>◆  Your silver privileges</Eyebrow>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          {[
            { name: 'Member rates', sub: 'Save up to 12% on every booking' },
            { name: 'Welcome amenity', sub: 'On arrival at every Taj stay' },
            { name: 'Late check-out', sub: 'Until 2 PM, subject to availability' },
            { name: 'Epicure dining', sub: '25% off at Taj restaurants' },
          ].map(b => (
            <div key={b.name} style={{
              padding: 14, borderRadius: t.r_md,
              background: t.bgElevated, border: `1px solid ${t.hairline}`,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%',
                background: t.goldPale, color: t.gold,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{Icon.check}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: t.serif, fontSize: 15, color: t.ink }}>{b.name}</div>
                <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>{b.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '28px 20px 0' }}>
        <Eyebrow color={t.gold} tracking={2}>◆  Redeem</Eyebrow>
        <div style={{ display: 'flex', gap: 10, overflowX: 'auto', marginTop: 12, scrollbarWidth: 'none' }}>
          {[
            { name: 'Stay at Rambagh', pts: '40k', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80' },
            { name: 'Jiva spa day', pts: '8k', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80' },
            { name: 'Chef\'s table', pts: '12k', img: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=400&q=80' },
          ].map(r => (
            <div key={r.name} style={{
              flex: '0 0 140px', borderRadius: t.r_md, overflow: 'hidden',
              background: t.bgElevated, border: `1px solid ${t.hairline}`,
            }}>
              <img src={r.img} style={{ width: '100%', height: 100, objectFit: 'cover' }}/>
              <div style={{ padding: 12 }}>
                <div style={{ fontFamily: t.serif, fontSize: 14, color: t.ink }}>{r.name}</div>
                <div style={{ fontFamily: t.sans, fontSize: 10, color: t.gold, marginTop: 4, letterSpacing: 1 }}>
                  {r.pts} POINTS
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProfileScreen = ({ tokens }) => {
  const t = tokens;
  return (
    <div style={{ background: t.bg, minHeight: '100%', paddingBottom: 100 }}>
      <div style={{ padding: '56px 24px 24px', textAlign: 'center' }}>
        <div style={{
          width: 88, height: 88, borderRadius: '50%',
          background: `linear-gradient(135deg, ${t.goldPale}, ${t.goldLight})`,
          margin: '0 auto 14px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: t.serif, fontSize: 32, color: t.goldDeep, fontWeight: 500,
          border: `2px solid ${t.gold}`,
        }}>AS</div>
        <Serif size={24} color={t.ink}>Aarav Shah</Serif>
        <div style={{ fontFamily: t.sans, fontSize: 12, color: t.inkMuted, marginTop: 4 }}>
          aarav.shah@email.in
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12,
          padding: '5px 12px', borderRadius: 999,
          background: t.goldPale, color: t.goldDeep,
        }}>
          <span>{Icon.sparkle}</span>
          <Eyebrow color={t.goldDeep} tracking={1.5} size={10}>NEUPASS SILVER · 28,420 PTS</Eyebrow>
        </div>
      </div>

      <div style={{ padding: '0 20px' }}>
        <MenuGroup t={t} items={[
          { label: 'Personal details', icon: Icon.user },
          { label: 'Payment methods', icon: Icon.lock },
          { label: 'Travel preferences', icon: Icon.compass },
        ]}/>
        <MenuGroup t={t} items={[
          { label: 'Notifications', icon: Icon.chat },
          { label: 'Language · English', icon: Icon.leaf },
          { label: 'Help & support', icon: Icon.spa },
        ]}/>
      </div>

      <div style={{ padding: '32px 0 20px', textAlign: 'center' }}>
        <Ornament color={t.gold} width={80}/>
        <div style={{ marginTop: 14 }}>
          <TajWordmark color={t.gold} size={11} tracking={10}/>
        </div>
        <div style={{ fontFamily: t.sans, fontSize: 9, color: t.inkMuted, letterSpacing: 1.5, marginTop: 4 }}>
          A PART OF THE TATA GROUP · SINCE 1903
        </div>
      </div>
    </div>
  );
};

const MenuGroup = ({ t, items }) => (
  <div style={{
    background: t.bgElevated, borderRadius: t.r_md,
    border: `1px solid ${t.hairline}`, marginBottom: 12,
    overflow: 'hidden',
  }}>
    {items.map((it, i) => (
      <div key={it.label}>
        <div style={{ padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
          <div style={{ color: t.gold }}>{it.icon}</div>
          <div style={{ flex: 1, fontFamily: t.serif, fontSize: 16, color: t.ink }}>{it.label}</div>
          <div style={{ color: t.inkMuted }}>{Icon.chevRight}</div>
        </div>
        {i < items.length - 1 && <div style={{ height: 1, background: t.hairline, marginLeft: 52 }}/>}
      </div>
    ))}
  </div>
);

const ConfirmScreen = ({ hotelId, tokens, onDone }) => {
  const t = tokens;
  const h = TAJ_HOTELS.find(x => x.id === hotelId) || TAJ_HOTELS[0];
  return (
    <div style={{ background: t.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 30px', textAlign: 'center' }}>
        {/* Animated check */}
        <div style={{
          width: 110, height: 110, borderRadius: '50%',
          background: `radial-gradient(circle, ${t.goldPale}, ${t.bgElevated})`,
          border: `1.5px solid ${t.gold}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: 32, position: 'relative',
          animation: 'tajPulse 2s ease-out infinite',
        }}>
          <style>{`@keyframes tajPulse { 0%,100% { box-shadow: 0 0 0 0 ${t.gold}33; } 50% { box-shadow: 0 0 0 14px ${t.gold}00; } }`}</style>
          <div style={{ color: t.gold, transform: 'scale(1.8)' }}>{Icon.check}</div>
        </div>

        <Ornament color={t.gold} width={60}/>
        <Serif size={32} color={t.ink} italic style={{ marginTop: 16, lineHeight: 1.1 }}>
          Your stay<br/>is reserved
        </Serif>
        <div style={{ fontFamily: t.sans, fontSize: 13, color: t.inkMuted, marginTop: 14, lineHeight: 1.6, maxWidth: 280 }}>
          A confirmation has been sent to your email.<br/>
          We look forward to welcoming you.
        </div>

        {/* Ticket */}
        <div style={{
          marginTop: 32, width: '100%',
          background: t.bgElevated, borderRadius: t.r_md,
          border: `1px dashed ${t.hairline}`, padding: '16px 20px',
          textAlign: 'left',
        }}>
          <Eyebrow color={t.gold} tracking={2}>CONFIRMATION</Eyebrow>
          <div style={{ fontFamily: t.mono, fontSize: 16, color: t.ink, marginTop: 4, letterSpacing: 1 }}>
            TAJ-84729-MH
          </div>
          <div style={{ height: 1, background: t.hairline, margin: '12px 0' }}/>
          <div style={{ fontFamily: t.serif, fontSize: 17, color: t.ink }}>{h.name}</div>
          <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>
            Apr 14 – 17, 2026 · 2 guests
          </div>
        </div>
      </div>

      <div style={{ padding: '0 20px 30px' }}>
        <TajButton variant="primary" size="lg" full tokens={t} onClick={onDone}>
          Back to Discover
        </TajButton>
      </div>
    </div>
  );
};

window.TripsScreen = TripsScreen;
window.NeuPassScreen = NeuPassScreen;
window.ProfileScreen = ProfileScreen;
window.ConfirmScreen = ConfirmScreen;
