// Taj PWA — Hotel detail screen

const HotelScreen = ({ hotelId, tokens, onBack, onBook, favorites, toggleFav }) => {
  const t = tokens;
  const h = TAJ_HOTELS.find(x => x.id === hotelId) || TAJ_HOTELS[0];
  const [tab, setTab] = React.useState('overview');

  return (
    <div style={{ background: t.bg, minHeight: '100%', paddingBottom: 120 }}>
      {/* Hero image */}
      <div style={{ position: 'relative', height: 460, overflow: 'hidden' }}>
        <img src={h.img} alt={h.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.6) 100%)',
        }}/>

        {/* Top bar */}
        <div style={{
          position: 'absolute', top: 56, left: 16, right: 16,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <button onClick={onBack} style={glassBtn}>{Icon.back}</button>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={glassBtn}>{Icon.share}</button>
            <button onClick={() => toggleFav(h.id)} style={glassBtn}>
              {favorites.has(h.id) ? Icon.heartFill : Icon.heart}
            </button>
          </div>
        </div>

        {/* Image count pill */}
        <div style={{
          position: 'absolute', bottom: 70, right: 20,
          padding: '6px 12px',
          background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(12px)',
          borderRadius: 999, color: '#fff',
          fontFamily: t.sans, fontSize: 11, letterSpacing: 0.5,
        }}>
          1 / 48 photos
        </div>

        {/* Overlayed title at bottom of hero */}
        <div style={{ position: 'absolute', bottom: 24, left: 24, right: 24, color: '#fff' }}>
          <Eyebrow color="rgba(255,255,255,0.8)" tracking={2}>{h.era} · {h.heritage}</Eyebrow>
          <Serif size={30} color="#fff" style={{ marginTop: 4, lineHeight: 1.0 }} italic>{h.name}</Serif>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
            <span style={{ color: 'rgba(255,255,255,0.8)' }}>{Icon.pin}</span>
            <div style={{ fontFamily: t.sans, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: 0.3 }}>
              {h.city}, {h.region}
            </div>
          </div>
        </div>
      </div>

      {/* Card that overlays bottom of hero */}
      <div style={{
        margin: '-28px 20px 0',
        background: t.bgElevated,
        borderRadius: t.r_lg,
        padding: 20,
        boxShadow: t.shadowMed,
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <Stars rating={h.rating} color={t.gold} size={13}/>
            <div style={{ fontFamily: t.sans, fontSize: 13, color: t.ink, fontWeight: 500, marginLeft: 4 }}>{h.rating}</div>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted }}>
              ({h.reviews.toLocaleString()} reviews)
            </div>
          </div>
          <Eyebrow color={t.gold} tracking={1.5} size={10}>NEUPASS MEMBER</Eyebrow>
        </div>

        <div style={{ height: 1, background: t.hairline, marginBottom: 14 }}/>

        <div style={{ fontFamily: t.serif, fontSize: 18, color: t.inkSoft, lineHeight: 1.4, fontStyle: 'italic', marginBottom: 14 }}>
          "{h.tagline}"
        </div>

        {/* amenity pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {h.amenities.map(a => (
            <div key={a} style={{
              padding: '6px 12px',
              background: t.goldPale,
              color: t.goldDeep,
              borderRadius: 999,
              fontFamily: t.sans, fontSize: 11, fontWeight: 500, letterSpacing: 0.3,
            }}>{a}</div>
          ))}
        </div>
      </div>

      {/* Tab switcher */}
      <div style={{
        display: 'flex', gap: 4, padding: '28px 20px 0',
        borderBottom: `1px solid ${t.hairline}`, margin: '28px 0 0',
      }}>
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'rooms', label: 'Rooms' },
          { id: 'dining', label: 'Dining' },
          { id: 'spa', label: 'Spa' },
        ].map(x => (
          <button key={x.id} onClick={() => setTab(x.id)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '10px 14px',
            fontFamily: t.sans, fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase',
            color: tab === x.id ? t.ink : t.inkMuted,
            fontWeight: tab === x.id ? 600 : 400,
            borderBottom: tab === x.id ? `2px solid ${t.gold}` : '2px solid transparent',
            marginBottom: -1,
          }}>{x.label}</button>
        ))}
      </div>

      <div style={{ padding: '24px 24px 20px' }}>
        {tab === 'overview' && <Overview t={t} h={h}/>}
        {tab === 'rooms' && <RoomsList t={t} h={h} onBook={onBook}/>}
        {tab === 'dining' && <DiningList t={t}/>}
        {tab === 'spa' && <SpaList t={t}/>}
      </div>

      {/* Sticky book footer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 25,
        padding: '14px 20px 28px',
        background: `linear-gradient(to top, ${t.bg} 65%, ${t.bg}dd 90%, transparent)`,
        backdropFilter: 'blur(12px)',
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div>
          <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkMuted, letterSpacing: 1, textTransform: 'uppercase' }}>
            From
          </div>
          <div style={{ fontFamily: t.serif, fontSize: 22, color: t.ink, fontWeight: 500 }}>
            {h.currency}{h.price.toLocaleString('en-IN')}
            <span style={{ fontSize: 11, fontFamily: t.sans, color: t.inkMuted, marginLeft: 3 }}>/ night</span>
          </div>
        </div>
        <div style={{ flex: 1 }}/>
        <TajButton variant="primary" size="lg" tokens={t} onClick={() => onBook(h.id)}>
          Reserve →
        </TajButton>
      </div>
    </div>
  );
};

const glassBtn = {
  width: 40, height: 40, borderRadius: '50%',
  background: 'rgba(255,255,255,0.18)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.28)',
  color: '#fff', cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

const Overview = ({ t, h }) => (
  <div>
    <div style={{ fontFamily: t.serif, fontSize: 18, color: t.inkSoft, lineHeight: 1.55, marginBottom: 24 }}>
      Step into living history. {h.name} has welcomed royalty, world leaders and discerning travellers for over a century — a palace of impossible detail, where every door tells a story.
    </div>

    {/* Highlight grid */}
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 24,
    }}>
      {[
        { icon: Icon.bed, label: '285 rooms & suites' },
        { icon: Icon.pool, label: 'Heritage pool' },
        { icon: Icon.wifi, label: 'High-speed Wi-Fi' },
        { icon: Icon.leaf, label: 'Jiva Spa' },
      ].map(item => (
        <div key={item.label} style={{
          padding: 14, borderRadius: t.r_md,
          background: t.bgElevated, border: `1px solid ${t.hairline}`,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <div style={{ color: t.gold }}>{item.icon}</div>
          <div style={{ fontFamily: t.sans, fontSize: 12, color: t.inkSoft }}>{item.label}</div>
        </div>
      ))}
    </div>

    <div style={{ marginBottom: 16 }}>
      <Eyebrow color={t.gold} tracking={2}>◆  A taste of heritage</Eyebrow>
    </div>

    {/* Photo strip */}
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none', marginBottom: 24 }}>
      {[
        'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&q=80',
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&q=80',
        'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&q=80',
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80',
      ].map((src, i) => (
        <img key={i} src={src} style={{
          flex: '0 0 140px', height: 180, objectFit: 'cover',
          borderRadius: t.r_md,
        }}/>
      ))}
    </div>

    {/* Location card */}
    <div style={{
      borderRadius: t.r_md,
      background: t.bgElevated,
      border: `1px solid ${t.hairline}`,
      padding: 16, display: 'flex', gap: 12, alignItems: 'center',
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: t.r_sm,
        background: `linear-gradient(135deg, ${t.goldPale}, ${t.bgDeep})`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: t.gold,
      }}>{Icon.map}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: t.sans, fontSize: 13, color: t.ink, fontWeight: 500 }}>
          {h.city}, {h.region}
        </div>
        <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>
          Airport transfer · 40 min
        </div>
      </div>
      <div style={{ color: t.gold }}>{Icon.chevRight}</div>
    </div>
  </div>
);

