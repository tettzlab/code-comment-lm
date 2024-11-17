# code-comment-lm

A CLI tool leveraging Large Language Models (LLMs) to manipulate code comments. Currently, it supports translating Java code comments from one language to another, with a backup of the original files.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
  - [Method 1: Clone the Repository and Use `npm link`](#method-1-clone-the-repository-and-use-npm-link)
  - [Method 2: Using the Bundled Script](#method-2-using-the-bundled-script)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Options](#options)
  - [Examples](#examples)
- [Important Notice](#important-notice)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- **Translate Java code comments** from one language to another using LLMs.
- **Backup original files** before making changes.
- **Process multiple files and directories**, with recursive directory traversal.
- **Customizable** options for file encoding, languages, backup suffix, and file extensions.
- **Verbose output** for detailed processing logs.

## Requirements

- **Node.js** (version 20 or higher)
- **npm**
- **OpenAI API Key** (for LLM-based translation)

## Installation

Currently, the installation is slightly different since this project is not yet hosted on the npm registry.

### Method 1: Clone the Repository and Use `npm link`

1. **Clone the repository:**

```bash
git clone https://github.com/tettzlab/code-comment-lm.git
cd code-comment-lm
```

2. **Install dependencies:**

```bash
npm install
```

3. **Build the project:**

```bash
npm run rebuild
```

4. **Link the package globally:**

```bash
npm link
```

Note: You might need to use sudo with npm link on Unix-based systems if you encounter permission issues:

```bash
sudo npm link
```

5. **Verify the installation:**

```bash
code-comment-lm --version
```

You should see the version number displayed.

6. **Updating the Tool:**

If you pull new changes from the repository, make sure to run:

```bash
npm install
npm run rebuild
npm link
```

### Method 2: Using the Bundled Script

Alternatively, you can use the all-in-one bundled script without installing the package globally.

1. **Download the bundled script:**

   - [code-comment-lm.cjs](https://github.com/tettzlab/code-comment-lm/blob/main/bundle/code-comment-lm.cjs)
   - [code-comment-lm.min.cjs](https://github.com/tettzlab/code-comment-lm/blob/main/bundle/code-comment-lm.min.cjs) (minified version)

2. **Run the script with Node.js:**

```bash
node code-comment-lm.cjs --help
```

3. **Or make it executable and run directly:**

```bash
chmod a+x code-comment-lm.cjs
./code-comment-lm.cjs --help
```

## Configuration

1. Before using code-comment-lm, you need to set up your OpenAI API key.
2. Obtain an API key from OpenAI.
3. Create a .env file in the root directory of the project and add your API key:

```bash
OPENAI_API_KEY=your_openai_api_key_here
```

Alternatively, you can set the environment variable in your shell:

```bash
export OPENAI_API_KEY=your_openai_api_key_here
```

## Usage

After installation and configuration, you can use code-comment-lm from the command line.

```bash
code-comment-lm [options] <files...>
```

## Options

- -e, --encoding <encoding>: File encoding (default: utf8)
- -f, --from <language>: Source language of the comments (default: English)
- -t, --to <language>: Target language for translation (default: Japanese)
- -s, --suffix <suffix>: Backup file suffix (default: ~)
- -v, --verbose: Enable verbose output
- -r, --recursive: Process directories recursively
- -x, --extension <extension>: File extension to process (default: .java)

## Examples

Translate Java comments from English to Japanese in a single file

```bash
code-comment-lm -f English -t Japanese MyClass.java
```

Process all Java files in a directory recursively

```bash
code-comment-lm -r src/
```

Use custom encoding and backup suffix

```bash
code-comment-lm -e utf16le -s .bak MyClass.java
```

Enable verbose output

```bash
code-comment-lm -v MyClass.java
```

Process files with a custom extension

```bash
code-comment-lm -x .javax src/
```

## Important Notice

**Data Privacy and Permissions**

Please be aware that `code-comment-lm` will upload your code (not only the code comments, but also the entire file for context) to third-party cloud services such as OpenAI for processing.

- **Data Transmission:** Your code is sent over the internet to external servers for translation.
- **Sensitive Information:** Ensure that your code does not contain any sensitive, confidential, or proprietary information that you are not authorized to share.
- **User Responsibility:** By using this tool, you confirm that you have the appropriate permissions to upload the code to these services and agree to their terms of service and privacy policies.
- **OpenAI Policies:** Review OpenAI's [Terms of Use](https://openai.com/policies/terms-of-use) and [Privacy Policy](https://openai.com/policies/privacy-policy) before proceeding.

**Disclaimer:** The authors of `code-comment-lm` are not responsible for any unauthorized use of confidential information. Use this tool at your own risk.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## Contact

For any questions or feedback, please open an issue or contact the maintainer at [tettzlab](https://github.com/tettzlab).
