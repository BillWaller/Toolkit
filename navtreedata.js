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
    [ "Introduction", "index.html#introduction-4", [
      [ "C-Menu Binaries for Linux x86_64", "index.html#c-menu-binaries-for-linux-x86_64-1", null ],
      [ "Build C-Menu from Source", "index.html#build-c-menu-from-source-1", [
        [ "Finish the installation", "index.html#finish-the-installation-1", null ]
      ] ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "index.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-6", null ]
    ] ],
    [ "API", "d4/d22/a01250.html", [
      [ "Get C-Menu on Github", "d4/d22/a01250.html#get-c-menu-on-github", null ],
      [ "Introduction", "d4/d22/a01250.html#introduction", null ],
      [ "API Organization", "d4/d22/a01250.html#api-organization", [
        [ "C-Menu Header Files", "d4/d22/a01250.html#c-menu-header-files", [
          [ "include/cm.h", "d4/d22/a01250.html#includecmh", null ],
          [ "include/common.h", "d4/d22/a01250.html#includecommonh", null ],
          [ "include/menu.h, form.h, pick.h, and view.h", "d4/d22/a01250.html#includemenuh-formh-pickh-and-viewh", null ],
          [ "include/version.h and version.h", "d4/d22/a01250.html#includeversionh-and-versionh", null ],
          [ "Version Compatibility", "d4/d22/a01250.html#version-compatibility", null ],
          [ "Roadmap for API Documentation and User Guide", "d4/d22/a01250.html#roadmap-for-api-documentation-and-user-guide", null ],
          [ "Documentation", "d4/d22/a01250.html#documentation", null ]
        ] ]
      ] ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d4/d22/a01250.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository", null ]
    ] ],
    [ "User guide", "dc/dc2/a01251.html", [
      [ "Get C-Menu on Github", "dc/dc2/a01251.html#get-c-menu-on-github-1", null ],
      [ "Table of Contents", "dc/dc2/a01251.html#table-of-contents", null ],
      [ "Introduction", "dc/dc2/a01251.html#introduction-1", null ],
      [ "Prerequisites", "dc/dc2/a01251.html#prerequisites", [
        [ "Not Required, But Recommended", "dc/dc2/a01251.html#not-required-but-recommended", null ]
      ] ],
      [ "Getting Started", "dc/dc2/a01251.html#getting-started", [
        [ "C-Menu File Layout", "dc/dc2/a01251.html#c-menu-file-layout", null ],
        [ "RSH Safety Features", "dc/dc2/a01251.html#rsh-safety-features", null ],
        [ "Using RSH", "dc/dc2/a01251.html#using-rsh", null ],
        [ "RSH - A Use Case", "dc/dc2/a01251.html#rsh---a-use-case", null ]
      ] ],
      [ "Starting C-Menu", "dc/dc2/a01251.html#starting-c-menu", null ],
      [ "C-Menu configuration", "dc/dc2/a01251.html#c-menu-configuration", null ],
      [ "Programming C-Menu Menu", "dc/dc2/a01251.html#programming-c-menu-menu", [
        [ "Menu Example", "dc/dc2/a01251.html#menu-example", null ],
        [ "Menu Description File Format", "dc/dc2/a01251.html#menu-description-file-format", null ]
      ] ],
      [ "C-Menu Form In Depth", "dc/dc2/a01251.html#c-menu-form-in-depth", [
        [ "Form field editor", "dc/dc2/a01251.html#form-field-editor", [
          [ "Form Line Type Specifiers", "dc/dc2/a01251.html#form-line-type-specifiers", null ],
          [ "Form Field Delimiters", "dc/dc2/a01251.html#form-field-delimiters", null ],
          [ "Form Data Types", "dc/dc2/a01251.html#form-data-types", null ],
          [ "Form Line Syntax", "dc/dc2/a01251.html#form-line-syntax", null ],
          [ "Form Options", "dc/dc2/a01251.html#form-options", null ]
        ] ]
      ] ],
      [ "C-Menu Pick", "dc/dc2/a01251.html#c-menu-pick", [
        [ "Pick Usage", "dc/dc2/a01251.html#pick-usage", [
          [ "Selecting Items", "dc/dc2/a01251.html#selecting-items", null ]
        ] ],
        [ "Pick Options", "dc/dc2/a01251.html#pick-options", null ]
      ] ],
      [ "C-Menu View", "dc/dc2/a01251.html#c-menu-view", [
        [ "View Options", "dc/dc2/a01251.html#view-options", [
          [ "View Navigation", "dc/dc2/a01251.html#view-navigation", null ],
          [ "Searching Forward", "dc/dc2/a01251.html#searching-forward", null ],
          [ "Searching Backward", "dc/dc2/a01251.html#searching-backward", null ],
          [ "Horizontal Scrolling", "dc/dc2/a01251.html#horizontal-scrolling", null ],
          [ "Motion Keys", "dc/dc2/a01251.html#motion-keys", null ]
        ] ],
        [ "C-Menu Options", "dc/dc2/a01251.html#c-menu-options", null ],
        [ "C-Menu configuration file example", "dc/dc2/a01251.html#c-menu-configuration-file-example", null ],
        [ "lf", "dc/dc2/a01251.html#lf", null ],
        [ "whence", "dc/dc2/a01251.html#whence", null ]
      ] ],
      [ "Troubleshooting", "dc/dc2/a01251.html#troubleshooting", null ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "dc/dc2/a01251.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-1", null ]
    ] ],
    [ "Changelog", "d0/d33/a01252.html", [
      [ "[Released] - 2026-02-04", "d0/d33/a01252.html#released---2026-02-04", [
        [ "Fixed", "d0/d33/a01252.html#fixed", null ]
      ] ],
      [ "[0.2.8]- 2026-02-04", "d0/d33/a01252.html#autotoc_md028--2026-02-04", [
        [ "Added", "d0/d33/a01252.html#added", null ]
      ] ]
    ] ],
    [ "EXERCISES", "d3/d0b/a01253.html", [
      [ "Exercise 1: System Configurations", "d3/d0b/a01253.html#exercise-1-system-configurations", [
        [ "SDDM Background Configuration", "d3/d0b/a01253.html#sddm-background-configuration", [
          [ "Requisites", "d3/d0b/a01253.html#requisites", null ]
        ] ],
        [ "Ghostty Configuration", "d3/d0b/a01253.html#ghostty-configuration", null ],
        [ "Alacritty and Kitty", "d3/d0b/a01253.html#alacritty-and-kitty", null ]
      ] ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d3/d0b/a01253.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-2", null ]
    ] ],
    [ "Augmenting C-Menu", "dc/d83/a01254.html", [
      [ "Get C-Menu on Github", "dc/d83/a01254.html#get-c-menu-on-github-2", null ],
      [ "Table of Contents", "dc/d83/a01254.html#table-of-contents-1", null ],
      [ "Introduction", "dc/d83/a01254.html#introduction-2", null ],
      [ "Installing Rust", "dc/d83/a01254.html#installing-rust", [
        [ "Installing Rust On Linux and macOS", "dc/d83/a01254.html#installing-rust-on-linux-and-macos", null ]
      ] ],
      [ "About C-Menu and R-Menu", "dc/d83/a01254.html#about-c-menu-and-r-menu", null ],
      [ "Installing Bat", "dc/d83/a01254.html#installing-bat", [
        [ "Bat On Linux", "dc/d83/a01254.html#bat-on-linux", null ],
        [ "Bat On macOS", "dc/d83/a01254.html#bat-on-macos", null ],
        [ "Bat On Windows", "dc/d83/a01254.html#bat-on-windows", null ]
      ] ],
      [ "Installing Ripgrep", "dc/d83/a01254.html#installing-ripgrep", [
        [ "Ripgrep On Linux", "dc/d83/a01254.html#ripgrep-on-linux", null ],
        [ "Ripgrep On macOS", "dc/d83/a01254.html#ripgrep-on-macos", null ],
        [ "Ripgrep On Windows", "dc/d83/a01254.html#ripgrep-on-windows", null ]
      ] ],
      [ "lsd", "dc/d83/a01254.html#lsd", [
        [ "lsd On Linux", "dc/d83/a01254.html#lsd-on-linux", null ],
        [ "lsd On macOS", "dc/d83/a01254.html#lsd-on-macos", null ],
        [ "lsd On Windows", "dc/d83/a01254.html#lsd-on-windows", null ]
      ] ],
      [ "Highlighting", "dc/d83/a01254.html#highlighting", null ],
      [ "Tree-Sitter", "dc/d83/a01254.html#tree-sitter", [
        [ "Tree-Sitter On Linux", "dc/d83/a01254.html#tree-sitter-on-linux", null ],
        [ "Tree-Sitter On macOS", "dc/d83/a01254.html#tree-sitter-on-macos", null ],
        [ "Tree-Sitter On Windows", "dc/d83/a01254.html#tree-sitter-on-windows", null ]
      ] ],
      [ "Tree-Sitter-CLI", "dc/d83/a01254.html#tree-sitter-cli", [
        [ "Tree-Sitter-CLI On Linux", "dc/d83/a01254.html#tree-sitter-cli-on-linux", null ],
        [ "Tree-Sitter-CLI On macOS", "dc/d83/a01254.html#tree-sitter-cli-on-macos", null ],
        [ "Tree-Sitter-CLI On Windows", "dc/d83/a01254.html#tree-sitter-cli-on-windows", null ]
      ] ],
      [ "Tree-Sitter Parsers", "dc/d83/a01254.html#tree-sitter-parsers", [
        [ "Tree-Sitter Parsers On Linux", "dc/d83/a01254.html#tree-sitter-parsers-on-linux", null ],
        [ "Tree-Sitter Parsers On macOS", "dc/d83/a01254.html#tree-sitter-parsers-on-macos", null ],
        [ "Tree-Sitter Parsers On Windows", "dc/d83/a01254.html#tree-sitter-parsers-on-windows", null ],
        [ "Testing Tree-Sitter", "dc/d83/a01254.html#testing-tree-sitter", null ]
      ] ],
      [ "Rustlings", "dc/d83/a01254.html#rustlings", null ],
      [ "Neovim", "dc/d83/a01254.html#neovim", null ],
      [ "Neovim Configuration", "dc/d83/a01254.html#neovim-configuration", [
        [ "Custom Highlights", "dc/d83/a01254.html#custom-highlights", null ],
        [ "Norcalli Colorizer", "dc/d83/a01254.html#norcalli-colorizer", [
          [ "AI Overview of Developer Norcalli", "dc/d83/a01254.html#ai-overview-of-developer-norcalli", null ]
        ] ],
        [ "To Install Norcalli's nvim-colorizer.lua", "dc/d83/a01254.html#to-install-norcallis-nvim-colorizerlua", null ]
      ] ],
      [ "Folke's Snacks.nvim", "dc/d83/a01254.html#folkes-snacksnvim", null ],
      [ "Neovim Linkage to the C-Menu API", "dc/d83/a01254.html#neovim-linkage-to-the-c-menu-api", null ],
      [ "Ghostty", "dc/d83/a01254.html#ghostty", [
        [ "Ghostty On Linux", "dc/d83/a01254.html#ghostty-on-linux", null ],
        [ "Ghostty On macOS", "dc/d83/a01254.html#ghostty-on-macos", null ],
        [ "Ghostty On Windows", "dc/d83/a01254.html#ghostty-on-windows", null ]
      ] ],
      [ "Useful Configurations", "dc/d83/a01254.html#useful-configurations", [
        [ "Alternate Bash Executable", "dc/d83/a01254.html#alternate-bash-executable", null ],
        [ "Shell Configuration", "dc/d83/a01254.html#shell-configuration", null ],
        [ "Customize Your Terminal Emulator", "dc/d83/a01254.html#customize-your-terminal-emulator", [
          [ "Fonts", "dc/d83/a01254.html#fonts", null ],
          [ "Example Terminal Configurations", "dc/d83/a01254.html#example-terminal-configurations", [
            [ "Ghostty Configuration", "dc/d83/a01254.html#ghostty-configuration-1", null ],
            [ "Kitty Configuration", "dc/d83/a01254.html#kitty-configuration", null ],
            [ "Alacritty Configuration", "dc/d83/a01254.html#alacritty-configuration", null ]
          ] ]
        ] ]
      ] ],
      [ "Additional Resources", "dc/d83/a01254.html#additional-resources", [
        [ "Let's Get Rusty", "dc/d83/a01254.html#lets-get-rusty", null ],
        [ "Folke", "dc/d83/a01254.html#folke", null ],
        [ "Other Resources", "dc/d83/a01254.html#other-resources", null ]
      ] ],
      [ "Conclusion", "dc/d83/a01254.html#conclusion", null ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "dc/d83/a01254.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-3", null ]
    ] ],
    [ "Frequently Asked Questions", "d7/d88/a01255.html", [
      [ "Table of Contents", "d7/d88/a01255.html#table-of-contents-2", null ],
      [ "lf is fast, but I rely on find's features", "d7/d88/a01255.html#lf-is-fast-but-i-rely-on-finds-features", null ],
      [ "Can lf match files with multiple suffixes", "d7/d88/a01255.html#can-lf-match-files-with-multiple-suffixes", null ],
      [ "Drop-down and Pop-up Menus, Forms, Pickers, Views, Ckeys, etc.", "d7/d88/a01255.html#drop-down-and-pop-up-menus-forms-pickers-views-ckeys-etc", null ],
      [ "Sorted lf Output", "d7/d88/a01255.html#sorted-lf-output", null ],
      [ "Multiple Executables", "d7/d88/a01255.html#multiple-executables", null ],
      [ "Static Executables", "d7/d88/a01255.html#static-executables", null ],
      [ "What's the Icon?", "d7/d88/a01255.html#whats-the-icon", null ],
      [ "C-Menu's File Structure", "d7/d88/a01255.html#c-menus-file-structure", null ],
      [ "Some Menu Selections Don't work", "d7/d88/a01255.html#some-menu-selections-dont-work", [
        [ "Visual Aids Soap-box", "d7/d88/a01255.html#visual-aids-soap-box", null ]
      ] ],
      [ "High Precision Math With C-Menu and Gawk", "d7/d88/a01255.html#high-precision-math-with-c-menu-and-gawk", null ],
      [ "TrueColor Support", "d7/d88/a01255.html#truecolor-support", null ],
      [ "Why View Displays Question Marks", "d7/d88/a01255.html#why-view-displays-question-marks", null ],
      [ "View - How to Colorize Manual Pages", "d7/d88/a01255.html#view---how-to-colorize-manual-pages", null ],
      [ "View - How to Colorize HTML Color Codes", "d7/d88/a01255.html#view---how-to-colorize-html-color-codes", null ],
      [ "View - How to Customize Colors", "d7/d88/a01255.html#view---how-to-customize-colors", null ],
      [ "Menu, Form, Pick, and View API", "d7/d88/a01255.html#menu-form-pick-and-view-api", null ],
      [ "View - How to Use Tree-Sitter with View", "d7/d88/a01255.html#view---how-to-use-tree-sitter-with-view", null ],
      [ "Install Tree-Sitter-CLI", "d7/d88/a01255.html#install-tree-sitter-cli", [
        [ "Download From Github", "d7/d88/a01255.html#download-from-github", null ]
      ] ],
      [ "Menu Form - Integrating External Executables", "d7/d88/a01255.html#menu-form---integrating-external-executables", null ],
      [ "Menu - Using the Installment Loan Calculator", "d7/d88/a01255.html#menu---using-the-installment-loan-calculator", null ],
      [ "Menu Form - Line Type Speecifiers (H, T, F, and ?)", "d7/d88/a01255.html#menu-form---line-type-speecifiers-h-t-f-and-", null ],
      [ "Menu Form - Field Delimiters", "d7/d88/a01255.html#menu-form---field-delimiters", null ],
      [ "Menu Form - Data Types", "d7/d88/a01255.html#menu-form---data-types", null ],
      [ "Menu - Interprocess Communications", "d7/d88/a01255.html#menu---interprocess-communications", null ],
      [ "Menu - What Happened to Delete by Inode", "d7/d88/a01255.html#menu---what-happened-to-delete-by-inode", null ],
      [ "Pick - Selecting Multiple Files", "d7/d88/a01255.html#pick---selecting-multiple-files", null ],
      [ "Menu lf - Where Are My Header Files?", "d7/d88/a01255.html#menu-lf---where-are-my-header-files", null ],
      [ "View In a Box Window", "d7/d88/a01255.html#view-in-a-box-window", null ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d7/d88/a01255.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-4", null ]
    ] ],
    [ "Installation Guide", "d6/d0f/a01256.html", [
      [ "Introduction", "d6/d0f/a01256.html#introduction-3", null ],
      [ "C-Menu Binaries for Linux x86_64", "d6/d0f/a01256.html#c-menu-binaries-for-linux-x86_64", null ],
      [ "Build C-Menu from Source", "d6/d0f/a01256.html#build-c-menu-from-source", [
        [ "Finish the installation", "d6/d0f/a01256.html#finish-the-installation", null ]
      ] ],
      [ "🐸 Enjoy using C-Menu! If you encounter any issues or have questions, feel free to open an issue on the C-Menu GitHub repository.", "d6/d0f/a01256.html#autotoc_md-enjoy-using-c-menu-if-you-encounter-any-issues-or-have-questions-feel-free-to-open-an-issue-on-the-c-menu-github-repository-5", null ]
    ] ],
    [ "A User Interface Toolkit", "d9/de7/a01257.html", [
      [ "Other C-Menu Documents", "d9/de7/a01257.html#other-c-menu-documents", null ],
      [ "Get C-Menu on Github", "d9/de7/a01257.html#get-c-menu-on-github-3", [
        [ "C-Menu Introduction", "d9/de7/a01257.html#c-menu-introduction", null ]
      ] ],
      [ "<b><em>NEW Features</em></b>", "d9/de7/a01257.html#_new-features_", [
        [ "<b><em>NEW View Line Numbering</em></b>", "d9/de7/a01257.html#_new-view-line-numbering_", null ],
        [ "Large Log File in View", "d9/de7/a01257.html#large-log-file-in-view", null ],
        [ "<b><em>New API Integration With Neovim</em></b>", "d9/de7/a01257.html#_new-api-integration-with-neovim_", null ],
        [ "<b><em>New Options for lf</em></b>", "d9/de7/a01257.html#_new-options-for-lf_", null ]
      ] ],
      [ "C-Menu Exercises", "d9/de7/a01257.html#c-menu-exercises", null ],
      [ "Menu, Form, Pick, View, C-Keys, RSH, and lf", "d9/de7/a01257.html#menu-form-pick-view-c-keys-rsh-and-lf", [
        [ "C-Menu API", "d9/de7/a01257.html#c-menu-api", null ],
        [ "Elements of C-Menu", "d9/de7/a01257.html#elements-of-c-menu", null ],
        [ "Key Features", "d9/de7/a01257.html#key-features", null ],
        [ "Highlights (Pun Intended)", "d9/de7/a01257.html#highlights-pun-intended", null ],
        [ "Just Do It!", "d9/de7/a01257.html#just-do-it", null ],
        [ "Menu", "d9/de7/a01257.html#menu", null ],
        [ "C-Keys - Diagnose Keyboard/Mouse Input", "d9/de7/a01257.html#c-keys---diagnose-keyboardmouse-input", null ],
        [ "Pick - A Picker", "d9/de7/a01257.html#pick---a-picker", null ],
        [ "Form for Data Entry and Editing", "d9/de7/a01257.html#form-for-data-entry-and-editing", null ],
        [ "Form Key Features", "d9/de7/a01257.html#form-key-features", null ],
        [ "Form Data Types", "d9/de7/a01257.html#form-data-types-1", null ],
        [ "Sample Menu Description File", "d9/de7/a01257.html#sample-menu-description-file", null ],
        [ "View", "d9/de7/a01257.html#view", [
          [ "Log File With Editor", "d9/de7/a01257.html#log-file-with-editor", null ],
          [ "Screenshot of the Same File With View", "d9/de7/a01257.html#screenshot-of-the-same-file-with-view", null ]
        ] ],
        [ "View and Color Manual Pages", "d9/de7/a01257.html#view-and-color-manual-pages", null ],
        [ "Example Manual Page Using Editor", "d9/de7/a01257.html#example-manual-page-using-editor", null ],
        [ "Example Manual Page", "d9/de7/a01257.html#example-manual-page", null ],
        [ "Demand Paged Virtual Address Space", "d9/de7/a01257.html#demand-paged-virtual-address-space", null ],
        [ "View - Other Features", "d9/de7/a01257.html#view---other-features", null ],
        [ "3-Channel Gamma Correction", "d9/de7/a01257.html#autotoc_md3-channel-gamma-correction", null ],
        [ "Gray Gamma", "d9/de7/a01257.html#gray-gamma", null ],
        [ "RSH", "d9/de7/a01257.html#rsh", null ],
        [ "Maintaining Security with RSH", "d9/de7/a01257.html#maintaining-security-with-rsh", null ],
        [ "lf - List Files Using Regular Expressions", "d9/de7/a01257.html#lf---list-files-using-regular-expressions", null ]
      ] ],
      [ "Features", "d9/de7/a01257.html#features", null ],
      [ "Configuration", "d9/de7/a01257.html#configuration", null ],
      [ "MIT License", "d9/de7/a01257.html#mit-license", null ]
    ] ],
    [ "C-Menu ROADMAP", "da/da1/a01258.html", [
      [ "0.3.0 On the Horizon", "da/da1/a01258.html#autotoc_md030-on-the-horizon", [
        [ "Asynchronous Communication and Serialization", "da/da1/a01258.html#asynchronous-communication-and-serialization", null ]
      ] ],
      [ "0.2.9 Wrap-Up", "da/da1/a01258.html#autotoc_md029-wrap-up", null ],
      [ "0.2.9 - Pre-Release", "da/da1/a01258.html#autotoc_md029---pre-release", [
        [ "Form", "da/da1/a01258.html#form", null ],
        [ "Pick", "da/da1/a01258.html#pick", null ],
        [ "Exercises - Example Use Cases", "da/da1/a01258.html#exercises---example-use-cases", null ],
        [ "View", "da/da1/a01258.html#view-1", null ]
      ] ],
      [ "1.0.0 - Initial Release", "da/da1/a01258.html#autotoc_md100---initial-release", [
        [ "General", "da/da1/a01258.html#general", null ]
      ] ],
      [ "1.1.0 - Feature Enhancements", "da/da1/a01258.html#autotoc_md110---feature-enhancements", [
        [ "General", "da/da1/a01258.html#general-1", null ]
      ] ]
    ] ],
    [ "Configuration snippets", "dd/d42/a01259.html", [
      [ "Table of Contents", "dd/d42/a01259.html#table-of-contents-3", null ],
      [ "C-Menu Desktop Files", "dd/d42/a01259.html#c-menu-desktop-files", null ],
      [ "C-Menu bashrc Configuration", "dd/d42/a01259.html#c-menu-bashrc-configuration", [
        [ "Shell Logging", "dd/d42/a01259.html#shell-logging", null ],
        [ "Prepend Path", "dd/d42/a01259.html#prepend-path", null ],
        [ "Helpful C-Menu Environment Variables", "dd/d42/a01259.html#helpful-c-menu-environment-variables", null ],
        [ "Security Through Obscurity", "dd/d42/a01259.html#security-through-obscurity", null ],
        [ "RSH Helpers", "dd/d42/a01259.html#rsh-helpers", null ],
        [ "Privilege Indicator Shell Prompts", "dd/d42/a01259.html#privilege-indicator-shell-prompts", null ],
        [ "Terminal and Editor Settings", "dd/d42/a01259.html#terminal-and-editor-settings", null ],
        [ "GDB Debugging Setup", "dd/d42/a01259.html#gdb-debugging-setup", null ],
        [ "If You Can't Stop Typing \"vi\"", "dd/d42/a01259.html#if-you-cant-stop-typing-vi", null ],
        [ "C-Menu Startup with \"mm\"", "dd/d42/a01259.html#c-menu-startup-with-mm", null ],
        [ "Curses Escape Delay", "dd/d42/a01259.html#curses-escape-delay", null ],
        [ "Use lsd instead of ls", "dd/d42/a01259.html#use-lsd-instead-of-ls", null ],
        [ "Locale Settings", "dd/d42/a01259.html#locale-settings", null ],
        [ "System Specific Environment Variables", "dd/d42/a01259.html#system-specific-environment-variables", null ]
      ] ],
      [ "C-Menu Configuration", "dd/d42/a01259.html#c-menu-configuration-1", null ],
      [ "Terminal Configurations", "dd/d42/a01259.html#terminal-configurations", [
        [ "Ghostty", "dd/d42/a01259.html#ghostty-1", null ],
        [ "Kitty", "dd/d42/a01259.html#kitty", null ],
        [ "Alacritty", "dd/d42/a01259.html#alacritty", null ]
      ] ],
      [ "Tree-Sitter", "dd/d42/a01259.html#tree-sitter-1", [
        [ "Tree-Sitter config.json", "dd/d42/a01259.html#tree-sitter-configjson", null ]
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
        [ "Variables", "globals_vars.html", "globals_vars" ],
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
"d4/d22/a01250.html#roadmap-for-api-documentation-and-user-guide",
"d8/db9/a00725.html#a0882b20213d1ebf14d860e611d06cf36",
"d8/ded/a01113.html#ae8d37fb7ea25f265d5f9480c8d5f9faf",
"dc/d83/a01254.html#fonts",
"dd/df1/a01082.html",
"functions_vars_e.html"
];

const SYNCONMSG = 'click to disable panel synchronization';
const SYNCOFFMSG = 'click to enable panel synchronization';
const LISTOFALLMEMBERS = 'List of all members';