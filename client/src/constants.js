// Standard names
export const AUTH_TOKEN = "auth-token";
export const CHALLENGE_STATE = "challenge-state";

// Styling
export const FLOATING_CENTER_GRID_COLUMN_WIDTH_MEDIUM = { mobile: 16, tablet: 8, computer: 8 };
export const FLOATING_CENTER_GRID_COLUMN_WIDTH_WIDE = { mobile: 16, tablet: 14, computer: 14 };
export const FLOATING_CENTER_GRID_COLUMN_WIDTH_FULL = { mobile: 16, tablet: 16, computer: 16 };

export const CHALLENGE_DETAILS_GRID_COLUMN_LEFT = { mobile: 6, tablet: 4, computer: 4 };
export const CHALLENGE_DETAILS_GRID_COLUMN_RIGHT = { mobile: 10, tablet: 12, computer: 12 };

// Challenge Settings
export const CHALLENGE_TRANSITION_PROPS = {
  animation: "fly left",
  duration: { show: 500, hide: 0 },
};

export const CHALLENGE_DIMMER_TIME = 1000;
export const CHALLENGE_DIMMER_TRANSITION_PROPS = {
  animation: "drop",
  duration: 500,
};

export const CHALLENGE_ANSWER_MODE_WRITTEN = "written";
export const CHALLENGE_ANSWER_MODE_GENERATED = "generated";

export const CHALLENGE_SCORES = {
  // Correct answers.
  // Fully mastered = 1000 points. Repeated correct answers should decrease score.
  correct: {
    mastery: [
      // Difficulties 0, 1, 2, 3, 4, 5.
      [0, 10, 10, 12, 15, 30],  // Written
      [0, 10, 10, 12, 15, 30],  // Conversion
      [0, 10, 10, 12, 15, 30],  // Survey
    ],

    // Difficulties 0, 1, 2, 3, 4, 5.
    survey: [0, 125, 100, 90, 75, 60],
  },

  // Incorrect answers.
  // Each incorrect answer stacks. So that one wrong damages your gains, two takes slightly,
  // and three takes a lot.
  incorrect: {
    mastery: [
      // Difficulties 0, 1, 2, 3, 4, 5.
      [0, -4, -6, -8, -10, -20],  // Written
      [0, -4, -6, -8, -10, -20],  // Conversion
      [0, -4, -6, -8, -10, -20],  // Survey
    ],

    // Difficulties 0, 1, 2, 3, 4, 5.
    survey: [0, -80, -65, -60, -50, -40],
  },

  // Question was skipped.
  // These punishments are only applied when skipping the question at first appearance.
  // Easy questions can be skipped with little punishment. Difficult questions will be punished
  // more severely.
  skipped: {
    mastery: [
      // Difficulties 0, 1, 2, 3, 4, 5.
      [0, 0, -1, -3, -8, -12, -30], // Written
      [0, 0, -1, -3, -8, -12, -30], // Conversion
      [0, 0, -1, -3, -8, -12, -30], // Survey
    ],

    // Difficulties 0, 1, 2, 3, 4, 5.
    survey: [0, 0, -20, -80, -75, -60],
  },
};

export const CHALLENGE_MAX_STRIKES = [
  // 3 = "3 strikes you're out."
  // Difficulties 0, 1, 2, 3, 4, 5.
  [1, 3, 3, 2, 2, 2], // Written
  [1, 5, 3, 3, 3, 2], // Conversion
  [1, 4, 3, 3, 2, 2], // Survey
];

export const CHALLENGE_QUESTION_REPEAT = [
  // This is a config to determine how many times a question might be asked again even after a
  // correct answer. Minimum is 1.
  [1, 3, 2, 1, 1, 1], // Written
  [1, 3, 2, 2, 2, 1], // Conversion
  [1, 3, 2, 2, 2, 1], // Survey
];

// Password
export const PASSWORD_MINIMUM_LENGTH = 6;
export const PASSWORD_MAXIMUM_LENGTH = 128;
export const BAD_PASSWORDS = [
  "password",
  "letmein",
  "asdasd",
  "abcdef",
  "qweqwe",
  "qwerty",
  "abc123",
  "123456",
  "1234567",
  "12345678",
];

// Email
// export const EMAIL_MAXIMUM_LENGTH = 76; // No need as validator/lib/isEmail enforces this limit.
export const EMAIL_NORMALIZE_OPTIONS = {
  all_lowercase: true,
  gmail_lowercase: true,
  gmail_remove_dots: false,
  gmail_remove_subaddress: true,
  gmail_convert_googlemaildotcom: false,
  outlookdotcom_lowercase: true,
  outlookdotcom_remove_subaddress: true,
  yahoo_lowercase: true,
  yahoo_remove_subaddress: true,
  icloud_lowercase: true,
  icloud_remove_subaddress: true,
};
export const EMAIL_SECRET_PREFIXES = [
  "594613e2c5679b0d25e8912b0523b5a9",
  "806158031bb277505a058d0e4e07cff9",
];

