/* Start Here — the big picture (new in v2) */
GUIDE.addModule({
  id: "start-here",
  title: "Start Here: The Big Picture",
  intro: `Before learning any buttons, it helps to have a map in your head of how everything fits together: your computer, the apps on it, the internet, and websites like AOL Mail.`,
  lessons: [

    { id: "s-where", title: "Where Things Live: Your Computer, Apps, Websites, and Files",
      html: `
<p>Lots of things feel confusing on a computer because it isn't clear <strong>where</strong> anything actually is. Is AOL Mail <em>on</em> my computer? Where did that file go? Why can I see my email on my phone too?</p>
<p>Here's one picture that answers all of those questions.</p>

<div class="analogy">
  <div class="box-label">Think of it this way: your house and the town</div>
  <p><strong>Your computer is your house.</strong> Everything stored <em>inside</em> it belongs to you and stays put: your photos, documents, and downloaded files. These are like papers in your filing cabinet.</p>
  <p><strong>Windows is the layout of the house</strong> — the hallways and rooms. It's what you see when you turn the computer on: the desktop, the Start button, the taskbar at the bottom.</p>
  <p><strong>Apps are the rooms and appliances</strong> inside the house. File Explorer is the filing cabinet. Chrome and Edge are <strong>windows you look out of</strong> to see the town.</p>
  <p><strong>Websites are buildings across town.</strong> AOL Mail, Wells Fargo, LADWP, Amazon — none of them are inside your house. They live on those companies' own computers. When you open Chrome and go to AOL Mail, you're <em>looking out your window at the AOL building</em>.</p>
</div>

<div class="diagram">
  <div class="diagram-title">Inside your house vs. out in town</div>
  <div class="diagram-row">
    <div class="diagram-box d-coral">&#127968; YOUR COMPUTER<br><span style="font-weight:400">Windows, File Explorer,<br>your photos &amp; downloads</span></div>
    <div class="diagram-arrow">&#8594;</div>
    <div class="diagram-box d-blue">&#129695; CHROME or EDGE<br><span style="font-weight:400">the window you<br>look out of</span></div>
    <div class="diagram-arrow">&#8594;</div>
    <div class="diagram-box d-purple">&#127970; WEBSITES<br><span style="font-weight:400">AOL Mail, Wells Fargo,<br>Amazon, LADWP</span></div>
  </div>
</div>

<h4>Why this matters: your AOL email</h4>
<p>Your emails are <strong>not stored on your computer</strong>. They're kept safely in the AOL building across town. That's why:</p>
<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-content">You can read the <strong>same emails on your iPhone</strong> — it's just a different window looking at the same building.</div></div>
  <div class="step"><div class="step-num">2</div><div class="step-content">If your computer broke tomorrow, <strong>your emails would be fine.</strong> You'd sign in from any other computer or phone and they'd all be there.</div></div>
  <div class="step"><div class="step-num">3</div><div class="step-content">If the internet is down, AOL Mail won't load — <strong>the road to town is closed</strong> — even though your computer itself works fine.</div></div>
</div>

<h4>And files? Those come home with you.</h4>
<p>When you <strong>download</strong> something — a boarding pass, a bill, a photo someone emailed — you're bringing a <strong>copy home</strong> from across town and putting it in your filing cabinet. It goes into a folder on your computer called <strong>Downloads</strong>. Now it's in your house, and you can open it even without the internet.</p>

<div class="key-concept">
  <div class="box-label">The question to ask yourself</div>
  <p>Whenever you're confused, ask: <strong>"Am I inside my house, or am I looking out the window at a building in town?"</strong></p>
  <p>If there's an <strong>address bar</strong> at the top (the long box with something like <em>mail.aol.com</em> in it), you're looking out the window at a website. If not, you're inside your house, using something on your computer.</p>
</div>

<table class="acct-table">
  <tr><th>Thing</th><th>Where it lives</th></tr>
  <tr><td>AOL Mail</td><td>Across town (a website) &mdash; you visit it through Chrome or Edge</td></tr>
  <tr><td>Your Wells Fargo account</td><td>Across town (a website or a phone app)</td></tr>
  <tr><td>A boarding pass you downloaded</td><td>In your house &mdash; the Downloads folder</td></tr>
  <tr><td>Photos you took on your iPhone</td><td>Inside your phone (and maybe copied to Apple's iCloud)</td></tr>
  <tr><td>Chrome, Edge, File Explorer</td><td>In your house &mdash; apps on your computer</td></tr>
</table>

<div class="quiz">
  <div class="quiz-header">Think it through</div>
  <h3>Your computer is at the repair shop for a week. Can you still read your AOL email?</h3>
  <div class="quiz-options">
    <button class="quiz-option" data-correct="true">Yes &mdash; on my iPhone, or any other computer. My email lives at AOL, not on my computer.</button>
    <button class="quiz-option" data-correct="false">No &mdash; my email is stored on my computer, so I have to wait.</button>
  </div>
  <div class="quiz-feedback correct-fb">Exactly right! Your email lives in the "AOL building across town." Any window &mdash; your iPhone, a friend's computer, a library computer &mdash; can look at it once you sign in.</div>
  <div class="quiz-feedback incorrect-fb">Your email actually lives at AOL, across town &mdash; not on your computer. So you can read it from your iPhone, or any computer, by signing in to AOL Mail.</div>
</div>
` },

    { id: "s-internet", title: "The Internet and Wi-Fi: The Road Across Town",
      html: `
<p>If websites are buildings across town, then the <strong>internet is the road</strong> that gets you there. And <strong>Wi-Fi is your driveway</strong> &mdash; the invisible connection between your devices and the road.</p>

<div class="analogy">
  <div class="box-label">Think of it this way</div>
  <p>Spectrum (your internet company) built a road to your house. The <strong>little box with blinking lights</strong> that Spectrum installed is where the road meets your driveway. That box sends out Wi-Fi through the air, so your computer and iPhone can use the road without any cables.</p>
</div>

<h4>When the road is closed</h4>
<p>If the Wi-Fi goes out, everything <em>inside your house</em> still works: your computer turns on, you can open files you've already downloaded, you can look at photos on your phone. But you can't reach any <strong>websites</strong> &mdash; AOL Mail, Wells Fargo, Google &mdash; because the road is blocked.</p>
<p>This is why your computer can seem "fine" while AOL Mail "won't work." It's usually not your computer &mdash; it's the road.</p>

<h4>How to tell if you're connected</h4>
<div class="steps">
  <div class="step"><div class="step-num">&#128187;</div><div class="step-content"><strong>On your computer:</strong> look at the bottom-right corner of the screen, near the clock. A <strong>fan-shaped symbol</strong> (curved lines like a slice of pie) means you're connected to Wi-Fi. A globe with a little "no" sign, or a red X, means you're not.</div></div>
  <div class="step"><div class="step-num">&#128241;</div><div class="step-content"><strong>On your iPhone:</strong> look at the very top-right corner. The same fan-shaped symbol means Wi-Fi is on. If you see <strong>5G</strong> or <strong>LTE</strong> instead, your phone is using its cell-phone signal &mdash; a second road that the phone company provides. That works too, just away from home.</div></div>
</div>

<div class="tip-box">
  <div class="box-label">The fix that works most of the time</div>
  <p>If nothing on the internet works on <em>any</em> of your devices: find the Spectrum box, <strong>unplug its power cord, count to 30, and plug it back in.</strong> Then wait about <strong>5 minutes</strong> for the lights to settle. This "restarts" the road and fixes most problems. If it still doesn't work, Spectrum's phone number is on your bill.</p>
</div>

<div class="key-concept">
  <div class="box-label">Remember</div>
  <p><strong>One device not working</strong> &rarr; probably that device (try restarting it).<br><strong>Every device not working</strong> &rarr; probably the road (restart the Spectrum box).</p>
</div>

<div class="quiz">
  <div class="quiz-header">Think it through</div>
  <h3>AOL Mail won't load on your computer. You pick up your iPhone, turn off Wi-Fi, and websites work fine using 5G. What's most likely wrong?</h3>
  <div class="quiz-options">
    <button class="quiz-option" data-correct="false">My AOL account was deleted</button>
    <button class="quiz-option" data-correct="true">The home Wi-Fi (the Spectrum box) is having trouble</button>
    <button class="quiz-option" data-correct="false">My computer is broken</button>
  </div>
  <div class="quiz-feedback correct-fb">Great detective work! The phone works on its own cell signal but not on home Wi-Fi, so the home "road" is the problem. Time to unplug the Spectrum box for 30 seconds.</div>
  <div class="quiz-feedback incorrect-fb">The clue is that your phone works on 5G (its own road) but things fail on home Wi-Fi. That points to the Spectrum box. Unplug it, count to 30, plug it back in.</div>
</div>
` },

    { id: "s-accounts", title: "Accounts, Signing In, and Those Text-Message Codes",
      html: `
<p>Almost every building in town &mdash; your bank, AOL, LADWP, Amazon, your doctor &mdash; asks you to <strong>sign in</strong> before you can see your things. Here's what that's all about.</p>

<div class="analogy">
  <div class="box-label">Think of it this way</div>
  <p>An <strong>account</strong> is like a <strong>membership card</strong> at each building. Each one has two parts:</p>
  <p>&bull; Your <strong>username</strong> &mdash; who you are (very often, this is just your email address).<br>&bull; Your <strong>password</strong> &mdash; the secret that proves it's really you.</p>
  <p>Every building gives out its <em>own</em> card. Your Wells Fargo password doesn't work at Amazon, the same way your library card doesn't get you into the gym.</p>
</div>

<h4>"We sent you a code" &mdash; what that means</h4>
<p>Many websites now add one more step: after you type your password, they <strong>text a short number to your iPhone</strong> (or email it to you), like <strong>482913</strong>. You type that number into the website to finish signing in.</p>
<p>This is called a <strong>verification code</strong> (sometimes "two-step verification" or "one-time code"). It's like the building calling your house to double-check it's really you at the front desk. A thief who stole your password still can't get in, because they don't have your phone.</p>

<div class="steps">
  <div class="step"><div class="step-num">1</div><div class="step-content">Type your username and password, then click <strong>Sign In</strong>.</div></div>
  <div class="step"><div class="step-num">2</div><div class="step-content">The website shows a new box that says something like <strong>"Enter the code we sent to (&bull;&bull;&bull;) &bull;&bull;&bull;-&bull;&bull;12"</strong>.</div></div>
  <div class="step"><div class="step-num">3</div><div class="step-content">Pick up your iPhone. A text arrives within a minute. (Often, a little box pops up at the top of the phone showing the code.)</div></div>
  <div class="step"><div class="step-num">4</div><div class="step-content">Type the number into the box on the website and click <strong>Continue</strong> or <strong>Verify</strong>. Codes only work for a few minutes &mdash; if it expired, click <strong>"Send a new code."</strong></div></div>
</div>

<div class="warning-box">
  <div class="box-label">The most important rule in this whole guide</div>
  <p><strong>Never read a code out loud to anyone who calls, texts, or emails you</strong> &mdash; even if they say they're from your bank, Apple, Medicare, or a family member. A code is only for <em>you</em> to type into a website <em>you</em> opened yourself.</p>
  <p>If someone asks for "the code we just sent you," it's a scam. Hang up.</p>
  <p style="margin-top:8px"><em>The one exception:</em> the screen-sharing code you read to Ari, Anijke, or Asher when <strong>you</strong> called <strong>them</strong> for computer help. That's explained in the "How to Ask for Help" lesson.</p>
</div>

<div class="spot" data-hint="Look for the box right under the words about the code.">
  <div class="spot-head">Can you spot it?</div>
  <div class="spot-q">You just signed in and got a text with a code. Where do you type it?</div>
  <div class="spot-screen">
    <div class="s-bar"><span class="s-addr">&#128274; www.examplebank.com/verify</span></div>
    <div class="s-head" style="background:#0B4F6C;color:#fff"><span class="s-logo">Example Bank</span><button class="spot-decoy" data-say="That's a link to the bank's help pages.">Help</button></div>
    <div class="s-body">
      <p style="margin-bottom:8px"><strong>Verify it's you</strong></p>
      <p style="margin-bottom:10px">We sent a 6-digit code to (&bull;&bull;&bull;) &bull;&bull;&bull;-&bull;&bull;12.</p>
      <button class="spot-target" style="width:100%;text-align:left;border:2px solid #999;background:#fff;padding:12px">Enter code</button>
      <p style="margin-top:12px"><button class="spot-decoy" data-say="That would send you a fresh code &mdash; useful if the first one expired, but not where you type it.">Send a new code</button></p>
    </div>
  </div>
  <div class="spot-msg yes">You found it! That white box is a <strong>text field</strong> &mdash; click inside it, type the 6 numbers, then click Continue.</div>
  <div class="spot-msg hint"></div>
  <div class="spot-actions"><button class="bar-btn" data-action="spot-show">Show me</button></div>
</div>

<h4>Government websites use a "sign-in helper"</h4>
<p>Social Security and Medicare don't make their own membership cards anymore. Instead they ask you to sign in through a separate service called <strong>Login.gov</strong> or <strong>ID.me</strong> (Medicare also accepts one called <strong>CLEAR</strong>). Think of it like showing your driver's license at the front desk of a government building. You set it up once, and then the same Login.gov sign-in works at several government websites. The Social Security lesson walks through it.</p>

<h4>"Sign in with Google" or "Sign in with Apple" buttons</h4>
<p>Some websites offer these buttons as a shortcut. They let you use an account you already have instead of making a new one. It's fine to ignore them and use your email and password the normal way &mdash; that's simpler to keep track of in your notebook.</p>
` }

  ]
});
