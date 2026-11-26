/* Staying Safe & Solving Problems */
GUIDE.addModule({
  id: "safety",
  title: "Staying Safe & Solving Problems",
  intro: `The internet is mostly a helpful, wonderful place. But just like in the real world, a few simple safety habits go a long way. And when things go wrong (they will — it happens to everyone!), there are easy fixes.`,
  lessons: [
    { id: "m6-passwords", title: "Passwords: Your Keys and Key Rings",
      html: `<p>A password is a key. Every website (bank, email, LADWP, Amazon) has its own lock, so you end up with <strong>a lot of keys</strong>. The question is: where do you keep them all?</p>

<div class="key-concept">
  <div class="box-label">Three golden rules for the keys themselves</div>
  <p><strong>1. A different password for each important account</strong> &mdash; especially your bank and your AOL email. If a thief copies one key, it shouldn't open every door.</p>
  <p><strong>2. Long beats complicated.</strong> A short phrase you'll remember is strong: <strong>MyGardenHas12Roses!</strong> or <strong>SundayCoffeeAtTheBeach</strong>. Avoid names and birthdays, like "Celine1947."</p>
  <p><strong>3. Never tell anyone a password or a code</strong> &mdash; not someone on the phone, not someone in an email. Real companies never ask.</p>
</div>

<h4>The three kinds of key rings</h4>
<p>There are three ways to keep track of your passwords. They aren't the same, and it helps to know which is which.</p>

<table class="acct-table">
  <tr><th>Key ring</th><th>How it works</th><th>Good to know</th></tr>
  <tr><td><strong>&#128211; 1. Your paper notebook</strong></td><td>You write each website, username, and password by hand.</td><td>Always works, even when nothing else does. Keep it in a private drawer &mdash; not next to the computer. This is your backup no matter what.</td></tr>
  <tr><td><strong>&#127760; 2. A key ring built into one browser or device</strong><br>(Chrome's Password Manager, the iPhone's Passwords app, Edge's saved passwords)</td><td>When you sign in somewhere, a little box pops up: "Save password?" If you click Save, it fills the password in for you next time.</td><td>Each one only works <strong>in its own world</strong>. Passwords saved in Chrome aren't in Edge. Passwords saved on your iPhone aren't in Chrome on your computer (unless it's set up to share).</td></tr>
  <tr><td><strong>&#128272; 3. A separate password-manager app</strong> (like <strong>Dashlane</strong>, which Dad uses)</td><td>One key ring that works <strong>everywhere</strong>: Chrome, Edge, your iPhone, any website. You remember one strong master password, and it fills in all the others.</td><td>The most complete option, but it's one more thing to set up and learn. If you ever decide to use one, have Asher set it up with you.</td></tr>
</table>

<div class="analogy">
  <div class="box-label">Think of it this way</div>
  <p>The <strong>built-in key rings</strong> are like a key hook by one particular door of your house &mdash; handy when you're at that door, but the keys aren't with you when you go out the other door.</p>
  <p><strong>Dashlane</strong> is like a key ring in your pocket &mdash; it goes with you to every door. That's why Dad uses it: one place for everything, on every device.</p>
</div>

<h4>When the "Save password?" box pops up</h4>
<p>After you sign in somewhere in Chrome, you'll often see a small box near the top-right asking to <strong>save your password</strong>. Your iPhone does the same thing. Here's what to do:</p>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">On <strong>your own</strong> computer or phone: it's fine to click <strong>Save</strong>. Next time, Chrome or your iPhone will fill it in for you.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">On <strong>someone else's</strong> computer, or a library computer: click <strong>Never</strong> or the &#10005;.</div></div><div class="step"><div class="step-num">3</div><div class="step-content"><strong>Either way, also write it in your notebook.</strong> The saved password lives in one browser; your notebook goes everywhere.</div></div></div>
<div class="tip-box"><div class="box-label">Seeing a password Chrome saved</div><p>In Chrome, click the three dots &#8942; in the top-right &rarr; <strong>Passwords and autofill</strong> &rarr; <strong>Google Password Manager</strong>. You'll see every website with a saved password. Your computer's PIN or password may be needed to reveal them. On iPhone, open the <strong>Passwords</strong> app (a key icon).</p></div>

<h4>If you forget a password</h4>
<p>Don't panic &mdash; everyone forgets. Every sign-in page has a link like <strong>"Forgot password?"</strong> Click it, and the website sends a reset link to your email (or a code to your phone). Open it, choose a new password, and <strong>write the new one in your notebook</strong>. This is normal and safe, as long as <em>you</em> started it from the real website.</p>

<div class="quiz"><div class="quiz-header">Think it through</div><h3>You sign in to SoCalGas in Edge, and it doesn't fill in your password &mdash; even though Chrome always does. Why?</h3><div class="quiz-options"><button class="quiz-option" data-correct="true">Passwords saved in Chrome stay in Chrome. Edge is a different key ring.</button><button class="quiz-option" data-correct="false">My SoCalGas account was deleted.</button></div><div class="quiz-feedback correct-fb">Exactly. Chrome's saved passwords live in Chrome. Open SoCalGas in Chrome instead, or look up the password in your notebook. (This is the problem Dashlane solves: one key ring for every browser.)</div><div class="quiz-feedback incorrect-fb">Your account is fine! Passwords saved in Chrome only live in Chrome. Edge is a different window with its own (empty) key hook. Use Chrome, or check your notebook.</div></div>` },

    { id: "m6-scams", title: "Recognizing Scams & Phishing",
      html: `<p>Some people try to trick you into giving them your personal information or money. These tricks are called <strong>scams</strong> or <strong>phishing</strong> (pronounced "fishing" — because they're "fishing" for your information).</p>
<div class="warning-box">
<div class="box-label">Red flags — if you see any of these, it's probably a scam</div>
<p style="margin-bottom: 8px;"><strong>⚠️ "URGENT! Your account will be CLOSED in 24 hours!"</strong> — Real companies don't threaten you with scary deadlines in emails.</p>
<p style="margin-bottom: 8px;"><strong>⚠️ "Click here to verify your password / account number"</strong> — No real company will ever ask for your password by email.</p>
<p style="margin-bottom: 8px;"><strong>⚠️ The email address looks weird</strong> — It says it's from your bank, but the sender's address is something like "support@bank-secure-login-verify.xyz" instead of a normal address.</p>
<p style="margin-bottom: 8px;"><strong>⚠️ "You've won $1,000,000!"</strong> — If you didn't enter a contest, you didn't win.</p>
<p style="margin-bottom: 0;"><strong>⚠️ Lots of spelling and grammar mistakes</strong> — Real companies proofread their emails.</p>
</div>
<div class="key-concept">
<div class="box-label">The golden rule of online safety</div>
<p><strong>When in doubt, don't click.</strong> If you receive a suspicious email claiming to be from your bank (or the IRS, or Amazon, or anyone), don't click any links in that email. Instead, open your web browser and type the real website address yourself, or call the company using a phone number you know is real (like the one on the back of your credit card). This way, you know for certain you're dealing with the real company.</p>
</div>` },

    { id: "m6-phonescams", title: "Phone and Text Scams",
      html: `<p>Most scams that target people today don't come by email &mdash; they come as <strong>phone calls</strong> and <strong>text messages</strong>. They're designed to scare you or rush you. The good news: they almost all follow the same few patterns, and once you know them, they're easy to spot.</p>

<div class="pattern-card">
  <div class="pattern-label">The scam pattern</div>
  <div class="pattern-flow"><span class="stepchip">Surprise contact</span><span class="arrow">&#8594;</span><span class="stepchip">Scary or exciting story</span><span class="arrow">&#8594;</span><span class="stepchip">"Act right now!"</span><span class="arrow">&#8594;</span><span class="stepchip">Asks for money, a code, or your info</span></div>
  <p style="margin:10px 0 0">If a call or text has all four, it's a scam &mdash; every time.</p>
</div>

<h4>The ones to know</h4>
<div class="warning-box">
  <div class="box-label">Common phone and text scams</div>
  <p><strong>&#128222; "This is Wells Fargo fraud department."</strong> They say there's a problem with your account and ask you to read them a code, or to move money to a "safe account." Banks never do either.</p>
  <p><strong>&#128222; "Your Social Security number has been suspended."</strong> There's no such thing. Social Security doesn't call to threaten you.</p>
  <p><strong>&#128222; "Grandma, it's me &mdash; I'm in trouble, don't tell Mom."</strong> A voice that sounds like a grandchild or relative, in jail or in an accident, needing money fast and secretly. Today's technology can even copy a real person's voice.</p>
  <p><strong>&#128172; "Your package couldn't be delivered. Tap here."</strong> A text that pretends to be USPS, UPS, or Amazon, with a link.</p>
  <p><strong>&#128172; "You have an unpaid toll / traffic ticket."</strong> Texts claiming to be FasTrak or the DMV, with a link to pay.</p>
  <p><strong>&#128187; "Microsoft has detected a virus on your computer."</strong> A pop-up or call that wants to "connect to your computer" to fix it, or sell you protection.</p>
  <p><strong>&#127873; "Pay with gift cards."</strong> Any request to pay with gift cards (Apple, Target, Google Play), wire transfers, Zelle to a stranger, or cryptocurrency is <em>always</em> a scam. Real companies and agencies don't take gift cards.</p>
</div>

<h4>What to do: the three moves</h4>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content"><strong>Hang up / don't tap.</strong> You never have to stay on the phone. Don't tap links in surprise texts. It is never rude to hang up.</div></div><div class="step"><div class="step-num">2</div><div class="step-content"><strong>Look up the real number yourself.</strong> Use the number on the back of your card, on your paper bill, or on the company's real website (scroll to the bottom &rarr; "Contact Us"). Never call back a number the caller gave you.</div></div><div class="step"><div class="step-num">3</div><div class="step-content"><strong>Call family.</strong> For a "grandchild in trouble" call, hang up and call that person directly &mdash; or call Ari, Anijke, or Asher. A real emergency can wait two minutes for you to check.</div></div></div>

<div class="key-concept"><div class="box-label">A family code word</div><p>Some families pick a <strong>secret code word</strong> that only they know. If a "relative" calls in an emergency and can't say the word, it's not them. Ask Ari, Anijke, or Asher to pick one with you.</p></div>

<div class="tip-box"><div class="box-label">Deleting scam texts</div><p>On your iPhone, you can press and hold a scam text (or swipe left on the conversation) and choose <strong>Delete</strong>. If you see <strong>Report Junk</strong> under a message from an unknown number, tap it &mdash; that also blocks the sender.</p></div>

<div class="tip-box"><div class="box-label">If you already clicked, paid, or shared something</div><p>It happens to smart people every day &mdash; don't be embarrassed. Act quickly: <strong>call Wells Fargo</strong> using the number on your card, <strong>change the password</strong> for that account, and <strong>call family</strong>. The <a href="#/help">Help &amp; Resources page</a> also lists AARP's free fraud helpline.</p></div>

<div class="quiz"><div class="quiz-header">Think it through</div><h3>Your phone rings. "This is Wells Fargo. We noticed a suspicious charge. To stop it, read us the code we just texted you." What do you do?</h3><div class="quiz-options"><button class="quiz-option" data-correct="true">Hang up, then call the number on the back of my Wells Fargo card to check.</button><button class="quiz-option" data-correct="false">Read them the code &mdash; they said they're from the bank.</button><button class="quiz-option" data-correct="false">Stay on the line and give them my account number so they can find the charge.</button></div><div class="quiz-feedback correct-fb">Perfect. A real bank <strong>never</strong> asks for the code. That code is the key to your account. Hanging up and calling the number on your card is always safe.</div><div class="quiz-feedback incorrect-fb">This is one of the most common scams. The code they want is the key to your account &mdash; with it, they can sign in as you. Hang up and call the number on the back of your card instead.</div></div>` },

    { id: "m6-popups", title: "Pop-ups & Cookie Messages",
      html: `<p>You'll encounter lots of pop-up messages while browsing. Most are harmless. Here's how to handle them:</p>
<div class="steps">
<div class="step">
<div class="step-num" style="background: var(--forest-green);">✔</div>
<div class="step-content"><strong>"Accept cookies?"</strong> — This is fine. Nearly every website shows this. Just click "Accept" or "OK" and move on. "Cookies" are how websites remember you.</div>
</div>
<div class="step">
<div class="step-num" style="background: var(--forest-green);">✔</div>
<div class="step-content"><strong>"Allow notifications?"</strong> — Almost always click <strong>"Don't Allow"</strong> or <strong>"Block."</strong> You don't want random websites sending you alerts.</div>
</div>
<div class="step">
<div class="step-num" style="background: var(--warm-rose);">✕</div>
<div class="step-content"><strong>"Your computer has a virus! Call this number!"</strong> — This is <strong>ALWAYS</strong> a scam. Close the tab immediately. Your computer is fine. Real security warnings come from your antivirus software, not from websites.</div>
</div>
<div class="step">
<div class="step-num" style="background: var(--warm-rose);">✕</div>
<div class="step-content"><strong>"Download this to speed up your PC!"</strong> — Never click this. It's unwanted software or a scam.</div>
</div>
</div>
<div class="tip-box">
<div class="box-label">Closing stubborn pop-ups</div>
<p>If a pop-up won't go away: <strong>(1)</strong> Look for the X in its corner. <strong>(2)</strong> Try pressing the <strong>Escape (Esc)</strong> key on your keyboard (top-left corner). <strong>(3)</strong> If nothing works, close the entire browser tab by clicking the X on the tab.</p>
</div>` },

    { id: "m6-troubleshoot", title: "Celine's Troubleshooting Toolkit",
      html: `<p>Things don't always work perfectly. This is completely normal — it happens to everyone, even tech experts! The good news is that a small number of simple fixes solve the vast majority of problems. Here is your go-to checklist:</p>
<div style="background: white; border-radius: 16px; padding: 30px; box-shadow: var(--card-shadow); border: 2px solid var(--forest-green);">
<div style="text-align: center; margin-bottom: 20px; font-weight: 700; color: var(--deep-plum); font-family: 'Merriweather', serif;">When Something Isn't Working — Try These In Order</div>
<div class="steps">
<div class="step">
<div class="step-num" style="background: var(--forest-green);">1</div>
<div class="step-content"><strong>Refresh the page.</strong> If a website looks broken or won't load, click the refresh button (↻) in your browser. This reloads the page fresh. Fixes the problem more often than you'd think!</div>
</div>
<div class="step">
<div class="step-num" style="background: var(--forest-green);">2</div>
<div class="step-content"><strong>Close and reopen the app or program.</strong> If an app on your phone is acting up, swipe up to go home, then open it again. On a computer, close the window (click X) and reopen the program.</div>
</div>
<div class="step">
<div class="step-num" style="background: var(--forest-green);">3</div>
<div class="step-content"><strong>Restart the device.</strong> Turn your computer, phone, or tablet completely off, wait 10 seconds, and turn it back on. This genuinely fixes an enormous number of problems. It's the #1 thing IT professionals do!</div>
</div>
<div class="step">
<div class="step-num" style="background: var(--forest-green);">4</div>
<div class="step-content"><strong>Check your internet connection.</strong> If websites won't load, make sure you're connected to Wi-Fi. On your phone, check for the Wi-Fi icon at the top. On your computer, look in the bottom-right corner. If disconnected, try turning Wi-Fi off and back on in Settings.</div>
</div>
<div class="step">
<div class="step-num" style="background: var(--forest-green);">5</div>
<div class="step-content"><strong>Google the problem.</strong> Type your problem as a question: "AOL Mail not loading" or "iPhone won't connect to Wi-Fi." Millions of people have had the same problem, and the answer is usually in the first few results.</div>
</div>
</div>
</div>
<div class="analogy">
<div class="box-label">Think of it this way</div>
<p>When a lamp doesn't turn on, you check: Is it plugged in? Is the bulb burned out? Is the outlet working? Tech troubleshooting is exactly the same — start with the simplest explanation and work your way up. You don't need to understand electricity to change a lightbulb!</p>
</div>` },

    { id: "m6-frozen", title: "When Your Device Freezes or Stops Responding",
      html: `<p>Sometimes your computer, phone, or tablet just... stops. Nothing happens when you click or tap. The screen might be frozen, or an app might be stuck spinning. Don't panic — this happens to everyone and is almost always fixable.</p>
<div class="tab-container">
<div class="tab-buttons">
<button class="tab-btn active" onclick="showTab(this,'freeze-computer')">Computer Frozen</button>
<button class="tab-btn" onclick="showTab(this,'freeze-phone')">Phone/iPad Frozen</button>
</div>
<div class="tab-content active" id="freeze-computer">
<p><strong>If one program is frozen but the rest of the computer works:</strong></p>
<p>Press <strong>Ctrl + Alt + Delete</strong> (hold all three keys at the same time — they're at the bottom-left and top-right of your keyboard). A screen appears — click <strong>"Task Manager."</strong> You'll see a list of running programs. Click the frozen one (it might say "Not Responding") and click <strong>"End Task."</strong> This closes just that program.</p>
<p style="margin-top: 12px;"><strong>If the entire computer is frozen and nothing responds:</strong></p>
<p>Press and hold the <strong>power button</strong> on your computer (the physical button you use to turn it on) for about <strong>10 seconds</strong> until the screen goes dark. Wait 30 seconds, then press the power button once to turn it back on. You might lose any unsaved work, but the computer will be fine.</p>
</div>
<div class="tab-content" id="freeze-phone">
<p><strong>If an app is frozen on your iPhone/iPad:</strong></p>
<p>Swipe up from the bottom and <strong>pause in the middle</strong> of the screen (don't swipe all the way up). This shows all your open apps as cards. Find the frozen app and <strong>swipe it up and off the top of the screen</strong> to close it. Then reopen it from the Home Screen.</p>
<p style="margin-top: 12px;"><strong>If your entire iPhone/iPad is frozen:</strong></p>
<p>Do a <strong>"force restart"</strong> — this is safe and doesn't erase anything: <strong>(1)</strong> Quickly press and release the <strong>Volume Up</strong> button. <strong>(2)</strong> Quickly press and release the <strong>Volume Down</strong> button. <strong>(3)</strong> Press and <strong>hold</strong> the <strong>Side button</strong> (the power button on the right side) until you see the Apple logo appear. Then let go and wait for it to restart.</p>
</div>
</div>
<div class="tip-box">
<div class="box-label">Save your work often</div>
<p>If you're typing something important (a letter, an email, filling out a form), it's a good habit to save frequently. On the computer, press <strong>Ctrl+S</strong> (hold Ctrl, press S) to save your work. This way, if something freezes, you won't lose much. In a web browser, your typing in forms is usually NOT saved automatically — so if you're filling out a long form online, consider typing your answers in the Notes app first, then copying them over.</p>
</div>` },

    { id: "m6-storage", title: "Running Out of Storage",
      html: `<p>Sometimes your phone or computer tells you that <strong>storage is almost full</strong>. This means the device is running out of room to save new things — like a filing cabinet that's stuffed to the brim.</p>
<div class="tab-container">
<div class="tab-buttons">
<button class="tab-btn active" onclick="showTab(this,'storage-phone')">On iPhone/iPad</button>
<button class="tab-btn" onclick="showTab(this,'storage-computer')">On Computer</button>
</div>
<div class="tab-content active" id="storage-phone">
<p><strong>Check what's using space:</strong> Settings → General → iPhone Storage. You'll see a colorful bar showing what's taking up room (usually Photos, Apps, and Messages are the biggest).</p>
<p style="margin-top: 8px;"><strong>Easy ways to free up space:</strong></p>
<p><strong>(1) Delete old photos and videos</strong> — Open the Photos app, find photos you don't need, tap "Select" (top-right), tap the ones to delete, then tap the trash icon. Don't forget to also delete them from "Recently Deleted" (in the Albums tab) to truly free the space.</p>
<p><strong>(2) Delete apps you don't use</strong> — Press and hold an app icon on the Home Screen until a menu appears. Tap "Remove App" → "Delete App."</p>
<p><strong>(3) Clear old text messages</strong> — Open Messages, swipe left on old conversations, and tap "Delete."</p>
</div>
<div class="tab-content" id="storage-computer">
<p><strong>Check what's using space:</strong> Settings → System → Storage. Windows shows you what's taking up room.</p>
<p style="margin-top: 8px;"><strong>Easy ways to free up space:</strong></p>
<p><strong>(1) Empty the Recycle Bin</strong> — Right-click the Recycle Bin icon on your desktop and choose "Empty Recycle Bin." Deleted files sit there until you empty it.</p>
<p><strong>(2) Clear your Downloads folder</strong> — Open File Explorer → Downloads. Delete files you no longer need (old installers, duplicate documents, etc.).</p>
<p><strong>(3) Run "Storage Sense"</strong> — Go to Settings → System → Storage and turn on "Storage Sense." This automatically cleans up temporary files.</p>
</div>
</div>` },

    { id: "m6-help", title: "How to Ask for Help (From People and From the Internet)",
      html: `<p>Even after going through this entire guide, there will be times when you get stuck. That's completely normal! Here's how to get help effectively:</p>
<h4>Asking the Internet</h4>
<p>Google is your most powerful tool. When something isn't working or you don't know how to do something, type your question exactly as you'd ask a person:</p>
<div style="background: var(--win-surface); border-radius: 10px; padding: 16px 20px; margin: 12px 0; font-size: 0.9rem;">
<p style="margin-bottom: 8px;">🔍 <em>"How do I change the font size on my iPhone"</em></p>
<p style="margin-bottom: 8px;">🔍 <em>"AOL Mail won't load what do I do"</em></p>
<p style="margin-bottom: 8px;">🔍 <em>"How to print a PDF on Windows"</em></p>
<p style="margin-bottom: 0;">🔍 <em>"Wells Fargo how to set up bill pay"</em></p>
</div>
<p>The results will often include <strong>step-by-step guides</strong> (look for articles from the company itself, or from helpful sites like "How-To Geek" or Apple's support pages). There are also <strong>YouTube videos</strong> that walk you through things visually — sometimes seeing someone else do it is the easiest way to learn.</p>
<h4>Asking a Person</h4>
<p>When you need to ask a family member, friend, or tech support for help, here's what to include so they can help you quickly:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>What device you're using</strong> — "I'm on my Windows computer" or "I'm on my iPhone."</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>What you were trying to do</strong> — "I was trying to pay my electric bill on the utility website."</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>What happened instead</strong> — "The page went blank" or "I got an error message that said..." or "Nothing happens when I click the button."</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>What you've already tried</strong> — "I refreshed the page and restarted the computer but it still doesn't work."</div>
</div>
</div>
<div class="tip-box">
<div class="box-label">Take a screenshot!</div>
<p>A screenshot is a picture of what's on your screen. It's the best way to show someone exactly what you're seeing.</p>
<p style="margin-top: 8px;"><strong>On your computer:</strong> Press the <strong>Print Screen</strong> key (sometimes labeled "PrtScn" — it's near the top-right of your keyboard). Then open an email and press <strong>Ctrl+V</strong> to paste it into the email.</p>
<p style="margin-top: 8px;"><strong>On your iPhone/iPad:</strong> Press the <strong>Side button</strong> and the <strong>Volume Up button</strong> at the same time, quickly. You'll see a flash and hear a shutter sound. The screenshot is saved in your Photos app, and you can share it by text or email.</p>
</div>
<h4>Calling Tech Support</h4>
<p>If you need to call a company for tech help (your internet provider, your bank, Apple, etc.), here are some tips:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>Have your account information ready</strong> before you call — your account number, the email address on the account, and your device nearby.</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>Write down what the support person tells you</strong> — the steps they walk you through, any reference numbers, and their name if possible.</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>Don't be embarrassed to say "Can you repeat that?" or "Can you slow down?"</strong> — That's their job, and they're happy to help.</div>
</div>
</div>
<div class="key-concept">
<div class="box-label">For Apple help specifically</div>
<p>If you're having trouble with your iPhone or iPad, you can call Apple Support. To find their number, go to <strong>apple.com</strong>, scroll to the very bottom, and click <strong>Contact Apple</strong> — or open the <strong>Apple Support</strong> app on your iPhone. They're patient and helpful. You can also visit any Apple Store and talk to someone at the "Genius Bar" — they'll help you for free with any Apple device issues.</p>
</div>
<h4>Remote Help: Letting Family See Your Screen</h4>
<p>Here's something wonderful: your computer is set up so that family members can <strong>see your screen and help you remotely</strong> — even if they're in another city. This is called <strong>remote access</strong>, and it's like having someone sit right next to you and look at your screen, except they're doing it through the internet.</p>
<div class="analogy">
<div class="box-label">Think of it this way</div>
<p>Imagine you're on the phone with someone, and instead of trying to describe what you see on your screen ("I see a box that says something about an error..."), they can just <em>look at your screen themselves</em> and see exactly what you see. They can even move your mouse and click things for you to fix the problem. That's remote help.</p>
</div>
<p>You have a tool called <strong>Chrome Remote Desktop</strong> installed in your Google Chrome browser. Here's how to use it when you need help:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>Call or text one of the kids</strong> and let them know you need help with your computer.</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>Open Google Chrome</strong> (the colorful circle icon — remember, your browser!). In the address bar at the top, type <strong>remotedesktop.google.com/support</strong> and press Enter. You can also find it by looking for the <strong>Chrome Remote Desktop</strong> icon if it's been added to your extensions (it looks like a small screen with an arrow).</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>Click "Generate Code"</strong> under the section that says <strong>"Share this screen."</strong> A 12-digit number will appear on your screen. This is a one-time access code — it's like a temporary key that expires after a few minutes.</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>Read the code to Ari, Anijke, or Asher</strong> over the phone &mdash; only when <em>you</em> called <em>them</em>. They'll type it into their computer to connect.</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content"><strong>You'll see a message asking if you want to share your screen.</strong> Click <strong>"Share"</strong> to allow the connection. Now they can see everything on your screen and control your mouse to help you!</div>
</div>
<div class="step">
<div class="step-num">6</div>
<div class="step-content"><strong>When you're done,</strong> click <strong>"Stop Sharing"</strong> at the bottom of your screen, or just close the Chrome tab. The connection ends immediately and the access code stops working.</div>
</div>
</div>
<div class="key-concept">
<div class="box-label">This is safe and private</div>
<p>Each access code only works <strong>once</strong> and expires quickly. Nobody can connect to your computer without you generating a new code and giving it to them. Once you stop sharing, the connection is completely cut off. You're always in control.</p>
</div>
<div class="warning-box">
<div class="box-label">Only with family &mdash; never with a stranger</div>
<p>Letting someone see or control your screen is <strong>only</strong> for Ari, Anijke, or Asher, and only when you reached out to them. Scammers pretending to be Microsoft, Apple, Amazon, or your bank often ask to "connect to your computer." <strong>Real companies never call you to do this.</strong> If anyone else asks for a screen-sharing code, or asks you to install a program so they can help, hang up.</p>
</div>
<div class="tip-box">
<div class="box-label">When to use remote help</div>
<p>Remote help is perfect for situations like: a setting got changed and you don't know how to change it back, a program looks different than usual and you're confused, you're trying to do something new and want someone to walk you through it, or a pop-up appeared that you're not sure about. Instead of trying to describe the problem over the phone, just say <strong>"Can you look at my screen?"</strong> — it saves a lot of frustration for everyone!</p>
</div>` },

    { id: "safety-practice", title: "Think It Through", practice: true,
      html: `<p class="lead">Here are a few questions to think through. There's no score and nothing to pass. Tap whichever answer feels right — if it's not quite it, you'll get a gentle hint and can try again.</p>
<div class="quiz">
<div class="quiz-header">Final quiz</div>
<h3>You receive an email saying "Your bank account has been compromised! Click here immediately!" What should you do?</h3>
<div class="quiz-options">
<button class="quiz-option" data-correct="false">Click the link right away — it sounds urgent!</button>
<button class="quiz-option" data-correct="true">Don't click anything. Open your browser and type your bank's website address yourself, or call the number on the back of your card.</button>
<button class="quiz-option" data-correct="false">Reply to the email with your account number so they can help</button>
</div>
<div class="quiz-feedback correct-fb">Perfect! You should never click links in suspicious emails. Go to the real website by typing the address yourself, or call the real phone number on the back of your card. You're going to be absolutely fine out there, Celine!</div>
<div class="quiz-feedback incorrect-fb">The safest approach is to NOT click anything in the email. Instead, open your browser and type your bank's web address yourself, or call the number on the back of your bank card. When in doubt, don't click!</div>
</div>` }
  ]
});
