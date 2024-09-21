# Welcome to Reactjs Quest05
***

## Task
The task was to build a simple yet functional calculator using ReactJS. This calculator should allow users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It should also be capable of handling multiple operations in sequence and include a clear (C) button to reset the input. The project is hosted on Netlify, and the entire UI should be intuitive, with buttons mapped to respective operations and a display to show the result of calculations.

The challenge was to design the app following React best practices, including breaking the application down into multiple components, using state effectively, and ensuring each component has its own CSS for styling. Furthermore, the app was required to be deployed to a cloud platform and accessible via a URL, which introduced additional considerations regarding deployment and hosting.


## Description
The problem was solved by building a ReactJS calculator with the following key components:

    Calculator component: This manages the overall logic and state for the calculator, including how user inputs are handled and how operations are performed.

    Display component: This shows the current input or result of calculations.

    Button component: Each calculator button is rendered individually, and their appearance and functionality are managed through props.

The calculator performs the following operations:

    Addition (+)

    Subtraction (-)

    Multiplication (*)

    Division (/)

    Clear input (C)

    Evaluate expression (=)


React’s state and event-handling capabilities were used to build the functionality. The eval() function was employed to process the mathematical expressions entered by the user, ensuring proper calculation. The project structure ensures that each component is modular and easy to manage, while the use of component-specific CSS files enhances maintainability.

The app is hosted on Netlify for easy access and deployment.


## Installation
Clone this repository to your local machine:
    git clone https://github.com/your-username/my_reactjs_calculator.git


Navigate to the project directory:
    cd my_reactjs_calculator

Install the required dependencies:
    npm install

Start the development server:
    npm start

The project will now be running on http://localhost:3000.


## Usage
Once the application is running, you can perform the following operations in the calculator:

    Click on any number or operator to build a mathematical expression.

    Press = to evaluate the expression and see the result on the display.

    Press C to clear the current input and start a new calculation.

    The calculator supports multiple operations in sequence (e.g., 2 + 3 * 5 - 4 / 2).
    
The application is fully responsive and should work on both desktop and mobile screens.

Once hosted on Netlify, you can access the live version of the calculator via the URL written in the my_reactjs_calculator_url.txt file.





Project Structure:

my_reactjs_calculator/
│
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Button.js
│   │   ├── Display.js
│   │   └── Calculator.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
└── package.json



### The Core Team
Nsikan Essoh - Software Engineer


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
<span><img alt='Qwasar SV -- Software Engineering School's Logo' src='https://storage.googleapis.com/qwasar-public/qwasar-logo_50x50.png' width='20px' /></span>
