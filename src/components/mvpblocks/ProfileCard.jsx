import React, { useEffect, useRef, useCallback, useMemo } from 'react';

/* ============================================================================
   🔧 CUSTOMIZATION GUIDE — search for these tags to find what to tweak
   ----------------------------------------------------------------------------
   [1] DEFAULT_INNER_BG            -> base card background (flat color, no gradient)
   [2] ANIMATION_CONFIG            -> timing for the entrance/hover animation
   [3] card sizing (width/aspect)  -> responsive card size, fixed for mobile overflow
   [4] cardStyle (--behind-glow-*) -> the glow that sits behind the card
   [5] cardRadius                  -> corner roundness of the whole card
   [6] avatar <img>                -> avatar image sizing/position
   [7] name/title text block       -> font sizes + gradient text colors
   [8] section boxShadow/transform -> tilt intensity + hover smoothness
   NOTE: the "show user info" bar (mini-avatar, handle, status, Contact
   button) has been removed entirely — the card now just shows avatar + name/title.
   NOTE: the holographic shine layer and glare layer have been removed —
   the card now shows only a flat background color inside.
============================================================================ */

// 🔧 UPDATED — gradient removed, card now uses a single flat color
// tuned to match the mint → periwinkle page background. See tag [4]
// below for the matching glow color.
// [1] 🔧 CHANGE HERE — swap this to restyle the base card background
const DEFAULT_INNER_BG = '#1b2340';

// [2] 🔧 CHANGE HERE — tune how the tilt feels (bigger = slower/floatier)
const ANIMATION_CONFIG = {
  INITIAL_DURATION: 1200,
  INITIAL_X_OFFSET: 70,
  INITIAL_Y_OFFSET: 60,
  DEVICE_BETA_OFFSET: 20,
  ENTER_TRANSITION_MS: 180
};

const clamp = (v, min = 0, max = 100) => Math.min(Math.max(v, min), max);
const round = (v, precision = 3) => parseFloat(v.toFixed(precision));
const adjust = (v, fMin, fMax, tMin, tMax) => round(tMin + ((tMax - tMin) * (v - fMin)) / (fMax - fMin));

