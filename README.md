# 🌟 Welcome To (সহজ সরল সিম্পল) Assignment - 5

# **📅 Deadline For 60 marks:** 9th March, 2026 (11:59 pm ⏱️)

# 📅 No Deadline For 50 marks

# **📅 Deadline For 30 marks:** Any time after 9th March.

---

# Assignment-05: GitHub Issues Tracker

### **API Endpoints:**

### **All Issues:**

- https://phi-lab-server.vercel.app/api/v1/lab/issues

### **Single Issue:**

- https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

- Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33

### **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

- Example: https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications

---

## 📝 Main Requirements

## 🎨 Design Part

## Login Page

- Create a login page containing a logo, title, and sub-title
- Below that, there will be 2 inputs, a sign-in button, and a demo credential to sign in. Follow the Figma for this page
- Styled as per Figma

## Main Page:

### Navbar:

- Navbar with website logo/name on the left
- Search input and button on the right

### Tab Section like Figma:

- 3 tab ( All, Open, Closed) at the top of this section.(**All**, **Open**, **Closed**)

- Below the tab, there will be an icon, the issue count, some text on the left, and an open and closed marker on the right

- Responsiveness: The website should be responsive for mobile devices. It is totally up to you.

---

## ⚙️ Functionalities

- In login page, there will be default admin credentials (username, password). You need to sign in using these credentials.

- Load all issues and display as per Figma

- On clicking on an open or closed tab, it will load the issues data of the related tab and show it in a display-like card in a 4-column layout like Figma. By default, it will show all data

- Each card shows:
  - Title
  - Description
  - Status
  - Category
  - Author
  - Priority
  - Label
  - CreatedAt
- Clicking on a tree name in a card will open a modal and show all the information about that Issue.

### 🚀 Challenges

- Show the card Top border based on their category(open, closed), open card will have Green Boder, closed card will have a purple border on top.

- Loading spinner on data load

- Show active button on changing category names

- Implement Search Functionality and 8 meaningful github commit.

- Create a readme file and answer this question on your own. Don’t copy-paste from Google or any AI chatbot.

<br>

### 1️⃣ What is the difference between var, let, and const?

var, let, এবং const JavaScript এ variable declare করার জন্য ব্যবহার করা হয়। কিন্তু এদের scope আলাদা।

var = Function scoped একই variable আবার declare করা যায় value change করা যায়

    var name = "Md Shakibul Islam";
    var name = "Md Rokibul Islam";
    console.log(name);

let = Block scoped একই variable আবার declare করা যায় না value change করা যায়

    let age = 20;
    age = 25;
    console.log(age);

const = Block scoped value change করা যায় না declare করার সময় value দিতে হয়

    const country = "Bangladesh";
    console.log(country);

<br>

### 2️⃣ What is the spread operator (...)?

Spread operator (...) ব্যবহার করা হয় array বা object এর elements expand করার জন্য। এটি সাধারণত copy, merge বা নতুন data add করার জন্য ব্যবহার করা হয়।

Example with array:

    const numbers = [1, 2, 3];
    const newNumbers = [...numbers, 4, 5];

    console.log(newNumbers);

Output:

    [1, 2, 3, 4, 5]

Example with object:

    const user = {
    name: "themdshakibul",
    age: 19
    };

    const newUser = {
    ...user,
    country: "Bangladesh"
    };

<br>

### 3️⃣ What is the difference between map(), filter(), and forEach()?

এই তিনটি method array এর উপর কাজ করে।

1 map() প্রতিটি element এর উপর operation চালায় নতুন array return করে

    const numbers = [1, 2, 3];

    const result = numbers.map(num => num \* 2);
    console.log(result);

Output:

    [2, 4, 6]

2 filter() condition অনুযায়ী element select করে
নতুন array return করে

    const numbers = [1, 2, 3, 4];

    const result = numbers.filter(num => num > 2);
    console.log(result);

Output:

    [3, 4]

3 forEach() array এর প্রতিটি element এ loop চালায় নতুন array return করে না

    const numbers = [1, 2, 3];

    numbers.forEach(num => {
    console.log(num);
    });

<br>

### 4️⃣ What is an arrow function?

Arrow function হলো JavaScript এর একটি short function যা ES6 এ introduce করা হয়েছে। এটি function লেখাকে ছোট এবং সহজ করে।

Example:

    const sum = (a, b) => {
    return a + b;
    };

    Short version:
    const sum = (a, b) => a + b;

<br>

### 5️⃣ What are template literals?

Template literals ব্যবহার করা হয় string এর ভিতরে variable বা expression সহজে বসানোর জন্য। এতে backtick ` ব্যবহার করা হয়।

Example:

    const name = "Md Shakibul Islam";
    const age = 19;
    const student = "CSE";


    const message = `My name is ${name} and I am ${age} years old. I am a ${student} Student.`;

    console.log(message);

Output:

    My name is Md Shakibul Islam and I am 19 years old. I am a CSE Student.

---

## 🛠️ Technology Stack

- **HTML**
- **CSS** (Vanilla/Tailwind/DaisyUI)
- **JavaScript** (Vanilla)

---

## 🔑 Demo Credentials

```text
Username: admin
Password: admin123
```

---

### Optional:

- No need to show status: Open, Closed styles On modals.
- No Need to show icon on labels
- No need to apply styles on Priority

---

## 📤 What to submit

- **GitHub Repository Link:**
- **Live Site Link:**

---
