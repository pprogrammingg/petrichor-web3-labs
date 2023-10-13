=== Today
[x] let card accept children and button to card
[x] disable button based on has member card flag
[] useEffect so when reward is obtained, "complete" button changes to green button with checkmark. 
[] handle if reward was not obtained, in this case account should not have any effect
[] make card look disabled if no member card

[] Error header and notification



=== Main App Style

[x] App by default across all pages should have 
  a) scrolling only vertically if there is content overflow (horizontal overflow should be handled via flex/grid directives)
  b) be responsive
  c) have main content (except Navigation component) have side margins (left and right, all sizes golden ratio) such that width of main content is of golden ratio to the side margines (remember to make it responsive and beautiful)
  d) Paste some "Lorem Ipsum Text..." so I can see how main content looks likle
  e) Not sure whether you have to modify Navigation.module.css or App.css, but the Navigation bar make sure please that is on top right corent of the screen all the time

=== Navigation Bar
[x] a Navigation component will contain Route links in its body and take no props. add sample routes and placeholders for now :
 Home
 ErrorPage 
 Member -> member page route (for now does not have to actually route)
 Tasks -> tasks page route (for now does not have to actually route)
 Make necessary changes in App.tsx and add Navigation bar

[x] Navigation: Please style it such that no hyper links are shown (no underlining), links are black, in a reasonable size, hovering will make them 
 tealish blushish (you choose), align the navigation bar to be on the right side of the screen on the top, links have flexible spacing between them and the whole thing is responsive

=== Wallet
[x] Wallet connect button on NavBar
[x] ability to connect to Persona and at least 1 account
[x] display console log the balance of user in that account and NFTs available
[x] Populate with NFT data
[x] Understand wallet data (means persona, identities, proofs, accounts) changes vs balance changes (FT and NFT detaisl form gateway)
[x] Understand how examples for how observable and gateway APIs are used

[] adapt to Gumball machine example [Gumball Example](https://github.com/radixdlt/gumball-club/blob/main/
dapp/src/app/hooks/useAccounts.ts)

   [x] radix/transaction-manifests.ts (pending testing)
   [x] transformers/addTokens.ts (pending testing)
   [] hooks and helpers (pending testing)
   [x] different component states based on button and use Account
      [x] useButton and useAccount should be de-coupled when member page rendered without any change to connect button. Means we should get 1 component mounted render + 2 re-renders for each of useAccounts setState operations. Button status gets set on the first component mount as useEffect inside has empty array dependency.
      [x] Change account now, the dAppToolkit should cause useEffect inside useAccount to trigger, causing additional 2 renders and subsequently token data change.
   [] header and alerts infra
    [] test update share data using the connect button and reject to see alert

   [] footer
   [] Make global fonts similar to Gumball
   
=== Membership page
[x] in App.tsx will have a new Member page
[x] When user clicks member they will be taken to member page (for now empty)

[x] if not connected to persona and account - ask to connect first and select exactly one account

[x] if connected and 1 account loaded
    [x] if accounts has membership card show member profile
    [x] if no membership card, show mint card button

[x] user clicks "Mint Member Card", shows loading sign (waiting for transaction)
 [] Happy path tests
    [x] call DLT mint membershipcard
    [] try with sendTransaction({manifest, message}) 
    [x] succcess received (member card minted), will show member profile section with member level and NFT data

[x] Membership card a slick card object that looks like a bank card, it should be very slick as if implying the card is a shiny sheet of metal and has some sort of reflection coming out of it, the color of the card should be a red orange combination similar to parsimmon. 


[] Styling: memberprofile should be contained within a grid (divid available space 2 rowsx3 columns grid)
    [] if has memberhsip card, first cell show card (centered), cell to right occupies till remaining width and contains member level and member join date info (in a paragraph)
    [] if not have membercard, display mint centered in row0cell1 (middle top)

[] Styling: Member card, glass card tutorial but with persimmon (orange red) hue, plus embossed Persona, account name,
"COMPANY NAME" LOGO (shiny/holographic if possible)



=== Tasks (simplify)

[ ] Task component: simple task card that accepts children react node and description, width to height has golden ratio, height beigger than width at least twice, simple task has a complete button, clicking it console.logs "reward amount" associated with the task (more on this later) and after complete the button changes from Complete to Completed (cannot be clicked). The colors are as such:
task card main background white, text black, complete button round corners with medium blue outline, completed button a nice grey background and white completed.

[] UI: If no membership badge is present, "complete" button is disabled / task will look dimmer. Put a friendly message up there for user to obtain member badge. Please go to Member page and mint a card".


[] TaskList: now given task component you coded above, have a TaskList component where we can show case bunch of Task components. The input to this TaskList component is a taskList object (containing Task components). TaskList component will show every item of the list in a grid and overflows will go to the next row. There will be a gap (or gutter) distance between Task items in this grid (choose a golden ratio amount that is reasonable). Make sure the page will be responsive and resizing the page cause overflow to the items to the next row and fill up the remaining space.