// User Information
export const NAME_FIRST_MAXIMUM_LENGTH = 32;
export const NAME_LAST_MAXIMUM_LENGTH = 32;
export const NAME_HONORIFIC_MAXIMUM_LENGTH = 32;

// Question Input
export const QUESTION_TEXT_MAXIMUM_LENGTH = 300;
export const QUESTION_ANSWER_DETAIL_MAXIMUM_LENGTH = 300;
export const QUESTION_ANSWER_CHOICE_MAXIMUM_LENGTH = 64;

// Survey Input
export const SURVEY_DETAIL_MAXIMUM_LENGTH = 128;

// Feedback Input
export const QUESTION_FEEDBACK_MAXIMUM_LENGTH = 500;

// Interface
// Max multiple choice options we can show (including correct answer).
export const MAX_CHOICES = 6;
// Max multiple choice options that can be defined (including correct answer).
export const MAX_CHOICES_DEFINED = 10;

// These are based off DB data so they are subject to change.
export const SUBJECT_ICONS = {
  Length: "arrows alternate horizontal",
  Mass: "balance scale",
  Volume: "cube",
  Temperature: "thermometer three quarters",
  Velocity: "location arrow",
  Area: "clone outline",
};

export const SUBJECT_DROPDOWN = [
  { value: "Length", text: "Length", icon: "arrows alternate horizontal" },
  { value: "Mass", text: "Mass", icon: "balance scale" },
  { value: "Volume", text: "Volume", icon: "cube" },
  { value: "Temperature", text: "Temperature", icon: "thermometer three quarters" },
  { value: "Velocity", text: "Velocity", icon: "location arrow" },
  { value: "Area", text: "Area", icon: "clone outline" },
];

// These are based off DB data so they are subject to change.
export const SCALE_ICONS = {
  // Generic
  hand: "hand paper",
  human: "male",
  room: "bed",
  building: "building",
  // Length
  //  hand, human, room, building
  local: "map signs",
  geographic: "map",
  astronomical: "sun",
  // Mass
  //  hand, human
  street: "truck",
  //  building
  // Volume
  //  hand, room, building
  // Temperature
  weather: "cloud",
  cooking: "food",
  chemistry: "fire",
  // Velocity
  pedestrian: "bicycle",
  transit: "bus",
  racing: "car",
  air: "plane",
  rocket: "rocket",
  // Area
  home: "home",
  commercial: "industry",
  land: "tree",
  jurisdiction: "flag",
  territory: "globe",
};

export const DIRECTION_DROPDOWN = [
  { value: false, text: "From Metric", icon: "undo alternate" },
  { value: true, text: "To Metric", icon: "redo alternate" },
];

// Database Constants
export const FLAGS_NONE = 0;

// User
export const USER_FLAGS_DROPDOWN = [  // There are no flags, yet.
];
export const USER_STATUS_NAMES = [
  "Normal",
  "Closed",
];
export const USER_STATUS_NORMAL = 0;
export const USER_STATUS_CLOSED = 1;
export const USER_STATUS_DROPDOWN = [
  { value: USER_STATUS_NORMAL, text: "Normal", icon: "check" },
  { value: USER_STATUS_CLOSED, text: "Closed", icon: "close" },
];
export const USER_TYPE_NAMES = [
  "Student",
  "Teacher",
  "Moderator",
  "Admin",
];
export const USER_TYPE_STUDENT = 0;
export const USER_TYPE_TEACHER = 1;
export const USER_TYPE_MODERATOR = 2;
export const USER_TYPE_ADMIN = 3;
export const USER_TYPE_DROPDOWN = [
  { value: USER_TYPE_STUDENT, text: "Student", icon: "users" },
  { value: USER_TYPE_TEACHER, text: "Teacher", icon: "university" },
  { value: USER_TYPE_MODERATOR, text: "Moderator", icon: "user secret" },
  { value: USER_TYPE_ADMIN, text: "Admin", icon: "chess king" },
];

// Mastery
export const MASTERY_STATUS_ACTIVE = 0;
export const MASTERY_STATUS_INACTIVE = 1;
export const MASTERY_DEFAULT_SCORE = 0;
export const MASTERY_MIN_SCORE = 0;
export const MASTERY_MAX_SCORE = 1000;

// Survey
export const SURVEY_DEFAULT_SCORE = 0;
export const SURVEY_MIN_SCORE = 0;
export const SURVEY_MAX_SCORE = 1000;
export const SURVEY_STATUS_NORMAL = 0;
export const SURVEY_STATUS_SKIPPED = 1;

// Course
export const COURSE_STATUS_ACTIVE = 0;
export const COURSE_STATUS_INACTIVE = 1;
export const COURSE_FLAG_PREFER_METRIC = 0x01;

