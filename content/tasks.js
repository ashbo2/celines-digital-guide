/* "How do I…?" quick-help cards.
   Each card: id, group, icon, title, keywords (extra search words), optional pattern, steps, optional tip/warn, related lessons. */
GUIDE.addTasks([

  /* ── Money & bills ── */
  { id: "check-balance", group: "Money & bills", icon: "&#127974;", title: "Check my bank balance",
    keywords: "wells fargo bank account money how much checking savings transactions activity",
    pattern: "Bank website or app &rarr; Sign On &rarr; Account Summary",
    steps: [
      "Go to <strong>wellsfargo.com</strong> (type it yourself) or open the <strong>Wells Fargo app</strong> on your iPhone.",
      "Sign on with your username and password. Type in the code if they text you one.",
      "Your balances appear on the first page (<strong>Account Summary</strong>).",
      "Click an account to see every payment and deposit, newest at the top.",
    ],
    lessons: ["m5-banking"] },

  { id: "pay-utility", group: "Money & bills", icon: "&#128161;", title: "Pay my LADWP, SoCalGas, or Spectrum bill",
    keywords: "electric water gas internet cable tv bill utility pay payment due",
    pattern: "Company website &rarr; Log In (top-right) &rarr; Billing / Pay Bill &rarr; Review &rarr; Pay",
    steps: [
      "Type the company's address: <strong>ladwp.com</strong>, <strong>socalgas.com</strong>, or <strong>spectrum.net</strong>.",
      "Click <strong>Log In</strong> or <strong>Sign In</strong> in the top-right corner.",
      "Click <strong>Pay Bill</strong> or open the <strong>Billing</strong> menu.",
      "Choose your bank account or card and the amount.",
      "Review, then click the final <strong>Pay</strong> or <strong>Submit</strong> button. Write down the confirmation number.",
    ],
    tip: "Paying the same bill every month? Look for <strong>AutoPay</strong> in the Billing menu so it pays itself on time.",
    lessons: ["m5-utilities"] },

  { id: "bill-pay", group: "Money & bills", icon: "&#128184;", title: "Pay a bill from my Wells Fargo account",
    keywords: "bill pay payee send payment bank",
    steps: [
      "Sign on at <strong>wellsfargo.com</strong>.",
      "In the menu, click <strong>Pay &amp; Transfer</strong> &rarr; <strong>Pay Bills</strong>.",
      "First time only: <strong>add a payee</strong> (the company) using the account number on your paper bill.",
      "Type the amount, choose a date, review, and click <strong>Pay</strong>.",
    ],
    tip: "Pay each bill one way only &mdash; either through the bank <em>or</em> on the company's website &mdash; so it isn't paid twice.",
    lessons: ["m5-banking"] },

  { id: "deposit-check", group: "Money & bills", icon: "&#128248;", title: "Deposit a check with my iPhone",
    keywords: "mobile deposit photo check camera",
    steps: [
      "Open the <strong>Wells Fargo</strong> app and sign on.",
      "Tap <strong>Deposit</strong> at the bottom.",
      "Pick the account and type the amount.",
      "Sign the back of the check and write what the app tells you (like \"For Mobile Deposit Only at Wells Fargo\").",
      "Take a photo of the front, then the back, and tap <strong>Deposit</strong>. Keep the paper check for a couple of weeks.",
    ],
    lessons: ["m5-banking"] },

  { id: "autopay", group: "Money & bills", icon: "&#128260;", title: "Set up automatic payments (AutoPay)",
    keywords: "autopay automatic recurring monthly bill",
    steps: [
      "Sign in to the company's website (LADWP, SoCalGas, Spectrum, etc.).",
      "Open the <strong>Billing</strong> menu and look for <strong>AutoPay</strong> or <strong>Automatic Payments</strong>.",
      "Choose your bank account and confirm.",
      "Each month, glance at the bill email to make sure the amount looks normal.",
    ],
    lessons: ["m5-utilities"] },

  /* ── Health & government ── */
  { id: "message-doctor", group: "Health & government", icon: "&#129658;", title: "Message my doctor or request a refill",
    keywords: "mychart patient portal doctor message refill prescription test results appointment medication",
    pattern: "Portal (MyChart, etc.) &rarr; Sign In &rarr; Messages / Medications / Visits",
    steps: [
      "Open the <strong>MyChart</strong> app (or your medical group's portal) and sign in.",
      "To ask a question: tap <strong>Messages</strong> &rarr; new message.",
      "To refill: tap <strong>Medications</strong> &rarr; <strong>Request refill</strong>.",
      "To see or book appointments: tap <strong>Visits</strong> or <strong>Appointments</strong>.",
    ],
    warn: "Portal messages aren't for emergencies. Call the office for anything urgent, or 911 in an emergency.",
    lessons: ["m5-healthcare"] },

  { id: "social-security", group: "Health & government", icon: "&#127963;&#65039;", title: "See my Social Security payment or get a benefit letter",
    keywords: "ssa social security payment 1099 tax form benefit letter login.gov id.me",
    steps: [
      "Go to <strong>ssa.gov/myaccount</strong> (it must end in .gov).",
      "Click <strong>Sign in with Login.gov</strong> (or ID.me).",
      "Sign in with your Login.gov email, password, and the texted code.",
      "Your payment amount and date are on the main page. Look for <strong>benefit letter</strong> or <strong>tax form (SSA-1099)</strong> in the menu.",
    ],
    lessons: ["m5-government"] },

  { id: "medicare", group: "Health & government", icon: "&#129706;", title: "Check Medicare claims or print my Medicare card",
    keywords: "medicare card claims plan login",
    steps: [
      "Go to <strong>medicare.gov</strong> and click <strong>Log in</strong>.",
      "Choose your sign-in helper: <strong>Login.gov</strong>, <strong>ID.me</strong>, or <strong>CLEAR</strong>.",
      "First time only: you'll need your Medicare Number from your card.",
      "Once signed in, look for <strong>claims</strong>, your <strong>plan</strong>, or <strong>print my card</strong>.",
    ],
    lessons: ["m5-government"] },

  { id: "video-visit", group: "Health & government", icon: "&#127909;", title: "Join a Zoom or video doctor visit",
    keywords: "zoom telehealth video visit appointment meeting link join camera",
    steps: [
      "Find the email or text with the link and click/tap it.",
      "If asked, click <strong>Open Zoom</strong> &mdash; or <strong>Join from your browser</strong> on a computer.",
      "Allow the <strong>camera</strong> and <strong>microphone</strong>.",
      "Click <strong>Join</strong>, and <strong>Join Audio</strong> if you see it.",
      "Can't be heard? Check the microphone icon at the bottom doesn't have a line through it.",
    ],
    lessons: ["m5-videocalls"] },

  /* ── Shopping & errands ── */
  { id: "amazon-buy", group: "Shopping & errands", icon: "&#128230;", title: "Buy something on Amazon",
    keywords: "amazon order shop buy purchase cart",
    pattern: "Search &rarr; Add to Cart &rarr; Checkout &rarr; Review &rarr; Place Order",
    steps: [
      "Go to <strong>amazon.com</strong> and sign in (top-right).",
      "Type what you want in the search bar and press Enter.",
      "Click an item, then <strong>Add to Cart</strong>.",
      "Click the cart &#128722; (top-right) &rarr; <strong>Proceed to checkout</strong>.",
      "Check the address, card, and total, then click <strong>Place your order</strong>.",
    ],
    lessons: ["m5-shopping"] },

  { id: "track-package", group: "Shopping & errands", icon: "&#128666;", title: "Track a package or return something",
    keywords: "amazon where is my package delivery tracking return refund orders",
    steps: [
      "Go to <strong>amazon.com</strong> and click <strong>Returns &amp; Orders</strong> (top-right).",
      "To track: find the item and click <strong>Track package</strong>.",
      "To return: click <strong>Return or replace items</strong>, pick a reason, and choose a drop-off spot (like a UPS Store or Whole Foods).",
    ],
    tip: "Other stores work the same way &mdash; look for <strong>Orders</strong> under your account in the top-right.",
    lessons: ["m5-shopping"] },

  { id: "groceries", group: "Shopping & errands", icon: "&#129388;", title: "Order groceries for delivery or pickup",
    keywords: "grocery instacart ralphs vons gelsons bristol farms delivery pickup food",
    pattern: "Choose store &rarr; Fill cart &rarr; Pick a time &rarr; Review &rarr; Place order",
    steps: [
      "Open <strong>Instacart</strong> (instacart.com or the app), or the store's own site like <strong>ralphs.com</strong> or <strong>vons.com</strong>, and log in.",
      "Pick your store, search for items, and tap <strong>+ Add</strong>.",
      "Tap the cart &rarr; <strong>Checkout</strong> &rarr; choose a delivery or pickup time.",
      "Review the total (fees and tip included), then <strong>Place order</strong>.",
      "Keep your phone nearby &mdash; the shopper may text about swaps.",
    ],
    lessons: ["m5-grocery"] },

  { id: "food-delivery", group: "Shopping & errands", icon: "&#127829;", title: "Order restaurant food delivered",
    keywords: "uber eats grubhub doordash restaurant dinner takeout delivery",
    steps: [
      "Open <strong>Uber Eats</strong>, <strong>Grubhub</strong>, or <strong>DoorDash</strong> and check the address at the top.",
      "Pick a restaurant, tap a dish, and add it to your order.",
      "Tap the cart &rarr; <strong>Checkout</strong>.",
      "Check the total (food + fees + tip) and add a note like \"Leave at door.\"",
      "Tap <strong>Place order</strong> and watch the map.",
    ],
    lessons: ["m5-food"] },

  { id: "show-tickets", group: "Shopping & errands", icon: "&#127915;", title: "Find and show my Ticketmaster tickets",
    keywords: "ticketmaster tickets concert show event barcode wallet axs",
    steps: [
      "<strong>At home, before the event:</strong> open the Ticketmaster app &rarr; <strong>My Account</strong> &rarr; Sign In.",
      "Tap <strong>My Events</strong> &rarr; your event. Tap <strong>Add to Apple Wallet</strong> if you see it.",
      "<strong>At the door:</strong> open the app (or Wallet) &rarr; event &rarr; <strong>View Tickets</strong>. Turn brightness up and hold the barcode to the scanner.",
    ],
    warn: "Screenshots of tickets usually won't scan &mdash; always open the app or Wallet.",
    lessons: ["m5-tickets"] },

  { id: "print", group: "Shopping & errands", icon: "&#128424;&#65039;", title: "Print something",
    keywords: "print printer paper boarding pass pdf",
    steps: [
      "<strong>On the computer:</strong> open the page or file, then press <strong>Ctrl + P</strong> (hold Ctrl, tap P).",
      "Check the printer name, then click <strong>Print</strong>.",
      "<strong>On the iPhone:</strong> tap the Share button (a square with an arrow pointing up), scroll down, and tap <strong>Print</strong>.",
    ],
    lessons: ["m5-printing"] },

  /* ── Email & the web ── */
  { id: "find-email", group: "Email & the web", icon: "&#128233;", title: "Find an email I'm expecting",
    keywords: "aol mail missing email spam junk search inbox",
    steps: [
      "In AOL Mail, type the sender's name or a word from the subject in the <strong>search box</strong> at the top.",
      "Still missing? Click the <strong>Spam</strong> folder on the left. If it's there, open it and click <strong>Not Spam</strong>.",
      "Give it a few minutes and click <strong>Refresh</strong> (&#8635;).",
    ],
    lessons: ["m3-aol"] },

  { id: "attach", group: "Email & the web", icon: "&#128206;", title: "Attach a file or photo to an email",
    keywords: "attach attachment send file photo document email aol",
    steps: [
      "In AOL Mail, click <strong>Compose</strong> and fill in who it's to and the subject.",
      "Click the <strong>paperclip</strong> &#128206; at the bottom of the message.",
      "A window opens showing your files. Click <strong>Downloads</strong>, <strong>Documents</strong>, or <strong>Pictures</strong> on the left, then double-click your file.",
      "Wait until the file's name appears in the email, then click <strong>Send</strong>.",
    ],
    lessons: ["m3-aol", "m2-fileexplorer"] },

  { id: "aol-phone", group: "Email & the web", icon: "&#128241;", title: "Read my AOL email on my iPhone",
    keywords: "aol email iphone phone app mail",
    steps: [
      "Your email lives at AOL, not on your computer &mdash; so any device can see it.",
      "Get the <strong>AOL</strong> app from the App Store (made by \"Yahoo\" &mdash; AOL's parent company), or open Safari and go to <strong>mail.aol.com</strong>.",
      "Sign in with the same AOL email and password you use on the computer.",
    ],
    lessons: ["s-where", "m4-apps-vs-web"] },

  { id: "website-address", group: "Email & the web", icon: "&#127760;", title: "Go to a website (like my bank)",
    keywords: "website address url type go to bookmark",
    steps: [
      "Click once in the <strong>address bar</strong> at the very top of Chrome (it highlights).",
      "Type the address, like <strong>wellsfargo.com</strong>, and press <strong>Enter</strong>.",
      "Check the address bar shows the right name before signing in.",
    ],
    tip: "The <a href=\"#/accounts\">My Accounts page</a> lists the real addresses for all your companies.",
    lessons: ["m3-addresses"] },

  { id: "forgot-password", group: "Email & the web", icon: "&#128273;", title: "I forgot a password",
    keywords: "forgot password reset locked out can't sign in log in",
    steps: [
      "Check your password notebook first.",
      "On the website's sign-in page, click <strong>Forgot password?</strong>",
      "Type your email or username. The website sends a link to your email or a code to your phone.",
      "Follow the link, choose a new password, and <strong>write it in your notebook</strong>.",
    ],
    warn: "Only reset a password from the real website <em>you</em> opened &mdash; never from a link in a surprise email.",
    lessons: ["m6-passwords"] },

  { id: "code", group: "Email & the web", icon: "&#128290;", title: "A website says \"enter the code we sent you\"",
    keywords: "verification code text two step one time otp sign in",
    steps: [
      "Look at your iPhone &mdash; a text with a short number (like 482913) should arrive within a minute.",
      "Type that number into the box on the website and click <strong>Continue</strong> or <strong>Verify</strong>.",
      "Took too long? Click <strong>Send a new code</strong>.",
    ],
    warn: "Never read a code to someone who calls, texts, or emails you. It's only for typing into a website you opened yourself.",
    lessons: ["s-accounts"] },

  /* ── Your computer ── */
  { id: "find-download", group: "Your computer", icon: "&#128193;", title: "Find something I downloaded",
    keywords: "download downloads file where did it go boarding pass pdf file explorer",
    steps: [
      "Click the <strong>folder icon</strong> &#128193; on the taskbar at the bottom of the screen (File Explorer).",
      "Click <strong>Downloads</strong> in the left-hand list.",
      "Your newest download is at the top. Double-click to open it.",
    ],
    lessons: ["m2-fileexplorer"] },

  { id: "text-bigger", group: "Your computer", icon: "&#128270;", title: "Make text bigger",
    keywords: "text size font bigger larger zoom read see",
    steps: [
      "<strong>On a website (any browser):</strong> hold <strong>Ctrl</strong> and tap <strong>+</strong> to zoom in; <strong>Ctrl</strong> and <strong>&minus;</strong> to zoom out; <strong>Ctrl</strong> and <strong>0</strong> to reset.",
      "<strong>Everywhere on the computer:</strong> click Start, type <em>text size</em>, open it, and drag the slider.",
      "<strong>On the iPhone:</strong> Settings &rarr; <strong>Display &amp; Brightness</strong> &rarr; <strong>Text Size</strong>.",
      "<strong>In this guide:</strong> use the <strong>A+</strong> button at the top.",
    ],
    lessons: ["m2-settings", "m4-settings"] },

  { id: "frozen", group: "When something goes wrong", icon: "&#129482;", title: "My computer or phone is frozen",
    keywords: "frozen stuck not responding crash freeze restart",
    steps: [
      "Wait one full minute &mdash; sometimes it's just busy.",
      "<strong>Computer:</strong> press <strong>Ctrl + Alt + Delete</strong> &rarr; Task Manager &rarr; click the stuck program &rarr; <strong>End task</strong>.",
      "Still stuck? Hold the computer's power button for 10 seconds, wait, then turn it back on.",
      "<strong>iPhone:</strong> press Volume Up, then Volume Down, then hold the side button until the Apple logo appears.",
    ],
    lessons: ["m6-frozen"] },

  { id: "no-internet", group: "When something goes wrong", icon: "&#128246;", title: "The internet isn't working",
    keywords: "wifi internet not working offline spectrum router websites won't load",
    steps: [
      "Check the Wi-Fi symbol (bottom-right of the computer, top-right of the iPhone).",
      "If only <strong>one</strong> device has trouble, restart that device.",
      "If <strong>every</strong> device has trouble: unplug the Spectrum box, count to 30, plug it back in, and wait 5 minutes.",
      "Still out? Call Spectrum using the number on your bill.",
    ],
    lessons: ["s-internet", "m6-troubleshoot"] },

  { id: "page-broken", group: "When something goes wrong", icon: "&#8635;", title: "A website looks broken or won't load",
    keywords: "website broken not loading error blank page refresh",
    steps: [
      "Click the <strong>Refresh</strong> button (&#8635;, top-left of the browser).",
      "Close the tab and open the website again.",
      "Try the other browser (Chrome or Edge), or your iPhone.",
      "Restart the computer.",
      "Still broken? Search Google for the website's name + \"not working.\"",
    ],
    lessons: ["m6-troubleshoot"] },

  { id: "screen-help", group: "When something goes wrong", icon: "&#128421;&#65039;", title: "Let family see my screen to help",
    keywords: "remote help chrome remote desktop share screen family",
    steps: [
      "Call Ari, Anijke, or Asher first.",
      "In Chrome, go to <strong>remotedesktop.google.com/support</strong>.",
      "Click <strong>Generate Code</strong> and read the code to them.",
      "Click <strong>Share</strong> when asked. Click <strong>Stop Sharing</strong> when you're done.",
    ],
    warn: "Only with family, and only when <em>you</em> called <em>them</em>. Anyone else asking to see or connect to your computer is a scammer.",
    lessons: ["m6-help"] },

  /* ── Your iPhone ── */
  { id: "call-family", group: "Your iPhone", icon: "&#11088;", title: "Call family quickly (Favorites)",
    keywords: "favorites call ari anijke asher phone contacts speed dial",
    steps: [
      "Open the green <strong>Phone</strong> app.",
      "Your Favorites are the round pictures at the top of <strong>Calls</strong> (newer look), or under the <strong>Favorites &#11088;</strong> tab (classic look). Tap one to call.",
      "To add someone: tap <strong>Edit</strong> &rarr; <strong>Edit Favorites</strong> &rarr; <strong>+</strong> (newer look), or the <strong>+</strong> on the Favorites tab (classic look).",
    ],
    lessons: ["m4-phone"] },

  { id: "voicemail", group: "Your iPhone", icon: "&#128236;", title: "Listen to voicemail or block a number",
    keywords: "voicemail message block number spam caller unknown",
    steps: [
      "<strong>Voicemail:</strong> in the Phone app, tap the filter button (top-right) &rarr; <strong>Voicemail</strong> (newer look), or tap <strong>Voicemail</strong> at the bottom-right (classic look).",
      "<strong>Block:</strong> in your recent calls, tap the &#9432; next to the number &rarr; scroll down &rarr; <strong>Block Caller</strong>.",
    ],
    lessons: ["m4-phone"] },

  { id: "screenshot", group: "Your iPhone", icon: "&#128247;", title: "Take a screenshot (a picture of the screen)",
    keywords: "screenshot picture of screen capture",
    steps: [
      "<strong>iPhone:</strong> press the <strong>side button</strong> and <strong>Volume Up</strong> at the same time, then let go. It's saved in Photos.",
      "<strong>Computer:</strong> press the <strong>Windows key + Shift + S</strong>, then drag a box around what you want. Or press <strong>Print Screen</strong>.",
    ],
    tip: "A screenshot is a great way to show family exactly what you're seeing &mdash; text it to them.",
    lessons: ["m6-help"] },

  { id: "get-app", group: "Your iPhone", icon: "&#128242;", title: "Download an app",
    keywords: "app store download install app",
    steps: [
      "Open the <strong>App Store</strong> (blue icon with an \"A\").",
      "Tap <strong>Search</strong> and type the company's name.",
      "Check the name under the app matches the company (e.g., \"Wells Fargo\").",
      "Tap <strong>Get</strong>, then confirm with Face ID, your passcode, or your Apple Account password.",
    ],
    lessons: ["m4-appstore", "m4-apps-vs-web"] },

  /* ── Staying safe ── */
  { id: "scam-check", group: "Staying safe", icon: "&#128680;", title: "Is this call, text, or email a scam?",
    keywords: "scam fraud phishing suspicious fake call text email gift card",
    pattern: "Surprise contact + scary story + \"act now\" + asks for money, a code, or info = scam",
    steps: [
      "Don't tap links or call numbers in the message. Don't stay on the phone.",
      "Ask: Did they contact me by surprise? Are they rushing or scaring me? Do they want money, gift cards, a code, or my information?",
      "Check for yourself: type the company's real website, or call the number on your card or bill.",
      "Still not sure? Call Ari, Anijke, or Asher &mdash; or AARP's free fraud helpline (on the <a href=\"#/help\">Help page</a>).",
    ],
    lessons: ["m6-phonescams", "m6-scams"] },

  { id: "scammed", group: "Staying safe", icon: "&#128721;", title: "I think I've been scammed",
    keywords: "scammed fraud gave money gave password clicked link stolen hacked",
    steps: [
      "Don't be embarrassed &mdash; this happens to smart people every day. Act quickly.",
      "If money or bank info was involved: call <strong>Wells Fargo</strong> using the number on the back of your card.",
      "Change the password for any account you shared.",
      "Call Ari, Anijke, or Asher.",
      "Call AARP's free Fraud Watch Network Helpline: <a class=\"tel\" href=\"tel:18779083360\"><strong>877-908-3360</strong></a> (weekdays, 5 a.m.&ndash;5 p.m. California time).",
    ],
    lessons: ["m6-phonescams"] },

  { id: "popup", group: "Staying safe", icon: "&#9888;&#65039;", title: "A scary pop-up says I have a virus",
    keywords: "popup pop-up virus warning microsoft call this number locked",
    steps: [
      "Don't call any number on it and don't click inside it.",
      "Close the tab or browser. If it won't close, press <strong>Ctrl + Alt + Delete</strong> &rarr; Task Manager &rarr; end Chrome.",
      "Real warnings never ask you to call a phone number.",
    ],
    lessons: ["m6-popups"] },

  { id: "find-phone-number", group: "Staying safe", icon: "&#9742;&#65039;", title: "Find a company's real phone number",
    keywords: "phone number contact customer service call company real number",
    steps: [
      "Look at the <strong>back of your card</strong> or your <strong>paper bill</strong> &mdash; the safest places.",
      "Or go to the company's real website (type it yourself), scroll to the <strong>very bottom</strong>, and click <strong>Contact Us</strong> or <strong>Help</strong>.",
      "Save the number in your iPhone Contacts so you'll recognize it next time.",
    ],
    warn: "Don't trust phone numbers from surprise emails, texts, pop-ups, or a random Google ad &mdash; scammers put fake numbers there.",
    lessons: ["m1-landmarks"] },
]);
