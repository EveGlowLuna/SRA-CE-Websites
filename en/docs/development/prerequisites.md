---
title: Prerequisites
---

## Preface

SRA Community Edition is an automation tool with Python as the backend and Tauri (Rust + Vue) as the frontend, designed to help players achieve automated operations in the Honkai: Star Rail game.

SRA's development documentation aims to provide detailed guidance for developers to help understand SRA's basic concepts and API usage methods. By reading the documentation, developers can quickly get started with SRA and perform customized development according to their needs.

This tutorial is mostly oriented towards SRA-cli.

Thank you for taking the time to read the SRA development documentation. This documentation will show you SRA development starting from Python basics. If you already have relevant foundations, you can skip the learning part and directly start studying the SRA API.

## Environment

Before starting development, ensure you have:
- **Windows 10 and above (64-bit)**

- IDE (PyCharm as recommended, Visual Studio Code, Zed as optional. However, you can also use other handy IDEs) or Vim/Nano text editor (**not recommended**)
- Python (officially recommended to use 3.11.5, not recommended to use 3.13 or higher versions)
- Rust (no restrictions)

---

# StarRailAssistant Community Edition - Programming Language Learning Roadmap

Detailed learning guide based on the project's actual code structure and technology stack.

## 📘 Python Learning Roadmap

### Phase 1: Python Basics (1-2 weeks)

**Learning Objectives**: Master Python basic syntax and programming concepts

**Core Content**:
1. **Variables and Data Types**
   - Basic types: `int`, `str`, `float`, `bool`
   - Container types: `list`, `tuple`, `dict`, `set`
   - Type conversion and checking
   - Project application: Parameter storage in configuration files

2. **Control Flow**
   - `if/elif/else` conditional statements
   - `for` and `while` loops
   - `break`, `continue`, `pass`
   - Project application: Task flow control (see `task_thread.py`)

3. **Functions**
   - Function definition and calling
   - Parameter passing (positional parameters, keyword parameters, default parameters)
   - Return values and multiple return values
   - `*args` and `**kwargs`
   - Project application: `send_windows_notification()` function in `notify.py`

4. **Exception Handling**
   - `try/except/finally` blocks
   - Custom exceptions
   - Project application: Email sending failure handling (`send_mail()` in `notify.py`)

**Practice Projects**:
- Write simple configuration reading scripts
- Implement basic logging output system

---

### Phase 2: Object-Oriented Programming (2-3 weeks)

**Learning Objectives**: Understand concepts of classes, objects, and inheritance

**Core Content**:
1. **Classes and Objects**
   - Class definition and instantiation
   - Attributes and methods
   - `__init__` constructor
   - Meaning of `self` parameter
   - Project application: `Summary` class (`notify.py`)

2. **Inheritance and Polymorphism**
   - Single inheritance and multiple inheritance
   - Method overriding
   - `super()` function
   - Project application: `BaseTask` base class (all tasks inherit from it)

3. **Special Methods**
   - `__str__` and `__repr__`
   - `__len__`, `__getitem__`
   - Project application: `Summary.__str__()` method

4. **Class Variables and Instance Variables**
   - Differences and usage scenarios
   - Project application: `running_flag` in `TaskManager`

**Practice Projects**:
- Create task base class and specific task classes
- Implement configuration management class

---

### Phase 3: Modules and Packages (1-2 weeks)

**Learning Objectives**: Organize code structure, understand modular development

**Core Content**:
1. **Module Import**
   - `import` and `from...import`
   - Module search path
   - `__name__ == '__main__'`
   - Project application: Import structure in `main.py`

2. **Package Structure**
   - Role of `__init__.py`
   - Package initialization
   - Relative imports and absolute imports
   - Project application: `SRACore/` package structure

3. **Dynamic Import**
   - `importlib` module
   - Project application: `importlib.import_module()` in `task_thread.py`

**Practice Projects**:
- Refactor code into modular structure
- Implement dynamic task loading system

---

### Phase 4: File I/O and Configuration Management (1-2 weeks)

**Learning Objectives**: Handle files and configuration data

**Core Content**:
1. **File Operations**
   - Opening, reading, writing, closing files
   - Context manager `with` statement
   - File modes (`r`, `w`, `a`, `b`)
   - Project application: Reading configuration files

