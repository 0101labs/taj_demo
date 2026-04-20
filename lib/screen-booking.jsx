// Taj PWA — Booking flow (dates → guests → confirm)

const BookingScreen = ({ hotelId, roomId, tokens, onBack, onComplete }) => {
  const t = tokens;
  const h = TAJ_HOTELS.find(x => x.id === hotelId) || TAJ_HOTELS[0];
  const [step, setStep] = React.useState(0);
  const [checkIn, setCheckIn] = React.useState(14);
  const [checkOut, setCheckOut] = React.useState(17);
  const [room, setRoom] = React.useState(roomId || 'heritage');
  const [guests, setGuests] = React.useState({ adults: 2, children: 0 });
  const [useNeupass, setUseNeupass] = React.useState(true);

  const selectedRoom = ROOM_TYPES.find(r => r.id === room);
  const nights = checkOut - checkIn;
  const subtotal = selectedRoom.price * nights;
  const neupassDiscount = useNeupass ? Math.round(subtotal * 0.12) : 0;
  const taxes = Math.round((subtotal - neupassDiscount) * 0.18);
  const total = subtotal - neupassDiscount + taxes;

  return (
    <div style={{ background: t.bg, height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Top */}
      <div style={{ padding: '56px 20px 16px', display: 'flex', alignItems: 'center', gap: 14, flexShrink: 0 }}>
        <button onClick={step === 0 ? onBack : () => setStep(step - 1)} style={{
          width: 40, height: 40, borderRadius: '50%', background: t.bgElevated,
          border: `1px solid ${t.hairline}`, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.ink,
        }}>{Icon.back}</button>
        <div style={{ flex: 1 }}>
          <Eyebrow color={t.gold} tracking={2}>STEP {step + 1} / 3</Eyebrow>
          <Serif size={22} color={t.ink} style={{ marginTop: 2 }}>
            {['When to stay', 'Who is coming', 'Review & confirm'][step]}
          </Serif>
        </div>
      </div>

      {/* progress */}
      <div style={{ padding: '0 20px', display: 'flex', gap: 6, marginBottom: 12, flexShrink: 0 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            flex: 1, height: 2, borderRadius: 2,
            background: i <= step ? t.gold : t.hairline,
            transition: 'background 0.3s',
          }}/>
        ))}
      </div>

      <div style={{ flex: 1, overflow: 'auto', padding: '16px 20px 140px' }}>
        {step === 0 && <StepDates t={t} checkIn={checkIn} checkOut={checkOut}
          setCheckIn={setCheckIn} setCheckOut={setCheckOut} room={room} setRoom={setRoom}/>}
        {step === 1 && <StepGuests t={t} guests={guests} setGuests={setGuests}/>}
        {step === 2 && <StepReview t={t} h={h} room={selectedRoom} nights={nights}
          subtotal={subtotal} neupassDiscount={neupassDiscount}
          useNeupass={useNeupass} setUseNeupass={setUseNeupass}
          taxes={taxes} total={total}
          checkIn={checkIn} checkOut={checkOut} guests={guests}/>}
      </div>

      {/* footer */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        padding: '14px 20px 30px',
        background: `linear-gradient(to top, ${t.bg} 65%, ${t.bg}dd 90%, transparent)`,
        backdropFilter: 'blur(12px)',
        display: 'flex', gap: 12, alignItems: 'center',
      }}>
        {step === 2 && (
          <div>
            <div style={{ fontFamily: t.sans, fontSize: 10, color: t.inkMuted, letterSpacing: 1, textTransform: 'uppercase' }}>Total</div>
            <div style={{ fontFamily: t.serif, fontSize: 22, color: t.ink, fontWeight: 500 }}>
              ₹{total.toLocaleString('en-IN')}
            </div>
          </div>
        )}
        <div style={{ flex: 1 }}/>
        <TajButton variant="primary" size="lg" tokens={t}
          onClick={() => step < 2 ? setStep(step + 1) : onComplete()}>
          {step < 2 ? 'Continue →' : 'Confirm stay'}
        </TajButton>
      </div>
    </div>
  );
};

