// Taj PWA — Tab Bar (bottom nav)

const TabBar = ({ current, onNav, tokens }) => {
  const t = tokens;
  const tabs = [
    { id: 'home', label: 'Discover', icon: Icon.compass },
    { id: 'trips', label: 'Trips', icon: Icon.cal },
    { id: 'key', label: 'Stay', icon: Icon.key },
    { id: 'neupass', label: 'NeuPass', icon: Icon.sparkle },
    { id: 'profile', label: 'You', icon: Icon.user },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30,
      paddingBottom: 28, paddingTop: 10,
      background: `linear-gradient(to top, ${t.bg} 60%, ${t.bg}cc 85%, transparent)`,
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-around',
        padding: '0 8px',
      }}>
        {tabs.map(tab => {
          const active = current === tab.id;
          return (
            <button key={tab.id}
              onClick={() => onNav(tab.id)}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '6px 10px',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: 4,
                color: active ? t.ink : t.inkMuted,
                opacity: active ? 1 : 0.6,
                transition: 'opacity 0.2s',
              }}>
              <div style={{ width: 22, height: 22 }}>{tab.icon}</div>
              <div style={{
                fontFamily: t.sans, fontSize: 10, fontWeight: 500,
                letterSpacing: 0.8, textTransform: 'uppercase',
              }}>{tab.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

window.TabBar = TabBar;
