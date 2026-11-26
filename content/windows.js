/* Your Windows Computer */
GUIDE.addModule({
  id: "windows",
  title: "Your Windows Computer",
  intro: `Let's get comfortable with the machine you sit in front of at home. We'll learn what everything on your screen means, how your files are organized, and how to change your settings.`,
  lessons: [
    { id: "m2-desktop", title: "The Desktop & Taskbar",
      html: `<p>When you turn on your computer and sign in (by typing your password or PIN), the first thing you see is the <strong>Desktop</strong>. This is your home base — like your physical desk at home.</p>
<div class="win-desktop annotated-mockup">
<div class="win-desktop-icons">
<div class="win-desktop-icon"><div class="icon-img">🗃</div><span>Recycle Bin</span></div>
<div class="win-desktop-icon"><div class="icon-img">🌐</div><span>Google Chrome</span></div>
<div class="win-desktop-icon"><div class="icon-img">📄</div><span>Tax Documents</span></div>
<div class="win-desktop-icon"><div class="icon-img">📁</div><span>Family Photos</span></div>
</div>
<div class="win-taskbar">
<div class="win-start-btn" title="Start button">
<svg height="20" viewbox="0 0 20 20" width="20"><rect fill="#0078D4" height="8" width="8" x="1" y="1"></rect><rect fill="#0078D4" height="8" width="8" x="11" y="1"></rect><rect fill="#0078D4" height="8" width="8" x="1" y="11"></rect><rect fill="#0078D4" height="8" width="8" x="11" y="11"></rect></svg>
</div>
<div class="win-search-bar"><span>🔍</span> Type here to search</div>
<div class="win-taskbar-icons">
<div class="win-taskbar-icon">📁</div>
<div class="win-taskbar-icon">🌐</div>
<div class="win-taskbar-icon">✉️</div>
</div>
<div class="win-tray">
<span>🔈</span>
<span>📶</span>
<span>3:42 PM<br/><span style="font-size: 0.9rem;">3/23/2026</span></span>
</div>
</div>
<div class="mock-marker" style="bottom: 52px; left: 4px;">1</div>
<div class="mock-marker" style="bottom: 52px; left: 190px;">2</div>
<div class="mock-marker" style="bottom: 52px; right: 8px;">3</div>
</div><ol class="mock-legend"><li>Start Button — click to open the Start Menu</li><li>Search — type to find anything</li><li>Clock, Wi-Fi, Volume</li></ol>
<p>Let's break down what you're seeing:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>The Desktop background (wallpaper)</strong> — The big picture that fills the screen. It's just decoration — like a tablecloth. You can ignore it.</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>Icons on the desktop</strong> — The small pictures scattered on the desktop. Each one represents a program, file, or folder. <strong>Double-click</strong> any icon to open it (click twice, quickly).</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>The Taskbar (the strip at the very bottom)</strong> — This is like the dashboard of your car. It's always there, no matter what you're doing. It shows you: the Start button (far left), a search bar, shortcut icons for your favorite programs, and — over on the right — the clock, Wi-Fi signal, and volume control.</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>The Start button</strong> — The four-square Windows logo in the bottom-left corner. Click it once to open the Start Menu (we'll cover that next). This is the most important button on your entire computer — it's your gateway to everything.</div>
</div>
</div>
<div class="analogy">
<div class="box-label">Think of it this way</div>
<p>Your desktop is like your physical desk at home. The icons on it are like papers and folders you've placed on top for easy access. The <strong>Taskbar</strong> is like the top drawer of your desk — it holds your most-used tools. And the <strong>Start button</strong> is like the key to your filing cabinet — it opens up everything else.</p>
</div>` },
    { id: "m2-start", title: "The Start Menu: Your Master Directory",
      html: `<p>When you click the <strong>Start button</strong> (the Windows logo in the bottom-left corner), a panel slides up. This is the <strong>Start Menu</strong>. Think of it as a complete directory of everything installed on your computer.</p>
<div class="win-window" style="max-width: 380px; margin: 20px auto;">
<div style="background: var(--win-surface); padding: 16px; border-radius: 8px;">
<div style="display: flex; gap: 8px; margin-bottom: 12px;">
<div style="flex: 1; background: white; border: 1px solid #D0D0D0; border-radius: 4px; padding: 8px 12px; font-size: 0.9rem; color: var(--text-light); display: flex; align-items: center; gap: 6px;">🔍 Search apps, settings, documents</div>
</div>
<div style="font-size: 0.9rem; font-weight: 600; color: var(--text-dark); margin-bottom: 8px;">Pinned</div>
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; margin-bottom: 16px;">
<div style="text-align: center; font-size: 0.9rem; color: var(--text-dark);"><div style="font-size: 1.4rem; margin-bottom: 2px;">🌐</div>Chrome</div>
<div style="text-align: center; font-size: 0.9rem; color: var(--text-dark);"><div style="font-size: 1.4rem; margin-bottom: 2px;">📁</div>File Explorer</div>
<div style="text-align: center; font-size: 0.9rem; color: var(--text-dark);"><div style="font-size: 1.4rem; margin-bottom: 2px;">⚙️</div>Settings</div>
<div style="text-align: center; font-size: 0.9rem; color: var(--text-dark);"><div style="font-size: 1.4rem; margin-bottom: 2px;">📄</div>Word</div>
</div>
<div style="font-size: 0.9rem; font-weight: 600; color: var(--text-dark); margin-bottom: 8px;">Recommended</div>
<div style="font-size: 0.9rem; color: var(--text-medium); padding: 6px 0;">📄 Tax_Document_2024.pdf — <span style="color: var(--text-light);">Yesterday</span></div>
<div style="font-size: 0.9rem; color: var(--text-medium); padding: 6px 0;">📸 Family_photo.jpg — <span style="color: var(--text-light);">Last week</span></div>
</div>
<div style="background: #E8E8E8; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; font-size: 0.9rem; border-radius: 0 0 8px 8px;">
<span>👤 Celine</span>
<span style="color: var(--text-medium);">⏻ Power</span>
</div>
</div>
<p>What you'll see in the Start Menu:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>A search bar at the top</strong> — This is incredibly powerful. Instead of hunting through menus, you can just type the name of what you're looking for. Want to open Google Chrome? Type "Chrome." Want to find your Settings? Type "Settings." This is the single best trick on your entire computer.</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>Pinned apps</strong> — These are programs you use frequently, placed here for quick access. Just click one to open it.</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>Recommended</strong> — Recent files you've opened. Helpful for quickly getting back to something you were working on.</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>Your name and the Power button (at the bottom)</strong> — Your name leads to account settings. The Power button is how you shut down, restart, or put your computer to sleep.</div>
</div>
</div>` },
    { id: "m2-files", title: "Files & Folders: Your Digital Filing Cabinet",
      html: `<p>This is one of the most important concepts in all of computing. But the good news is — you already understand it, because it works exactly like a real-world filing system.</p>
<div class="analogy">
<div class="box-label">The filing cabinet analogy</div>
<p>Imagine the big filing cabinet in your home. It has <strong>drawers</strong> (on your computer, these are the main locations like "Documents," "Pictures," "Downloads"). Inside each drawer, you have <strong>folders</strong> with labels on them ("Tax Returns," "Medical Records," "Recipes"). Inside each folder, you have <strong>individual papers</strong> — these are your files (a PDF of your tax return, a photo, a letter).</p>
<p style="margin-top: 8px;">On your computer, <strong>folders can go inside other folders</strong> — just like you might have a big folder labeled "Medical" with smaller folders inside for each family member. This is called "nesting," and it's how you keep things organized.</p>
</div>
<div class="diagram">
<div class="diagram-title">How your files are organized — like a tree</div>
<div style="text-align: left; padding: 10px 20px; font-size: 0.9rem; line-height: 2.1;">
<div>💻 <strong>This PC (Your Computer)</strong></div>
<div style="margin-left: 28px;">📁 <strong style="color: var(--win-blue);">Documents</strong></div>
<div style="margin-left: 56px;">📁 Tax Returns</div>
<div style="margin-left: 84px;">📄 2024_Federal_Return.pdf</div>
<div style="margin-left: 84px;">📄 2024_State_Return.pdf</div>
<div style="margin-left: 56px;">📁 Medical Records</div>
<div style="margin-left: 84px;">📄 Dr_Smith_Labs_Jan2026.pdf</div>
<div style="margin-left: 28px;">📁 <strong style="color: var(--win-blue);">Pictures</strong></div>
<div style="margin-left: 56px;">📁 Family Photos</div>
<div style="margin-left: 84px;">📸 thanksgiving_2025.jpg</div>
<div style="margin-left: 84px;">📸 grandkids_birthday.jpg</div>
<div style="margin-left: 28px;">📁 <strong style="color: var(--win-blue);">Downloads</strong></div>
<div style="margin-left: 56px;">📄 airline_boarding_pass.pdf</div>
<div style="margin-left: 56px;">📄 prescription_refill_form.pdf</div>
</div>
</div>
<p>A <strong>file</strong> is any individual thing stored on your computer — a document, a photo, a PDF, a spreadsheet. Every file has a name and a <strong>type</strong> (shown by the letters after the dot at the end of the name). For example:</p>
<div style="background: var(--win-surface); border-radius: 10px; padding: 16px 20px; margin: 12px 0; font-size: 0.9rem;">
<p style="margin-bottom: 6px;"><strong>vacation_photo.jpg</strong> — A photo (.jpg means it's an image)</p>
<p style="margin-bottom: 6px;"><strong>tax_return_2024.pdf</strong> — A document (.pdf is the most common document format)</p>
<p style="margin-bottom: 6px;"><strong>letter_to_insurance.docx</strong> — A Word document (.docx means Microsoft Word)</p>
<p style="margin-bottom: 0;"><strong>budget.xlsx</strong> — A spreadsheet (.xlsx means Microsoft Excel)</p>
</div>
<div class="tip-box">
<div class="box-label">Where do downloaded files go?</div>
<p>When you download something from the internet — a boarding pass, a receipt, a form — it goes into a special folder called <strong>Downloads</strong>. This is the #1 place to look if you can't find something you just downloaded. We'll learn how to get there in the next lesson.</p>
</div>` },
    { id: "m2-fileexplorer", title: "Using File Explorer: Browsing Your Filing Cabinet",
      html: `<p><strong>File Explorer</strong> is the program you use to browse through all your files and folders. It's your window into the filing cabinet. You open it by clicking the <strong>yellow folder icon</strong> on the Taskbar (the strip at the bottom of your screen).</p>
<div class="win-window annotated-mockup">
<div class="win-titlebar">
<span style="font-size: 0.9rem; margin-right: 8px;">📁</span>
<span class="win-titlebar-text">File Explorer — Documents</span>
<div class="win-titlebar-btns">
<div class="win-btn">–</div>
<div class="win-btn">□</div>
<div class="win-btn close">✕</div>
</div>
</div>
<div class="win-window-body">
<div class="fe-sidebar">
<div class="fe-sidebar-section">Quick Access</div>
<div class="fe-sidebar-item">💻 Desktop</div>
<div class="fe-sidebar-item selected">📁 Documents</div>
<div class="fe-sidebar-item">📁 Downloads</div>
<div class="fe-sidebar-item">📸 Pictures</div>
<div class="fe-sidebar-item">🎵 Music</div>
<div class="fe-sidebar-section">This PC</div>
<div class="fe-sidebar-item">💿 Local Disk (C:)</div>
</div>
<div class="fe-main">
<div class="fe-address-bar">
<span>←</span> <span>→</span> <span>↑</span>
<span style="border-left: 1px solid #D0D0D0; padding-left: 8px;">📁 This PC &gt; Documents</span>
</div>
<div class="fe-files">
<div class="fe-file"><div class="fe-file-icon">📁</div><span>Tax Returns</span></div>
<div class="fe-file"><div class="fe-file-icon">📁</div><span>Medical Records</span></div>
<div class="fe-file"><div class="fe-file-icon">📁</div><span>Insurance</span></div>
<div class="fe-file"><div class="fe-file-icon">📄</div><span>Letter to Bank.docx</span></div>
<div class="fe-file"><div class="fe-file-icon">📄</div><span>Shopping List.docx</span></div>
</div>
</div>
</div>
<div class="mock-marker" style="left: 186px; top: 80px;">1</div>
<div class="mock-marker" style="top: 42px; right: 20px; ">2</div>
</div><ol class="mock-legend"><li>Click these shortcuts to jump to major folders</li><li>Close, Maximize, Minimize buttons</li></ol>
<p>Here's how to navigate File Explorer:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>The left panel (sidebar)</strong> — This shows your main locations: Desktop, Documents, Downloads, Pictures, and more. Click any of these to jump directly to that location. This is like opening a specific drawer in your filing cabinet.</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>The main area (right side)</strong> — This shows what's inside the location you've selected. You'll see folders (with folder icons) and files (with document icons). <strong>Double-click a folder</strong> to open it and see what's inside. <strong>Double-click a file</strong> to open it.</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>The address bar (at the top of the main area)</strong> — This shows you exactly where you are, like breadcrumbs. If it says "This PC &gt; Documents &gt; Tax Returns," that means you're inside the Tax Returns folder, which is inside Documents.</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>The back arrow (←)</strong> — Just like in a web browser, clicking the back arrow takes you back to where you just were. Use it freely!</div>
</div>
</div>
<div class="key-concept">
<div class="box-label">The one trick that solves most file problems</div>
<p>If you ever download something and can't find it: open File Explorer (yellow folder icon on the Taskbar), then click <strong>"Downloads"</strong> in the left sidebar. Your file will be there! Downloaded files are sorted with the newest at the top, so the file you just downloaded should be right at the top of the list.</p>
</div>
<h4>What About Those Extra Folders? (OneDrive &amp; Shared Folders)</h4>
<p>When you open File Explorer, you might notice some folders in the left sidebar that don't seem familiar — they might have someone else's name on them (like <strong>"Robert"</strong> or <strong>"rbear"</strong>) or say something like <strong>"OneDrive"</strong> with a cloud icon next to them.</p>
<p>Here's what's happening: your computer is connected to a <strong>Microsoft 365 Family plan</strong>, which is a shared subscription. As part of that setup, some of Dad's cloud storage folders may show up alongside your own. Think of it like a shared filing cabinet where you can see the labels on his drawers, even though you have your own drawers.</p>
<div class="warning-box">
<div class="box-label">What to do when you see unfamiliar folder names</div>
<p><strong>Ignore any folders with Dad's name</strong> (like "Robert," "rbear," or anything you don't recognize). Those are his files stored in the cloud — they're not yours, and you don't need them.</p>
<p style="margin-top: 8px;"><strong>Stick to your own familiar locations:</strong> When you need to find your files, click <strong>Desktop</strong>, <strong>Documents</strong>, <strong>Downloads</strong>, or <strong>Pictures</strong> in the left sidebar. These are YOUR folders. If you ever get confused about which folder is yours, look for the ones that don't have another person's name on them.</p>
</div>
<div class="diagram">
<div class="diagram-title">What you'll see in the File Explorer sidebar</div>
<div style="text-align: left; padding: 10px 20px; font-size: 0.9rem; line-height: 2.2;">
<div style="color: var(--forest-green); font-weight: 600;">✅ <strong>YOUR folders (use these!):</strong></div>
<div style="margin-left: 28px;">💻 Desktop</div>
<div style="margin-left: 28px;">📁 Documents</div>
<div style="margin-left: 28px;">📁 Downloads</div>
<div style="margin-left: 28px;">📸 Pictures</div>
<div style="margin-top: 10px; color: var(--warm-rose); font-weight: 600;">❌ <strong>Ignore these — they're Dad's:</strong></div>
<div style="margin-left: 28px; color: var(--text-light);">☁️ OneDrive - Robert</div>
<div style="margin-left: 28px; color: var(--text-light);">☁️ rbear</div>
<div style="margin-left: 28px; color: var(--text-light);">👤 Robert's folder</div>
</div>
</div>
<div class="analogy">
<div class="box-label">Think of it this way</div>
<p>OneDrive is Microsoft's "cloud storage" — it's like an invisible filing cabinet in the sky that syncs your files across devices. Because you share a family plan with Dad, his cloud cabinet shows up next to yours. You don't need to open it, move it, or worry about it. Just skip right past it and go to your own folders.</p>
</div>` },
    { id: "m2-windows", title: "Managing Windows: Having Multiple Things Open",
      html: `<p>Every program or webpage you open appears in its own <strong>window</strong> — that's where "Windows" gets its name! You can have multiple windows open at the same time, just like having multiple papers spread across your desk.</p>
<p>Every window has <strong>three tiny buttons in the top-right corner</strong>. These are incredibly important:</p>
<div class="diagram">
<div class="diagram-title">The three window control buttons (top-right corner)</div>
<div style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-top: 12px;">
<div style="text-align: center; max-width: 180px;">
<div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 30px; background: #E5E5E5; border-radius: 4px; font-size: 1.2rem; margin-bottom: 8px;">–</div>
<div style="font-weight: 700; color: var(--deep-plum); font-size: 0.9rem;">Minimize</div>
<div style="font-size: 0.9rem; color: var(--text-medium);">Hides the window. It's still running — just tucked away. Click its icon on the Taskbar to bring it back.</div>
</div>
<div style="text-align: center; max-width: 180px;">
<div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 30px; background: #E5E5E5; border-radius: 4px; font-size: 1.2rem; margin-bottom: 8px;">□</div>
<div style="font-weight: 700; color: var(--deep-plum); font-size: 0.9rem;">Maximize / Restore</div>
<div style="font-size: 0.9rem; color: var(--text-medium);">Makes the window fill the entire screen. Click again to shrink it back down.</div>
</div>
<div style="text-align: center; max-width: 180px;">
<div style="display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 30px; background: #E81123; color: white; border-radius: 4px; font-size: 1.1rem; margin-bottom: 8px;">✕</div>
<div style="font-weight: 700; color: var(--deep-plum); font-size: 0.9rem;">Close</div>
<div style="font-size: 0.9rem; color: var(--text-medium);">Closes the window completely. The program stops running. You'll need to reopen it if you want it again.</div>
</div>
</div>
</div>
<div class="analogy">
<div class="box-label">Think of it this way</div>
<p><strong>Minimize</strong> is like putting a paper face-down on your desk — it's still there, just hidden. <strong>Maximize</strong> is like spreading the paper across your entire desk to focus on it. <strong>Close</strong> is like putting the paper back in the filing cabinet — it's no longer on your desk at all.</p>
</div>
<div class="tip-box">
<div class="box-label">Switching between open windows</div>
<p>If you have multiple things open (say, a web browser and a document), you can switch between them by clicking their icons on the <strong>Taskbar</strong> at the bottom of the screen. Each open program has its own icon down there. You can also hold the <strong>Alt</strong> key and press <strong>Tab</strong> to see all your open windows and switch between them.</p>
</div>` },
    { id: "m2-settings", title: "Settings & the Search Trick",
      html: `<p><strong>Settings</strong> is where you adjust how your computer behaves — like the thermostat and light switches in your home. To open it: click the <strong>Start button</strong> → click the <strong>gear icon ⚙️ (Settings)</strong>.</p>
<div class="win-window" style="max-width: 520px;">
<div class="win-titlebar">
<span style="font-size: 0.9rem; margin-right: 8px;">⚙️</span>
<span class="win-titlebar-text">Settings</span>
<div class="win-titlebar-btns">
<div class="win-btn">–</div>
<div class="win-btn">□</div>
<div class="win-btn close">✕</div>
</div>
</div>
<div class="win-settings-body">
<div class="win-settings-sidebar">
<div class="win-settings-item"><span>💻</span> System</div>
<div class="win-settings-item"><span>📶</span> Network &amp; Internet</div>
<div class="win-settings-item selected"><span>🔇</span> Bluetooth &amp; Devices</div>
<div class="win-settings-item"><span>🎨</span> Personalization</div>
<div class="win-settings-item"><span>🔐</span> Privacy &amp; Security</div>
<div class="win-settings-item"><span>🔄</span> Windows Update</div>
</div>
<div class="win-settings-main">
<h4>Display Settings</h4>
<div class="slider-row">
<span style="font-size: 0.9rem;">Brightness</span>
<div class="slider-track"><div class="slider-fill"></div><div class="slider-thumb"></div></div>
</div>
<div style="margin-top: 16px;">
<span style="font-size: 0.9rem; font-weight: 600;">Scale (text and app size)</span>
<div style="margin-top: 4px; background: white; border: 1px solid #D0D0D0; border-radius: 4px; padding: 6px 10px; font-size: 0.9rem; display: inline-block;">
                125% (Recommended) ▼
              </div>
<p style="font-size: 0.9rem; color: var(--text-light); margin-top: 4px; margin-bottom: 0;">Change the size of text, apps, and other items</p>
</div>
<div class="toggle-row" style="margin-top: 16px;">
<span>Night light</span>
<div class="toggle off"></div>
</div>
</div>
</div>
</div>
<p>Here are the settings you'll use most often:</p>
<div class="try-it-callout">
<div class="try-icon">👉</div>
<div class="try-text"><strong>Tabs again!</strong> Click each tab label below — "Text Size," "Wi-Fi," "Volume," "Updates" — to see instructions for that setting.</div>
</div>
<div class="tab-container" data-interactive="">
<div class="tab-buttons">
<button class="tab-btn active" onclick="showTab(this,'s-textsize')">Text Size</button>
<button class="tab-btn" onclick="showTab(this,'s-wifi')">Wi-Fi</button>
<button class="tab-btn" onclick="showTab(this,'s-volume')">Volume</button>
<button class="tab-btn" onclick="showTab(this,'s-updates')">Updates</button>
</div>
<div class="tab-content active" id="s-textsize">
<p><strong>Making everything bigger and easier to read</strong></p>
<p>Settings → System → Display → look for <strong>"Scale"</strong> — change it from 100% to <strong>125% or 150%</strong>. This makes everything on screen larger: text, buttons, icons, everything. If 125% isn't big enough, try 150%.</p>
<p style="margin-top: 8px;">You can also make <em>just</em> the text bigger: Settings → Accessibility → Text size, and slide the bar to the right.</p>
</div>
<div class="tab-content" id="s-wifi">
<p><strong>Connecting to Wi-Fi (your internet connection)</strong></p>
<p>Settings → Network &amp; Internet → Wi-Fi. Make sure Wi-Fi is <strong>turned on</strong> (the switch should be blue). Your home network should connect automatically. If it's not connected, click the name of your network and enter the password.</p>
<p style="margin-top: 8px; color: var(--text-light); font-style: italic;">The Wi-Fi password might be on a sticker on the back or bottom of your router — the small box with blinking lights, usually near your TV or desk.</p>
</div>
<div class="tab-content" id="s-volume">
<p><strong>Adjusting the volume</strong></p>
<p>The quickest way: click the <strong>speaker icon</strong> in the bottom-right corner of your screen (in the Taskbar tray area). A slider appears — drag it left to lower the volume, right to raise it. You can also click the speaker icon on the left of the slider to mute/unmute.</p>
</div>
<div class="tab-content" id="s-updates">
<p><strong>Keeping your computer up to date</strong></p>
<p>Settings → Windows Update. Your computer regularly needs to install updates to stay secure and running well. Usually this happens automatically, but sometimes it needs you to click <strong>"Restart now"</strong> to finish installing. When you see a message about updates, save any work you have open, then let it restart. It might take a few minutes.</p>
</div>
</div>
<div class="key-concept">
<div class="box-label">The #1 trick on your computer: SEARCH</div>
<p>If you ever need to find <em>anything</em> — a setting, a program, a file — just click the <strong>magnifying glass 🔍 on the Taskbar</strong> and type what you're looking for. Type "Wi-Fi" and it shows you Wi-Fi settings. Type "brightness" and it takes you to brightness controls. Type "Chrome" and it opens Google Chrome. This one trick replaces the need to memorize where anything is. <strong>When in doubt, search!</strong></p>
</div>` },
    { id: "windows-practice", title: "Think It Through", practice: true,
      html: `<p class="lead">Here are a few questions to think through. There's no score and nothing to pass. Tap whichever answer feels right — if it's not quite it, you'll get a gentle hint and can try again.</p>
<div class="quiz">
<div class="quiz-header">Check your understanding</div>
<h3>You downloaded a boarding pass from an airline website 5 minutes ago, but you can't find it. What do you do?</h3>
<div class="quiz-options">
<button class="quiz-option" data-correct="true">Open File Explorer (the yellow folder icon on the Taskbar) and click "Downloads" in the left sidebar</button>
<button class="quiz-option" data-correct="false">Look on the Desktop</button>
<button class="quiz-option" data-correct="false">Open the Settings</button>
</div>
<div class="quiz-feedback correct-fb">That's exactly right! Downloaded files go to the Downloads folder. Open File Explorer and click "Downloads" in the left panel — your file will be right there at the top. Wonderful, Celine!</div>
<div class="quiz-feedback incorrect-fb">The best place to look is the Downloads folder! When you download anything from the internet, it goes there. Open File Explorer (the yellow folder icon on the Taskbar), click "Downloads" in the left sidebar, and your file should be at the top of the list.</div>
</div>
<div class="quiz">
<div class="quiz-header">One more</div>
<h3>You want to make the text on your screen bigger, but you don't know where that setting is. What's the fastest way to find it?</h3>
<div class="quiz-options">
<button class="quiz-option" data-correct="true">Click the search icon (🔍) on the Taskbar and type "text size"</button>
<button class="quiz-option" data-correct="false">Open every menu until you find it</button>
<button class="quiz-option" data-correct="false">It can't be changed</button>
</div>
<div class="quiz-feedback correct-fb">Yes! The search bar is your best friend. Type anything you're looking for and Windows will find it. You'll be solving tech problems on your own in no time!</div>
<div class="quiz-feedback incorrect-fb">The quickest trick is to use the search bar! Click the magnifying glass on the Taskbar and type what you're looking for. "Text size," "Wi-Fi," "volume" — it finds everything!</div>
</div>` }
  ]
});
