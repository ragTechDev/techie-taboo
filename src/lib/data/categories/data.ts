// Data Terms - 38 cards
import type { TabooWord } from "../../../types/taboo";

export const dataTabooList: TabooWord[] = [
  {
    index: 1,
    word: "Aggregation",
    taboo: ["Sum", "Count", "Group", "Average", "Total"],
    explanation:
      "Combining multiple data points into a single summary value such as a sum or average.",
    category: "Data",
  },
  {
    index: 2,
    word: "Batch Processing",
    taboo: ["Job", "Schedule", "Bulk", "Cron", "Nightly"],
    explanation:
      "Processing large volumes of data all at once rather than in real time.",
    category: "Data",
  },
  {
    index: 3,
    word: "Business Intelligence",
    taboo: ["Dashboard", "Data", "Insights", "Analytics", "Reporting"],
    explanation:
      "Tools and practices for analyzing data to help businesses make better decisions.",
    category: "Data",
  },
  {
    index: 4,
    word: "Columnar Database",
    taboo: ["Column", "Storage", "Analytics", "Compression", "Query"],
    explanation:
      "A database that groups values by column, making it far faster to scan and summarize millions of records.",
    category: "Data",
  },
  {
    index: 5,
    word: "Data Catalog",
    taboo: ["Metadata", "Inventory", "Discovery", "Search", "Documentation"],
    explanation:
      "A centralized inventory of data assets that helps teams discover and understand available data.",
    category: "Data",
  },
  {
    index: 6,
    word: "Data Lake",
    taboo: ["Storage", "Raw", "Unstructured", "Repository", "Hadoop"],
    explanation:
      "A massive, low-cost store for raw data of any shape, kept as-is until someone needs to process or analyze it.",
    category: "Data",
  },
  {
    index: 7,
    word: "Data Lineage",
    taboo: ["Tracking", "Origin", "Flow", "Metadata", "Audit"],
    explanation:
      "A full audit trail showing where data came from, how it changed, and where it ended up.",
    category: "Data",
  },
  {
    index: 8,
    word: "PostgreSQL",
    taboo: ["Database", "SQL", "Table", "Query", "Relational"],
    explanation:
      "An open-source relational database known for reliability, extensibility, and SQL compliance.",
    category: "Data",
  },
  {
    index: 9,
    word: "Data Pipeline",
    taboo: ["ETL", "Flow", "Process", "Airflow", "Integration"],
    explanation:
      "A series of automated steps that move and transform data from source to destination.",
    category: "Data",
  },
  {
    index: 10,
    word: "Join",
    taboo: ["SQL", "Merge", "Combine", "Tables", "Query"],
    explanation:
      "A database operation that combines rows from two or more tables based on a related column.",
    category: "Data",
  },
  {
    index: 11,
    word: "Data Schema",
    taboo: ["Structure", "Table", "Definition", "Blueprint", "Design"],
    explanation:
      "The structure that defines how data is organized and related within a database.",
    category: "Data",
  },
  {
    index: 12,
    word: "Database Management",
    taboo: ["Admin", "Storage", "Organization", "System", "Control"],
    explanation:
      "The administration and maintenance of database systems to ensure performance and integrity.",
    category: "Data",
  },
  {
    index: 13,
    word: "Denormalization",
    taboo: ["Database", "Performance", "Redundancy", "Join", "Speed"],
    explanation:
      "Intentionally adding redundancy to a database schema to speed up read queries.",
    category: "Data",
  },
  {
    index: 14,
    word: "Elasticsearch",
    taboo: ["Search", "Engine", "Index", "Query", "Document"],
    explanation:
      "A tool for searching and analyzing large volumes of text or log data almost instantly, across many servers.",
    category: "Data",
  },
  {
    index: 15,
    word: "Extract Transform Load",
    taboo: ["Pipeline", "Process", "Workflow", "Migration", "Integration"],
    explanation:
      "A process that extracts data from sources, transforms it, and loads it into a destination system.",
    category: "Data",
  },
  {
    index: 16,
    word: "Foreign Key",
    taboo: ["Database", "Relation", "Reference", "Link", "Join"],
    explanation:
      "A field in a database table that links to the primary key of another table.",
    category: "Data",
  },
  {
    index: 17,
    word: "Data Governance",
    taboo: ["Rules", "Compliance", "Policy", "Oversight", "Quality"],
    explanation:
      "The framework of policies and processes that ensure data quality, security, and proper use.",
    category: "Data",
  },
  {
    index: 18,
    word: "Indexing",
    taboo: ["Database", "Search", "Performance", "Query", "Fast"],
    explanation:
      "Creating data structures that allow faster retrieval of records from a database.",
    category: "Data",
  },
  {
    index: 19,
    word: "Data Quality",
    taboo: ["Accuracy", "Validation", "Cleansing", "Integrity", "Completeness"],
    explanation:
      "The measure of how accurate, complete, consistent, and reliable data is.",
    category: "Data",
  },
  {
    index: 20,
    word: "Kafka",
    taboo: ["Stream", "Message", "Broker", "Topic", "Publish"],
    explanation:
      "A messaging system that reliably moves huge volumes of real-time events between services at massive scale.",
    category: "Data",
  },
  {
    index: 21,
    word: "Data Lakehouse",
    taboo: ["Databricks", "Warehouse", "Lake", "Delta", "Analytics"],
    explanation:
      "A storage system that accepts raw data of any kind yet also enforces structure for reliable, fast querying.",
    category: "Data",
  },
  {
    index: 22,
    word: "Mining",
    taboo: ["Extract", "Dig", "Pattern", "Discovery", "Insights"],
    explanation:
      "The process of discovering patterns and insights from large datasets using statistical techniques.",
    category: "Data",
  },
  {
    index: 23,
    word: "Normalization",
    taboo: ["Database", "Redundancy", "Tables", "Relations", "Normal Form"],
    explanation:
      "Organizing a database to eliminate redundancy and ensure data integrity.",
    category: "Data",
  },
  {
    index: 24,
    word: "NoSQL",
    taboo: ["Database", "MongoDB", "Document", "Schema", "Table"],
    explanation:
      "A category of databases that store data in non-tabular formats, suited for flexible or large-scale data.",
    category: "Data",
  },
  {
    index: 25,
    word: "Partitioning",
    taboo: ["Split", "Divide", "Performance", "Table", "Range"],
    explanation:
      "Dividing a large dataset or table into smaller, more manageable pieces for performance.",
    category: "Data",
  },
  {
    index: 26,
    word: "Data Mart",
    taboo: ["Warehouse", "Subset", "Department", "Analytics", "Query"],
    explanation:
      "A focused subset of a data warehouse designed for the needs of a specific team or business area.",
    category: "Data",
  },
  {
    index: 27,
    word: "Predictive Analytics",
    taboo: ["Forecast", "Model", "Trend", "Insights", "Future"],
    explanation:
      "Using historical data and statistical models to forecast future outcomes.",
    category: "Data",
  },
  {
    index: 28,
    word: "Primary Key",
    taboo: ["Database", "Unique", "Identifier", "Row", "ID"],
    explanation: "A unique identifier for each record in a database table.",
    category: "Data",
  },
  {
    index: 29,
    word: "Protection",
    taboo: ["Security", "Guard", "Safe", "Confidential", "Private"],
    explanation:
      "Safeguarding data from unauthorized access, corruption, or loss.",
    category: "Data",
  },
  {
    index: 30,
    word: "RabbitMQ",
    taboo: ["Topic", "Bunny", "Broker", "Exchange", "Publish"],
    explanation:
      "A middleman service that receives messages from one application and delivers them to another, reliably and in order.",
    category: "Data",
  },
  {
    index: 31,
    word: "Redis",
    taboo: ["Database", "Cache", "Key-Value", "Access", "Memory"],
    explanation:
      "A data store that keeps everything in RAM, making reads and writes dramatically faster than a traditional database.",
    category: "Data",
  },
  {
    index: 32,
    word: "Replication",
    taboo: ["Database", "Copy", "Backup", "Sync", "Mirror"],
    explanation:
      "Copying data from one server to one or more others to ensure availability and redundancy.",
    category: "Data",
  },
  {
    index: 33,
    word: "Sharding",
    taboo: ["Database", "Partition", "Horizontal", "Split", "Distributed"],
    explanation:
      "Splitting a database across multiple servers by rows so each server handles only its share of the load.",
    category: "Data",
  },
  {
    index: 34,
    word: "SQLite",
    taboo: ["Database", "SQL", "File", "Lightweight", "Table"],
    explanation:
      "A fully featured relational database packed into a single file, requiring no separate server to run.",
    category: "Data",
  },
  {
    index: 35,
    word: "Stream Processing",
    taboo: ["Real-time", "Kafka", "Flow", "Event", "Continuous"],
    explanation:
      "Continuously processing data as it arrives rather than storing it first.",
    category: "Data",
  },
  {
    index: 36,
    word: "Time Series",
    taboo: ["Temporal", "Timestamp", "Sequential", "Trend", "Historical"],
    explanation:
      "Data points indexed in time order, commonly used for metrics, logs, and sensor readings.",
    category: "Data",
  },
  {
    index: 37,
    word: "Data Warehouse",
    taboo: ["Storage", "Analytics", "ETL", "Lake", "Repository"],
    explanation:
      "A centralized repository that stores structured historical data for reporting and analysis.",
    category: "Data",
  },
  {
    index: 38,
    word: "Star Schema",
    taboo: ["Database", "Design", "Fact", "Dimension", "Model"],
    explanation:
      "A reporting database layout where one central table of measurable events links out to tables of descriptive context.",
    category: "Data",
  },
  {
    index: 39,
    word: "Snowflake Schema",
    taboo: ["Database", "Design", "Normalized", "Dimension", "Model"],
    explanation:
      "A reporting layout like the star schema, but descriptive tables are broken into sub-tables to reduce duplication.",
    category: "Data",
  },
  {
    index: 40,
    word: "OLAP",
    taboo: ["Analytical", "Cube", "Processing", "Query", "Multidimensional"],
    explanation:
      "A database approach built for slicing and summarizing large historical datasets to answer complex business questions.",
    category: "Data",
  },
  {
    index: 41,
    word: "OLTP",
    taboo: ["Transaction", "Processing", "Database", "Real-time", "Insert"],
    explanation:
      "A database approach built to handle many small, concurrent read-write operations, like purchases or logins, reliably and fast.",
    category: "Data",
  },
  {
    index: 42,
    word: "Data Migration",
    taboo: ["Transfer", "Move", "Database", "Import", "Export"],
    explanation:
      "Moving data from one system or format to another, typically during an upgrade or integration.",
    category: "Data",
  },
  {
    index: 43,
    word: "Data Masking",
    taboo: ["Security", "Privacy", "Hide", "Anonymize", "Protect"],
    explanation:
      "Replacing sensitive data with realistic but fictitious values to protect privacy.",
    category: "Data",
  },
  {
    index: 44,
    word: "Data Cleansing",
    taboo: ["Quality", "Fix", "Scrub", "Purify", "Validation"],
    explanation:
      "The process of detecting and correcting inaccurate or corrupt records in a dataset.",
    category: "Data",
  },
  {
    index: 45,
    word: "Materialized View",
    taboo: ["Database", "Query", "Cache", "Precomputed", "Table"],
    explanation:
      "A database object that stores the precomputed result of a query for faster access.",
    category: "Data",
  },
  {
    index: 46,
    word: "Database Transaction",
    taboo: ["ACID", "Commit", "Rollback", "Atomic", "Query"],
    explanation:
      "A sequence of database operations treated as a single unit that either fully succeeds or fails.",
    category: "Data",
  },
  {
    index: 47,
    word: "ACID Properties",
    taboo: ["Database", "Transaction", "Atomic", "Consistent", "Isolated"],
    explanation:
      "A set of guarantees (atomicity, consistency, isolation, durability) for reliable database transactions.",
    category: "Data",
  },
  {
    index: 48,
    word: "Data Integrity",
    taboo: ["Quality", "Accuracy", "Valid", "Constraint", "Consistent"],
    explanation:
      "Ensuring data remains accurate, consistent, and trustworthy throughout its lifecycle.",
    category: "Data",
  },
  {
    index: 49,
    word: "Backup and Recovery",
    taboo: ["Restore", "Save", "Copy", "Disaster", "Database"],
    explanation:
      "The process of copying data and restoring it in the event of loss or failure.",
    category: "Data",
  },
  {
    index: 50,
    word: "Query Optimization",
    taboo: ["Performance", "Fast", "Database", "Index", "SQL"],
    explanation:
      "Improving database queries to execute faster and use fewer resources.",
    category: "Data",
  },
  {
    index: 51,
    word: "Stored Procedure",
    taboo: ["Database", "Function", "SQL", "Execute", "Routine"],
    explanation:
      "A precompiled set of SQL statements saved in the database and executed on demand.",
    category: "Data",
  },
  {
    index: 52,
    word: "Data Modeling",
    taboo: ["Design", "Schema", "Structure", "Blueprint", "Diagram"],
    explanation:
      "The process of defining the structure, relationships, and constraints of data in a system.",
    category: "Data",
  },
];
