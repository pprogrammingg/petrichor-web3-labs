
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
[x] poll for new balance from wallet every 5 sec using interval, setState and setEffect hooks used by Member

[] adapt to Gumball machine example [Gumball Example](https://github.com/radixdlt/gumball-club/blob/main/dapp/src/app/hooks/useAccounts.ts)
   [] radix/transaction-manifests.ts (pending testing)
   [] transformers/addTokens.ts (pending testing)
   [] hooks and helpers (pending testing)
   [] header and alerts
   [] footer
   
[] Move the whole App.tsx
[] make sure rdt context carries balances and is available to all modules
[] UI: get NFT internal data for all NFTs available
[] handle network errors gracefully

=== Notification Popup modal 
[] create a custom popup modal that pops on top left of the page (temporarily covering nav bar, it takes a "message string no longer than 20 characters (otherwise will fail to build the modal). Popup has an X to exit
[] the pop has a great style to capture user attention, has smooth transition (appearance and exit) and exits after 3 second
[] additional popups appearing, will push the oldest popup to the bottom
[] At one time not more than 5 popups can be displayed

=== Membership page
[x] in App.tsx will have a new Member page
[x] When user clicks member they will be taken to member page (for now empty)
[] Member page will have a Card Section if membership NFT badge present (if no membership badge, then mint card button with message "You are not a member yet! Mint member ship card easily by pressing below!")
[] Member page will have a reward balance section, big size cool font
[] Member page will have a section called "Transaction History" section

    - if member_card_details are not null, display a simple but slick card object that looks like a bank card, it should be very slick as if implying the card is a shiny sheet of metal and has some sort of reflection coming out of it, the color of the card should be a red orange combination similar to parsimmon, the card should reflect some sort of ambiance light. The card in the top left cornet should have in a bigger awesome looking font have words: 
    "MemberShip Card" , Then somewhere below it say "Member Since: put date"

[] create Transaction_Hisotry and Transaction component: 
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

[] 

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

=== Tasks

[ ] Task component: simple task card (10 words or less), width to height has golden ratio, height beigger than width at least twice, simple task has a complete button, clicking it console.logs "reward amount" associated with the task (more on this later) and after complete the button changes from Complete to Completed (cannot be clicked). The colors are as such:
task card main background white, text black, complete button round corners with medium blue outline, completed button a nice grey background and white completed.

[] change task props above,show a sample Task on the App.tsx test. The text input to this task is "Just say hi!". 

[] DLT: completion of task should require member NFT badge to be present.
[] UI: If no membership badge is present, "complete" button is disable. Hovering over will say "You do not have a membership card yet to complete task. Please go to Member page and mint a card" 
[] DLT: compeletion of a task will update NFT data "transaction_history_key" and for value will update a transaction history `<String, String>` ordered map. Capacity 10 records, if more than 10 records remove the oldest record and add the newest. 

[] UI: wait for task completion to finish on ledger. Then display a nice popup module

[] in Task css you posted, what do the following do:

```css
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
```



[] Now , create a Vote component whose defining properties is a JSON object as such:
```
{
    poll_id: 123,
    description:2023-board-elections,
    select_type: multi | single,
    choices: [ // array of string, this will be used to render choice options
        
    ]
}

```
this Vote component will be embeded inside Task components usually (remeber the CSS that went to define task component).
Here make sure description is displayed as medium blue  and each item under choices is black. depending on whether select_type is multi or single display it option boxes or single select radio buttons. 


[] In the task component previously made, allow Task properties to be structured like this :

{
   task_details: # values can be  String, or Vote component for now
}


if Task details matches String then just render simple String as before.
if VOTE is chosen, then  render the Vote object inside task displaying its String description and choice options (discern when rendering between multi-choice or single choice) depending on Vote select_type field. Complete button for such task will change text to "Vote" and completed will be "Thanks for Voting!". 
Finally, poll_id and selected option from Vote props should appear as an extra field on the "Vote" button, these will be stored in some sort of field so that in future complete requests will be send to other systems as useful data


[] In App.tsx create two additional Tasks containg a Vote component as properties first one has props:

{
    poll_id: 1,
    description: "How much budget should be allocated as ISACA Web3 gas fees?" ,
    select_type: multi,
    choices: [ 
        "1000 CAD", "2000 CAD", 
    ]
}

and second one as:

{
    poll_id: 2,
    description: "What should we support next in ISACA Web3 journey?" ,
    select_type: single,
    choices: [ 
        "Immutable Storage of Training Degrees", "Redeem rewards for swag", "Rewards LeaderBoard", 
    ]
}


[] TaskList: now given task component you coded above, have a TaskList component where we can show case bunch of Task components. The input to this TaskList component is a taskList object (containing Task components). TaskList component will show every item of the list in a grid and overflows will go to the next row. There will be a gap (or gutter) distance between Task items in this grid (choose a golden ratio amount that is reasonable). Make sure the page will be responsive and resizing the page cause overflow to the items to the next row and fill up the remaining space.


[] in App.tsx take he simple and 2 vote tasks props and use them to create TaskList component. Display this taskList component instead of indiivual Tasks 

[] Now we are only going to render TaskList from Tasks page, here a route will be created on App.tsx where clicking the tasks page will go to that Task page and load TaskList. For now use sample Task props previuosly to populate this new task page.


===Member page enhancements
[] Create Member_Progress component, input to this is 
{member_level: NUMBER}
based on member_level we show a progress bar as such:

the prograss bar is a card with a golden ration width to height  The length is about 3/10th of the screens length and height is like not that big maybe like a small paragraph length.

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
