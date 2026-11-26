/* Building Blocks */
GUIDE.addModule({
  id: "building-blocks",
  title: "Building Blocks",
  intro: `Every screen you ever look at — computer, phone, or tablet — is made up of the same handful of pieces. Once you learn to spot them, nothing on any screen will ever feel unfamiliar.`,
  lessons: [
    { id: "m1-adventure", title: "Screens Are \"Choose Your Own Adventure\" Books",
      html: `<p>Think back to reading a book. You open it, you see a page with words and pictures, and you read it. A screen is like that — it shows you information. But here's the key difference:</p>
<p><strong>In a book, you just read. On a screen, you can DO things.</strong></p>
<p>You can tap a word and instantly jump to a new page. You can press a button and make something happen. You can type something and get a response. Each screen is like a page in a "choose your own adventure" book — you look at what's there, make a choice, and it takes you somewhere new.</p>
<div class="analogy">
<div class="box-label">Think of it this way</div>
<p>Imagine you're reading a recipe book, but instead of just reading the recipe, you could <em>tap</em> on any ingredient and it would add it to your shopping list automatically. That's what a screen does — it lets you interact with the information, not just look at it.</p>
</div>
<p>This is true for every single screen you'll ever see — on your computer, on your iPhone, on your iPad, on someone else's device. They're all interactive pages. And just like every recipe has the same basic ingredients (a title, ingredients, steps), every screen has the same basic building blocks. Let's learn what those are.</p>` },

    { id: "m1-elements", title: "The 7 Things You'll See on Every Screen",
      html: `<p>No matter what device you're using or what you've opened, you'll see some combination of these 7 building blocks. Every website, every app, every screen — they're all just different arrangements of these same pieces:</p>
<h4>1. Buttons</h4>
<p>Buttons are the things you click or tap to <strong>make something happen</strong>. They usually look like colored rectangles with words inside them. When you see words like "Sign In," "Submit," "Next," "OK," or "Cancel" inside a colored rectangle — that's a button.</p>
<p>Here's what real buttons look like. You'll see these everywhere:</p>
<div style="background: var(--win-surface); border-radius: 10px; padding: 20px; margin: 12px 0; display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
<div style="background: var(--win-blue); color: white; padding: 10px 24px; border-radius: 6px; font-size: 0.9rem; font-weight: 600;">Sign In</div>
<div style="background: var(--forest-green); color: white; padding: 10px 24px; border-radius: 6px; font-size: 0.9rem; font-weight: 600;">Submit</div>
<div style="background: #E0E0E0; color: var(--text-dark); padding: 10px 24px; border-radius: 6px; font-size: 0.9rem; font-weight: 600;">Cancel</div>
<div style="background: var(--warm-rose); color: white; padding: 10px 24px; border-radius: 6px; font-size: 0.9rem; font-weight: 600;">Delete</div>
<div style="background: white; color: var(--win-blue); padding: 10px 24px; border-radius: 6px; font-size: 0.9rem; font-weight: 600; border: 2px solid var(--win-blue);">Learn More</div>
</div>
<p>Notice how some buttons are blue, some green, some red? The color often hints at what the button does. Blue usually means "go ahead," green means "confirm/success," and red means "stop/delete/warning." Gray means "cancel" or "go back." This isn't a strict rule, but it's a very common pattern.</p>
<h4>2. Text Fields (Input Boxes)</h4>
<p>These are the boxes where <strong>you type information</strong>. Anytime a screen wants you to enter something — your name, your email address, a password, a search — it gives you a text field. They typically look like white rectangles with a thin border, and they often have faint gray "placeholder" text inside telling you what to type.</p>
<div style="background: var(--win-surface); border-radius: 10px; padding: 20px; margin: 12px 0; max-width: 350px;">
<div style="margin-bottom: 6px; font-size: 0.9rem; font-weight: 600; color: var(--text-dark);">Email Address</div>
<input disabled="" placeholder="yourname@example.com" style="width: 100%; padding: 10px 14px; border: 1px solid #D0D0D0; border-radius: 6px; font-size: 0.9rem; color: #999; background: white; font-family: inherit;" type="text" value=""/>
<div style="margin: 12px 0 6px; font-size: 0.9rem; font-weight: 600; color: var(--text-dark);">Password</div>
<input disabled="" placeholder="Enter your password" style="width: 100%; padding: 10px 14px; border: 1px solid #D0D0D0; border-radius: 6px; font-size: 0.9rem; color: #999; background: white; font-family: inherit;" type="text" value=""/>
</div>
<p>The faint text (like "yourname@example.com") is just a hint — it disappears as soon as you start typing. To use a text field: <strong>click on it once</strong> (you'll see a blinking line appear — that means it's ready for your typing), then start typing.</p>
<h4>3. Links</h4>
<p>Links are words that <strong>take you to another page</strong> when you click or tap them. They're like cross-references in a book — "see page 42" — except they take you there instantly. Links are usually <span style="color: var(--soft-teal); text-decoration: underline;">blue and underlined</span>, though sometimes they're other colors. The important clue: when you move your mouse pointer over a link on a computer, the little arrow changes into a pointing hand.</p>
<div style="background: white; border-radius: 10px; padding: 16px 20px; margin: 12px 0; border: 1px solid #E8E8E8;">
<p style="margin-bottom: 8px; font-size: 0.9rem;">Already have an account? <span style="color: var(--soft-teal); text-decoration: underline; cursor: pointer;">Sign in here</span></p>
<p style="margin-bottom: 8px; font-size: 0.9rem;">Read our <span style="color: var(--soft-teal); text-decoration: underline; cursor: pointer;">Privacy Policy</span> and <span style="color: var(--soft-teal); text-decoration: underline; cursor: pointer;">Terms of Service</span></p>
<p style="font-size: 0.9rem; margin-bottom: 0;"><span style="color: var(--soft-teal); text-decoration: underline; cursor: pointer;">Forgot your password?</span></p>
</div>
<h4>4. Menus</h4>
<p>Menus are <strong>lists of choices</strong>. They work just like the table of contents in a book, or the menu at a restaurant — they show you your options. Some menus are always visible on the screen (especially at the top of websites), while others are hidden until you click on them. The hidden ones are sometimes called "dropdown menus" because they drop down when you click.</p>
<p>You'll often see three little horizontal lines ( ☰ ) — this icon is sometimes called the "hamburger menu" (because it looks a bit like a hamburger bun). Tapping or clicking those lines reveals a hidden menu.</p>
<h4>5. Icons</h4>
<p>Icons are <strong>small pictures that represent something</strong>. They're like the symbols on road signs — a red octagon means "stop" even without the word. Once you learn a few common icons, you'll see them everywhere:</p>
<div class="diagram">
<div class="diagram-title">Icons you'll see all the time</div>
<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px; text-align: center; margin-top: 12px;">
<div class="diagram-box d-blue">🔍 Search</div>
<div class="diagram-box d-green">🏠 Home</div>
<div class="diagram-box d-coral">⚙️ Settings</div>
<div class="diagram-box d-purple">✉️ Email / Mail</div>
<div class="diagram-box d-rose">👤 Your Account</div>
<div class="diagram-box d-teal">← Go Back</div>
<div class="diagram-box d-blue">☰ Menu</div>
<div class="diagram-box d-green">✕ Close / Exit</div>
<div class="diagram-box d-coral">📎 Attachment</div>
<div class="diagram-box d-purple">🔒 Locked / Secure</div>
<div class="diagram-box d-rose">↻ Refresh / Reload</div>
<div class="diagram-box d-teal">+ Add New</div>
</div>
</div>
<h4>6. Tabs</h4>
<p>Tabs are like the labeled dividers in a filing cabinet or a binder. They let you <strong>switch between different sections</strong> without leaving the page. You'll see tabs at the top of your web browser (so you can have multiple websites open at once) and inside many apps and websites.</p>
<h4>7. Pop-ups (Dialog Boxes)</h4>
<p>These are small windows that <strong>appear on top of what you're looking at</strong>. They might ask you a question ("Are you sure you want to delete this?"), show you a message, or ask you to accept cookies. They usually have a button to close them — look for an "X" in the corner, or a button that says "OK," "Accept," or "Close."</p>
<p>Pop-ups can feel intrusive, but most are harmless. We'll talk about which ones to worry about in Module 6.</p>
<div class="key-concept">
<div class="box-label">The big idea</div>
<p><strong>Every website, every app, and every screen is just a different arrangement of these same 7 building blocks.</strong> When you see a new screen for the first time, take a breath and look for the buttons, text fields, links, menus, icons, and tabs. Once you spot them, you'll know exactly what that page is asking you to do. It's like walking into any kitchen — the fridge, stove, and sink are always there, just in different places.</p>
</div>` },

    { id: "m1-zones", title: "The Three Zones: How Every Screen Is Organized",
      html: `<p>Here's something wonderful: almost every website and app follows the exact same layout. It's divided into three zones, like a sandwich. Once you learn this pattern, you can walk into any new website and immediately know where to look.</p>
<div class="browser-mockup annotated-mockup" style="position: relative;">
<div class="browser-chrome">
<div class="browser-tabs">
<div class="browser-tab active">📎 Any Website</div>
</div>
<div class="browser-toolbar">
<div class="browser-nav-btns"><span>←</span> <span>→</span> <span>↻</span></div>
<div class="browser-address"><span class="lock">🔒</span> www.anywebsite.com</div>
</div>
</div>
<div style="background: var(--deep-plum); color: white; padding: 14px 20px; font-size: 0.9rem; display: flex; justify-content: space-between; align-items: center;">
<span style="font-weight: 700;">☰   Company Name</span>
<span style="display: flex; gap: 16px; font-size: 0.9rem;"><span>Home</span> <span>About</span> <span>Contact</span> <span>👤 Account</span></span>
</div>
<div style="position: relative;">
<div style="position: absolute; left: -4px; top: -20px; bottom: -20px; width: 4px;"></div>
<div style="background: white; padding: 50px 20px; text-align: center; font-size: 0.9rem; color: var(--text-medium); min-height: 160px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px;">
<strong style="font-size: 1.1rem; color: var(--text-dark);">Main Content Area</strong>
<span>The article, form, product list, or whatever you came here to see</span>
<div style="background: var(--win-blue); color: white; padding: 8px 24px; border-radius: 6px; font-size: 0.9rem; font-weight: 600; display: inline-block;">Call to Action Button</div>
</div>
</div>
<div style="background: #2C3E50; color: rgba(255,255,255,0.7); padding: 14px 20px; font-size: 0.9rem; display: flex; justify-content: space-between;">
<span>About Us · Contact · Help · Privacy Policy</span>
<span>© 2026 Company Name</span>
</div>
</div>
<div class="steps" style="margin-top: 20px;">
<div class="step">
<div class="step-num" style="background: var(--deep-plum);">1</div>
<div class="step-content"><strong>The Top Zone (Header/Navigation Bar)</strong> — This is your <strong>control center</strong>. It contains the website's name or logo, the main menu, a search bar, and your account link. It usually stays the same no matter what page of the website you're on. <em>When you arrive at a new website and feel lost, look here first.</em></div>
</div>
<div class="step">
<div class="step-num" style="background: var(--text-medium);">2</div>
<div class="step-content"><strong>The Middle Zone (Content Area)</strong> — This is the <strong>main event</strong>. It's what you actually came to the website for — the article, the form to fill out, the products to browse, the email to read. This part changes as you move around the website.</div>
</div>
<div class="step">
<div class="step-num" style="background: #2C3E50;">3</div>
<div class="step-content"><strong>The Bottom Zone (Footer)</strong> — This is the <strong>fine print</strong>. It has extra links, contact information, and legal stuff. You usually don't need it, but it's where companies put their phone number and help links. If you're looking for a company's phone number to call them, check the footer.</div>
</div>
</div>
<div class="tip-box">
<div class="box-label">Your action plan for any new website</div>
<p>When you land on a new website and feel unsure, do this: <strong>(1)</strong> Look at the top zone — find the menu and search bar. <strong>(2)</strong> Look at the middle zone — read what's there. <strong>(3)</strong> If you need help, scroll to the very bottom and look for "Help" or "Contact Us." That's it. Three steps, and you're oriented.</p>
</div>` },

    { id: "m1-landmarks", title: "Landmarks: Things That Are Almost Always in the Same Place",
      html: `<p>When you drive into a town you've never visited, you still know where to look for things: the gas station is near the freeway exit, the post office is on Main Street. Websites are the same. A few <strong>landmarks</strong> show up in nearly the same spot on almost every website &mdash; your bank, the gas company, Amazon, a website you've never seen before.</p>
<p>Learn these once, and <strong>every new website gets easier</strong>, even ones nobody has shown you.</p>

<table class="acct-table">
  <tr><th>Landmark</th><th>Where to look</th><th>What it does</th></tr>
  <tr><td><span class="landmark">&#128100; Sign In</span></td><td><strong>Top-right corner</strong></td><td>Opens the sign-in page. Sometimes it says "Log In," "My Account," or just shows a little person icon.</td></tr>
  <tr><td><span class="landmark">Company logo</span></td><td><strong>Top-left corner</strong></td><td>Clicking the logo always takes you back to that website's main page. It's a "start over" button.</td></tr>
  <tr><td><span class="landmark">&#9776; Menu</span></td><td>Across the top, or three lines in a top corner</td><td>Shows the list of sections: Billing, Accounts, Help&hellip;</td></tr>
  <tr><td><span class="landmark">&#128269; Search</span></td><td>Top, often in the middle</td><td>Type what you want instead of hunting for it.</td></tr>
  <tr><td><span class="landmark">&#128722; Cart</span></td><td>Top-right (shopping websites)</td><td>Your basket of things you're about to buy.</td></tr>
  <tr><td><span class="landmark">Contact Us / Help</span></td><td><strong>The very bottom</strong> of the page</td><td>Phone numbers, help pages, office hours. Scroll all the way down.</td></tr>
  <tr><td><span class="landmark">Sign Out</span></td><td>Click your name or &#128100; in the top-right</td><td>Ends your visit. A small menu opens with "Sign Out" in it.</td></tr>
  <tr><td><span class="landmark">&#10005; Close</span></td><td>Top-right corner of a pop-up box</td><td>Makes the pop-up go away.</td></tr>
</table>

<div class="key-concept">
  <div class="box-label">The big idea</div>
  <p>Every company decorates its building differently &mdash; different colors, different pictures. But the <strong>doors are in the same places</strong>. When a website looks unfamiliar, ignore the decorations and look for the landmarks.</p>
</div>

<p>Below is a pretend website for a water company you've never heard of. Nobody has shown you this website before &mdash; and you don't need them to.</p>

<div class="spot" data-hint="Sign In is almost always in the top-right corner.">
  <div class="spot-head">Can you spot it?</div>
  <div class="spot-q">You want to sign in to your account. Where would you click?</div>
  <div class="spot-screen">
    <div class="s-bar"><span class="s-addr">&#128274; www.sunnyvalleywater.com</span></div>
    <div class="s-head" style="background:#E6F4F1">
      <span class="s-logo" style="color:#0E6B5C">&#128167; Sunny Valley Water</span>
      <button class="spot-decoy" data-say="That's the menu section about the company's history.">About Us</button>
      <button class="spot-decoy" data-say="That section is for news stories.">News</button>
      <button class="spot-target" style="background:#0E6B5C;color:#fff">&#128100; My Account</button>
    </div>
    <div class="s-body">
      <p style="font-size:1.2rem;font-weight:700;margin-bottom:6px">Saving water this summer</p>
      <p style="margin-bottom:10px">Tips for keeping your garden green while using less water.</p>
      <button class="spot-decoy" data-say="That opens a news article, not your account." style="background:#F3B33D">Read more</button>
    </div>
    <div class="s-foot"><button class="spot-decoy" data-say="That's the Contact Us page &mdash; useful, but it's for phone numbers, not signing in.">Contact Us</button><span>Privacy</span><span>Careers</span></div>
  </div>
  <div class="spot-msg yes">Yes! <strong>"My Account"</strong> with the little person icon, in the top-right corner, is this website's Sign In button. Different words, same place, same job.</div>
  <div class="spot-msg hint"></div>
  <div class="spot-actions"><button class="bar-btn" data-action="spot-show">Show me</button></div>
</div>

<div class="spot" data-hint="Help and phone numbers usually live at the very bottom of a page.">
  <div class="spot-head">One more</div>
  <div class="spot-q">Now you want the company's phone number. Where would you look?</div>
  <div class="spot-screen">
    <div class="s-bar"><span class="s-addr">&#128274; www.sunnyvalleywater.com</span></div>
    <div class="s-head" style="background:#E6F4F1">
      <span class="s-logo" style="color:#0E6B5C">&#128167; Sunny Valley Water</span>
      <button class="spot-decoy" data-say="That's for signing in to your account.">&#128100; My Account</button>
    </div>
    <div class="s-body"><p>Saving water this summer &mdash; tips for your garden.</p></div>
    <div class="s-foot"><button class="spot-target">Contact Us</button><button class="spot-decoy" data-say="That page explains how they use your information.">Privacy</button><button class="spot-decoy" data-say="That's for people who want a job there.">Careers</button></div>
  </div>
  <div class="spot-msg yes">That's it! <strong>Contact Us</strong> at the very bottom is where companies list their real phone numbers and hours. This is also the safest way to find a company's number &mdash; much safer than a number in a surprise email or text.</div>
  <div class="spot-msg hint"></div>
  <div class="spot-actions"><button class="bar-btn" data-action="spot-show">Show me</button></div>
</div>` },

    { id: "m1-clicking", title: "Clicking, Tapping, and Typing: How You Talk to Your Devices",
      html: `<p>Your devices are waiting for you to tell them what to do. You "talk" to them through a few simple actions. These actions are slightly different on a computer vs. your phone/tablet:</p>
<div class="try-it-callout" data-hint-group="tabs-first">
<div class="try-icon">👉</div>
<div class="try-text"><strong>Practice right here!</strong> See the two labels below — "On Your Computer" and "On iPhone/iPad"? Those are <strong>tabs</strong> (one of the building blocks we just learned!). Try clicking the one that says "On iPhone/iPad" to switch to the other section. Then click "On Your Computer" to switch back.<br/><span>This guide has tabs, "Can you spot it?" practice screens, and other things to click throughout. Nothing you click can break anything — explore freely!</span></div>
</div>
<div class="tab-container" data-interactive="">
<div class="tab-buttons">
<button class="tab-btn active" onclick="showTab(this,'input-computer')">On Your Computer</button>
<button class="tab-btn" onclick="showTab(this,'input-phone')">On iPhone/iPad</button>
</div>
<div class="tab-content active" id="input-computer">
<p><strong>Single Click (left mouse button)</strong> — This is the most common action. One quick press of the left mouse button. Use this to: select something, press a button, click a link, or put your cursor in a text field so you can type.</p>
<p><strong>Double Click (left mouse button, quickly twice)</strong> — Two quick clicks in a row. Use this to: open a program or file on your desktop. It's like knocking twice on a door to open it.</p>
<p><strong>Right Click (right mouse button)</strong> — One click of the right button. This opens a small menu with extra options — like a "secret menu." You won't need this often as a beginner, but it's good to know it exists.</p>
<p><strong>Scrolling (mouse wheel or touchpad)</strong> — Roll the wheel on your mouse, or slide two fingers up/down on a laptop touchpad. This scrolls the page up and down — just like turning the pages of a book.</p>
<p><strong>Typing</strong> — Click on a text field first (to make it active — you'll see a blinking vertical line), then type on your keyboard.</p>
</div>
<div class="tab-content" id="input-phone">
<p><strong>Tap</strong> — Touch the screen once, quickly and lightly, with one finger. This is the same as a click on a computer. Use it to press buttons, open apps, and select things.</p>
<p><strong>Swipe</strong> — Touch the screen and slide your finger in a direction without lifting it. Swipe up/down to scroll through a page. Swipe left/right to move between pages or delete items.</p>
<p><strong>Tap and Hold (Long Press)</strong> — Touch something and keep your finger on it for a second or two. This usually opens extra options — like right-clicking on a computer.</p>
<p><strong>Pinch</strong> — Touch the screen with two fingers and bring them together (to zoom out / make things smaller) or spread them apart (to zoom in / make things bigger). Great for making text bigger on a webpage!</p>
<p><strong>Typing</strong> — Tap on a text field and a keyboard will appear at the bottom of your screen. Tap the letters to type. When you're done, look for a button that says "Done," "Go," "Search," or "Return" on the keyboard.</p>
</div>
</div>
<div class="key-concept">
<div class="box-label">The most important thing to remember</div>
<p><strong>You cannot break anything by clicking or tapping the wrong thing.</strong> If you accidentally go to the wrong page, just press the <strong>Back button</strong> (the left arrow ← at the top of your browser, or swipe right from the left edge on your iPhone). If something strange happens, just close the window or app and start over. Exploring is how you learn!</p>
</div>` },

    { id: "building-blocks-practice", title: "Think It Through", practice: true,
      html: `<p class="lead">Here are a few questions to think through. There's no score and nothing to pass. Tap whichever answer feels right — if it's not quite it, you'll get a gentle hint and can try again.</p>
<div class="quiz">
<div class="quiz-header">Check your understanding</div>
<h3>You're on a website and you see a colored rectangle that says "Submit." What is it, and what do you do with it?</h3>
<div class="quiz-options">
<button class="quiz-option" data-correct="true">It's a button — I click or tap it to make something happen (like sending a form)</button>
<button class="quiz-option" data-correct="false">It's a link — it will take me to a new page</button>
<button class="quiz-option" data-correct="false">It's a text field — I should type something in it</button>
</div>
<div class="quiz-feedback correct-fb">That's exactly right! Colored rectangles with words like "Submit," "Sign In," or "Next" are buttons. You click or tap them to make something happen. You're already getting the hang of this, Celine!</div>
<div class="quiz-feedback incorrect-fb">Not quite — colored rectangles with words inside are buttons! You click or tap them to make something happen. Links are usually just underlined words, and text fields are empty boxes where you type.</div>
</div>
<div class="quiz">
<div class="quiz-header">One more</div>
<h3>You arrive at a new website and feel lost. Where should you look first?</h3>
<div class="quiz-options">
<button class="quiz-option" data-correct="true">The top zone — that's where the menu, search bar, and navigation are</button>
<button class="quiz-option" data-correct="false">The very bottom of the page</button>
<button class="quiz-option" data-correct="false">Just close the page and try something else</button>
</div>
<div class="quiz-feedback correct-fb">Exactly! The top zone is your control center. The menu, search bar, and account link are almost always up there. Great thinking!</div>
<div class="quiz-feedback incorrect-fb">The best strategy is to look at the top zone first — that's where the menu, search bar, and navigation live on almost every website. Think of it as the control panel!</div>
</div>` }
  ]
});
