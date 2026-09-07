import { Icons } from '../utils/icons';

export function renderContact(): string {
  return `
    <section id="contact" class="py-24 md:py-36 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto border-b border-white/10" aria-labelledby="contact-title">
      
      <!-- Section Header with Bold Graphic Divider -->
      <div class="flex flex-col gap-4 mb-16 md:mb-20 gsap-reveal">
        <div class="flex items-center justify-between border-b-2 border-vermilion pb-4">
          <div class="flex items-center gap-3">
            <span class="font-mono text-sm md:text-base font-bold text-vermilion">[ 04 // TRANSMISSION &amp; INQUIRY ]</span>
            <span class="hidden sm:inline text-white/40 font-mono text-xs">• DIRECT CHANNELS</span>
          </div>
          <span class="font-mono text-xs text-paper/60 uppercase">GET IN TOUCH</span>
        </div>

        <h2 id="contact-title" class="font-display font-bold uppercase text-section-title text-paper mt-2 tracking-tighter">
          LET’S BUILD SOMETHING <br class="hidden sm:inline" />
          <span class="text-vermilion">UNCOMPROMISING</span>
        </h2>
        <p class="font-body text-base md:text-xl text-paper/75 max-w-[65ch]">
          Available for senior full-stack roles, custom browser extension architectures, optical protocols, and selected poster commissions.
        </p>
      </div>

      <!-- Contact Grid: 3 Unified Channels -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
        
        <!-- Channel 01: Direct Email -->
        <div class="double-bezel group gsap-reveal">
          <div class="double-bezel-inner p-6 md:p-8 flex flex-col justify-between h-full gap-6">
            <div>
              <div class="flex items-center justify-between font-mono text-xs text-paper/50 mb-4 border-b border-white/5 pb-2">
                <span>01 // DIRECT EMAIL</span>
                <span class="text-paper/60 font-bold">INQUIRY</span>
              </div>
              <h3 class="font-heading font-bold text-xl md:text-2xl text-paper group-hover:text-vermilion transition-colors">
                Email
              </h3>
              <p class="font-mono text-xs md:text-sm text-paper/80 mt-1 break-all select-all">
                Erfanchess450@gmail.com
              </p>
            </div>

            <div class="flex flex-col gap-2.5 pt-4 border-t border-white/10">
              <a href="mailto:Erfanchess450@gmail.com" class="btn-pill bg-white/5 hover:bg-vermilion hover:text-white text-paper text-xs font-bold justify-between border border-white/10 transition-colors">
                <span>SEND DISPATCH</span>
                <span class="icon-bubble bg-white/10 text-paper">
                  ${Icons.mail('w-3.5 h-3.5')}
                </span>
              </a>

              <button id="copy-email-btn" type="button" class="btn-pill bg-white/5 hover:bg-white/10 text-paper text-xs font-mono justify-between border border-white/10 transition-colors">
                <span id="copy-email-text">COPY ADDRESS</span>
                <span class="icon-bubble bg-white/10 text-paper" id="copy-email-icon">
                  ${Icons.copy('w-3.5 h-3.5')}
                </span>
              </button>
            </div>
          </div>
        </div>

        <!-- Channel 02: Telegram (PRIMARY) -->
        <div class="double-bezel group gsap-reveal border-vermilion/40">
          <div class="double-bezel-inner p-6 md:p-8 flex flex-col justify-between h-full gap-6">
            <div>
              <div class="flex items-center justify-between font-mono text-xs mb-4 border-b border-white/5 pb-2">
                <span class="text-paper/50">02 // FAST RESPONSE</span>
                <span class="text-vermilion font-bold tracking-wider uppercase">PRIMARY</span>
              </div>
              <h3 class="font-heading font-bold text-xl md:text-2xl text-paper group-hover:text-vermilion transition-colors">
                Telegram
              </h3>
              <p class="font-mono text-xs md:text-sm text-paper/80 mt-1 select-all">
                @Peaceful_God
              </p>
            </div>

            <div class="flex flex-col gap-2.5 pt-4 border-t border-white/10">
              <a href="https://t.me/Peaceful_God" target="_blank" rel="noopener noreferrer" class="btn-pill bg-white/5 hover:bg-vermilion hover:text-white text-paper text-xs font-bold justify-between border border-white/10 transition-colors">
                <span>OPEN TELEGRAM</span>
                <span class="icon-bubble bg-white/10 text-paper">
                  ${Icons.telegram('w-3.5 h-3.5')}
                </span>
              </a>

              <div class="p-2 text-center text-[11px] font-mono text-paper/40">
                Direct encrypted chat channel
              </div>
            </div>
          </div>
        </div>

        <!-- Channel 03: GitHub -->
        <div class="double-bezel group gsap-reveal">
          <div class="double-bezel-inner p-6 md:p-8 flex flex-col justify-between h-full gap-6">
            <div>
              <div class="flex items-center justify-between font-mono text-xs text-paper/50 mb-4 border-b border-white/5 pb-2">
                <span>03 // CODE ARCHIVE</span>
                <span class="text-paper/60 font-bold">SOURCE</span>
              </div>
              <h3 class="font-heading font-bold text-xl md:text-2xl text-paper group-hover:text-vermilion transition-colors">
                GitHub
              </h3>
              <p class="font-mono text-xs md:text-sm text-paper/80 mt-1 select-all">
                github.com/Erfanvoj
              </p>
            </div>

            <div class="flex flex-col gap-2.5 pt-4 border-t border-white/10">
              <a href="https://github.com/Erfanvoj" target="_blank" rel="noopener noreferrer" class="btn-pill bg-white/5 hover:bg-vermilion hover:text-white text-paper text-xs font-bold justify-between border border-white/10 transition-colors">
                <span>BROWSE REPOSITORIES</span>
                <span class="icon-bubble bg-white/10 text-paper">
                  ${Icons.github('w-3.5 h-3.5')}
                </span>
              </a>

              <div class="p-2 text-center text-[11px] font-mono text-paper/40">
                Ghostblock • RGB Air-Gap • Tools
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  `;
}

export function initContactInteractions(): void {
  const copyBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-email-text');
  const copyIcon = document.getElementById('copy-email-icon');

  if (!copyBtn || !copyText) return;

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('Erfanchess450@gmail.com');
      copyText.textContent = 'COPIED TO CLIPBOARD!';
      copyBtn.classList.add('border-emerald-400', 'text-emerald-400');
      if (copyIcon) copyIcon.innerHTML = Icons.check('w-3.5 h-3.5');

      setTimeout(() => {
        copyText.textContent = 'COPY ADDRESS';
        copyBtn.classList.remove('border-emerald-400', 'text-emerald-400');
        if (copyIcon) copyIcon.innerHTML = Icons.copy('w-3.5 h-3.5');
      }, 2400);
    } catch (e) {
      console.warn('Clipboard write failed:', e);
    }
  });
}