const StepDates = ({ t, checkIn, checkOut, setCheckIn, setCheckOut, room, setRoom }) => {
  const monthDays = 30;
  const firstDow = 2; // April 1, 2026 — adjust display offset
  const today = 1;
  return (
    <div>
      {/* Month */}
      <div style={{
        background: t.bgElevated, borderRadius: t.r_lg, padding: 20,
        border: `1px solid ${t.hairline}`, marginBottom: 16, boxShadow: t.shadowSoft,
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Serif size={18} color={t.ink}>April 2026</Serif>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={calNav(t)}>‹</button>
            <button style={calNav(t)}>›</button>
          </div>
        </div>
        {/* DOW */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, marginBottom: 4 }}>
          {['S','M','T','W','T','F','S'].map((d, i) => (
            <div key={i} style={{ textAlign: 'center', fontFamily: t.sans, fontSize: 10, color: t.inkMuted, letterSpacing: 1 }}>{d}</div>
          ))}
        </div>
        {/* Days */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
          {Array.from({length: firstDow}).map((_, i) => <div key={'b'+i}/>)}
          {Array.from({length: monthDays}).map((_, i) => {
            const d = i + 1;
            const isCheckIn = d === checkIn;
            const isCheckOut = d === checkOut;
            const inRange = d > checkIn && d < checkOut;
            const disabled = d < today;
            return (
              <button key={d} disabled={disabled} onClick={() => {
                if (d < checkIn) setCheckIn(d);
                else if (d > checkIn) setCheckOut(d);
              }} style={{
                aspectRatio: '1', borderRadius: '50%',
                background: isCheckIn || isCheckOut ? t.ink : inRange ? t.goldPale : 'transparent',
                color: isCheckIn || isCheckOut ? t.bg : disabled ? t.inkMuted : t.ink,
                border: 'none',
                fontFamily: t.sans, fontSize: 13,
                fontWeight: isCheckIn || isCheckOut ? 600 : 400,
                cursor: disabled ? 'default' : 'pointer',
                opacity: disabled ? 0.35 : 1,
              }}>{d}</button>
            );
          })}
        </div>
      </div>

      {/* Range summary */}
      <div style={{
        display: 'flex', gap: 10, marginBottom: 24,
      }}>
        <DateCard t={t} label="Check-in" date={`Apr ${checkIn}, 2026`} dow="Tuesday"/>
        <DateCard t={t} label="Check-out" date={`Apr ${checkOut}, 2026`} dow="Friday"/>
      </div>

      {/* Room types */}
      <Eyebrow color={t.gold} tracking={2}>◆  Choose your room</Eyebrow>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
        {ROOM_TYPES.map(r => {
          const active = room === r.id;
          return (
            <div key={r.id} onClick={() => setRoom(r.id)} style={{
              padding: 14, borderRadius: t.r_md,
              background: active ? t.goldPale : t.bgElevated,
              border: `1.5px solid ${active ? t.gold : t.hairline}`,
              display: 'flex', gap: 12, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
              <img src={r.img} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: t.r_sm, flexShrink: 0 }}/>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Serif size={16} color={t.ink}>{r.name}</Serif>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    border: `1.5px solid ${active ? t.gold : t.hairline}`,
                    background: active ? t.gold : 'transparent',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff',
                  }}>{active && Icon.check}</div>
                </div>
                <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>
                  {r.size} · {r.view}
                </div>
                <div style={{ fontFamily: t.serif, fontSize: 16, color: t.ink, marginTop: 6, fontWeight: 500 }}>
                  ₹{r.price.toLocaleString('en-IN')}
                  <span style={{ fontSize: 10, fontFamily: t.sans, color: t.inkMuted, marginLeft: 4 }}>/ night</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const DateCard = ({ t, label, date, dow }) => (
  <div style={{
    flex: 1, padding: 14, borderRadius: t.r_md,
    background: t.bgElevated, border: `1px solid ${t.hairline}`,
  }}>
    <Eyebrow color={t.gold} tracking={1.5} size={9}>{label}</Eyebrow>
    <div style={{ fontFamily: t.serif, fontSize: 18, color: t.ink, marginTop: 4 }}>{date}</div>
    <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>{dow}</div>
  </div>
);

const calNav = (t) => ({
  width: 30, height: 30, borderRadius: '50%',
  background: t.bg, border: `1px solid ${t.hairline}`,
  cursor: 'pointer', color: t.ink,
  fontFamily: t.serif, fontSize: 16,
});

const StepGuests = ({ t, guests, setGuests }) => (
  <div>
    <div style={{
      background: t.bgElevated, borderRadius: t.r_lg, padding: 4,
      border: `1px solid ${t.hairline}`, marginBottom: 20,
    }}>
      <GuestRow t={t} label="Adults" sub="Age 13+" count={guests.adults}
        onChange={n => setGuests({...guests, adults: Math.max(1, n)})}/>
      <div style={{ height: 1, background: t.hairline, margin: '0 16px' }}/>
      <GuestRow t={t} label="Children" sub="Age 2–12" count={guests.children}
        onChange={n => setGuests({...guests, children: Math.max(0, n)})}/>
    </div>

    <Eyebrow color={t.gold} tracking={2}>◆  Curate your stay</Eyebrow>
    <div style={{ fontFamily: t.sans, fontSize: 12, color: t.inkMuted, marginTop: 4, marginBottom: 14 }}>
      Optional experiences — add to your journey
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {EXPERIENCES.map(e => (
        <div key={e.id} style={{
          padding: 14, borderRadius: t.r_md,
          background: t.bgElevated, border: `1px solid ${t.hairline}`,
          display: 'flex', alignItems: 'center', gap: 14,
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: '50%',
            background: t.goldPale, color: t.gold,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon[e.icon]}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: t.serif, fontSize: 16, color: t.ink }}>{e.name}</div>
            <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted }}>
              {e.duration} · ₹{e.price.toLocaleString('en-IN')}
            </div>
          </div>
          <button style={{
            width: 30, height: 30, borderRadius: '50%',
            border: `1.5px solid ${t.gold}`, color: t.gold,
            background: 'transparent', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{Icon.plus}</button>
        </div>
      ))}
    </div>
  </div>
);

const GuestRow = ({ t, label, sub, count, onChange }) => (
  <div style={{ padding: 14, display: 'flex', alignItems: 'center' }}>
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: t.serif, fontSize: 17, color: t.ink }}>{label}</div>
      <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>{sub}</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <button onClick={() => onChange(count - 1)} style={counterBtn(t)}>{Icon.minus}</button>
      <div style={{ fontFamily: t.serif, fontSize: 20, color: t.ink, minWidth: 20, textAlign: 'center' }}>
        {count}
      </div>
      <button onClick={() => onChange(count + 1)} style={counterBtn(t)}>{Icon.plus}</button>
    </div>
  </div>
);

const counterBtn = (t) => ({
  width: 32, height: 32, borderRadius: '50%',
  border: `1px solid ${t.hairline}`, background: t.bg,
  color: t.ink, cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
});

const StepReview = ({ t, h, room, nights, subtotal, neupassDiscount, useNeupass, setUseNeupass, taxes, total, checkIn, checkOut, guests }) => (
  <div>
    {/* Hotel recap */}
    <div style={{
      background: t.bgElevated, borderRadius: t.r_lg, overflow: 'hidden',
      border: `1px solid ${t.hairline}`, marginBottom: 16, boxShadow: t.shadowSoft,
    }}>
      <div style={{ display: 'flex', gap: 12, padding: 14 }}>
        <img src={h.img} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: t.r_sm }}/>
        <div style={{ flex: 1 }}>
          <Eyebrow color={t.gold} tracking={1.5} size={9}>{h.era}</Eyebrow>
          <Serif size={17} color={t.ink} style={{ marginTop: 2 }}>{h.name}</Serif>
          <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 2 }}>
            {room.name} · {h.city}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', borderTop: `1px solid ${t.hairline}` }}>
        <ReviewCell t={t} label="Check-in" val={`Apr ${checkIn}`}/>
        <div style={{ width: 1, background: t.hairline }}/>
        <ReviewCell t={t} label="Check-out" val={`Apr ${checkOut}`}/>
        <div style={{ width: 1, background: t.hairline }}/>
        <ReviewCell t={t} label="Guests" val={`${guests.adults + guests.children}`}/>
      </div>
    </div>

    {/* NeuPass toggle */}
    <div onClick={() => setUseNeupass(!useNeupass)} style={{
      padding: 16, borderRadius: t.r_md, cursor: 'pointer',
      background: useNeupass ? `linear-gradient(135deg, ${t.ink}, #2A1F10)` : t.bgElevated,
      border: `1px solid ${useNeupass ? t.goldDeep : t.hairline}`,
      color: useNeupass ? t.bg : t.ink,
      display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20,
      transition: 'all 0.3s',
    }}>
      <div style={{ color: useNeupass ? t.goldLight : t.gold }}>{Icon.sparkle}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ fontFamily: t.serif, fontSize: 16, fontWeight: 500 }}>NeuPass Silver</div>
          <div style={{
            padding: '2px 8px', borderRadius: 999, fontSize: 9,
            fontFamily: t.sans, letterSpacing: 1, textTransform: 'uppercase',
            background: useNeupass ? t.gold : t.goldPale,
            color: useNeupass ? '#fff' : t.goldDeep,
          }}>Applied</div>
        </div>
        <div style={{ fontFamily: t.sans, fontSize: 11, opacity: 0.75, marginTop: 3 }}>
          Save ₹{neupassDiscount.toLocaleString('en-IN')} · earn 4,250 points
        </div>
      </div>
      <div style={{
        width: 40, height: 24, borderRadius: 999, padding: 2,
        background: useNeupass ? t.gold : t.hairline,
        display: 'flex', alignItems: 'center',
        justifyContent: useNeupass ? 'flex-end' : 'flex-start',
        transition: 'all 0.3s',
      }}>
        <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#fff' }}/>
      </div>
    </div>

    {/* Price breakdown */}
    <Eyebrow color={t.gold} tracking={2}>◆  Summary</Eyebrow>
    <div style={{
      marginTop: 12, padding: '6px 16px',
      background: t.bgElevated, borderRadius: t.r_md, border: `1px solid ${t.hairline}`,
    }}>
      <PriceLine t={t} label={`₹${room.price.toLocaleString('en-IN')} × ${nights} nights`} value={`₹${subtotal.toLocaleString('en-IN')}`}/>
      {useNeupass && <PriceLine t={t} label="NeuPass savings" value={`–₹${neupassDiscount.toLocaleString('en-IN')}`} color={t.success}/>}
      <PriceLine t={t} label="Taxes & fees" value={`₹${taxes.toLocaleString('en-IN')}`}/>
      <div style={{ height: 1, background: t.hairline }}/>
      <PriceLine t={t} label="Total" value={`₹${total.toLocaleString('en-IN')}`} bold/>
    </div>

    <div style={{ fontFamily: t.sans, fontSize: 11, color: t.inkMuted, marginTop: 14, lineHeight: 1.5 }}>
      Free cancellation until Apr {checkIn - 3}. Your card won't be charged today.
    </div>
  </div>
);

const ReviewCell = ({ t, label, val }) => (
  <div style={{ flex: 1, padding: 12, textAlign: 'center' }}>
    <Eyebrow color={t.inkMuted} tracking={1.2} size={9}>{label}</Eyebrow>
    <div style={{ fontFamily: t.serif, fontSize: 15, color: t.ink, marginTop: 3 }}>{val}</div>
  </div>
);

const PriceLine = ({ t, label, value, bold, color }) => (
  <div style={{
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '11px 0',
  }}>
    <div style={{
      fontFamily: t.sans, fontSize: bold ? 13 : 12,
      color: color || (bold ? t.ink : t.inkSoft),
      fontWeight: bold ? 600 : 400,
    }}>{label}</div>
    <div style={{
      fontFamily: bold ? t.serif : t.sans,
      fontSize: bold ? 18 : 13,
      color: color || t.ink,
      fontWeight: bold ? 600 : 500,
    }}>{value}</div>
  </div>
);

window.BookingScreen = BookingScreen;