const ProfileCardComponent = ({
  avatarUrl = '<Placeholder for avatar URL>',
  bgColor,
  behindGlowEnabled = true,
  behindGlowColor,
  behindGlowSize,
  className = '',
  enableTilt = true,
  enableMobileTilt = false,
  mobileTiltSensitivity = 5,
  name = 'Israel Habimana.',
  title = 'Software Engineer'
}) => {
  const wrapRef = useRef(null);
  const shellRef = useRef(null);

  const enterTimerRef = useRef(null);
  const leaveRafRef = useRef(null);

  const tiltEngine = useMemo(() => {
    if (!enableTilt) return null;

    let rafId = null;
    let running = false;
    let lastTs = 0;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const DEFAULT_TAU = 0.14;
    const INITIAL_TAU = 0.6;
    let initialUntil = 0;

    const setVarsFromXY = (x, y) => {
      const shell = shellRef.current;
      const wrap = wrapRef.current;
      if (!shell || !wrap) return;

      const width = shell.clientWidth || 1;
      const height = shell.clientHeight || 1;

      const percentX = clamp((100 / width) * x);
      const percentY = clamp((100 / height) * y);

      const centerX = percentX - 50;
      const centerY = percentY - 50;

      const properties = {
        '--pointer-x': `${percentX}%`,
        '--pointer-y': `${percentY}%`,
        '--background-x': `${adjust(percentX, 0, 100, 35, 65)}%`,
        '--background-y': `${adjust(percentY, 0, 100, 35, 65)}%`,
        '--pointer-from-center': `${clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)}`,
        '--pointer-from-top': `${percentY / 100}`,
        '--pointer-from-left': `${percentX / 100}`,
        // [8] 🔧 CHANGE HERE — divide by a bigger number for a gentler tilt
        '--rotate-x': `${round(-(centerX / 5))}deg`,
        '--rotate-y': `${round(centerY / 4)}deg`
      };

      for (const [k, v] of Object.entries(properties)) wrap.style.setProperty(k, v);
    };

    const step = ts => {
      if (!running) return;
      if (lastTs === 0) lastTs = ts;
      const dt = (ts - lastTs) / 1000;
      lastTs = ts;

      const tau = ts < initialUntil ? INITIAL_TAU : DEFAULT_TAU;
      const k = 1 - Math.exp(-dt / tau);

      currentX += (targetX - currentX) * k;
      currentY += (targetY - currentY) * k;

      setVarsFromXY(currentX, currentY);

      const stillFar = Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05;

      if (stillFar || document.hasFocus()) {
        rafId = requestAnimationFrame(step);
      } else {
        running = false;
        lastTs = 0;
        if (rafId) {
          cancelAnimationFrame(rafId);
          rafId = null;
        }
      }
    };

    const start = () => {
      if (running) return;
      running = true;
      lastTs = 0;
      rafId = requestAnimationFrame(step);
    };

    return {
      setImmediate(x, y) {
        currentX = x;
        currentY = y;
        setVarsFromXY(currentX, currentY);
      },
      setTarget(x, y) {
        targetX = x;
        targetY = y;
        start();
      },
      toCenter() {
        const shell = shellRef.current;
        if (!shell) return;
        this.setTarget(shell.clientWidth / 2, shell.clientHeight / 2);
      },
      beginInitial(durationMs) {
        initialUntil = performance.now() + durationMs;
        start();
      },
      getCurrent() {
        return { x: currentX, y: currentY, tx: targetX, ty: targetY };
      },
      cancel() {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
        running = false;
        lastTs = 0;
      }
    };
  }, [enableTilt]);

  const getOffsets = (evt, el) => {
    const rect = el.getBoundingClientRect();
    return { x: evt.clientX - rect.left, y: evt.clientY - rect.top };
  };

  // 🔧 FIX — glow opacity variable is now actually turned on/off (was
  // previously stuck at 0 forever because nothing ever wrote to it).
  const setGlowOpacity = useCallback(value => {
    wrapRef.current?.style.setProperty('--card-opacity', String(value));
  }, []);

  const handlePointerMove = useCallback(event => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;
    const { x, y } = getOffsets(event, shell);
    tiltEngine.setTarget(x, y);
  }, [tiltEngine]);

  const handlePointerEnter = useCallback(event => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    shell.classList.add('active');
    shell.classList.add('entering');
    setGlowOpacity(1);
    if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
    enterTimerRef.current = window.setTimeout(() => {
      shell.classList.remove('entering');
    }, ANIMATION_CONFIG.ENTER_TRANSITION_MS);

    const { x, y } = getOffsets(event, shell);
    tiltEngine.setTarget(x, y);
  }, [tiltEngine, setGlowOpacity]);

  const handlePointerLeave = useCallback(() => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    tiltEngine.toCenter();
    setGlowOpacity(0);

    const checkSettle = () => {
      const { x, y, tx, ty } = tiltEngine.getCurrent();
      const settled = Math.hypot(tx - x, ty - y) < 0.6;
      if (settled) {
        shell.classList.remove('active');
        leaveRafRef.current = null;
      } else {
        leaveRafRef.current = requestAnimationFrame(checkSettle);
      }
    };
    if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
    leaveRafRef.current = requestAnimationFrame(checkSettle);
  }, [tiltEngine, setGlowOpacity]);

  const handleDeviceOrientation = useCallback(event => {
    const shell = shellRef.current;
    if (!shell || !tiltEngine) return;

    const { beta, gamma } = event;
    if (beta == null || gamma == null) return;

    const centerX = shell.clientWidth / 2;
    const centerY = shell.clientHeight / 2;
    const x = clamp(centerX + gamma * mobileTiltSensitivity, 0, shell.clientWidth);
    const y = clamp(
      centerY + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity,
      0,
      shell.clientHeight
    );

    tiltEngine.setTarget(x, y);
  }, [tiltEngine, mobileTiltSensitivity]);

  useEffect(() => {
    if (!enableTilt || !tiltEngine) return;

    const shell = shellRef.current;
    if (!shell) return;

    const pointerMoveHandler = handlePointerMove;
    const pointerEnterHandler = handlePointerEnter;
    const pointerLeaveHandler = handlePointerLeave;
    const deviceOrientationHandler = handleDeviceOrientation;

    shell.addEventListener('pointerenter', pointerEnterHandler);
    shell.addEventListener('pointermove', pointerMoveHandler);
    shell.addEventListener('pointerleave', pointerLeaveHandler);

    const handleClick = () => {
      if (!enableMobileTilt || location.protocol !== 'https:') return;
      const anyMotion = window.DeviceMotionEvent;
      if (anyMotion && typeof anyMotion.requestPermission === 'function') {
        anyMotion
          .requestPermission()
          .then(state => {
            if (state === 'granted') {
              window.addEventListener('deviceorientation', deviceOrientationHandler);
            }
          })
          .catch(console.error);
      } else {
        window.addEventListener('deviceorientation', deviceOrientationHandler);
      }
    };
    shell.addEventListener('click', handleClick);

    const initialX = (shell.clientWidth || 0) - ANIMATION_CONFIG.INITIAL_X_OFFSET;
    const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
    tiltEngine.setImmediate(initialX, initialY);
    tiltEngine.toCenter();
    tiltEngine.beginInitial(ANIMATION_CONFIG.INITIAL_DURATION);

    return () => {
      shell.removeEventListener('pointerenter', pointerEnterHandler);
      shell.removeEventListener('pointermove', pointerMoveHandler);
      shell.removeEventListener('pointerleave', pointerLeaveHandler);
      shell.removeEventListener('click', handleClick);
      window.removeEventListener('deviceorientation', deviceOrientationHandler);
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (leaveRafRef.current) cancelAnimationFrame(leaveRafRef.current);
      tiltEngine.cancel();
      shell.classList.remove('entering');
    };
  }, [
    enableTilt,
    enableMobileTilt,
    tiltEngine,
    handlePointerMove,
    handlePointerEnter,
    handlePointerLeave,
    handleDeviceOrientation
  ]);

  // [5] 🔧 CHANGE HERE — corner roundness of the whole card
  const cardRadius = '30px';

  const cardStyle = useMemo(() => ({
    '--inner-bg': bgColor ?? DEFAULT_INNER_BG,
    // [4] 🔧 CHANGE HERE — the glow color/size behind the card
    // (tuned to a soft blue matching the page's mid-tone, widened
    // slightly so it reads as ambient light rather than a hard ring)
    '--behind-glow-color': behindGlowColor ?? 'rgba(130, 150, 220, 0.55)',
    '--behind-glow-size': behindGlowSize ?? '65%',
    '--pointer-x': '50%',
    '--pointer-y': '50%',
    '--pointer-from-center': '0',
    '--pointer-from-top': '0.5',
    '--pointer-from-left': '0.5',
    '--card-opacity': '0',
    '--rotate-x': '0deg',
    '--rotate-y': '0deg',
    '--card-radius': cardRadius
  }), [bgColor, behindGlowColor, behindGlowSize, cardRadius]);

  return (
    // [3] 🔧 FIXED — added w-full + max-w + mx-auto so the card is capped
    // to the viewport/container width on mobile instead of overflowing it.
    <div
      ref={wrapRef}
      className={`relative touch-none w-full max-w-[380px] mx-auto ${className}`.trim()}
      style={{ perspective: '500px', transform: 'translate3d(0, 0, 0.1px)', ...cardStyle }}>
      {behindGlowEnabled && (
        <div
          // 🔧 smoother glow fade: slightly longer duration + ease-out curve
          className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-300 ease-out"
          style={{
            background: `radial-gradient(circle at var(--pointer-x) var(--pointer-y), var(--behind-glow-color) 0%, transparent var(--behind-glow-size))`,
            filter: 'blur(50px) saturate(1.1)',
            opacity: 'calc(0.8 * var(--card-opacity))'
          }} />
      )}
      <div ref={shellRef} className="relative z-[1] group">
        <section
          className="grid relative overflow-hidden backface-hidden w-full"
          style={{
            // [3] 🔧 FIXED — width now drives the size (capped by the
            // wrapper's max-w-[380px]), and height is derived from
            // aspectRatio instead of the old fixed `80svh`, which was
            // making the card wider than the phone screen and cutting
            // it off on the sides.
            width: '100%',
            maxHeight: '640px',
            aspectRatio: '0.718',
            borderRadius: cardRadius,
            boxShadow:
              'rgba(0, 0, 0, 0.8) calc((var(--pointer-from-left) * 10px) - 3px) calc((var(--pointer-from-top) * 20px) - 6px) 20px -5px',
            // [8] 🔧 CHANGE HERE — smoother return-to-flat easing curve
            transition: 'transform 1s cubic-bezier(0.22, 1, 0.36, 1)',
            transform: 'translateZ(0) rotateX(0deg) rotateY(0deg)',
            background: 'rgba(0, 0, 0, 0.9)'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transition = 'none';
            e.currentTarget.style.transform = 'translateZ(0) rotateX(var(--rotate-y)) rotateY(var(--rotate-x))';
          }}
          onMouseLeave={e => {
            const shell = shellRef.current;
            if (shell?.classList.contains('entering')) {
              e.currentTarget.style.transition = 'transform 180ms ease-out';
            } else {
              e.currentTarget.style.transition = 'transform 1s cubic-bezier(0.22, 1, 0.36, 1)';
            }
            e.currentTarget.style.transform = 'translateZ(0) rotateX(0deg) rotateY(0deg)';
          }}>
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: 'var(--inner-bg)',
              borderRadius: cardRadius,
              display: 'grid',
              gridArea: '1 / -1'
            }}>
            {/* Avatar content */}
            <div
              className="overflow-visible backface-hidden"
              style={{
                mixBlendMode: 'luminosity',
                transform: 'translateZ(2px)',
                gridArea: '1 / -1',
                borderRadius: cardRadius,
                pointerEvents: 'none'
              }}>
              {/* [6] 🔧 CHANGE HERE — avatar sizing/position */}
              {/* 🔧 REMOVED: mini-avatar / handle / status / Contact button bar
                  used to live here. It's gone — the card now ends with just
                  the avatar image above and the name/title below. */}
            </div>

            {/* Details content */}
            <div
              className="max-h-full overflow-hidden text-center relative z-[5]"
              style={{
                transform:
                  'translate3d(calc(var(--pointer-from-left) * -6px + 3px), calc(var(--pointer-from-top) * -6px + 3px), 0.1px)',
                mixBlendMode: 'luminosity',
                gridArea: '1 / -1',
                borderRadius: cardRadius,
                pointerEvents: 'none'
              }}>
              <div
                className="w-full absolute flex flex-col items-center"
                style={{ top: '3em', display: 'flex', gridArea: 'auto' }}>
                {/* [7] 🔧 CHANGE HERE — name font size + gradient colors */}
                <h3
                  className="font-bold font-inter m-0 mt-6"
                  style={{
                    fontSize: 'min(5svh, 3em)',
                    backgroundImage: 'linear-gradient(to bottom, #fff, #6f6fbe)',
                    backgroundSize: '1em 1.5em',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    display: 'block',
                    gridArea: 'auto',
                    borderRadius: '0',
                    pointerEvents: 'auto'
                  }}>
                  {name}
                </h3>
                {/* [7] 🔧 CHANGE HERE — title font size + gradient colors */}
                <p
                  className="font-bold font-inter whitespace-nowrap mx-auto w-min mt-4"
                  style={{
                    position: 'relative',
                    top: '-12px',
                    fontSize: '16px',
                    margin: '0 auto',
                    backgroundImage: 'linear-gradient(to bottom, #fff, #4a4ac0)',
                    backgroundSize: '1em 1.5em',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    display: 'block',
                    gridArea: 'auto',
                    borderRadius: '0',
                    pointerEvents: 'auto'
                  }}>
                  {title}
                </p>
              </div>
              <div className="w-full">
                <img src="/src/assets/output.png" alt="profile" className="w-full h-[450px] mt-20" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);
export default ProfileCard;