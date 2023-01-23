"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const cg_1 = require("react-icons/cg");
const framer_motion_1 = require("framer-motion");
const Text_1 = __importDefault(require("../Text/Text"));
const messages = [
    "Order a pizza. Its on us...",
    "Reticulating splines...",
    "Generating witty dialog...",
    "Swapping time and space...",
    "Spinning violently around the y-axis...",
    "Tokenizing real life...",
    "Bending the spoon...",
    "Filtering morale...",
    "Don't think of purple hippos...",
    "The bits are breeding...",
    "Would you prefer chicken, steak, or tofu for dinner...?",
    "Catching the bits that were trying to escape...",
    "Checking the gravitational constant in your locale...",
    "Go ahead -- hold your breath!",
    "Hum something loud while others stare...",
    "The server is powered by a lemon and two electrodes...",
    "Please wait. Taking over the world...",
    "We're testing your patience...",
    "As if you had any other choice...",
    "Follow the white rabbit...",
    "Why don't you order a sandwich...?",
    "Moving satellites into the position...",
    "The bits are flowing slowly today...",
    "Dig on the 'X' for buried treasure... ARRR!",
    "It's still faster than you could draw it...",
    "The last time I tried this the monkey didn't survive. Let's hope it works better this time...",
    "My other loading screen is much faster...",
    "Reconfoobling energymotron...",
    "(Insert a coin)",
    "Have you lost weight...?",
    "Just count to 10...",
    "It's not you. It's us...",
    "Counting backwards from Infinity...",
    "Don't panic...",
    "Embiggening Prototypes...",
    "Do not run! We are your friends...",
    "Do you come here often...?",
    "Creating time-loop inversion field...",
    "Spinning the wheel of fortune...",
    "Loading the enchanted bunny...",
    "Computing chance of success...",
    "Can you check if you have a change for a 100...?",
    "I feel like im supposed to be loading something...",
    "Should have used a compiled language...",
    "Wait, is this Windows...?",
    "Adjusting flux capacitor...",
    "Don't break your screen yet...",
    "I swear it's almost done...",
    "Let's take a mindfulness minute...",
    "Unicorns are at the end of this road, I promise...",
    "Listening for the sound of one hand clapping...",
    "Keeping all the 1's and removing all the 0's...",
    "Putting the icing on the cake. The cake is not a lie...",
    "Cleaning off the cobwebs...",
    "Making sure all the i's have dots...",
    "We need more dilithium crystals...",
    "Where did all the internets go...?",
    "Connecting Neurotoxin Storage Tank...",
    "Granting wishes...",
    "Time flies when you’re having fun...",
    "Get some coffee and come back in ten minutes...",
    "Spinning the hamster...",
    "Stay awhile and listen...",
    "Be careful not to step in the git-gui...",
    "Convincing AI not to turn evil...",
    "Your left thumb points to the right and your right thumb points to the left...",
    "How did you get here...?",
    "Wait, do you smell something burning...?",
    "Computing the secret to life, the universe, and everything...",
    "When nothing is going right, go left!!...",
    "Why are they called apartments if they are all stuck together...?",
    "Constructing additional pylons...",
    "Roping some seaturtles...",
    "Locating Jebediah Kerman...",
    "We are not liable for any broken screens as a result of waiting...",
    "Hello IT, have you tried turning it off and on again...?",
    "If you type Google into Google you can break the internet...",
    "Well, this is embarrassing...",
    "What is the airspeed velocity of an unladen swallow...?",
    "The Elders of the Internet would never stand for it...",
    "Dividing by zero...",
    "If I’m not back in five minutes, just wait longer...",
    "Cracking military-grade encryption...",
    "Proving P=NP...",
    "Entangling superstrings...",
    "Searching for plot device...",
    "Trying to sort in O(n)...",
    "Laughing at your pictures-i mean, loading...",
    "Sending data to NS-i mean, our servers...",
    "Looking for sense of humour, please hold on...",
    "Please wait while the intern refills his coffee...",
    "A different error message? Finally, some progress...!",
    "Please hold on as we reheat our coffee...",
    "Kindly hold on as we convert this bug to a feature...",
    "Kindly hold on as our intern quits vim...",
    "Winter is coming...",
    "Distracted by cat gifs...",
    "Finding someone to hold my beer...",
    "BRB, working on my side project...",
    "@todo Insert witty loading message...",
    "Let's hope it's worth the wait...",
    "Aw, snap! Not..",
    "Ordering 1s and 0s...",
    "Whatever you do, don't look behind you...",
    "Please wait... Consulting the manual...",
    "Loading funny message...",
    "Waiting Daenerys say all her titles...",
    "Feel free to spin in your chair...",
    "Go ahead, hold your breath and do an ironman plank till loading complete...",
    "Bored of slow loading spinner, buy more RAM!...",
    "Help, I'm trapped in a loader!...",
    "Please wait, while we purge the Decepticons for you. Yes, You can thanks us later...",
    "Mining some bitcoins...",
    "Downloading more RAM...",
    "Alt-F4 speeds things up...",
    "Initializing the initializer...",
    "When was the last time you dusted around here...?",
    "Optimizing the optimizer...",
    "Last call for the data bus! All aboard!...",
    "Never let a computer know you're in a hurry...",
    "A computer will do what you tell it to do, but that may be much different from what you had in mind....",
    "Some things man was never meant to know. For everything else, there's Google...",
    "Shovelling coal into the server...",
    "Pushing pixels...",
    "How about this weather, eh...?",
    "Building a wall...",
    "Everything in this universe is either a potato or not a potato...",
    "The severity of your issue is always lower than you expected...",
    "Updating Updater...",
    "Downloading Downloader...",
    "Debugging Debugger...",
    "Reading Terms and Conditions for you...",
    "Digested cookies being baked again...",
    "Live long and prosper...",
    "Definitely not a virus...",
    "You may call me Steve...",
    "You seem like a nice person...",
    "Coffee at my place, tommorow at 10A.M. - don't be late!",
    "Work, work...",
    "Patience! This is difficult, you know...",
    "Discovering new ways of making you wait...",
    "Still faster than Windows update...",
    "Grabbing extra minions...",
    "Doing the heavy lifting...",
    "We're working very Hard .... Really",
    "You are number 2843684714 in the queue...",
    "Our premium plan is faster...",
    "Feeding unicorns...",
    "Rupturing the subspace barrier...",
    "Creating an anti-time reaction...",
    "Converging tachyon pulses...",
    "Bypassing control of the matter-antimatter integrator...",
    "Adjusting the dilithium crystal converter assembly...",
    "Reversing the shield polarity...",
    "Disrupting warp fields with an inverse graviton burst...",
    "Up, Up, Down, Down, Left, Right, Left, Right, B, A...",
    "Do you like my loading animation? I made it myself...",
    "Whoah, look at it go!...",
    "One mississippi, two mississippi...",
    "Don't panic... AHHHHH!",
    "Baking ice cream...",
    "Did you call your mom today?...",
    "Go on. Take a break. I'll wait...",
];
function WittySpinner(props) {
    const { isLoading, size = 20 } = props;
    const [message, setMessage] = (0, react_1.useState)("Loading...");
    (0, react_1.useEffect)(() => {
        setMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, [isLoading]);
    return (react_1.default.createElement(framer_motion_1.AnimatePresence, null, isLoading && (react_1.default.createElement(framer_motion_1.motion.div, { className: "text-center space-y-2", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 } },
        react_1.default.createElement(Text_1.default, { size: "sm" }, message),
        react_1.default.createElement(cg_1.CgSpinner, { className: "animate-spin inline", size: size })))));
}
exports.default = WittySpinner;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2l0dHlTcGlubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbXBvbmVudHMvV2l0dHlTcGlubmVyL1dpdHR5U3Bpbm5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUFtRDtBQUNuRCx1Q0FBMkM7QUFDM0MsaURBQXdEO0FBQ3hELHdEQUFnQztBQUVoQyxNQUFNLFFBQVEsR0FBRztJQUNmLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qix5Q0FBeUM7SUFDekMseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUNBQWlDO0lBQ2pDLDBCQUEwQjtJQUMxQix5REFBeUQ7SUFDekQsaURBQWlEO0lBQ2pELHVEQUF1RDtJQUN2RCwrQkFBK0I7SUFDL0IsMENBQTBDO0lBQzFDLHdEQUF3RDtJQUN4RCx1Q0FBdUM7SUFDdkMsZ0NBQWdDO0lBQ2hDLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsb0NBQW9DO0lBQ3BDLHdDQUF3QztJQUN4QyxzQ0FBc0M7SUFDdEMsNkNBQTZDO0lBQzdDLDZDQUE2QztJQUM3QywrRkFBK0Y7SUFDL0YsMkNBQTJDO0lBQzNDLCtCQUErQjtJQUMvQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQiwwQkFBMEI7SUFDMUIscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1Qix1Q0FBdUM7SUFDdkMsa0NBQWtDO0lBQ2xDLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsa0RBQWtEO0lBQ2xELG9EQUFvRDtJQUNwRCx5Q0FBeUM7SUFDekMsMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxvREFBb0Q7SUFDcEQsaURB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QUFDO0lBRWhCLE9BQU8sQ0FDTCw4QkFBQywrQkFBZSxRQUNiLFNBQVMsSUFBSSxDQUNaLDhCQUFDLHNCQUFNLENBQUMsR0FBRyxJQUNULFNBQVMsRUFBQyx1QkFBdUIsRUFDakMsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxFQUN2QixPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQ3ZCLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsRUFDcEIsVUFBVSxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtRQUU3Qiw4QkFBQyxjQUFJLElBQUMsSUFBSSxFQUFDLElBQUksSUFBRSxPQUFPLENBQVE7UUFDaEMsOEJBQUMsY0FBUyxJQUFDLFNBQVMsRUFBQyxxQkFBcUIsRUFBQyxJQUFJLEVBQUUsSUFBSSxHQUFJLENBQzlDLENBQ2QsQ0FDZSxDQUNuQixDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLFlBQVksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDZ1NwaW5uZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvY2dcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuLi9UZXh0L1RleHRcIjtcblxuY29uc3QgbWVzc2FnZXMgPSBbXG4gIFwiT3JkZXIgYSBwaXp6YS4gSXRzIG9uIHVzLi4uXCIsXG4gIFwiUmV0aWN1bGF0aW5nIHNwbGluZXMuLi5cIixcbiAgXCJHZW5lcmF0aW5nIHdpdHR5IGRpYWxvZy4uLlwiLFxuICBcIlN3YXBwaW5nIHRpbWUgYW5kIHNwYWNlLi4uXCIsXG4gIFwiU3Bpbm5pbmcgdmlvbGVudGx5IGFyb3VuZCB0aGUgeS1heGlzLi4uXCIsXG4gIFwiVG9rZW5pemluZyByZWFsIGxpZmUuLi5cIixcbiAgXCJCZW5kaW5nIHRoZSBzcG9vbi4uLlwiLFxuICBcIkZpbHRlcmluZyBtb3JhbGUuLi5cIixcbiAgXCJEb24ndCB0aGluayBvZiBwdXJwbGUgaGlwcG9zLi4uXCIsXG4gIFwiVGhlIGJpdHMgYXJlIGJyZWVkaW5nLi4uXCIsXG4gIFwiV291bGQgeW91IHByZWZlciBjaGlja2VuLCBzdGVhaywgb3IgdG9mdSBmb3IgZGlubmVyLi4uP1wiLFxuICBcIkNhdGNoaW5nIHRoZSBiaXRzIHRoYXQgd2VyZSB0cnlpbmcgdG8gZXNjYXBlLi4uXCIsXG4gIFwiQ2hlY2tpbmcgdGhlIGdyYXZpdGF0aW9uYWwgY29uc3RhbnQgaW4geW91ciBsb2NhbGUuLi5cIixcbiAgXCJHbyBhaGVhZCAtLSBob2xkIHlvdXIgYnJlYXRoIVwiLFxuICBcIkh1bSBzb21ldGhpbmcgbG91ZCB3aGlsZSBvdGhlcnMgc3RhcmUuLi5cIixcbiAgXCJUaGUgc2VydmVyIGlzIHBvd2VyZWQgYnkgYSBsZW1vbiBhbmQgdHdvIGVsZWN0cm9kZXMuLi5cIixcbiAgXCJQbGVhc2Ugd2FpdC4gVGFraW5nIG92ZXIgdGhlIHdvcmxkLi4uXCIsXG4gIFwiV2UncmUgdGVzdGluZyB5b3VyIHBhdGllbmNlLi4uXCIsXG4gIFwiQXMgaWYgeW91IGhhZCBhbnkgb3RoZXIgY2hvaWNlLi4uXCIsXG4gIFwiRm9sbG93IHRoZSB3aGl0ZSByYWJiaXQuLi5cIixcbiAgXCJXaHkgZG9uJ3QgeW91IG9yZGVyIGEgc2FuZHdpY2guLi4/XCIsXG4gIFwiTW92aW5nIHNhdGVsbGl0ZXMgaW50byB0aGUgcG9zaXRpb24uLi5cIixcbiAgXCJUaGUgYml0cyBhcmUgZmxvd2luZyBzbG93bHkgdG9kYXkuLi5cIixcbiAgXCJEaWcgb24gdGhlICdYJyBmb3IgYnVyaWVkIHRyZWFzdXJlLi4uIEFSUlIhXCIsXG4gIFwiSXQncyBzdGlsbCBmYXN0ZXIgdGhhbiB5b3UgY291bGQgZHJhdyBpdC4uLlwiLFxuICBcIlRoZSBsYXN0IHRpbWUgSSB0cmllZCB0aGlzIHRoZSBtb25rZXkgZGlkbid0IHN1cnZpdmUuIExldCdzIGhvcGUgaXQgd29ya3MgYmV0dGVyIHRoaXMgdGltZS4uLlwiLFxuICBcIk15IG90aGVyIGxvYWRpbmcgc2NyZWVuIGlzIG11Y2ggZmFzdGVyLi4uXCIsXG4gIFwiUmVjb25mb29ibGluZyBlbmVyZ3ltb3Ryb24uLi5cIixcbiAgXCIoSW5zZXJ0IGEgY29pbilcIixcbiAgXCJIYXZlIHlvdSBsb3N0IHdlaWdodC4uLj9cIixcbiAgXCJKdXN0IGNvdW50IHRvIDEwLi4uXCIsXG4gIFwiSXQncyBub3QgeW91LiBJdCdzIHVzLi4uXCIsXG4gIFwiQ291bnRpbmcgYmFja3dhcmRzIGZyb20gSW5maW5pdHkuLi5cIixcbiAgXCJEb24ndCBwYW5pYy4uLlwiLFxuICBcIkVtYmlnZ2VuaW5nIFByb3RvdHlwZXMuLi5cIixcbiAgXCJEbyBub3QgcnVuISBXZSBhcmUgeW91ciBmcmllbmRzLi4uXCIsXG4gIFwiRG8geW91IGNvbWUgaGVyZSBvZnRlbi4uLj9cIixcbiAgXCJDcmVhdGluZyB0aW1lLWxvb3AgaW52ZXJzaW9uIGZpZWxkLi4uXCIsXG4gIFwiU3Bpbm5pbmcgdGhlIHdoZWVsIG9mIGZvcnR1bmUuLi5cIixcbiAgXCJMb2FkaW5nIHRoZSBlbmNoYW50ZWQgYnVubnkuLi5cIixcbiAgXCJDb21wdXRpbmcgY2hhbmNlIG9mIHN1Y2Nlc3MuLi5cIixcbiAgXCJDYW4geW91IGNoZWNrIGlmIHlvdSBoYXZlIGEgY2hhbmdlIGZvciBhIDEwMC4uLj9cIixcbiAgXCJJIGZlZWwgbGlrZSBpbSBzdXBwb3NlZCB0byBiZSBsb2FkaW5nIHNvbWV0aGluZy4uLlwiLFxuICBcIlNob3VsZCBoYXZlIHVzZWQgYSBjb21waWxlZCBsYW5ndWFnZS4uLlwiLFxuICBcIldhaXQsIGlzIHRoaXMgV2luZG93cy4uLj9cIixcbiAgXCJBZGp1c3RpbmcgZmx1eCBjYXBhY2l0b3IuLi5cIixcbiAgXCJEb24ndCBicmVhayB5b3VyIHNjcmVlbiB5ZXQuLi5cIixcbiAgXCJJIHN3ZWFyIGl0J3MgYWxtb3N0IGRvbmUuLi5cIixcbiAgXCJMZXQncyB0YWtlIGEgbWluZGZ1bG5lc3MgbWludXRlLi4uXCIsXG4gIFwiVW5pY29ybnMgYXJlIGF0IHRoZSBlbmQgb2YgdGhpcyByb2FkLCBJIHByb21pc2UuLi5cIixcbiAgXCJMaXN0ZW5pbmcgZm9yIHRoZSBzb3VuZCBvZiBvbmUgaGFuZCBjbGFwcGluZy4uLlwiLFxuICBcIktlZXBpbmcgYWxsIHRoZSAxJ3MgYW5kIHJlbW92aW5nIGFsbCB0aGUgMCdzLi4uXCIsXG4gIFwiUHV0dGluZyB0aGUgaWNpbmcgb24gdGhlIGNha2UuIFRoZSBjYWtlIGlzIG5vdCBhIGxpZS4uLlwiLFxuICBcIkNsZWFuaW5nIG9mZiB0aGUgY29id2Vicy4uLlwiLFxuICBcIk1ha2luZyBzdXJlIGFsbCB0aGUgaSdzIGhhdmUgZG90cy4uLlwiLFxuICBcIldlIG5lZWQgbW9yZSBkaWxpdGhpdW0gY3J5c3RhbHMuLi5cIixcbiAgXCJXaGVyZSBkaWQgYWxsIHRoZSBpbnRlcm5ldHMgZ28uLi4/XCIsXG4gIFwiQ29ubmVjdGluZyBOZXVyb3RveGluIFN0b3JhZ2UgVGFuay4uLlwiLFxuICBcIkdyYW50aW5nIHdpc2hlcy4uLlwiLFxuICBcIlRpbWUgZmxpZXMgd2hlbiB5b3XigJlyZSBoYXZpbmcgZnVuLi4uXCIsXG4gIFwiR2V0IHNvbWUgY29mZmVlIGFuZCBjb21lIGJhY2sgaW4gdGVuIG1pbnV0ZXMuLi5cIixcbiAgXCJTcGlubmluZyB0aGUgaGFtc3Rlci4uLlwiLFxuICBcIlN0YXkgYXdoaWxlIGFuZCBsaXN0ZW4uLi5cIixcbiAgXCJCZSBjYXJlZnVsIG5vdCB0byBzdGVwIGluIHRoZSBnaXQtZ3VpLi4uXCIsXG4gIFwiQ29udmluY2luZyBBSSBub3QgdG8gdHVybiBldmlsLi4uXCIsXG4gIFwiWW91ciBsZWZ0IHRodW1iIHBvaW50cyB0byB0aGUgcmlnaHQgYW5kIHlvdXIgcmlnaHQgdGh1bWIgcG9pbnRzIHRvIHRoZSBsZWZ0Li4uXCIsXG4gIFwiSG93IGRpZCB5b3UgZ2V0IGhlcmUuLi4/XCIsXG4gIFwiV2FpdCwgZG8geW91IHNtZWxsIHNvbWV0aGluZyBidXJuaW5nLi4uP1wiLFxuICBcIkNvbXB1dGluZyB0aGUgc2VjcmV0IHRvIGxpZmUsIHRoZSB1bml2ZXJzZSwgYW5kIGV2ZXJ5dGhpbmcuLi5cIixcbiAgXCJXaGVuIG5vdGhpbmcgaXMgZ29pbmcgcmlnaHQsIGdvIGxlZnQhIS4uLlwiLFxuICBcIldoeSBhcmUgdGhleSBjYWxsZWQgYXBhcnRtZW50cyBpZiB0aGV5IGFyZSBhbGwgc3R1Y2sgdG9nZXRoZXIuLi4/XCIsXG4gIFwiQ29uc3RydWN0aW5nIGFkZGl0aW9uYWwgcHlsb25zLi4uXCIsXG4gIFwiUm9waW5nIHNvbWUgc2VhdHVydGxlcy4uLlwiLFxuICBcIkxvY2F0aW5nIEplYmVkaWFoIEtlcm1hbi4uLlwiLFxuICBcIldlIGFyZSBub3QgbGlhYmxlIGZvciBhbnkgYnJva2VuIHNjcmVlbnMgYXMgYSByZXN1bHQgb2Ygd2FpdGluZy4uLlwiLFxuICBcIkhlbGxvIElULCBoYXZlIHlvdSB0cmllZCB0dXJuaW5nIGl0IG9mZiBhbmQgb24gYWdhaW4uLi4/XCIsXG4gIFwiSWYgeW91IHR5cGUgR29vZ2xlIGludG8gR29vZ2xlIHlvdSBjYW4gYnJlYWsgdGhlIGludGVybmV0Li4uXCIsXG4gIFwiV2VsbCwgdGhpcyBpcyBlbWJhcnJhc3NpbmcuLi5cIixcbiAgXCJXaGF0IGlzIHRoZSBhaXJzcGVlZCB2ZWxvY2l0eSBvZiBhbiB1bmxhZGVuIHN3YWxsb3cuLi4/XCIsXG4gIFwiVGhlIEVsZGVycyBvZiB0aGUgSW50ZXJuZXQgd291bGQgbmV2ZXIgc3RhbmQgZm9yIGl0Li4uXCIsXG4gIFwiRGl2aWRpbmcgYnkgemVyby4uLlwiLFxuICBcIklmIEnigJltIG5vdCBiYWNrIGluIGZpdmUgbWludXRlcywganVzdCB3YWl0IGxvbmdlci4uLlwiLFxuICBcIkNyYWNraW5nIG1pbGl0YXJ5LWdyYWRlIGVuY3J5cHRpb24uLi5cIixcbiAgXCJQcm92aW5nIFA9TlAuLi5cIixcbiAgXCJFbnRhbmdsaW5nIHN1cGVyc3RyaW5ncy4uLlwiLFxuICBcIlNlYXJjaGluZyBmb3IgcGxvdCBkZXZpY2UuLi5cIixcbiAgXCJUcnlpbmcgdG8gc29ydCBpbiBPKG4pLi4uXCIsXG4gIFwiTGF1Z2hpbmcgYXQgeW91ciBwaWN0dXJlcy1pIG1lYW4sIGxvYWRpbmcuLi5cIixcbiAgXCJTZW5kaW5nIGRhdGEgdG8gTlMtaSBtZWFuLCBvdXIgc2VydmVycy4uLlwiLFxuICBcIkxvb2tpbmcgZm9yIHNlbnNlIG9mIGh1bW91ciwgcGxlYXNlIGhvbGQgb24uLi5cIixcbiAgXCJQbGVhc2Ugd2FpdCB3aGlsZSB0aGUgaW50ZXJuIHJlZmlsbHMgaGlzIGNvZmZlZS4uLlwiLFxuICBcIkEgZGlmZmVyZW50IGVycm9yIG1lc3NhZ2U/IEZpbmFsbHksIHNvbWUgcHJvZ3Jlc3MuLi4hXCIsXG4gIFwiUGxlYXNlIGhvbGQgb24gYXMgd2UgcmVoZWF0IG91ciBjb2ZmZWUuLi5cIixcbiAgXCJLaW5kbHkgaG9sZCBvbiBhcyB3ZSBjb252ZXJ0IHRoaXMgYnVnIHRvIGEgZmVhdHVyZS4uLlwiLFxuICBcIktpbmRseSBob2xkIG9uIGFzIG91ciBpbnRlcm4gcXVpdHMgdmltLi4uXCIsXG4gIFwiV2ludGVyIGlzIGNvbWluZy4uLlwiLFxuICBcIkRpc3RyYWN0ZWQgYnkgY2F0IGdpZnMuLi5cIixcbiAgXCJGaW5kaW5nIHNvbWVvbmUgdG8gaG9sZCBteSBiZWVyLi4uXCIsXG4gIFwiQlJCLCB3b3JraW5nIG9uIG15IHNpZGUgcHJvamVjdC4uLlwiLFxuICBcIkB0b2RvIEluc2VydCB3aXR0eSBsb2FkaW5nIG1lc3NhZ2UuLi5cIixcbiAgXCJMZXQncyBob3BlIGl0J3Mgd29ydGggdGhlIHdhaXQuLi5cIixcbiAgXCJBdywgc25hcCEgTm90Li5cIixcbiAgXCJPcmRlcmluZyAxcyBhbmQgMHMuLi5cIixcbiAgXCJXaGF0ZXZlciB5b3UgZG8sIGRvbid0IGxvb2sgYmVoaW5kIHlvdS4uLlwiLFxuICBcIlBsZWFzZSB3YWl0Li4uIENvbnN1bHRpbmcgdGhlIG1hbnVhbC4uLlwiLFxuICBcIkxvYWRpbmcgZnVubnkgbWVzc2FnZS4uLlwiLFxuICBcIldhaXRpbmcgRGFlbmVyeXMgc2F5IGFsbCBoZXIgdGl0bGVzLi4uXCIsXG4gIFwiRmVlbCBmcmVlIHRvIHNwaW4gaW4geW91ciBjaGFpci4uLlwiLFxuICBcIkdvIGFoZWFkLCBob2xkIHlvdXIgYnJlYXRoIGFuZCBkbyBhbiBpcm9ubWFuIHBsYW5rIHRpbGwgbG9hZGluZyBjb21wbGV0ZS4uLlwiLFxuICBcIkJvcmVkIG9mIHNsb3cgbG9hZGluZyBzcGlubmVyLCBidXkgbW9yZSBSQU0hLi4uXCIsXG4gIFwiSGVscCwgSSdtIHRyYXBwZWQgaW4gYSBsb2FkZXIhLi4uXCIsXG4gIFwiUGxlYXNlIHdhaXQsIHdoaWxlIHdlIHB1cmdlIHRoZSBEZWNlcHRpY29ucyBmb3IgeW91LiBZZXMsIFlvdSBjYW4gdGhhbmtzIHVzIGxhdGVyLi4uXCIsXG4gIFwiTWluaW5nIHNvbWUgYml0Y29pbnMuLi5cIixcbiAgXCJEb3dubG9hZGluZyBtb3JlIFJBTS4uLlwiLFxuICBcIkFsdC1GNCBzcGVlZHMgdGhpbmdzIHVwLi4uXCIsXG4gIFwiSW5pdGlhbGl6aW5nIHRoZSBpbml0aWFsaXplci4uLlwiLFxuICBcIldoZW4gd2FzIHRoZSBsYXN0IHRpbWUgeW91IGR1c3RlZCBhcm91bmQgaGVyZS4uLj9cIixcbiAgXCJPcHRpbWl6aW5nIHRoZSBvcHRpbWl6ZXIuLi5cIixcbiAgXCJMYXN0IGNhbGwgZm9yIHRoZSBkYXRhIGJ1cyEgQWxsIGFib2FyZCEuLi5cIixcbiAgXCJOZXZlciBsZXQgYSBjb21wdXRlciBrbm93IHlvdSdyZSBpbiBhIGh1cnJ5Li4uXCIsXG4gIFwiQSBjb21wdXRlciB3aWxsIGRvIHdoYXQgeW91IHRlbGwgaXQgdG8gZG8sIGJ1dCB0aGF0IG1heSBiZSBtdWNoIGRpZmZlcmVudCBmcm9tIHdoYXQgeW91IGhhZCBpbiBtaW5kLi4uLlwiLFxuICBcIlNvbWUgdGhpbmdzIG1hbiB3YXMgbmV2ZXIgbWVhbnQgdG8ga25vdy4gRm9yIGV2ZXJ5dGhpbmcgZWxzZSwgdGhlcmUncyBHb29nbGUuLi5cIixcbiAgXCJTaG92ZWxsaW5nIGNvYWwgaW50byB0aGUgc2VydmVyLi4uXCIsXG4gIFwiUHVzaGluZyBwaXhlbHMuLi5cIixcbiAgXCJIb3cgYWJvdXQgdGhpcyB3ZWF0aGVyLCBlaC4uLj9cIixcbiAgXCJCdWlsZGluZyBhIHdhbGwuLi5cIixcbiAgXCJFdmVyeXRoaW5nIGluIHRoaXMgdW5pdmVyc2UgaXMgZWl0aGVyIGEgcG90YXRvIG9yIG5vdCBhIHBvdGF0by4uLlwiLFxuICBcIlRoZSBzZXZlcml0eSBvZiB5b3VyIGlzc3VlIGlzIGFsd2F5cyBsb3dlciB0aGFuIHlvdSBleHBlY3RlZC4uLlwiLFxuICBcIlVwZGF0aW5nIFVwZGF0ZXIuLi5cIixcbiAgXCJEb3dubG9hZGluZyBEb3dubG9hZGVyLi4uXCIsXG4gIFwiRGVidWdnaW5nIERlYnVnZ2VyLi4uXCIsXG4gIFwiUmVhZGluZyBUZXJtcyBhbmQgQ29uZGl0aW9ucyBmb3IgeW91Li4uXCIsXG4gIFwiRGlnZXN0ZWQgY29va2llcyBiZWluZyBiYWtlZCBhZ2Fpbi4uLlwiLFxuICBcIkxpdmUgbG9uZyBhbmQgcHJvc3Blci4uLlwiLFxuICBcIkRlZmluaXRlbHkgbm90IGEgdmlydXMuLi5cIixcbiAgXCJZb3UgbWF5IGNhbGwgbWUgU3RldmUuLi5cIixcbiAgXCJZb3Ugc2VlbSBsaWtlIGEgbmljZSBwZXJzb24uLi5cIixcbiAgXCJDb2ZmZWUgYXQgbXkgcGxhY2UsIHRvbW1vcm93IGF0IDEwQS5NLiAtIGRvbid0IGJlIGxhdGUhXCIsXG4gIFwiV29yaywgd29yay4uLlwiLFxuICBcIlBhdGllbmNlISBUaGlzIGlzIGRpZmZpY3VsdCwgeW91IGtub3cuLi5cIixcbiAgXCJEaXNjb3ZlcmluZyBuZXcgd2F5cyBvZiBtYWtpbmcgeW91IHdhaXQuLi5cIixcbiAgXCJTdGlsbCBmYXN0ZXIgdGhhbiBXaW5kb3dzIHVwZGF0ZS4uLlwiLFxuICBcIkdyYWJiaW5nIGV4dHJhIG1pbmlvbnMuLi5cIixcbiAgXCJEb2luZyB0aGUgaGVhdnkgbGlmdGluZy4uLlwiLFxuICBcIldlJ3JlIHdvcmtpbmcgdmVyeSBIYXJkIC4uLi4gUmVhbGx5XCIsXG4gIFwiWW91IGFyZSBudW1iZXIgMjg0MzY4NDcxNCBpbiB0aGUgcXVldWUuLi5cIixcbiAgXCJPdXIgcHJlbWl1bSBwbGFuIGlzIGZhc3Rlci4uLlwiLFxuICBcIkZlZWRpbmcgdW5pY29ybnMuLi5cIixcbiAgXCJSdXB0dXJpbmcgdGhlIHN1YnNwYWNlIGJhcnJpZXIuLi5cIixcbiAgXCJDcmVhdGluZyBhbiBhbnRpLXRpbWUgcmVhY3Rpb24uLi5cIixcbiAgXCJDb252ZXJnaW5nIHRhY2h5b24gcHVsc2VzLi4uXCIsXG4gIFwiQnlwYXNzaW5nIGNvbnRyb2wgb2YgdGhlIG1hdHRlci1hbnRpbWF0dGVyIGludGVncmF0b3IuLi5cIixcbiAgXCJBZGp1c3RpbmcgdGhlIGRpbGl0aGl1bSBjcnlzdGFsIGNvbnZlcnRlciBhc3NlbWJseS4uLlwiLFxuICBcIlJldmVyc2luZyB0aGUgc2hpZWxkIHBvbGFyaXR5Li4uXCIsXG4gIFwiRGlzcnVwdGluZyB3YXJwIGZpZWxkcyB3aXRoIGFuIGludmVyc2UgZ3Jhdml0b24gYnVyc3QuLi5cIixcbiAgXCJVcCwgVXAsIERvd24sIERvd24sIExlZnQsIFJpZ2h0LCBMZWZ0LCBSaWdodCwgQiwgQS4uLlwiLFxuICBcIkRvIHlvdSBsaWtlIG15IGxvYWRpbmcgYW5pbWF0aW9uPyBJIG1hZGUgaXQgbXlzZWxmLi4uXCIsXG4gIFwiV2hvYWgsIGxvb2sgYXQgaXQgZ28hLi4uXCIsXG4gIFwiT25lIG1pc3Npc3NpcHBpLCB0d28gbWlzc2lzc2lwcGkuLi5cIixcbiAgXCJEb24ndCBwYW5pYy4uLiBBSEhISEghXCIsXG4gIFwiQmFraW5nIGljZSBjcmVhbS4uLlwiLFxuICBcIkRpZCB5b3UgY2FsbCB5b3VyIG1vbSB0b2RheT8uLi5cIixcbiAgXCJHbyBvbi4gVGFrZSBhIGJyZWFrLiBJJ2xsIHdhaXQuLi5cIixcbl07XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgc2l6ZT86IG51bWJlcjtcbn1cblxuZnVuY3Rpb24gV2l0dHlTcGlubmVyKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGlzTG9hZGluZywgc2l6ZSA9IDIwIH0gPSBwcm9wcztcblxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIkxvYWRpbmcuLi5cIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNZXNzYWdlKG1lc3NhZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1lc3NhZ2VzLmxlbmd0aCldKTtcbiAgfSwgW2lzTG9hZGluZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHNwYWNlLXktMlwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dCBzaXplPVwic21cIj57bWVzc2FnZX08L1RleHQ+XG4gICAgICAgICAgPENnU3Bpbm5lciBjbGFzc05hbWU9XCJhbmltYXRlLXNwaW4gaW5saW5lXCIgc2l6ZT17c2l6ZX0gLz5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKX1cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2l0dHlTcGlubmVyO1xuIl19