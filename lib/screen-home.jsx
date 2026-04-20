// Taj PWA — Home / Discover screen

const HomeScreen = ({ tokens, onHotel, onSearch, favorites, toggleFav }) => {
  const t = tokens;
  const featured = TAJ_HOTELS[2]; // Lake Palace
  const palaces = TAJ_HOTELS.filter(h => h.heritage === 'Palace');
  const collections = [
    { id: 'palaces', name: 'Palaces', count: 6, img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80', eyebrow: 'LEGENDS OF INDIA' },
    { id: 'safaris', name: 'Safaris', count: 4, img: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80', eyebrow: 'IN THE WILD' },
    { id: 'beaches', name: 'Beaches', count: 9, img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80', eyebrow: 'COASTAL ESCAPES' },
  ];

  return (
    <div style={{ background: t.bg, minHeight: '100%', paddingBottom: 100 }}>
      {/* Top bar — logo + greeting */}
      <div style={{ padding: '56px 24px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div>
          <Eyebrow color={t.gold} tracking={3}>Namaste, Aarav</Eyebrow>
          <Serif size={28} color={t.ink} style={{ marginTop: 4, letterSpacing: -0.5 }}>
            Where shall we<br/><span style={{ fontStyle: 'italic' }}>take you?</span>
          </Serif>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={iconBtn(t)}>{Icon.heart}</button>
        </div>
      </div>

      {/* Search field */}
      <div onClick={onSearch} style={{
        margin: '8px 24px 28px',
        background: t.bgElevated,
        border: `1px solid ${t.hairline}`,
        borderRadius: 999,
        padding: '14px 20px',
        display: 'flex', alignItems: 'center', gap: 12,
        boxShadow: t.shadowSoft,
        cursor: 'pointer',
      }}>
        <div style={{ color: t.gold }}>{Icon.search}</div>
        <div style={{ flex: 1, fontFamily: t.sans, fontSize: 14, color: t.inkSoft }}>
          Mumbai, Rajasthan, Goa...
        </div>
        <div style={{ width: 1, height: 20, background: t.hairline }} />
        <div style={{ color: t.inkSoft }}>{Icon.filter}</div>
      </div>

      {/* Featured hero — Lake Palace */}
      <div style={{ padding: '0 24px', marginBottom: 36 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'baseline', marginBottom: 14,
        }}>
          <Eyebrow color={t.gold} tracking={2}>◆  Featured Palace</Eyebrow>
          <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, letterSpacing: 0.6 }}>01 / 06</div>
        </div>
        <div onClick={() => onHotel(featured.id)} style={{
          position: 'relative', borderRadius: t.r_lg, overflow: 'hidden',
          aspectRatio: '4 / 5', boxShadow: t.shadowMed, cursor: 'pointer',
        }}>
          <img src={featured.img} alt={featured.name} style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }}/>
          {/* gradient overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 100%)',
          }}/>
          {/* fav */}
          <button onClick={(e) => { e.stopPropagation(); toggleFav(featured.id); }} style={{
            position: 'absolute', top: 16, right: 16,
            width: 40, height: 40, borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {favorites.has(featured.id) ? Icon.heartFill : Icon.heart}
          </button>
          {/* era badge */}
          <div style={{
            position: 'absolute', top: 20, left: 20,
            padding: '6px 12px',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(20px)',
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.25)',
          }}>
            <Eyebrow color="#fff" tracking={1.8} size={10}>{featured.era}</Eyebrow>
          </div>
          {/* content */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, color: '#fff' }}>
            <Ornament color="rgba(255,255,255,0.7)" width={60}/>
            <Serif size={32} color="#fff" style={{ marginTop: 6 }} italic>
              {featured.name}
            </Serif>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, marginBottom: 14 }}>
              <div style={{ color: 'rgba(255,255,255,0.8)' }}>{Icon.pin}</div>
              <div style={{ fontFamily: t.sans, fontSize: 13, color: 'rgba(255,255,255,0.9)', letterSpacing: 0.5 }}>
                {featured.city} · {featured.region}
              </div>
            </div>
            <div style={{
              fontFamily: t.serif, fontSize: 16, fontStyle: 'italic',
              color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, marginBottom: 20,
            }}>
              "{featured.tagline}"
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontFamily: t.sans, fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: 1, textTransform: 'uppercase' }}>
                  From
                </div>
                <div style={{ fontFamily: t.serif, fontSize: 24, color: '#fff', fontWeight: 500 }}>
                  {featured.currency}{featured.price.toLocaleString('en-IN')}
                  <span style={{ fontSize: 12, fontFamily: t.sans, opacity: 0.7, marginLeft: 4 }}>/night</span>
                </div>
              </div>
              <div style={{
                padding: '10px 20px',
                background: '#fff', color: t.ink,
                borderRadius: 999, fontFamily: t.sans,
                fontSize: 12, fontWeight: 500, letterSpacing: 1.2, textTransform: 'uppercase',
              }}>
                Explore →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collections */}
      <div style={{ marginBottom: 36 }}>
        <div style={{ padding: '0 24px', marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Eyebrow color={t.gold} tracking={2}>◆  Collections</Eyebrow>
          <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted }}>View all</div>
        </div>
        <div style={{
          display: 'flex', gap: 12, padding: '0 24px',
          overflowX: 'auto', scrollbarWidth: 'none',
        }}>
          {collections.map(c => (
            <div key={c.id} style={{
              flex: '0 0 160px', height: 220,
              borderRadius: t.r_md, overflow: 'hidden',
              position: 'relative', cursor: 'pointer',
              boxShadow: t.shadowSoft,
            }}>
              <img src={c.img} alt={c.name} style={{
                width: '100%', height: '100%', objectFit: 'cover',
              }}/>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.8) 100%)',
              }}/>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16, color: '#fff' }}>
                <Eyebrow color="rgba(255,255,255,0.7)" tracking={1.5} size={9}>{c.eyebrow}</Eyebrow>
                <Serif size={22} color="#fff" style={{ marginTop: 2 }}>{c.name}</Serif>
                <div style={{ fontFamily: t.sans, fontSize: 11, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
                  {c.count} properties
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All palaces list */}
      <div style={{ padding: '0 24px' }}>
        <div style={{ marginBottom: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Eyebrow color={t.gold} tracking={2}>◆  Legendary Palaces</Eyebrow>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {palaces.slice(0, 3).map(h => (
            <div key={h.id} onClick={() => onHotel(h.id)} style={{
              display: 'flex', gap: 14, cursor: 'pointer',
              background: t.bgElevated,
              borderRadius: t.r_md, overflow: 'hidden',
              boxShadow: t.shadowSoft,
            }}>
              <img src={h.img} alt={h.name} style={{
                width: 120, height: 140, objectFit: 'cover', flexShrink: 0,
              }}/>
              <div style={{ flex: 1, padding: '14px 14px 14px 0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <Eyebrow color={t.gold} tracking={1.5} size={9}>{h.era}</Eyebrow>
                  <Serif size={19} color={t.ink} style={{ marginTop: 3, letterSpacing: -0.2 }}>{h.name}</Serif>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3 }}>
                    <span style={{ color: t.inkMuted, display: 'inline-flex' }}>{Icon.pin}</span>
                    <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted }}>{h.city}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Stars rating={h.rating} color={t.gold} size={10}/>
                    <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkMuted, marginLeft: 2 }}>
                      {h.rating}
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: t.serif, fontSize: 17, fontWeight: 500, color: t.ink }}>
                      {h.currency}{(h.price/1000).toFixed(0)}k
                      <span style={{ fontSize: 10, fontFamily: t.sans, color: t.inkMuted, marginLeft: 2 }}>/ night</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer ornament */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0 16px', gap: 10 }}>
        <Ornament color={t.gold} width={80}/>
        <TajWordmark color={t.gold} size={11} tracking={10}/>
        <div style={{ fontFamily: t.sans, fontSize: 9, color: t.inkMuted, letterSpacing: 1.5 }}>
          SINCE 1903
        </div>
      </div>
    </div>
  );
};

function iconBtn(t) {
  return {
    width: 44, height: 44, borderRadius: '50%',
    background: t.bgElevated,
    border: `1px solid ${t.hairline}`,
    color: t.ink,
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    boxShadow: t.shadowSoft,
  };
}

window.HomeScreen = HomeScreen;
