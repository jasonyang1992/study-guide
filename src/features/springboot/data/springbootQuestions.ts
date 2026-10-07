import type { QuizQuestion } from "../../../types/quiz.types";

export const springbootQuestions: QuizQuestion[] = [
{
    id: "spring-001",
    question: "Which annotation is used for dependency injection in Spring?",
    options: ["@Inject", "@Autowired", "@Bean", "@Component"],
    answer: "@Autowired",
  },
  {
    id: "spring-002",
    question: "Which annotation marks a class as a Spring component?",
    options: ["@Component", "@Service", "@Repository", "@All the answers"],
    answer: "@All the answers",
  },
  {
    id: "spring-003",
    question: "Which annotation is used to build REST APIs in Spring Boot?",
    options: ["@RestController", "@Controller", "@Api", "@WebController"],
    answer: "@RestController",
  },
  {
    id: "spring-004",
    question: "Which annotation handles HTTP GET requests?",
    options: ["@Get", "@GetMapping", "@RequestGet", "@Fetch"],
    answer: "@GetMapping",
  },
  {
    id: "spring-005",
    question: "Which annotation handles HTTP POST requests?",
    options: ["@PostMapping", "@SendMapping", "@RequestPost", "@Post"],
    answer: "@PostMapping",
  },
  {
    id: "spring-006",
    question: "Which file is commonly used for configuration in Spring Boot?",
    options: ["application.properties", "config.xml", "spring.conf", "settings.xml"],
    answer: "application.properties",
  },
  {
    id: "spring-007",
    question: "Which annotation is used to inject values from properties?",
    options: ["@Property", "@Value", "@Config", "@InjectValue"],
    answer: "@Value",
  },
  {
    id: "spring-008",
    question: "Which Spring module is used to create web applications?",
    options: ["Spring MVC", "Spring Data", "Spring Security", "Spring Batch"],
    answer: "Spring MVC",
  },
  {
    id: "spring-009",
    question: "Which annotation is used to define a service layer component?",
    options: ["@Controller", "@Service", "@Repository", "@Component"],
    answer: "@Service",
  },
  {
    id: "spring-010",
    question: "Which annotation is used to define a repository layer component?",
    options: ["@Repository", "@Component", "@Data", "@DAO"],
    answer: "@Repository",
  },
  {
    id: "spring-011",
    question: "Which annotation maps URL path variables?",
    options: ["@PathVariable", "@PathParam", "@Variable", "@UrlVariable"],
    answer: "@PathVariable",
  },
  {
    id: "spring-012",
    question: "Which annotation maps query parameters?",
    options: ["@RequestParam", "@QueryParam", "@Param", "@InputParam"],
    answer: "@RequestParam",
  },
  {
    id: "spring-013",
    question: "Which annotation is used to define a bean manually?",
    options: ["@Bean", "@Component", "@Service", "@Inject"],
    answer: "@Bean",
  },
  {
    id: "spring-014",
    question: "Which container manages Spring beans?",
    options: ["Spring IoC Container", "Servlet Container", "JVM", "Tomcat"],
    answer: "Spring IoC Container",
  },
  {
    id: "spring-015",
    question: "What does IoC stand for in Spring?",
    options: [
      "Inversion of Control",
      "Injection of Code",
      "Instance of Class",
      "Input of Configuration",
    ],
    answer: "Inversion of Control",
  },
  {
    id: "spring-016",
    question: "Which annotation enables auto configuration in Spring Boot?",
    options: [
      "@EnableAutoConfiguration",
      "@AutoConfig",
      "@EnableConfig",
      "@AutoEnable",
    ],
    answer: "@EnableAutoConfiguration",
  },
  {
    id: "spring-017",
    question: "Which dependency is commonly used for database access?",
    options: ["Spring JDBC", "Spring Data JPA", "Hibernate", "All the answers"],
    answer: "All the answers",
  },
  {
    id: "spring-018",
    question: "Which annotation is used to enable scheduling?",
    options: [
      "@EnableScheduling",
      "@Schedule",
      "@EnableTasks",
      "@ScheduledTask",
    ],
    answer: "@EnableScheduling",
  },
  {
    id: "spring-019",
    question: "Which annotation is used to run scheduled tasks?",
    options: ["@Task", "@Scheduled", "@ScheduleRun", "@Timer"],
    answer: "@Scheduled",
  },
  {
    id: "spring-020",
    question: "Which annotation enables caching in Spring?",
    options: ["@EnableCaching", "@CacheEnable", "@EnableCache", "@CacheOn"],
    answer: "@EnableCaching",
  },
  {
    id: "spring-021",
    question: "Which annotation marks transactional methods?",
    options: ["@Transactional", "@Transaction", "@Commit", "@Rollback"],
    answer: "@Transactional",
  },
  {
    id: "spring-022",
    question: "Which annotation defines request mapping at class level?",
    options: ["@RequestMapping", "@ControllerMapping", "@UrlMapping", "@Mapping"],
    answer: "@RequestMapping",
  },
  {
    id: "spring-023",
    question: "Which Spring project simplifies database operations?",
    options: ["Spring Data", "Spring Batch", "Spring Cloud", "Spring Integration"],
    answer: "Spring Data",
  },
  {
    id: "spring-024",
    question: "Which annotation is used to enable JPA repositories?",
    options: [
      "@EnableJpaRepositories",
      "@JpaRepositories",
      "@EnableJpa",
      "@EnableRepo",
    ],
    answer: "@EnableJpaRepositories",
  },
  {
    id: "spring-025",
    question: "Which server is embedded by default in Spring Boot?",
    options: ["Tomcat", "Jetty", "Undertow", "GlassFish"],
    answer: "Tomcat",
  },
  {
    id: "spring-026",
    question: "Which annotation maps HTTP PUT requests?",
    options: ["@PutMapping", "@UpdateMapping", "@RequestPut", "@ModifyMapping"],
    answer: "@PutMapping",
  },
  {
    id: "spring-027",
    question: "Which annotation maps HTTP DELETE requests?",
    options: [
      "@DeleteMapping",
      "@RemoveMapping",
      "@RequestDelete",
      "@EraseMapping",
    ],
    answer: "@DeleteMapping",
  },
  {
    id: "spring-028",
    question: "Which annotation validates request body objects?",
    options: ["@Valid", "@Validate", "@Check", "@ValidatedBody"],
    answer: "@Valid",
  },
  {
    id: "spring-029",
    question: "Which annotation is used to inject configuration properties into a class?",
    options: [
      "@ConfigurationProperties",
      "@PropertySource",
      "@Value",
      "@InjectProperties",
    ],
    answer: "@ConfigurationProperties",
  },
  {
    id: "spring-030",
    question: "Which Spring Boot starter is used for building web applications?",
    options: [
      "spring-boot-starter-web",
      "spring-web",
      "spring-mvc",
      "spring-boot-web",
    ],
    answer: "spring-boot-starter-web",
  },
  {
    id: "spring-031",
    question: "Which annotation enables Spring Security configuration?",
    options: [
      "@EnableWebSecurity",
      "@EnableSecurity",
      "@SecurityConfig",
      "@EnableAuth",
    ],
    answer: "@EnableWebSecurity",
  },
  {
    id: "spring-032",
    question: "Which annotation is used to define configuration classes?",
    options: ["@Configuration", "@Config", "@SpringConfig", "@BeanConfig"],
    answer: "@Configuration",
  },
  {
    id: "spring-033",
    question: "Which interface is used for asynchronous execution in Spring?",
    options: ["Callable", "Future", "Runnable", "All the answers"],
    answer: "All the answers",
  },
  {
    id: "spring-034",
    question: "Which annotation enables async processing?",
    options: ["@EnableAsync", "@AsyncEnable", "@AsyncConfig", "@EnableThreads"],
    answer: "@EnableAsync",
  },
  {
    id: "spring-035",
    question: "Which annotation marks a method to run asynchronously?",
    options: ["@Async", "@Thread", "@Background", "@Future"],
    answer: "@Async",
  },
  {
    id: "spring-036",
    question: "Which annotation handles exceptions globally in Spring REST?",
    options: [
      "@ControllerAdvice",
      "@ExceptionHandler",
      "@RestException",
      "@GlobalException",
    ],
    answer: "@ControllerAdvice",
  },
  {
    id: "spring-037",
    question: "Which annotation handles specific exceptions?",
    options: [
      "@ExceptionHandler",
      "@ErrorHandler",
      "@CatchException",
      "@HandleError",
    ],
    answer: "@ExceptionHandler",
  },
  {
    id: "spring-038",
    question: "Which Spring module is used for microservices configuration management?",
    options: [
      "Spring Cloud Config",
      "Spring Batch",
      "Spring Integration",
      "Spring Messaging",
    ],
    answer: "Spring Cloud Config",
  },
  {
    id: "spring-039",
    question: "Which annotation exposes REST repositories automatically?",
    options: [
      "@RepositoryRestResource",
      "@RestRepository",
      "@ExposeRepository",
      "@ApiRepository",
    ],
    answer: "@RepositoryRestResource",
  },
  {
    id: "spring-040",
    question: "Which annotation is used for cross-origin requests?",
    options: ["@CrossOrigin", "@AllowOrigin", "@EnableCors", "@Cors"],
    answer: "@CrossOrigin",
  },
  {
    id: "spring-041",
    question: "Which Spring project provides distributed tracing?",
    options: [
      "Spring Cloud Sleuth",
      "Spring Monitor",
      "Spring Trace",
      "Spring Logger",
    ],
    answer: "Spring Cloud Sleuth",
  },
  {
    id: "spring-042",
    question: "Which Spring module provides circuit breaker functionality?",
    options: [
      "Spring Cloud CircuitBreaker",
      "Spring Retry",
      "Spring Fault",
      "Spring Safe",
    ],
    answer: "Spring Cloud CircuitBreaker",
  },
  {
    id: "spring-043",
    question: "Which annotation is used to define profiles in Spring?",
    options: ["@Profile", "@Environment", "@ActiveProfile", "@Env"],
    answer: "@Profile",
  },
  {
    id: "spring-044",
    question: "Which annotation activates profiles in tests?",
    options: ["@ActiveProfiles", "@TestProfile", "@EnableProfile", "@UseProfile"],
    answer: "@ActiveProfiles",
  },
  {
    id: "spring-045",
    question: "Which annotation disables Spring Boot auto configuration?",
    options: [
      "@EnableAutoConfiguration(exclude=...)",
      "@DisableAutoConfig",
      "@StopAutoConfig",
      "@NoAutoConfig",
    ],
    answer: "@EnableAutoConfiguration(exclude=...)",
  },
  {
    id: "spring-046",
    question:
      "Which Spring Boot tool provides production-ready features like metrics and health checks?",
    options: [
      "Spring Boot Actuator",
      "Spring Monitor",
      "Spring Metrics",
      "Spring Watch",
    ],
    answer: "Spring Boot Actuator",
  },
  {
    id: "spring-047",
    question: "Which endpoint shows application health in Actuator?",
    options: [
      "/actuator/health",
      "/health",
      "/actuator/status",
      "/status",
    ],
    answer: "/actuator/health",
  },
  {
    id: "spring-048",
    question: "Which endpoint exposes application metrics in Actuator?",
    options: [
      "/actuator/metrics",
      "/metrics",
      "/actuator/data",
      "/monitor",
    ],
    answer: "/actuator/metrics",
  },
  {
    id: "spring-049",
    question: "Which annotation is used to bind request body JSON to an object?",
    options: ["@RequestBody", "@Body", "@JsonBody", "@BindBody"],
    answer: "@RequestBody",
  },
  {
    id: "spring-050",
    question: "What is the difference between @InjectMock and @Mock?",
    options: [
      "There is no difference",
      "@Mock injects dependencies automatically",
      "@InjectMock creates a mock and injects it into tested class, while @Mock only creates a mock",
      "@InjectMock is used only in Spring Boot",
    ],
    answer:
      "@InjectMock creates a mock and injects it into tested class, while @Mock only creates a mock",
  },
  {
    id: "spring-051",
    question: "What is the difference between @Test and @ParameterizedTest?",
    options: [
      "There is no difference",
      "@Test runs once, @ParameterizedTest runs multiple times with different inputs",
      "@Test requires parameters",
      "@ParameterizedTest runs only integration tests",
    ],
    answer:
      "@Test runs once, @ParameterizedTest runs multiple times with different inputs",
  },
  {
    id: "spring-052",
    question: "When will you use @Before and @After?",
    options: [
      "To inject dependencies",
      "To run setup and cleanup code before and after each test",
      "To configure controllers",
      "To create Spring beans",
    ],
    answer:
      "To run setup and cleanup code before and after each test",
  },
  {
    id: "spring-053",
    question: "@SpringBootApplication combines which 3 annotations?",
    options: [
      "@Controller, @RestController, @Service",
      "@Configuration, @EnableAutoConfiguration, @ComponentScan",
      "@Autowired, @Bean, @Configuration",
      "@Component, @Service, @Repository",
    ],
    answer:
      "@Configuration, @EnableAutoConfiguration, @ComponentScan",
  },
  {
    id: "spring-054",
    question: "What is the difference between @Service and @Component",
    options: [
      "@Component is only for repositories",
      "There is no difference at all",
      "@Service is a specialization of @Component used for service-layer logic",
      "@Service is used for controllers",
    ],
    answer:
      "@Service is a specialization of @Component used for service-layer logic",
  },
  {
    id: "spring-055",
    question: "What is the difference between @Controller and @RestController?",
    options: [
      "They are identical",
      "@Controller returns JSON only",
      "@RestController returns JSON/XML responses, while @Controller returns views",
      "@RestController returns HTML pages",
    ],
    answer:
      "@RestController returns JSON/XML responses, while @Controller returns views",
  },
  {
    id: "spring-056",
    question:
      "What is the difference between @ControllerAdvice and @ExceptionHandler?",
    options: [
      "There is no difference",
      "@ExceptionHandler works only for services",
      "@ExceptionHandler handles exceptions in a controller, @ControllerAdvice handles globally",
      "@ControllerAdvice is only for REST APIs",
    ],
    answer:
      "@ExceptionHandler handles exceptions in a controller, @ControllerAdvice handles globally",
  },
  {
    id: "spring-057",
    question: "What is dependency injection?",
    options: [
      "Injecting SQL into queries",
      "A way to create REST APIs",
      "Manually creating objects inside classes",
      "A design pattern where dependencies are provided by the framework instead of created manually",
    ],
    answer:
      "A design pattern where dependencies are provided by the framework instead of created manually",
  },
  {
    id: "spring-058",
    question: "What is inversion of control?",
    options: [
      "A Java compiler feature",
      "The framework controls object creation and lifecycle instead of the developer",
      "The developer controls the framework",
      "A database optimization technique",
    ],
    answer:
      "The framework controls object creation and lifecycle instead of the developer",
  },
  {
    id: "spring-059",
    question: "What are the advantages of Spring Data JPA over JPA repository?",
    options: [
      "Only works with NoSQL databases",
      "Reduces boilerplate code and automatically implements repository methods",
      "Requires more configuration",
      "Does not support queries",
    ],
    answer:
      "Reduces boilerplate code and automatically implements repository methods",
  },
  {
    id: "spring-060",
    question: "What does the annotation @Id do?",
    options: [
      "Injects dependencies",
      "Marks a field as the primary key of an entity",
      "Defines a REST endpoint",
      "Creates a table",
    ],
    answer: "Marks a field as the primary key of an entity",
  },
  {
    id: "spring-061",
    question: "What does the annotation @Entity do?",
    options: [
      "Defines service logic",
      "Handles exceptions",
      "Creates REST controllers",
      "Marks a class as a JPA entity mapped to a database table",
    ],
    answer:
      "Marks a class as a JPA entity mapped to a database table",
  },
  {
    id: "spring-062",
    question: "Which of the following illustrate good spring boot architecture?",
    options: [
      "Controller -> Repository -> Service",
      "Controller -> Service -> Repository",
      "Service -> Controller -> Repository",
      "Repository -> Controller -> Service",
    ],
    answer: "Controller -> Service -> Repository",
  },
  {
    id: "spring-063",
    question: "Which of the following is correct custom query made in Spring Data JPA?",
    options: [
      '@SQL("SELECT * FROM User")',
      "@Query('SELECT u FROM User u WHERE u.email = ?1')",
      '@Find("User")',
      '@Select("FROM User")',
    ],
    answer: "@Query('SELECT u FROM User u WHERE u.email = ?1')",
  },
  {
    id: "spring-064",
    question: "What does JWT stand for and what does it do?",
    options: [
      "JSON Web Table, used for databases",
      "Java Workflow Token, used for scheduling",
      "JSON Web Token, used for secure authentication and information exchange",
      "Java Web Tool, used for UI development",
    ],
    answer:
      "JSON Web Token, used for secure authentication and information exchange",
  },
  {
    id: "spring-065",
    question: "Are passwords saved in db hashed?",
    options: [
      "Passwords are not stored in databases",
      "Yes, passwords should be stored hashed (e.g., BCrypt)",
      "They should be encrypted and reversible",
      "No, they should be stored in plain text",
    ],
    answer:
      "Yes, passwords should be stored hashed (e.g., BCrypt)",
  },
  {
    id: "spring-066",
    question: "What is the difference between authorization and authentication?",
    options: [
      "They are the same",
      "Authorization verifies identity",
      "Authentication verifies identity, authorization determines permissions",
      "Authentication gives permissions",
    ],
    answer:
      "Authentication verifies identity, authorization determines permissions",
  },
  {
    id: "spring-067",
    question: "What is load balancing and how do we use it?",
    options: [
      "Caching database results",
      "Encrypting requests",
      "Distributing traffic across multiple servers to improve reliability and performance",
      "Running all requests on one server",
    ],
    answer:
      "Distributing traffic across multiple servers to improve reliability and performance",
  },
  {
    id: "spring-068",
    question: "What is gateway api and how do we use it?",
    options: [
      "A frontend routing library",
      "An API Gateway routes requests to microservices and handles concerns like security and rate limiting",
      "A testing framework",
      "A database connection pool",
    ],
    answer:
      "An API Gateway routes requests to microservices and handles concerns like security and rate limiting",
  },
  {
    id: "spring-069",
    question: "What is service discovery and how do we use it?",
    options: [
      "A logging tool",
      "A frontend UI pattern",
      "A mechanism where services automatically find and communicate with each other (e.g., Eureka)",
      "A way to discover database tables",
    ],
    answer:
      "A mechanism where services automatically find and communicate with each other (e.g., Eureka)",
  },
  {
    id: "spring-070",
    question: "What is pom.xml and why is it important in spring boot?",
    options: [
      "A database schema file",
      "The Maven configuration file that manages dependencies, build configuration, and plugins",
      "A Spring controller configuration",
      "A Java source file",
    ],
    answer:
      "The Maven configuration file that manages dependencies, build configuration, and plugins",
  },
  {
    id: "spring-071",
    question: "What is the purpose of the Spring BeanFactory?",
    options: [
      "Creates and manages Spring beans",
      "Handles REST routing",
      "Manages database schemas",
      "Controls JVM memory",
    ],
    answer: "Creates and manages Spring beans",
  },
  {
    id: "spring-072",
    question: "Which issue commonly occurs when two Spring beans depend on each other?",
    options: [
      "Bean collision",
      "Circular dependency",
      "Dependency overflow",
      "Bean timeout",
    ],
    answer: "Circular dependency",
  },
  {
    id: "spring-073",
    question: "What problem does @Lazy solve in Spring?",
    options: [
      "Improves query performance",
      "Delays bean initialization until it is needed",
      "Automatically caches responses",
      "Prevents circular dependencies",
    ],
    answer: "Delays bean initialization until it is needed",
  },
  {
    id: "spring-074",
    question: "What is the main purpose of Spring AOP?",
    options: [
      "Handling database transactions",
      "Implementing cross-cutting concerns like logging and security",
      "Creating REST APIs",
      "Managing entity relationships",
    ],
    answer:
      "Implementing cross-cutting concerns like logging and security",
  },
  {
    id: "spring-075",
    question: "What is the Spring Bean lifecycle callback used after dependency injection?",
    options: ["init()", "@PostConstruct", "@Initialize", "@AfterInject"],
    answer: "@PostConstruct",
  },
  {
    id: "spring-076",
    question: "What is the purpose of the @Aspect annotation?",
    options: [
      "Defines a cross-cutting concern like logging or security",
      "Creates database entities",
      "Defines REST endpoints",
      "Injects dependencies",
    ],
    answer:
      "Defines a cross-cutting concern like logging or security",
  },
  {
    id: "spring-077",
    question:
      "Which Spring component is responsible for creating and managing beans at runtime?",
    options: [
      "ApplicationContext",
      "BeanFactory",
      "BeanPostProcessor",
      "BeanDefinition",
    ],
    answer: "ApplicationContext",
  },
  {
    id: "spring-078",
    question:
      "What is the main difference between BeanFactory and ApplicationContext?",
    options: [
      "ApplicationContext provides more enterprise features like AOP and events",
      "BeanFactory is used only for REST APIs",
      "ApplicationContext cannot manage beans",
      "BeanFactory supports auto configuration",
    ],
    answer:
      "ApplicationContext provides more enterprise features like AOP and events",
  },
];