const RoomsList = ({ t, h, onBook }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
    {ROOM_TYPES.map(r => (
      <div key={r.id} style={{
        borderRadius: t.r_md, overflow: 'hidden',
        background: t.bgElevated, border: `1px solid ${t.hairline}`,
        boxShadow: t.shadowSoft,
      }}>
        <img src={r.img} alt={r.name} style={{ width: '100%', height: 160, objectFit: 'cover' }}/>
        <div style={{ padding: 16 }}>
          <Serif size={20} color={t.ink}>{r.name}</Serif>
          <div style={{ display: 'flex', gap: 14, marginTop: 8, color: t.inkMuted }}>
            <InfoPill t={t} icon={Icon.area} text={r.size}/>
            <InfoPill t={t} icon={Icon.eye} text={r.view}/>
            <InfoPill t={t} icon={Icon.bed} text={r.beds}/>
          </div>
          <div style={{ height: 1, background: t.hairline, margin: '14px 0' }}/>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
            {r.perks.map(p => (
              <div key={p} style={{ fontFamily: t.sans, fontSize: 11, color: t.inkSoft, display: 'flex', alignItems: 'center', gap: 4 }}>
                <span style={{ color: t.gold }}>{Icon.check}</span>{p}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: t.serif, fontSize: 20, color: t.ink, fontWeight: 500 }}>
                ₹{r.price.toLocaleString('en-IN')}
              </div>
              <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkMuted }}>per night, incl. taxes</div>
            </div>
            <TajButton variant="outline" size="sm" tokens={t} onClick={() => onBook(h.id, r.id)}>Select</TajButton>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const InfoPill = ({ t, icon, text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
    <span style={{ color: t.gold }}>{icon}</span>
    <span style={{ fontFamily: t.sans, fontSize: 11, color: t.inkSoft }}>{text}</span>
  </div>
);

const DiningList = ({ t }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
    {[
      { name: 'Wasabi by Morimoto', cuisine: 'Contemporary Japanese', mood: 'Signature', img: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=400&q=80' },
      { name: 'Golden Dragon', cuisine: 'Sichuan & Cantonese', mood: 'Since 1974', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80' },
      { name: 'Sea Lounge', cuisine: 'Afternoon tea, harbour view', mood: 'Iconic', img: 'https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=400&q=80' },
    ].map(d => (
      <div key={d.name} style={{
        display: 'flex', gap: 14, background: t.bgElevated,
        borderRadius: t.r_md, overflow: 'hidden', border: `1px solid ${t.hairline}`,
      }}>
        <img src={d.img} style={{ width: 100, height: 110, objectFit: 'cover' }}/>
        <div style={{ flex: 1, padding: '12px 12px 12px 0' }}>
          <Eyebrow color={t.gold} tracking={1.5} size={9}>{d.mood}</Eyebrow>
          <Serif size={17} color={t.ink} style={{ marginTop: 4 }}>{d.name}</Serif>
          <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 3 }}>{d.cuisine}</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 6 }}>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.gold, letterSpacing: 1.2, textTransform: 'uppercase' }}>
              Reserve →
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const SpaList = ({ t }) => (
  <div>
    <div style={{ position: 'relative', height: 200, borderRadius: t.r_md, overflow: 'hidden', marginBottom: 16 }}>
      <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.7))' }}/>
      <div style={{ position: 'absolute', bottom: 16, left: 16, color: '#fff' }}>
        <Eyebrow color="rgba(255,255,255,0.7)" tracking={2}>JIVA SPA</Eyebrow>
        <Serif size={22} color="#fff" italic style={{ marginTop: 3 }}>Ancient rituals, reimagined</Serif>
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {EXPERIENCES.filter(e => e.icon === 'spa' || e.icon === 'yoga').concat(EXPERIENCES.slice(0,2)).map((e, i) => (
        <div key={i} style={{
          padding: 14, background: t.bgElevated, border: `1px solid ${t.hairline}`,
          borderRadius: t.r_md, display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{
            width: 46, height: 46, borderRadius: '50%',
            background: t.goldPale, color: t.gold,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon[e.icon] || Icon.spa}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: t.serif, fontSize: 17, color: t.ink }}>{e.name}</div>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>
              {e.duration} · ₹{e.price.toLocaleString('en-IN')}
            </div>
          </div>
          <div style={{ color: t.gold }}>{Icon.chevRight}</div>
        </div>
      ))}
    </div>
  </div>
);

window.HotelScreen = HotelScreen;
