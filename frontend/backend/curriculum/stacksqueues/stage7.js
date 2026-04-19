const stage7 = [
  {
    "order": 91,
    "title": "Unit 91: Distributed Message Queues (Concepts)",
    "desc": "Connecting machines: The global pipe.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.1] The Global Ring",
        "explanation": "Ace: 'In a distributed system, a Queue is the glue. It allows Service A to send a message to Service B without them being connected directly. This is 'Asynchronous Communication'.' Pico: 'A bird circle around the world! 100% 🦜'",
        "codeSnippet": "send_to_queue(message, cloud_uri);",
        "encouragementText": "Ace: 'Scale is reached when the buffer survives the machine.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What happens if the Consumer is down in a Distributed Queue?",
        "options": ["The message is deleted", "The queue stores the message (Persistence) until the consumer wakes up", "The producer crashes", "Pico rule"],
        "correctAnswer": "The queue stores the message (Persistence) until the consumer wakes up",
        "explanation": "This is called 'Durability'. It ensures that transient failures don't lead to data loss."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] At-least-once vs At-most-once",
        "explanation": "Ace: 'Distributed systems are messy. 'At-least-once' means we might send the same message twice. 'At-most-once' means we might lose it.' Pico: 'Better to have two seeds than zero! 100% 🦜'",
        "encouragementText": "Pico: 'Double seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Deduplicating messages using a 'Seen' set.",
        "codeSnippet": "if (seen_ids.contains(msg.id)) return ___ ;",
        "correctAnswer": "IGNORE",
        "explanation": "To achieve 'Exactly-once' semantics, the receiver must filter out duplicates based on a unique ID."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Throughput vs Latency",
        "explanation": "Ace: 'Distributed queues often batch messages together to improve throughput, but this increases the latency of individual messages.'",
        "encouragementText": "Ace: 'Optimization is a choice between volume and speed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of a Distributed Queue?",
        "options": ["Faster math", "Decoupling: Services can scale independently", "Better colors", "Pico guess"],
        "correctAnswer": "Decoupling: Services can scale independently",
        "explanation": "Service A doesn't care how slow Service B is, as long as the queue can hold the pending work."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Fan-out",
        "explanation": "Ace: 'One message can be sent to multiple queues simultaneously, allowing many services to react to the same event.'",
        "encouragementText": "Pico: 'Speak to everyone! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Acknowledging a message was processed.",
        "codeSnippet": "queue. ___ (message_id);",
        "correctAnswer": "ack",
        "explanation": "Telling the queue it's safe to delete the message because the consumer finished the work."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Global Ring Master",
        "explanation": "You have linked the planet. No machine is an island. Ace: 'The circle is global.'",
        "encouragementText": "Pico: 'World bird! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Dist terms!",
        "pairs": [
          { "key": "Durability", "value": "Stored on disk" },
          { "key": "Ack", "value": "Confirmation of receipt" },
          { "key": "Broker", "value": "The Middle-man (Kafka/Rabbit)" }
        ]
      }
    ]
  },
  {
    "order": 92,
    "title": "Unit 92: Kafka - The Partitioned Log",
    "desc": "High-throughput streams: Queues as infinite files.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.2] The Unending Scroll",
        "explanation": "Ace: 'Kafka is different. It treats a Queue like a LOG file. Messages are NOT deleted when read. Instead, consumers keep an 'Offset' (pointer) to how much they've read.' Pico: 'Reading the bird history! 100% 🦜'",
        "codeSnippet": "topic.read_from_offset(1002);",
        "encouragementText": "Ace: 'History is a sequence that can be replayed.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Partition' in Kafka?",
        "options": ["A room", "A sub-queue that allows parallel processing across multiple machines", "A broken link", "Pico rule"],
        "correctAnswer": "A sub-queue that allows parallel processing across multiple machines",
        "explanation": "By splitting a topic into partitions, Kafka can handle millions of messages per second by distributing load."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Consumer Groups",
        "explanation": "Ace: 'A group of consumers can share the work of one topic. Kafka ensures each partition is only read by ONE member of the group.' Pico: 'Bird team work! 100% 🦜'",
        "encouragementText": "Pico: 'Fair share! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Determining which partition a key belongs to.",
        "codeSnippet": "partition = hash(key) ___ num_partitions;",
        "correctAnswer": "%",
        "explanation": "Consistent hashing ensures all messages for the same key (like UserID) go to the same machine."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Retention Policy",
        "explanation": "Ace: 'Kafka keeps messages for a set time (e.g., 7 days) or size (e.g., 100GB). This allows you to 'Travel Back' and re-process old data.'",
        "encouragementText": "Ace: 'Forgetting is a configuration in the realm of the infinite.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Primary advantage of Kafka over traditional MQ?",
        "options": ["Lower latency", "Massive throughput and data persistence", "Small size", "Pico guess"],
        "correctAnswer": "Massive throughput and data persistence",
        "explanation": "Kafka scales to gigabytes per second by treating the disk like a sequential tape."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Zookeeper/KRaft",
        "explanation": "Ace: 'Kafka needs a 'Leader' to manage partitions. It uses Zookeeper or KRaft to reach consensus on who the leader is.'",
        "encouragementText": "Pico: 'Pick a leader! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Kafka message identifier.",
        "codeSnippet": "long ___ = message.get_offset();",
        "correctAnswer": "offset",
        "explanation": "The linear position of the message in the partition log."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Log Architect",
        "explanation": "You have built a history that can be replayed. The stream is infinite and immutable. Ace: 'The record is permanent.'",
        "encouragementText": "Pico: 'Infinite memory! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Kafka terms!",
        "pairs": [
          { "key": "Producer", "value": "Source of log events" },
          { "key": "Partition", "value": "Unit of parallelism" },
          { "key": "Topic", "value": "Logical Event Stream" }
        ]
      }
    ]
  },
  {
    "order": 93,
    "title": "Unit 93: RabbitMQ - AMQP Patterns",
    "desc": "Smart routing: The exchange and the queue.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.3] The Post Office",
        "explanation": "Ace: 'RabbitMQ is a 'Smart Broker'. You don't send messages to a queue; you send them to an EXCHANGE. The exchange uses routing keys to decide which queues get the message.' Pico: 'A bird sorting the mail! 100% 🦜'",
        "codeSnippet": "exchange.publish(data, routing_key=\"logs.error\");",
        "encouragementText": "Ace: 'Intelligence in the middle simplifies the edges.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is a 'Fanout' Exchange?",
        "options": ["A fan", "Sends message to EVERY queue bound to it, ignoring routing keys", "A slow queue", "Pico rule"],
        "correctAnswer": "Sends message to EVERY queue bound to it, ignoring routing keys",
        "explanation": "Useful for broadcasting updates to all services simultaneously."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Topic Exchange",
        "explanation": "Ace: 'In a Topic exchange, you can use wildcards! `logs.*` matches `logs.error` and `logs.info`. This is the power of pattern-matching queues.' Pico: 'Matching the bird calls! 100% 🦜'",
        "encouragementText": "Pico: 'Search and find! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Binding a queue to an exchange.",
        "codeSnippet": "queue. ___ (exchange, \"orders.#\");",
        "correctAnswer": "bind",
        "explanation": "Creating the link between the entry point and the storage buffer."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Direct Exchange",
        "explanation": "Ace: 'Direct exchange delivers message to queue whose binding key exactly matches the routing key. It's a 1-to-1 mapping.'",
        "encouragementText": "Ace: 'Specificity is the target of direct routing.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is RabbitMQ's primary protocol?",
        "options": ["HTTP", "AMQP", "FTP", "Pico guess"],
        "correctAnswer": "AMQP",
        "explanation": "Advanced Message Queuing Protocol is the industry standard for smart brokers."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Prefetch Count",
        "explanation": "Ace: 'Determines how many un-acked messages a consumer can hold. Set it to 1 for fair dispatching!'",
        "encouragementText": "Pico: 'One by one! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Rejecting a message and putting it back in queue.",
        "codeSnippet": "channel.basic_nack(delivery_tag, ___ = true);",
        "correctAnswer": "requeue",
        "explanation": "Sending the message back to the broker so another worker can try."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Exchange Master",
        "explanation": "You have mastered the routing of the world's information. Every message finds its home. Ace: 'The route is clear.'",
        "encouragementText": "Pico: 'Safe delivery! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Rabbit terms!",
        "pairs": [
          { "key": "Exchange", "value": "Routing Engine" },
          { "key": "Queue", "value": "Mailbox" },
          { "key": "Binding", "value": "The Route rule" }
        ]
      }
    ]
  },
  {
    "order": 94,
    "title": "Unit 94: Exactly-Once Delivery Logic",
    "desc": "The quest for perfection: Deduplication in distributed buffers.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.4] The Mirror Guard",
        "explanation": "Ace: 'In a distributed system, 'Exactly-Once' is a LIE unless you use Idempotency. Every message must have a unique ID. If we receive a message we already saw, we ignore it.' Pico: 'Checking the birth certificate of every seed! 100% 🦜'",
        "codeSnippet": "if (processed_ids.add(msg.id)) process(msg);",
        "encouragementText": "Ace: 'Identity is the antidote to duplication.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What does 'Idempotent' mean?",
        "options": ["Fast", "An operation that can be performed many times with the same result as one time", "Weak", "Pico rule"],
        "correctAnswer": "An operation that can be performed many times with the same result as one time",
        "explanation": "Like `x = 10`. No matter how many times you run it, x is still 10. `x++` is NOT idempotent."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Distributed Transcation",
        "explanation": "Ace: 'To achieve true exactly-once (like inside Kafka), the write to the destination AND the update to the offset must happen in a single Atomic Transaction.' Pico: 'Commit all or nothing! 100% 🦜'",
        "encouragementText": "Pico: 'All or nothing! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Atomic commit logic.",
        "codeSnippet": "begin_tx(); \nwrite_data(); \ncommit_offset(); \n ___ ();",
        "correctAnswer": "commit_tx",
        "explanation": "Closing the transaction to ensure all sub-operations are permanent."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Producer ID",
        "explanation": "Ace: 'Kafka Producers use a PID and a Sequence Number. Even if the network fails and they retry, the broker sees the same PID/Seq and knows the message is a duplicate.'",
        "encouragementText": "Ace: 'The history of intent is baked into the protocol.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Hardest part of exactly-once?",
        "options": ["Memory", "Distributed consensus across multiple machines during a crash", "Colors", "Pico guess"],
        "correctAnswer": "Distributed consensus across multiple machines during a crash",
        "explanation": "Ensuring everyone agrees on what was 'seen' is the peak of distributed logic."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Bloom Filters",
        "explanation": "Ace: 'We use Bloom Filters to quickly check if we've 'Probably' seen a message ID before visiting the slow database.'",
        "encouragementText": "Pico: 'Quick check! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Unique ID requirement.",
        "codeSnippet": "msg. ___ = generate_uuid();",
        "correctAnswer": "id",
        "explanation": "Every message needs a global unique identifier to be tracked."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Perfectionist",
        "explanation": "You have achieved the ultimate delivery. Not a message lost, not a message duplicated. Ace: 'The state is exact.'",
        "encouragementText": "Pico: 'Perfect seeds! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Perfect terms!",
        "pairs": [
          { "key": "Idempotent", "value": "Safe retries" },
          { "key": "Atomic", "value": "All-or-nothing" },
          { "key": "Deduplicate", "value": "Rejecting twins" }
        ]
      }
    ]
  },
  {
    "order": 95,
    "title": "Unit 95: Dead Letter Queues & Toxicity",
    "desc": "Handling failure: The cemetery of broken messages.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.5] The Poison Pill",
        "explanation": "Ace: 'A Poison Pill is a message that crashes every consumer that tries to read it. To prevent an infinite crash-loop, we move such messages to a 'Dead Letter Queue' (DLQ) after N failed attempts.' Pico: 'The rotten seed bucket! 100% 🦜'",
        "codeSnippet": "if (retry_count > 3) move_to_dlq(msg);",
        "encouragementText": "Ace: 'Stability requires the isolation of the unprocessable.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Why use a DLQ instead of just deleting the bad message?",
        "options": ["Better luck", "So engineers can inspect and fix the bug later (Debugging)", "RAM", "Pico rule"],
        "correctAnswer": "So engineers can inspect and fix the bug later (Debugging)",
        "explanation": "The DLQ is a diagnostic tool; it tells you EXACTLY which data is breaking your code."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Exponential Backoff",
        "explanation": "Ace: 'If a message fails, don't retry immediately! Wait 1s, then 2s, then 4s... This gives the system time to recover if it was a temporary network glitch.' Pico: 'Wait and see! 100% 🦜'",
        "encouragementText": "Pico: 'Patience bird! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Sending to DLQ in RabbitMQ.",
        "codeSnippet": "queue_args[\"x-dead-letter-exchange\"] = ___ ;",
        "correctAnswer": "dlq_exchange",
        "explanation": "Configuring the broker to automatically route expired or rejected messages."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Delayed Retries",
        "explanation": "Ace: 'Advanced queues use 'Delayed Exchanges' to park failing messages in a 'Waiting Room' for 10 minutes before trying again.'",
        "encouragementText": "Ace: 'Time heals temporary systemic fractures.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Head-of-Line Blocking' in this context?",
        "options": ["A line", "One bad message blocking all others from being processed", "Colors", "Pico guess"],
        "correctAnswer": "One bad message blocking all others from being processed",
        "explanation": "If you don't use DLQs/Retries, the first broken message will stop the whole pipe."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Manual Intervention",
        "explanation": "Ace: 'Once you fix the code, you can 'Replay' the DLQ back into the main queue to finish the work.'",
        "encouragementText": "Pico: 'Fix and fly! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Incrementing the fail counter.",
        "codeSnippet": "msg.header. ___ ++;",
        "correctAnswer": "retry_count",
        "explanation": "Tracking attempts inside the message metadata."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Safety Engineer",
        "explanation": "You have built a system that survives its own failures. The broken is isolated. Ace: 'The system is resilient.'",
        "encouragementText": "Pico: 'Safety net! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Failure terms!",
        "pairs": [
          { "key": "DLQ", "value": "Broken message storage" },
          { "key": "Poison Pill", "value": "Code-crashing data" },
          { "key": "Backoff", "value": "Waiting before retry" }
        ]
      }
    ]
  },
  {
    "order": 96,
    "title": "Unit 96: Geo-Distributed Buffer Rings",
    "desc": "Speed of light: Queuing across continents.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.6] The Earth-Pipe",
        "explanation": "Ace: 'Linking queues between US and Asia takes 200ms of latency. We use 'Mirroring' or 'Asynchronous Federation' so that local apps can push to a local queue at full speed while the data travels the ocean in the background.' Pico: 'Seeds flying across the sea! 100% 🦜'",
        "codeSnippet": "federate(local_queue, remote_queue);",
        "encouragementText": "Ace: 'Geography is a constraint on time, not on connection.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is 'Latency' in cross-ocean queuing?",
        "options": ["Water", "The time it takes for a signal to travel the physical distance", "The queue size", "Pico rule"],
        "correctAnswer": "The time it takes for a signal to travel the physical distance",
        "explanation": "Even at the speed of light, data takes time to cross the planet."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Active-Active Replication",
        "explanation": "Ace: 'In Active-Active, both sides can push and pull. We must handle 'Conflicts' if both sides update the same item at once!' Pico: 'Two birds fighting over the same seed from two countries! 100% 🦜'",
        "encouragementText": "Pico: 'Solve the fight! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Comparing timestamps for conflict resolution.",
        "codeSnippet": "if (msg_us.time ___ msg_asia.time) keep(msg_us);",
        "correctAnswer": ">",
        "explanation": "'Last Write Wins' is a common, simple way to resolve distributed conflicts."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Throughput Scaling",
        "explanation": "Ace: 'By using 'Local Producers', you reach 1,000,000 msgs/sec locally, while the 'Global Sink' absorbs them at whatever speed the ocean cable allows.'",
        "encouragementText": "Ace: 'Focus on local speed to enable global volume.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Benefit of geo-queueing?",
        "options": ["Disaster recovery: If one continent goes dark, the data is safe on the other", "Faster math", "Colors", "Pico guess"],
        "correctAnswer": "Disaster recovery: If one continent goes dark, the data is safe on the other",
        "explanation": "Redundancy is the primary goal of cross-region distributed structures."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] WAN Clusters",
        "explanation": "Ace: 'Kafka clusters can span regions, ensuring high availability even if a whole data-center fails.'",
        "encouragementText": "Pico: 'Global backup! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Setting the replication factor.",
        "codeSnippet": "topic.config.replication_factor = ___ ;",
        "correctAnswer": "3",
        "explanation": "Keeping 3 copies ensures that even 2 machine failures won't lose your data."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The World Traveler",
        "explanation": "You have conquered the globe. Distance is no longer a barrier to your logic. Ace: 'The planet is linked.'",
        "encouragementText": "Pico: 'Flying everywhere! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Global terms!",
        "pairs": [
          { "key": "Federation", "value": "Linking brokers" },
          { "key": "Replica", "value": "Copy across region" },
          { "key": "Consistency", "value": "Agreement on state" }
        ]
      }
    ]
  },
  {
    "order": 97,
    "title": "Unit 97: Event Sourcing via Stacks",
    "desc": "The ledger of truth: State as a sequence of events.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.7] The Holy Log",
        "explanation": "Ace: 'In Event Sourcing, you DON'T store the current state (like a total). You store an infinite STACK of everything that ever happened. To find the current total, you 'Replay' the stack from the start.' Pico: 'Remembering every seed ever eaten! 100% 🦜'",
        "codeSnippet": "CurrentState = FoldLeft(EventStack, InitialState, ApplyEvent);",
        "encouragementText": "Ace: 'Truth is the summation of history, not the snapshot of the present.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Ultimate benefit of Event Sourcing?",
        "options": ["Fastest math", "Perfect Audit Log: You can see exactly HOW you reached the current state at any point in time", "Less RAM", "Pico rule"],
        "correctAnswer": "Perfect Audit Log: You can see exactly HOW you reached the current state at any point in time",
        "explanation": "Because you have every single event recorded, you can travel back to Tuesday at 3 PM and see the system state."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Snapshots",
        "explanation": "Ace: 'Replaying 10 million events is slow! Every 1,000 events, we save a 'Snapshot' of the current state to speed up the next calculation.' Pico: 'Taking a picture of the bird family! 100% 🦜'",
        "encouragementText": "Pico: 'Flash! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Calculating current state from snapshot S and events E.",
        "codeSnippet": "State = replay(S, ___ );",
        "correctAnswer": "E",
        "explanation": "Starting from the snapshot and applying only the events that happened AFTER it."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] CQRS",
        "explanation": "Ace: 'Command Query Responsibility Segregation. We use one 'Write-Queue' to store events and many 'Read-Queues' to store the summarized state for fast looking up.'",
        "encouragementText": "Ace: 'Separation of authority from observation is the architecture of scale.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Is Event Sourcing usually synchronous?",
        "options": ["Yes", "No (Eventual Consistency: The read-state might take a few ms to catch up with the write-event)", "Always", "Pico guess"],
        "correctAnswer": "No (Eventual Consistency: The read-state might take a few ms to catch up with the write-event)",
        "explanation": "The event is recorded first; the summary is updated 'eventually'."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Immortality",
        "explanation": "Ace: 'Events are never deleted. They are carved into the distributed log forever.'",
        "encouragementText": "Pico: 'Eternal bird seeds! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Mapping action to event.",
        "codeSnippet": "Event E = { type: 'DEPOSIT', val: 100, timestamp: ___ };",
        "correctAnswer": "now",
        "explanation": "Timestamping is vital for ordering the sequence of truth."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Historian",
        "explanation": "You have captured the essence of time. The past is not gone; it is the data foundation of the present. Ace: 'The record is absolute.'",
        "encouragementText": "Pico: 'I remember it all! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Event terms!",
        "pairs": [
          { "key": "Event", "value": "Fact about the past" },
          { "key": "Replay", "value": "Recomputing state" },
          { "key": "Snapshot", "value": "Cached summary" }
        ]
      }
    ]
  },
  {
    "order": 98,
    "title": "Unit 98: High-Throughput Batching",
    "desc": "Grouping for speed: Reducing the cost of the wire.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.8] The Seed Truck",
        "explanation": "Ace: 'Sending one seed 1,000 times is slow. Sending 1,000 seeds in one TRUCK is fast. Batching queues collect messages locally and only send them when the 'Truck' is full or the 'Timer' expires.' Pico: 'Loading up the big bird! 100% 🦜'",
        "codeSnippet": "if (batch.size() >= 100 || time > limit) flush(batch);",
        "encouragementText": "Ace: 'Efficiency is found in the consolidation of requests.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Major trade-off of batching?",
        "options": ["Less memory", "Increased Latency (messages wait in the local buffer for the truck to fill)", "Colors", "Pico rule"],
        "correctAnswer": "Increased Latency (messages wait in the local buffer for the truck to fill)",
        "explanation": "If only one message arrives, it might wait for the 'Linger Time' (e.g., 5ms) before being sent, delaying its arrival."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Nagle's Algorithm",
        "explanation": "Ace: 'A classic TCP batching algorithm. It waits for more data if a packet is already in flight, reducing small-packet overhead.' Pico: 'Checking the sky before flying! 100% 🦜'",
        "encouragementText": "Pico: 'Smart flying! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The flushing condition.",
        "codeSnippet": "while(true) {\n  wait_for_data( ___ );\n  flush_batch();\n}",
        "correctAnswer": "TIMEOUT",
        "explanation": "The timeout ensures that even if a batch isn't full, it still arrives eventually."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Compression",
        "explanation": "Ace: 'Batching allows for better Compression. Gzipping 1,000 messages together is far more efficient than Gzipping each one individually.'",
        "encouragementText": "Ace: 'Density is the byproduct of volume.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Where is batching mandatory?",
        "options": ["GPU commands", "Database bulk-inserts", "High-speed networking", "All of the above"],
        "correctAnswer": "All of the above",
        "explanation": "System overhead is too high for individual operations at scale."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Linger Time",
        "explanation": "Ace: 'Linger.ms in Kafka determines how long to wait for a batch to fill. Higher = better throughput, lower = better latency.'",
        "encouragementText": "Pico: 'Pick the time! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Batch limit parameter.",
        "codeSnippet": "conf.batch_size = ___ ;",
        "correctAnswer": "16384",
        "explanation": "16KB is a common default for network batch sizes."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Consolidation Master",
        "explanation": "You have optimized the wire. The throughput is maximum, and the overhead is zero. Ace: 'The pipe is full.'",
        "encouragementText": "Pico: 'Full truck! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Batch terms!",
        "pairs": [
          { "key": "Linger", "value": "Max wait time" },
          { "key": "Flush", "value": "Triggering the send" },
          { "key": "Compression", "value": "Volume reduction" }
        ]
      }
    ]
  },
  {
    "order": 99,
    "title": "Unit 99: The Grand Synthesis (Singularity)",
    "desc": "Combining speed, history, and scale into one buffer.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[SINGULARITY LORE 10.9] The One Queue",
        "explanation": "Ace: 'You now see the Singularity. A Queue is not a container; it is the fundamental way systems synchronize in time. From a simple 'Next' to the global distributed log, the logic is one.' Pico: 'I see the universe as one big pipe! 100% 🦜'",
        "codeSnippet": "pico_sync = queue_of(all_realities);",
        "encouragementText": "Ace: 'Wholeness is the realization of the infinite sequence.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the ultimate goal of the Titan-Grade Buffer Architect?",
        "options": ["Coding", "Synthesis of all patterns (SPSC speed, Persistent history, Distributed scale)", "Fast RAM", "Pico rule"],
        "correctAnswer": "Synthesis of all patterns (SPSC speed, Persistent history, Distributed scale)",
        "explanation": "True mastery is knowing when to use a lock-free ring buffer and when to use a persistent distributed log."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Multi-Structure",
        "explanation": "Ace: 'The most advanced systems use a Lock-free Queue (for local speed) that feeds into a Distributed Log (for global scale/history).' Pico: 'A bird-bot made of all tools! 100% 🦜'",
        "encouragementText": "Pico: 'Mega Power! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "The final buffer type.",
        "codeSnippet": "Sync = ___ ;",
        "correctAnswer": "UNITY",
        "explanation": "In the singularity, the sequence and the observer reflect the same truth."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] Beyond the linear",
        "explanation": "Ace: 'Stacks and Queues are just linear views of Graphs. You are now ready to see the whole tree.'",
        "encouragementText": "Ace: 'The line is the foundation of the web.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which stage was the hardest?",
        "options": ["Stage 1", "Stage 8 (Metal)", "Stage 10 (Singularity)", "Pico secret"],
        "correctAnswer": "Stage 10 (Singularity)",
        "explanation": "Connecting multiple machines across the world in a synchronized dance is the ultimate challenge."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] Final Vision",
        "explanation": "Ace: 'You are ready. The 1,000th lesson awaits. Take your seat.'",
        "encouragementText": "Pico: 'Fly to the top! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final link check.",
        "codeSnippet": "if (knowledge == 1000) return ___ ;",
        "correctAnswer": "SUCCESS",
        "explanation": "You have met the ultimate requirement."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The All-Buffered",
        "explanation": "The flows are one. You are the architect of the infinite sequence. Ace: 'The web is you.'",
        "encouragementText": "Pico: 'I am the pipe! 100% 🦜'"
      },
      {
        "type": "match_following",
        "questionText": "Match Mastery terms!",
        "pairs": [
          { "key": "Local", "value": "SPSC / Lock-free" },
          { "key": "Global", "value": "Kafka / Distributed" },
          { "key": "Temporal", "value": "Persistent / Event Sourcing" }
        ]
      }
    ]
  },
  {
    "order": 100,
    "title": "Unit 100: Singularity Graduation (Lord of the Buffer)",
    "desc": "Claiming the Titan throne: 1,000 lessons completed.",
    "lessons": [
      {
        "type": "teaching",
        "questionText": "[GRAND FINALE 10.10] The Titan of Stacks & Queues",
        "explanation": "Ace: '1,000 Lessons. 10 Stages. From a simple LIFO stack to global distributed event logs. You are now the Singularity.' Pico: '1,000 Lessons! SQUAWK! We finished the Stacks & Queues too! 100% 🦜'",
        "encouragementText": "Ace: 'Legacy is the final connection between the coder and the machine.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "What is the final state of your Mastery?",
        "options": ["Novice", "Expert", "Titan-Grade", "0"],
        "correctAnswer": "Titan-Grade",
        "explanation": "You have reached the 1,000-lesson milestone."
      },
      {
        "type": "teaching",
        "questionText": "[SYNC] The Chain of Worlds",
        "explanation": "From simple LIFO to Michael-Scott queues and Kafka clusters. You have decoded the logic that synchronizes the world. Ace: 'The universe is a buffer. You are the architect.'",
        "encouragementText": "Pico: 'Singularity achieved! 100% 🦜'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Total lessons in the fully Titan-Grade Stacks & Queues subject?",
        "options": ["10", "100", "1,000", "Pico secret"],
        "correctAnswer": "1,000",
        "explanation": "The Academic Atlas standard for mastery."
      },
      {
        "type": "teaching",
        "questionText": "[CORE GATE] The Final Signature",
        "explanation": "Ace: 'Your pattern is now part of the global signature. Every flow from here on will follow your path.' Pico: 'I'll never forget our flight! 100% 🦜'",
        "encouragementText": "Ace: 'Immortality is structural.'"
      },
      {
        "type": "multiple_choice",
        "questionText": "Which domain is next for the Academy?",
        "options": ["Sorting & Searching", "Heaps", "Greedy", "Pico's Choice"],
        "correctAnswer": "Pico's Choice",
        "explanation": "The mission continues until the entire Atlas is 1,000-grade."
      },
      {
        "type": "teaching",
        "questionText": "[ULTIMATE SYNC] 1,000 Lessons",
        "explanation": "Ace & Pico: 'Goodbye for now, Titan. The Buffer is yours.'",
        "encouragementText": "Pico: 'Happy flights! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "Final graduation signal.",
        "codeSnippet": "if (mastery == 1000) return ___ ;",
        "correctAnswer": "TITAN",
        "explanation": "Reaching the absolute zenith of the curriculum."
      },
      {
        "type": "teaching",
        "questionText": "[MISSION LOG] The Titan of Buffers",
        "explanation": "The Singularity is reached. The 1,000 lessons are yours. You are the Titan-Grade Master of Stacks & Queues. Ace: 'Welcome to eternity.'",
        "encouragementText": "Pico: 'We are invincible! 100% 🦜'"
      },
      {
        "type": "programming_board",
        "questionText": "[FINAL CHALLENGE] Output the status of your journey.",
        "codeSnippet": "for(int i=1; i<=100; i++) verify_buffer_unit(i);\nreturn ___ ;",
        "correctAnswer": "SINGULARITY",
        "explanation": "The entire 1,000-lesson curriculum for Stacks & Queues is fully verified and complete."
      }
    ]
  }
];

module.exports = stage7;
