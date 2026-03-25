/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "C-Menu", "index.html", [
    [ "A User Interface Toolkit", "index.html", "index" ],
    [ "API", "d8/d8e/a01224.html", [
      [ "Get C-Menu on Github", "d8/d8e/a01224.html#get-c-menu-on-github-1", null ],
      [ "Introduction", "d8/d8e/a01224.html#introduction", null ],
      [ "API Organization", "d8/d8e/a01224.html#api-organization", [
        [ "C-Menu Header Files", "d8/d8e/a01224.html#c-menu-header-files", [
          [ "include/cm.h", "d8/d8e/a01224.html#includecmh", null ],
          [ "include/common.h", "d8/d8e/a01224.html#includecommonh", null ],
          [ "include/menu.h, form.h, pick.h, and view.h", "d8/d8e/a01224.html#includemenuh-formh-pickh-and-viewh", null ],
          [ "include/version.h and version.h", "d8/d8e/a01224.html#includeversionh-and-versionh", null ],
          [ "Version Compatibility", "d8/d8e/a01224.html#version-compatibility", null ],
          [ "Roadmap for API Documentation and User Guide", "d8/d8e/a01224.html#roadmap-for-api-documentation-and-user-guide", null ],
          [ "Documentation", "d8/d8e/a01224.html#documentation", null ]
        ] ]
      ] ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d8/d8e/a01224.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
    ] ],
    [ "User guide", "d8/d53/a01225.html", [
      [ "Get C-Menu on Github", "d8/d53/a01225.html#get-c-menu-on-github-2", null ],
      [ "Table of Contents", "d8/d53/a01225.html#table-of-contents-1", null ],
      [ "Introduction", "d8/d53/a01225.html#introduction-1", null ],
      [ "Prerequisites", "d8/d53/a01225.html#prerequisites", [
        [ "Not Required, But Recommended", "d8/d53/a01225.html#not-required-but-recommended", null ]
      ] ],
      [ "Getting Started", "d8/d53/a01225.html#getting-started", [
        [ "C-Menu File Layout", "d8/d53/a01225.html#c-menu-file-layout", null ],
        [ "RSH Safety Features", "d8/d53/a01225.html#rsh-safety-features", null ],
        [ "Using RSH", "d8/d53/a01225.html#using-rsh", null ],
        [ "RSH - A Use Case", "d8/d53/a01225.html#rsh---a-use-case", null ]
      ] ],
      [ "Starting C-Menu", "d8/d53/a01225.html#starting-c-menu", null ],
      [ "C-Menu configuration", "d8/d53/a01225.html#c-menu-configuration", null ],
      [ "Programming C-Menu Menu", "d8/d53/a01225.html#programming-c-menu-menu", [
        [ "Menu Example", "d8/d53/a01225.html#menu-example", null ],
        [ "Menu Description File Format", "d8/d53/a01225.html#menu-description-file-format", null ]
      ] ],
      [ "C-Menu Form", "d8/d53/a01225.html#c-menu-form", [
        [ "Form Description File Example", "d8/d53/a01225.html#form-description-file-example", [
          [ "Form Line Type Specifiers", "d8/d53/a01225.html#form-line-type-specifiers", null ],
          [ "Form Field Delimiters", "d8/d53/a01225.html#form-field-delimiters", null ],
          [ "Form Data Types", "d8/d53/a01225.html#form-data-types-1", null ],
          [ "Form Line Syntax", "d8/d53/a01225.html#form-line-syntax", null ],
          [ "Form Options", "d8/d53/a01225.html#form-options", null ]
        ] ]
      ] ],
      [ "C-Menu Pick", "d8/d53/a01225.html#c-menu-pick", [
        [ "Pick Usage", "d8/d53/a01225.html#pick-usage", [
          [ "Selecting Items", "d8/d53/a01225.html#selecting-items", null ]
        ] ],
        [ "Pick Options", "d8/d53/a01225.html#pick-options", null ]
      ] ],
      [ "C-Menu View", "d8/d53/a01225.html#c-menu-view", [
        [ "View Options", "d8/d53/a01225.html#view-options", [
          [ "View Navigation", "d8/d53/a01225.html#view-navigation", null ],
          [ "Searching Forward", "d8/d53/a01225.html#searching-forward", null ],
          [ "Searching Backward", "d8/d53/a01225.html#searching-backward", null ],
          [ "Horizontal Scrolling", "d8/d53/a01225.html#horizontal-scrolling", null ],
          [ "Motion Keys", "d8/d53/a01225.html#motion-keys", null ]
        ] ],
        [ "C-Menu Options", "d8/d53/a01225.html#c-menu-options", null ],
        [ "C-Menu configuration file example", "d8/d53/a01225.html#c-menu-configuration-file-example", null ],
        [ "lf", "d8/d53/a01225.html#lf", null ],
        [ "whence", "d8/d53/a01225.html#whence", null ]
      ] ],
      [ "Troubleshooting", "d8/d53/a01225.html#troubleshooting", null ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d8/d53/a01225.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
    ] ],
    [ "Changelog", "dd/d9e/a01226.html", [
      [ "[Released] - 2026-02-04", "dd/d9e/a01226.html#released---2026-02-04", [
        [ "Fixed", "dd/d9e/a01226.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "dd/d9e/a01226.html#autotoc_md028--2026-02-04", [
        [ "Added", "dd/d9e/a01226.html#added", null ]
      ] ]
    ] ],
    [ "EXERCISES", "d9/da8/a01227.html", [
      [ "Exercise 1: System Configurations", "d9/da8/a01227.html#exercise-1-system-configurations", [
        [ "SDDM Background Configuration", "d9/da8/a01227.html#sddm-background-configuration", [
          [ "Requisites", "d9/da8/a01227.html#requisites", null ]
        ] ],
        [ "Ghostty Configuration", "d9/da8/a01227.html#ghostty-configuration", null ],
        [ "Alacritty and Kitty", "d9/da8/a01227.html#alacritty-and-kitty", null ]
      ] ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d9/da8/a01227.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
    ] ],
    [ "Augmenting C-Menu", "de/d16/a01228.html", [
      [ "Get C-Menu on Github", "de/d16/a01228.html#get-c-menu-on-github-3", null ],
      [ "Table of Contents", "de/d16/a01228.html#table-of-contents-2", null ],
      [ "Introduction", "de/d16/a01228.html#introduction-2", null ],
      [ "Installing Rust", "de/d16/a01228.html#installing-rust", [
        [ "Installing Rust On Linux and macOS", "de/d16/a01228.html#installing-rust-on-linux-and-macos", null ]
      ] ],
      [ "About C-Menu and R-Menu", "de/d16/a01228.html#about-c-menu-and-r-menu", null ],
      [ "Installing Bat", "de/d16/a01228.html#installing-bat", [
        [ "Bat On Linux", "de/d16/a01228.html#bat-on-linux", null ],
        [ "Bat On macOS", "de/d16/a01228.html#bat-on-macos", null ],
        [ "Bat On Windows", "de/d16/a01228.html#bat-on-windows", null ]
      ] ],
      [ "Installing Ripgrep", "de/d16/a01228.html#installing-ripgrep", [
        [ "Ripgrep On Linux", "de/d16/a01228.html#ripgrep-on-linux", null ],
        [ "Ripgrep On macOS", "de/d16/a01228.html#ripgrep-on-macos", null ],
        [ "Ripgrep On Windows", "de/d16/a01228.html#ripgrep-on-windows", null ]
      ] ],
      [ "lsd", "de/d16/a01228.html#lsd", [
        [ "lsd On Linux", "de/d16/a01228.html#lsd-on-linux", null ],
        [ "lsd On macOS", "de/d16/a01228.html#lsd-on-macos", null ],
        [ "lsd On Windows", "de/d16/a01228.html#lsd-on-windows", null ]
      ] ],
      [ "Highlighting", "de/d16/a01228.html#highlighting", null ],
      [ "Tree-Sitter", "de/d16/a01228.html#tree-sitter", [
        [ "Tree-Sitter On Linux", "de/d16/a01228.html#tree-sitter-on-linux", null ],
        [ "Tree-Sitter On macOS", "de/d16/a01228.html#tree-sitter-on-macos", null ],
        [ "Tree-Sitter On Windows", "de/d16/a01228.html#tree-sitter-on-windows", null ]
      ] ],
      [ "Tree-Sitter-CLI", "de/d16/a01228.html#tree-sitter-cli", [
        [ "Tree-Sitter-CLI On Linux", "de/d16/a01228.html#tree-sitter-cli-on-linux", null ],
        [ "Tree-Sitter-CLI On macOS", "de/d16/a01228.html#tree-sitter-cli-on-macos", null ],
        [ "Tree-Sitter-CLI On Windows", "de/d16/a01228.html#tree-sitter-cli-on-windows", null ]
      ] ],
      [ "Tree-Sitter Parsers", "de/d16/a01228.html#tree-sitter-parsers", [
        [ "Tree-Sitter Parsers On Linux", "de/d16/a01228.html#tree-sitter-parsers-on-linux", null ],
        [ "Tree-Sitter Parsers On macOS", "de/d16/a01228.html#tree-sitter-parsers-on-macos", null ],
        [ "Tree-Sitter Parsers On Windows", "de/d16/a01228.html#tree-sitter-parsers-on-windows", null ],
        [ "Testing Tree-Sitter", "de/d16/a01228.html#testing-tree-sitter", null ]
      ] ],
      [ "Rustlings", "de/d16/a01228.html#rustlings", null ],
      [ "Neovim", "de/d16/a01228.html#neovim", null ],
      [ "Neovim Configuration", "de/d16/a01228.html#neovim-configuration", [
        [ "Custom Highlights", "de/d16/a01228.html#custom-highlights", null ],
        [ "Norcalli Colorizer", "de/d16/a01228.html#norcalli-colorizer", [
          [ "AI Overview of Developer Norcalli", "de/d16/a01228.html#ai-overview-of-developer-norcalli", null ]
        ] ],
        [ "To Install Norcalli's nvim-colorizer.lua", "de/d16/a01228.html#to-install-norcallis-nvim-colorizerlua", null ]
      ] ],
      [ "Folke's Snacks.nvim", "de/d16/a01228.html#folkes-snacksnvim", null ],
      [ "Neovim Linkage to the C-Menu API", "de/d16/a01228.html#neovim-linkage-to-the-c-menu-api", null ],
      [ "Ghostty", "de/d16/a01228.html#ghostty", [
        [ "Ghostty On Linux", "de/d16/a01228.html#ghostty-on-linux", null ],
        [ "Ghostty On macOS", "de/d16/a01228.html#ghostty-on-macos", null ],
        [ "Ghostty On Windows", "de/d16/a01228.html#ghostty-on-windows", null ]
      ] ],
      [ "Useful Configurations", "de/d16/a01228.html#useful-configurations", [
        [ "Alternate Bash Executable", "de/d16/a01228.html#alternate-bash-executable", null ],
        [ "Shell Configuration", "de/d16/a01228.html#shell-configuration", null ],
        [ "Customize Your Terminal Emulator", "de/d16/a01228.html#customize-your-terminal-emulator", [
          [ "Fonts", "de/d16/a01228.html#fonts", null ],
          [ "Example Terminal Configurations", "de/d16/a01228.html#example-terminal-configurations", [
            [ "Ghostty Configuration", "de/d16/a01228.html#ghostty-configuration-1", null ],
            [ "Kitty Configuration", "de/d16/a01228.html#kitty-configuration", null ],
            [ "Alacritty Configuration", "de/d16/a01228.html#alacritty-configuration", null ]
          ] ]
        ] ]
      ] ],
      [ "Additional Resources", "de/d16/a01228.html#additional-resources", [
        [ "Let's Get Rusty", "de/d16/a01228.html#lets-get-rusty", null ],
        [ "Folke", "de/d16/a01228.html#folke", null ],
        [ "Other Resources", "de/d16/a01228.html#other-resources", null ]
      ] ],
      [ "Conclusion", "de/d16/a01228.html#conclusion", null ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "de/d16/a01228.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-3", null ]
    ] ],
    [ "Frequently Asked Questions", "db/d1c/a01229.html", [
      [ "Table of Contents", "db/d1c/a01229.html#table-of-contents-3", null ],
      [ "Sorted lf Output", "db/d1c/a01229.html#sorted-lf-output", null ],
      [ "Multiple Executables", "db/d1c/a01229.html#multiple-executables", null ],
      [ "Static Executables", "db/d1c/a01229.html#static-executables", null ],
      [ "What's the Icon?", "db/d1c/a01229.html#whats-the-icon", null ],
      [ "C-Menu's File Structure", "db/d1c/a01229.html#c-menus-file-structure", null ],
      [ "Some Menu Selections Don't work", "db/d1c/a01229.html#some-menu-selections-dont-work", [
        [ "Visual Aids Soap-box", "db/d1c/a01229.html#visual-aids-soap-box", null ]
      ] ],
      [ "High Precision Math With C-Menu and Gawk", "db/d1c/a01229.html#high-precision-math-with-c-menu-and-gawk", null ],
      [ "TrueColor Support", "db/d1c/a01229.html#truecolor-support", null ],
      [ "Why View Displays Question Marks", "db/d1c/a01229.html#why-view-displays-question-marks", null ],
      [ "View - How to Colorize Manual Pages", "db/d1c/a01229.html#view---how-to-colorize-manual-pages", null ],
      [ "View - How to Colorize HTML Color Codes", "db/d1c/a01229.html#view---how-to-colorize-html-color-codes", null ],
      [ "View - How to Customize Colors", "db/d1c/a01229.html#view---how-to-customize-colors", null ],
      [ "Menu, Form, Pick, and View API", "db/d1c/a01229.html#menu-form-pick-and-view-api", null ],
      [ "View - How to Use Tree-Sitter with View", "db/d1c/a01229.html#view---how-to-use-tree-sitter-with-view", null ],
      [ "Install Tree-Sitter-CLI", "db/d1c/a01229.html#install-tree-sitter-cli", [
        [ "Download From Github", "db/d1c/a01229.html#download-from-github", null ]
      ] ],
      [ "Menu Form - Integrating External Executables", "db/d1c/a01229.html#menu-form---integrating-external-executables", null ],
      [ "Menu - Using the Installment Loan Calculator", "db/d1c/a01229.html#menu---using-the-installment-loan-calculator", null ],
      [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "db/d1c/a01229.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
      [ "Menu Form - Field Delimiters", "db/d1c/a01229.html#menu-form---field-delimiters", null ],
      [ "Menu Form - Data Types", "db/d1c/a01229.html#menu-form---data-types", null ],
      [ "Menu - Interprocess Communications", "db/d1c/a01229.html#menu---interprocess-communications", null ],
      [ "Menu - What Happened to Delete by Inode", "db/d1c/a01229.html#menu---what-happened-to-delete-by-inode", null ],
      [ "Pick - Selecting Multiple Files", "db/d1c/a01229.html#pick---selecting-multiple-files", null ],
      [ "Menu lf - Where Are My Header Files?", "db/d1c/a01229.html#menu-lf---where-are-my-header-files", null ],
      [ "View In a Box Window", "db/d1c/a01229.html#view-in-a-box-window", null ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "db/d1c/a01229.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-4", null ]
    ] ],
    [ "Installation Guide", "d0/d58/a01230.html", [
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d0/d58/a01230.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-5", null ]
    ] ],
    [ "C-Menu ROADMAP", "d0/d88/a01231.html", [
      [ "0.2.9 - Pre-Release", "d0/d88/a01231.html#autotoc_md029---pre-release", [
        [ "Form", "d0/d88/a01231.html#form", null ],
        [ "Pick", "d0/d88/a01231.html#pick", null ],
        [ "Exercises - Example Use Cases", "d0/d88/a01231.html#exercises---example-use-cases", null ],
        [ "View", "d0/d88/a01231.html#view-1", null ]
      ] ],
      [ "1.0.0 - Initial Release", "d0/d88/a01231.html#autotoc_md100---initial-release", [
        [ "General", "d0/d88/a01231.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "d0/d88/a01231.html#autotoc_md110---feature-enhancements", [
        [ "General", "d0/d88/a01231.html#general-1", null ]
      ] ]
    ] ],
    [ "Configuration snippets", "d0/d67/a01232.html", [
      [ "Table of Contents", "d0/d67/a01232.html#table-of-contents-4", null ],
      [ "C-Menu Desktop Files", "d0/d67/a01232.html#c-menu-desktop-files", null ],
      [ "C-Menu bashrc Configuration", "d0/d67/a01232.html#c-menu-bashrc-configuration", [
        [ "Shell Logging", "d0/d67/a01232.html#shell-logging", null ],
        [ "Prepend Path", "d0/d67/a01232.html#prepend-path", null ],
        [ "Helpful C-Menu Environment Variables", "d0/d67/a01232.html#helpful-c-menu-environment-variables", null ],
        [ "Security Through Obscurity", "d0/d67/a01232.html#security-through-obscurity", null ],
        [ "RSH Helpers", "d0/d67/a01232.html#rsh-helpers", null ],
        [ "Privilege Indicator Shell Prompts", "d0/d67/a01232.html#privilege-indicator-shell-prompts", null ],
        [ "Terminal and Editor Settings", "d0/d67/a01232.html#terminal-and-editor-settings", null ],
        [ "GDB Debugging Setup", "d0/d67/a01232.html#gdb-debugging-setup", null ],
        [ "If You Can't Stop Typing \"vi\"", "d0/d67/a01232.html#if-you-cant-stop-typing-vi", null ],
        [ "C-Menu Startup with \"mm\"", "d0/d67/a01232.html#c-menu-startup-with-mm", null ],
        [ "Curses Escape Delay", "d0/d67/a01232.html#curses-escape-delay", null ],
        [ "Use lsd instead of ls", "d0/d67/a01232.html#use-lsd-instead-of-ls", null ],
        [ "Locale Settings", "d0/d67/a01232.html#locale-settings", null ],
        [ "System Specific Environment Variables", "d0/d67/a01232.html#system-specific-environment-variables", null ]
      ] ],
      [ "C-Menu Configuration", "d0/d67/a01232.html#c-menu-configuration-1", null ],
      [ "Terminal Configurations", "d0/d67/a01232.html#terminal-configurations", [
        [ "Ghostty", "d0/d67/a01232.html#ghostty-1", null ],
        [ "Kitty", "d0/d67/a01232.html#kitty", null ],
        [ "Alacritty", "d0/d67/a01232.html#alacritty", null ]
      ] ],
      [ "Tree-Sitter", "d0/d67/a01232.html#tree-sitter-1", [
        [ "Tree-Sitter config.json", "d0/d67/a01232.html#tree-sitter-configjson", null ]
      ] ]
    ] ],
    [ "Topics", "topics.html", "topics" ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ],
    [ "Examples", "examples.html", "examples" ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"d2/d41/a01037.html#ac5f5de170a9cd6b4f0b683b81b9e8734",
"d6/dcf/a01031.html#a7089bd4cb667475a891d92b36239cc66",
"d8/db9/a00725.html#a530fd019ea5f51cfee9e35be2ac0d6eda32e31c7c2dba6966126627714e9dd73d",
"db/d07/a01155.html#a8f8c9f9b5c1949ee8560f0f09438e70d",
"dd/dee/a01081.html#ga3daf5e92dfdb5cb48ee14a2ecb3ff7c8",
"functions_vars_y.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';