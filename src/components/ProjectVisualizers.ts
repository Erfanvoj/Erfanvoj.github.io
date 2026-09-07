export function renderGhostblockDemo(): string {
  return `
    <div id="demo-ghostblock" class="my-6 rounded-2xl bg-[#0A0A0A] border border-white/10 p-5 font-mono text-xs overflow-hidden">
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-vermilion"></span>
          <span class="font-bold text-paper text-[11px] tracking-wider uppercase">Ghostblock MV3 Live Telemetry Simulator</span>
        </div>
        <div class="flex items-center gap-2">
          <button id="gb-toggle-mode" type="button" class="px-3 py-1 rounded-full bg-vermilion text-white text-[11px] font-bold tracking-wider uppercase hover:bg-vermilion-hover transition-colors">
            Toggle Mode: <span id="gb-mode-label">Ghostblock Active</span>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <!-- Publisher DOM / Viewport Representation -->
        <div class="bg-[#141414] rounded-xl border border-white/5 p-4 flex flex-col justify-between min-h-[220px]">
          <div class="flex justify-between items-center text-[10px] text-white/50 border-b border-white/5 pb-2">
            <span>CLIENT VIEWPORT CONTAINER</span>
            <span id="gb-dom-status" class="text-emerald-400 font-bold">CONTAINER STUBBED (300×250)</span>
          </div>

          <div class="my-auto flex flex-col items-center justify-center p-4 text-center rounded-lg border border-dashed border-white/10" id="gb-ad-box">
            <span class="text-white/40 text-[11px] font-bold" id="gb-box-text">SPATIAL GEOMETRY PRESERVED (ZERO ADS)</span>
            <span class="text-[10px] text-white/30 mt-1" id="gb-box-sub">Publisher script detects active element bounding box</span>
          </div>

          <div class="flex justify-between items-center text-[10px] pt-2 border-t border-white/5">
            <span class="text-white/40">ANTI-ADBLOCK TRIPWIRE:</span>
            <span id="gb-tripwire-status" class="text-emerald-400 font-bold">BYPASSED (0 DETECTIONS)</span>
          </div>
        </div>

        <!-- Telemetry & Network Log Stream -->
        <div class="bg-[#141414] rounded-xl border border-white/5 p-4 flex flex-col justify-between min-h-[220px]">
          <div class="flex justify-between items-center text-[10px] text-white/50 border-b border-white/5 pb-2">
            <span>SYNTHETIC TELEMETRY BUS</span>
            <span class="text-vermilion">MV3 DECLARATIVE</span>
          </div>

          <div class="font-mono text-[11px] leading-relaxed py-2 flex flex-col gap-1.5 text-paper/80" id="gb-log-stream">
            <div class="text-emerald-400/90">&gt; intercept: google-ads/pagead.js [OK]</div>
            <div class="text-paper/70">&gt; spoof: synthetic impression ID #9842F</div>
            <div class="text-paper/70">&gt; virtualize: computedBoundingRect(300, 250)</div>
            <div class="text-emerald-400/90">&gt; telemetry: callback(onAdLoaded) triggered</div>
          </div>

          <div class="text-[10px] text-white/40 pt-2 border-t border-white/5 flex justify-between">
            <span>RULE ENGINE: &lt;1.1ms</span>
            <span class="text-emerald-400">STATE: UNDETECTED</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initGhostblockDemo(): void {
  const toggleBtn = document.getElementById('gb-toggle-mode');
  const modeLabel = document.getElementById('gb-mode-label');
  const domStatus = document.getElementById('gb-dom-status');
  const tripwireStatus = document.getElementById('gb-tripwire-status');
  const boxText = document.getElementById('gb-box-text');
  const boxSub = document.getElementById('gb-box-sub');
  const adBox = document.getElementById('gb-ad-box');
  const logStream = document.getElementById('gb-log-stream');

  if (!toggleBtn) return;

  let isGhostMode = true;

  toggleBtn.addEventListener('click', () => {
    isGhostMode = !isGhostMode;

    if (isGhostMode) {
      if (modeLabel) modeLabel.textContent = 'Ghostblock Active';
      if (domStatus) {
        domStatus.textContent = 'CONTAINER STUBBED (300×250)';
        domStatus.className = 'text-emerald-400 font-bold';
      }
      if (tripwireStatus) {
        tripwireStatus.textContent = 'BYPASSED (0 DETECTIONS)';
        tripwireStatus.className = 'text-emerald-400 font-bold';
      }
      if (boxText) boxText.textContent = 'SPATIAL GEOMETRY PRESERVED (ZERO ADS)';
      if (boxSub) boxSub.textContent = 'Publisher script detects active element bounding box';
      if (adBox) {
        adBox.className = 'my-auto flex flex-col items-center justify-center p-4 text-center rounded-lg border border-dashed border-white/10';
      }
      if (logStream) {
        logStream.innerHTML = `
          <div class="text-emerald-400/90">&gt; intercept: google-ads/pagead.js [OK]</div>
          <div class="text-paper/70">&gt; spoof: synthetic impression ID #9842F</div>
          <div class="text-paper/70">&gt; virtualize: computedBoundingRect(300, 250)</div>
          <div class="text-emerald-400/90">&gt; telemetry: callback(onAdLoaded) triggered</div>
        `;
      }
    } else {
      if (modeLabel) modeLabel.textContent = 'Standard Block (Naive)';
      if (domStatus) {
        domStatus.textContent = 'NODE COLLAPSED (0×0)';
        domStatus.className = 'text-rose-400 font-bold';
      }
      if (tripwireStatus) {
        tripwireStatus.textContent = 'FLAGGED BY SITE (BLOCKED)';
        tripwireStatus.className = 'text-rose-400 font-bold';
      }
      if (boxText) boxText.textContent = 'ANTI-ADBLOCK MODAL TRIGGERED';
      if (boxSub) boxSub.textContent = 'Page requires user to disable ad blocker or pay';
      if (adBox) {
        adBox.className = 'my-auto flex flex-col items-center justify-center p-4 text-center rounded-lg border border-dashed border-rose-500/40 bg-rose-500/10 text-rose-300';
      }
      if (logStream) {
        logStream.innerHTML = `
          <div class="text-rose-400">&gt; net::ERR_BLOCKED_BY_CLIENT</div>
          <div class="text-rose-400">&gt; Integrity check failed: node.offsetHeight === 0</div>
          <div class="text-rose-400 font-bold">&gt; [!] Anti-Adblock modal injected by publisher</div>
          <div class="text-white/40">&gt; User locked out from article content</div>
        `;
      }
    }
  });
}

export function renderRgbDemo(): string {
  return `
    <div id="demo-rgb-airgap" class="my-6 rounded-2xl bg-[#0A0A0A] border border-white/10 p-5 font-mono text-xs overflow-hidden">
      
      <!-- Top Control Bar -->
      <div class="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3 mb-4">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span class="font-bold text-paper text-[11px] tracking-wider uppercase">LIVE WEB APPLICATION // rgb-file-transfer.netlify.app</span>
        </div>
        <div class="flex items-center gap-3">
          <a href="https://rgb-file-transfer.netlify.app" target="_blank" rel="noopener noreferrer" class="px-3.5 py-1.5 rounded-full bg-vermilion hover:bg-vermilion-hover text-white text-[11px] font-bold tracking-wider uppercase transition-colors inline-flex items-center gap-1.5 shadow-md shadow-vermilion/20">
            <span>Open in New Tab</span>
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </a>
        </div>
      </div>

      <!-- Embedded Live Web Application -->
      <div class="relative w-full rounded-xl overflow-hidden border border-white/10 bg-[#121212] shadow-2xl">
        <iframe 
          src="https://rgb-file-transfer.netlify.app" 
          title="RGB Air-Gap File Transfer Live Web Application" 
          class="w-full h-[520px] md:h-[580px] border-0 bg-black"
          allow="camera; display-capture"
          loading="lazy">
        </iframe>
        
        <!-- Bottom Info Bar -->
        <div class="p-3 bg-[#161616] border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[10px] text-paper/60">
          <div class="flex items-center gap-2">
            <span class="text-emerald-400 font-bold">● ONLINE</span>
            <span>DEEP LINK: https://rgb-file-transfer.netlify.app</span>
          </div>
          <span class="text-paper/40">AIR-GAP OPTICAL TRANSMISSION • NO NETWORK REQUIRED</span>
        </div>
      </div>

    </div>
  `;
}

export function initRgbDemo(): void {
  // Live web application embedded via iframe; listeners handle top link navigation
}
