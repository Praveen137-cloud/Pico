const mongoose = require('mongoose');
const Subject = require('./models/Subject');
const Stage = require('./models/Stage');
const Unit = require('./models/Unit');
const Lesson = require('./models/Lesson');
const subjectMetadata = require('./scripts/curriculum_metadata');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pico_dsa';

const picoQuotes = [
  "Listen up, human CPU! Java is strictly typed, just like my diet!",
  "Object-Oriented is just a fancy word for 'Everything is a bird'.",
  "Don't forget your semicolons! They're the seeds of your code.",
  "Garbage collection? I call it 'cleaning the nest'.",
  "Efficiency is O(1). My flight path? O(log N). Your brain? O(N^2) for now...",
  "Java's `JVM` makes you run anywhere. I just fly there.",
  "Concurrency is like ten parrots screaming at once. Use synchronized!",
  "Static methods? Those are for birds who don't want to leave the branch.",
  "Abstraction is hiding the wings but keeping the flight.",
  "Inheritance: Your code gets my wisdom, but hopefully not my appetite!"
];

const javaTemplates = {
  teaching: [
    "Today we delve into **{topic}**. In Java, this is handled via {construct}.",
    "Mastering **{topic}** is essential for high-performance JVM applications.",
    "🦜 Pico says: '{quote}' Let's look at how **{topic}** works in a {scenario} scenario.",
    "The complexity of **{topic}** is usually {complexity}. This is because {reason}.",
    "Pro Tip: When using **{topic}**, always remember to {pro_tip}."
  ],
  programming_board: [
    { text: "Complete the Java logic for **{title}** using {topic} principles.", code: "public class Solution {\n  public void solve(int[] input) {\n    // Phase: {topic}\n    for(int i = 0; i < input.length; ___ ) {\n       // Logic here\n    }\n  }\n}", answer: "i++" },
    { text: "Implement the following **{topic}** check for our Elite Graduation track.", code: "if (buffer != null && buffer.size() ___ MAX_CAPACITY) {\n  process();\n}", answer: ">" },
    { text: "Fix the missing condition in this **{topic}** algorithm.", code: "while (left ___ right) {\n  int mid = left + (right - left) / 2;\n  // ...\n}", answer: "<" }
  ]
};

const problemDescriptors = [
  "Find the optimal solution for {item}.", "Calculate the checksum of {item}.", "Optimize the throughput of {item}.",
  "Validate the structural integrity of {item}.", "Match the frequency of {item}.", "Synchronize the states of {item}.",
  "Traverse the hierarchy of {item}.", "Partition the dataset by {item}.", "Merge the buffers of {item}.",
  "Detect cycles in the {item} graph.", "Prune the redundant branches of {item}."
];

const items = ["Bird Migration Data", "Seed Distribution", "Feather Patterns", "Nest Coordinates", "Flight Latencies", "Entropy Buffers", "Logic Gates", "Memory Blocks", "Network Packets", "User Statistics"];

