import React, { useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg";
import Text from "@/components/Text/Text";
import { AnimatePresence, motion } from "framer-motion";

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

interface Props {
  isLoading: boolean;
  size?: number;
}

function WittySpinner(props: Props) {
  const { isLoading, size = 20 } = props;

  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Text size="sm">{message}</Text>
          <CgSpinner className="animate-spin inline" size={size} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default WittySpinner;
