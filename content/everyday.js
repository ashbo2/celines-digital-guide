/* Everyday Tasks */
GUIDE.addModule({
  id: "everyday",
  title: "Everyday Tasks",
  intro: `Now let's put it all together. Every lesson here teaches a <strong>pattern</strong> you can use with any company — then practices it with the ones you actually use: Wells Fargo, LADWP, SoCalGas, Spectrum, Social Security, Medicare, your doctor, Amazon, grocery stores, and Ticketmaster.`,
  lessons: [
    { id: "m5-pattern", title: "The Golden Pattern: How Every Website Works",
      html: `<p>Here's the most powerful idea in this whole guide: <strong>almost every website follows the same pattern.</strong> Your bank, the gas company, your doctor, Amazon, Ticketmaster &mdash; they look different, but underneath they all work the same way.</p>

<div class="pattern-card">
  <div class="pattern-label">The Golden Pattern</div>
  <div class="pattern-flow"><span class="stepchip">1. Go to the real website</span><span class="arrow">&#8594;</span><span class="stepchip">2. Sign In (top-right)</span><span class="arrow">&#8594;</span><span class="stepchip">3. Find your task in the menu</span><span class="arrow">&#8594;</span><span class="stepchip">4. Review, then confirm</span><span class="arrow">&#8594;</span><span class="stepchip">5. Sign Out</span></div>
  
</div>

<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content"><strong>Go to the real website.</strong> Type the address yourself (like <em>wellsfargo.com</em>), or use a bookmark or the company's app. Don't use links in surprise emails or texts.</div></div><div class="step"><div class="step-num">2</div><div class="step-content"><strong>Sign In.</strong> Look in the <span class="landmark">top-right corner</span>. It might say "Sign In," "Log In," "Sign On," or "My Account" &mdash; different words, same door. You may get a text with a code.</div></div><div class="step"><div class="step-num">3</div><div class="step-content"><strong>Find your task.</strong> Look at the menu across the top (or the &#9776; button). The words are usually plain: "Pay Bill," "Billing," "Orders," "Messages," "Appointments." Or use the search box.</div></div><div class="step"><div class="step-num">4</div><div class="step-content"><strong>Review, then confirm.</strong> Before anything happens, websites show a summary page. Check the amount, the date, and the name, then click the final button: "Pay," "Submit," "Place Order," "Confirm."</div></div><div class="step"><div class="step-num">5</div><div class="step-content"><strong>Sign Out</strong> when you're done &mdash; click your name or &#128100; in the top-right corner, then "Sign Out."</div></div></div>

<div class="key-concept"><div class="box-label">Nothing happens until the last button</div><p>You can click around, look at menus, and fill in boxes &mdash; <strong>nothing is paid, sent, or bought until you press the final button</strong> on the review page. If you get nervous, click the <strong>Back</strong> button or close the tab. You won't break anything.</p></div>

<h4>How the rest of this part works</h4>
<p>Every lesson from here on follows the same four steps, so you learn the <em>pattern</em> &mdash; not just one website:</p>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-content"><strong>The pattern</strong> &mdash; the short version that works for any company.</div></div>
  <div class="step"><div class="step-num">2</div><div class="step-content"><strong>Your example</strong> &mdash; the pattern on a website you actually use (like Wells Fargo or LADWP).</div></div>
  <div class="step"><div class="step-num">3</div><div class="step-content"><strong>Same pattern, different company</strong> &mdash; two companies side by side, so you can see they match.</div></div>
  <div class="step"><div class="step-num">4</div><div class="step-content"><strong>Your turn</strong> &mdash; a pretend company you've never seen. Can you find your way using the pattern?</div></div>
</div>

<div class="tip-box"><div class="box-label">When a website surprises you</div><p>Websites change their colors and pictures every so often. That's okay! If something looks different from this guide, go back to the pattern: <strong>Sign In top-right &rarr; look at the menu &rarr; review &rarr; confirm.</strong> The pattern doesn't change.</p></div>` },

    { id: "m5-banking", title: "Your Bank Online (Wells Fargo)",
      html: `<p>Online banking lets you do most of what you'd do at a branch &mdash; check your balance, see what's been paid, pay bills, deposit a check &mdash; from home.</p>

<div class="part"><span class="part-num">Step 1</span><span class="part-title">The pattern (works everywhere)</span></div>
<div class="pattern-card">
  <div class="pattern-label">Banking pattern</div>
  <div class="pattern-flow"><span class="stepchip">Go to the bank's website or app</span><span class="arrow">&#8594;</span><span class="stepchip">Sign On</span><span class="arrow">&#8594;</span><span class="stepchip">Accounts: see balance & activity</span><span class="arrow">&#8594;</span><span class="stepchip">Pay & Transfer</span><span class="arrow">&#8594;</span><span class="stepchip">Sign Off</span></div>
  
</div>

<div class="part"><span class="part-num">Step 2</span><span class="part-title">Your example: Wells Fargo</span></div>
<p>Wells Fargo's sign-in box is right on its main page. Notice they call it <strong>"Sign On"</strong> instead of "Sign In" &mdash; different words, same door.</p>

<div class="browser-mockup">
  <div class="browser-chrome">
    <div class="browser-tabs"><div class="browser-tab active">&#128274; Wells Fargo</div></div>
    <div class="browser-toolbar"><div class="browser-nav-btns"><span>&#8592;</span> <span>&#8594;</span> <span>&#8635;</span></div><div class="browser-address"><span class="lock">&#128274;</span> https://www.wellsfargo.com</div></div>
  </div>
  <div class="browser-body" style="background:#F7F3EE">
    <div style="background:#D71E28;color:#fff;padding:10px 16px;margin:-20px -20px 18px;font-weight:800;display:flex;justify-content:space-between;align-items:center"><span>WELLS FARGO</span><span style="font-weight:600">&#128269; Search &nbsp; | &nbsp; Sign On</span></div>
    <div style="max-width:360px;background:#fff;border-radius:8px;padding:20px;box-shadow:0 2px 8px rgba(0,0,0,0.08)">
      <div style="font-weight:700;margin-bottom:10px">Good morning</div>
      <div style="font-weight:600;font-size:0.9rem">Username</div>
      <div style="border:1px solid #999;border-radius:4px;padding:8px;margin-bottom:10px;color:#777">&nbsp;</div>
      <div style="font-weight:600;font-size:0.9rem">Password</div>
      <div style="border:1px solid #999;border-radius:4px;padding:8px;margin-bottom:12px;color:#777">&nbsp;</div>
      <div style="background:#D71E28;color:#fff;text-align:center;padding:10px;border-radius:20px;font-weight:700">Sign on</div>
      <div style="margin-top:10px;font-size:0.9rem;color:#1F6FA8;text-decoration:underline">Forgot username or password?</div>
      <div style="font-size:0.9rem;color:#1F6FA8;text-decoration:underline">Enroll</div>
    </div>
  </div>
</div>

<h4>Checking your balance and activity</h4>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Go to <strong>wellsfargo.com</strong> (type it yourself) and sign on with your username and password. Enter the code if they text you one.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">The first page you see is your <strong>Account Summary</strong>: each account (checking, savings) with its balance.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">Click an account's name to see its <strong>activity</strong> &mdash; every payment and deposit, newest at the top. This is your online checkbook register.</div></div></div>

<h4>Paying a bill through the bank (Bill Pay)</h4>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">In the menu, choose <strong>Pay &amp; Transfer</strong>, then <strong>Pay Bills</strong>.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">The first time, you'll <strong>add a payee</strong> (the company you're paying, like LADWP). You'll need your account number with that company &mdash; it's printed on your paper bill.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">After that, just type the <strong>amount</strong> and choose the <strong>date</strong>.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">Review the summary, then click the final <strong>Pay</strong> or <strong>Submit</strong> button. You'll see a confirmation number.</div></div></div>

<h4>Depositing a check with your iPhone</h4>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Open the <strong>Wells Fargo app</strong> on your iPhone and sign on.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Tap <strong>Deposit</strong> (at the bottom of the screen).</div></div><div class="step"><div class="step-num">3</div><div class="step-content">Choose the account, type the amount, and follow the prompts to take a picture of the <strong>front</strong> and <strong>back</strong> of the check. Before the picture of the back, sign it and write <strong>"For Mobile Deposit Only at Wells Fargo"</strong> under your signature &mdash; the app shows you exactly what to write.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">Tap <strong>Deposit</strong>. Keep the paper check in a drawer for a couple of weeks, then tear it up.</div></div></div>

<div class="warning-box"><div class="box-label">The #1 banking safety rule</div><p>Wells Fargo (or any bank) will <strong>never</strong> call, text, or email asking for your password, your PIN, or a code they just sent you. They will never ask you to "move your money to a safe account." If anyone does, hang up and call the number on the <strong>back of your debit card</strong>.</p></div>

<div class="part"><span class="part-num">Step 3</span><span class="part-title">Same pattern, different company</span></div>
<p>Here's Wells Fargo next to a bank you don't use. Look at how the <mark>highlighted</mark> parts match:</p>
<div class="compare">
  <div class="compare-col"><div class="c-head" style="background:#D71E28">Wells Fargo</div><ul><li>Sign-in button says <mark>Sign On</mark>, top-right</li><li>Menu: <mark>Pay &amp; Transfer</mark> &rarr; Pay Bills</li><li>Balances on the <mark>Account Summary</mark> page</li><li>Phone app: <mark>Deposit</mark> button at the bottom</li></ul></div><div class="compare-col"><div class="c-head" style="background:#0F5BA7">Chase</div><ul><li>Sign-in button says <mark>Sign in</mark>, top-right</li><li>Menu: <mark>Pay &amp; transfer</mark> &rarr; Pay bills</li><li>Balances on the <mark>Accounts</mark> page</li><li>Phone app: <mark>Deposit checks</mark> button</li></ul></div>
</div><p><em>Different colors and a word or two different &mdash; same doors in the same places.</em></p>

<div class="part"><span class="part-num">Step 4</span><span class="part-title">Your turn: a company you've never seen</span></div>
<div class="spot" data-hint="Paying a bill is usually under a menu item about paying or transferring.">
  <div class="spot-head">Can you spot it?</div>
  <div class="spot-q">You're signed in to a bank you've never used. Where would you click to pay a bill?</div>
  <div class="spot-screen">
    <div class="s-bar"><span class="s-addr">&#128274; www.harborcreditunion.org/accounts</span></div>
    <div class="s-head" style="background:#0B3D5C"><span class="s-logo" style="color:#fff">&#9875; Harbor Credit Union</span><button class="spot-decoy" data-say="You're already on the Accounts page &mdash; it shows your balances." style="color:#fff">Accounts</button><button class="spot-target" style="color:#fff">Pay &amp; Move Money</button><button class="spot-decoy" data-say="That's for credit-card points, not bills." style="color:#fff">Rewards</button><button class="spot-decoy" data-say="That would end your visit." style="color:#fff">&#128100; Sign Off</button></div>
    <div class="s-body"><p><strong>Checking &bull;&bull;4417</strong> &nbsp; $2,350.12</p><p><strong>Savings &bull;&bull;9032</strong> &nbsp; $11,204.50</p></div>
    <div class="s-foot"><button class="spot-decoy" data-say="That has phone numbers &mdash; handy, but not for paying.">Contact Us</button><span>Privacy</span><span>Locations</span></div>
  </div>
  <div class="spot-msg yes">You got it! <strong>"Pay &amp; Move Money"</strong> is this bank's version of Wells Fargo's "Pay &amp; Transfer." Different words, same job, same spot in the menu.</div>
  <div class="spot-msg hint"></div>
  <div class="spot-actions"><button class="bar-btn" data-action="spot-show">Show me</button></div>
</div>` },

    { id: "m5-utilities", title: "Paying Utility Bills (LADWP, SoCalGas, Spectrum)",
      html: `<p>Your electric and water (LADWP), gas (SoCalGas), and internet/TV (Spectrum) bills can all be paid online. Every utility company's website works almost exactly the same way.</p>

<div class="part"><span class="part-num">Step 1</span><span class="part-title">The pattern (works everywhere)</span></div>
<div class="pattern-card">
  <div class="pattern-label">Utility bill pattern</div>
  <div class="pattern-flow"><span class="stepchip">Go to the company's website</span><span class="arrow">&#8594;</span><span class="stepchip">Log In (top-right)</span><span class="arrow">&#8594;</span><span class="stepchip">Billing / Pay Bill</span><span class="arrow">&#8594;</span><span class="stepchip">Enter amount & card or bank</span><span class="arrow">&#8594;</span><span class="stepchip">Review &rarr; Pay</span></div>
  <p style="margin:10px 0 0">Your <strong>account number</strong> is printed on your paper bill. You'll need it the first time you set up an online account.</p>
</div>

<div class="part"><span class="part-num">Step 2</span><span class="part-title">Your example: LADWP</span></div>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Go to <strong>ladwp.com</strong>.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Click <strong>Log In</strong> in the top-right corner. (First time? Click <strong>Register</strong> and have a paper bill handy for your account number.)</div></div><div class="step"><div class="step-num">3</div><div class="step-content">You'll see your <strong>current balance</strong> and due date right away.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">Click <strong>Pay Bill</strong> (or "Make a Payment").</div></div><div class="step"><div class="step-num">5</div><div class="step-content">Choose how to pay &mdash; usually your Wells Fargo checking account (you'll type the routing and account numbers from a check the first time) or a card.</div></div><div class="step"><div class="step-num">6</div><div class="step-content">Review the amount and date, then click the final <strong>Pay</strong> or <strong>Submit</strong>. Write down or save the confirmation number.</div></div></div>

<div class="tip-box"><div class="box-label">Two ways to pay the same bill</div><p>You can pay LADWP on <strong>LADWP's website</strong> <em>or</em> through <strong>Wells Fargo Bill Pay</strong> (see the bank lesson). Both work. Just pick one way and stick with it, so a bill doesn't get paid twice.</p></div>

<h4>AutoPay: set it once, never miss a bill</h4>
<p>Most utilities offer <strong>AutoPay</strong> (sometimes called "Automatic Payments" or "Recurring Payments"). Each month, the company takes the bill amount from your bank account on the due date, automatically. You'll still get an email showing what was charged.</p>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Sign in and look in the <strong>Billing</strong> menu for <strong>AutoPay</strong>.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Choose your bank account, read the summary, and confirm.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">Each month, glance at the email to make sure the amount looks normal.</div></div></div>
<p><strong>Paperless billing</strong> is a separate setting: instead of a paper bill in the mailbox, you get an email saying "your bill is ready." That's optional &mdash; keep paper bills if you prefer them.</p>

<div class="part"><span class="part-num">Step 3</span><span class="part-title">Same pattern, different company</span></div>
<div class="compare">
  <div class="compare-col"><div class="c-head" style="background:#00609C">SoCalGas</div><ul><li><mark>Log In</mark> in the top-right of socalgas.com</li><li>Menu: <mark>My Account</mark> &rarr; Pay Bill</li><li>AutoPay under <mark>billing</mark> options</li><li>Account number on your <mark>paper bill</mark></li></ul></div><div class="compare-col"><div class="c-head" style="background:#0099D8">Spectrum</div><ul><li><mark>Sign In</mark> in the top-right of spectrum.net</li><li>Menu: <mark>Billing</mark> &rarr; Make a Payment</li><li>AutoPay under <mark>Billing</mark></li><li>Account number on your <mark>paper bill</mark></li></ul></div>
</div><p><em>Gas, internet, electric &mdash; it's all the same pattern.</em></p>

<div class="part"><span class="part-num">Step 4</span><span class="part-title">Your turn: a company you've never seen</span></div>
<div class="spot" data-hint="Look for a word about paying or billing near the top.">
  <div class="spot-head">Can you spot it?</div>
  <div class="spot-q">You just signed in to a trash-collection company you've never used. Where do you pay?</div>
  <div class="spot-screen">
    <div class="s-bar"><span class="s-addr">&#128274; www.canyonwaste.com/myaccount</span></div>
    <div class="s-head" style="background:#2E5E1E"><span class="s-logo" style="color:#fff">&#9851;&#65039; Canyon Waste Services</span><button class="spot-decoy" data-say="That shows which day your trash gets picked up." style="color:#fff">Schedule</button><button class="spot-target" style="color:#fff">Billing</button><button class="spot-decoy" data-say="That's helpful info, but not for paying." style="color:#fff">Recycling Tips</button></div>
    <div class="s-body"><p>Welcome back! &nbsp; <strong>Amount due: $48.20</strong> &nbsp; Due Dec 15</p></div>
    <div class="s-foot"><button class="spot-decoy" data-say="Phone numbers live here &mdash; not payments.">Contact Us</button><span>Holiday schedule</span></div>
  </div>
  <div class="spot-msg yes">Yes! <strong>Billing</strong> is where payments live at almost every utility. Inside, you'll find "Pay Bill" and "AutoPay."</div>
  <div class="spot-msg hint"></div>
  <div class="spot-actions"><button class="bar-btn" data-action="spot-show">Show me</button></div>
</div>` },

    { id: "m5-government", title: "Social Security and Medicare Online",
      html: `<p>Social Security and Medicare both have websites where you can see your information any time: payment amounts, letters, claims, and your Medicare card. You don't need to call and wait on hold.</p>

<div class="part"><span class="part-num">Step 1</span><span class="part-title">The pattern (works everywhere)</span></div>
<div class="pattern-card">
  <div class="pattern-label">Government website pattern</div>
  <div class="pattern-flow"><span class="stepchip">Type the .gov address yourself</span><span class="arrow">&#8594;</span><span class="stepchip">Sign in with Login.gov or ID.me</span><span class="arrow">&#8594;</span><span class="stepchip">Look at your information</span><span class="arrow">&#8594;</span><span class="stepchip">Sign Out</span></div>
  <p style="margin:10px 0 0">Real U.S. government websites end in <strong>.gov</strong>. If the address ends in anything else (.com, .org, .net), it isn't the government.</p>
</div>

<div class="key-concept"><div class="box-label">Why there's an extra sign-in step</div><p>Social Security and Medicare don't use their own usernames anymore. You sign in through a separate, free <strong>sign-in helper</strong>: <strong>Login.gov</strong> or <strong>ID.me</strong> (Medicare also accepts <strong>CLEAR</strong>). You set it up once &mdash; it asks for your email, a phone number, and a photo of your driver's license &mdash; and then the <em>same</em> Login.gov sign-in works for both Social Security and Medicare.</p><p>Setting it up the first time takes about 15&ndash;20 minutes. This is a great one to do with Asher sitting next to you.</p></div>

<div class="part"><span class="part-num">Step 2</span><span class="part-title">Your example: Social Security</span></div>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Go to <strong>ssa.gov/myaccount</strong>.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Click <strong>Sign in with Login.gov</strong> (or ID.me, if that's the one you set up).</div></div><div class="step"><div class="step-num">3</div><div class="step-content">You'll be sent to the Login.gov page. Type your email and password, then the code texted to your phone. Login.gov sends you back to Social Security automatically.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">Now you can see your <strong>payment amount and date</strong>, get a <strong>benefit letter</strong> (proof of income &mdash; landlords and agencies sometimes ask for this), and download your <strong>SSA-1099</strong> tax form each January.</div></div></div>

<div class="part"><span class="part-num">Step 3</span><span class="part-title">Same pattern, different company</span></div>
<div class="compare">
  <div class="compare-col"><div class="c-head" style="background:#112E51">Social Security</div><ul><li>Address: <mark>ssa.gov</mark>/myaccount</li><li>Sign in with <mark>Login.gov or ID.me</mark></li><li>See payments, letters, tax forms</li></ul></div><div class="compare-col"><div class="c-head" style="background:#0071BC">Medicare</div><ul><li>Address: <mark>medicare.gov</mark> &rarr; Log in</li><li>Sign in with <mark>Login.gov, ID.me, or CLEAR</mark></li><li>See claims, plan, print your card</li></ul></div>
</div><p><em>Both are .gov. Both use the same sign-in helper. One sign-in, two buildings.</em></p>
<p>For Medicare, the first time you'll also need your <strong>Medicare Number</strong> &mdash; it's on your red, white, and blue Medicare card.</p>

<div class="warning-box"><div class="box-label">Social Security and Medicare don't call to threaten you</div><p>Social Security will <strong>never</strong> call to say your number is "suspended," demand payment, or ask for gift cards. Medicare won't call out of the blue asking for your Medicare Number. If a call like that comes in, hang up. To check, look up the real phone number yourself: go to <strong>medicare.gov</strong> or <strong>ssa.gov</strong>, scroll to the bottom, and click <strong>Contact</strong>.</p></div>

<div class="part"><span class="part-num">Step 4</span><span class="part-title">Your turn: a company you've never seen</span></div>
<div class="quiz"><div class="quiz-header">Think it through</div><h3>You get a text: "Your Medicare benefits are expiring. Renew at medicare-benefits-renew.com." What do you notice?</h3><div class="quiz-options"><button class="quiz-option" data-correct="true">The address ends in .com, not .gov &mdash; it isn't really Medicare. I'll delete it.</button><button class="quiz-option" data-correct="false">It mentions Medicare, so it must be real. I'll tap the link.</button></div><div class="quiz-feedback correct-fb">Exactly. Real Medicare websites end in <strong>.gov</strong>. This is a scam &mdash; delete it. If you're ever unsure, type <em>medicare.gov</em> yourself and sign in.</div><div class="quiz-feedback incorrect-fb">Look at the end of the address: <strong>.com</strong>. Real government websites always end in <strong>.gov</strong>. This one is a scam &mdash; delete it.</div></div>` },

    { id: "m5-healthcare", title: "Your Doctor's Patient Portal (MyChart and Others)",
      html: `<p>Most doctors' offices and hospitals have a <strong>patient portal</strong>: a website and app where you can message your doctor, see test results, request refills, and book appointments &mdash; without waiting on hold. The most common one is called <strong>MyChart</strong>, but your doctor might use a different name.</p>

<div class="part"><span class="part-num">Step 1</span><span class="part-title">The pattern (works everywhere)</span></div>
<div class="pattern-card">
  <div class="pattern-label">Patient portal pattern</div>
  <div class="pattern-flow"><span class="stepchip">Open the portal (website or app)</span><span class="arrow">&#8594;</span><span class="stepchip">Sign In</span><span class="arrow">&#8594;</span><span class="stepchip">Pick from the menu: Messages, Visits, Test Results, Medications</span><span class="arrow">&#8594;</span><span class="stepchip">Review &rarr; Send</span></div>
  
</div>

<div class="tip-box"><div class="box-label">Not sure which portal your doctor uses?</div><p>At your next visit or phone call, ask the front desk: <strong>"Do you have a patient portal, and can you help me sign up?"</strong> They do this all the time and can often send you a sign-up link by text or email.</p></div>

<div class="part"><span class="part-num">Step 2</span><span class="part-title">Your example: MyChart</span></div>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">On your iPhone, get the <strong>MyChart</strong> app from the App Store (made by "Epic Systems"). When you open it, search for your doctor's medical group by name. On a computer, use the MyChart link on your medical group's own website.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Sign in with the username and password you created (MyChart may also text you a code).</div></div><div class="step"><div class="step-num">3</div><div class="step-content">The main screen shows big buttons. The four you'll use most:</div></div></div>
<table class="acct-table">
  <tr><th>Button</th><th>What it's for</th></tr>
  <tr><td><strong>Messages</strong></td><td>Write to your doctor's office about a non-urgent question, like a medication side effect. Usually answered in 1&ndash;3 business days.</td></tr>
  <tr><td><strong>Visits</strong> or <strong>Appointments</strong></td><td>See upcoming appointments, and often book or cancel one.</td></tr>
  <tr><td><strong>Test Results</strong></td><td>Lab and test results. They sometimes appear here <em>before</em> the doctor has a chance to call you &mdash; it's okay to wait for their explanation.</td></tr>
  <tr><td><strong>Medications</strong></td><td>Your list of prescriptions, with a <strong>Request refill</strong> button.</td></tr>
</table>

<div class="warning-box"><div class="box-label">Not for emergencies</div><p>Portal messages aren't watched every minute. For anything urgent, call the office. For an emergency, call 911.</p></div>

<div class="part"><span class="part-num">Step 3</span><span class="part-title">Same pattern, different company</span></div>
<div class="compare">
  <div class="compare-col"><div class="c-head" style="background:#C8102E">MyChart (many medical groups)</div><ul><li><mark>Messages</mark> to talk to your doctor</li><li><mark>Visits</mark> for appointments</li><li><mark>Test Results</mark></li><li><mark>Medications</mark> &rarr; Request refill</li></ul></div><div class="compare-col"><div class="c-head" style="background:#006BA6">Kaiser Permanente (kp.org)</div><ul><li><mark>Message center</mark> &rarr; Email your doctor</li><li><mark>Appointments</mark></li><li><mark>Test results</mark></li><li><mark>Pharmacy</mark> &rarr; Refill prescriptions</li></ul></div>
</div><p><em>Different names on the buttons, but the same four jobs every time.</em></p>

<div class="part"><span class="part-num">Step 4</span><span class="part-title">Your turn: a company you've never seen</span></div>
<div class="spot" data-hint="Refills are usually with your list of medications or prescriptions.">
  <div class="spot-head">Can you spot it?</div>
  <div class="spot-q">You're signed in to a patient portal you've never seen. You need a prescription refilled. Where do you tap?</div>
  <div class="spot-screen">
    <div class="s-bar"><span class="s-addr">&#128274; portal.westsidemedgroup.com</span></div>
    <div class="s-head" style="background:#EAF4FB"><span class="s-logo" style="color:#0B5A8A">&#129658; Westside Health</span><button class="spot-decoy" data-say="That's for messages. You could ask there, but there's a quicker button.">Inbox</button><button class="spot-decoy" data-say="That's for booking visits.">Appointments</button><button class="spot-target">My Prescriptions</button><button class="spot-decoy" data-say="That's for paying your doctor's bills.">Billing</button></div>
    <div class="s-body"><p>Hello, Celine. You have no new messages.</p></div>
    
  </div>
  <div class="spot-msg yes">Yes! <strong>My Prescriptions</strong> is this portal's version of MyChart's "Medications." Inside you'll find a "Request refill" button.</div>
  <div class="spot-msg hint"></div>
  <div class="spot-actions"><button class="bar-btn" data-action="spot-show">Show me</button></div>
</div>` },

    { id: "m5-shopping", title: "Online Shopping (Amazon)",
      html: `<p>Buying things online works like a store: walk the aisles, put things in a basket, pay at the counter. The only difference is it arrives at your door.</p>

<div class="part"><span class="part-num">Step 1</span><span class="part-title">The pattern (works everywhere)</span></div>
<div class="pattern-card">
  <div class="pattern-label">Shopping pattern</div>
  <div class="pattern-flow"><span class="stepchip">Search</span><span class="arrow">&#8594;</span><span class="stepchip">Add to Cart</span><span class="arrow">&#8594;</span><span class="stepchip">Cart &rarr; Checkout</span><span class="arrow">&#8594;</span><span class="stepchip">Review &rarr; Place Order</span><span class="arrow">&#8594;</span><span class="stepchip">Track in "Orders"</span></div>
  
</div>
<div class="key-concept"><div class="box-label">The cart is not a purchase</div><p>Putting something in your <strong>cart</strong> (some stores call it a <strong>bag</strong> or <strong>basket</strong>) does <em>not</em> buy it. It just sets it aside. Nothing is bought until you click the final <strong>Place Order</strong> button on the review page.</p></div>

<div class="part"><span class="part-num">Step 2</span><span class="part-title">Your example: Amazon</span></div>
<h4>Buying something</h4>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Go to <strong>amazon.com</strong> and click <strong>Sign in</strong> (under "Hello, sign in" at the top-right).</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Type what you want in the <strong>search bar</strong> at the top &mdash; like "large print crossword books" &mdash; and press Enter.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">Click an item to see pictures, the price, and the <strong>star rating</strong> (more stars = more people were happy with it). Check who sells it and when it will arrive.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">Click <strong>Add to Cart</strong>. Keep shopping, or click the <strong>cart icon</strong> &#128722; at the top-right when you're ready.</div></div><div class="step"><div class="step-num">5</div><div class="step-content">Click <strong>Proceed to checkout</strong>. Check the delivery address and the card. Amazon remembers these after the first time.</div></div><div class="step"><div class="step-num">6</div><div class="step-content">Review the items, the total, and the delivery date, then click <strong>Place your order</strong>. A confirmation email arrives in your AOL inbox.</div></div></div>

<h4>Where's my package?</h4>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Click <strong>Returns &amp; Orders</strong> at the top-right of Amazon.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Find the item and click <strong>Track package</strong>. You'll see where it is and when it's expected.</div></div></div>

<h4>Returning something</h4>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Go to <strong>Returns &amp; Orders</strong> and find the item.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Click <strong>Return or replace items</strong>, choose a reason from the list, and continue.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">Choose how to return it. Often the easiest is <strong>dropping it off at a UPS Store, Whole Foods, or Kohl's</strong> &mdash; many don't even need a box or label; you just show a QR code (a square barcode) on your phone.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">Your refund appears once they receive it. You'll get an email.</div></div></div>

<div class="warning-box"><div class="box-label">Fake "Amazon" messages</div><p>Scammers love pretending to be Amazon: "Your order of an iPhone 17 for $1,299 &mdash; call us to cancel." If you didn't order it, <strong>don't call the number or tap the link.</strong> Go to amazon.com yourself and look in <strong>Returns &amp; Orders</strong>. If it isn't there, it isn't real.</p></div>

<div class="part"><span class="part-num">Step 3</span><span class="part-title">Same pattern, different company</span></div>
<div class="compare">
  <div class="compare-col"><div class="c-head" style="background:#232F3E">Amazon</div><ul><li><mark>Sign in</mark> at the top-right</li><li><mark>Add to Cart</mark> &rarr; cart icon top-right</li><li>Track in <mark>Returns &amp; Orders</mark></li><li>Final button: <mark>Place your order</mark></li></ul></div><div class="compare-col"><div class="c-head" style="background:#CC0000">Target.com</div><ul><li><mark>Sign in</mark> at the top-right</li><li><mark>Add to cart</mark> &rarr; cart icon top-right</li><li>Track in <mark>Orders</mark> (under your account)</li><li>Final button: <mark>Place your order</mark></li></ul></div>
</div><p><em>Every big store website is built the same way.</em></p>

<div class="part"><span class="part-num">Step 4</span><span class="part-title">Your turn: a company you've never seen</span></div>
<div class="spot" data-hint="Shopping carts are almost always a little cart or bag picture in the top-right corner.">
  <div class="spot-head">Can you spot it?</div>
  <div class="spot-q">You added a sweater to your bag on a clothing store website you've never used. Where do you click to check out?</div>
  <div class="spot-screen">
    <div class="s-bar"><span class="s-addr">&#128274; www.pacificthreads.com/sweaters</span></div>
    <div class="s-head" style="background:#F8F1EA"><span class="s-logo" style="color:#5A3E2B">PACIFIC THREADS</span><button class="spot-decoy" data-say="That's an aisle of the store.">Women</button><button class="spot-decoy" data-say="That shows discounted items.">Sale</button><button class="spot-decoy" data-say="That's search.">&#128269;</button><button class="spot-decoy" data-say="That's your account &mdash; past orders and settings.">&#128100;</button><button class="spot-target">&#128092; 1</button></div>
    <div class="s-body"><p><strong>Cozy Knit Sweater</strong> &mdash; $48 &nbsp; <span style="color:#1E7E46">&#10003; Added to bag</span></p></div>
    
  </div>
  <div class="spot-msg yes">Yes! The <strong>little bag with a "1"</strong> in the top-right is this store's cart. The number tells you how many things are in it. Click it, then "Checkout."</div>
  <div class="spot-msg hint"></div>
  <div class="spot-actions"><button class="bar-btn" data-action="spot-show">Show me</button></div>
</div>` },

    { id: "m5-grocery", title: "Grocery Delivery & Pickup (Instacart, Ralphs, Vons)",
      html: `<p>You can order groceries from Ralphs, Vons, Gelson's, or Bristol Farms on your computer or phone, and have them <strong>delivered</strong> to your door or packed for <strong>pickup</strong>.</p>

<div class="part"><span class="part-num">Step 1</span><span class="part-title">The pattern (works everywhere)</span></div>
<div class="pattern-card">
  <div class="pattern-label">Grocery pattern</div>
  <div class="pattern-flow"><span class="stepchip">Choose a store</span><span class="arrow">&#8594;</span><span class="stepchip">Fill your cart</span><span class="arrow">&#8594;</span><span class="stepchip">Pick a delivery or pickup time</span><span class="arrow">&#8594;</span><span class="stepchip">Review &rarr; Place order</span><span class="arrow">&#8594;</span><span class="stepchip">Answer texts about swaps</span></div>
  
</div>

<p>There are two kinds of places to order from:</p>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content"><strong>A delivery service</strong> like <strong>Instacart</strong> (instacart.com or the Instacart app). One account lets you shop at many stores &mdash; Ralphs, Vons, Gelson's, Bristol Farms, Costco and more. A personal shopper picks your items and brings them.</div></div><div class="step"><div class="step-num">2</div><div class="step-content"><strong>The store's own website or app</strong>, like <strong>ralphs.com</strong> or <strong>vons.com</strong>. These often offer free <strong>pickup</strong>: you park in the marked spots and they bring the bags to your car.</div></div></div>

<div class="part"><span class="part-num">Step 2</span><span class="part-title">Your example: Instacart</span></div>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Go to <strong>instacart.com</strong> (or open the app) and <strong>Log in</strong>. Check that your address is right at the top.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Pick a store, like <strong>Gelson's</strong>.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">Search for each item ("bananas," "2% milk") and tap <strong>+ Add</strong>. Use the <strong>+</strong> and <strong>&minus;</strong> buttons to change how many.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">Tap the <strong>cart</strong> at the top-right, then <strong>Go to checkout</strong>.</div></div><div class="step"><div class="step-num">5</div><div class="step-content">Choose a <strong>delivery time</strong>. Review the total &mdash; it includes the groceries, a <strong>delivery fee</strong>, a <strong>service fee</strong>, and a <strong>tip</strong> for the shopper (you can change the tip).</div></div><div class="step"><div class="step-num">6</div><div class="step-content">Tap <strong>Place order</strong>.</div></div></div>
<div class="tip-box"><div class="box-label">If they're out of something</div><p>While shopping, your shopper may <strong>text you</strong>: "They're out of Fuji apples &mdash; is Gala okay?" Just reply in the app or by text. During checkout you can also choose what to do if an item is missing: "Find best match," "Pick specific replacement," or "Don't replace."</p></div>
<div class="tip-box"><div class="box-label">Your regular groceries, faster</div><p>After your first order, look for <strong>"Buy it again"</strong> or <strong>"Past purchases."</strong> You can refill your usual groceries in a few taps.</p></div>

<h4>Prescriptions</h4>
<p>Pharmacies (like CVS, Walgreens, or the pharmacy inside Ralphs or Vons) also have websites and apps with the same pattern: sign in &rarr; <strong>Prescriptions</strong> &rarr; <strong>Refill</strong> &rarr; choose pickup or delivery. Many can text you when a prescription is ready.</p>

<div class="part"><span class="part-num">Step 3</span><span class="part-title">Same pattern, different company</span></div>
<div class="compare">
  <div class="compare-col"><div class="c-head" style="background:#0AAD0A">Instacart (Gelson's, Bristol Farms&hellip;)</div><ul><li>Choose your <mark>store</mark> first</li><li><mark>+ Add</mark> items to cart</li><li>Pick a <mark>delivery time</mark></li><li><mark>Place order</mark>, then shopper may text</li></ul></div><div class="compare-col"><div class="c-head" style="background:#E31837">Ralphs.com</div><ul><li>Choose <mark>Pickup or Delivery</mark> &amp; store</li><li><mark>Add to cart</mark></li><li>Pick a <mark>time slot</mark></li><li><mark>Place order</mark>, then texts about swaps</li></ul></div>
</div><p><em>Different store, same steps.</em></p>

<div class="part"><span class="part-num">Step 4</span><span class="part-title">Your turn: a company you've never seen</span></div>
<div class="spot" data-hint="You've already filled your cart &mdash; look for the cart in the top-right.">
  <div class="spot-head">Can you spot it?</div>
  <div class="spot-q">You're on a grocery website you've never used, and your cart is full. What do you click next?</div>
  <div class="spot-screen">
    <div class="s-bar"><span class="s-addr">&#128274; www.freshmarketfoods.com</span></div>
    <div class="s-head" style="background:#FFF7E0"><span class="s-logo" style="color:#8A5A00">&#129388; Fresh Market Foods</span><button class="spot-decoy" data-say="That shows this week's sales.">Weekly Ad</button><button class="spot-decoy" data-say="Fun, but not for checking out.">Recipes</button><button class="spot-target">&#128722; Cart (12)</button></div>
    <div class="s-body"><p>Produce &bull; Dairy &bull; Bakery &bull; Meat &amp; Seafood</p></div>
    <div class="s-foot"><button class="spot-decoy" data-say="That's for questions.">Help</button><span>Store locator</span></div>
  </div>
  <div class="spot-msg yes">Right! The <strong>Cart</strong> button opens your basket, where you'll find <strong>Checkout</strong> and pick a delivery or pickup time.</div>
  <div class="spot-msg hint"></div>
  <div class="spot-actions"><button class="bar-btn" data-action="spot-show">Show me</button></div>
</div>` },

    { id: "m5-food", title: "Restaurant Food Delivery (Uber Eats, Grubhub, DoorDash)",
      html: `<p>Apps like <strong>Uber Eats</strong>, <strong>Grubhub</strong>, and <strong>DoorDash</strong> bring food from local restaurants to your door. If you learned the grocery lesson, you already know this pattern &mdash; it's nearly identical.</p>

<div class="part"><span class="part-num">Step 1</span><span class="part-title">The pattern (works everywhere)</span></div>
<div class="pattern-card">
  <div class="pattern-label">Food delivery pattern</div>
  <div class="pattern-flow"><span class="stepchip">Check your address</span><span class="arrow">&#8594;</span><span class="stepchip">Pick a restaurant</span><span class="arrow">&#8594;</span><span class="stepchip">Add dishes to cart</span><span class="arrow">&#8594;</span><span class="stepchip">Checkout: fees + tip</span><span class="arrow">&#8594;</span><span class="stepchip">Watch the map &rarr; food arrives</span></div>
  
</div>

<div class="part"><span class="part-num">Step 2</span><span class="part-title">Your example: Uber Eats</span></div>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Open the <strong>Uber Eats</strong> app (or go to ubereats.com) and sign in. Check that the <strong>delivery address</strong> at the top is your home.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Search for a restaurant or a food ("Thai," "pizza"), and tap one.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">Tap a dish, choose any options (size, extras), and tap <strong>Add to order</strong>.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">Tap the <strong>cart</strong> or <strong>View order</strong> at the bottom, then <strong>Checkout</strong>.</div></div><div class="step"><div class="step-num">5</div><div class="step-content">Review the total. You'll see the food price, a <strong>delivery fee</strong>, a <strong>service fee</strong>, taxes, and a <strong>tip</strong> for the driver. Add delivery notes like "Please ring the bell" or "Leave at door."</div></div><div class="step"><div class="step-num">6</div><div class="step-content">Tap <strong>Place order</strong>. A <strong>map</strong> shows when the food is being made and where the driver is.</div></div></div>

<div class="tip-box"><div class="box-label">About the fees</div><p>Food delivery costs more than picking it up yourself &mdash; often <strong>$8&ndash;$15 extra</strong> once fees and tip are added. Always look at the final total on the review page before placing the order. Many restaurants also take orders for pickup on their own websites with no fees.</p></div>

<div class="part"><span class="part-num">Step 3</span><span class="part-title">Same pattern, different company</span></div>
<div class="compare">
  <div class="compare-col"><div class="c-head" style="background:#06C167">Uber Eats</div><ul><li>Check <mark>address</mark> at the top</li><li>Tap dish &rarr; <mark>Add to order</mark></li><li><mark>Checkout</mark>: fees + tip</li><li>Track on a <mark>map</mark></li></ul></div><div class="compare-col"><div class="c-head" style="background:#FF8000">Grubhub</div><ul><li>Check <mark>address</mark> at the top</li><li>Tap dish &rarr; <mark>Add to bag</mark></li><li><mark>Checkout</mark>: fees + tip</li><li>Track on a <mark>map</mark></li></ul></div>
</div><p><em>Uber Eats says "order," Grubhub says "bag" &mdash; same thing.</em></p>

<div class="part"><span class="part-num">Step 4</span><span class="part-title">Your turn: a company you've never seen</span></div>
<div class="quiz"><div class="quiz-header">Think it through</div><h3>You're trying a new delivery app called "SpeedyBite." You chose a dinner, and the screen shows a total of $34 with a button that says "Place Order." What should you do first?</h3><div class="quiz-options"><button class="quiz-option" data-correct="true">Look over the total: food, fees, tip, and address &mdash; then tap Place Order if it all looks right.</button><button class="quiz-option" data-correct="false">Tap Place Order right away so the food comes faster.</button></div><div class="quiz-feedback correct-fb">Exactly! That's step 4 of the Golden Pattern: <strong>review, then confirm</strong>. It works on any app &mdash; even one you've never heard of.</div><div class="quiz-feedback incorrect-fb">Taking a moment to check the total, the tip, and the address first is always worth it &mdash; that's "review, then confirm," which works on every app, even brand-new ones.</div></div>` },

    { id: "m5-tickets", title: "Event Tickets on Your Phone (Ticketmaster)",
      html: `<p>Most concerts, shows, and games no longer use paper tickets. Your tickets live in your account, and at the door you show them on your iPhone.</p>

<div class="part"><span class="part-num">Step 1</span><span class="part-title">The pattern (works everywhere)</span></div>
<div class="pattern-card">
  <div class="pattern-label">Phone ticket pattern</div>
  <div class="pattern-flow"><span class="stepchip">Open the ticket app</span><span class="arrow">&#8594;</span><span class="stepchip">Sign In</span><span class="arrow">&#8594;</span><span class="stepchip">My Tickets / My Events</span><span class="arrow">&#8594;</span><span class="stepchip">Tap the event &rarr; View Tickets</span><span class="arrow">&#8594;</span><span class="stepchip">Show the barcode at the door</span></div>
  
</div>

<div class="part"><span class="part-num">Step 2</span><span class="part-title">Your example: Ticketmaster</span></div>
<h4>Before the show (do this at home!)</h4>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Get the <strong>Ticketmaster</strong> app from the App Store and open it.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Tap <strong>My Account</strong> (bottom-right) and <strong>Sign In</strong> with the email and password used to buy the tickets. Expect a code by text or email.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">Tap <strong>My Events</strong> (or "Tickets") at the bottom. Your upcoming events appear as large pictures.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">Tap the event. You should see your seats. If you see <strong>Add to Apple Wallet</strong>, tap it &mdash; then the tickets also live in your iPhone's <strong>Wallet</strong> app and open even if the venue's internet is weak.</div></div></div>

<h4>At the door</h4>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Open the Ticketmaster app (or the <strong>Wallet</strong> app) &rarr; your event &rarr; <strong>View Tickets</strong>.</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Turn your screen brightness up. Hold your phone barcode-side toward the scanner.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">If you have more than one ticket, <strong>swipe left</strong> on the ticket to show the next one.</div></div></div>

<div class="warning-box"><div class="box-label">A screenshot won't work</div><p>Ticketmaster's barcodes <strong>move and change</strong> every few seconds (that's an anti-fraud feature), so a photo or screenshot of the ticket won't scan. Always open the real app or Wallet. And never buy tickets from strangers on social media &mdash; use Ticketmaster's own "Transfer" feature to send or receive tickets from people you know.</p></div>

<h4>Sending a ticket to someone else</h4>
<p>Tap the event &rarr; <strong>Transfer</strong> &rarr; choose the seats &rarr; type the person's name and email or phone number. They'll get a message to accept it in their own Ticketmaster app.</p>

<div class="part"><span class="part-num">Step 3</span><span class="part-title">Same pattern, different company</span></div>
<div class="compare">
  <div class="compare-col"><div class="c-head" style="background:#026CDF">Ticketmaster</div><ul><li><mark>My Account</mark> &rarr; Sign In</li><li>Tickets under <mark>My Events</mark></li><li><mark>Add to Apple Wallet</mark></li><li>Send with <mark>Transfer</mark></li></ul></div><div class="compare-col"><div class="c-head" style="background:#1A1A1A">AXS (used by some LA venues)</div><ul><li><mark>Account</mark> &rarr; Sign In</li><li>Tickets under <mark>My Events</mark></li><li><mark>Add to Wallet</mark> (for some events)</li><li>Send with <mark>Transfer</mark></li></ul></div>
</div><p><em>If an email says your tickets are on a different app, it works the same way.</em></p>

<div class="part"><span class="part-num">Step 4</span><span class="part-title">Your turn: a company you've never seen</span></div>
<div class="spot" data-hint="Tickets you already bought are usually under something like &quot;My Events&quot; or &quot;My Tickets.&quot;">
  <div class="spot-head">Can you spot it?</div>
  <div class="spot-q">Your friend bought you a ticket through an app you've never used. You're signed in. Where are your tickets?</div>
  <div class="spot-screen">
    <div class="s-bar"><span class="s-addr">&#128274; app: ShowPass</span></div>
    <div class="s-head" style="background:#1C1C3A"><span class="s-logo" style="color:#fff">&#127915; ShowPass</span><button class="spot-decoy" data-say="That's for finding new shows to buy." style="color:#fff">Discover</button><button class="spot-decoy" data-say="That searches for events to buy, not ones you have." style="color:#fff">Search</button></div>
    <div class="s-body"><p style="font-weight:700">Concerts near Los Angeles</p><p>Hollywood Bowl &bull; Greek Theatre &bull; Disney Hall</p></div>
    <div class="s-foot"><button class="spot-decoy" data-say="That's the main page with shows for sale.">&#127968; Home</button><button class="spot-target">&#127903;&#65039; My Tickets</button><button class="spot-decoy" data-say="That's for your settings and password.">&#128100; Account</button></div>
  </div>
  <div class="spot-msg yes">You found it! <strong>My Tickets</strong> at the bottom &mdash; same as Ticketmaster's "My Events." Tap it, then the event, then View Tickets.</div>
  <div class="spot-msg hint"></div>
  <div class="spot-actions"><button class="bar-btn" data-action="spot-show">Show me</button></div>
</div>` },

    { id: "m5-travel", title: "Booking Travel & Tickets",
      html: `<p>Booking flights, hotels, and event tickets online follows a very consistent pattern:</p>
<div class="diagram">
<div class="diagram-title">The booking pattern (same every time)</div>
<div class="diagram-row">
<div class="diagram-box d-blue">1. Search<br/><span style="font-weight: 400; font-size: 0.9rem;">dates, locations</span></div>
<div class="diagram-arrow">→</div>
<div class="diagram-box d-green">2. Choose<br/><span style="font-weight: 400; font-size: 0.9rem;">compare options</span></div>
<div class="diagram-arrow">→</div>
<div class="diagram-box d-coral">3. Enter Info<br/><span style="font-weight: 400; font-size: 0.9rem;">names, payment</span></div>
<div class="diagram-arrow">→</div>
<div class="diagram-box d-purple">4. Confirm<br/><span style="font-weight: 400; font-size: 0.9rem;">review &amp; pay</span></div>
</div>
</div>
<p>For <strong>flights</strong>, try <strong>Google Flights</strong> — it's one of the simplest booking tools. Just go to www.google.com/flights:</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>Search:</strong> Enter where you're flying from, where you're going, your travel dates, and how many passengers.</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>Browse results:</strong> A list of available flights appears with prices and times. You can sort by price, duration, or number of stops.</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>Select a flight:</strong> Click the one you want. It will often take you to the airline's website to complete the booking.</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>Enter passenger information:</strong> Names (exactly as they appear on your ID), contact information, and payment details.</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content"><strong>Review carefully before clicking "Book":</strong> Check the dates, passenger names, and total price on the summary screen before you confirm.</div>
</div>
</div>
<div class="tip-box">
<div class="box-label">After booking anything</div>
<p>You'll receive a <strong>confirmation email</strong> with a reference or confirmation number. Don't delete this! Move it to your "Travel" folder in AOL Mail. You'll need the confirmation number if you ever need to check, change, or cancel the reservation.</p>
</div>` },

    { id: "m5-videocalls", title: "Video Calls: FaceTime & Zoom",
      html: `<p>Video calling lets you see and talk to someone face-to-face through your phone, tablet, or computer. It's wonderful for staying connected with family, and it's also used by many doctors for "telehealth" appointments.</p>
<h4>FaceTime (built into your iPhone &amp; iPad)</h4>
<p>FaceTime is the easiest way to make a video call if both you and the other person have an iPhone or iPad. It's already on your phone — no need to install anything.</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>Open the FaceTime app</strong> (the green icon with a white video camera on your Home Screen).</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>Tap "New FaceTime"</strong> at the top of the screen.</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>Type the person's name</strong> (if they're in your Contacts) or their phone number.</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>Tap the green "FaceTime" button</strong> to start the call. Your camera and microphone turn on, and you'll see the other person when they answer.</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content"><strong>To end the call,</strong> tap the red circle button at the bottom of the screen.</div>
</div>
</div>
<div class="tip-box">
<div class="box-label">FaceTime tips</div>
<p>Hold your phone at <strong>arm's length</strong> so the other person can see your face, not just your forehead or chin. If you're using your iPad, prop it up against something so you don't have to hold it the whole time. And make sure you're in a well-lit room so they can see you clearly!</p>
</div>
<h4>Zoom (for appointments and group calls)</h4>
<p>Many doctors, organizations, and family gatherings now use <strong>Zoom</strong> for video meetings. Unlike FaceTime, Zoom works even if the other person doesn't have an iPhone.</p>
<div class="steps">
<div class="step">
<div class="step-num">1</div>
<div class="step-content"><strong>Download the Zoom app</strong> from the App Store on your iPhone/iPad (search "Zoom Workplace"). It's free.</div>
</div>
<div class="step">
<div class="step-num">2</div>
<div class="step-content"><strong>To join a meeting,</strong> you'll receive a link — either in an email or a text message. It looks like <em>https://zoom.us/j/123456789</em>. Just <strong>tap the link</strong> and it opens Zoom automatically.</div>
</div>
<div class="step">
<div class="step-num">3</div>
<div class="step-content"><strong>Zoom may ask permission</strong> to use your camera and microphone. Tap <strong>"Allow"</strong> for both — this is safe and necessary for the call to work.</div>
</div>
<div class="step">
<div class="step-num">4</div>
<div class="step-content"><strong>You may see a button that says "Join with Video"</strong> — tap it. Then tap <strong>"Call using Internet Audio"</strong> so they can hear you.</div>
</div>
<div class="step">
<div class="step-num">5</div>
<div class="step-content"><strong>To leave the meeting,</strong> tap the screen to show the controls, then tap <strong>"Leave"</strong> in the top-right corner.</div>
</div>
</div>
<div class="key-concept">
<div class="box-label">The two buttons to know during a video call</div>
<p>During any video call (FaceTime or Zoom), you'll see two important icons at the bottom: a <strong>microphone</strong> icon (tap to mute/unmute yourself) and a <strong>camera</strong> icon (tap to turn your video on/off). If people say "we can't hear you," check if your microphone is muted — the icon will have a line through it. Tap it to unmute.</p>
</div>

<h4>Joining a Zoom from your computer</h4>
<p>Doctors and groups often email a Zoom link. On your computer:</p>
<div class="steps"><div class="step"><div class="step-num">1</div><div class="step-content">Open the email in AOL Mail and click the blue link (it starts with <em>https://</em> and has <em>zoom.us</em> in it).</div></div><div class="step"><div class="step-num">2</div><div class="step-content">Chrome opens a new tab. A small box may pop up asking to <strong>"Open Zoom Workplace?"</strong> &mdash; click <strong>Open</strong> if you've installed Zoom. If not, look for the link that says <strong>"Join from your browser"</strong> &mdash; it works without installing anything.</div></div><div class="step"><div class="step-num">3</div><div class="step-content">Type your name if asked, then click <strong>Join</strong>. Allow the <strong>camera</strong> and <strong>microphone</strong> when asked.</div></div><div class="step"><div class="step-num">4</div><div class="step-content">If you see <strong>"Join Audio"</strong> or <strong>"Join with Computer Audio,"</strong> click it &mdash; otherwise no one can hear you.</div></div></div>
<div class="key-concept"><div class="box-label">The pattern for any video visit</div><p>Your doctor might use a different video service than Zoom. The pattern is the same for all of them: <strong>click the link &rarr; allow camera and microphone &rarr; type your name &rarr; Join &rarr; check the microphone isn't muted.</strong></p></div>
<h4>Regular phone calls</h4>
<p>See the lesson <a href="#/lesson/m4-phone">Phone Calls: Favorites, Contacts, and Voicemail</a> for setting up Favorites and handling calls from unknown numbers.</p>` },

    { id: "m5-printing", title: "Printing from Your Devices",
      html: `<p>Sometimes you need a physical copy of something — a boarding pass, a medical form, a recipe. Here's how to print from your devices.</p>
<div class="tab-container">
<div class="tab-buttons">
<button class="tab-btn active" onclick="showTab(this,'print-computer')">From Your Computer</button>
<button class="tab-btn" onclick="showTab(this,'print-phone')">From iPhone/iPad</button>
</div>
<div class="tab-content active" id="print-computer">
<p><strong>Printing from your Windows computer:</strong></p>
<p>When you're looking at something you want to print — a document, a webpage, an email — press and hold the <strong>Ctrl</strong> key (bottom-left of your keyboard) and then press the <strong>P</strong> key. This opens the Print window on almost any program. A "Print" dialog box will appear.</p>
<p style="margin-top: 8px;">In the Print dialog: <strong>(1)</strong> Make sure the correct printer is selected (it should show your printer's name). <strong>(2)</strong> Choose how many copies you want. <strong>(3)</strong> Click <strong>"Print."</strong></p>
<p style="margin-top: 8px;">You can also look for the word "Print" in the menu of whatever program you're using — often under "File" at the top left of the screen.</p>
</div>
<div class="tab-content" id="print-phone">
<p><strong>Printing from your iPhone or iPad:</strong></p>
<p>Your iPhone/iPad can print wirelessly if your printer supports <strong>AirPrint</strong> (most modern printers do). Here's how:</p>
<p style="margin-top: 8px;"><strong>(1)</strong> Open whatever you want to print (a photo, an email, a webpage, a document). <strong>(2)</strong> Look for the <strong>Share button</strong> — it's a square with an upward arrow (▷↑). It might be at the top or bottom of the screen. <strong>(3)</strong> In the menu that appears, scroll down and tap <strong>"Print."</strong> <strong>(4)</strong> Select your printer, choose the number of copies, and tap <strong>"Print."</strong></p>
<p style="margin-top: 8px; color: var(--text-light); font-style: italic;">Your phone and printer need to be on the same Wi-Fi network for this to work.</p>
</div>
</div>
<div class="tip-box">
<div class="box-label">The Ctrl+P shortcut</div>
<p>On your computer, <strong>Ctrl+P</strong> (hold Ctrl, press P) opens the Print dialog in almost every program — your browser, Word, email, PDF viewer, everything. It's one of the most universally useful keyboard shortcuts.</p>
</div>` },

    { id: "everyday-practice", title: "Think It Through", practice: true,
      html: `<p class="lead">Here are a few questions to think through. There's no score and nothing to pass. Tap whichever answer feels right — if it's not quite it, you'll get a gentle hint and can try again.</p>
<div class="quiz">
<div class="quiz-header">Check your understanding</div>
<h3>You arrive at a new website and need to find where to sign in. Where do you look?</h3>
<div class="quiz-options">
<button class="quiz-option" data-correct="true">The top-right corner — that's where "Sign In" almost always is</button>
<button class="quiz-option" data-correct="false">The very bottom of the page</button>
<button class="quiz-option" data-correct="false">I'd have to search through the entire page</button>
</div>
<div class="quiz-feedback correct-fb">You've got it! "Sign In" or "Log In" is almost always in the top-right corner of any website. You're really putting it all together, Celine!</div>
<div class="quiz-feedback incorrect-fb">The sign-in link is almost always in the top-right corner of the website. It's part of the "top zone" pattern — navigation, search, and account controls are at the top!</div>
</div>` }
  ]
});
