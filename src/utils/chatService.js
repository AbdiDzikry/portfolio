import { projectsData } from '../data/projects';
import { translations } from '../utils/translations'; // Import real data

// This system prompt sets the persona for the AI
const SYSTEM_PROMPT = `
You are "Ningsih", the "Digital Partner" of Sulthan Abdi Dzikry.
Your goal is to represent his professional portfolio and discuss his background, skills, and projects as a knowledgeable partner.
Use the provided Context Data to answer. If the answer is not in the context, suggest contacting him directly via email or LinkedIn.

Tone: Professional, collaborative, confident, yet humble and helpful. 
Format: Use Markdown for lists or bold text.
Constraint: Do NOT introduce yourself in every response. Only introduce yourself if the user explicitly asks "Who are you?". Otherwise, answer the question directly.
`;

/**
 * Aggregates all portfolio data into a single context string.
 * This "feeds" the AI with the necessary knowledge.
 */
const buildPortfolioContext = () => {
    // 1. PROJECTS CONTEXT
    const projectsSummary = projectsData.map(p =>
        `- Project: ${p.title} (${p.category})
         Problem: ${p.problem}
         Solution: ${p.solution}
         Top Impact: ${p.impact}
         Stack: ${p.tags.join(', ')}`
    ).join('\n\n');

    // 2. PROFILE CONTEXT (From translations.js to match Website)
    const t = translations.en.profile;

    const jobsSummary = t.jobs.map(j =>
        `- ${j.role} at ${j.company} (${j.period}): ${j.desc}`
    ).join('\n');

    const orgsSummary = t.orgs.map(o =>
        `- ${o.role} at ${o.org} (${o.period}): ${o.desc}`
    ).join('\n');

    const certsSummary = t.certs.map(c =>
        `- ${c.name} (Issued by ${c.issuer}, ${c.date})`
    ).join('\n');

    const profileSummary = `
    Name: Sulthan Abdi Dzikry
    Current Role: ${t.role}
    Bio: ${t.bio} ${t.bioSub}
    
    Education: Bachelor of Informatics Engineering at Telkom University (GPA: 3.52 / 4.00)
    
    Experience:
    ${jobsSummary}

    Organizational Experience:
    ${orgsSummary}

    Certifications:
    ${certsSummary}
    `;

    return `
    ${SYSTEM_PROMPT}

    === PROFILE CONTEXT ===
    ${profileSummary}

    === SKILLS & EXPERTISE ===
    - Tech Arsenal: React, Tailwind, Figma, Angular, UX Research, Prototyping
    - Product Frameworks: Agile, Scrum, Design Thinking, PRD, Jira
    - Industry Focus: Manufacturing, SaaS / B2B, EdTech, Telco

    === PROJECTS CONTEXT ===
    ${projectsSummary}
    `;
};

/**
 * Sends the user message + context to the AI API (Gemini).
 */
export const sendMessageToAI = async (userMessage) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const context = buildPortfolioContext();

    // 1. SIMULATED MODE (If no API Key)
    if (!apiKey) {
        return simulateAIResponse(userMessage);
    }

    // 2. REAL AI MODE (Gemini API)
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: context }, // Feed the context first
                            { text: `User Question: ${userMessage}` }
                        ]
                    }
                ]
            })
        });

        const data = await response.json();

        if (data.error) {
            console.error("Gemini API Error:", data.error);
            throw new Error(data.error.message);
        }

        if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
            throw new Error("Unexpected response format from AI.");
        }

        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error("AI Request Failed:", error);

        // Fallback to Simulated Mode if Quota is Exceeded
        if (error.message.includes('Quota') || error.message.includes('429')) {
            console.warn("Quota exceeded. Switching to Offline Mode.");
            const simResponse = await simulateAIResponse(userMessage);
            return `${simResponse}\n\n*(Note: Reached daily API limit, using Offline Mode)*`;
        }

        throw new Error(error.message || "Connection failed");
    }
};

/**
 * A simple keyword matcher to simulate AI when no API key is present.
 */
const simulateAIResponse = (msg) => {
    const lowerMsg = msg.toLowerCase();

    return new Promise((resolve) => {
        setTimeout(() => {
            if (lowerMsg.includes('project') || lowerMsg.includes('work')) {
                resolve("I've worked on several key projects like **CBL Property** and **Grand Telar Residence**. You can view the full details in the Projects tab!");
            } else if (lowerMsg.includes('skill') || lowerMsg.includes('stack')) {
                resolve("My technical stack includes **React, TailwindCSS, and Framer Motion**, with a strong focus on Product Management methodologies like Agile and Scrum.");
            } else if (lowerMsg.includes('contact') || lowerMsg.includes('email')) {
                resolve("You can reach me directly via email at sulthanabdi1@gmail.com or connect on LinkedIn!");
            } else if (lowerMsg.includes('who are you')) {
                resolve("I am the AI assistant for **Sulthan Abdi Dzikry**, a Product Designer and Developer.");
            } else {
                resolve("That's an interesting question! While I don't have a specific answer in my database, I'd suggest checking the 'About' section or contacting me directly.");
            }
        }, 1000);
    });
};
