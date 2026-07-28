/**
 * Ngân hàng 100 câu hỏi Flutter & Dart.
 * Tự động chuẩn hóa từ tài liệu câu hỏi gốc trong project.
 */
const questions = [
  {
    "id": 1,
    "question": "Which widget reacts to async data from local storage?",
    "options": [
      {
        "key": "A",
        "text": "FutureBuilder",
        "explanation": "FutureBuilder là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "B",
        "text": "StreamBuilder",
        "explanation": "StreamBuilder không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là FutureBuilder."
      },
      {
        "key": "C",
        "text": "ListView",
        "explanation": "ListView không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là FutureBuilder."
      },
      {
        "key": "D",
        "text": "Provider",
        "explanation": "Provider không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là FutureBuilder."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 2,
    "question": "What is the role of events in BLoC?",
    "options": [
      {
        "key": "A",
        "text": "Store UI",
        "explanation": "Store UI không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Trigger state changes."
      },
      {
        "key": "B",
        "text": "Trigger state changes",
        "explanation": "Trigger state changes là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Render widgets",
        "explanation": "Render widgets không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Trigger state changes."
      },
      {
        "key": "D",
        "text": "Handle layout",
        "explanation": "Handle layout không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Trigger state changes."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 3,
    "question": "Which method retrieves data from SharedPreferences?",
    "options": [
      {
        "key": "A",
        "text": "get()",
        "explanation": "get() là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "B",
        "text": "read()",
        "explanation": "read() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là get()."
      },
      {
        "key": "C",
        "text": "fetch()",
        "explanation": "fetch() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là get()."
      },
      {
        "key": "D",
        "text": "load()",
        "explanation": "load() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là get()."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 4,
    "question": "Which command builds a release APK?",
    "options": [
      {
        "key": "A",
        "text": "flutter run",
        "explanation": "flutter run không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là flutter build apk."
      },
      {
        "key": "B",
        "text": "flutter build apk",
        "explanation": "flutter build apk là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "flutter doctor",
        "explanation": "flutter doctor không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là flutter build apk."
      },
      {
        "key": "D",
        "text": "flutter clean",
        "explanation": "flutter clean không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là flutter build apk."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 5,
    "question": "What is implicit animation?",
    "options": [
      {
        "key": "A",
        "text": "Manual animation control",
        "explanation": "Manual animation control không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Animation without controller."
      },
      {
        "key": "B",
        "text": "Animation without controller",
        "explanation": "Animation without controller là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "API animation",
        "explanation": "API animation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Animation without controller."
      },
      {
        "key": "D",
        "text": "Navigation animation",
        "explanation": "Navigation animation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Animation without controller."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 6,
    "question": "Which type of test checks individual functions or classes?",
    "options": [
      {
        "key": "A",
        "text": "Widget test",
        "explanation": "Widget test không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Unit test."
      },
      {
        "key": "B",
        "text": "Integration test",
        "explanation": "Integration test không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Unit test."
      },
      {
        "key": "C",
        "text": "Unit test",
        "explanation": "Unit test là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "System test",
        "explanation": "System test không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Unit test."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 7,
    "question": "Which approach helps reduce unnecessary widget rebuilds?",
    "options": [
      {
        "key": "A",
        "text": "Using global variables",
        "explanation": "Using global variables không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Fine-grained state updates."
      },
      {
        "key": "B",
        "text": "Fine-grained state updates",
        "explanation": "Fine-grained state updates là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Hot restart",
        "explanation": "Hot restart không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Fine-grained state updates."
      },
      {
        "key": "D",
        "text": "Large widgets",
        "explanation": "Large widgets không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Fine-grained state updates."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 8,
    "question": "How can data be passed to a new screen?",
    "options": [
      {
        "key": "A",
        "text": "Using global variables",
        "explanation": "Using global variables không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Via constructor arguments."
      },
      {
        "key": "B",
        "text": "Via constructor arguments",
        "explanation": "Via constructor arguments là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Using ThemeData",
        "explanation": "Using ThemeData không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Via constructor arguments."
      },
      {
        "key": "D",
        "text": "Using Scaffold",
        "explanation": "Using Scaffold không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Via constructor arguments."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 9,
    "question": "Which Flutter test focuses on UI components?",
    "options": [
      {
        "key": "A",
        "text": "Unit test",
        "explanation": "Unit test không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Widget test."
      },
      {
        "key": "B",
        "text": "Widget test",
        "explanation": "Widget test là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Integration test",
        "explanation": "Integration test không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Widget test."
      },
      {
        "key": "D",
        "text": "Load test",
        "explanation": "Load test không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Widget test."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 10,
    "question": "Why should state be kept as local as possible?",
    "options": [
      {
        "key": "A",
        "text": "Better animations",
        "explanation": "Better animations không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Reduce unnecessary rebuilds."
      },
      {
        "key": "B",
        "text": "Reduce unnecessary rebuilds",
        "explanation": "Reduce unnecessary rebuilds là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Simplify UI",
        "explanation": "Simplify UI không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Reduce unnecessary rebuilds."
      },
      {
        "key": "D",
        "text": "Improve navigation",
        "explanation": "Improve navigation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Reduce unnecessary rebuilds."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 11,
    "question": "What is the purpose of SliverAppBar?",
    "options": [
      {
        "key": "A",
        "text": "Static app bar",
        "explanation": "Static app bar không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Scrollable flexible app bar."
      },
      {
        "key": "B",
        "text": "Scrollable flexible app bar",
        "explanation": "Scrollable flexible app bar là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Bottom navigation",
        "explanation": "Bottom navigation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Scrollable flexible app bar."
      },
      {
        "key": "D",
        "text": "Drawer controls",
        "explanation": "Drawer controls không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Scrollable flexible app bar."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 12,
    "question": "Which status code indicates server error?",
    "options": [
      {
        "key": "A",
        "text": "200",
        "explanation": "200 không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là 500  - Internal Server Error – Lỗi phía máy chủ."
      },
      {
        "key": "B",
        "text": "301 - Moved Permanently – Chuyển hướng vĩnh viễn",
        "explanation": "301 - Moved Permanently – Chuyển hướng vĩnh viễn không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là 500  - Internal Server Error – Lỗi phía máy chủ."
      },
      {
        "key": "C",
        "text": "404 - Not Found – Không tìm thấy tài nguyên",
        "explanation": "404 - Not Found – Không tìm thấy tài nguyên không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là 500  - Internal Server Error – Lỗi phía máy chủ."
      },
      {
        "key": "D",
        "text": "500  - Internal Server Error – Lỗi phía máy chủ",
        "explanation": "500  - Internal Server Error – Lỗi phía máy chủ là đáp án phù hợp nhất với kiến thức được hỏi."
      }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 13,
    "question": "Why should animations be disposed of properly?",
    "options": [
      {
        "key": "A",
        "text": "Improve UI",
        "explanation": "Improve UI không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Prevent memory leaks."
      },
      {
        "key": "B",
        "text": "Prevent memory leaks",
        "explanation": "Prevent memory leaks là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Speed up builds",
        "explanation": "Speed up builds không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Prevent memory leaks."
      },
      {
        "key": "D",
        "text": "Fix layout",
        "explanation": "Fix layout không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Prevent memory leaks."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 14,
    "question": "Which widget can hide user input text when configured for password entry?",
    "options": [
      {
        "key": "A",
        "text": "TextField",
        "explanation": "TextField là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "B",
        "text": "ObscureText",
        "explanation": "ObscureText không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là TextField."
      },
      {
        "key": "C",
        "text": "SecureInput",
        "explanation": "SecureInput không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là TextField."
      },
      {
        "key": "D",
        "text": "PasswordField",
        "explanation": "PasswordField không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là TextField."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 15,
    "question": "What does CurvedAnimation provide?",
    "options": [
      {
        "key": "A",
        "text": "Layout control",
        "explanation": "Layout control không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Animation curve behavior."
      },
      {
        "key": "B",
        "text": "Animation curve behavior",
        "explanation": "Animation curve behavior là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "State updates",
        "explanation": "State updates không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Animation curve behavior."
      },
      {
        "key": "D",
        "text": "Navigation",
        "explanation": "Navigation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Animation curve behavior."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 16,
    "question": "What does golden testing verify?",
    "options": [
      {
        "key": "A",
        "text": "API responses",
        "explanation": "API responses không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là UI appearance consistency."
      },
      {
        "key": "B",
        "text": "UI appearance consistency",
        "explanation": "UI appearance consistency là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Database state",
        "explanation": "Database state không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là UI appearance consistency."
      },
      {
        "key": "D",
        "text": "Authentication",
        "explanation": "Authentication không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là UI appearance consistency."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 17,
    "question": "Which widget allows overlapping (chồng chéo) of its child widgets?",
    "options": [
      {
        "key": "A",
        "text": "Column",
        "explanation": "Column không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Stack."
      },
      {
        "key": "B",
        "text": "Row",
        "explanation": "Row không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Stack."
      },
      {
        "key": "C",
        "text": "Stack",
        "explanation": "Stack là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Expanded",
        "explanation": "Expanded không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Stack."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 18,
    "question": "Which Dart data structure is best suited for storing an ordered collection of items?",
    "options": [
      {
        "key": "A",
        "text": "Set",
        "explanation": "Set không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là List."
      },
      {
        "key": "B",
        "text": "Map",
        "explanation": "Map không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là List."
      },
      {
        "key": "C",
        "text": "List",
        "explanation": "List là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Queue",
        "explanation": "Queue không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là List."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 19,
    "question": "What is the main risk of improper state management?",
    "options": [
      {
        "key": "A",
        "text": "UI inconsistency",
        "explanation": "UI inconsistency là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "B",
        "text": "Longer compile time",
        "explanation": "Longer compile time không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là UI inconsistency."
      },
      {
        "key": "C",
        "text": "Package conflicts",
        "explanation": "Package conflicts không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là UI inconsistency."
      },
      {
        "key": "D",
        "text": "Build errors",
        "explanation": "Build errors không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là UI inconsistency."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 20,
    "question": "What is the main purpose of hot reload in Flutter?",
    "options": [
      {
        "key": "A",
        "text": "Improve runtime performance",
        "explanation": "Improve runtime performance không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Instantly reflect code changes in UI."
      },
      {
        "key": "B",
        "text": "Instantly reflect code changes in UI",
        "explanation": "Instantly reflect code changes in UI là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Publish apps faster",
        "explanation": "Publish apps faster không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Instantly reflect code changes in UI."
      },
      {
        "key": "D",
        "text": "Reduce memory usage",
        "explanation": "Reduce memory usage không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Instantly reflect code changes in UI."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 21,
    "question": "Which widget applies a theme to an entire Flutter application?",
    "options": [
      {
        "key": "A",
        "text": "Scaffold",
        "explanation": "Scaffold không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là MaterialApp."
      },
      {
        "key": "B",
        "text": "Theme",
        "explanation": "Theme không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là MaterialApp."
      },
      {
        "key": "C",
        "text": "MaterialApp",
        "explanation": "MaterialApp là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Container",
        "explanation": "Container không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là MaterialApp."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 22,
    "question": "Which package supports BLoC architecture?",
    "options": [
      {
        "key": "A",
        "text": "provider",
        "explanation": "provider không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là flutter_bloc."
      },
      {
        "key": "B",
        "text": "flutter_bloc",
        "explanation": "flutter_bloc là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "sqflite",
        "explanation": "sqflite không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là flutter_bloc."
      },
      {
        "key": "D",
        "text": "http",
        "explanation": "http không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là flutter_bloc."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 23,
    "question": "Which action best demonstrates Flutter's reactive UI model?",
    "options": [
      {
        "key": "A",
        "text": "Manually updating UI elements",
        "explanation": "Manually updating UI elements không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Rebuilding UI in response to state changes."
      },
      {
        "key": "B",
        "text": "Rebuilding UI in response to state changes",
        "explanation": "Rebuilding UI in response to state changes là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Editing layout XML",
        "explanation": "Editing layout XML không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Rebuilding UI in response to state changes."
      },
      {
        "key": "D",
        "text": "Calling native APIs",
        "explanation": "Calling native APIs không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Rebuilding UI in response to state changes."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 24,
    "question": "What is technical debt?",
    "options": [
      {
        "key": "A",
        "text": "UI lag",
        "explanation": "UI lag không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Future cost of poor design decisions."
      },
      {
        "key": "B",
        "text": "Future cost of poor design decisions",
        "explanation": "Future cost of poor design decisions là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Memory usage",
        "explanation": "Memory usage không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Future cost of poor design decisions."
      },
      {
        "key": "D",
        "text": "API limit",
        "explanation": "API limit không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Future cost of poor design decisions."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 25,
    "question": "Which Flutter concept supports reactive UI updates?",
    "options": [
      {
        "key": "A",
        "text": "Manual refresh",
        "explanation": "Manual refresh không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Widget rebuilding."
      },
      {
        "key": "B",
        "text": "Widget rebuilding",
        "explanation": "Widget rebuilding là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Hot restart",
        "explanation": "Hot restart không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Widget rebuilding."
      },
      {
        "key": "D",
        "text": "Native callbacks",
        "explanation": "Native callbacks không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Widget rebuilding."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 26,
    "question": "Which Flutter widget reacts to authentication state changes?",
    "options": [
      {
        "key": "A",
        "text": "FutureBuilder",
        "explanation": "FutureBuilder không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là StreamBuilder."
      },
      {
        "key": "B",
        "text": "StreamBuilder",
        "explanation": "StreamBuilder là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "ListView",
        "explanation": "ListView không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là StreamBuilder."
      },
      {
        "key": "D",
        "text": "Form",
        "explanation": "Form không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là StreamBuilder."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 27,
    "question": "Why should database operations be asynchronous?",
    "options": [
      {
        "key": "A",
        "text": "Simplify syntax",
        "explanation": "Simplify syntax không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Avoid blocking UI thread."
      },
      {
        "key": "B",
        "text": "Avoid blocking UI thread",
        "explanation": "Avoid blocking UI thread là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Reduce code",
        "explanation": "Reduce code không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Avoid blocking UI thread."
      },
      {
        "key": "D",
        "text": "Improve theme",
        "explanation": "Improve theme không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Avoid blocking UI thread."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 28,
    "question": "Why is Chapter 13 considered optional (Plus)?",
    "options": [
      {
        "key": "A",
        "text": "It replaces core concepts",
        "explanation": "It replaces core concepts không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Apps can work without deep optimization."
      },
      {
        "key": "B",
        "text": "Apps can work without deep optimization",
        "explanation": "Apps can work without deep optimization là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "It manages navigation",
        "explanation": "It manages navigation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Apps can work without deep optimization."
      },
      {
        "key": "D",
        "text": "It handles authentication",
        "explanation": "It handles authentication không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Apps can work without deep optimization."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 29,
    "question": "What happens after successful login?",
    "options": [
      {
        "key": "A",
        "text": "App closes",
        "explanation": "App closes không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là User session starts."
      },
      {
        "key": "B",
        "text": "User session starts",
        "explanation": "User session starts là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Theme changes",
        "explanation": "Theme changes không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là User session starts."
      },
      {
        "key": "D",
        "text": "Navigation resets",
        "explanation": "Navigation resets không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là User session starts."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 30,
    "question": "Why is secure authentication critical in mobile apps?",
    "options": [
      {
        "key": "A",
        "text": "UI quality",
        "explanation": "UI quality không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Protect user data."
      },
      {
        "key": "B",
        "text": "Protect user data",
        "explanation": "Protect user data là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Reduce code",
        "explanation": "Reduce code không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Protect user data."
      },
      {
        "key": "D",
        "text": "Improve speed",
        "explanation": "Improve speed không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Protect user data."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 31,
    "question": "What is the main benefit of Flutter's widget-based architecture?",
    "options": [
      {
        "key": "A",
        "text": "Widgets are only used for layout design",
        "explanation": "Widgets are only used for layout design không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Widgets allow code reuse across platforms."
      },
      {
        "key": "B",
        "text": "Widgets allow code reuse across platforms",
        "explanation": "Widgets allow code reuse across platforms là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Widgets automatically manage databases",
        "explanation": "Widgets automatically manage databases không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Widgets allow code reuse across platforms."
      },
      {
        "key": "D",
        "text": "Widgets replace backend services",
        "explanation": "Widgets replace backend services không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Widgets allow code reuse across platforms."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 32,
    "question": "Which Dart keyword is used to define a constant value at compile time?",
    "options": [
      {
        "key": "A",
        "text": "final",
        "explanation": "final không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là const."
      },
      {
        "key": "B",
        "text": "static",
        "explanation": "static không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là const."
      },
      {
        "key": "C",
        "text": "const",
        "explanation": "const là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "var",
        "explanation": "var không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là const."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 33,
    "question": "What is Dart primarily designed for in the Flutter ecosystem?",
    "options": [
      {
        "key": "A",
        "text": "Database management",
        "explanation": "Database management không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là General-purpose programming with UI focus."
      },
      {
        "key": "B",
        "text": "User interface development",
        "explanation": "User interface development không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là General-purpose programming with UI focus."
      },
      {
        "key": "C",
        "text": "General-purpose programming with UI focus",
        "explanation": "General-purpose programming with UI focus là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Network security",
        "explanation": "Network security không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là General-purpose programming with UI focus."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 34,
    "question": "What is the benefit of composing widgets in Flutter?",
    "options": [
      {
        "key": "A",
        "text": "Faster compilation",
        "explanation": "Faster compilation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Better code reuse and UI consistency."
      },
      {
        "key": "B",
        "text": "Better code reuse and UI consistency",
        "explanation": "Better code reuse and UI consistency là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Reduced memory usage",
        "explanation": "Reduced memory usage không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Better code reuse and UI consistency."
      },
      {
        "key": "D",
        "text": "Automatic navigation",
        "explanation": "Automatic navigation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Better code reuse and UI consistency."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 35,
    "question": "Which widget is best used to add fixed empty space?",
    "options": [
      {
        "key": "A",
        "text": "Padding",
        "explanation": "Padding không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là SizedBox."
      },
      {
        "key": "B",
        "text": "Expanded",
        "explanation": "Expanded không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là SizedBox."
      },
      {
        "key": "C",
        "text": "SizedBox",
        "explanation": "SizedBox là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Container",
        "explanation": "Container không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là SizedBox."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 36,
    "question": "What happens when assigning a null value to a non-nullable variable in Dart?",
    "options": [
      {
        "key": "A",
        "text": "The app runs normally",
        "explanation": "The app runs normally không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là A compile-time error occurs."
      },
      {
        "key": "B",
        "text": "A runtime exception occurs",
        "explanation": "A runtime exception occurs không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là A compile-time error occurs."
      },
      {
        "key": "C",
        "text": "A compile-time error occurs",
        "explanation": "A compile-time error occurs là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "The value becomes null automatically",
        "explanation": "The value becomes null automatically không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là A compile-time error occurs."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 37,
    "question": "What is the purpose of parsing JSON?",
    "options": [
      {
        "key": "A",
        "text": "Encrypt data",
        "explanation": "Encrypt data không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Convert JSON into Dart objects."
      },
      {
        "key": "B",
        "text": "Convert JSON into Dart objects",
        "explanation": "Convert JSON into Dart objects là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Send requests",
        "explanation": "Send requests không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Convert JSON into Dart objects."
      },
      {
        "key": "D",
        "text": "Cache responses",
        "explanation": "Cache responses không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Convert JSON into Dart objects."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 38,
    "question": "Which platforms can Flutter applications target using a single codebase?",
    "options": [
      {
        "key": "A",
        "text": "Android only",
        "explanation": "Android only không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Android, iOS, web, and desktop."
      },
      {
        "key": "B",
        "text": "iOS only",
        "explanation": "iOS only không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Android, iOS, web, and desktop."
      },
      {
        "key": "C",
        "text": "Android, iOS, web, and desktop",
        "explanation": "Android, iOS, web, and desktop là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Web servers only",
        "explanation": "Web servers only không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Android, iOS, web, and desktop."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 39,
    "question": "Which HTTP method is typically used to retrieve data?",
    "options": [
      {
        "key": "A",
        "text": "POST",
        "explanation": "POST không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là GET."
      },
      {
        "key": "B",
        "text": "PUT",
        "explanation": "PUT không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là GET."
      },
      {
        "key": "C",
        "text": "GET",
        "explanation": "GET là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "DELETE",
        "explanation": "DELETE không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là GET."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 40,
    "question": "Why should authentication state be centralized?",
    "options": [
      {
        "key": "A",
        "text": "Reduce UI code",
        "explanation": "Reduce UI code không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Ensure consistent access control."
      },
      {
        "key": "B",
        "text": "Ensure consistent access control",
        "explanation": "Ensure consistent access control là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Improve animations",
        "explanation": "Improve animations không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Ensure consistent access control."
      },
      {
        "key": "D",
        "text": "Simplify layout",
        "explanation": "Simplify layout không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Ensure consistent access control."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 41,
    "question": "Which phase involves gathering requirements?",
    "options": [
      {
        "key": "A",
        "text": "Implementation",
        "explanation": "Implementation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Analysis."
      },
      {
        "key": "B",
        "text": "Design",
        "explanation": "Design không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Analysis."
      },
      {
        "key": "C",
        "text": "Analysis",
        "explanation": "Analysis là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Testing",
        "explanation": "Testing không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Analysis."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 42,
    "question": "Which step is required before running a Flutter app for the first time?",
    "options": [
      {
        "key": "A",
        "text": "Publishing the app",
        "explanation": "Publishing the app không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Setting up the Flutter SDK."
      },
      {
        "key": "B",
        "text": "Setting up the Flutter SDK",
        "explanation": "Setting up the Flutter SDK là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Configuring a database",
        "explanation": "Configuring a database không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Setting up the Flutter SDK."
      },
      {
        "key": "D",
        "text": "Writing backend APIs",
        "explanation": "Writing backend APIs không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Setting up the Flutter SDK."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 43,
    "question": "Which Flutter tool helps debug network requests?",
    "options": [
      {
        "key": "A",
        "text": "DevTools",
        "explanation": "DevTools là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "B",
        "text": "Inspector",
        "explanation": "Inspector không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là DevTools."
      },
      {
        "key": "C",
        "text": "Emulator",
        "explanation": "Emulator không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là DevTools."
      },
      {
        "key": "D",
        "text": "Hot reload",
        "explanation": "Hot reload không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là DevTools."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 44,
    "question": "Why are widgets lightweight in Flutter?",
    "options": [
      {
        "key": "A",
        "text": "They manage system resources",
        "explanation": "They manage system resources không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là They are immutable descriptions."
      },
      {
        "key": "B",
        "text": "They are immutable descriptions",
        "explanation": "They are immutable descriptions là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "They store UI state",
        "explanation": "They store UI state không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là They are immutable descriptions."
      },
      {
        "key": "D",
        "text": "They handle rendering directly",
        "explanation": "They handle rendering directly không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là They are immutable descriptions."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 45,
    "question": "Which Dart feature supports object-oriented programming?",
    "options": [
      {
        "key": "A",
        "text": "Widgets",
        "explanation": "Widgets không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Classes and objects."
      },
      {
        "key": "B",
        "text": "Classes and objects",
        "explanation": "Classes and objects là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Hot reload",
        "explanation": "Hot reload không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Classes and objects."
      },
      {
        "key": "D",
        "text": "Layout builders",
        "explanation": "Layout builders không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Classes and objects."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 46,
    "question": "What is Flutter primarily used for?",
    "options": [
      {
        "key": "A",
        "text": "Designing databases for mobile apps",
        "explanation": "Designing databases for mobile apps không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Creating native applications from a single codebase."
      },
      {
        "key": "B",
        "text": "Creating native applications from a single codebase",
        "explanation": "Creating native applications from a single codebase là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Developing server-side applications only",
        "explanation": "Developing server-side applications only không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Creating native applications from a single codebase."
      },
      {
        "key": "D",
        "text": "Building operating systems for mobile devices",
        "explanation": "Building operating systems for mobile devices không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Creating native applications from a single codebase."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 47,
    "question": "Which method resets all form fields?",
    "options": [
      {
        "key": "A",
        "text": "clear()",
        "explanation": "clear() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là reset()."
      },
      {
        "key": "B",
        "text": "reset()",
        "explanation": "reset() là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "dispose()",
        "explanation": "dispose() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là reset()."
      },
      {
        "key": "D",
        "text": "remove()",
        "explanation": "remove() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là reset()."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 48,
    "question": "Why are const widgets recommended?",
    "options": [
      {
        "key": "A",
        "text": "They improve readability",
        "explanation": "They improve readability không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là They reduce rebuild cost."
      },
      {
        "key": "B",
        "text": "They reduce rebuild cost",
        "explanation": "They reduce rebuild cost là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "They add state",
        "explanation": "They add state không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là They reduce rebuild cost."
      },
      {
        "key": "D",
        "text": "They handle navigation",
        "explanation": "They handle navigation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là They reduce rebuild cost."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 49,
    "question": "Why is clean architecture beneficial?",
    "options": [
      {
        "key": "A",
        "text": "Fewer files",
        "explanation": "Fewer files không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Easier maintenance and testing."
      },
      {
        "key": "B",
        "text": "Easier maintenance and testing",
        "explanation": "Easier maintenance and testing là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Better UI",
        "explanation": "Better UI không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Easier maintenance and testing."
      },
      {
        "key": "D",
        "text": "Faster builds",
        "explanation": "Faster builds không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Easier maintenance and testing."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 50,
    "question": "Why are forms important in mobile applications?",
    "options": [
      {
        "key": "A",
        "text": "UI decoration",
        "explanation": "UI decoration không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là User data collection."
      },
      {
        "key": "B",
        "text": "User data collection",
        "explanation": "User data collection là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "State management",
        "explanation": "State management không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là User data collection."
      },
      {
        "key": "D",
        "text": "Navigation",
        "explanation": "Navigation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là User data collection."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 51,
    "question": "Which widget pattern protects authenticated routes?",
    "options": [
      {
        "key": "A",
        "text": "Navigator",
        "explanation": "Navigator không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Guard."
      },
      {
        "key": "B",
        "text": "Guard",
        "explanation": "Guard là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Route protection",
        "explanation": "Route protection không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Guard."
      },
      {
        "key": "D",
        "text": "Middleware",
        "explanation": "Middleware không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Guard."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 52,
    "question": "Why are tests important for refactoring?",
    "options": [
      {
        "key": "A",
        "text": "Reduce UI work",
        "explanation": "Reduce UI work không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Ensure changes don't break functionality."
      },
      {
        "key": "B",
        "text": "Ensure changes don't break functionality",
        "explanation": "Ensure changes don't break functionality là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Improve animations",
        "explanation": "Improve animations không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Ensure changes don't break functionality."
      },
      {
        "key": "D",
        "text": "Change layout",
        "explanation": "Change layout không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Ensure changes don't break functionality."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 53,
    "question": "What is the role of BuildContext in Flutter?",
    "options": [
      {
        "key": "A",
        "text": "Store application data",
        "explanation": "Store application data không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Locate widgets in the widget tree."
      },
      {
        "key": "B",
        "text": "Locate widgets in the widget tree",
        "explanation": "Locate widgets in the widget tree là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Manage navigation history",
        "explanation": "Manage navigation history không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Locate widgets in the widget tree."
      },
      {
        "key": "D",
        "text": "Render UI pixels",
        "explanation": "Render UI pixels không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Locate widgets in the widget tree."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 54,
    "question": "What role does the Flutter framework play in application development?",
    "options": [
      {
        "key": "A",
        "text": "It manages database servers",
        "explanation": "It manages database servers không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là It provides UI components and rendering logic."
      },
      {
        "key": "B",
        "text": "It provides UI components and rendering logic",
        "explanation": "It provides UI components and rendering logic là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "It replaces the operating system",
        "explanation": "It replaces the operating system không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là It provides UI components and rendering logic."
      },
      {
        "key": "D",
        "text": "It runs backend business logic",
        "explanation": "It runs backend business logic không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là It provides UI components and rendering logic."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 55,
    "question": "How is the Flutter UI constructed internally?",
    "options": [
      {
        "key": "A",
        "text": "Using XML layout files",
        "explanation": "Using XML layout files không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Using a hierarchical widget tree."
      },
      {
        "key": "B",
        "text": "Using HTML and CSS",
        "explanation": "Using HTML and CSS không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Using a hierarchical widget tree."
      },
      {
        "key": "C",
        "text": "Using a hierarchical widget tree",
        "explanation": "Using a hierarchical widget tree là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Using native UI components only",
        "explanation": "Using native UI components only không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Using a hierarchical widget tree."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 56,
    "question": "Which widget enables custom scroll effects in Flutter?",
    "options": [
      {
        "key": "A",
        "text": "ListView",
        "explanation": "ListView không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là CustomScrollView."
      },
      {
        "key": "B",
        "text": "SingleChildScrollView",
        "explanation": "SingleChildScrollView không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là CustomScrollView."
      },
      {
        "key": "C",
        "text": "CustomScrollView",
        "explanation": "CustomScrollView là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Column",
        "explanation": "Column không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là CustomScrollView."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 57,
    "question": "Which practice improves rendering performance?",
    "options": [
      {
        "key": "A",
        "text": "Large widget trees",
        "explanation": "Large widget trees không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Splitting widgets."
      },
      {
        "key": "B",
        "text": "Splitting widgets",
        "explanation": "Splitting widgets là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Global state",
        "explanation": "Global state không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Splitting widgets."
      },
      {
        "key": "D",
        "text": "Frequent rebuilds",
        "explanation": "Frequent rebuilds không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Splitting widgets."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 58,
    "question": "What does an integration test verify?",
    "options": [
      {
        "key": "A",
        "text": "Single function",
        "explanation": "Single function không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là End-to-end app behavior."
      },
      {
        "key": "B",
        "text": "Widget rendering",
        "explanation": "Widget rendering không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là End-to-end app behavior."
      },
      {
        "key": "C",
        "text": "End-to-end app behavior",
        "explanation": "End-to-end app behavior là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Theme consistency",
        "explanation": "Theme consistency không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là End-to-end app behavior."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 59,
    "question": "Why is separating UI and state logic recommended?",
    "options": [
      {
        "key": "A",
        "text": "Reduce code size",
        "explanation": "Reduce code size không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Improve maintainability."
      },
      {
        "key": "B",
        "text": "Improve maintainability",
        "explanation": "Improve maintainability là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Faster execution",
        "explanation": "Faster execution không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Improve maintainability."
      },
      {
        "key": "D",
        "text": "Better animations",
        "explanation": "Better animations không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Improve maintainability."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 60,
    "question": "When does Flutter rebuild the widget tree?",
    "options": [
      {
        "key": "A",
        "text": "On every frame",
        "explanation": "On every frame không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là When state changes."
      },
      {
        "key": "B",
        "text": "When state changes",
        "explanation": "When state changes là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Only when app restarts",
        "explanation": "Only when app restarts không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là When state changes."
      },
      {
        "key": "D",
        "text": "Only during hot restart",
        "explanation": "Only during hot restart không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là When state changes."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 61,
    "question": "Which concept does BLoC heavily rely on?",
    "options": [
      {
        "key": "A",
        "text": "Future",
        "explanation": "Future không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Stream."
      },
      {
        "key": "B",
        "text": "Stream",
        "explanation": "Stream là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Animation",
        "explanation": "Animation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Stream."
      },
      {
        "key": "D",
        "text": "Theme",
        "explanation": "Theme không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Stream."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 62,
    "question": "Why is version control critical?",
    "options": [
      {
        "key": "A",
        "text": "UI changes",
        "explanation": "UI changes không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Track and manage code changes."
      },
      {
        "key": "B",
        "text": "Track and manage code changes",
        "explanation": "Track and manage code changes là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Improve animations",
        "explanation": "Improve animations không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Track and manage code changes."
      },
      {
        "key": "D",
        "text": "Store data",
        "explanation": "Store data không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Track and manage code changes."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 63,
    "question": "Why is immutability important in BLoC states?",
    "options": [
      {
        "key": "A",
        "text": "UI speed",
        "explanation": "UI speed không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Predictable state changes."
      },
      {
        "key": "B",
        "text": "Predictable state changes",
        "explanation": "Predictable state changes là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Memory usage",
        "explanation": "Memory usage không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Predictable state changes."
      },
      {
        "key": "D",
        "text": "Theme control",
        "explanation": "Theme control không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Predictable state changes."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 64,
    "question": "Which Flutter plugin provides SQLite support?",
    "options": [
      {
        "key": "A",
        "text": "hive",
        "explanation": "hive không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là sqflite."
      },
      {
        "key": "B",
        "text": "moor",
        "explanation": "moor không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là sqflite."
      },
      {
        "key": "C",
        "text": "sqflite",
        "explanation": "sqflite là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "shared_preferences",
        "explanation": "shared_preferences không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là sqflite."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 65,
    "question": "What is the main benefit of using Maps in Dart?",
    "options": [
      {
        "key": "A",
        "text": "Storing values without keys",
        "explanation": "Storing values without keys không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Storing key-value pairs."
      },
      {
        "key": "B",
        "text": "Storing key-value pairs",
        "explanation": "Storing key-value pairs là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Rendering UI components",
        "explanation": "Rendering UI components không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Storing key-value pairs."
      },
      {
        "key": "D",
        "text": "Managing asynchronous tasks",
        "explanation": "Managing asynchronous tasks không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Storing key-value pairs."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 66,
    "question": "Which tool helps analyze UI performance in Flutter?",
    "options": [
      {
        "key": "A",
        "text": "Inspector",
        "explanation": "Inspector không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là DevTools."
      },
      {
        "key": "B",
        "text": "DevTools",
        "explanation": "DevTools là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Emulator",
        "explanation": "Emulator không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là DevTools."
      },
      {
        "key": "D",
        "text": "Hot reload",
        "explanation": "Hot reload không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là DevTools."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 67,
    "question": "What does a Dart class primarily represent?",
    "options": [
      {
        "key": "A",
        "text": "A UI widget only",
        "explanation": "A UI widget only không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là A blueprint for creating objects."
      },
      {
        "key": "B",
        "text": "A blueprint for creating objects",
        "explanation": "A blueprint for creating objects là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "A database table",
        "explanation": "A database table không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là A blueprint for creating objects."
      },
      {
        "key": "D",
        "text": "A network request",
        "explanation": "A network request không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là A blueprint for creating objects."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 68,
    "question": "Which constructor creates list items lazily as they scroll into view?",
    "options": [
      {
        "key": "A",
        "text": "ListView.builder",
        "explanation": "ListView.builder chỉ tạo các phần tử khi cần, phù hợp với danh sách dài."
      },
      {
        "key": "B",
        "text": "ListView.children",
        "explanation": "ListView.children nhận trước toàn bộ danh sách widget nên không phải lựa chọn tối ưu cho cơ chế tạo lười."
      },
      {
        "key": "C",
        "text": "Column",
        "explanation": "Column dựng tất cả widget con và bản thân không cung cấp khả năng cuộn."
      },
      {
        "key": "D",
        "text": "Stack",
        "explanation": "Stack dùng để xếp chồng widget, không dùng để tạo danh sách theo nhu cầu."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 69,
    "question": "What is Hive mainly used for?",
    "options": [
      {
        "key": "A",
        "text": "Remote database",
        "explanation": "Remote database không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Lightweight local NoSQL storage."
      },
      {
        "key": "B",
        "text": "Lightweight local NoSQL storage",
        "explanation": "Lightweight local NoSQL storage là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "State management",
        "explanation": "State management không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Lightweight local NoSQL storage."
      },
      {
        "key": "D",
        "text": "Routing",
        "explanation": "Routing không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Lightweight local NoSQL storage."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 70,
    "question": "Which HTTP header is commonly used for authorization?",
    "options": [
      {
        "key": "A",
        "text": "Content-Type",
        "explanation": "Content-Type không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Authorization."
      },
      {
        "key": "B",
        "text": "Accept",
        "explanation": "Accept không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Authorization."
      },
      {
        "key": "C",
        "text": "Authorization",
        "explanation": "Authorization là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Cache-Control",
        "explanation": "Cache-Control không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Authorization."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 71,
    "question": "What does TextEditingController manage?",
    "options": [
      {
        "key": "A",
        "text": "Theme",
        "explanation": "Theme không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Text input value."
      },
      {
        "key": "B",
        "text": "Text input value",
        "explanation": "Text input value là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Validation rules",
        "explanation": "Validation rules không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Text input value."
      },
      {
        "key": "D",
        "text": "Layout constraints",
        "explanation": "Layout constraints không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Text input value."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 72,
    "question": "Why is Dart considered suitable for Flutter development?",
    "options": [
      {
        "key": "A",
        "text": "It is only used for backend systems",
        "explanation": "It is only used for backend systems không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là It supports both UI and application logic efficiently."
      },
      {
        "key": "B",
        "text": "It supports both UI and application logic efficiently",
        "explanation": "It supports both UI and application logic efficiently là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "It replaces native languages",
        "explanation": "It replaces native languages không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là It supports both UI and application logic efficiently."
      },
      {
        "key": "D",
        "text": "It does not support asynchronous programming",
        "explanation": "It does not support asynchronous programming không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là It supports both UI and application logic efficiently."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 73,
    "question": "What does the build() method return in a widget?",
    "options": [
      {
        "key": "A",
        "text": "A screen",
        "explanation": "A screen không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là A widget tree describing the UI."
      },
      {
        "key": "B",
        "text": "A widget tree describing the UI",
        "explanation": "A widget tree describing the UI là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Application state",
        "explanation": "Application state không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là A widget tree describing the UI."
      },
      {
        "key": "D",
        "text": "Rendered pixels",
        "explanation": "Rendered pixels không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là A widget tree describing the UI."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 74,
    "question": "What represents the output of a BLoC?",
    "options": [
      {
        "key": "A",
        "text": "Events",
        "explanation": "Events không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là States."
      },
      {
        "key": "B",
        "text": "Widgets",
        "explanation": "Widgets không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là States."
      },
      {
        "key": "C",
        "text": "States",
        "explanation": "States là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "D",
        "text": "Controllers",
        "explanation": "Controllers không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là States."
      }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 75,
    "question": "What is Cubit in BLoC?",
    "options": [
      {
        "key": "A",
        "text": "UI widget",
        "explanation": "UI widget không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Simplified BLoC without events."
      },
      {
        "key": "B",
        "text": "Simplified BLoC without events",
        "explanation": "Simplified BLoC without events là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Database layer",
        "explanation": "Database layer không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Simplified BLoC without events."
      },
      {
        "key": "D",
        "text": "Animation helper",
        "explanation": "Animation helper không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Simplified BLoC without events."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 76,
    "question": "Which activity is typically performed after creating a new Flutter project?",
    "options": [
      {
        "key": "A",
        "text": "Deploying to app stores",
        "explanation": "Deploying to app stores không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Running the default app on a device."
      },
      {
        "key": "B",
        "text": "Running the default app on a device",
        "explanation": "Running the default app on a device là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Configuring authentication",
        "explanation": "Configuring authentication không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Running the default app on a device."
      },
      {
        "key": "D",
        "text": "Optimizing database queries",
        "explanation": "Optimizing database queries không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Running the default app on a device."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 77,
    "question": "Which practice improves deployment security?",
    "options": [
      {
        "key": "A",
        "text": "Debug builds",
        "explanation": "Debug builds không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Secure signing keys."
      },
      {
        "key": "B",
        "text": "Secure signing keys",
        "explanation": "Secure signing keys là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Hardcoding secrets",
        "explanation": "Hardcoding secrets không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Secure signing keys."
      },
      {
        "key": "D",
        "text": "Skipping validation",
        "explanation": "Skipping validation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Secure signing keys."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 78,
    "question": "Why is Chapter 14 considered optional (Plus)?",
    "options": [
      {
        "key": "A",
        "text": "Deployment is UI logic",
        "explanation": "Deployment is UI logic không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Apps can be tested without publishing."
      },
      {
        "key": "B",
        "text": "Apps can be tested without publishing",
        "explanation": "Apps can be tested without publishing là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "It replaces authentication",
        "explanation": "It replaces authentication không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Apps can be tested without publishing."
      },
      {
        "key": "D",
        "text": "It handles APIs",
        "explanation": "It handles APIs không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Apps can be tested without publishing."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 79,
    "question": "What is the primary purpose of ThemeData in Flutter?",
    "options": [
      {
        "key": "A",
        "text": "Manage navigation",
        "explanation": "Manage navigation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Define application-wide visual styles."
      },
      {
        "key": "B",
        "text": "Define application-wide visual styles",
        "explanation": "Define application-wide visual styles là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Handle state changes",
        "explanation": "Handle state changes không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Define application-wide visual styles."
      },
      {
        "key": "D",
        "text": "Control animations",
        "explanation": "Control animations không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Define application-wide visual styles."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 80,
    "question": "Which method is used to update the UI when state changes?",
    "options": [
      {
        "key": "A",
        "text": "build()",
        "explanation": "build() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là setState()."
      },
      {
        "key": "B",
        "text": "setState()",
        "explanation": "setState() là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "initState()",
        "explanation": "initState() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là setState()."
      },
      {
        "key": "D",
        "text": "dispose()",
        "explanation": "dispose() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là setState()."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 81,
    "question": "Which Flutter package is commonly used for simple key-value storage?",
    "options": [
      {
        "key": "A",
        "text": "sqflite",
        "explanation": "sqflite không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là shared_preferences."
      },
      {
        "key": "B",
        "text": "shared_preferences",
        "explanation": "shared_preferences là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "provider",
        "explanation": "provider không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là shared_preferences."
      },
      {
        "key": "D",
        "text": "http",
        "explanation": "http không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là shared_preferences."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 82,
    "question": "Why should architecture be decided early?",
    "options": [
      {
        "key": "A",
        "text": "Avoid UI work",
        "explanation": "Avoid UI work không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Reduce refactoring cost."
      },
      {
        "key": "B",
        "text": "Reduce refactoring cost",
        "explanation": "Reduce refactoring cost là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Improve animations",
        "explanation": "Improve animations không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Reduce refactoring cost."
      },
      {
        "key": "D",
        "text": "Change theme",
        "explanation": "Change theme không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Reduce refactoring cost."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 83,
    "question": "What is pagination used for?",
    "options": [
      {
        "key": "A",
        "text": "UI animation",
        "explanation": "UI animation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Handling large datasets efficiently."
      },
      {
        "key": "B",
        "text": "Handling large datasets efficiently",
        "explanation": "Handling large datasets efficiently là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Theme management",
        "explanation": "Theme management không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Handling large datasets efficiently."
      },
      {
        "key": "D",
        "text": "Authentication",
        "explanation": "Authentication không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Handling large datasets efficiently."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 84,
    "question": "Which widget helps avoid rebuilding unchanged UI parts?",
    "options": [
      {
        "key": "A",
        "text": "Container",
        "explanation": "Container không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là RepaintBoundary."
      },
      {
        "key": "B",
        "text": "RepaintBoundary",
        "explanation": "RepaintBoundary là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Column",
        "explanation": "Column không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là RepaintBoundary."
      },
      {
        "key": "D",
        "text": "FutureBuilder",
        "explanation": "FutureBuilder không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là RepaintBoundary."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 85,
    "question": "Which widget is used to handle asynchronous API responses in UI?",
    "options": [
      {
        "key": "A",
        "text": "FutureBuilder",
        "explanation": "FutureBuilder là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "B",
        "text": "ListView",
        "explanation": "ListView không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là FutureBuilder."
      },
      {
        "key": "C",
        "text": "Provider",
        "explanation": "Provider không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là FutureBuilder."
      },
      {
        "key": "D",
        "text": "Form",
        "explanation": "Form không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là FutureBuilder."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 86,
    "question": "Which Dart feature helps organize code into reusable libraries?",
    "options": [
      {
        "key": "A",
        "text": "Widgets",
        "explanation": "Widgets không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Packages and imports."
      },
      {
        "key": "B",
        "text": "Packages and imports",
        "explanation": "Packages and imports là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Hot reload",
        "explanation": "Hot reload không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Packages and imports."
      },
      {
        "key": "D",
        "text": "Layout constraints",
        "explanation": "Layout constraints không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Packages and imports."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 87,
    "question": "What is refresh token used for?",
    "options": [
      {
        "key": "A",
        "text": "UI refresh",
        "explanation": "UI refresh không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Extend session without re-login."
      },
      {
        "key": "B",
        "text": "Extend session without re-login",
        "explanation": "Extend session without re-login là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Theme update",
        "explanation": "Theme update không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Extend session without re-login."
      },
      {
        "key": "D",
        "text": "Navigation reset",
        "explanation": "Navigation reset không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Extend session without re-login."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 88,
    "question": "What is rebuild scope optimization in Flutter?",
    "options": [
      {
        "key": "A",
        "text": "Reducing widget tree depth",
        "explanation": "Reducing widget tree depth không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Limiting rebuild to affected widgets."
      },
      {
        "key": "B",
        "text": "Limiting rebuild to affected widgets",
        "explanation": "Limiting rebuild to affected widgets là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Caching API responses",
        "explanation": "Caching API responses không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Limiting rebuild to affected widgets."
      },
      {
        "key": "D",
        "text": "Using global state",
        "explanation": "Using global state không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Limiting rebuild to affected widgets."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 89,
    "question": "Why is BLoC suitable for large teams?",
    "options": [
      {
        "key": "A",
        "text": "Less code",
        "explanation": "Less code không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Standardized architecture."
      },
      {
        "key": "B",
        "text": "Standardized architecture",
        "explanation": "Standardized architecture là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Faster builds",
        "explanation": "Faster builds không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Standardized architecture."
      },
      {
        "key": "D",
        "text": "UI reuse",
        "explanation": "UI reuse không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Standardized architecture."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 90,
    "question": "Which lifecycle method runs once when a State object is first inserted into the widget tree?",
    "options": [
      {
        "key": "A",
        "text": "build()",
        "explanation": "build() có thể chạy nhiều lần mỗi khi Flutter cần dựng lại giao diện."
      },
      {
        "key": "B",
        "text": "initState()",
        "explanation": "initState() được gọi đúng một lần khi State được tạo và gắn vào cây widget."
      },
      {
        "key": "C",
        "text": "didUpdateWidget()",
        "explanation": "didUpdateWidget() chạy khi widget cha cung cấp một cấu hình widget mới."
      },
      {
        "key": "D",
        "text": "dispose()",
        "explanation": "dispose() chạy khi State bị loại khỏi cây vĩnh viễn để giải phóng tài nguyên."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 91,
    "question": "What is a token in authentication systems?",
    "options": [
      {
        "key": "A",
        "text": "UI key",
        "explanation": "UI key không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Temporary access credential."
      },
      {
        "key": "B",
        "text": "Temporary access credential",
        "explanation": "Temporary access credential là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Database ID",
        "explanation": "Database ID không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Temporary access credential."
      },
      {
        "key": "D",
        "text": "Theme value",
        "explanation": "Theme value không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Temporary access credential."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 92,
    "question": "What does a Tween define?",
    "options": [
      {
        "key": "A",
        "text": "Animation speed",
        "explanation": "Animation speed không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Range of values for animation."
      },
      {
        "key": "B",
        "text": "Range of values for animation",
        "explanation": "Range of values for animation là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "UI layout",
        "explanation": "UI layout không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Range of values for animation."
      },
      {
        "key": "D",
        "text": "State logic",
        "explanation": "State logic không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Range of values for animation."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 93,
    "question": "Which Dart feature allows defining reusable, type-safe components?",
    "options": [
      {
        "key": "A",
        "text": "Mixins",
        "explanation": "Mixins không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Generics."
      },
      {
        "key": "B",
        "text": "Generics",
        "explanation": "Generics là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Futures",
        "explanation": "Futures không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Generics."
      },
      {
        "key": "D",
        "text": "Streams",
        "explanation": "Streams không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Generics."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 94,
    "question": "Which widget animates between two widgets?",
    "options": [
      {
        "key": "A",
        "text": "AnimatedSwitcher",
        "explanation": "AnimatedSwitcher là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "B",
        "text": "AnimatedOpacity",
        "explanation": "AnimatedOpacity không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là AnimatedSwitcher."
      },
      {
        "key": "C",
        "text": "AnimatedAlign",
        "explanation": "AnimatedAlign không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là AnimatedSwitcher."
      },
      {
        "key": "D",
        "text": "AnimatedSize",
        "explanation": "AnimatedSize không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là AnimatedSwitcher."
      }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 95,
    "question": "Why should setState() be called sparingly?",
    "options": [
      {
        "key": "A",
        "text": "It increases app size",
        "explanation": "It increases app size không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là It may trigger unnecessary rebuilds."
      },
      {
        "key": "B",
        "text": "It may trigger unnecessary rebuilds",
        "explanation": "It may trigger unnecessary rebuilds là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "It blocks UI thread",
        "explanation": "It blocks UI thread không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là It may trigger unnecessary rebuilds."
      },
      {
        "key": "D",
        "text": "It causes memory leaks",
        "explanation": "It causes memory leaks không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là It may trigger unnecessary rebuilds."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 96,
    "question": "What is test isolation?",
    "options": [
      {
        "key": "A",
        "text": "Running all tests together",
        "explanation": "Running all tests together không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Independence of test cases."
      },
      {
        "key": "B",
        "text": "Independence of test cases",
        "explanation": "Independence of test cases là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "UI separation",
        "explanation": "UI separation không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Independence of test cases."
      },
      {
        "key": "D",
        "text": "Mocking only",
        "explanation": "Mocking only không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Independence of test cases."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 97,
    "question": "What does crossAxisAlignment control?",
    "options": [
      {
        "key": "A",
        "text": "Vertical alignment in Column",
        "explanation": "Vertical alignment in Column không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Horizontal alignment in Column."
      },
      {
        "key": "B",
        "text": "Horizontal alignment in Column",
        "explanation": "Horizontal alignment in Column là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "Child order",
        "explanation": "Child order không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Horizontal alignment in Column."
      },
      {
        "key": "D",
        "text": "Widget size",
        "explanation": "Widget size không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Horizontal alignment in Column."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 98,
    "question": "Which tool is commonly used for version control?",
    "options": [
      {
        "key": "A",
        "text": "SVN",
        "explanation": "SVN không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Git."
      },
      {
        "key": "B",
        "text": "Git",
        "explanation": "Git là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "FTP",
        "explanation": "FTP không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Git."
      },
      {
        "key": "D",
        "text": "ZIP",
        "explanation": "ZIP không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là Git."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 99,
    "question": "Which method is used to clean up resources in a StatefulWidget?",
    "options": [
      {
        "key": "A",
        "text": "initState()",
        "explanation": "initState() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là dispose()."
      },
      {
        "key": "B",
        "text": "dispose()",
        "explanation": "dispose() là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "build()",
        "explanation": "build() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là dispose()."
      },
      {
        "key": "D",
        "text": "setState()",
        "explanation": "setState() không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là dispose()."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 100,
    "question": "Which keyword is used to handle asynchronous programming in Dart?",
    "options": [
      {
        "key": "A",
        "text": "try/catch",
        "explanation": "try/catch không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là async/await."
      },
      {
        "key": "B",
        "text": "async/await",
        "explanation": "async/await là đáp án phù hợp nhất với kiến thức được hỏi."
      },
      {
        "key": "C",
        "text": "class/extends",
        "explanation": "class/extends không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là async/await."
      },
      {
        "key": "D",
        "text": "final/const",
        "explanation": "final/const không phải lựa chọn chính xác trong ngữ cảnh này; đáp án đúng là async/await."
      }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 101,
    "question": "What happens if layout constraints are violated in Flutter?",
    "options": [
      { "key": "A", "text": "App crashes silently", "explanation": "App crashes silently không phải lựa chọn chính xác; đáp án đúng là A layout overflow error occurs." },
      { "key": "B", "text": "Widget is ignored", "explanation": "Widget is ignored không phải lựa chọn chính xác; đáp án đúng là A layout overflow error occurs." },
      { "key": "C", "text": "A layout overflow error occurs", "explanation": "Khi constraints bị vi phạm, Flutter sẽ hiển thị lỗi layout overflow (overflow error) rõ ràng trên màn hình." },
      { "key": "D", "text": "UI is automatically fixed", "explanation": "UI is automatically fixed không phải lựa chọn chính xác; đáp án đúng là A layout overflow error occurs." }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 102,
    "question": "What is the primary benefit of InheritedWidget?",
    "options": [
      { "key": "A", "text": "Memory management", "explanation": "Memory management không phải lợi ích chính; đáp án đúng là Efficient data propagation." },
      { "key": "B", "text": "Automatic layout", "explanation": "Automatic layout không phải lợi ích chính; đáp án đúng là Efficient data propagation." },
      { "key": "C", "text": "State persistence", "explanation": "State persistence không phải lợi ích chính; đáp án đúng là Efficient data propagation." },
      { "key": "D", "text": "Efficient data propagation", "explanation": "InheritedWidget cho phép truyền dữ liệu hiệu quả xuống cây widget mà không cần truyền qua từng constructor." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 103,
    "question": "Which statement best describes Flutter's layout system?",
    "options": [
      { "key": "A", "text": "Uses XML layouts", "explanation": "Flutter không dùng XML; đáp án đúng là Parent sets constraints, child chooses size." },
      { "key": "B", "text": "Child controls parent size", "explanation": "Child không điều khiển parent; đáp án đúng là Parent sets constraints, child chooses size." },
      { "key": "C", "text": "Parent sets constraints, child chooses size", "explanation": "Trong Flutter, parent truyền constraints xuống, child chọn kích thước phù hợp trong phạm vi đó." },
      { "key": "D", "text": "Based on absolute positioning", "explanation": "Flutter không dùng absolute positioning mặc định; đáp án đúng là Parent sets constraints, child chooses size." }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 104,
    "question": "Which database package provides SQL support in Flutter?",
    "options": [
      { "key": "A", "text": "shared_preferences", "explanation": "shared_preferences dùng cho key-value, không phải SQL; đáp án đúng là sqflite." },
      { "key": "B", "text": "sqflite", "explanation": "sqflite là package cung cấp hỗ trợ SQLite (SQL) trong Flutter." },
      { "key": "C", "text": "path", "explanation": "path là package xử lý đường dẫn file; đáp án đúng là sqflite." },
      { "key": "D", "text": "hive", "explanation": "hive là NoSQL database; đáp án đúng là sqflite." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 105,
    "question": "What role does the Flutter framework play in application development?",
    "options": [
      { "key": "A", "text": "It provides UI components and rendering logic", "explanation": "Flutter cung cấp các widget UI và engine rendering để xây dựng giao diện." },
      { "key": "B", "text": "It manages database servers", "explanation": "Flutter không quản lý database server; đáp án đúng là It provides UI components and rendering logic." },
      { "key": "C", "text": "It replaces the operating system", "explanation": "Flutter không thay thế OS; đáp án đúng là It provides UI components and rendering logic." },
      { "key": "D", "text": "It runs backend business logic", "explanation": "Flutter không chạy backend; đáp án đúng là It provides UI components and rendering logic." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 106,
    "question": "Which widget allows overlapping of its child widgets?",
    "options": [
      { "key": "A", "text": "Expanded", "explanation": "Expanded dùng để giãn widget trong Row/Column; đáp án đúng là Stack." },
      { "key": "B", "text": "Row", "explanation": "Row xếp widget ngang hàng; đáp án đúng là Stack." },
      { "key": "C", "text": "Column", "explanation": "Column xếp widget dọc; đáp án đúng là Stack." },
      { "key": "D", "text": "Stack", "explanation": "Stack cho phép các widget con chồng lên nhau (overlap) theo thứ tự z-index." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 107,
    "question": "What does crossAxisAlignment control?",
    "options": [
      { "key": "A", "text": "Child order", "explanation": "Child order không phải chức năng của crossAxisAlignment; đáp án đúng là Horizontal alignment in Column." },
      { "key": "B", "text": "Widget size", "explanation": "Widget size không phải chức năng của crossAxisAlignment; đáp án đúng là Horizontal alignment in Column." },
      { "key": "C", "text": "Vertical alignment in Column", "explanation": "crossAxisAlignment trong Column điều khiển căn chỉnh theo chiều ngang (cross axis), không phải dọc." },
      { "key": "D", "text": "Horizontal alignment in Column", "explanation": "Trong Column, cross axis là chiều ngang, nên crossAxisAlignment điều khiển căn chỉnh ngang của các widget con." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 108,
    "question": "What problem does state lifting help solve?",
    "options": [
      { "key": "A", "text": "Sharing state between widgets", "explanation": "State lifting (nâng state lên widget cha) giúp chia sẻ state giữa các widget anh em." },
      { "key": "B", "text": "API errors", "explanation": "API errors không phải vấn đề state lifting giải quyết; đáp án đúng là Sharing state between widgets." },
      { "key": "C", "text": "Layout overflow", "explanation": "Layout overflow không phải vấn đề state lifting giải quyết; đáp án đúng là Sharing state between widgets." },
      { "key": "D", "text": "UI rendering", "explanation": "UI rendering không phải vấn đề state lifting giải quyết; đáp án đúng là Sharing state between widgets." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 109,
    "question": "What is the role of the version property in openDatabase()?",
    "options": [
      { "key": "A", "text": "Package version", "explanation": "Không phải package version; đáp án đúng là Database schema version for migrations." },
      { "key": "B", "text": "Database schema version for migrations", "explanation": "version trong openDatabase() xác định phiên bản schema để thực hiện migrations khi cập nhật cấu trúc DB." },
      { "key": "C", "text": "App version", "explanation": "Không phải app version; đáp án đúng là Database schema version for migrations." },
      { "key": "D", "text": "Flutter SDK version", "explanation": "Không phải Flutter SDK version; đáp án đúng là Database schema version for migrations." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 110,
    "question": "Which widget is commonly used as the root of a Flutter app?",
    "options": [
      { "key": "A", "text": "Column", "explanation": "Column là layout widget, không phải root; đáp án đúng là MaterialApp." },
      { "key": "B", "text": "Container", "explanation": "Container là layout widget; đáp án đúng là MaterialApp." },
      { "key": "C", "text": "Scaffold", "explanation": "Scaffold thường là root của một screen, nhưng root của toàn app là MaterialApp." },
      { "key": "D", "text": "MaterialApp", "explanation": "MaterialApp là widget gốc thường dùng cho Flutter app, cung cấp theme, routing và localization." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 111,
    "question": "Which HTTP method is typically used to retrieve data?",
    "options": [
      { "key": "A", "text": "PUT", "explanation": "PUT dùng để cập nhật dữ liệu; đáp án đúng là GET." },
      { "key": "B", "text": "DELETE", "explanation": "DELETE dùng để xóa dữ liệu; đáp án đúng là GET." },
      { "key": "C", "text": "GET", "explanation": "GET là HTTP method dùng để truy xuất (retrieve) dữ liệu từ server." },
      { "key": "D", "text": "POST", "explanation": "POST dùng để gửi/tạo dữ liệu mới; đáp án đúng là GET." }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 112,
    "question": "What is the primary purpose of ThemeData in Flutter?",
    "options": [
      { "key": "A", "text": "Handle state changes", "explanation": "ThemeData không xử lý state; đáp án đúng là Define application-wide visual styles." },
      { "key": "B", "text": "Control animations", "explanation": "ThemeData không điều khiển animation; đáp án đúng là Define application-wide visual styles." },
      { "key": "C", "text": "Define application-wide visual styles", "explanation": "ThemeData định nghĩa bộ style màu sắc, typography, và hình dạng dùng xuyên suốt toàn bộ app." },
      { "key": "D", "text": "Manage navigation", "explanation": "ThemeData không quản lý navigation; đáp án đúng là Define application-wide visual styles." }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 113,
    "question": "What is session expiration?",
    "options": [
      { "key": "A", "text": "Theme reset", "explanation": "Theme reset không phải session expiration; đáp án đúng là Automatic logout after inactivity." },
      { "key": "B", "text": "UI timeout", "explanation": "UI timeout không phải session expiration; đáp án đúng là Automatic logout after inactivity." },
      { "key": "C", "text": "API limit", "explanation": "API limit không phải session expiration; đáp án đúng là Automatic logout after inactivity." },
      { "key": "D", "text": "Automatic logout after inactivity", "explanation": "Session expiration là cơ chế tự động đăng xuất người dùng sau một khoảng thời gian không hoạt động." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 114,
    "question": "What does the build() method return in a widget?",
    "options": [
      { "key": "A", "text": "Application state", "explanation": "build() không trả về application state; đáp án đúng là A widget tree describing the UI." },
      { "key": "B", "text": "A screen", "explanation": "build() trả về widget tree, không phải screen; đáp án đúng là A widget tree describing the UI." },
      { "key": "C", "text": "A widget tree describing the UI", "explanation": "Phương thức build() trả về một cây widget mô tả giao diện người dùng cần hiển thị." },
      { "key": "D", "text": "Rendered pixels", "explanation": "build() không trả về pixels; đáp án đúng là A widget tree describing the UI." }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 115,
    "question": "What is the primary role of widgets in Flutter?",
    "options": [
      { "key": "A", "text": "Compiling Dart code", "explanation": "Widgets không biên dịch Dart code; đáp án đúng là Describing the user interface." },
      { "key": "B", "text": "Describing the user interface", "explanation": "Widget trong Flutter là đơn vị cơ bản để mô tả giao diện người dùng." },
      { "key": "C", "text": "Handling network requests", "explanation": "Widgets không xử lý network requests; đáp án đúng là Describing the user interface." },
      { "key": "D", "text": "Managing databases", "explanation": "Widgets không quản lý database; đáp án đúng là Describing the user interface." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 116,
    "question": "Which Provider method listens for changes and rebuilds UI?",
    "options": [
      { "key": "A", "text": "listen()", "explanation": "listen() không tồn tại trong Provider API; đáp án đúng là watch()." },
      { "key": "B", "text": "select()", "explanation": "select() dùng để lắng nghe một phần dữ liệu; đáp án đúng là watch()." },
      { "key": "C", "text": "read()", "explanation": "read() đọc giá trị không lắng nghe thay đổi; đáp án đúng là watch()." },
      { "key": "D", "text": "watch()", "explanation": "context.watch() lắng nghe thay đổi từ Provider và tự động rebuild UI khi có thay đổi." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 117,
    "question": "Which Flutter package is commonly used for simple key-value storage?",
    "options": [
      { "key": "A", "text": "http", "explanation": "http dùng cho network requests; đáp án đúng là shared_preferences." },
      { "key": "B", "text": "sqflite", "explanation": "sqflite dùng cho SQL database; đáp án đúng là shared_preferences." },
      { "key": "C", "text": "provider", "explanation": "provider dùng cho state management; đáp án đúng là shared_preferences." },
      { "key": "D", "text": "shared_preferences", "explanation": "shared_preferences là package phổ biến nhất để lưu trữ dữ liệu key-value đơn giản trong Flutter." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 118,
    "question": "What is the role of the Expanded widget?",
    "options": [
      { "key": "A", "text": "Align widgets", "explanation": "Align widgets không phải chức năng của Expanded; đáp án đúng là Force a widget to take available space." },
      { "key": "B", "text": "Add margin", "explanation": "Add margin không phải chức năng của Expanded; đáp án đúng là Force a widget to take available space." },
      { "key": "C", "text": "Force a widget to take available space", "explanation": "Expanded buộc widget con chiếm hết không gian còn lại trong Row hoặc Column." },
      { "key": "D", "text": "Fix widget size", "explanation": "Fix widget size không phải chức năng của Expanded; đáp án đúng là Force a widget to take available space." }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 119,
    "question": "Which method is used to update the UI when state changes?",
    "options": [
      { "key": "A", "text": "setState()", "explanation": "setState() thông báo cho Flutter biết state đã thay đổi và cần rebuild lại widget." },
      { "key": "B", "text": "initState()", "explanation": "initState() chạy khi widget được tạo lần đầu; đáp án đúng là setState()." },
      { "key": "C", "text": "dispose()", "explanation": "dispose() dọn dẹp tài nguyên khi widget bị xóa; đáp án đúng là setState()." },
      { "key": "D", "text": "build()", "explanation": "build() được gọi để xây dựng UI, nhưng để kích hoạt rebuild cần gọi setState() trước." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 120,
    "question": "What is the main advantage of using Provider?",
    "options": [
      { "key": "A", "text": "Faster rendering", "explanation": "Provider không trực tiếp cải thiện rendering speed; đáp án đúng là Simpler state sharing and management." },
      { "key": "B", "text": "Simpler state sharing and management", "explanation": "Provider đơn giản hóa việc chia sẻ và quản lý state giữa các widget trong ứng dụng." },
      { "key": "C", "text": "Better animations", "explanation": "Provider không liên quan đến animations; đáp án đúng là Simpler state sharing and management." },
      { "key": "D", "text": "Improved navigation", "explanation": "Provider không cải thiện navigation; đáp án đúng là Simpler state sharing and management." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 121,
    "question": "What does the decoration property in TextField allow?",
    "options": [
      { "key": "A", "text": "Change font size", "explanation": "Font size không phải chức năng của decoration; đáp án đúng là Add labels, icons, and hint text." },
      { "key": "B", "text": "Manage state", "explanation": "Manage state không phải chức năng của decoration; đáp án đúng là Add labels, icons, and hint text." },
      { "key": "C", "text": "Add labels, icons, and hint text", "explanation": "Thuộc tính decoration trong TextField (dùng InputDecoration) cho phép thêm label, icon, hint và border." },
      { "key": "D", "text": "Control focus", "explanation": "Control focus không phải chức năng của decoration; đáp án đúng là Add labels, icons, and hint text." }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 122,
    "question": "What is the benefit of using named routes?",
    "options": [
      { "key": "A", "text": "Reduced memory usage", "explanation": "Named routes không giảm memory; đáp án đúng là Easier navigation management in large apps." },
      { "key": "B", "text": "Easier navigation management in large apps", "explanation": "Named routes giúp quản lý navigation dễ dàng hơn trong app lớn bằng cách dùng tên thay vì tạo widget trực tiếp." },
      { "key": "C", "text": "Better animations", "explanation": "Named routes không cải thiện animations; đáp án đúng là Easier navigation management in large apps." },
      { "key": "D", "text": "Faster performance", "explanation": "Named routes không cải thiện performance; đáp án đúng là Easier navigation management in large apps." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 123,
    "question": "What is the main purpose of app architecture?",
    "options": [
      { "key": "A", "text": "Improve animations", "explanation": "Architecture không trực tiếp cải thiện animations; đáp án đúng là Organize code structure." },
      { "key": "B", "text": "Handle API", "explanation": "Handle API không phải mục đích chính của architecture; đáp án đúng là Organize code structure." },
      { "key": "C", "text": "UI design", "explanation": "UI design không phải mục đích chính của architecture; đáp án đúng là Organize code structure." },
      { "key": "D", "text": "Organize code structure", "explanation": "Kiến trúc ứng dụng (app architecture) giúp tổ chức cấu trúc code có hệ thống, dễ bảo trì và mở rộng." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 124,
    "question": "What does a Dart class primarily represent?",
    "options": [
      { "key": "A", "text": "A network request", "explanation": "Class không đại diện cho network request; đáp án đúng là A blueprint for creating objects." },
      { "key": "B", "text": "A database table", "explanation": "Class không chỉ đại diện cho database table; đáp án đúng là A blueprint for creating objects." },
      { "key": "C", "text": "A UI widget only", "explanation": "Class không chỉ là UI widget; đáp án đúng là A blueprint for creating objects." },
      { "key": "D", "text": "A blueprint for creating objects", "explanation": "Trong Dart, class là khuôn mẫu (blueprint) để tạo ra các đối tượng có cùng thuộc tính và phương thức." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 125,
    "question": "What is the main purpose of control flow statements in Dart?",
    "options": [
      { "key": "A", "text": "To control the execution order of code", "explanation": "Control flow statements (if, for, while, switch) điều khiển thứ tự thực thi của code." },
      { "key": "B", "text": "To handle network requests", "explanation": "Control flow không xử lý network requests; đáp án đúng là To control the execution order of code." },
      { "key": "C", "text": "To store data permanently", "explanation": "Control flow không lưu trữ dữ liệu; đáp án đúng là To control the execution order of code." },
      { "key": "D", "text": "To manage UI layout", "explanation": "Control flow không quản lý UI layout; đáp án đúng là To control the execution order of code." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 126,
    "question": "What is the purpose of focusNode in a TextField?",
    "options": [
      { "key": "A", "text": "Handle validation", "explanation": "focusNode không xử lý validation; đáp án đúng là Control which widget has keyboard focus." },
      { "key": "B", "text": "Control which widget has keyboard focus", "explanation": "FocusNode điều khiển widget nào đang có keyboard focus, cho phép lập trình viên request/release focus theo ý muốn." },
      { "key": "C", "text": "Manage text value", "explanation": "Manage text value là chức năng của TextEditingController; đáp án đúng là Control which widget has keyboard focus." },
      { "key": "D", "text": "Style the input", "explanation": "Style input dùng decoration; đáp án đúng là Control which widget has keyboard focus." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 127,
    "question": "What is the main use of local storage in apps?",
    "options": [
      { "key": "A", "text": "Manage network hardware", "explanation": "Local storage không quản lý network hardware; đáp án đúng là Persist user settings and small data." },
      { "key": "B", "text": "Compile code", "explanation": "Local storage không biên dịch code; đáp án đúng là Persist user settings and small data." },
      { "key": "C", "text": "Persist user settings and small data", "explanation": "Local storage dùng để lưu trữ cài đặt người dùng và dữ liệu nhỏ trên thiết bị giữa các phiên." },
      { "key": "D", "text": "Host web servers", "explanation": "Local storage không host web server; đáp án đúng là Persist user settings and small data." }
    ],
    "correctAnswer": "C"
  },
  {
    "id": 128,
    "question": "What benefit does using a centralized theme provide?",
    "options": [
      { "key": "A", "text": "Consistent UI appearance", "explanation": "Theme tập trung đảm bảo giao diện nhất quán trên toàn bộ app, dễ thay đổi và bảo trì." },
      { "key": "B", "text": "Better state management", "explanation": "Centralized theme không cải thiện state management; đáp án đúng là Consistent UI appearance." },
      { "key": "C", "text": "Reduced widget rebuilds", "explanation": "Centralized theme không giảm widget rebuilds; đáp án đúng là Consistent UI appearance." },
      { "key": "D", "text": "Faster API calls", "explanation": "Centralized theme không cải thiện API calls; đáp án đúng là Consistent UI appearance." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 129,
    "question": "What does context.read() do in Provider?",
    "options": [
      { "key": "A", "text": "Reads value without listening", "explanation": "context.read() đọc giá trị từ Provider một lần mà không đăng ký lắng nghe thay đổi." },
      { "key": "B", "text": "Creates provider", "explanation": "context.read() không tạo provider; đáp án đúng là Reads value without listening." },
      { "key": "C", "text": "Disposes provider", "explanation": "context.read() không dispose provider; đáp án đúng là Reads value without listening." },
      { "key": "D", "text": "Listens to changes", "explanation": "Listens to changes là chức năng của context.watch(), không phải read(); đáp án đúng là Reads value without listening." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 130,
    "question": "Why is understanding the widget lifecycle important?",
    "options": [
      { "key": "A", "text": "Deploy apps faster", "explanation": "Widget lifecycle không giúp deploy nhanh hơn; đáp án đúng là Manage UI updates correctly." },
      { "key": "B", "text": "Reduce file size", "explanation": "Widget lifecycle không giảm file size; đáp án đúng là Manage UI updates correctly." },
      { "key": "C", "text": "Improve API performance", "explanation": "Widget lifecycle không cải thiện API performance; đáp án đúng là Manage UI updates correctly." },
      { "key": "D", "text": "Manage UI updates correctly", "explanation": "Hiểu vòng đời widget giúp quản lý đúng lúc khởi tạo, cập nhật và dọn dẹp tài nguyên UI." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 131,
    "question": "What happens if a non-nullable variable is not initialized in Dart?",
    "options": [
      { "key": "A", "text": "A runtime exception occurs", "explanation": "Không phải runtime; Dart bắt lỗi tại compile-time; đáp án đúng là A compile-time error occurs." },
      { "key": "B", "text": "The value becomes null automatically", "explanation": "Non-nullable variable không thể null; đáp án đúng là A compile-time error occurs." },
      { "key": "C", "text": "The app runs normally", "explanation": "App sẽ không chạy được; đáp án đúng là A compile-time error occurs." },
      { "key": "D", "text": "A compile-time error occurs", "explanation": "Dart null safety yêu cầu non-nullable variable phải được khởi tạo, nếu không sẽ báo lỗi compile-time." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 132,
    "question": "What is the main purpose of the Container widget?",
    "options": [
      { "key": "A", "text": "Layout, styling, and positioning", "explanation": "Container kết hợp nhiều chức năng: đặt kích thước, thêm padding/margin, trang trí và định vị widget con." },
      { "key": "B", "text": "Navigation", "explanation": "Container không xử lý navigation; đáp án đúng là Layout, styling, and positioning." },
      { "key": "C", "text": "Network requests", "explanation": "Container không xử lý network; đáp án đúng là Layout, styling, and positioning." },
      { "key": "D", "text": "State management", "explanation": "Container không quản lý state; đáp án đúng là Layout, styling, and positioning." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 133,
    "question": "What does Navigator.pop() do?",
    "options": [
      { "key": "A", "text": "Close current screen", "explanation": "Navigator.pop() xóa màn hình hiện tại khỏi navigation stack, quay lại màn hình trước." },
      { "key": "B", "text": "Clear stack", "explanation": "Clear stack không phải chức năng của Navigator.pop(); đáp án đúng là Close current screen." },
      { "key": "C", "text": "Restart app", "explanation": "Navigator.pop() không restart app; đáp án đúng là Close current screen." },
      { "key": "D", "text": "Open a new screen", "explanation": "Open new screen là chức năng của Navigator.push(); đáp án đúng là Close current screen." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 134,
    "question": "What is the main benefit of Flutter's widget-based architecture?",
    "options": [
      { "key": "A", "text": "Widgets allow code reuse across platforms", "explanation": "Kiến trúc widget của Flutter cho phép tái sử dụng code trên nhiều nền tảng (iOS, Android, Web, Desktop)." },
      { "key": "B", "text": "Widgets are only used for layout design", "explanation": "Widgets không chỉ dùng cho layout; đáp án đúng là Widgets allow code reuse across platforms." },
      { "key": "C", "text": "Widgets automatically manage databases", "explanation": "Widgets không quản lý database; đáp án đúng là Widgets allow code reuse across platforms." },
      { "key": "D", "text": "Widgets replace backend services", "explanation": "Widgets không thay thế backend; đáp án đúng là Widgets allow code reuse across platforms." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 135,
    "question": "What is a route in Flutter?",
    "options": [
      { "key": "A", "text": "An abstraction for a screen or page", "explanation": "Trong Flutter, route là khái niệm trừu tượng đại diện cho một màn hình hoặc trang trong navigation stack." },
      { "key": "B", "text": "A network request", "explanation": "Route không phải network request; đáp án đúng là An abstraction for a screen or page." },
      { "key": "C", "text": "A theme configuration", "explanation": "Route không phải theme; đáp án đúng là An abstraction for a screen or page." },
      { "key": "D", "text": "A database path", "explanation": "Route không phải database path; đáp án đúng là An abstraction for a screen or page." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 136,
    "question": "What is the role of the Consumer widget in Provider?",
    "options": [
      { "key": "A", "text": "Listen and rebuild specific parts of the UI", "explanation": "Consumer lắng nghe Provider và chỉ rebuild phần UI bên trong nó, giúp tối ưu hiệu năng." },
      { "key": "B", "text": "Create state", "explanation": "Consumer không tạo state; đáp án đúng là Listen and rebuild specific parts of the UI." },
      { "key": "C", "text": "Manage navigation", "explanation": "Consumer không quản lý navigation; đáp án đúng là Listen and rebuild specific parts of the UI." },
      { "key": "D", "text": "Define themes", "explanation": "Consumer không định nghĩa themes; đáp án đúng là Listen and rebuild specific parts of the UI." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 137,
    "question": "What is the main benefit of using Maps in Dart?",
    "options": [
      { "key": "A", "text": "Storing key-value pairs", "explanation": "Map trong Dart cho phép lưu trữ dữ liệu theo cặp key-value, tra cứu nhanh theo key." },
      { "key": "B", "text": "Rendering UI components", "explanation": "Map không dùng để render UI; đáp án đúng là Storing key-value pairs." },
      { "key": "C", "text": "Managing asynchronous tasks", "explanation": "Map không quản lý async tasks; đáp án đúng là Storing key-value pairs." },
      { "key": "D", "text": "Storing values without keys", "explanation": "Storing without keys là đặc điểm của List, không phải Map; đáp án đúng là Storing key-value pairs." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 138,
    "question": "Which control structure is used to repeat a block of code in Dart?",
    "options": [
      { "key": "A", "text": "if", "explanation": "if dùng cho điều kiện, không phải lặp; đáp án đúng là for." },
      { "key": "B", "text": "for", "explanation": "Vòng lặp for (cùng với while, do-while) dùng để lặp lại một khối code trong Dart." },
      { "key": "C", "text": "switch", "explanation": "switch dùng cho nhiều điều kiện; đáp án đúng là for." },
      { "key": "D", "text": "try", "explanation": "try dùng để xử lý ngoại lệ; đáp án đúng là for." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 139,
    "question": "What is the primary purpose of the Dart programming language in Flutter?",
    "options": [
      { "key": "A", "text": "Building user interfaces and application logic", "explanation": "Dart là ngôn ngữ chính của Flutter, dùng để xây dựng cả UI và logic nghiệp vụ của ứng dụng." },
      { "key": "B", "text": "Running backend servers", "explanation": "Dart trong Flutter không dùng cho backend servers; đáp án đúng là Building user interfaces and application logic." },
      { "key": "C", "text": "Handling operating system processes", "explanation": "Dart không xử lý OS processes; đáp án đúng là Building user interfaces and application logic." },
      { "key": "D", "text": "Managing databases", "explanation": "Dart không chuyên quản lý database; đáp án đúng là Building user interfaces and application logic." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 140,
    "question": "What is the purpose of the path_provider package?",
    "options": [
      { "key": "A", "text": "Manage network paths", "explanation": "path_provider không quản lý network paths; đáp án đúng là Find commonly used locations on the host file system." },
      { "key": "B", "text": "Find commonly used locations on the host file system", "explanation": "path_provider cung cấp các đường dẫn đến thư mục phổ biến như Documents, Temp trên hệ thống file của thiết bị." },
      { "key": "C", "text": "Encrypt data", "explanation": "path_provider không mã hóa dữ liệu; đáp án đúng là Find commonly used locations on the host file system." },
      { "key": "D", "text": "Style the UI", "explanation": "path_provider không style UI; đáp án đúng là Find commonly used locations on the host file system." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 141,
    "question": "What is the main role of Navigator in Flutter?",
    "options": [
      { "key": "A", "text": "State management", "explanation": "Navigator không quản lý state; đáp án đúng là Screen navigation." },
      { "key": "B", "text": "Theme management", "explanation": "Navigator không quản lý theme; đáp án đúng là Screen navigation." },
      { "key": "C", "text": "API calls", "explanation": "Navigator không thực hiện API calls; đáp án đúng là Screen navigation." },
      { "key": "D", "text": "Screen navigation", "explanation": "Navigator quản lý navigation stack và điều hướng giữa các màn hình trong Flutter app." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 142,
    "question": "What is an API timeout used for?",
    "options": [
      { "key": "A", "text": "Prevent waiting indefinitely", "explanation": "API timeout giới hạn thời gian chờ response, tránh app bị treo khi server không phản hồi." },
      { "key": "B", "text": "Speed up UI", "explanation": "API timeout không trực tiếp speed up UI; đáp án đúng là Prevent waiting indefinitely." },
      { "key": "C", "text": "Encrypt data", "explanation": "API timeout không mã hóa dữ liệu; đáp án đúng là Prevent waiting indefinitely." },
      { "key": "D", "text": "Retry requests", "explanation": "API timeout không tự retry; đáp án đúng là Prevent waiting indefinitely." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 143,
    "question": "What is the purpose of onSaved callback?",
    "options": [
      { "key": "A", "text": "Reset form", "explanation": "onSaved không reset form; đáp án đúng là Store form values." },
      { "key": "B", "text": "Display errors", "explanation": "Display errors là chức năng của validator; đáp án đúng là Store form values." },
      { "key": "C", "text": "Validate input", "explanation": "Validate input là chức năng của validator; đáp án đúng là Store form values." },
      { "key": "D", "text": "Store form values", "explanation": "onSaved callback được gọi khi form.save() được gọi, dùng để lưu giá trị của các field." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 144,
    "question": "What is the primary responsibility of the setState() method?",
    "options": [
      { "key": "A", "text": "Trigger widget rebuild", "explanation": "setState() thông báo Flutter rằng state đã thay đổi và cần rebuild lại widget để phản ánh thay đổi đó." },
      { "key": "B", "text": "Handle async tasks", "explanation": "setState() không xử lý async tasks; đáp án đúng là Trigger widget rebuild." },
      { "key": "C", "text": "Persist data", "explanation": "setState() không lưu trữ dữ liệu; đáp án đúng là Trigger widget rebuild." },
      { "key": "D", "text": "Navigate screens", "explanation": "setState() không điều hướng màn hình; đáp án đúng là Trigger widget rebuild." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 145,
    "question": "What is Dart primarily designed for in the Flutter ecosystem?",
    "options": [
      { "key": "A", "text": "General-purpose programming with UI focus", "explanation": "Dart được thiết kế cho lập trình đa mục đích với trọng tâm là phát triển UI, đặc biệt trong hệ sinh thái Flutter." },
      { "key": "B", "text": "Network security", "explanation": "Network security không phải mục đích chính của Dart; đáp án đúng là General-purpose programming with UI focus." },
      { "key": "C", "text": "User interface development", "explanation": "UI development là một phần, nhưng Dart cũng hỗ trợ general-purpose programming; đáp án đúng là General-purpose programming with UI focus." },
      { "key": "D", "text": "Database management", "explanation": "Database management không phải mục đích chính của Dart; đáp án đúng là General-purpose programming with UI focus." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 146,
    "question": "How is the Flutter UI constructed internally?",
    "options": [
      { "key": "A", "text": "Using native UI components only", "explanation": "Flutter không dùng native UI components; đáp án đúng là Using a hierarchical widget tree." },
      { "key": "B", "text": "Using XML layout files", "explanation": "Flutter không dùng XML; đáp án đúng là Using a hierarchical widget tree." },
      { "key": "C", "text": "Using HTML and CSS", "explanation": "Flutter không dùng HTML/CSS; đáp án đúng là Using a hierarchical widget tree." },
      { "key": "D", "text": "Using a hierarchical widget tree", "explanation": "Flutter xây dựng UI thông qua cây widget phân cấp (hierarchical widget tree), tự render bằng Skia/Impeller engine." }
    ],
    "correctAnswer": "D"
  },
  {
    "id": 147,
    "question": "What is the main difference between StatelessWidget and StatefulWidget?",
    "options": [
      { "key": "A", "text": "Performance", "explanation": "Performance không phải sự khác biệt chính; đáp án đúng là Ability to hold mutable state." },
      { "key": "B", "text": "Ability to hold mutable state", "explanation": "StatefulWidget có thể lưu trữ mutable state (thay đổi được), StatelessWidget thì không." },
      { "key": "C", "text": "Platform compatibility", "explanation": "Platform compatibility không phải sự khác biệt; đáp án đúng là Ability to hold mutable state." },
      { "key": "D", "text": "Rendering engine", "explanation": "Cả hai đều dùng cùng rendering engine; đáp án đúng là Ability to hold mutable state." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 148,
    "question": "What happens if local storage fails?",
    "options": [
      { "key": "A", "text": "Fallback logic is required", "explanation": "Khi local storage thất bại, ứng dụng cần có fallback logic để xử lý tình huống và tránh crash." },
      { "key": "B", "text": "Data syncs", "explanation": "Data không tự sync khi storage fail; đáp án đúng là Fallback logic is required." },
      { "key": "C", "text": "App crashes", "explanation": "App không nhất thiết phải crash nếu có xử lý lỗi đúng; đáp án đúng là Fallback logic is required." },
      { "key": "D", "text": "UI freezes", "explanation": "UI không nhất thiết freeze; đáp án đúng là Fallback logic is required." }
    ],
    "correctAnswer": "A"
  },
  {
    "id": 149,
    "question": "When should you prefer Provider over setState()?",
    "options": [
      { "key": "A", "text": "For simple UI updates", "explanation": "Simple UI updates phù hợp với setState(); đáp án đúng là For global or shared state." },
      { "key": "B", "text": "For global or shared state", "explanation": "Provider phù hợp khi state cần chia sẻ giữa nhiều widget hoặc cần quản lý state ở cấp độ toàn app." },
      { "key": "C", "text": "For navigation", "explanation": "Provider không thay thế Navigator; đáp án đúng là For global or shared state." },
      { "key": "D", "text": "For animations", "explanation": "Provider không liên quan đến animations; đáp án đúng là For global or shared state." }
    ],
    "correctAnswer": "B"
  },
  {
    "id": 150,
    "question": "What is the main advantage of Navigator 2.0?",
    "options": [
      { "key": "A", "text": "Simpler code", "explanation": "Navigator 2.0 thực ra phức tạp hơn 1.0; đáp án đúng là Better control over the navigation stack." },
      { "key": "B", "text": "Faster rendering", "explanation": "Navigator 2.0 không cải thiện rendering; đáp án đúng là Better control over the navigation stack." },
      { "key": "C", "text": "Automatic themes", "explanation": "Navigator 2.0 không liên quan đến themes; đáp án đúng là Better control over the navigation stack." },
      { "key": "D", "text": "Better control over the navigation stack", "explanation": "Navigator 2.0 cung cấp API declarative cho phép kiểm soát navigation stack chi tiết hơn, hỗ trợ deep linking và web routing." }
    ],
    "correctAnswer": "D"
  }
];

// Cho phép kiểm tra dữ liệu bằng Node mà không ảnh hưởng khi chạy trên trình duyệt.
if (typeof module !== "undefined") module.exports = questions;