2. **Data Format Processing**
   - JSON: `json.load()` and `json.dump()`
   - TOML: `tomllib.load()` (Python 3.11+)
   - Project application: `tomllib.load(f)` in `task_thread.py`

3. **Configuration File Management**
   - Reading and saving configurations
   - Default configuration handling
   - Project application: `SRACore/config.toml`

**Practice Projects**:
- Implement configuration file read/write system
- Support multiple format configuration files

---

### Phase 5: Multi-threading Programming (2-3 weeks)

**Learning Objectives**: Implement concurrent task execution

**Core Content**:
1. **Threading Basics**
   - `threading` module
   - `Thread` class creation and startup
   - Thread lifecycle
   - Project application: Background task execution

2. **Thread Synchronization**
   - `Lock` mutex
   - `Event` events
   - `Condition` condition variables
   - `Semaphore` semaphores
   - Project application: Task state management

3. **Thread Safety**
   - Shared resource protection
   - Race conditions
   - Deadlock avoidance
   - Project application: `running_flag` in `TaskManager`

4. **Thread Communication**
   - Queue `Queue`
   - Pipe `Pipe`
   - Project application: Inter-task messaging

**Practice Projects**:
- Implement multi-task concurrent execution
- Implement task pause and resume

---

### Phase 6: Logging and Debugging (1 week)

**Learning Objectives**: Implement professional logging system

**Core Content**:
1. **Standard Logging Module**
   - `logging` module basics
   - Log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL)
   - Log formatting

2. **Third-party Logging Library**
   - `loguru` library (used in project)
   - Decorators and context management
   - Log file rotation
   - Project application: `SRACore/util/logger.py`

3. **Debugging Techniques**
   - `pdb` debugger
   - Print debugging
   - Proper use of log levels

**Practice Projects**:
- Integrate `loguru` into project
- Implement structured logging

---

### Phase 7: System Interaction and Automation (2-3 weeks)

**Learning Objectives**: Implement core functionality for game automation

**Core Content**:
1. **Process Management**
   - `subprocess` module
   - Process startup, communication, termination
   - Project application: Starting game processes

2. **System Information Retrieval**
   - `psutil` library (used in project)
   - CPU, memory, process information
   - Project application: System resource monitoring

3. **Keyboard and Mouse Control**
   - `pyautogui` library (used in project)
   - Mouse movement and clicking
   - Keyboard input
   - Project application: Game operation automation

4. **Screen Capture**
   - `pyscreeze` library (used in project)
   - Screenshots and image location
   - Project application: Game state recognition

5. **Window Management**
   - `pygetwindow` library (used in project)
   - Getting window information
   - Window activation and operations
   - Project application: Game window control

**Practice Projects**:
- Implement game startup automation
- Implement simple image recognition and clicking

---

### Phase 8: Image Processing and Recognition (2-3 weeks)

**Learning Objectives**: Implement game screen recognition

**Core Content**:
1. **OpenCV Basics**
   - Image reading and display
   - Basic image operations (cropping, scaling, rotation)
   - Project application: Game screen processing

2. **Image Recognition**
   - Template matching
   - Feature detection
   - Color recognition
   - Project application: Recognizing game UI elements

3. **OCR Text Recognition**
   - `rapidocr-onnxruntime` library (used in project)
   - Text detection and recognition
   - Project application: Recognizing text in games

4. **Image Processing Libraries**
   - `PIL/Pillow` library (used in project)
   - Image format conversion
   - Project application: Image preprocessing

**Practice Projects**:
- Implement game UI recognition
- Implement text recognition functionality

---

### Phase 9: Network Communication and Encryption (1-2 weeks)

**Learning Objectives**: Implement network communication and data security

**Core Content**:
1. **Email Sending**
   - `smtplib` module
   - `email` module
   - Project application: Email notifications in `notify.py`

2. **Encryption and Decryption**
   - Symmetric encryption (AES)
   - Asymmetric encryption (RSA)
   - Hash functions
   - Project application: Encrypted password storage

3. **HTTP Requests**
   - `requests` library
   - GET and POST requests
   - Project application: Version checking and updates

