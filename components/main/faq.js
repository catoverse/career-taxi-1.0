import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import styles from "../../styles/faq.module.css";

const FaqData = [
  {
    heading: "Is this for me?",
    content:
      "Are you yet to find your passion and are open to exploring various career options? If yes, the program is for you. \n Students right from the 8th grade to college students to working professionals, anyone can join the program as long as they are open to exploring one career option every week. If you are already in a field and you want to shift to a closely associated field,  we might not be a good fit for you. Let's say you are a software engineer and you want to become a product manager, you'll be much better suited to explore product management yourself. If you are open to exploring a diverse set of career options, we can definitely help",
  },
  {
    heading: "Is it really just ₹1000 for the entire course? What’s the catch?",
    content:
      "Yes, we are undercharging because we want to help to help as many people as possible. If you are not comfortable paying money in the very beginning, you can choose to take a 1 week free trial. We understand that this is a new concept and you might need some time check if this is really useful for you. If you are not able to afford to pay ₹1000, you can choose to pay any amount you are comfortable with. You'll be able to explore 15 career options within this. The price is for the entire program. There are no packages. No extra charges will be charged per career option.",
  },
  {
    heading: "Are there live courses?",
    content:
      "These are freely available resources on the internet that are curated and compiled to help you explore efficiently. The daily Co-exploration calls do not have coaches teaching you anything. You'll be using the resource material to do all the exploration. But we do have weekly experts' sessions on weekends.",
  },
  {
    heading: "Can I explore any career option of my choice?",
    content:
      "Yes, you can choose any career option you'd like to explore. As long as there's enough content available on the internet on the career option you've chosen, we can help you explore it. So feel free to go wild with your career choices 😬",
  },
  {
    heading:
      "I can watch these videos on my own if everything is from the internet. How is Career Taxi any better?",
    content:
      "Yes, you can do it on your own. You can also use the staircase instead of an elevator. But it's just inefficient. Our resource materials help you get the most credible and relevant information in the least amount of time. This will allow you to explore even more career options.",
  },
  {
    heading:
      "I really want to join the program but cannot afford it. Can you help?",
    content:
      "Yes, we can. Please WhatsApp us on +919168833977 and let us know the least amount you can afford to pay for the program. Regardless of the amount you choose, we'll accept it and you'll get full access to the program",
  },
  {
    heading: "How much time will the program take?",
    content:
      "It depends on the number of career options you explore. You need one week to explore one career option. The recommended number of career options to explore is 10. For 10 career options, you'll need 10 weeks which is 2.5 months. If you are in a time crunch and you need to make a decision fast, WhatsApp us on +919168833977 and we'll arrange a faster way for you to explore.",
  },
  {
    heading: "I’m in! How do I get started?",
    content:
      "WhatsApp us on +919168833977 mentioning that you'd like to join the program. We'll help you with the next steps from there.",
  },
  {
    heading:
      "Will one week of exploration be sufficient to explore a career option?",
    content:
      "No, but the objective of the program is to increase your exposure after which you'll shortlist 2-3 career options that you'll explore in greater detail. This program is to give a direction to get started.",
  },
  {
    heading: "Do you guarantee that I’ll find my passion after the program?",
    content:
      "No one can guarantee that. If someone is, they are fooling you. We can help you with tools and an environment to make it easier for you to find your passion. But it's your passion, you'll have to live with it. So only you can find it for yourself.",
  },
];

const Faq = () => {
  return (
    <div className="mb-20 px-5">
      <p className="mb-16 text-center text-headThree font-bold leading-tight lg:text-headTwo">
        FAQ&apos;s
      </p>
      <div className="mx-auto max-w-5xl">
        <Accordion allowZeroExpanded className={styles.accordion}>
          {FaqData.map((item) => (
            <AccordionItem className={styles.accordion__item} key={uuidv4}>
              <AccordionItemHeading>
                <AccordionItemButton className={styles.accordion__button}>
                  {item.heading}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel className={styles.accordion__panel}>
                {item.content}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