=== Error and Notification handling
[] create a custom popup modal that pops on top left of the page (temporarily covering nav bar, it takes a "message string no longer than 20 characters (otherwise will fail to build the modal). Popup has an X to exit
[] the pop has a great style to capture user attention, has smooth transition (appearance and exit) and exits after 3 second
[] additional popups appearing, will push the oldest popup to the bottom
[] At one time not more than 5 popups can be displayed
[] Wallet errors test
[] network error tests

== Linting and prettifying
[] add linter and prettifiers in dev dependencies

=== Transaction History
[] can blockchian explorer and transaction memo be used?

[] create Transaction_Hisotry and Transaction component (update on member NFT data - date, reason)
Transaction_Hisotry takes an array of Transaction component as props.
Each Transation item in TrasnactionList input will be rendered on a separate row with each Transaction Field as its own column.


Transaction has the following props 
{
    transaction_date_time: String
    transaction_description: String
    rewards_earned: Number
    rewards_redeemed: Number
    transaction_status: # an Enum of TX_STATUS:COMPLETED, FAILED
}

[] Make the TransactionList readable by slighly highliting everyother row to some nice complementary color combination. As usually, keep the page responsive please. In case of shrinking pages transfer each overflow Transaction column to the next row.
Always maintain a reasonable gap between each row in TransactionList


[] Bottom half of the page will render TransactionList. For now provide the following sample TransactionList data to the TransactionList component and render it:

```javascript
[  
    {
        transaction_date_time: "2023-JUL-12 11:01:23"
        transaction_description:  "Task: Say Hi!",
        rewards_earned: 10,
        rewards_redeemed: 0,
        transaction_status: TX_STATUS::COMPLETED
    },
    {
        transaction_date_time: "2022-MAY-29 08:21:03"
        transaction_description:  "Poll Name: 2022 Board Elections",
        rewards_earned: 20,
        rewards_redeemed: 0,
        transaction_status: TX_STATUS::COMPLETED
    },
    {
        transaction_date_time: "2022-MAY-29 08:20:12"
        transaction_description:  "Poll Name: 2022 Board Elections",
        rewards_earned: 20,
        rewards_redeemed: 0,
        transaction_status: TX_STATUS::REJECTED
    },
    {
        transaction_date_time: "2021-DEC-01 14:00:59"
        transaction_description:  "Event: Annual ISACA Convention",
        rewards_earned: 50,
        rewards_redeemed: 0,
        transaction_status: TX_STATUS::COMPLETED
    }
]
```

===Member page enhancements
[] tilt effect on membercard using CSS
[] tilts effect on membercard, realistic lightning using three.js

[] the prograss bar is a card with a golden ration width to height  The length is about 3/10th of the screens length and height is like not that big maybe like a small paragraph length.

On top will say : "Member Progress"
The progress card background is creamy yellow
the progress line starts with some left margin from the card and is a thin baby blue line. 
there are 5 circles on this line representing levels 1, 2, 3, 4 and 5. This cicles are darker baby blue in color, the number of level 1 , 2 etc appears beneath the circle in black.

the progress of the user is render via filling up the progress line based on level.
So user is level 2, from left to right progress line fill with bluish-purplish color until the circle representing level 2 (colour the circle as well) the rest of the bar will remain the previous colours.

[] Given a member with level 2 progress create and render a Progress componment to the right of the Member's Person name (more towards right side of the screen but same level as persona name)

[] Card Animation: in the section above member_details were displayed as a shiny slick card.
Now when user hovers over this card, it should feel like member is slightly moving the side that the mouse is one in to the page. i.e. if mouse is near top left corner, the top left corner goes inwards towards the page (z-axis) while other corners specially bottom right one come outward towards user screen, the animation should be smooth and movement could be slight but not unsubtle. Light reflections should change upon such movements to enhance the visual effect. When user hovers mouse out of the card, it smoothly goes back to being normal.

=== ISACA WEB3 Portal 
[] look at their cuurent logo and find a kickass Web3 hyper Logo, hovering overit causes rotation
[] Find a kickass typeface for ISACA , Apply the effect where hovering over it will cause random number/letter changes

=== add footer Petrichor Web3 Labs (copy right)
=== Legacy Member Upgrades

=== LeaderBoard based on Member personas

== Wallet Data Manual Tests
[] Complete Task and seeing updated balance change
[] changing the account logged and thus displaying different balances
[] log out from all accounts, member and task need to show "Login to at least one account"

== Radix Wallet connect button styles
[x] on button way to set cursor, margin and padding
[x] Proper way to config --> see https://github.com/radixdlt/radix-dapp-toolkit/tree/39cd37c345fc1ce1c7d4459b4e2624f93ff8ad91
[x] Rounded corners

== Warnings and Linting
[] Warning: reactive-element.ts:76 Lit is in dev mode. Not recommended for production! See https://lit.dev/msg/dev-mode for more information.
issueWarning @ reactive-element.ts:76
(anonymous) @ reactive-element.ts:81

[] Warning: css-tag.ts:80 @import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418.


=== Coolify with Animation and oooomph graphics
[] Hyper channel - Effect of mouseover logo
[] Titling cards