**Practice Projects**:
- Implement email notification system
- Implement encrypted password storage

---

### Phase 10: Task Scheduling and Notifications (1-2 weeks)

**Learning Objectives**: Implement scheduled tasks and system notifications

**Core Content**:
1. **Task Scheduling**
   - `schedule` library (used in project)
   - Scheduled tasks
   - Project application: Timed execution of game tasks

2. **System Notifications**
   - `plyer` library (used in project)
   - Windows notifications
   - Project application: Task completion notifications

3. **Event-Driven**
   - Event loops
   - Callback functions
   - Project application: Task event handling

**Practice Projects**:
- Implement scheduled task system
- Implement multiple notification methods

---

### Phase 11: Internationalization and Localization (1 week)

**Learning Objectives**: Support multiple languages

**Core Content**:
1. **i18n Implementation**
   - String extraction
   - Translation file management
   - Project application: `SRACore/i18n/` module

2. **Multi-language Support**
   - Language switching
   - Regional settings
   - Project application: Chinese and English support

**Practice Projects**:
- Implement internationalization framework
- Add new language support

---

### Phase 12: Packaging and Distribution (1 week)

**Learning Objectives**: Package Python code into executable files

**Core Content**:
1. **Nuitka Packaging**
   - `nuitka` library (used in project)
   - Compile Python to binary
   - Project application: `package.py` script

2. **Dependency Management**
   - `requirements.txt`
   - Virtual environments
   - Project application: Project dependency management

3. **Version Management**
   - Version number standards
   - Change logs
   - Project application: `version.json`

**Practice Projects**:
- Package Python project as EXE
- Implement automatic update mechanism

---

### Project Practice: Complete Automation Tasks

**Comprehensive application of all knowledge**:
1. Create task configuration system
2. Implement multi-task concurrent execution
3. Add logging and error handling
4. Implement email and system notifications
5. Package as executable file

---

## 🦀 Rust Learning Roadmap

### Phase 1: Rust Basic Syntax (2-3 weeks)

**Learning Objectives**: Understand Rust's core concepts and syntax

**Core Content**:
1. **Variables and Bindings**
   - Variable declaration and assignment
   - Mutability (`mut`)
   - Constants and static variables
   - Project application: Type definitions in `src-tauri/src/types.rs`

2. **Basic Data Types**
   - Integers, floats, booleans, characters
   - Strings (`String` and `&str`)
   - Arrays and vectors
   - Tuples and structs
   - Project application: Configuration data structures