// Question
export const QUESTION_TYPE_WRITTEN = 0;
export const QUESTION_TYPE_CONVERSION = 1;
export const QUESTION_TYPE_SURVEY = 2;
export const QUESTION_TYPE_NAMES = [
  "Written",
  "Conversion",
  "Survey",
];
export const QUESTION_TYPE_DROPDOWN = [
  { value: QUESTION_TYPE_WRITTEN, text: "Written", icon: "bullseye" },
  { value: QUESTION_TYPE_CONVERSION, text: "Conversion", icon: "calculator" },
  { value: QUESTION_TYPE_SURVEY, text: "Survey", icon: "edit" },
];
export const QUESTION_STATUS_ACTIVE = 0;
export const QUESTION_STATUS_INACTIVE = 1;
export const QUESTION_STATUS_REVIEW_PENDING = 2;
export const QUESTION_STATUS_REVIEW_REJECTED = 3;
export const QUESTION_STATUS_DROPDOWN = [
  { value: QUESTION_STATUS_ACTIVE, text: "Active", icon: "play" },
  { value: QUESTION_STATUS_INACTIVE, text: "Inactive", icon: "stop" },
  { value: QUESTION_STATUS_REVIEW_PENDING, text: "Review pending", icon: "ellipsis horizontal" },
  { value: QUESTION_STATUS_REVIEW_REJECTED, text: "Review rejected", icon: "ban" },
];
export const QUESTION_DIFFICULTY_NONE = 0;
export const QUESTION_DIFFICULTY_EASY = 1;
export const QUESTION_DIFFICULTY_EASY_MEDIUM = 2;
export const QUESTION_DIFFICULTY_MEDIUM = 3;
export const QUESTION_DIFFICULTY_MEDIUM_HARD = 4;
export const QUESTION_DIFFICULTY_HARD = 5;
export const QUESTION_DIFFICULTY_DROPDOWN = [
  { value: QUESTION_DIFFICULTY_NONE, text: "None", icon: "thermometer empty" },
  { value: QUESTION_DIFFICULTY_EASY, text: "Easy", icon: "thermometer empty" },
  { value: QUESTION_DIFFICULTY_EASY_MEDIUM, text: "Easy/Medium", icon: "thermometer quarter" },
  { value: QUESTION_DIFFICULTY_MEDIUM, text: "Medium", icon: "thermometer half" },
  { value: QUESTION_DIFFICULTY_MEDIUM_HARD, text: "Medium/Hard", icon: "thermometer three quarters" },
  { value: QUESTION_DIFFICULTY_HARD, text: "Hard", icon: "thermometer full" },
];
export const QUESTION_FLAG_USER_DETAIL_OPTIONAL = 0x01; // Survey requests user note (optional)
export const QUESTION_FLAG_USER_DETAIL_REQUIRED = 0x02; // Survey requests user note (required)
export const QUESTION_FLAG_NAMES = {
  0x01: "User note optional",
  0x02: "User note required",
};
export const QUESTION_FLAG_DROPDOWN = [
  {
    value: QUESTION_FLAG_USER_DETAIL_OPTIONAL,
    text: "0x01 User note optional",
    key: 0x01,
  },
  {
    value: QUESTION_FLAG_USER_DETAIL_REQUIRED,
    text: "0x02 User note required",
    key: 0x02,
  },
];

// Unit initials
export const UNIT_INITIALISMS = {
  cum: "m³",
  cuin: "in³",
  c: "°C",
  f: "°F",
  sqm: "m²",
  sqkm: "km²",
  sqft: "ft²",
  sqmi: "mi²",
  kmph: "km/h",
};

export const UNIT_NAMES = {
  mm: "Millimeters",
  cm: "Centimeters",
  m: "Meters",
  km: "Kilometers",
  in: "Inches",
  ft: "Feet",
  yd: "Yards",
  mi: "Miles",
  nmi: "Nautical Miles",
  mg: "Milligrams",
  g: "Grams",
  kg: "Kilograms",
  tonne: "Tonnes",
  oz: "Ounces",
  lb: "Pounds",
  ton: "Short tons",
  lton: "Long tons",
  st: "Stone",
  ml: "Milliliters",
  l: "Liters",
  cum: "Cubic Meters",
  cuin: "Cubic Inches",
  floz: "Fluid Ounces",
  cup: "Cups",
  pt: "Pints",
  qt: "Quarts",
  gal: "Gallons",
  c: "Celsius",
  f: "Fahrenheit",
  sqm: "Square Meters",
  ha: "Hectares",
  sqkm: "Square Kilometers",
  sqft: "Square Feet",
  acre: "Acres",
  sqmi: "Square Miles",
  ms: "Meters per Second",
  kmph: "Kilometers per Hour",
  fps: "Feet per Second",
  mph: "Miles per Hour",
  kn: "Knots",
};

export const UNIT_FAMILIES = {
  metric: {
    length: ["mm", "cm", "m", "km"],
    mass: ["mg", "g", "kg", "tonne"],
    volume: ["ml", "l", "cum"],
    temperature: ["c"],
    area: ["sqm", "ha", "sqkm"],
    velocity: ["ms", "kmph"],
  },
  imperial: {
    length: ["in", "ft", "yd", "mi", "nmi"],
    mass: ["oz", "lb", "ton", "lton", "st"],
    volume: ["cuin", "floz", "cup", "pt", "qt", "gal"],
    temperature: ["f"],
    area: ["sqft", "acre", "sqmi"],
    velocity: ["fps", "mph", "kn"],
  },
};