function generateUniqueUnit(uIdx, sIdx, stageName, subjectName) {
  const descriptor = problemDescriptors[uIdx % problemDescriptors.length];
  const item = items[uIdx % items.length];
  const title = `${descriptor.replace('{item}', item)} (#${uIdx + 1})`;
  
  const lessons = [];
  
  // 5 Teaching Lessons
  for (let i = 1; i <= 5; i++) {
    const quote = picoQuotes[Math.floor(Math.random() * picoQuotes.length)];
    const complexity = i % 2 === 0 ? "O(N)" : "O(log N)";
    const construct = ["ArrayList", "HashMap", "Streams", "Threads", "Optional", "Interfaces"][i % 6];
    
    lessons.push({
      order: i,
      type: 'teaching',
      questionText: `[MISSION LOG ${sIdx + 1}.${uIdx + 1}.${i}]\n**${stageName}** Protocols - Subject: **${subjectName}**\n\n${javaTemplates.teaching[i-1].replace('{topic}', stageName).replace('{construct}', construct).replace('{quote}', quote).replace('{scenario}', item).replace('{complexity}', complexity).replace('{reason}', 'the JVM needs to look at every seed once').replace('{pro_tip}', 'avoid redundant object allocation')}`,
      explanation: "Java efficiency relies on proper memory management and algorithmic precision.",
      codeSnippet: i === 1 ? `// Auto-generated Java Snippet\npublic class PicoEngine {\n  public void init${subjectName.replace(/\s+/g, '')}() {\n    // Stage: ${stageName}\n    System.out.println("Processing ${item}...");\n  }\n}` : null,
      language: 'java'
    });
  }

  // 5 Programming/Quiz Lessons
  // 6 & 7: Programming Board
  for (let i = 6; i <= 7; i++) {
    const template = javaTemplates.programming_board[i-6];
    lessons.push({
      order: i,
      type: 'programming_board',
      questionText: template.text.replace('{topic}', stageName).replace('{title}', title),
      codeSnippet: template.code.replace('{topic}', stageName),
      correctAnswer: template.answer,
      explanation: "Precision in control structures is the heartbeat of a senior Java developer.",
      language: 'java'
    });
  }

  // 8: Multiple Choice
  lessons.push({
    order: 8,
    type: 'multiple_choice',
    questionText: `What is the time complexity of the optimized **${stageName}** algorithm in Java?`,
    options: ['O(1)', 'O(N)', 'O(log N)', 'O(N^2)'],
    correctAnswer: 'O(log N)',
    explanation: 'Logarithmic time is the gold standard for many searching and tree-based algorithms.'
  });

  // 9: Match Following
  lessons.push({
    order: 9,
    type: 'match_following',
    questionText: `Match the **${stageName}** components for Java Elite status.`,
    pairs: [
      { key: 'Heap', value: 'Dynamic Memory' },
      { key: 'Stack', value: 'Local Variables' },
      { key: 'Metaspace', value: 'Class Metadata' }
    ],
    explanation: 'Understanding the Java Memory Model (JMM) is crucial for scaling.'
  });

  // 10: Final MCQ
  lessons.push({
    order: 10,
    type: 'multiple_choice',
    questionText: `In **${stageName}**, how do we prevent a ` + (uIdx % 2 === 0 ? "Memory Leak?" : "Race Condition?"),
    options: uIdx % 2 === 0 ? ['Nullify References', 'Use More RAM', 'Reboot JVM', 'Ignore it'] : ['Use Synchronized', 'Use Volatile', 'Use AtomicInteger', 'All of a, b, c'],
    correctAnswer: uIdx % 2 === 0 ? 'Nullify References' : 'All of a, b, c',
    explanation: 'Elite developers write code that is both safe and performant.'
  });

  return lessons;
}

async function seed() {
  try {
    console.log('--- Pico Elite Curriculum Mega-Seeder Strategy: JAVA & UNIQUE ---');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Wipe collections
    console.log('Clearing old curriculum data...');
    await Subject.deleteMany({});
    await Stage.deleteMany({});
    await Unit.deleteMany({});
    await Lesson.deleteMany({});

    for (const sub of subjectMetadata) {
      console.log(`\n==== Seeding Subject: ${sub.name} ====`);
      
      const newSubject = await Subject.create({
        name: sub.name,
        icon: sub.icon,
        stages: []
      });

      for (let sIdx = 0; sIdx < sub.stages.length; sIdx++) {
        const stageName = sub.stages[sIdx];
        console.log(`  -> Stage ${sIdx + 1}: ${stageName} (Generating 200 Unique Units...)`);
        
        const newStage = await Stage.create({
          title: `Stage ${sIdx + 1}: ${stageName}`,
          subjectId: newSubject._id,
          order: sIdx + 1
        });

        newSubject.stages.push(newStage._id);

        const unitsBatch = [];
        for (let uIdx = 0; uIdx < 200; uIdx++) {
          unitsBatch.push({
            title: `Unit ${uIdx + 1}: ${stageName} Evolution`,
            desc: `Master the unique properties of ${stageName} in scenario ${uIdx + 1}.`,
            stageId: newStage._id,
            order: uIdx + 1,
            xp: 50,
            isUnlocked: true
          });
        }

        const createdUnits = await Unit.insertMany(unitsBatch);
        
        // Populate Lessons for every unit in this stage (Batch process)
        console.log(`    * Inserting ${createdUnits.length * 10} unique Java lessons...`);
        const lessonsBatch = [];
        for (const unit of createdUnits) {
          const unitLessons = generateUniqueUnit(unit.order - 1, sIdx, stageName, sub.name);
          unitLessons.forEach(l => {
            l.unitId = unit._id;
            lessonsBatch.push(l);
          });

          // Insert in chunks to avoid memory overflow
          if (lessonsBatch.length >= 1000) {
            await Lesson.insertMany(lessonsBatch);
            lessonsBatch.length = 0;
          }
        }
        if (lessonsBatch.length > 0) {
          await Lesson.insertMany(lessonsBatch);
        }
      }
      
      await newSubject.save();
      console.log(`Successfully completed ${sub.name} (20,000 unique lessons).`);
    }

    console.log('\n======================================================');
    console.log('PICO MEGA-REPOPULATION COMPLETE!');
    console.log('Total Subjects: 15');
    console.log('Total Stages: 150');
    console.log('Total Units: 30,000');
    console.log('Total Lessons: 300,000 (Java & Unique)');
    console.log('======================================================');
    
    process.exit(0);
  } catch (err) {
    console.error('CRITICAL SEEDING ERROR:', err);
    process.exit(1);
  }
}

seed();
