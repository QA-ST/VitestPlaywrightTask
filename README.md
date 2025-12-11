# Project Setup and Run instructions.

## 1. Install Node.js

### Download the Node.js Installer

- Go to the official site: [https://nodejs.org](https://nodejs.org)
- Click the **LTS (Recommended)** version (e.g., _"LTS - Recommended For Most Users"_)

### Run the Installer

1. After the download is complete, run the `.msi` installer.
2. Accept the license agreement.
3. Leave all options at their default settings (unless you have a specific reason to change them).
4. (Optional) Check **"Automatically install the necessary tools"** — helpful for native modules.
5. Click **Install** and wait for it to complete.

### Verify Installation

- Open **Command Prompt**, **PowerShell** or **Terminal**, and run:

***node -v***

***npm -v***

You should see the versions of Node.js and npm if the installation was successful.
## 2. Clone a Project Using Git

### Prerequisites

Ensure Git is installed on your system:

1. Download Git: https://git-scm.com

2. Install with default settings.

3. Restart the terminal or verify installation with: 

***git --version***

### Steps to Clone a Project

1. Open Terminal

2. Run the Clone Command

***git clone https://github.com/QA-ST/VitestPlaywrightTask.git***

## 3. Open Project Directory in the Visual Studio Code

## Install Dependencies

***npm install***

This installs all required packages for the project.

### Install Playwright Browsers

***npx playwright install***

## 4. Open the terminal and run the following command.

***npm run dev:test***

All tests will run in headed mode, and the execution results will be visible directly in the terminal.