3. **Ownership System** (Rust's core)
   - Ownership rules
   - Move semantics
   - Clone and copy
   - Project application: Resource ownership in process management

4. **Borrowing and References**
   - Immutable references `&T`
   - Mutable references `&mut T`
   - Borrowing rules
   - Project application: Function parameter passing

5. **Pattern Matching**
   - `match` expressions
   - `if let` and `while let`
   - Destructuring
   - Project application: Error handling

**Practice Projects**:
- Implement simple configuration structs
- Practice ownership and borrowing

---

### Phase 2: Error Handling and Type System (2 weeks)

**Learning Objectives**: Master Rust's error handling and type system

**Core Content**:
1. **Result and Option**
   - `Result<T, E>` type
   - `Option<T>` type
   - `?` operator
   - Project application: Error handling in `process.rs`

2. **Custom Error Types**
   - Implementing `Error` trait
   - Error conversion
   - Project application: Custom error types

3. **Generics**
   - Generic functions
   - Generic structs
   - Generic traits
   - Project application: Generic configuration management

4. **Traits**
   - Trait definition and implementation
   - Trait objects
   - Project application: Using `Emitter` trait

**Practice Projects**:
- Implement custom error types
- Create generic result handling functions

---

### Phase 3: Lifetimes and Memory Management (2 weeks)

**Learning Objectives**: Understand Rust's memory management mechanisms

**Core Content**:
1. **Lifetimes**
   - Lifetime annotations
   - Lifetime elision rules
   - Project application: Function parameters and return values

2. **Smart Pointers**
   - `Box<T>` - heap allocation
   - `Rc<T>` - reference counting
   - `Arc<T>` - atomic reference counting
   - `Mutex<T>` - mutex
   - Project application: `SRA_PROCESS: Mutex<Option<SraProcess>>`

3. **Memory Safety**
   - Stack and heap
   - Memory leak prevention
   - Project application: Process resource management

**Practice Projects**:
- Implement thread-safe global state
- Use `Arc<Mutex<T>>` to manage shared resources

---

### Phase 4: Concurrent Programming (2-3 weeks)

**Learning Objectives**: Implement concurrency and asynchronous programming

**Core Content**:
1. **Threads**
   - `std::thread` module
   - Thread creation and management
   - Inter-thread communication
   - Project application: Background process management

2. **Asynchronous Programming**
   - `async/await` syntax
   - `Future` trait
   - Project application: `tokio` async runtime

3. **Tokio Runtime**
   - Async tasks
   - Channels (`mpsc`, `broadcast`)
   - Timers
   - Project application: `tokio` dependency in `Cargo.toml`

4. **Synchronization Primitives**
   - `Mutex` mutex
   - `RwLock` read-write lock
   - `Semaphore` semaphore
   - Project application: Process state management

**Practice Projects**:
- Implement async process management
- Implement inter-thread messaging

---

### Phase 5: Tauri Framework Basics (2-3 weeks)

**Learning Objectives**: Understand Tauri framework's core concepts

**Core Content**:
1. **Tauri Application Structure**
   - Application initialization
   - Window management
   - Project application: `run()` function in `src-tauri/src/lib.rs`

2. **Command System**
   - `#[tauri::command]` macro
   - Command handling
   - Parameter serialization
   - Project application: All commands in `commands.rs`

3. **Event System**
   - Event sending
   - Event listening
   - Project application: `app_handle.emit("console-output", ...)`

4. **Plugin System**
   - Official plugins
   - Project application: `tauri-plugin-opener`, `tauri-plugin-dialog`, `tauri-plugin-fs`

5. **Configuration Files**
   - `tauri.conf.json`
   - Application configuration
   - Project application: `src-tauri/tauri.conf.json`

**Practice Projects**:
- Create simple Tauri application
- Implement frontend-backend communication

---

### Phase 6: Tauri Commands and IPC (2 weeks)

**Learning Objectives**: Implement frontend-backend communication

**Core Content**:
1. **Command Definition**
   - Parameter types
   - Return types
   - Error handling
   - Project application: Command definitions in `commands.rs`

2. **Serialization and Deserialization**
   - `serde` library
   - `serde_json`
   - Custom serialization
   - Project application: Configuration data serialization

3. **Async Commands**
   - Async command handling
   - Long-running operations
   - Project application: Process startup and management

4. **State Management**
   - Application state
   - State sharing
   - Project application: Global process state

**Practice Projects**:
- Implement configuration management commands
- Implement process control commands

---

### Phase 7: Process Management and System Interaction (2-3 weeks)

**Learning Objectives**: Implement system-level operations

**Core Content**:
1. **Process Management**
   - `std::process::Command`
   - Process startup and communication
   - Standard input/output
   - Project application: Process management in `process.rs`

2. **Pipes and Communication**
   - Standard input (stdin)
   - Standard output (stdout)
   - Standard error (stderr)
   - Project application: Communication with Python processes

3. **File System Operations**
   - File reading and writing
   - Directory operations
   - Path handling
   - Project application: Configuration file management

4. **Windows API**
   - `windows` crate
   - System calls
   - Project application: Windows-specific dependencies in `Cargo.toml`

**Practice Projects**:
- Implement process startup and monitoring
- Implement inter-process communication

---

### Phase 8: HTTP and Network Programming (1-2 weeks)

**Learning Objectives**: Implement network communication

**Core Content**:
1. **HTTP Client**
   - `reqwest` library (used in project)
   - GET and POST requests
   - Async requests
   - Project application: Version checking and updates

2. **JSON Processing**
   - `serde_json`
   - Serialization and deserialization
   - Project application: Configuration and announcement data

3. **Error Handling**
   - Network errors
   - Timeout handling
   - Project application: Network request fault tolerance

**Practice Projects**:
- Implement version checking functionality
- Implement announcement retrieval functionality

---

### Phase 9: Date/Time and Regular Expressions (1 week)

**Learning Objectives**: Handle dates and text

**Core Content**:
1. **Date and Time**
   - `chrono` library (used in project)
   - Timestamps
   - Time formatting
   - Project application: Log timestamps

2. **Regular Expressions**
   - `regex` library (used in project)
   - Pattern matching
   - Text extraction
   - Project application: Log parsing

3. **String Processing**
   - String operations
   - Encoding conversion
   - Project application: Configuration file parsing

**Practice Projects**:
- Implement log timestamps
- Implement text parsing functionality

---

### Phase 10: Encryption and Encoding (1-2 weeks)

**Learning Objectives**: Implement data security

**Core Content**:
1. **Base64 Encoding**
   - `base64` library (used in project)
   - Encoding and decoding
   - Project application: Data transmission

2. **Encryption Algorithms**
   - Symmetric encryption
   - Asymmetric encryption
   - Project application: Password encryption

3. **Hash Functions**
   - Data integrity verification
   - Project application: File verification

**Practice Projects**:
- Implement encrypted data storage
- Implement file integrity verification

---

### Phase 11: File Compression and Packaging (1 week)

**Learning Objectives**: Handle compressed files

**Core Content**:
1. **ZIP File Processing**
   - `zip` library (used in project)
   - Creating and extracting ZIP
   - Project application: Resource packaging

2. **File Operations**
   - File reading and writing
   - Directory traversal
   - Project application: Resource management

**Practice Projects**:
- Implement resource packaging functionality
- Implement resource extraction functionality

---

### Phase 12: Logging and Debugging (1 week)

**Learning Objectives**: Implement logging system

**Core Content**:
1. **Logging Libraries**
   - Log levels
   - Log formatting
   - Project application: `logger.rs` module

2. **Debugging Techniques**
   - `println!` macro
   - `dbg!` macro
   - Debugger
   - Project application: Development debugging

**Practice Projects**:
- Implement structured logging
- Implement log file management

---

### Phase 13: Advanced Features and Optimization (2-3 weeks)

**Learning Objectives**: Master Rust's advanced features

**Core Content**:
1. **Macro System**
   - Declarative macros
   - Procedural macros
   - Project application: `#[tauri::command]` macro

2. **Unsafe Code**
   - `unsafe` blocks
   - FFI (Foreign Function Interface)
   - Project application: Windows API calls

3. **Performance Optimization**
   - Compilation optimization
   - Memory optimization
   - Project application: Release builds

4. **Testing**
   - Unit testing
   - Integration testing
   - Project application: Code quality assurance

**Practice Projects**:
- Implement custom macros
- Optimize performance-critical code

---

### Project Practice: Complete Tauri Application

**Comprehensive application of all knowledge**:
1. Create Tauri application framework
2. Implement frontend-backend communication
3. Implement process management
4. Implement configuration management
5. Implement logging system
6. Add error handling
7. Optimize performance

---

## 🖖 Vue 3 Learning Roadmap

### Phase 1: Vue 3 Basic Concepts (1-2 weeks)

**Learning Objectives**: Understand Vue 3's core concepts

**Core Content**:
1. **Vue 3 Introduction**
   - Vue 3 vs Vue 2 differences
   - Composition API vs Options API
   - Project application: Project uses Composition API

2. **Template Syntax**
   - Interpolation expressions `{{ }}`
   - Directives `v-if`, `v-for`, `v-bind`, `v-on`
   - Project application: Templates in `Main.vue`

3. **Reactive Data**
   - `ref()` function
   - `reactive()` function
   - Reactivity principles
   - Project application: Component state management

4. **Computed Properties and Watchers**
   - `computed()` function
   - `watch()` function
   - Project application: Dynamic computation and monitoring

5. **Event Handling**
   - Event binding `@click`
   - Event modifiers
   - Project application: Button click handling

**Practice Projects**:
- Create simple counter application
- Implement form input and validation

---

### Phase 2: Component Basics (2 weeks)

**Learning Objectives**: Master Vue component creation and usage

**Core Content**:
1. **Component Definition**
   - Single File Components (`.vue` files)
   - Component structure (`<template>`, `<script>`, `<style>`)
   - Project application: `Main.vue`, `VersionUpdateWindow.vue`

2. **Props and Emits**
   - Props definition and validation
   - Event emission (Emits)
   - Project application: Parent-child component communication

3. **Slots**
   - Default slots
   - Named slots
   - Scoped slots
   - Project application: Reusable component design

4. **Component Communication**
   - Parent to child (Props)
   - Child to parent (Emits)
   - Sibling component communication
   - Project application: Data flow between components

5. **Component Lifecycle**
   - `onMounted`
   - `onUpdated`
   - `onUnmounted`
   - Project application: Component initialization and cleanup

**Practice Projects**:
- Create reusable button component
- Implement parent-child component communication
- Create container component with slots

---

### Phase 3: Composition API (2-3 weeks)

**Learning Objectives**: Master Vue 3's Composition API

**Core Content**:
1. **setup Function**
   - Role of `setup()` function
   - Return values
   - Project application: Component logic organization

2. **Reactivity APIs**
   - `ref()` and `reactive()`
   - `toRef()` and `toRefs()`
   - `isRef()` and `unref()`
   - Project application: State management

3. **Computed Properties**
   - Using `computed()`
   - Writable computed properties
   - Project application: Derived state

4. **Watchers**
   - `watch()` function
   - `watchEffect()` function
   - Project application: Side effect handling

5. **Lifecycle Hooks**
   - All lifecycle functions
   - Hook execution order
   - Project application: Component lifecycle management

6. **Dependency Injection**
   - `provide()` and `inject()`
   - Project application: Cross-level component communication

**Practice Projects**:
- Refactor components using Composition API
- Implement custom Hooks
- Implement cross-level data sharing

---

### Phase 4: TypeScript Integration (2 weeks)

**Learning Objectives**: Use TypeScript in Vue

**Core Content**:
1. **TypeScript Basics**
   - Type annotations
   - Interfaces and type aliases
   - Generics
   - Project application: `src/locales/zh-CN.ts`

2. **TypeScript in Vue**
   - Component type definitions
   - Props types
   - Emits types
   - Project application: Type-safe components

3. **Type Inference**
   - Automatic type inference
   - Explicit type annotations
   - Project application: Code readability

4. **Common Type Patterns**
   - Union types
   - Intersection types
   - Conditional types
   - Project application: Complex type definitions

**Practice Projects**:
- Add type definitions to components
- Create type-safe API interfaces
- Implement type-safe state management

---

### Phase 5: Vue Router (2 weeks)

**Learning Objectives**: Implement application routing

**Core Content**:
1. **Router Basics**
   - Route definition
   - Route matching
   - Project application: `src/router/` module

2. **Navigation**
   - Declarative navigation (`<router-link>`)
   - Programmatic navigation (`router.push()`)
   - Project application: Navigation in `Main.vue`

3. **Route Parameters**
   - Dynamic routes
   - Query parameters
   - Project application: Data passing

4. **Navigation Guards**
   - Global guards
   - Route guards
   - Component guards
   - Project application: Permission control

5. **Lazy Loading**
   - Route-level code splitting
   - Project application: Performance optimization

6. **Nested Routes**
   - Child routes
   - Project application: Complex page structures

**Practice Projects**:
- Create multi-page application
- Implement route parameter passing
- Implement navigation guards

---

### Phase 6: Internationalization (i18n) (1-2 weeks)

**Learning Objectives**: Implement multi-language support

**Core Content**:
1. **i18n Library**
   - `vue-i18n` library
   - Installation and configuration
   - Project application: Project's multi-language support

2. **Translation Files**
   - Translation file structure
   - Language pack management
   - Project application: `src/locales/` directory

3. **Translation Functions**
   - `$t()` function
   - Parameterized translation
   - Project application: Dynamic translation

4. **Language Switching**
   - Language switching logic
   - Persistent language selection
   - Project application: User preference settings

**Practice Projects**:
- Implement multi-language support
- Create language switching functionality
- Add new languages

---

### Phase 7: Tauri Integration (2-3 weeks)

**Learning Objectives**: Use Tauri API in Vue

**Core Content**:
1. **Tauri API Basics**
   - `@tauri-apps/api` library
   - Command invocation
   - Project application: Calling Rust commands

2. **Command Invocation**
   - `invoke()` function
   - Parameter passing
   - Error handling
   - Project application: Command calls in `Main.vue`

3. **Event System**
   - Event listening
   - Event sending
   - Project application: Real-time communication

4. **File System**
   - File reading and writing
   - Directory operations
   - Project application: Configuration file management

5. **Dialogs**
   - File selection
   - Message boxes
   - Project application: User interaction

6. **Window Management**
   - Window operations
   - Project application: Application window control

**Practice Projects**:
- Implement frontend-backend communication
- Implement file selection functionality
- Implement real-time log display

---

### Phase 8: State Management (1-2 weeks)

**Learning Objectives**: Implement application-level state management

**Core Content**:
1. **State Management Concepts**
   - Why state management is needed
   - State management patterns
   - Project application: Application global state

2. **Pinia (Recommended)**
   - Store definition
   - State, Getters, Actions
   - Project application: Can be integrated if needed

3. **Simple State Management**
   - Using `provide/inject`
   - Using `reactive()`
   - Project application: Current project's state management

4. **State Persistence**
   - Local storage
   - Project application: User settings saving

**Practice Projects**:
- Implement application global state
- Implement state persistence
- Implement state synchronization

---

### Phase 9: UI Components and Styling (2 weeks)

**Learning Objectives**: Create beautiful user interfaces

**Core Content**:
1. **CSS Basics**
   - CSS selectors
   - Box model
   - Flexbox and Grid
   - Project application: Style design

2. **Styling in Vue**
   - Inline styles
   - Class binding
   - Scoped styles
   - Project application: `<style scoped>`

3. **UI Component Libraries**
   - `lucide-vue-next` icon library (used in project)
   - Other UI libraries
   - Project application: Icon usage

4. **Responsive Design**
   - Media queries
   - Mobile-first
   - Project application: Adapt to different screens

5. **Animations and Transitions**
   - `<Transition>` component
   - CSS animations
   - Project application: User experience

**Practice Projects**:
- Create responsive layout
- Implement component styling
- Add animation effects

---

### Phase 10: Advanced Components (2 weeks)

**Learning Objectives**: Create complex reusable components

**Core Content**:
1. **Drag and Drop Functionality**
   - `vuedraggable` library (used in project)
   - Drag events
   - Project application: Task sorting

2. **Markdown Rendering**
   - `vue3-markdown-it` library (used in project)
   - Rendering Markdown
   - Project application: Announcement display

3. **Virtual Scrolling**
   - Large list optimization
   - Project application: Performance optimization

4. **Form Processing**
   - Form validation
   - Form submission
   - Project application: Configuration forms

5. **Modals and Notifications**
   - Modal components
   - Notification system
   - Project application: `NotificationSystem` component

**Practice Projects**:
- Implement drag-and-drop sorting functionality
- Implement Markdown rendering
- Create notification system

---

### Phase 11: Performance Optimization (1-2 weeks)

**Learning Objectives**: Optimize application performance

**Core Content**:
1. **Code Splitting**
   - Route-level splitting
   - Component-level splitting
   - Project application: Faster initial loading

2. **Lazy Loading**
   - Image lazy loading
   - Component lazy loading
   - Project application: Performance improvement

3. **Caching Strategies**
   - Component caching (`<KeepAlive>`)
   - Project application: `<keep-alive>` in `Main.vue`

4. **Performance Monitoring**
   - Performance metrics
   - Debugging tools
   - Project application: Performance analysis

5. **Build Optimization**
   - Vite configuration
   - Project application: `vite.config.ts`

**Practice Projects**:
- Implement route lazy loading
- Optimize component performance
- Analyze and improve performance metrics

---

### Phase 12: Testing (1-2 weeks)

**Learning Objectives**: Write test code

**Core Content**:
1. **Unit Testing**
   - `Vitest` framework
   - Test case writing
   - Project application: Component testing

2. **Component Testing**
   - `@vue/test-utils`
   - Component mounting and interaction
   - Project application: Testing Vue components

3. **E2E Testing**
   - `Playwright` or `Cypress`
   - End-to-end testing
   - Project application: Integration testing

4. **Test Coverage**
   - Coverage reports
   - Project application: Code quality

**Practice Projects**:
- Write component unit tests
- Write E2E tests
- Improve test coverage

---

### Phase 13: Project Practice (2-3 weeks)

**Learning Objectives**: Comprehensive application of all knowledge

**Core Content**:
1. **Project Architecture**
   - Directory structure
   - Module division
   - Project application: `src/` directory structure

2. **Best Practices**
   - Code standards
   - Naming conventions
   - Project application: Project code style

3. **Development Workflow**
   - Development environment setup
   - Build and deployment
   - Project application: `package.json` scripts

4. **Debugging and Troubleshooting**
   - Vue DevTools
   - Browser debugging
   - Project application: Development debugging

**Practice Projects**:
1. Complete page development
   - Create new pages
   - Implement all functionality
   - Add styles and animations
   - Write tests

2. Feature module development
   - Configuration management page
   - Task management page
   - Settings page

3. Performance optimization
   - Analyze performance bottlenecks
   - Implement optimization solutions
   - Verify results

---

## 🎯 Learning Suggestions and Resources

### Recommended Learning Order

**Recommended Path**:
1. **Weeks 1-2**: Vue 3 Basics + Component Basics
   - Quickly see visual results, enhance learning motivation
   - Understand Vue's core concepts

2. **Weeks 3-4**: Composition API + TypeScript
   - Master modern Vue development methods
   - Improve code quality

3. **Weeks 5-6**: Vue Router + Internationalization
   - Implement complete application structure
   - Support multiple languages

4. **Weeks 7-8**: Tauri Integration + State Management
   - Implement frontend-backend communication
   - Manage application state

5. **Weeks 9-13**: UI Optimization, Performance, Testing, Practice
   - Polish application details
   - Improve code quality

### Parallel Learning Suggestions

**If time permits**, you can learn in parallel:
- Vue 3 Basics + Python Basics (Weeks 1-2)
- Vue 3 Advanced + Python Intermediate (Weeks 3-4)
- Vue 3 + Tauri + Rust Basics (Weeks 5-8)
- Complete project development (Week 9+)

### Learning Resources

**Official Documentation**:
- Vue 3: https://vuejs.org/
- Tauri: https://tauri.app/
- Python: https://docs.python.org/3/
- Rust: https://www.rust-lang.org/

**Project Reference**:
- View `src/views/Main.vue` to learn component structure
- View `src/locales/` to learn internationalization
- View `src-tauri/src/commands.rs` to learn Tauri commands
- View `SRA-CE-cil/SRACore/` to learn Python project structure

**Practice Suggestions**:
- Start by modifying existing components
- Gradually add new features
- Refer to project code to learn best practices
- Regularly refactor and optimize code

---

## 📊 Learning Time Estimates

| Language | Basic Phase | Intermediate Phase | Project-Related | Advanced Phase | Total |
|----------|-------------|-------------------|-----------------|----------------|-------|
| Python | 2-3 weeks | 4-5 weeks | 4-5 weeks | 2-3 weeks | 12-16 weeks |
| Rust | 2-3 weeks | 4-5 weeks | 4-5 weeks | 2-3 weeks | 12-16 weeks |
| Vue 3 | 3-4 weeks | 4-5 weeks | 3-4 weeks | 2-3 weeks | 12-16 weeks |

**Overall Time**:
- Focus on one language: 3-4 months
- Learn two languages: 4-6 months
- Learn three languages: 6-9 months
- Complete project development: 9-12 months

---

## 🚀 Quick Start Suggestions

### If you want to quickly get started with the project

**Week 1**:
- Learn Vue 3 basics and components
- Modify existing Vue components
- Understand project structure

**Weeks 2-3**:
- Learn Tauri integration
- Implement simple frontend-backend communication
- Add new features

**Weeks 4-6**:
- Learn Python automation
- Understand game automation logic
- Optimize existing features

**Week 7+**:
- Learn advanced Rust
- Optimize system-level operations
- Complete project development

### If you want to learn languages in depth

**Choose one language for deep learning**:
1. Complete all phases of that language
2. Apply learned knowledge in the project
3. Participate in project development and optimization
4. Then learn other languages